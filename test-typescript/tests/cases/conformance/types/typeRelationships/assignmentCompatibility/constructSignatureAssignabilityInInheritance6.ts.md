__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 227,
  "end": 1329,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 227,
      "end": 254,
      "id": {
        "type": "Identifier",
        "start": 233,
        "end": 237,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 238,
        "end": 254,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 240,
            "end": 252,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 240,
              "end": 243,
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
              "start": 243,
              "end": 251,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 245,
                "end": 251
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
      "start": 255,
      "end": 298,
      "id": {
        "type": "Identifier",
        "start": 261,
        "end": 268,
        "name": "Derived",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 277,
        "end": 281,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 282,
        "end": 298,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 284,
            "end": 296,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 284,
              "end": 287,
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
              "start": 287,
              "end": 295,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 289,
                "end": 295
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
      "start": 299,
      "end": 346,
      "id": {
        "type": "Identifier",
        "start": 305,
        "end": 313,
        "name": "Derived2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 322,
        "end": 329,
        "name": "Derived",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 330,
        "end": 346,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 332,
            "end": 344,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 332,
              "end": 335,
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
              "start": 335,
              "end": 343,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 337,
                "end": 343
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
      "start": 347,
      "end": 396,
      "id": {
        "type": "Identifier",
        "start": 353,
        "end": 365,
        "name": "OtherDerived",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 374,
        "end": 378,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 379,
        "end": 396,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 381,
            "end": 394,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 381,
              "end": 385,
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
              "start": 385,
              "end": 393,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 387,
                "end": 393
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
      "start": 398,
      "end": 833,
      "id": {
        "type": "Identifier",
        "start": 408,
        "end": 409,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 410,
        "end": 833,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 432,
            "end": 456,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 432,
              "end": 433,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 433,
              "end": 455,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 435,
                "end": 455,
                "abstract": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 439,
                  "end": 442,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 440,
                      "end": 441,
                      "name": {
                        "type": "Identifier",
                        "start": 440,
                        "end": 441,
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
                    "start": 443,
                    "end": 447,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 444,
                      "end": 447,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 446,
                        "end": 447,
                        "typeName": {
                          "type": "Identifier",
                          "start": 446,
                          "end": 447,
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
                  "start": 449,
                  "end": 455,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 452,
                    "end": 455,
                    "elementType": {
                      "type": "TSTypeReference",
                      "start": 452,
                      "end": 453,
                      "typeName": {
                        "type": "Identifier",
                        "start": 452,
                        "end": 453,
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
            "start": 461,
            "end": 491,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 461,
              "end": 463,
              "name": "a2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 463,
              "end": 490,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 465,
                "end": 490,
                "abstract": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 469,
                  "end": 472,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 470,
                      "end": 471,
                      "name": {
                        "type": "Identifier",
                        "start": 470,
                        "end": 471,
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
                    "start": 473,
                    "end": 477,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 474,
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
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 479,
                  "end": 490,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 482,
                    "end": 490,
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 482,
                      "end": 488
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
            "start": 496,
            "end": 522,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 496,
              "end": 498,
              "name": "a3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 498,
              "end": 521,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 500,
                "end": 521,
                "abstract": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 504,
                  "end": 507,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 505,
                      "end": 506,
                      "name": {
                        "type": "Identifier",
                        "start": 505,
                        "end": 506,
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
                    "start": 508,
                    "end": 512,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 509,
                      "end": 512,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 511,
                        "end": 512,
                        "typeName": {
                          "type": "Identifier",
                          "start": 511,
                          "end": 512,
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
                  "start": 514,
                  "end": 521,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 517,
                    "end": 521
                  }
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 527,
            "end": 564,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 527,
              "end": 529,
              "name": "a4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 529,
              "end": 563,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 531,
                "end": 563,
                "abstract": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 535,
                  "end": 541,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 536,
                      "end": 537,
                      "name": {
                        "type": "Identifier",
                        "start": 536,
                        "end": 537,
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
                      "start": 539,
                      "end": 540,
                      "name": {
                        "type": "Identifier",
                        "start": 539,
                        "end": 540,
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
                    "start": 542,
                    "end": 546,
                    "name": "x",
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
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 548,
                    "end": 552,
                    "name": "y",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 549,
                      "end": 552,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 551,
                        "end": 552,
                        "typeName": {
                          "type": "Identifier",
                          "start": 551,
                          "end": 552,
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
                  "start": 554,
                  "end": 563,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 557,
                    "end": 563
                  }
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 569,
            "end": 607,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 569,
              "end": 571,
              "name": "a5",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 571,
              "end": 606,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 573,
                "end": 606,
                "abstract": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 577,
                  "end": 583,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 578,
                      "end": 579,
                      "name": {
                        "type": "Identifier",
                        "start": 578,
                        "end": 579,
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
                      "start": 581,
                      "end": 582,
                      "name": {
                        "type": "Identifier",
                        "start": 581,
                        "end": 582,
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
                    "start": 584,
                    "end": 600,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 585,
                      "end": 600,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 587,
                        "end": 600,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 588,
                            "end": 594,
                            "name": "arg",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 591,
                              "end": 594,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 593,
                                "end": 594,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 593,
                                  "end": 594,
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
                          "start": 596,
                          "end": 600,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 599,
                            "end": 600,
                            "typeName": {
                              "type": "Identifier",
                              "start": 599,
                              "end": 600,
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
                  "start": 602,
                  "end": 606,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 605,
                    "end": 606,
                    "typeName": {
                      "type": "Identifier",
                      "start": 605,
                      "end": 606,
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
            "start": 612,
            "end": 666,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 612,
              "end": 614,
              "name": "a6",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 614,
              "end": 665,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 616,
                "end": 665,
                "abstract": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 620,
                  "end": 636,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 621,
                      "end": 635,
                      "name": {
                        "type": "Identifier",
                        "start": 621,
                        "end": 622,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 631,
                        "end": 635,
                        "typeName": {
                          "type": "Identifier",
                          "start": 631,
                          "end": 635,
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
                    "start": 637,
                    "end": 659,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 638,
                      "end": 659,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 640,
                        "end": 659,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 641,
                            "end": 647,
                            "name": "arg",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 644,
                              "end": 647,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 646,
                                "end": 647,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 646,
                                  "end": 647,
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
                          "start": 649,
                          "end": 659,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 652,
                            "end": 659,
                            "typeName": {
                              "type": "Identifier",
                              "start": 652,
                              "end": 659,
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
                  "start": 661,
                  "end": 665,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 664,
                    "end": 665,
                    "typeName": {
                      "type": "Identifier",
                      "start": 664,
                      "end": 665,
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
            "start": 671,
            "end": 730,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 671,
              "end": 674,
              "name": "a11",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 674,
              "end": 729,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 676,
                "end": 729,
                "abstract": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 680,
                  "end": 683,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 681,
                      "end": 682,
                      "name": {
                        "type": "Identifier",
                        "start": 681,
                        "end": 682,
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
                    "start": 684,
                    "end": 697,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 685,
                      "end": 697,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 687,
                        "end": 697,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 689,
                            "end": 695,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 689,
                              "end": 692,
                              "name": "foo",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
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
                    "start": 699,
                    "end": 720,
                    "name": "y",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 700,
                      "end": 720,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 702,
                        "end": 720,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 704,
                            "end": 711,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 704,
                              "end": 707,
                              "name": "foo",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 707,
                              "end": 710,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 709,
                                "end": 710,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 709,
                                  "end": 710,
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
                            "start": 712,
                            "end": 718,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 712,
                              "end": 715,
                              "name": "bar",
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
                  "start": 722,
                  "end": 729,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 725,
                    "end": 729,
                    "typeName": {
                      "type": "Identifier",
                      "start": 725,
                      "end": 729,
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
            "start": 735,
            "end": 774,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 735,
              "end": 738,
              "name": "a15",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 738,
              "end": 773,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 740,
                "end": 773,
                "abstract": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 744,
                  "end": 747,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 745,
                      "end": 746,
                      "name": {
                        "type": "Identifier",
                        "start": 745,
                        "end": 746,
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
                    "start": 748,
                    "end": 765,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 749,
                      "end": 765,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 751,
                        "end": 765,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 753,
                            "end": 758,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 753,
                              "end": 754,
                              "name": "a",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
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
                            "start": 759,
                            "end": 763,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 759,
                              "end": 760,
                              "name": "b",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 760,
                              "end": 763,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 762,
                                "end": 763,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 762,
                                  "end": 763,
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
                  "start": 767,
                  "end": 773,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 770,
                    "end": 773,
                    "elementType": {
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
                  }
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 779,
            "end": 831,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 779,
              "end": 782,
              "name": "a16",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 782,
              "end": 830,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 784,
                "end": 830,
                "abstract": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 788,
                  "end": 804,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 789,
                      "end": 803,
                      "name": {
                        "type": "Identifier",
                        "start": 789,
                        "end": 790,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 799,
                        "end": 803,
                        "typeName": {
                          "type": "Identifier",
                          "start": 799,
                          "end": 803,
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
                    "start": 805,
                    "end": 822,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 806,
                      "end": 822,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 808,
                        "end": 822,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 810,
                            "end": 815,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 810,
                              "end": 811,
                              "name": "a",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 811,
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
                            },
                            "accessibility": null,
                            "static": false
                          },
                          {
                            "type": "TSPropertySignature",
                            "start": 816,
                            "end": 820,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 816,
                              "end": 817,
                              "name": "b",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 817,
                              "end": 820,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 819,
                                "end": 820,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 819,
                                  "end": 820,
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
                  "start": 824,
                  "end": 830,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 827,
                    "end": 830,
                    "elementType": {
                      "type": "TSTypeReference",
                      "start": 827,
                      "end": 828,
                      "typeName": {
                        "type": "Identifier",
                        "start": 827,
                        "end": 828,
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
      "start": 842,
      "end": 897,
      "id": {
        "type": "Identifier",
        "start": 852,
        "end": 853,
        "name": "I",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 865,
          "end": 866,
          "expression": {
            "type": "Identifier",
            "start": 865,
            "end": 866,
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
        "start": 853,
        "end": 856,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 854,
            "end": 855,
            "name": {
              "type": "Identifier",
              "start": 854,
              "end": 855,
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
        "start": 867,
        "end": 897,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 873,
            "end": 894,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 873,
              "end": 874,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 874,
              "end": 893,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 876,
                "end": 893,
                "abstract": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 881,
                    "end": 885,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 882,
                      "end": 885,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 884,
                        "end": 885,
                        "typeName": {
                          "type": "Identifier",
                          "start": 884,
                          "end": 885,
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
                  "start": 887,
                  "end": 893,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 890,
                    "end": 893,
                    "elementType": {
                      "type": "TSTypeReference",
                      "start": 890,
                      "end": 891,
                      "typeName": {
                        "type": "Identifier",
                        "start": 890,
                        "end": 891,
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
      "start": 899,
      "end": 961,
      "id": {
        "type": "Identifier",
        "start": 909,
        "end": 911,
        "name": "I2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 923,
          "end": 924,
          "expression": {
            "type": "Identifier",
            "start": 923,
            "end": 924,
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
        "start": 911,
        "end": 914,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 912,
            "end": 913,
            "name": {
              "type": "Identifier",
              "start": 912,
              "end": 913,
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
        "start": 925,
        "end": 961,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 931,
            "end": 958,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 931,
              "end": 933,
              "name": "a2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 933,
              "end": 957,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 935,
                "end": 957,
                "abstract": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 940,
                    "end": 944,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 941,
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
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 946,
                  "end": 957,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 949,
                    "end": 957,
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 949,
                      "end": 955
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
      "start": 963,
      "end": 1017,
      "id": {
        "type": "Identifier",
        "start": 973,
        "end": 975,
        "name": "I3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 987,
          "end": 988,
          "expression": {
            "type": "Identifier",
            "start": 987,
            "end": 988,
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
        "start": 975,
        "end": 978,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 976,
            "end": 977,
            "name": {
              "type": "Identifier",
              "start": 976,
              "end": 977,
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
        "start": 989,
        "end": 1017,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 995,
            "end": 1015,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 995,
              "end": 997,
              "name": "a3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 997,
              "end": 1014,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 999,
                "end": 1014,
                "abstract": false,
                "typeParameters": null,
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
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 1010,
                  "end": 1014,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1013,
                    "end": 1014,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1013,
                      "end": 1014,
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
      "start": 1019,
      "end": 1088,
      "id": {
        "type": "Identifier",
        "start": 1029,
        "end": 1031,
        "name": "I4",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 1043,
          "end": 1044,
          "expression": {
            "type": "Identifier",
            "start": 1043,
            "end": 1044,
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
        "start": 1031,
        "end": 1034,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1032,
            "end": 1033,
            "name": {
              "type": "Identifier",
              "start": 1032,
              "end": 1033,
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
        "start": 1045,
        "end": 1088,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 1051,
            "end": 1085,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1051,
              "end": 1053,
              "name": "a4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1053,
              "end": 1084,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 1055,
                "end": 1084,
                "abstract": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 1059,
                  "end": 1062,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 1060,
                      "end": 1061,
                      "name": {
                        "type": "Identifier",
                        "start": 1060,
                        "end": 1061,
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
                    "start": 1063,
                    "end": 1067,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1064,
                      "end": 1067,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1066,
                        "end": 1067,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1066,
                          "end": 1067,
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
                    "start": 1069,
                    "end": 1073,
                    "name": "y",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1070,
                      "end": 1073,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1072,
                        "end": 1073,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1072,
                          "end": 1073,
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
                  "start": 1075,
                  "end": 1084,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1078,
                    "end": 1084
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
      "start": 1090,
      "end": 1160,
      "id": {
        "type": "Identifier",
        "start": 1100,
        "end": 1102,
        "name": "I5",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 1114,
          "end": 1115,
          "expression": {
            "type": "Identifier",
            "start": 1114,
            "end": 1115,
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
        "start": 1102,
        "end": 1105,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1103,
            "end": 1104,
            "name": {
              "type": "Identifier",
              "start": 1103,
              "end": 1104,
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
        "start": 1116,
        "end": 1160,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 1122,
            "end": 1157,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1122,
              "end": 1124,
              "name": "a5",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1124,
              "end": 1156,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 1126,
                "end": 1156,
                "abstract": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 1130,
                  "end": 1133,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 1131,
                      "end": 1132,
                      "name": {
                        "type": "Identifier",
                        "start": 1131,
                        "end": 1132,
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
                    "start": 1134,
                    "end": 1150,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1135,
                      "end": 1150,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 1137,
                        "end": 1150,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 1138,
                            "end": 1144,
                            "name": "arg",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1141,
                              "end": 1144,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 1143,
                                "end": 1144,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1143,
                                  "end": 1144,
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
                          "start": 1146,
                          "end": 1150,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 1149,
                            "end": 1150,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1149,
                              "end": 1150,
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
                  "start": 1152,
                  "end": 1156,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1155,
                    "end": 1156,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1155,
                      "end": 1156,
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
      "start": 1162,
      "end": 1256,
      "id": {
        "type": "Identifier",
        "start": 1172,
        "end": 1174,
        "name": "I7",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 1186,
          "end": 1187,
          "expression": {
            "type": "Identifier",
            "start": 1186,
            "end": 1187,
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
        "start": 1174,
        "end": 1177,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1175,
            "end": 1176,
            "name": {
              "type": "Identifier",
              "start": 1175,
              "end": 1176,
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
        "start": 1188,
        "end": 1256,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 1194,
            "end": 1253,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1194,
              "end": 1197,
              "name": "a11",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1197,
              "end": 1252,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 1199,
                "end": 1252,
                "abstract": false,
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
                    "end": 1220,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1208,
                      "end": 1220,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 1210,
                        "end": 1220,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 1212,
                            "end": 1218,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 1212,
                              "end": 1215,
                              "name": "foo",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1215,
                              "end": 1218,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 1217,
                                "end": 1218,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1217,
                                  "end": 1218,
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
                    "start": 1222,
                    "end": 1243,
                    "name": "y",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1223,
                      "end": 1243,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 1225,
                        "end": 1243,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 1227,
                            "end": 1234,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 1227,
                              "end": 1230,
                              "name": "foo",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1230,
                              "end": 1233,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 1232,
                                "end": 1233,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1232,
                                  "end": 1233,
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
                            "start": 1235,
                            "end": 1241,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 1235,
                              "end": 1238,
                              "name": "bar",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1238,
                              "end": 1241,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 1240,
                                "end": 1241,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1240,
                                  "end": 1241,
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
                  "start": 1245,
                  "end": 1252,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1248,
                    "end": 1252,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1248,
                      "end": 1252,
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
      "start": 1258,
      "end": 1329,
      "id": {
        "type": "Identifier",
        "start": 1268,
        "end": 1270,
        "name": "I9",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 1282,
          "end": 1283,
          "expression": {
            "type": "Identifier",
            "start": 1282,
            "end": 1283,
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
        "start": 1270,
        "end": 1273,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1271,
            "end": 1272,
            "name": {
              "type": "Identifier",
              "start": 1271,
              "end": 1272,
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
        "start": 1284,
        "end": 1329,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 1290,
            "end": 1326,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1290,
              "end": 1293,
              "name": "a16",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1293,
              "end": 1325,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 1295,
                "end": 1325,
                "abstract": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1300,
                    "end": 1317,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1301,
                      "end": 1317,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 1303,
                        "end": 1317,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 1305,
                            "end": 1310,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 1305,
                              "end": 1306,
                              "name": "a",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1306,
                              "end": 1309,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 1308,
                                "end": 1309,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1308,
                                  "end": 1309,
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
                            "start": 1311,
                            "end": 1315,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 1311,
                              "end": 1312,
                              "name": "b",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1312,
                              "end": 1315,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 1314,
                                "end": 1315,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1314,
                                  "end": 1315,
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
                  "start": 1319,
                  "end": 1325,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 1322,
                    "end": 1325,
                    "elementType": {
                      "type": "TSTypeReference",
                      "start": 1322,
                      "end": 1323,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1322,
                        "end": 1323,
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
