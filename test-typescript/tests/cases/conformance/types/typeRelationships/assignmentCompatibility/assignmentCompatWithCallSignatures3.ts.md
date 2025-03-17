__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 106,
  "end": 2996,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 106,
      "end": 133,
      "id": {
        "type": "Identifier",
        "start": 112,
        "end": 116,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 117,
        "end": 133,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 119,
            "end": 131,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 119,
              "end": 122,
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
              "start": 122,
              "end": 130,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 124,
                "end": 130
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
      "start": 134,
      "end": 177,
      "id": {
        "type": "Identifier",
        "start": 140,
        "end": 147,
        "name": "Derived",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 156,
        "end": 160,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 161,
        "end": 177,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 163,
            "end": 175,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 163,
              "end": 166,
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
              "start": 166,
              "end": 174,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 168,
                "end": 174
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
      "start": 178,
      "end": 225,
      "id": {
        "type": "Identifier",
        "start": 184,
        "end": 192,
        "name": "Derived2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 201,
        "end": 208,
        "name": "Derived",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 209,
        "end": 225,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 211,
            "end": 223,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 211,
              "end": 214,
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
              "start": 214,
              "end": 222,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 216,
                "end": 222
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
      "start": 226,
      "end": 275,
      "id": {
        "type": "Identifier",
        "start": 232,
        "end": 244,
        "name": "OtherDerived",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 253,
        "end": 257,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 258,
        "end": 275,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 260,
            "end": 273,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 260,
              "end": 264,
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
              "start": 264,
              "end": 272,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 266,
                "end": 272
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
      "start": 277,
      "end": 308,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 281,
          "end": 307,
          "id": {
            "type": "Identifier",
            "start": 281,
            "end": 307,
            "name": "a",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 282,
              "end": 307,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 284,
                "end": 307,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 285,
                    "end": 294,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 286,
                      "end": 294,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 288,
                        "end": 294
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 296,
                  "end": 307,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 299,
                    "end": 307,
                    "elementType": {
                      "type": "TSNumberKeyword",
                      "start": 299,
                      "end": 305
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
      "start": 309,
      "end": 341,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 313,
          "end": 340,
          "id": {
            "type": "Identifier",
            "start": 313,
            "end": 340,
            "name": "a2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 315,
              "end": 340,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 317,
                "end": 340,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 318,
                    "end": 327,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 319,
                      "end": 327,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 321,
                        "end": 327
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 329,
                  "end": 340,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 332,
                    "end": 340,
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 332,
                      "end": 338
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
      "start": 342,
      "end": 370,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 346,
          "end": 369,
          "id": {
            "type": "Identifier",
            "start": 346,
            "end": 369,
            "name": "a3",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 348,
              "end": 369,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 350,
                "end": 369,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 351,
                    "end": 360,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 352,
                      "end": 360,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 354,
                        "end": 360
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 362,
                  "end": 369,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 365,
                    "end": 369
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
      "start": 371,
      "end": 412,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 375,
          "end": 411,
          "id": {
            "type": "Identifier",
            "start": 375,
            "end": 411,
            "name": "a4",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 377,
              "end": 411,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 379,
                "end": 411,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 380,
                    "end": 389,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 381,
                      "end": 389,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 383,
                        "end": 389
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 391,
                    "end": 400,
                    "name": "y",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 392,
                      "end": 400,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 394,
                        "end": 400
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 402,
                  "end": 411,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 405,
                    "end": 411
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
      "start": 413,
      "end": 460,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 417,
          "end": 459,
          "id": {
            "type": "Identifier",
            "start": 417,
            "end": 459,
            "name": "a5",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 419,
              "end": 459,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 421,
                "end": 459,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 422,
                    "end": 448,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 423,
                      "end": 448,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 425,
                        "end": 448,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 426,
                            "end": 437,
                            "name": "arg",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 429,
                              "end": 437,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 431,
                                "end": 437
                              }
                            },
                            "decorators": [],
                            "optional": false
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 439,
                          "end": 448,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 442,
                            "end": 448
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
                  "start": 450,
                  "end": 459,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 453,
                    "end": 459
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
      "start": 461,
      "end": 505,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 465,
          "end": 504,
          "id": {
            "type": "Identifier",
            "start": 465,
            "end": 504,
            "name": "a6",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 467,
              "end": 504,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 469,
                "end": 504,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 470,
                    "end": 495,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 471,
                      "end": 495,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 473,
                        "end": 495,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 474,
                            "end": 483,
                            "name": "arg",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 477,
                              "end": 483,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 479,
                                "end": 483,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 479,
                                  "end": 483,
                                  "name": "Base",
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
                  "end": 504,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 500,
                    "end": 504,
                    "typeName": {
                      "type": "Identifier",
                      "start": 500,
                      "end": 504,
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
      "start": 506,
      "end": 566,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 510,
          "end": 565,
          "id": {
            "type": "Identifier",
            "start": 510,
            "end": 565,
            "name": "a7",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 512,
              "end": 565,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 514,
                "end": 565,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 515,
                    "end": 540,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 516,
                      "end": 540,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 518,
                        "end": 540,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 519,
                            "end": 528,
                            "name": "arg",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 522,
                              "end": 528,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 524,
                                "end": 528,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 524,
                                  "end": 528,
                                  "name": "Base",
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
                          "start": 530,
                          "end": 540,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 533,
                            "end": 540,
                            "typeName": {
                              "type": "Identifier",
                              "start": 533,
                              "end": 540,
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
                  "start": 542,
                  "end": 565,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 545,
                    "end": 565,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 546,
                        "end": 553,
                        "name": "r",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 547,
                          "end": 553,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 549,
                            "end": 553,
                            "typeName": {
                              "type": "Identifier",
                              "start": 549,
                              "end": 553,
                              "name": "Base",
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
                      "start": 555,
                      "end": 565,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 558,
                        "end": 565,
                        "typeName": {
                          "type": "Identifier",
                          "start": 558,
                          "end": 565,
                          "name": "Derived",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
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
      "start": 567,
      "end": 655,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 571,
          "end": 654,
          "id": {
            "type": "Identifier",
            "start": 571,
            "end": 654,
            "name": "a8",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 573,
              "end": 654,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 575,
                "end": 654,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 576,
                    "end": 601,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 577,
                      "end": 601,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 579,
                        "end": 601,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 580,
                            "end": 589,
                            "name": "arg",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 583,
                              "end": 589,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 585,
                                "end": 589,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 585,
                                  "end": 589,
                                  "name": "Base",
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
                          "start": 591,
                          "end": 601,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 594,
                            "end": 601,
                            "typeName": {
                              "type": "Identifier",
                              "start": 594,
                              "end": 601,
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
                  },
                  {
                    "type": "Identifier",
                    "start": 603,
                    "end": 629,
                    "name": "y",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 604,
                      "end": 629,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 606,
                        "end": 629,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 607,
                            "end": 617,
                            "name": "arg2",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 611,
                              "end": 617,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 613,
                                "end": 617,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 613,
                                  "end": 617,
                                  "name": "Base",
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
                          "start": 619,
                          "end": 629,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 622,
                            "end": 629,
                            "typeName": {
                              "type": "Identifier",
                              "start": 622,
                              "end": 629,
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
                  "start": 631,
                  "end": 654,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 634,
                    "end": 654,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 635,
                        "end": 642,
                        "name": "r",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 636,
                          "end": 642,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 638,
                            "end": 642,
                            "typeName": {
                              "type": "Identifier",
                              "start": 638,
                              "end": 642,
                              "name": "Base",
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
                      "start": 644,
                      "end": 654,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 647,
                        "end": 654,
                        "typeName": {
                          "type": "Identifier",
                          "start": 647,
                          "end": 654,
                          "name": "Derived",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
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
      "start": 656,
      "end": 744,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 660,
          "end": 743,
          "id": {
            "type": "Identifier",
            "start": 660,
            "end": 743,
            "name": "a9",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 662,
              "end": 743,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 664,
                "end": 743,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 665,
                    "end": 690,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 666,
                      "end": 690,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 668,
                        "end": 690,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 669,
                            "end": 678,
                            "name": "arg",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 672,
                              "end": 678,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 674,
                                "end": 678,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 674,
                                  "end": 678,
                                  "name": "Base",
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
                          "start": 680,
                          "end": 690,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 683,
                            "end": 690,
                            "typeName": {
                              "type": "Identifier",
                              "start": 683,
                              "end": 690,
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
                  },
                  {
                    "type": "Identifier",
                    "start": 692,
                    "end": 718,
                    "name": "y",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 693,
                      "end": 718,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 695,
                        "end": 718,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 696,
                            "end": 706,
                            "name": "arg2",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 700,
                              "end": 706,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 702,
                                "end": 706,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 702,
                                  "end": 706,
                                  "name": "Base",
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
                          "start": 708,
                          "end": 718,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 711,
                            "end": 718,
                            "typeName": {
                              "type": "Identifier",
                              "start": 711,
                              "end": 718,
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
                  "start": 720,
                  "end": 743,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 723,
                    "end": 743,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 724,
                        "end": 731,
                        "name": "r",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 725,
                          "end": 731,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 727,
                            "end": 731,
                            "typeName": {
                              "type": "Identifier",
                              "start": 727,
                              "end": 731,
                              "name": "Base",
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
                      "start": 733,
                      "end": 743,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 736,
                        "end": 743,
                        "typeName": {
                          "type": "Identifier",
                          "start": 736,
                          "end": 743,
                          "name": "Derived",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
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
      "start": 745,
      "end": 783,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 749,
          "end": 782,
          "id": {
            "type": "Identifier",
            "start": 749,
            "end": 782,
            "name": "a10",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 752,
              "end": 782,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 754,
                "end": 782,
                "typeParameters": null,
                "params": [
                  {
                    "type": "RestElement",
                    "start": 755,
                    "end": 770,
                    "argument": {
                      "type": "Identifier",
                      "start": 758,
                      "end": 759,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "decorators": [],
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 759,
                      "end": 770,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 761,
                        "end": 770,
                        "elementType": {
                          "type": "TSTypeReference",
                          "start": 761,
                          "end": 768,
                          "typeName": {
                            "type": "Identifier",
                            "start": 761,
                            "end": 768,
                            "name": "Derived",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
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
                  "start": 772,
                  "end": 782,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 775,
                    "end": 782,
                    "typeName": {
                      "type": "Identifier",
                      "start": 775,
                      "end": 782,
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
      "start": 784,
      "end": 855,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 788,
          "end": 854,
          "id": {
            "type": "Identifier",
            "start": 788,
            "end": 854,
            "name": "a11",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 791,
              "end": 854,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 793,
                "end": 854,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 794,
                    "end": 812,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 795,
                      "end": 812,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 797,
                        "end": 812,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 799,
                            "end": 810,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 799,
                              "end": 802,
                              "name": "foo",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 802,
                              "end": 810,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 804,
                                "end": 810
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
                    "start": 814,
                    "end": 845,
                    "name": "y",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 815,
                      "end": 845,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 817,
                        "end": 845,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 819,
                            "end": 831,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 819,
                              "end": 822,
                              "name": "foo",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 822,
                              "end": 830,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 824,
                                "end": 830
                              }
                            },
                            "accessibility": null,
                            "static": false
                          },
                          {
                            "type": "TSPropertySignature",
                            "start": 832,
                            "end": 843,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 832,
                              "end": 835,
                              "name": "bar",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 835,
                              "end": 843,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 837,
                                "end": 843
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
                  "start": 847,
                  "end": 854,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 850,
                    "end": 854,
                    "typeName": {
                      "type": "Identifier",
                      "start": 850,
                      "end": 854,
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
      "start": 856,
      "end": 920,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 860,
          "end": 919,
          "id": {
            "type": "Identifier",
            "start": 860,
            "end": 919,
            "name": "a12",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 863,
              "end": 919,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 865,
                "end": 919,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 866,
                    "end": 880,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 867,
                      "end": 880,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 869,
                        "end": 880,
                        "typeName": {
                          "type": "Identifier",
                          "start": 869,
                          "end": 874,
                          "name": "Array",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 874,
                          "end": 880,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 875,
                              "end": 879,
                              "typeName": {
                                "type": "Identifier",
                                "start": 875,
                                "end": 879,
                                "name": "Base",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          ]
                        }
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 882,
                    "end": 900,
                    "name": "y",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 883,
                      "end": 900,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 885,
                        "end": 900,
                        "typeName": {
                          "type": "Identifier",
                          "start": 885,
                          "end": 890,
                          "name": "Array",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 890,
                          "end": 900,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 891,
                              "end": 899,
                              "typeName": {
                                "type": "Identifier",
                                "start": 891,
                                "end": 899,
                                "name": "Derived2",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          ]
                        }
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 902,
                  "end": 919,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 905,
                    "end": 919,
                    "typeName": {
                      "type": "Identifier",
                      "start": 905,
                      "end": 910,
                      "name": "Array",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 910,
                      "end": 919,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 911,
                          "end": 918,
                          "typeName": {
                            "type": "Identifier",
                            "start": 911,
                            "end": 918,
                            "name": "Derived",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      ]
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
      "start": 921,
      "end": 984,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 925,
          "end": 983,
          "id": {
            "type": "Identifier",
            "start": 925,
            "end": 983,
            "name": "a13",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 928,
              "end": 983,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 930,
                "end": 983,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 931,
                    "end": 945,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 932,
                      "end": 945,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 934,
                        "end": 945,
                        "typeName": {
                          "type": "Identifier",
                          "start": 934,
                          "end": 939,
                          "name": "Array",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 939,
                          "end": 945,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 940,
                              "end": 944,
                              "typeName": {
                                "type": "Identifier",
                                "start": 940,
                                "end": 944,
                                "name": "Base",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          ]
                        }
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 947,
                    "end": 964,
                    "name": "y",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 948,
                      "end": 964,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 950,
                        "end": 964,
                        "typeName": {
                          "type": "Identifier",
                          "start": 950,
                          "end": 955,
                          "name": "Array",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 955,
                          "end": 964,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 956,
                              "end": 963,
                              "typeName": {
                                "type": "Identifier",
                                "start": 956,
                                "end": 963,
                                "name": "Derived",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          ]
                        }
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 966,
                  "end": 983,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 969,
                    "end": 983,
                    "typeName": {
                      "type": "Identifier",
                      "start": 969,
                      "end": 974,
                      "name": "Array",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 974,
                      "end": 983,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 975,
                          "end": 982,
                          "typeName": {
                            "type": "Identifier",
                            "start": 975,
                            "end": 982,
                            "name": "Derived",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      ]
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
      "start": 985,
      "end": 1034,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 989,
          "end": 1033,
          "id": {
            "type": "Identifier",
            "start": 989,
            "end": 1033,
            "name": "a14",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 992,
              "end": 1033,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 994,
                "end": 1033,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 995,
                    "end": 1022,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 996,
                      "end": 1022,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 998,
                        "end": 1022,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 1000,
                            "end": 1010,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 1000,
                              "end": 1001,
                              "name": "a",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1001,
                              "end": 1009,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 1003,
                                "end": 1009
                              }
                            },
                            "accessibility": null,
                            "static": false
                          },
                          {
                            "type": "TSPropertySignature",
                            "start": 1011,
                            "end": 1020,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 1011,
                              "end": 1012,
                              "name": "b",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1012,
                              "end": 1020,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 1014,
                                "end": 1020
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
                  "start": 1024,
                  "end": 1033,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1027,
                    "end": 1033,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1027,
                      "end": 1033,
                      "name": "Object",
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
      "start": 1035,
      "end": 1101,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1039,
          "end": 1101,
          "id": {
            "type": "Identifier",
            "start": 1039,
            "end": 1101,
            "name": "a15",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1042,
              "end": 1101,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 1044,
                "end": 1101,
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 1050,
                    "end": 1072,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1051,
                        "end": 1060,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1052,
                          "end": 1060,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 1054,
                            "end": 1060
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 1061,
                      "end": 1071,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 1063,
                        "end": 1071,
                        "elementType": {
                          "type": "TSNumberKeyword",
                          "start": 1063,
                          "end": 1069
                        }
                      }
                    }
                  },
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 1077,
                    "end": 1099,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1078,
                        "end": 1087,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1079,
                          "end": 1087,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 1081,
                            "end": 1087
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 1088,
                      "end": 1098,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 1090,
                        "end": 1098,
                        "elementType": {
                          "type": "TSStringKeyword",
                          "start": 1090,
                          "end": 1096
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
      "start": 1102,
      "end": 1193,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1106,
          "end": 1193,
          "id": {
            "type": "Identifier",
            "start": 1106,
            "end": 1193,
            "name": "a16",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1109,
              "end": 1193,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 1111,
                "end": 1193,
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 1117,
                    "end": 1153,
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 1117,
                      "end": 1136,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 1118,
                          "end": 1135,
                          "name": {
                            "type": "Identifier",
                            "start": 1118,
                            "end": 1119,
                            "name": "T",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "constraint": {
                            "type": "TSTypeReference",
                            "start": 1128,
                            "end": 1135,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1128,
                              "end": 1135,
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
                        "start": 1137,
                        "end": 1141,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1138,
                          "end": 1141,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 1140,
                            "end": 1141,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1140,
                              "end": 1141,
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
                      "start": 1142,
                      "end": 1152,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 1144,
                        "end": 1152,
                        "elementType": {
                          "type": "TSNumberKeyword",
                          "start": 1144,
                          "end": 1150
                        }
                      }
                    }
                  },
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 1158,
                    "end": 1191,
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 1158,
                      "end": 1174,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 1159,
                          "end": 1173,
                          "name": {
                            "type": "Identifier",
                            "start": 1159,
                            "end": 1160,
                            "name": "U",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "constraint": {
                            "type": "TSTypeReference",
                            "start": 1169,
                            "end": 1173,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1169,
                              "end": 1173,
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
                        "start": 1175,
                        "end": 1179,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1176,
                          "end": 1179,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 1178,
                            "end": 1179,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1178,
                              "end": 1179,
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
                      "start": 1180,
                      "end": 1190,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 1182,
                        "end": 1190,
                        "elementType": {
                          "type": "TSNumberKeyword",
                          "start": 1182,
                          "end": 1188
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
      "start": 1194,
      "end": 1291,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1198,
          "end": 1290,
          "id": {
            "type": "Identifier",
            "start": 1198,
            "end": 1290,
            "name": "a17",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1201,
              "end": 1290,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 1203,
                "end": 1290,
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 1209,
                    "end": 1246,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1210,
                        "end": 1234,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1211,
                          "end": 1234,
                          "typeAnnotation": {
                            "type": "TSFunctionType",
                            "start": 1213,
                            "end": 1234,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 1214,
                                "end": 1223,
                                "name": "a",
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 1215,
                                  "end": 1223,
                                  "typeAnnotation": {
                                    "type": "TSNumberKeyword",
                                    "start": 1217,
                                    "end": 1223
                                  }
                                },
                                "decorators": [],
                                "optional": false
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "start": 1225,
                              "end": 1234,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 1228,
                                "end": 1234
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
                      "start": 1235,
                      "end": 1245,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 1237,
                        "end": 1245,
                        "elementType": {
                          "type": "TSNumberKeyword",
                          "start": 1237,
                          "end": 1243
                        }
                      }
                    }
                  },
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 1251,
                    "end": 1288,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1252,
                        "end": 1276,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1253,
                          "end": 1276,
                          "typeAnnotation": {
                            "type": "TSFunctionType",
                            "start": 1255,
                            "end": 1276,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 1256,
                                "end": 1265,
                                "name": "a",
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 1257,
                                  "end": 1265,
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 1259,
                                    "end": 1265
                                  }
                                },
                                "decorators": [],
                                "optional": false
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "start": 1267,
                              "end": 1276,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 1270,
                                "end": 1276
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
                      "start": 1277,
                      "end": 1287,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 1279,
                        "end": 1287,
                        "elementType": {
                          "type": "TSStringKeyword",
                          "start": 1279,
                          "end": 1285
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
      "start": 1292,
      "end": 1468,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1296,
          "end": 1468,
          "id": {
            "type": "Identifier",
            "start": 1296,
            "end": 1468,
            "name": "a18",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1299,
              "end": 1468,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 1301,
                "end": 1468,
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 1307,
                    "end": 1385,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1308,
                        "end": 1376,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1309,
                          "end": 1376,
                          "typeAnnotation": {
                            "type": "TSTypeLiteral",
                            "start": 1311,
                            "end": 1376,
                            "members": [
                              {
                                "type": "TSCallSignatureDeclaration",
                                "start": 1321,
                                "end": 1341,
                                "typeParameters": null,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "start": 1322,
                                    "end": 1331,
                                    "name": "a",
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 1323,
                                      "end": 1331,
                                      "typeAnnotation": {
                                        "type": "TSNumberKeyword",
                                        "start": 1325,
                                        "end": 1331
                                      }
                                    },
                                    "decorators": [],
                                    "optional": false
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "start": 1332,
                                  "end": 1340,
                                  "typeAnnotation": {
                                    "type": "TSNumberKeyword",
                                    "start": 1334,
                                    "end": 1340
                                  }
                                }
                              },
                              {
                                "type": "TSCallSignatureDeclaration",
                                "start": 1350,
                                "end": 1370,
                                "typeParameters": null,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "start": 1351,
                                    "end": 1360,
                                    "name": "a",
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 1352,
                                      "end": 1360,
                                      "typeAnnotation": {
                                        "type": "TSStringKeyword",
                                        "start": 1354,
                                        "end": 1360
                                      }
                                    },
                                    "decorators": [],
                                    "optional": false
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "start": 1361,
                                  "end": 1369,
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 1363,
                                    "end": 1369
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
                      "start": 1377,
                      "end": 1384,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 1379,
                        "end": 1384,
                        "elementType": {
                          "type": "TSAnyKeyword",
                          "start": 1379,
                          "end": 1382
                        }
                      }
                    }
                  },
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 1390,
                    "end": 1466,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1391,
                        "end": 1457,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1392,
                          "end": 1457,
                          "typeAnnotation": {
                            "type": "TSTypeLiteral",
                            "start": 1394,
                            "end": 1457,
                            "members": [
                              {
                                "type": "TSCallSignatureDeclaration",
                                "start": 1404,
                                "end": 1426,
                                "typeParameters": null,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "start": 1405,
                                    "end": 1415,
                                    "name": "a",
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 1406,
                                      "end": 1415,
                                      "typeAnnotation": {
                                        "type": "TSBooleanKeyword",
                                        "start": 1408,
                                        "end": 1415
                                      }
                                    },
                                    "decorators": [],
                                    "optional": false
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "start": 1416,
                                  "end": 1425,
                                  "typeAnnotation": {
                                    "type": "TSBooleanKeyword",
                                    "start": 1418,
                                    "end": 1425
                                  }
                                }
                              },
                              {
                                "type": "TSCallSignatureDeclaration",
                                "start": 1435,
                                "end": 1451,
                                "typeParameters": null,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "start": 1436,
                                    "end": 1443,
                                    "name": "a",
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 1437,
                                      "end": 1443,
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "start": 1439,
                                        "end": 1443,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 1439,
                                          "end": 1443,
                                          "name": "Date",
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
                                  "start": 1444,
                                  "end": 1450,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 1446,
                                    "end": 1450,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 1446,
                                      "end": 1450,
                                      "name": "Date",
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
                      "start": 1458,
                      "end": 1465,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 1460,
                        "end": 1465,
                        "elementType": {
                          "type": "TSAnyKeyword",
                          "start": 1460,
                          "end": 1463
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
      "start": 1470,
      "end": 1494,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1474,
          "end": 1493,
          "id": {
            "type": "Identifier",
            "start": 1474,
            "end": 1493,
            "name": "b",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1475,
              "end": 1493,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 1477,
                "end": 1493,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 1477,
                  "end": 1480,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 1478,
                      "end": 1479,
                      "name": {
                        "type": "Identifier",
                        "start": 1478,
                        "end": 1479,
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
                    "start": 1481,
                    "end": 1485,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1482,
                      "end": 1485,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1484,
                        "end": 1485,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1484,
                          "end": 1485,
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
                  "start": 1487,
                  "end": 1493,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 1490,
                    "end": 1493,
                    "elementType": {
                      "type": "TSTypeReference",
                      "start": 1490,
                      "end": 1491,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1490,
                        "end": 1491,
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
      "start": 1496,
      "end": 1502,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1496,
        "end": 1501,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1496,
          "end": 1497,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 1500,
          "end": 1501,
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
      "start": 1509,
      "end": 1515,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1509,
        "end": 1514,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1509,
          "end": 1510,
          "name": "b",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 1513,
          "end": 1514,
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
      "start": 1522,
      "end": 1552,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1526,
          "end": 1551,
          "id": {
            "type": "Identifier",
            "start": 1526,
            "end": 1551,
            "name": "b2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1528,
              "end": 1551,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 1530,
                "end": 1551,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 1530,
                  "end": 1533,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 1531,
                      "end": 1532,
                      "name": {
                        "type": "Identifier",
                        "start": 1531,
                        "end": 1532,
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
                    "start": 1534,
                    "end": 1538,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1535,
                      "end": 1538,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1537,
                        "end": 1538,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1537,
                          "end": 1538,
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
                  "start": 1540,
                  "end": 1551,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 1543,
                    "end": 1551,
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 1543,
                      "end": 1549
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
      "start": 1554,
      "end": 1562,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1554,
        "end": 1561,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1554,
          "end": 1556,
          "name": "a2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 1559,
          "end": 1561,
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
      "start": 1570,
      "end": 1578,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1570,
        "end": 1577,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1570,
          "end": 1572,
          "name": "b2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 1575,
          "end": 1577,
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
      "start": 1585,
      "end": 1608,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1589,
          "end": 1607,
          "id": {
            "type": "Identifier",
            "start": 1589,
            "end": 1607,
            "name": "b3",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1591,
              "end": 1607,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 1593,
                "end": 1607,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 1593,
                  "end": 1596,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 1594,
                      "end": 1595,
                      "name": {
                        "type": "Identifier",
                        "start": 1594,
                        "end": 1595,
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
                    "start": 1597,
                    "end": 1601,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1598,
                      "end": 1601,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1600,
                        "end": 1601,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1600,
                          "end": 1601,
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
                  "start": 1603,
                  "end": 1607,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1606,
                    "end": 1607,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1606,
                      "end": 1607,
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
      "start": 1610,
      "end": 1618,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1610,
        "end": 1617,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1610,
          "end": 1612,
          "name": "a3",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 1615,
          "end": 1617,
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
      "start": 1625,
      "end": 1633,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1625,
        "end": 1632,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1625,
          "end": 1627,
          "name": "b3",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 1630,
          "end": 1632,
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
      "start": 1640,
      "end": 1672,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1644,
          "end": 1671,
          "id": {
            "type": "Identifier",
            "start": 1644,
            "end": 1671,
            "name": "b4",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1646,
              "end": 1671,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 1648,
                "end": 1671,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 1648,
                  "end": 1654,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 1649,
                      "end": 1650,
                      "name": {
                        "type": "Identifier",
                        "start": 1649,
                        "end": 1650,
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
                      "start": 1652,
                      "end": 1653,
                      "name": {
                        "type": "Identifier",
                        "start": 1652,
                        "end": 1653,
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
                    "start": 1655,
                    "end": 1659,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1656,
                      "end": 1659,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1658,
                        "end": 1659,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1658,
                          "end": 1659,
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
                    "start": 1661,
                    "end": 1665,
                    "name": "y",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1662,
                      "end": 1665,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1664,
                        "end": 1665,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1664,
                          "end": 1665,
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
                  "start": 1667,
                  "end": 1671,
                  "typeAnnotation": {
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
      "start": 1674,
      "end": 1682,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1674,
        "end": 1681,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1674,
          "end": 1676,
          "name": "a4",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 1679,
          "end": 1681,
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
      "start": 1689,
      "end": 1697,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1689,
        "end": 1696,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1689,
          "end": 1691,
          "name": "b4",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 1694,
          "end": 1696,
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
      "start": 1704,
      "end": 1742,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1708,
          "end": 1741,
          "id": {
            "type": "Identifier",
            "start": 1708,
            "end": 1741,
            "name": "b5",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1710,
              "end": 1741,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 1712,
                "end": 1741,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 1712,
                  "end": 1718,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 1713,
                      "end": 1714,
                      "name": {
                        "type": "Identifier",
                        "start": 1713,
                        "end": 1714,
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
                      "start": 1716,
                      "end": 1717,
                      "name": {
                        "type": "Identifier",
                        "start": 1716,
                        "end": 1717,
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
                    "start": 1719,
                    "end": 1735,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1720,
                      "end": 1735,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 1722,
                        "end": 1735,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 1723,
                            "end": 1729,
                            "name": "arg",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1726,
                              "end": 1729,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 1728,
                                "end": 1729,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1728,
                                  "end": 1729,
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
                          "start": 1731,
                          "end": 1735,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 1734,
                            "end": 1735,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1734,
                              "end": 1735,
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
                  "start": 1737,
                  "end": 1741,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1740,
                    "end": 1741,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1740,
                      "end": 1741,
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
      "start": 1744,
      "end": 1752,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1744,
        "end": 1751,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1744,
          "end": 1746,
          "name": "a5",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 1749,
          "end": 1751,
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
      "start": 1759,
      "end": 1767,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1759,
        "end": 1766,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1759,
          "end": 1761,
          "name": "b5",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 1764,
          "end": 1766,
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
      "start": 1774,
      "end": 1841,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1778,
          "end": 1840,
          "id": {
            "type": "Identifier",
            "start": 1778,
            "end": 1840,
            "name": "b6",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1780,
              "end": 1840,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 1782,
                "end": 1840,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 1782,
                  "end": 1817,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 1783,
                      "end": 1797,
                      "name": {
                        "type": "Identifier",
                        "start": 1783,
                        "end": 1784,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 1793,
                        "end": 1797,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1793,
                          "end": 1797,
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
                      "start": 1799,
                      "end": 1816,
                      "name": {
                        "type": "Identifier",
                        "start": 1799,
                        "end": 1800,
                        "name": "U",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 1809,
                        "end": 1816,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1809,
                          "end": 1816,
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
                    "start": 1818,
                    "end": 1834,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1819,
                      "end": 1834,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 1821,
                        "end": 1834,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 1822,
                            "end": 1828,
                            "name": "arg",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1825,
                              "end": 1828,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 1827,
                                "end": 1828,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1827,
                                  "end": 1828,
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
                          "start": 1830,
                          "end": 1834,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 1833,
                            "end": 1834,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1833,
                              "end": 1834,
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
                  "start": 1836,
                  "end": 1840,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1839,
                    "end": 1840,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1839,
                      "end": 1840,
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
      "start": 1843,
      "end": 1851,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1843,
        "end": 1850,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1843,
          "end": 1845,
          "name": "a6",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 1848,
          "end": 1850,
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
      "start": 1858,
      "end": 1866,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1858,
        "end": 1865,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1858,
          "end": 1860,
          "name": "b6",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 1863,
          "end": 1865,
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
      "start": 1873,
      "end": 1950,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1877,
          "end": 1949,
          "id": {
            "type": "Identifier",
            "start": 1877,
            "end": 1949,
            "name": "b7",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1879,
              "end": 1949,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 1881,
                "end": 1949,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 1881,
                  "end": 1916,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 1882,
                      "end": 1896,
                      "name": {
                        "type": "Identifier",
                        "start": 1882,
                        "end": 1883,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 1892,
                        "end": 1896,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1892,
                          "end": 1896,
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
                      "start": 1898,
                      "end": 1915,
                      "name": {
                        "type": "Identifier",
                        "start": 1898,
                        "end": 1899,
                        "name": "U",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 1908,
                        "end": 1915,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1908,
                          "end": 1915,
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
                    "start": 1917,
                    "end": 1933,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1918,
                      "end": 1933,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 1920,
                        "end": 1933,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 1921,
                            "end": 1927,
                            "name": "arg",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1924,
                              "end": 1927,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 1926,
                                "end": 1927,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1926,
                                  "end": 1927,
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
                          "start": 1929,
                          "end": 1933,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 1932,
                            "end": 1933,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1932,
                              "end": 1933,
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
                  "start": 1935,
                  "end": 1949,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 1938,
                    "end": 1949,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1939,
                        "end": 1943,
                        "name": "r",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1940,
                          "end": 1943,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 1942,
                            "end": 1943,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1942,
                              "end": 1943,
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
                      "start": 1945,
                      "end": 1949,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1948,
                        "end": 1949,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1948,
                          "end": 1949,
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
      "start": 1952,
      "end": 1960,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1952,
        "end": 1959,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1952,
          "end": 1954,
          "name": "a7",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 1957,
          "end": 1959,
          "name": "b7",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1967,
      "end": 1975,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1967,
        "end": 1974,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1967,
          "end": 1969,
          "name": "b7",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 1972,
          "end": 1974,
          "name": "a7",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 1982,
      "end": 2078,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1986,
          "end": 2077,
          "id": {
            "type": "Identifier",
            "start": 1986,
            "end": 2077,
            "name": "b8",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1988,
              "end": 2077,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 1990,
                "end": 2077,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 1990,
                  "end": 2025,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 1991,
                      "end": 2005,
                      "name": {
                        "type": "Identifier",
                        "start": 1991,
                        "end": 1992,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 2001,
                        "end": 2005,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2001,
                          "end": 2005,
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
                      "start": 2007,
                      "end": 2024,
                      "name": {
                        "type": "Identifier",
                        "start": 2007,
                        "end": 2008,
                        "name": "U",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 2017,
                        "end": 2024,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2017,
                          "end": 2024,
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
                    "start": 2026,
                    "end": 2042,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2027,
                      "end": 2042,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 2029,
                        "end": 2042,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 2030,
                            "end": 2036,
                            "name": "arg",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 2033,
                              "end": 2036,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 2035,
                                "end": 2036,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 2035,
                                  "end": 2036,
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
                          "start": 2038,
                          "end": 2042,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 2041,
                            "end": 2042,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2041,
                              "end": 2042,
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
                  },
                  {
                    "type": "Identifier",
                    "start": 2044,
                    "end": 2061,
                    "name": "y",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2045,
                      "end": 2061,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 2047,
                        "end": 2061,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 2048,
                            "end": 2055,
                            "name": "arg2",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 2052,
                              "end": 2055,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 2054,
                                "end": 2055,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 2054,
                                  "end": 2055,
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
                          "start": 2057,
                          "end": 2061,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 2060,
                            "end": 2061,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2060,
                              "end": 2061,
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
                  "start": 2063,
                  "end": 2077,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 2066,
                    "end": 2077,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 2067,
                        "end": 2071,
                        "name": "r",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2068,
                          "end": 2071,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 2070,
                            "end": 2071,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2070,
                              "end": 2071,
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
                      "start": 2073,
                      "end": 2077,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 2076,
                        "end": 2077,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2076,
                          "end": 2077,
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
      "start": 2079,
      "end": 2087,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2079,
        "end": 2086,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 2079,
          "end": 2081,
          "name": "a8",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 2084,
          "end": 2086,
          "name": "b8",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2094,
      "end": 2102,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2094,
        "end": 2101,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 2094,
          "end": 2096,
          "name": "b8",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 2099,
          "end": 2101,
          "name": "a8",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 2109,
      "end": 2233,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2113,
          "end": 2232,
          "id": {
            "type": "Identifier",
            "start": 2113,
            "end": 2232,
            "name": "b9",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2115,
              "end": 2232,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 2117,
                "end": 2232,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 2117,
                  "end": 2152,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 2118,
                      "end": 2132,
                      "name": {
                        "type": "Identifier",
                        "start": 2118,
                        "end": 2119,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 2128,
                        "end": 2132,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2128,
                          "end": 2132,
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
                      "start": 2134,
                      "end": 2151,
                      "name": {
                        "type": "Identifier",
                        "start": 2134,
                        "end": 2135,
                        "name": "U",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 2144,
                        "end": 2151,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2144,
                          "end": 2151,
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
                    "start": 2153,
                    "end": 2169,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2154,
                      "end": 2169,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 2156,
                        "end": 2169,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 2157,
                            "end": 2163,
                            "name": "arg",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 2160,
                              "end": 2163,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 2162,
                                "end": 2163,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 2162,
                                  "end": 2163,
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
                          "start": 2165,
                          "end": 2169,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 2168,
                            "end": 2169,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2168,
                              "end": 2169,
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
                  },
                  {
                    "type": "Identifier",
                    "start": 2171,
                    "end": 2216,
                    "name": "y",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2172,
                      "end": 2216,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 2174,
                        "end": 2216,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 2175,
                            "end": 2210,
                            "name": "arg2",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 2179,
                              "end": 2210,
                              "typeAnnotation": {
                                "type": "TSTypeLiteral",
                                "start": 2181,
                                "end": 2210,
                                "members": [
                                  {
                                    "type": "TSPropertySignature",
                                    "start": 2183,
                                    "end": 2195,
                                    "computed": false,
                                    "optional": false,
                                    "readonly": false,
                                    "key": {
                                      "type": "Identifier",
                                      "start": 2183,
                                      "end": 2186,
                                      "name": "foo",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 2186,
                                      "end": 2194,
                                      "typeAnnotation": {
                                        "type": "TSStringKeyword",
                                        "start": 2188,
                                        "end": 2194
                                      }
                                    },
                                    "accessibility": null,
                                    "static": false
                                  },
                                  {
                                    "type": "TSPropertySignature",
                                    "start": 2196,
                                    "end": 2208,
                                    "computed": false,
                                    "optional": false,
                                    "readonly": false,
                                    "key": {
                                      "type": "Identifier",
                                      "start": 2196,
                                      "end": 2200,
                                      "name": "bing",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 2200,
                                      "end": 2208,
                                      "typeAnnotation": {
                                        "type": "TSNumberKeyword",
                                        "start": 2202,
                                        "end": 2208
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
                          "start": 2212,
                          "end": 2216,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 2215,
                            "end": 2216,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2215,
                              "end": 2216,
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
                  "start": 2218,
                  "end": 2232,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 2221,
                    "end": 2232,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 2222,
                        "end": 2226,
                        "name": "r",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2223,
                          "end": 2226,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 2225,
                            "end": 2226,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2225,
                              "end": 2226,
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
                      "start": 2228,
                      "end": 2232,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 2231,
                        "end": 2232,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2231,
                          "end": 2232,
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
      "start": 2235,
      "end": 2243,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2235,
        "end": 2242,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 2235,
          "end": 2237,
          "name": "a9",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 2240,
          "end": 2242,
          "name": "b9",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2250,
      "end": 2258,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2250,
        "end": 2257,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 2250,
          "end": 2252,
          "name": "b9",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 2255,
          "end": 2257,
          "name": "a9",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 2265,
      "end": 2310,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2269,
          "end": 2309,
          "id": {
            "type": "Identifier",
            "start": 2269,
            "end": 2309,
            "name": "b10",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2272,
              "end": 2309,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 2274,
                "end": 2309,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 2274,
                  "end": 2293,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 2275,
                      "end": 2292,
                      "name": {
                        "type": "Identifier",
                        "start": 2275,
                        "end": 2276,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 2285,
                        "end": 2292,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2285,
                          "end": 2292,
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
                    "type": "RestElement",
                    "start": 2294,
                    "end": 2303,
                    "argument": {
                      "type": "Identifier",
                      "start": 2297,
                      "end": 2298,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "decorators": [],
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2298,
                      "end": 2303,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 2300,
                        "end": 2303,
                        "elementType": {
                          "type": "TSTypeReference",
                          "start": 2300,
                          "end": 2301,
                          "typeName": {
                            "type": "Identifier",
                            "start": 2300,
                            "end": 2301,
                            "name": "T",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
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
                  "start": 2305,
                  "end": 2309,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 2308,
                    "end": 2309,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2308,
                      "end": 2309,
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
      "start": 2312,
      "end": 2322,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2312,
        "end": 2321,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 2312,
          "end": 2315,
          "name": "a10",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 2318,
          "end": 2321,
          "name": "b10",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2329,
      "end": 2339,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2329,
        "end": 2338,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 2329,
          "end": 2332,
          "name": "b10",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 2335,
          "end": 2338,
          "name": "a10",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 2346,
      "end": 2389,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2350,
          "end": 2388,
          "id": {
            "type": "Identifier",
            "start": 2350,
            "end": 2388,
            "name": "b11",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2353,
              "end": 2388,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 2355,
                "end": 2388,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 2355,
                  "end": 2371,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 2356,
                      "end": 2370,
                      "name": {
                        "type": "Identifier",
                        "start": 2356,
                        "end": 2357,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 2366,
                        "end": 2370,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2366,
                          "end": 2370,
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
                    "start": 2372,
                    "end": 2376,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2373,
                      "end": 2376,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 2375,
                        "end": 2376,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2375,
                          "end": 2376,
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
                    "start": 2378,
                    "end": 2382,
                    "name": "y",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2379,
                      "end": 2382,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 2381,
                        "end": 2382,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2381,
                          "end": 2382,
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
                  "start": 2384,
                  "end": 2388,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 2387,
                    "end": 2388,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2387,
                      "end": 2388,
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
      "start": 2391,
      "end": 2401,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2391,
        "end": 2400,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 2391,
          "end": 2394,
          "name": "a11",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 2397,
          "end": 2400,
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
      "start": 2408,
      "end": 2418,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2408,
        "end": 2417,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 2408,
          "end": 2411,
          "name": "b11",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 2414,
          "end": 2417,
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
      "start": 2425,
      "end": 2498,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2429,
          "end": 2497,
          "id": {
            "type": "Identifier",
            "start": 2429,
            "end": 2497,
            "name": "b12",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2432,
              "end": 2497,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 2434,
                "end": 2497,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 2434,
                  "end": 2457,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 2435,
                      "end": 2456,
                      "name": {
                        "type": "Identifier",
                        "start": 2435,
                        "end": 2436,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 2445,
                        "end": 2456,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2445,
                          "end": 2450,
                          "name": "Array",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 2450,
                          "end": 2456,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 2451,
                              "end": 2455,
                              "typeName": {
                                "type": "Identifier",
                                "start": 2451,
                                "end": 2455,
                                "name": "Base",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
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
                    "start": 2458,
                    "end": 2472,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2459,
                      "end": 2472,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 2461,
                        "end": 2472,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2461,
                          "end": 2466,
                          "name": "Array",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 2466,
                          "end": 2472,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 2467,
                              "end": 2471,
                              "typeName": {
                                "type": "Identifier",
                                "start": 2467,
                                "end": 2471,
                                "name": "Base",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          ]
                        }
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 2474,
                    "end": 2478,
                    "name": "y",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2475,
                      "end": 2478,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 2477,
                        "end": 2478,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2477,
                          "end": 2478,
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
                  "start": 2480,
                  "end": 2497,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 2483,
                    "end": 2497,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2483,
                      "end": 2488,
                      "name": "Array",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 2488,
                      "end": 2497,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 2489,
                          "end": 2496,
                          "typeName": {
                            "type": "Identifier",
                            "start": 2489,
                            "end": 2496,
                            "name": "Derived",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      ]
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
      "start": 2500,
      "end": 2510,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2500,
        "end": 2509,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 2500,
          "end": 2503,
          "name": "a12",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 2506,
          "end": 2509,
          "name": "b12",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2517,
      "end": 2527,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2517,
        "end": 2526,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 2517,
          "end": 2520,
          "name": "b12",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 2523,
          "end": 2526,
          "name": "a12",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 2534,
      "end": 2597,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2538,
          "end": 2596,
          "id": {
            "type": "Identifier",
            "start": 2538,
            "end": 2596,
            "name": "b13",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2541,
              "end": 2596,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 2543,
                "end": 2596,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 2543,
                  "end": 2569,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 2544,
                      "end": 2568,
                      "name": {
                        "type": "Identifier",
                        "start": 2544,
                        "end": 2545,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 2554,
                        "end": 2568,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2554,
                          "end": 2559,
                          "name": "Array",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 2559,
                          "end": 2568,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 2560,
                              "end": 2567,
                              "typeName": {
                                "type": "Identifier",
                                "start": 2560,
                                "end": 2567,
                                "name": "Derived",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
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
                    "start": 2570,
                    "end": 2584,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2571,
                      "end": 2584,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 2573,
                        "end": 2584,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2573,
                          "end": 2578,
                          "name": "Array",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 2578,
                          "end": 2584,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 2579,
                              "end": 2583,
                              "typeName": {
                                "type": "Identifier",
                                "start": 2579,
                                "end": 2583,
                                "name": "Base",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          ]
                        }
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 2586,
                    "end": 2590,
                    "name": "y",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2587,
                      "end": 2590,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 2589,
                        "end": 2590,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2589,
                          "end": 2590,
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
                  "start": 2592,
                  "end": 2596,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 2595,
                    "end": 2596,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2595,
                      "end": 2596,
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
      "start": 2599,
      "end": 2609,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2599,
        "end": 2608,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 2599,
          "end": 2602,
          "name": "a13",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 2605,
          "end": 2608,
          "name": "b13",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2616,
      "end": 2626,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2616,
        "end": 2625,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 2616,
          "end": 2619,
          "name": "b13",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 2622,
          "end": 2625,
          "name": "a13",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 2633,
      "end": 2670,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2637,
          "end": 2669,
          "id": {
            "type": "Identifier",
            "start": 2637,
            "end": 2669,
            "name": "b14",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2640,
              "end": 2669,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 2642,
                "end": 2669,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 2642,
                  "end": 2645,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 2643,
                      "end": 2644,
                      "name": {
                        "type": "Identifier",
                        "start": 2643,
                        "end": 2644,
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
                    "start": 2646,
                    "end": 2663,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2647,
                      "end": 2663,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 2649,
                        "end": 2663,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 2651,
                            "end": 2656,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 2651,
                              "end": 2652,
                              "name": "a",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 2652,
                              "end": 2655,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 2654,
                                "end": 2655,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 2654,
                                  "end": 2655,
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
                            "start": 2657,
                            "end": 2661,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 2657,
                              "end": 2658,
                              "name": "b",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 2658,
                              "end": 2661,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 2660,
                                "end": 2661,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 2660,
                                  "end": 2661,
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
                  "start": 2665,
                  "end": 2669,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 2668,
                    "end": 2669,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2668,
                      "end": 2669,
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
      "start": 2672,
      "end": 2682,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2672,
        "end": 2681,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 2672,
          "end": 2675,
          "name": "a14",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 2678,
          "end": 2681,
          "name": "b14",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2689,
      "end": 2699,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2689,
        "end": 2698,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 2689,
          "end": 2692,
          "name": "b14",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 2695,
          "end": 2698,
          "name": "a14",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 2706,
      "end": 2732,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2710,
          "end": 2731,
          "id": {
            "type": "Identifier",
            "start": 2710,
            "end": 2731,
            "name": "b15",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2713,
              "end": 2731,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 2715,
                "end": 2731,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 2715,
                  "end": 2718,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 2716,
                      "end": 2717,
                      "name": {
                        "type": "Identifier",
                        "start": 2716,
                        "end": 2717,
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
                    "start": 2719,
                    "end": 2723,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2720,
                      "end": 2723,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 2722,
                        "end": 2723,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2722,
                          "end": 2723,
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
                  "start": 2725,
                  "end": 2731,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 2728,
                    "end": 2731,
                    "elementType": {
                      "type": "TSTypeReference",
                      "start": 2728,
                      "end": 2729,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2728,
                        "end": 2729,
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
      "start": 2734,
      "end": 2744,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2734,
        "end": 2743,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 2734,
          "end": 2737,
          "name": "a15",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 2740,
          "end": 2743,
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
      "start": 2751,
      "end": 2761,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2751,
        "end": 2760,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 2751,
          "end": 2754,
          "name": "b15",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 2757,
          "end": 2760,
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
      "start": 2768,
      "end": 2812,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2772,
          "end": 2811,
          "id": {
            "type": "Identifier",
            "start": 2772,
            "end": 2811,
            "name": "b16",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2775,
              "end": 2811,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 2777,
                "end": 2811,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 2777,
                  "end": 2793,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 2778,
                      "end": 2792,
                      "name": {
                        "type": "Identifier",
                        "start": 2778,
                        "end": 2779,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 2788,
                        "end": 2792,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2788,
                          "end": 2792,
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
                    "start": 2794,
                    "end": 2798,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2795,
                      "end": 2798,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 2797,
                        "end": 2798,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2797,
                          "end": 2798,
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
                  "start": 2800,
                  "end": 2811,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 2803,
                    "end": 2811,
                    "elementType": {
                      "type": "TSNumberKeyword",
                      "start": 2803,
                      "end": 2809
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
      "start": 2813,
      "end": 2823,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2813,
        "end": 2822,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 2813,
          "end": 2816,
          "name": "a16",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 2819,
          "end": 2822,
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
      "start": 2830,
      "end": 2840,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2830,
        "end": 2839,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 2830,
          "end": 2833,
          "name": "b16",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 2836,
          "end": 2839,
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
      "start": 2847,
      "end": 2883,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2851,
          "end": 2882,
          "id": {
            "type": "Identifier",
            "start": 2851,
            "end": 2882,
            "name": "b17",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2854,
              "end": 2882,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 2856,
                "end": 2882,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 2856,
                  "end": 2859,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 2857,
                      "end": 2858,
                      "name": {
                        "type": "Identifier",
                        "start": 2857,
                        "end": 2858,
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
                    "start": 2860,
                    "end": 2874,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2861,
                      "end": 2874,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 2863,
                        "end": 2874,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 2864,
                            "end": 2868,
                            "name": "a",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 2865,
                              "end": 2868,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 2867,
                                "end": 2868,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 2867,
                                  "end": 2868,
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
                          "start": 2870,
                          "end": 2874,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 2873,
                            "end": 2874,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2873,
                              "end": 2874,
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
                  "start": 2876,
                  "end": 2882,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 2879,
                    "end": 2882,
                    "elementType": {
                      "type": "TSTypeReference",
                      "start": 2879,
                      "end": 2880,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2879,
                        "end": 2880,
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
      "start": 2890,
      "end": 2900,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2890,
        "end": 2899,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 2890,
          "end": 2893,
          "name": "a17",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 2896,
          "end": 2899,
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
      "start": 2907,
      "end": 2917,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2907,
        "end": 2916,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 2907,
          "end": 2910,
          "name": "b17",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 2913,
          "end": 2916,
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
      "start": 2924,
      "end": 2960,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2928,
          "end": 2959,
          "id": {
            "type": "Identifier",
            "start": 2928,
            "end": 2959,
            "name": "b18",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2931,
              "end": 2959,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 2933,
                "end": 2959,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 2933,
                  "end": 2936,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 2934,
                      "end": 2935,
                      "name": {
                        "type": "Identifier",
                        "start": 2934,
                        "end": 2935,
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
                    "start": 2937,
                    "end": 2951,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2938,
                      "end": 2951,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 2940,
                        "end": 2951,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 2941,
                            "end": 2945,
                            "name": "a",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 2942,
                              "end": 2945,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 2944,
                                "end": 2945,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 2944,
                                  "end": 2945,
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
                          "start": 2947,
                          "end": 2951,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 2950,
                            "end": 2951,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2950,
                              "end": 2951,
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
                  "start": 2953,
                  "end": 2959,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 2956,
                    "end": 2959,
                    "elementType": {
                      "type": "TSTypeReference",
                      "start": 2956,
                      "end": 2957,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2956,
                        "end": 2957,
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
      "start": 2962,
      "end": 2972,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2962,
        "end": 2971,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 2962,
          "end": 2965,
          "name": "a18",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 2968,
          "end": 2971,
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
      "start": 2979,
      "end": 2989,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2979,
        "end": 2988,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 2979,
          "end": 2982,
          "name": "b18",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 2985,
          "end": 2988,
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
