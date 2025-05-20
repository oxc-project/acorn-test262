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
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 233,
        "end": 249,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 235,
            "end": 247,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 235,
              "end": 238,
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
              "start": 238,
              "end": 246,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 240,
                "end": 246
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
        "end": 232,
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
      "start": 250,
      "end": 293,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 277,
        "end": 293,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 279,
            "end": 291,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 279,
              "end": 282,
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
              "start": 282,
              "end": 290,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 284,
                "end": 290
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
        "start": 256,
        "end": 263,
        "decorators": [],
        "name": "Derived",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 272,
        "end": 276,
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
      "start": 294,
      "end": 341,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 325,
        "end": 341,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 327,
            "end": 339,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 327,
              "end": 330,
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
              "start": 330,
              "end": 338,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 332,
                "end": 338
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
        "start": 300,
        "end": 308,
        "decorators": [],
        "name": "Derived2",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 317,
        "end": 324,
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
      "start": 342,
      "end": 391,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 374,
        "end": 391,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 376,
            "end": 389,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 376,
              "end": 380,
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
              "start": 380,
              "end": 388,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 382,
                "end": 388
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
        "start": 348,
        "end": 360,
        "decorators": [],
        "name": "OtherDerived",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 369,
        "end": 373,
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
      "start": 393,
      "end": 790,
      "body": {
        "type": "TSInterfaceBody",
        "start": 405,
        "end": 790,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 427,
            "end": 447,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 427,
              "end": 428,
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
              "start": 428,
              "end": 446,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 430,
                "end": 446,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 434,
                    "end": 438,
                    "decorators": [],
                    "name": "x",
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
                  "end": 446,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 443,
                    "end": 446,
                    "elementType": {
                      "type": "TSTypeReference",
                      "start": 443,
                      "end": 444,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 443,
                        "end": 444,
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
                  "start": 430,
                  "end": 433,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 431,
                      "end": 432,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 431,
                        "end": 432,
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
            "start": 452,
            "end": 478,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 452,
              "end": 454,
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
              "start": 454,
              "end": 477,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 456,
                "end": 477,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 460,
                    "end": 464,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 461,
                      "end": 464,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 463,
                        "end": 464,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 463,
                          "end": 464,
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
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 456,
                  "end": 459,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 457,
                      "end": 458,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 457,
                        "end": 458,
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
            "start": 483,
            "end": 505,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 483,
              "end": 485,
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
              "start": 485,
              "end": 504,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 487,
                "end": 504,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 491,
                    "end": 495,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 492,
                      "end": 495,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 494,
                        "end": 495,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 494,
                          "end": 495,
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
                  "start": 497,
                  "end": 504,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 500,
                    "end": 504
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 487,
                  "end": 490,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 488,
                      "end": 489,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 488,
                        "end": 489,
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
            "start": 510,
            "end": 542,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 510,
              "end": 512,
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
              "start": 512,
              "end": 541,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 514,
                "end": 541,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 520,
                    "end": 524,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 521,
                      "end": 524,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 523,
                        "end": 524,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 523,
                          "end": 524,
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
                    "start": 526,
                    "end": 530,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 527,
                      "end": 530,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 529,
                        "end": 530,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 529,
                          "end": 530,
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
                  "start": 532,
                  "end": 541,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 535,
                    "end": 541
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 514,
                  "end": 519,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 515,
                      "end": 516,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 515,
                        "end": 516,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "out": false
                    },
                    {
                      "type": "TSTypeParameter",
                      "start": 517,
                      "end": 518,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 517,
                        "end": 518,
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
            "start": 547,
            "end": 580,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 547,
              "end": 549,
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
              "start": 549,
              "end": 579,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 551,
                "end": 579,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 557,
                    "end": 573,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 558,
                      "end": 573,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 560,
                        "end": 573,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 561,
                            "end": 567,
                            "decorators": [],
                            "name": "arg",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 564,
                              "end": 567,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 566,
                                "end": 567,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 566,
                                  "end": 567,
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
                          "start": 569,
                          "end": 573,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 572,
                            "end": 573,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 572,
                              "end": 573,
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
                  "start": 575,
                  "end": 579,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 578,
                    "end": 579,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 578,
                      "end": 579,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 551,
                  "end": 556,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 552,
                      "end": 553,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 552,
                        "end": 553,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "out": false
                    },
                    {
                      "type": "TSTypeParameter",
                      "start": 554,
                      "end": 555,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 554,
                        "end": 555,
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
            "start": 585,
            "end": 635,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 585,
              "end": 587,
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
              "start": 587,
              "end": 634,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 589,
                "end": 634,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 606,
                    "end": 628,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 607,
                      "end": 628,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 609,
                        "end": 628,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 610,
                            "end": 616,
                            "decorators": [],
                            "name": "arg",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 613,
                              "end": 616,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 615,
                                "end": 616,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 615,
                                  "end": 616,
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
                          "start": 618,
                          "end": 628,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 621,
                            "end": 628,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 621,
                              "end": 628,
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
                  "start": 630,
                  "end": 634,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 633,
                    "end": 634,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 633,
                      "end": 634,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 589,
                  "end": 605,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 590,
                      "end": 604,
                      "const": false,
                      "constraint": {
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
                      },
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 590,
                        "end": 591,
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
            "start": 640,
            "end": 695,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 640,
              "end": 643,
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
              "start": 643,
              "end": 694,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 645,
                "end": 694,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 649,
                    "end": 662,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
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
                            "accessibility": null,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 654,
                              "end": 657,
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
                              "start": 657,
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
                            }
                          }
                        ]
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 664,
                    "end": 685,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
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
                            "accessibility": null,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 669,
                              "end": 672,
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
                              "start": 672,
                              "end": 675,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 674,
                                "end": 675,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 674,
                                  "end": 675,
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
                            "start": 677,
                            "end": 683,
                            "accessibility": null,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 677,
                              "end": 680,
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
                              "start": 680,
                              "end": 683,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 682,
                                "end": 683,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 682,
                                  "end": 683,
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
                  "start": 687,
                  "end": 694,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 690,
                    "end": 694,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 690,
                      "end": 694,
                      "decorators": [],
                      "name": "Base",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 645,
                  "end": 648,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 646,
                      "end": 647,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 646,
                        "end": 647,
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
            "start": 700,
            "end": 735,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 700,
              "end": 703,
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
              "start": 703,
              "end": 734,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 705,
                "end": 734,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 709,
                    "end": 726,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
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
                            "accessibility": null,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 714,
                              "end": 715,
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
                              "start": 715,
                              "end": 718,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 717,
                                "end": 718,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 717,
                                  "end": 718,
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
                            "start": 720,
                            "end": 724,
                            "accessibility": null,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 720,
                              "end": 721,
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
                              "start": 721,
                              "end": 724,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 723,
                                "end": 724,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 723,
                                  "end": 724,
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
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 731,
                        "end": 732,
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
                  "start": 705,
                  "end": 708,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 706,
                      "end": 707,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 706,
                        "end": 707,
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
            "start": 740,
            "end": 788,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 740,
              "end": 743,
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
              "start": 743,
              "end": 787,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 745,
                "end": 787,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 762,
                    "end": 779,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
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
                            "accessibility": null,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 767,
                              "end": 768,
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
                              "start": 768,
                              "end": 771,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 770,
                                "end": 771,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 770,
                                  "end": 771,
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
                            "start": 773,
                            "end": 777,
                            "accessibility": null,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 773,
                              "end": 774,
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
                              "start": 774,
                              "end": 777,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 776,
                                "end": 777,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 776,
                                  "end": 777,
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
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 784,
                        "end": 785,
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
                  "start": 745,
                  "end": 761,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 746,
                      "end": 760,
                      "const": false,
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 756,
                        "end": 760,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 756,
                          "end": 760,
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
                        "start": 746,
                        "end": 747,
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
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 403,
        "end": 404,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 799,
      "end": 850,
      "body": {
        "type": "TSInterfaceBody",
        "start": 824,
        "end": 850,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 830,
            "end": 847,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 830,
              "end": 831,
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
              "start": 831,
              "end": 846,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 833,
                "end": 846,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 834,
                    "end": 838,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 835,
                      "end": 838,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 837,
                        "end": 838,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 837,
                          "end": 838,
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
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 843,
                        "end": 844,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
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
          "start": 822,
          "end": 823,
          "expression": {
            "type": "Identifier",
            "start": 822,
            "end": 823,
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
        "start": 809,
        "end": 810,
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 810,
        "end": 813,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 811,
            "end": 812,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 811,
              "end": 812,
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
      "type": "TSInterfaceDeclaration",
      "start": 852,
      "end": 910,
      "body": {
        "type": "TSInterfaceBody",
        "start": 878,
        "end": 910,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 884,
            "end": 907,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 884,
              "end": 886,
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
              "start": 886,
              "end": 906,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 888,
                "end": 906,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 889,
                    "end": 893,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 890,
                      "end": 893,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 892,
                        "end": 893,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 892,
                          "end": 893,
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
          "start": 876,
          "end": 877,
          "expression": {
            "type": "Identifier",
            "start": 876,
            "end": 877,
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
        "start": 862,
        "end": 864,
        "decorators": [],
        "name": "I2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 864,
        "end": 867,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 865,
            "end": 866,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 865,
              "end": 866,
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
      "type": "TSInterfaceDeclaration",
      "start": 912,
      "end": 962,
      "body": {
        "type": "TSInterfaceBody",
        "start": 938,
        "end": 962,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 944,
            "end": 960,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 944,
              "end": 946,
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
              "start": 946,
              "end": 959,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 948,
                "end": 959,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 949,
                    "end": 953,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 950,
                      "end": 953,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 952,
                        "end": 953,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 952,
                          "end": 953,
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
                  "start": 955,
                  "end": 959,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 958,
                    "end": 959,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 958,
                      "end": 959,
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
        ]
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 936,
          "end": 937,
          "expression": {
            "type": "Identifier",
            "start": 936,
            "end": 937,
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
        "start": 922,
        "end": 924,
        "decorators": [],
        "name": "I3",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 924,
        "end": 927,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 925,
            "end": 926,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 925,
              "end": 926,
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
      "type": "TSInterfaceDeclaration",
      "start": 964,
      "end": 1029,
      "body": {
        "type": "TSInterfaceBody",
        "start": 990,
        "end": 1029,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 996,
            "end": 1026,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 996,
              "end": 998,
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
              "start": 998,
              "end": 1025,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 1000,
                "end": 1025,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1004,
                    "end": 1008,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1005,
                      "end": 1008,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1007,
                        "end": 1008,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1007,
                          "end": 1008,
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
                    "start": 1010,
                    "end": 1014,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1011,
                      "end": 1014,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1013,
                        "end": 1014,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1013,
                          "end": 1014,
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
                  "start": 1016,
                  "end": 1025,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1019,
                    "end": 1025
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 1000,
                  "end": 1003,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 1001,
                      "end": 1002,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 1001,
                        "end": 1002,
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
          }
        ]
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 988,
          "end": 989,
          "expression": {
            "type": "Identifier",
            "start": 988,
            "end": 989,
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
        "start": 974,
        "end": 976,
        "decorators": [],
        "name": "I4",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 976,
        "end": 979,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 977,
            "end": 978,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 977,
              "end": 978,
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
      "type": "TSInterfaceDeclaration",
      "start": 1031,
      "end": 1097,
      "body": {
        "type": "TSInterfaceBody",
        "start": 1057,
        "end": 1097,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 1063,
            "end": 1094,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1063,
              "end": 1065,
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
              "start": 1065,
              "end": 1093,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 1067,
                "end": 1093,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1071,
                    "end": 1087,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1072,
                      "end": 1087,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 1074,
                        "end": 1087,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 1075,
                            "end": 1081,
                            "decorators": [],
                            "name": "arg",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1078,
                              "end": 1081,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 1080,
                                "end": 1081,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1080,
                                  "end": 1081,
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
                          "start": 1083,
                          "end": 1087,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 1086,
                            "end": 1087,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1086,
                              "end": 1087,
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
                  "start": 1089,
                  "end": 1093,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1092,
                    "end": 1093,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1092,
                      "end": 1093,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 1067,
                  "end": 1070,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 1068,
                      "end": 1069,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 1068,
                        "end": 1069,
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
          }
        ]
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 1055,
          "end": 1056,
          "expression": {
            "type": "Identifier",
            "start": 1055,
            "end": 1056,
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
        "start": 1041,
        "end": 1043,
        "decorators": [],
        "name": "I5",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1043,
        "end": 1046,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1044,
            "end": 1045,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1044,
              "end": 1045,
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
      "type": "TSInterfaceDeclaration",
      "start": 1099,
      "end": 1189,
      "body": {
        "type": "TSInterfaceBody",
        "start": 1125,
        "end": 1189,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 1131,
            "end": 1186,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1131,
              "end": 1134,
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
              "start": 1134,
              "end": 1185,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 1136,
                "end": 1185,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1140,
                    "end": 1153,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
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
                            "accessibility": null,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 1145,
                              "end": 1148,
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
                              "start": 1148,
                              "end": 1151,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 1150,
                                "end": 1151,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1150,
                                  "end": 1151,
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
                    "start": 1155,
                    "end": 1176,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
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
                            "accessibility": null,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 1160,
                              "end": 1163,
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
                          },
                          {
                            "type": "TSPropertySignature",
                            "start": 1168,
                            "end": 1174,
                            "accessibility": null,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 1168,
                              "end": 1171,
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
                              "start": 1171,
                              "end": 1174,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 1173,
                                "end": 1174,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1173,
                                  "end": 1174,
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
                  "start": 1178,
                  "end": 1185,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1181,
                    "end": 1185,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1181,
                      "end": 1185,
                      "decorators": [],
                      "name": "Base",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 1136,
                  "end": 1139,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 1137,
                      "end": 1138,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 1137,
                        "end": 1138,
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
          }
        ]
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 1123,
          "end": 1124,
          "expression": {
            "type": "Identifier",
            "start": 1123,
            "end": 1124,
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
        "start": 1109,
        "end": 1111,
        "decorators": [],
        "name": "I7",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1111,
        "end": 1114,
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
          }
        ]
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1191,
      "end": 1258,
      "body": {
        "type": "TSInterfaceBody",
        "start": 1217,
        "end": 1258,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 1223,
            "end": 1255,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1223,
              "end": 1226,
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
              "start": 1226,
              "end": 1254,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 1228,
                "end": 1254,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1229,
                    "end": 1246,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
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
                            "accessibility": null,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 1234,
                              "end": 1235,
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
                              "start": 1235,
                              "end": 1238,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 1237,
                                "end": 1238,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1237,
                                  "end": 1238,
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
                            "start": 1240,
                            "end": 1244,
                            "accessibility": null,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 1240,
                              "end": 1241,
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
                              "start": 1241,
                              "end": 1244,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 1243,
                                "end": 1244,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1243,
                                  "end": 1244,
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
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1251,
                        "end": 1252,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
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
          "start": 1215,
          "end": 1216,
          "expression": {
            "type": "Identifier",
            "start": 1215,
            "end": 1216,
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
        "start": 1201,
        "end": 1203,
        "decorators": [],
        "name": "I9",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1203,
        "end": 1206,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1204,
            "end": 1205,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1204,
              "end": 1205,
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
  ],
  "sourceType": "script",
  "hashbang": null
}
```
