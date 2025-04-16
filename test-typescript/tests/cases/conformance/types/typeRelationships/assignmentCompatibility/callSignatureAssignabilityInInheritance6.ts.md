__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 222,
  "end": 1258,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 222,
      "end": 249,
      "id": {
        "type": "Identifier",
        "start": 228,
        "end": 232,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 233,
        "end": 249,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 235,
            "end": 247,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 235,
              "end": 238,
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
              "start": 238,
              "end": 246,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 240,
                "end": 246
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
      "start": 250,
      "end": 293,
      "id": {
        "type": "Identifier",
        "start": 256,
        "end": 263,
        "name": "Derived",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 272,
        "end": 276,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 277,
        "end": 293,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 279,
            "end": 291,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 279,
              "end": 282,
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
              "start": 282,
              "end": 290,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 284,
                "end": 290
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
      "start": 294,
      "end": 341,
      "id": {
        "type": "Identifier",
        "start": 300,
        "end": 308,
        "name": "Derived2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 317,
        "end": 324,
        "name": "Derived",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 325,
        "end": 341,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 327,
            "end": 339,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 327,
              "end": 330,
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
              "start": 330,
              "end": 338,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 332,
                "end": 338
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
      "start": 342,
      "end": 391,
      "id": {
        "type": "Identifier",
        "start": 348,
        "end": 360,
        "name": "OtherDerived",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 369,
        "end": 373,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 374,
        "end": 391,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 376,
            "end": 389,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 376,
              "end": 380,
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
              "start": 380,
              "end": 388,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 382,
                "end": 388
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
      "start": 393,
      "end": 790,
      "id": {
        "type": "Identifier",
        "start": 403,
        "end": 404,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 405,
        "end": 790,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 427,
            "end": 447,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 427,
              "end": 428,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 428,
              "end": 446,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 430,
                "end": 446,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 430,
                  "end": 433,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 431,
                      "end": 432,
                      "name": {
                        "type": "Identifier",
                        "start": 431,
                        "end": 432,
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
                    "start": 434,
                    "end": 438,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 435,
                      "end": 438,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 437,
                        "end": 438,
                        "typeName": {
                          "type": "Identifier",
                          "start": 437,
                          "end": 438,
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
                  "start": 440,
                  "end": 446,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 443,
                    "end": 446,
                    "elementType": {
                      "type": "TSTypeReference",
                      "start": 443,
                      "end": 444,
                      "typeName": {
                        "type": "Identifier",
                        "start": 443,
                        "end": 444,
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
            "start": 452,
            "end": 478,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 452,
              "end": 454,
              "name": "a2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 454,
              "end": 477,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 456,
                "end": 477,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 456,
                  "end": 459,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 457,
                      "end": 458,
                      "name": {
                        "type": "Identifier",
                        "start": 457,
                        "end": 458,
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
                    "start": 460,
                    "end": 464,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 461,
                      "end": 464,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 463,
                        "end": 464,
                        "typeName": {
                          "type": "Identifier",
                          "start": 463,
                          "end": 464,
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
                  "start": 466,
                  "end": 477,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 469,
                    "end": 477,
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 469,
                      "end": 475
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
            "start": 483,
            "end": 505,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 483,
              "end": 485,
              "name": "a3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 485,
              "end": 504,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 487,
                "end": 504,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 487,
                  "end": 490,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 488,
                      "end": 489,
                      "name": {
                        "type": "Identifier",
                        "start": 488,
                        "end": 489,
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
                    "start": 491,
                    "end": 495,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 492,
                      "end": 495,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 494,
                        "end": 495,
                        "typeName": {
                          "type": "Identifier",
                          "start": 494,
                          "end": 495,
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
                  "start": 497,
                  "end": 504,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 500,
                    "end": 504
                  }
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 510,
            "end": 542,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 510,
              "end": 512,
              "name": "a4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 512,
              "end": 541,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 514,
                "end": 541,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 514,
                  "end": 519,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 515,
                      "end": 516,
                      "name": {
                        "type": "Identifier",
                        "start": 515,
                        "end": 516,
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
                      "start": 517,
                      "end": 518,
                      "name": {
                        "type": "Identifier",
                        "start": 517,
                        "end": 518,
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
                    "start": 520,
                    "end": 524,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 521,
                      "end": 524,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 523,
                        "end": 524,
                        "typeName": {
                          "type": "Identifier",
                          "start": 523,
                          "end": 524,
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
                    "start": 526,
                    "end": 530,
                    "name": "y",
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
                  "start": 532,
                  "end": 541,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 535,
                    "end": 541
                  }
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 547,
            "end": 580,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 547,
              "end": 549,
              "name": "a5",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 549,
              "end": 579,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 551,
                "end": 579,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 551,
                  "end": 556,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 552,
                      "end": 553,
                      "name": {
                        "type": "Identifier",
                        "start": 552,
                        "end": 553,
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
                      "start": 554,
                      "end": 555,
                      "name": {
                        "type": "Identifier",
                        "start": 554,
                        "end": 555,
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
                    "start": 557,
                    "end": 573,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 558,
                      "end": 573,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 560,
                        "end": 573,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 561,
                            "end": 567,
                            "name": "arg",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 564,
                              "end": 567,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 566,
                                "end": 567,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 566,
                                  "end": 567,
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
                          "start": 569,
                          "end": 573,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 572,
                            "end": 573,
                            "typeName": {
                              "type": "Identifier",
                              "start": 572,
                              "end": 573,
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
                  "start": 575,
                  "end": 579,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 578,
                    "end": 579,
                    "typeName": {
                      "type": "Identifier",
                      "start": 578,
                      "end": 579,
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
            "start": 585,
            "end": 635,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 585,
              "end": 587,
              "name": "a6",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 587,
              "end": 634,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 589,
                "end": 634,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 589,
                  "end": 605,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 590,
                      "end": 604,
                      "name": {
                        "type": "Identifier",
                        "start": 590,
                        "end": 591,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 600,
                        "end": 604,
                        "typeName": {
                          "type": "Identifier",
                          "start": 600,
                          "end": 604,
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
                    "start": 606,
                    "end": 628,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 607,
                      "end": 628,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 609,
                        "end": 628,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 610,
                            "end": 616,
                            "name": "arg",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 613,
                              "end": 616,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 615,
                                "end": 616,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 615,
                                  "end": 616,
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
                          "start": 618,
                          "end": 628,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 621,
                            "end": 628,
                            "typeName": {
                              "type": "Identifier",
                              "start": 621,
                              "end": 628,
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
                  "start": 630,
                  "end": 634,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 633,
                    "end": 634,
                    "typeName": {
                      "type": "Identifier",
                      "start": 633,
                      "end": 634,
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
            "start": 640,
            "end": 695,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 640,
              "end": 643,
              "name": "a11",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 643,
              "end": 694,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 645,
                "end": 694,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 645,
                  "end": 648,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 646,
                      "end": 647,
                      "name": {
                        "type": "Identifier",
                        "start": 646,
                        "end": 647,
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
                    "start": 649,
                    "end": 662,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 650,
                      "end": 662,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 652,
                        "end": 662,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 654,
                            "end": 660,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 654,
                              "end": 657,
                              "name": "foo",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 657,
                              "end": 660,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 659,
                                "end": 660,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 659,
                                  "end": 660,
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
                    "start": 664,
                    "end": 685,
                    "name": "y",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 665,
                      "end": 685,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 667,
                        "end": 685,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 669,
                            "end": 676,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 669,
                              "end": 672,
                              "name": "foo",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 672,
                              "end": 675,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 674,
                                "end": 675,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 674,
                                  "end": 675,
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
                            "start": 677,
                            "end": 683,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 677,
                              "end": 680,
                              "name": "bar",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 680,
                              "end": 683,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 682,
                                "end": 683,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 682,
                                  "end": 683,
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
                  "start": 687,
                  "end": 694,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 690,
                    "end": 694,
                    "typeName": {
                      "type": "Identifier",
                      "start": 690,
                      "end": 694,
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
            "start": 700,
            "end": 735,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 700,
              "end": 703,
              "name": "a15",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 703,
              "end": 734,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 705,
                "end": 734,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 705,
                  "end": 708,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 706,
                      "end": 707,
                      "name": {
                        "type": "Identifier",
                        "start": 706,
                        "end": 707,
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
                    "start": 709,
                    "end": 726,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 710,
                      "end": 726,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 712,
                        "end": 726,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 714,
                            "end": 719,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 714,
                              "end": 715,
                              "name": "a",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 715,
                              "end": 718,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 717,
                                "end": 718,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 717,
                                  "end": 718,
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
                            "start": 720,
                            "end": 724,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 720,
                              "end": 721,
                              "name": "b",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 721,
                              "end": 724,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 723,
                                "end": 724,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 723,
                                  "end": 724,
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
                  "start": 728,
                  "end": 734,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 731,
                    "end": 734,
                    "elementType": {
                      "type": "TSTypeReference",
                      "start": 731,
                      "end": 732,
                      "typeName": {
                        "type": "Identifier",
                        "start": 731,
                        "end": 732,
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
            "start": 740,
            "end": 788,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 740,
              "end": 743,
              "name": "a16",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 743,
              "end": 787,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 745,
                "end": 787,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 745,
                  "end": 761,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 746,
                      "end": 760,
                      "name": {
                        "type": "Identifier",
                        "start": 746,
                        "end": 747,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 756,
                        "end": 760,
                        "typeName": {
                          "type": "Identifier",
                          "start": 756,
                          "end": 760,
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
                    "start": 762,
                    "end": 779,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 763,
                      "end": 779,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 765,
                        "end": 779,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 767,
                            "end": 772,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 767,
                              "end": 768,
                              "name": "a",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 768,
                              "end": 771,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 770,
                                "end": 771,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 770,
                                  "end": 771,
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
                            "start": 773,
                            "end": 777,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 773,
                              "end": 774,
                              "name": "b",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 774,
                              "end": 777,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 776,
                                "end": 777,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 776,
                                  "end": 777,
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
                  "start": 781,
                  "end": 787,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 784,
                    "end": 787,
                    "elementType": {
                      "type": "TSTypeReference",
                      "start": 784,
                      "end": 785,
                      "typeName": {
                        "type": "Identifier",
                        "start": 784,
                        "end": 785,
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
      "type": "TSInterfaceDeclaration",
      "start": 799,
      "end": 850,
      "id": {
        "type": "Identifier",
        "start": 809,
        "end": 810,
        "name": "I",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 822,
          "end": 823,
          "expression": {
            "type": "Identifier",
            "start": 822,
            "end": 823,
            "name": "A",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 810,
        "end": 813,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 811,
            "end": 812,
            "name": {
              "type": "Identifier",
              "start": 811,
              "end": 812,
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
      "body": {
        "type": "TSInterfaceBody",
        "start": 824,
        "end": 850,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 830,
            "end": 847,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 830,
              "end": 831,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 831,
              "end": 846,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 833,
                "end": 846,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 834,
                    "end": 838,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 835,
                      "end": 838,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 837,
                        "end": 838,
                        "typeName": {
                          "type": "Identifier",
                          "start": 837,
                          "end": 838,
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
                  "start": 840,
                  "end": 846,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 843,
                    "end": 846,
                    "elementType": {
                      "type": "TSTypeReference",
                      "start": 843,
                      "end": 844,
                      "typeName": {
                        "type": "Identifier",
                        "start": 843,
                        "end": 844,
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
      "type": "TSInterfaceDeclaration",
      "start": 852,
      "end": 910,
      "id": {
        "type": "Identifier",
        "start": 862,
        "end": 864,
        "name": "I2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 876,
          "end": 877,
          "expression": {
            "type": "Identifier",
            "start": 876,
            "end": 877,
            "name": "A",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 864,
        "end": 867,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 865,
            "end": 866,
            "name": {
              "type": "Identifier",
              "start": 865,
              "end": 866,
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
      "body": {
        "type": "TSInterfaceBody",
        "start": 878,
        "end": 910,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 884,
            "end": 907,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 884,
              "end": 886,
              "name": "a2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 886,
              "end": 906,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 888,
                "end": 906,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 889,
                    "end": 893,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 890,
                      "end": 893,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 892,
                        "end": 893,
                        "typeName": {
                          "type": "Identifier",
                          "start": 892,
                          "end": 893,
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
                  "start": 895,
                  "end": 906,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 898,
                    "end": 906,
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 898,
                      "end": 904
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
      "type": "TSInterfaceDeclaration",
      "start": 912,
      "end": 962,
      "id": {
        "type": "Identifier",
        "start": 922,
        "end": 924,
        "name": "I3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 936,
          "end": 937,
          "expression": {
            "type": "Identifier",
            "start": 936,
            "end": 937,
            "name": "A",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 924,
        "end": 927,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 925,
            "end": 926,
            "name": {
              "type": "Identifier",
              "start": 925,
              "end": 926,
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
      "body": {
        "type": "TSInterfaceBody",
        "start": 938,
        "end": 962,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 944,
            "end": 960,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 944,
              "end": 946,
              "name": "a3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 946,
              "end": 959,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 948,
                "end": 959,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 949,
                    "end": 953,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 950,
                      "end": 953,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 952,
                        "end": 953,
                        "typeName": {
                          "type": "Identifier",
                          "start": 952,
                          "end": 953,
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
                  "start": 955,
                  "end": 959,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 958,
                    "end": 959,
                    "typeName": {
                      "type": "Identifier",
                      "start": 958,
                      "end": 959,
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
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 964,
      "end": 1029,
      "id": {
        "type": "Identifier",
        "start": 974,
        "end": 976,
        "name": "I4",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 988,
          "end": 989,
          "expression": {
            "type": "Identifier",
            "start": 988,
            "end": 989,
            "name": "A",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 976,
        "end": 979,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 977,
            "end": 978,
            "name": {
              "type": "Identifier",
              "start": 977,
              "end": 978,
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
      "body": {
        "type": "TSInterfaceBody",
        "start": 990,
        "end": 1029,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 996,
            "end": 1026,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 996,
              "end": 998,
              "name": "a4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 998,
              "end": 1025,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 1000,
                "end": 1025,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 1000,
                  "end": 1003,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 1001,
                      "end": 1002,
                      "name": {
                        "type": "Identifier",
                        "start": 1001,
                        "end": 1002,
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
                    "start": 1004,
                    "end": 1008,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1005,
                      "end": 1008,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1007,
                        "end": 1008,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1007,
                          "end": 1008,
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
                    "start": 1010,
                    "end": 1014,
                    "name": "y",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1011,
                      "end": 1014,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1013,
                        "end": 1014,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1013,
                          "end": 1014,
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
                  "start": 1016,
                  "end": 1025,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1019,
                    "end": 1025
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
      "type": "TSInterfaceDeclaration",
      "start": 1031,
      "end": 1097,
      "id": {
        "type": "Identifier",
        "start": 1041,
        "end": 1043,
        "name": "I5",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 1055,
          "end": 1056,
          "expression": {
            "type": "Identifier",
            "start": 1055,
            "end": 1056,
            "name": "A",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1043,
        "end": 1046,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1044,
            "end": 1045,
            "name": {
              "type": "Identifier",
              "start": 1044,
              "end": 1045,
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
      "body": {
        "type": "TSInterfaceBody",
        "start": 1057,
        "end": 1097,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 1063,
            "end": 1094,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1063,
              "end": 1065,
              "name": "a5",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1065,
              "end": 1093,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 1067,
                "end": 1093,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 1067,
                  "end": 1070,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 1068,
                      "end": 1069,
                      "name": {
                        "type": "Identifier",
                        "start": 1068,
                        "end": 1069,
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
                    "start": 1071,
                    "end": 1087,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1072,
                      "end": 1087,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 1074,
                        "end": 1087,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 1075,
                            "end": 1081,
                            "name": "arg",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1078,
                              "end": 1081,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 1080,
                                "end": 1081,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1080,
                                  "end": 1081,
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
                          "start": 1083,
                          "end": 1087,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 1086,
                            "end": 1087,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1086,
                              "end": 1087,
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
                  "start": 1089,
                  "end": 1093,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1092,
                    "end": 1093,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1092,
                      "end": 1093,
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
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1099,
      "end": 1189,
      "id": {
        "type": "Identifier",
        "start": 1109,
        "end": 1111,
        "name": "I7",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 1123,
          "end": 1124,
          "expression": {
            "type": "Identifier",
            "start": 1123,
            "end": 1124,
            "name": "A",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1111,
        "end": 1114,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1112,
            "end": 1113,
            "name": {
              "type": "Identifier",
              "start": 1112,
              "end": 1113,
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
      "body": {
        "type": "TSInterfaceBody",
        "start": 1125,
        "end": 1189,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 1131,
            "end": 1186,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1131,
              "end": 1134,
              "name": "a11",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1134,
              "end": 1185,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 1136,
                "end": 1185,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 1136,
                  "end": 1139,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 1137,
                      "end": 1138,
                      "name": {
                        "type": "Identifier",
                        "start": 1137,
                        "end": 1138,
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
                    "start": 1140,
                    "end": 1153,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1141,
                      "end": 1153,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 1143,
                        "end": 1153,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 1145,
                            "end": 1151,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 1145,
                              "end": 1148,
                              "name": "foo",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1148,
                              "end": 1151,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 1150,
                                "end": 1151,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1150,
                                  "end": 1151,
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
                    "start": 1155,
                    "end": 1176,
                    "name": "y",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1156,
                      "end": 1176,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 1158,
                        "end": 1176,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 1160,
                            "end": 1167,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 1160,
                              "end": 1163,
                              "name": "foo",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1163,
                              "end": 1166,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 1165,
                                "end": 1166,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1165,
                                  "end": 1166,
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
                            "start": 1168,
                            "end": 1174,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 1168,
                              "end": 1171,
                              "name": "bar",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1171,
                              "end": 1174,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 1173,
                                "end": 1174,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1173,
                                  "end": 1174,
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
                  "start": 1178,
                  "end": 1185,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1181,
                    "end": 1185,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1181,
                      "end": 1185,
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
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1191,
      "end": 1258,
      "id": {
        "type": "Identifier",
        "start": 1201,
        "end": 1203,
        "name": "I9",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 1215,
          "end": 1216,
          "expression": {
            "type": "Identifier",
            "start": 1215,
            "end": 1216,
            "name": "A",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1203,
        "end": 1206,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1204,
            "end": 1205,
            "name": {
              "type": "Identifier",
              "start": 1204,
              "end": 1205,
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
      "body": {
        "type": "TSInterfaceBody",
        "start": 1217,
        "end": 1258,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 1223,
            "end": 1255,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1223,
              "end": 1226,
              "name": "a16",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1226,
              "end": 1254,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 1228,
                "end": 1254,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1229,
                    "end": 1246,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1230,
                      "end": 1246,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 1232,
                        "end": 1246,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 1234,
                            "end": 1239,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 1234,
                              "end": 1235,
                              "name": "a",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1235,
                              "end": 1238,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 1237,
                                "end": 1238,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1237,
                                  "end": 1238,
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
                            "start": 1240,
                            "end": 1244,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 1240,
                              "end": 1241,
                              "name": "b",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1241,
                              "end": 1244,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 1243,
                                "end": 1244,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1243,
                                  "end": 1244,
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
                  "start": 1248,
                  "end": 1254,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 1251,
                    "end": 1254,
                    "elementType": {
                      "type": "TSTypeReference",
                      "start": 1251,
                      "end": 1252,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1251,
                        "end": 1252,
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
