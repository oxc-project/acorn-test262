__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 102,
  "end": 3292,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 102,
      "end": 129,
      "id": {
        "type": "Identifier",
        "start": 108,
        "end": 112,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 113,
        "end": 129,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 115,
            "end": 127,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 115,
              "end": 118,
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
              "start": 118,
              "end": 126,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 120,
                "end": 126
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
      "start": 130,
      "end": 173,
      "id": {
        "type": "Identifier",
        "start": 136,
        "end": 143,
        "name": "Derived",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 152,
        "end": 156,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 157,
        "end": 173,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 159,
            "end": 171,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 159,
              "end": 162,
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
              "start": 162,
              "end": 170,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 164,
                "end": 170
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
      "start": 174,
      "end": 221,
      "id": {
        "type": "Identifier",
        "start": 180,
        "end": 188,
        "name": "Derived2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 197,
        "end": 204,
        "name": "Derived",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 205,
        "end": 221,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 207,
            "end": 219,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 207,
              "end": 210,
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
              "start": 210,
              "end": 218,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 212,
                "end": 218
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
      "start": 222,
      "end": 271,
      "id": {
        "type": "Identifier",
        "start": 228,
        "end": 240,
        "name": "OtherDerived",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 249,
        "end": 253,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 254,
        "end": 271,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 256,
            "end": 269,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 256,
              "end": 260,
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
              "start": 260,
              "end": 268,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 262,
                "end": 268
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
      "start": 273,
      "end": 1683,
      "id": {
        "type": "Identifier",
        "start": 283,
        "end": 284,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 285,
        "end": 1683,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 307,
            "end": 338,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 307,
              "end": 308,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 308,
              "end": 337,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 310,
                "end": 337,
                "abstract": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 315,
                    "end": 324,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 316,
                      "end": 324,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 318,
                        "end": 324
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 326,
                  "end": 337,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 329,
                    "end": 337,
                    "elementType": {
                      "type": "TSNumberKeyword",
                      "start": 329,
                      "end": 335
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
            "start": 343,
            "end": 375,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 343,
              "end": 345,
              "name": "a2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 345,
              "end": 374,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 347,
                "end": 374,
                "abstract": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 352,
                    "end": 361,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 353,
                      "end": 361,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 355,
                        "end": 361
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 363,
                  "end": 374,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 366,
                    "end": 374,
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 366,
                      "end": 372
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
            "start": 380,
            "end": 408,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 380,
              "end": 382,
              "name": "a3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 382,
              "end": 407,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 384,
                "end": 407,
                "abstract": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 389,
                    "end": 398,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 390,
                      "end": 398,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 392,
                        "end": 398
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 400,
                  "end": 407,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 403,
                    "end": 407
                  }
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 413,
            "end": 454,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 413,
              "end": 415,
              "name": "a4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 415,
              "end": 453,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 417,
                "end": 453,
                "abstract": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 422,
                    "end": 431,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 423,
                      "end": 431,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 425,
                        "end": 431
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 433,
                    "end": 442,
                    "name": "y",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 434,
                      "end": 442,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 436,
                        "end": 442
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 444,
                  "end": 453,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 447,
                    "end": 453
                  }
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 459,
            "end": 506,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 459,
              "end": 461,
              "name": "a5",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 461,
              "end": 505,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 463,
                "end": 505,
                "abstract": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 468,
                    "end": 494,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 469,
                      "end": 494,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 471,
                        "end": 494,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 472,
                            "end": 483,
                            "name": "arg",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 475,
                              "end": 483,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 477,
                                "end": 483
                              }
                            },
                            "decorators": [],
                            "optional": false
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 485,
                          "end": 494,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 488,
                            "end": 494
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
                  "start": 496,
                  "end": 505,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 499,
                    "end": 505
                  }
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 511,
            "end": 555,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 511,
              "end": 513,
              "name": "a6",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 513,
              "end": 554,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 515,
                "end": 554,
                "abstract": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 520,
                    "end": 545,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 521,
                      "end": 545,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 523,
                        "end": 545,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 524,
                            "end": 533,
                            "name": "arg",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 527,
                              "end": 533,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 529,
                                "end": 533,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 529,
                                  "end": 533,
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
                          "start": 535,
                          "end": 545,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 538,
                            "end": 545,
                            "typeName": {
                              "type": "Identifier",
                              "start": 538,
                              "end": 545,
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
                  "start": 547,
                  "end": 554,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 550,
                    "end": 554,
                    "typeName": {
                      "type": "Identifier",
                      "start": 550,
                      "end": 554,
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
            "start": 560,
            "end": 620,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 560,
              "end": 562,
              "name": "a7",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 562,
              "end": 619,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 564,
                "end": 619,
                "abstract": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 569,
                    "end": 594,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 570,
                      "end": 594,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 572,
                        "end": 594,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 573,
                            "end": 582,
                            "name": "arg",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 576,
                              "end": 582,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 578,
                                "end": 582,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 578,
                                  "end": 582,
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
                          "start": 584,
                          "end": 594,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 587,
                            "end": 594,
                            "typeName": {
                              "type": "Identifier",
                              "start": 587,
                              "end": 594,
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
                  "start": 596,
                  "end": 619,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 599,
                    "end": 619,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 600,
                        "end": 607,
                        "name": "r",
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
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 625,
            "end": 713,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 625,
              "end": 627,
              "name": "a8",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 627,
              "end": 712,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 629,
                "end": 712,
                "abstract": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 634,
                    "end": 659,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 635,
                      "end": 659,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 637,
                        "end": 659,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 638,
                            "end": 647,
                            "name": "arg",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 641,
                              "end": 647,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 643,
                                "end": 647,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 643,
                                  "end": 647,
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
                  },
                  {
                    "type": "Identifier",
                    "start": 661,
                    "end": 687,
                    "name": "y",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 662,
                      "end": 687,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 664,
                        "end": 687,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 665,
                            "end": 675,
                            "name": "arg2",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 669,
                              "end": 675,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 671,
                                "end": 675,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 671,
                                  "end": 675,
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
                          "start": 677,
                          "end": 687,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 680,
                            "end": 687,
                            "typeName": {
                              "type": "Identifier",
                              "start": 680,
                              "end": 687,
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
                  "start": 689,
                  "end": 712,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 692,
                    "end": 712,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 693,
                        "end": 700,
                        "name": "r",
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
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 718,
            "end": 806,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 718,
              "end": 720,
              "name": "a9",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 720,
              "end": 805,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 722,
                "end": 805,
                "abstract": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 727,
                    "end": 752,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 728,
                      "end": 752,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 730,
                        "end": 752,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 731,
                            "end": 740,
                            "name": "arg",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 734,
                              "end": 740,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 736,
                                "end": 740,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 736,
                                  "end": 740,
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
                          "start": 742,
                          "end": 752,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 745,
                            "end": 752,
                            "typeName": {
                              "type": "Identifier",
                              "start": 745,
                              "end": 752,
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
                    "start": 754,
                    "end": 780,
                    "name": "y",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 755,
                      "end": 780,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 757,
                        "end": 780,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 758,
                            "end": 768,
                            "name": "arg2",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 762,
                              "end": 768,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 764,
                                "end": 768,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 764,
                                  "end": 768,
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
                          "start": 770,
                          "end": 780,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 773,
                            "end": 780,
                            "typeName": {
                              "type": "Identifier",
                              "start": 773,
                              "end": 780,
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
                  "start": 782,
                  "end": 805,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 785,
                    "end": 805,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 786,
                        "end": 793,
                        "name": "r",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 787,
                          "end": 793,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 789,
                            "end": 793,
                            "typeName": {
                              "type": "Identifier",
                              "start": 789,
                              "end": 793,
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
                      "start": 795,
                      "end": 805,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 798,
                        "end": 805,
                        "typeName": {
                          "type": "Identifier",
                          "start": 798,
                          "end": 805,
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
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 811,
            "end": 849,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 811,
              "end": 814,
              "name": "a10",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 814,
              "end": 848,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 816,
                "end": 848,
                "abstract": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "RestElement",
                    "start": 821,
                    "end": 836,
                    "argument": {
                      "type": "Identifier",
                      "start": 824,
                      "end": 825,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "decorators": [],
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 825,
                      "end": 836,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 827,
                        "end": 836,
                        "elementType": {
                          "type": "TSTypeReference",
                          "start": 827,
                          "end": 834,
                          "typeName": {
                            "type": "Identifier",
                            "start": 827,
                            "end": 834,
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
                  "start": 838,
                  "end": 848,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 841,
                    "end": 848,
                    "typeName": {
                      "type": "Identifier",
                      "start": 841,
                      "end": 848,
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
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 854,
            "end": 925,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 854,
              "end": 857,
              "name": "a11",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 857,
              "end": 924,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 859,
                "end": 924,
                "abstract": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 864,
                    "end": 882,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 865,
                      "end": 882,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 867,
                        "end": 882,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 869,
                            "end": 880,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 869,
                              "end": 872,
                              "name": "foo",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 872,
                              "end": 880,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 874,
                                "end": 880
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
                    "start": 884,
                    "end": 915,
                    "name": "y",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 885,
                      "end": 915,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 887,
                        "end": 915,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 889,
                            "end": 901,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 889,
                              "end": 892,
                              "name": "foo",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 892,
                              "end": 900,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 894,
                                "end": 900
                              }
                            },
                            "accessibility": null,
                            "static": false
                          },
                          {
                            "type": "TSPropertySignature",
                            "start": 902,
                            "end": 913,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 902,
                              "end": 905,
                              "name": "bar",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 905,
                              "end": 913,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 907,
                                "end": 913
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
                  "start": 917,
                  "end": 924,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 920,
                    "end": 924,
                    "typeName": {
                      "type": "Identifier",
                      "start": 920,
                      "end": 924,
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
            "start": 930,
            "end": 994,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 930,
              "end": 933,
              "name": "a12",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 933,
              "end": 993,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 935,
                "end": 993,
                "abstract": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 940,
                    "end": 954,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 941,
                      "end": 954,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 943,
                        "end": 954,
                        "typeName": {
                          "type": "Identifier",
                          "start": 943,
                          "end": 948,
                          "name": "Array",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 948,
                          "end": 954,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 949,
                              "end": 953,
                              "typeName": {
                                "type": "Identifier",
                                "start": 949,
                                "end": 953,
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
                    "start": 956,
                    "end": 974,
                    "name": "y",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 957,
                      "end": 974,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 959,
                        "end": 974,
                        "typeName": {
                          "type": "Identifier",
                          "start": 959,
                          "end": 964,
                          "name": "Array",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 964,
                          "end": 974,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 965,
                              "end": 973,
                              "typeName": {
                                "type": "Identifier",
                                "start": 965,
                                "end": 973,
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
                  "start": 976,
                  "end": 993,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 979,
                    "end": 993,
                    "typeName": {
                      "type": "Identifier",
                      "start": 979,
                      "end": 984,
                      "name": "Array",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 984,
                      "end": 993,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 985,
                          "end": 992,
                          "typeName": {
                            "type": "Identifier",
                            "start": 985,
                            "end": 992,
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
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 999,
            "end": 1062,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 999,
              "end": 1002,
              "name": "a13",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1002,
              "end": 1061,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 1004,
                "end": 1061,
                "abstract": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1009,
                    "end": 1023,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1010,
                      "end": 1023,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1012,
                        "end": 1023,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1012,
                          "end": 1017,
                          "name": "Array",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 1017,
                          "end": 1023,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 1018,
                              "end": 1022,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1018,
                                "end": 1022,
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
                    "start": 1025,
                    "end": 1042,
                    "name": "y",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1026,
                      "end": 1042,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1028,
                        "end": 1042,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1028,
                          "end": 1033,
                          "name": "Array",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 1033,
                          "end": 1042,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 1034,
                              "end": 1041,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1034,
                                "end": 1041,
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
                  "start": 1044,
                  "end": 1061,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1047,
                    "end": 1061,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1047,
                      "end": 1052,
                      "name": "Array",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 1052,
                      "end": 1061,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 1053,
                          "end": 1060,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1053,
                            "end": 1060,
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
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 1067,
            "end": 1116,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1067,
              "end": 1070,
              "name": "a14",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1070,
              "end": 1115,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 1072,
                "end": 1115,
                "abstract": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1077,
                    "end": 1104,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1078,
                      "end": 1104,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 1080,
                        "end": 1104,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 1082,
                            "end": 1092,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 1082,
                              "end": 1083,
                              "name": "a",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1083,
                              "end": 1091,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 1085,
                                "end": 1091
                              }
                            },
                            "accessibility": null,
                            "static": false
                          },
                          {
                            "type": "TSPropertySignature",
                            "start": 1093,
                            "end": 1102,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 1093,
                              "end": 1094,
                              "name": "b",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1094,
                              "end": 1102,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 1096,
                                "end": 1102
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
                  "start": 1106,
                  "end": 1115,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1109,
                    "end": 1115,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1109,
                      "end": 1115,
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
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 1121,
            "end": 1204,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1121,
              "end": 1124,
              "name": "a15",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1124,
              "end": 1203,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 1126,
                "end": 1203,
                "members": [
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "start": 1136,
                    "end": 1162,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1141,
                        "end": 1150,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1142,
                          "end": 1150,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 1144,
                            "end": 1150
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 1151,
                      "end": 1161,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 1153,
                        "end": 1161,
                        "elementType": {
                          "type": "TSNumberKeyword",
                          "start": 1153,
                          "end": 1159
                        }
                      }
                    }
                  },
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "start": 1171,
                    "end": 1197,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1176,
                        "end": 1185,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1177,
                          "end": 1185,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 1179,
                            "end": 1185
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 1186,
                      "end": 1196,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 1188,
                        "end": 1196,
                        "elementType": {
                          "type": "TSStringKeyword",
                          "start": 1188,
                          "end": 1194
                        }
                      }
                    }
                  }
                ]
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 1209,
            "end": 1317,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1209,
              "end": 1212,
              "name": "a16",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1212,
              "end": 1316,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 1214,
                "end": 1316,
                "members": [
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "start": 1224,
                    "end": 1264,
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 1228,
                      "end": 1247,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 1229,
                          "end": 1246,
                          "name": {
                            "type": "Identifier",
                            "start": 1229,
                            "end": 1230,
                            "name": "T",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "constraint": {
                            "type": "TSTypeReference",
                            "start": 1239,
                            "end": 1246,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1239,
                              "end": 1246,
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
                        "start": 1248,
                        "end": 1252,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1249,
                          "end": 1252,
                          "typeAnnotation": {
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
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 1253,
                      "end": 1263,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 1255,
                        "end": 1263,
                        "elementType": {
                          "type": "TSNumberKeyword",
                          "start": 1255,
                          "end": 1261
                        }
                      }
                    }
                  },
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "start": 1273,
                    "end": 1310,
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 1277,
                      "end": 1293,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 1278,
                          "end": 1292,
                          "name": {
                            "type": "Identifier",
                            "start": 1278,
                            "end": 1279,
                            "name": "U",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "constraint": {
                            "type": "TSTypeReference",
                            "start": 1288,
                            "end": 1292,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1288,
                              "end": 1292,
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
                        "start": 1294,
                        "end": 1298,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1295,
                          "end": 1298,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 1297,
                            "end": 1298,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1297,
                              "end": 1298,
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
                      "start": 1299,
                      "end": 1309,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 1301,
                        "end": 1309,
                        "elementType": {
                          "type": "TSNumberKeyword",
                          "start": 1301,
                          "end": 1307
                        }
                      }
                    }
                  }
                ]
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 1322,
            "end": 1443,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1322,
              "end": 1325,
              "name": "a17",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1325,
              "end": 1442,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 1327,
                "end": 1442,
                "members": [
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "start": 1337,
                    "end": 1382,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1342,
                        "end": 1370,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1343,
                          "end": 1370,
                          "typeAnnotation": {
                            "type": "TSConstructorType",
                            "start": 1345,
                            "end": 1370,
                            "abstract": false,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 1350,
                                "end": 1359,
                                "name": "a",
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 1351,
                                  "end": 1359,
                                  "typeAnnotation": {
                                    "type": "TSNumberKeyword",
                                    "start": 1353,
                                    "end": 1359
                                  }
                                },
                                "decorators": [],
                                "optional": false
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "start": 1361,
                              "end": 1370,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 1364,
                                "end": 1370
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
                      "start": 1371,
                      "end": 1381,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 1373,
                        "end": 1381,
                        "elementType": {
                          "type": "TSNumberKeyword",
                          "start": 1373,
                          "end": 1379
                        }
                      }
                    }
                  },
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "start": 1391,
                    "end": 1436,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1396,
                        "end": 1424,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1397,
                          "end": 1424,
                          "typeAnnotation": {
                            "type": "TSConstructorType",
                            "start": 1399,
                            "end": 1424,
                            "abstract": false,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 1404,
                                "end": 1413,
                                "name": "a",
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 1405,
                                  "end": 1413,
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 1407,
                                    "end": 1413
                                  }
                                },
                                "decorators": [],
                                "optional": false
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "start": 1415,
                              "end": 1424,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 1418,
                                "end": 1424
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
                      "start": 1425,
                      "end": 1435,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 1427,
                        "end": 1435,
                        "elementType": {
                          "type": "TSStringKeyword",
                          "start": 1427,
                          "end": 1433
                        }
                      }
                    }
                  }
                ]
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 1448,
            "end": 1681,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1448,
              "end": 1451,
              "name": "a18",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1451,
              "end": 1680,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 1453,
                "end": 1680,
                "members": [
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "start": 1463,
                    "end": 1565,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1468,
                        "end": 1556,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1469,
                          "end": 1556,
                          "typeAnnotation": {
                            "type": "TSTypeLiteral",
                            "start": 1471,
                            "end": 1556,
                            "members": [
                              {
                                "type": "TSConstructSignatureDeclaration",
                                "start": 1485,
                                "end": 1509,
                                "typeParameters": null,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "start": 1490,
                                    "end": 1499,
                                    "name": "a",
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 1491,
                                      "end": 1499,
                                      "typeAnnotation": {
                                        "type": "TSNumberKeyword",
                                        "start": 1493,
                                        "end": 1499
                                      }
                                    },
                                    "decorators": [],
                                    "optional": false
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "start": 1500,
                                  "end": 1508,
                                  "typeAnnotation": {
                                    "type": "TSNumberKeyword",
                                    "start": 1502,
                                    "end": 1508
                                  }
                                }
                              },
                              {
                                "type": "TSConstructSignatureDeclaration",
                                "start": 1522,
                                "end": 1546,
                                "typeParameters": null,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "start": 1527,
                                    "end": 1536,
                                    "name": "a",
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 1528,
                                      "end": 1536,
                                      "typeAnnotation": {
                                        "type": "TSStringKeyword",
                                        "start": 1530,
                                        "end": 1536
                                      }
                                    },
                                    "decorators": [],
                                    "optional": false
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "start": 1537,
                                  "end": 1545,
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 1539,
                                    "end": 1545
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
                      "start": 1557,
                      "end": 1564,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 1559,
                        "end": 1564,
                        "elementType": {
                          "type": "TSAnyKeyword",
                          "start": 1559,
                          "end": 1562
                        }
                      }
                    }
                  },
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "start": 1574,
                    "end": 1674,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1579,
                        "end": 1665,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1580,
                          "end": 1665,
                          "typeAnnotation": {
                            "type": "TSTypeLiteral",
                            "start": 1582,
                            "end": 1665,
                            "members": [
                              {
                                "type": "TSConstructSignatureDeclaration",
                                "start": 1596,
                                "end": 1622,
                                "typeParameters": null,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "start": 1601,
                                    "end": 1611,
                                    "name": "a",
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 1602,
                                      "end": 1611,
                                      "typeAnnotation": {
                                        "type": "TSBooleanKeyword",
                                        "start": 1604,
                                        "end": 1611
                                      }
                                    },
                                    "decorators": [],
                                    "optional": false
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "start": 1612,
                                  "end": 1621,
                                  "typeAnnotation": {
                                    "type": "TSBooleanKeyword",
                                    "start": 1614,
                                    "end": 1621
                                  }
                                }
                              },
                              {
                                "type": "TSConstructSignatureDeclaration",
                                "start": 1635,
                                "end": 1655,
                                "typeParameters": null,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "start": 1640,
                                    "end": 1647,
                                    "name": "a",
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 1641,
                                      "end": 1647,
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "start": 1643,
                                        "end": 1647,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 1643,
                                          "end": 1647,
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
                                  "start": 1648,
                                  "end": 1654,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 1650,
                                    "end": 1654,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 1650,
                                      "end": 1654,
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
                      "start": 1666,
                      "end": 1673,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 1668,
                        "end": 1673,
                        "elementType": {
                          "type": "TSAnyKeyword",
                          "start": 1668,
                          "end": 1671
                        }
                      }
                    }
                  }
                ]
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
      "start": 1692,
      "end": 3292,
      "id": {
        "type": "Identifier",
        "start": 1702,
        "end": 1703,
        "name": "I",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 1712,
          "end": 1713,
          "expression": {
            "type": "Identifier",
            "start": 1712,
            "end": 1713,
            "name": "A",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 1714,
        "end": 3292,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 1731,
            "end": 1755,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1731,
              "end": 1732,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1732,
              "end": 1754,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 1734,
                "end": 1754,
                "abstract": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 1738,
                  "end": 1741,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 1739,
                      "end": 1740,
                      "name": {
                        "type": "Identifier",
                        "start": 1739,
                        "end": 1740,
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
                    "start": 1742,
                    "end": 1746,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1743,
                      "end": 1746,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1745,
                        "end": 1746,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1745,
                          "end": 1746,
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
                  "start": 1748,
                  "end": 1754,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 1751,
                    "end": 1754,
                    "elementType": {
                      "type": "TSTypeReference",
                      "start": 1751,
                      "end": 1752,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1751,
                        "end": 1752,
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
            "start": 1817,
            "end": 1847,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1817,
              "end": 1819,
              "name": "a2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1819,
              "end": 1846,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 1821,
                "end": 1846,
                "abstract": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 1825,
                  "end": 1828,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 1826,
                      "end": 1827,
                      "name": {
                        "type": "Identifier",
                        "start": 1826,
                        "end": 1827,
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
                    "start": 1829,
                    "end": 1833,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1830,
                      "end": 1833,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1832,
                        "end": 1833,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1832,
                          "end": 1833,
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
                  "start": 1835,
                  "end": 1846,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 1838,
                    "end": 1846,
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 1838,
                      "end": 1844
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
            "start": 1858,
            "end": 1881,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1858,
              "end": 1860,
              "name": "a3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1860,
              "end": 1880,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 1862,
                "end": 1880,
                "abstract": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 1866,
                  "end": 1869,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 1867,
                      "end": 1868,
                      "name": {
                        "type": "Identifier",
                        "start": 1867,
                        "end": 1868,
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
                    "start": 1870,
                    "end": 1874,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1871,
                      "end": 1874,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1873,
                        "end": 1874,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1873,
                          "end": 1874,
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
                  "start": 1876,
                  "end": 1880,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1879,
                    "end": 1880,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1879,
                      "end": 1880,
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
            "start": 1916,
            "end": 1948,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1916,
              "end": 1918,
              "name": "a4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1918,
              "end": 1947,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 1920,
                "end": 1947,
                "abstract": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 1924,
                  "end": 1930,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 1925,
                      "end": 1926,
                      "name": {
                        "type": "Identifier",
                        "start": 1925,
                        "end": 1926,
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
                      "start": 1928,
                      "end": 1929,
                      "name": {
                        "type": "Identifier",
                        "start": 1928,
                        "end": 1929,
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
                    "start": 1931,
                    "end": 1935,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1932,
                      "end": 1935,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1934,
                        "end": 1935,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1934,
                          "end": 1935,
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
                    "start": 1937,
                    "end": 1941,
                    "name": "y",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1938,
                      "end": 1941,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1940,
                        "end": 1941,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1940,
                          "end": 1941,
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
                  "start": 1943,
                  "end": 1947,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1946,
                    "end": 1947,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1946,
                      "end": 1947,
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
            "start": 2023,
            "end": 2061,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 2023,
              "end": 2025,
              "name": "a5",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2025,
              "end": 2060,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 2027,
                "end": 2060,
                "abstract": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 2031,
                  "end": 2037,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 2032,
                      "end": 2033,
                      "name": {
                        "type": "Identifier",
                        "start": 2032,
                        "end": 2033,
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
                      "start": 2035,
                      "end": 2036,
                      "name": {
                        "type": "Identifier",
                        "start": 2035,
                        "end": 2036,
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
                    "start": 2038,
                    "end": 2054,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2039,
                      "end": 2054,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 2041,
                        "end": 2054,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 2042,
                            "end": 2048,
                            "name": "arg",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 2045,
                              "end": 2048,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 2047,
                                "end": 2048,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 2047,
                                  "end": 2048,
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
                          "start": 2050,
                          "end": 2054,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 2053,
                            "end": 2054,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2053,
                              "end": 2054,
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
                  "start": 2056,
                  "end": 2060,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 2059,
                    "end": 2060,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2059,
                      "end": 2060,
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
            "start": 2128,
            "end": 2195,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 2128,
              "end": 2130,
              "name": "a6",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2130,
              "end": 2194,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 2132,
                "end": 2194,
                "abstract": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 2136,
                  "end": 2171,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 2137,
                      "end": 2151,
                      "name": {
                        "type": "Identifier",
                        "start": 2137,
                        "end": 2138,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 2147,
                        "end": 2151,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2147,
                          "end": 2151,
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
                      "start": 2153,
                      "end": 2170,
                      "name": {
                        "type": "Identifier",
                        "start": 2153,
                        "end": 2154,
                        "name": "U",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 2163,
                        "end": 2170,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2163,
                          "end": 2170,
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
                    "start": 2172,
                    "end": 2188,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2173,
                      "end": 2188,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 2175,
                        "end": 2188,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 2176,
                            "end": 2182,
                            "name": "arg",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 2179,
                              "end": 2182,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 2181,
                                "end": 2182,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 2181,
                                  "end": 2182,
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
                          "start": 2184,
                          "end": 2188,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 2187,
                            "end": 2188,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2187,
                              "end": 2188,
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
                  "start": 2190,
                  "end": 2194,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 2193,
                    "end": 2194,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2193,
                      "end": 2194,
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
            "start": 2249,
            "end": 2326,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 2249,
              "end": 2251,
              "name": "a7",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2251,
              "end": 2325,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 2253,
                "end": 2325,
                "abstract": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 2257,
                  "end": 2292,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 2258,
                      "end": 2272,
                      "name": {
                        "type": "Identifier",
                        "start": 2258,
                        "end": 2259,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 2268,
                        "end": 2272,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2268,
                          "end": 2272,
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
                      "start": 2274,
                      "end": 2291,
                      "name": {
                        "type": "Identifier",
                        "start": 2274,
                        "end": 2275,
                        "name": "U",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 2284,
                        "end": 2291,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2284,
                          "end": 2291,
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
                    "start": 2293,
                    "end": 2309,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2294,
                      "end": 2309,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 2296,
                        "end": 2309,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 2297,
                            "end": 2303,
                            "name": "arg",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 2300,
                              "end": 2303,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 2302,
                                "end": 2303,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 2302,
                                  "end": 2303,
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
                  "start": 2311,
                  "end": 2325,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 2314,
                    "end": 2325,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 2315,
                        "end": 2319,
                        "name": "r",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2316,
                          "end": 2319,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 2318,
                            "end": 2319,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2318,
                              "end": 2319,
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
                      "start": 2321,
                      "end": 2325,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 2324,
                        "end": 2325,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2324,
                          "end": 2325,
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
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 2337,
            "end": 2433,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 2337,
              "end": 2339,
              "name": "a8",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2339,
              "end": 2432,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 2341,
                "end": 2432,
                "abstract": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 2345,
                  "end": 2380,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 2346,
                      "end": 2360,
                      "name": {
                        "type": "Identifier",
                        "start": 2346,
                        "end": 2347,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 2356,
                        "end": 2360,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2356,
                          "end": 2360,
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
                      "start": 2362,
                      "end": 2379,
                      "name": {
                        "type": "Identifier",
                        "start": 2362,
                        "end": 2363,
                        "name": "U",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 2372,
                        "end": 2379,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2372,
                          "end": 2379,
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
                    "start": 2381,
                    "end": 2397,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2382,
                      "end": 2397,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 2384,
                        "end": 2397,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 2385,
                            "end": 2391,
                            "name": "arg",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 2388,
                              "end": 2391,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 2390,
                                "end": 2391,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 2390,
                                  "end": 2391,
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
                          "start": 2393,
                          "end": 2397,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 2396,
                            "end": 2397,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2396,
                              "end": 2397,
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
                    "start": 2399,
                    "end": 2416,
                    "name": "y",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2400,
                      "end": 2416,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 2402,
                        "end": 2416,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 2403,
                            "end": 2410,
                            "name": "arg2",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 2407,
                              "end": 2410,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 2409,
                                "end": 2410,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 2409,
                                  "end": 2410,
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
                          "start": 2412,
                          "end": 2416,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 2415,
                            "end": 2416,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2415,
                              "end": 2416,
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
                  "start": 2418,
                  "end": 2432,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 2421,
                    "end": 2432,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 2422,
                        "end": 2426,
                        "name": "r",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2423,
                          "end": 2426,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 2425,
                            "end": 2426,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2425,
                              "end": 2426,
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
                      "start": 2428,
                      "end": 2432,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 2431,
                        "end": 2432,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2431,
                          "end": 2432,
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
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 2444,
            "end": 2568,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 2444,
              "end": 2446,
              "name": "a9",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2446,
              "end": 2567,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 2448,
                "end": 2567,
                "abstract": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 2452,
                  "end": 2487,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 2453,
                      "end": 2467,
                      "name": {
                        "type": "Identifier",
                        "start": 2453,
                        "end": 2454,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 2463,
                        "end": 2467,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2463,
                          "end": 2467,
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
                      "start": 2469,
                      "end": 2486,
                      "name": {
                        "type": "Identifier",
                        "start": 2469,
                        "end": 2470,
                        "name": "U",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 2479,
                        "end": 2486,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2479,
                          "end": 2486,
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
                    "start": 2488,
                    "end": 2504,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2489,
                      "end": 2504,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 2491,
                        "end": 2504,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 2492,
                            "end": 2498,
                            "name": "arg",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 2495,
                              "end": 2498,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 2497,
                                "end": 2498,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 2497,
                                  "end": 2498,
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
                          "start": 2500,
                          "end": 2504,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 2503,
                            "end": 2504,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2503,
                              "end": 2504,
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
                    "start": 2506,
                    "end": 2551,
                    "name": "y",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2507,
                      "end": 2551,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 2509,
                        "end": 2551,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 2510,
                            "end": 2545,
                            "name": "arg2",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 2514,
                              "end": 2545,
                              "typeAnnotation": {
                                "type": "TSTypeLiteral",
                                "start": 2516,
                                "end": 2545,
                                "members": [
                                  {
                                    "type": "TSPropertySignature",
                                    "start": 2518,
                                    "end": 2530,
                                    "computed": false,
                                    "optional": false,
                                    "readonly": false,
                                    "key": {
                                      "type": "Identifier",
                                      "start": 2518,
                                      "end": 2521,
                                      "name": "foo",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 2521,
                                      "end": 2529,
                                      "typeAnnotation": {
                                        "type": "TSStringKeyword",
                                        "start": 2523,
                                        "end": 2529
                                      }
                                    },
                                    "accessibility": null,
                                    "static": false
                                  },
                                  {
                                    "type": "TSPropertySignature",
                                    "start": 2531,
                                    "end": 2543,
                                    "computed": false,
                                    "optional": false,
                                    "readonly": false,
                                    "key": {
                                      "type": "Identifier",
                                      "start": 2531,
                                      "end": 2535,
                                      "name": "bing",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 2535,
                                      "end": 2543,
                                      "typeAnnotation": {
                                        "type": "TSNumberKeyword",
                                        "start": 2537,
                                        "end": 2543
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
                          "start": 2547,
                          "end": 2551,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 2550,
                            "end": 2551,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2550,
                              "end": 2551,
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
                  "start": 2553,
                  "end": 2567,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 2556,
                    "end": 2567,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 2557,
                        "end": 2561,
                        "name": "r",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2558,
                          "end": 2561,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 2560,
                            "end": 2561,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2560,
                              "end": 2561,
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
                      "start": 2563,
                      "end": 2567,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 2566,
                        "end": 2567,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2566,
                          "end": 2567,
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
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 2622,
            "end": 2667,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 2622,
              "end": 2625,
              "name": "a10",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2625,
              "end": 2666,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 2627,
                "end": 2666,
                "abstract": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 2631,
                  "end": 2650,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 2632,
                      "end": 2649,
                      "name": {
                        "type": "Identifier",
                        "start": 2632,
                        "end": 2633,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 2642,
                        "end": 2649,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2642,
                          "end": 2649,
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
                    "start": 2651,
                    "end": 2660,
                    "argument": {
                      "type": "Identifier",
                      "start": 2654,
                      "end": 2655,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "decorators": [],
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2655,
                      "end": 2660,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 2657,
                        "end": 2660,
                        "elementType": {
                          "type": "TSTypeReference",
                          "start": 2657,
                          "end": 2658,
                          "typeName": {
                            "type": "Identifier",
                            "start": 2657,
                            "end": 2658,
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
                  "start": 2662,
                  "end": 2666,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 2665,
                    "end": 2666,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2665,
                      "end": 2666,
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
            "start": 2678,
            "end": 2721,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 2678,
              "end": 2681,
              "name": "a11",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2681,
              "end": 2720,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 2683,
                "end": 2720,
                "abstract": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 2687,
                  "end": 2703,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 2688,
                      "end": 2702,
                      "name": {
                        "type": "Identifier",
                        "start": 2688,
                        "end": 2689,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 2698,
                        "end": 2702,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2698,
                          "end": 2702,
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
                    "start": 2704,
                    "end": 2708,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2705,
                      "end": 2708,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 2707,
                        "end": 2708,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2707,
                          "end": 2708,
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
                    "start": 2710,
                    "end": 2714,
                    "name": "y",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2711,
                      "end": 2714,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 2713,
                        "end": 2714,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2713,
                          "end": 2714,
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
                  "start": 2716,
                  "end": 2720,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 2719,
                    "end": 2720,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2719,
                      "end": 2720,
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
            "start": 2732,
            "end": 2805,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 2732,
              "end": 2735,
              "name": "a12",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2735,
              "end": 2804,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 2737,
                "end": 2804,
                "abstract": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 2741,
                  "end": 2764,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 2742,
                      "end": 2763,
                      "name": {
                        "type": "Identifier",
                        "start": 2742,
                        "end": 2743,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 2752,
                        "end": 2763,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2752,
                          "end": 2757,
                          "name": "Array",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 2757,
                          "end": 2763,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 2758,
                              "end": 2762,
                              "typeName": {
                                "type": "Identifier",
                                "start": 2758,
                                "end": 2762,
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
                    "start": 2765,
                    "end": 2779,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2766,
                      "end": 2779,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 2768,
                        "end": 2779,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2768,
                          "end": 2773,
                          "name": "Array",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 2773,
                          "end": 2779,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 2774,
                              "end": 2778,
                              "typeName": {
                                "type": "Identifier",
                                "start": 2774,
                                "end": 2778,
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
                    "start": 2781,
                    "end": 2785,
                    "name": "y",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2782,
                      "end": 2785,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 2784,
                        "end": 2785,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2784,
                          "end": 2785,
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
                  "start": 2787,
                  "end": 2804,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 2790,
                    "end": 2804,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2790,
                      "end": 2795,
                      "name": "Array",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 2795,
                      "end": 2804,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 2796,
                          "end": 2803,
                          "typeName": {
                            "type": "Identifier",
                            "start": 2796,
                            "end": 2803,
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
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 2846,
            "end": 2909,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 2846,
              "end": 2849,
              "name": "a13",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2849,
              "end": 2908,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 2851,
                "end": 2908,
                "abstract": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 2855,
                  "end": 2881,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 2856,
                      "end": 2880,
                      "name": {
                        "type": "Identifier",
                        "start": 2856,
                        "end": 2857,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 2866,
                        "end": 2880,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2866,
                          "end": 2871,
                          "name": "Array",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 2871,
                          "end": 2880,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 2872,
                              "end": 2879,
                              "typeName": {
                                "type": "Identifier",
                                "start": 2872,
                                "end": 2879,
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
                    "start": 2882,
                    "end": 2896,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2883,
                      "end": 2896,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 2885,
                        "end": 2896,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2885,
                          "end": 2890,
                          "name": "Array",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 2890,
                          "end": 2896,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 2891,
                              "end": 2895,
                              "typeName": {
                                "type": "Identifier",
                                "start": 2891,
                                "end": 2895,
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
                    "start": 2898,
                    "end": 2902,
                    "name": "y",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2899,
                      "end": 2902,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 2901,
                        "end": 2902,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2901,
                          "end": 2902,
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
                  "start": 2904,
                  "end": 2908,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 2907,
                    "end": 2908,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2907,
                      "end": 2908,
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
            "start": 3007,
            "end": 3047,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 3007,
              "end": 3010,
              "name": "a14",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3010,
              "end": 3046,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 3012,
                "end": 3046,
                "abstract": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 3016,
                  "end": 3022,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 3017,
                      "end": 3018,
                      "name": {
                        "type": "Identifier",
                        "start": 3017,
                        "end": 3018,
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
                      "start": 3020,
                      "end": 3021,
                      "name": {
                        "type": "Identifier",
                        "start": 3020,
                        "end": 3021,
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
                    "start": 3023,
                    "end": 3040,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 3024,
                      "end": 3040,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 3026,
                        "end": 3040,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 3028,
                            "end": 3033,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 3028,
                              "end": 3029,
                              "name": "a",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 3029,
                              "end": 3032,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 3031,
                                "end": 3032,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 3031,
                                  "end": 3032,
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
                            "start": 3034,
                            "end": 3038,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 3034,
                              "end": 3035,
                              "name": "b",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
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
                  "start": 3042,
                  "end": 3046,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 3045,
                    "end": 3046,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3045,
                      "end": 3046,
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
            "start": 3058,
            "end": 3084,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 3058,
              "end": 3061,
              "name": "a15",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3061,
              "end": 3083,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 3063,
                "end": 3083,
                "abstract": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 3067,
                  "end": 3070,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 3068,
                      "end": 3069,
                      "name": {
                        "type": "Identifier",
                        "start": 3068,
                        "end": 3069,
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
                    "start": 3071,
                    "end": 3075,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 3072,
                      "end": 3075,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 3074,
                        "end": 3075,
                        "typeName": {
                          "type": "Identifier",
                          "start": 3074,
                          "end": 3075,
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
                  "start": 3077,
                  "end": 3083,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 3080,
                    "end": 3083,
                    "elementType": {
                      "type": "TSTypeReference",
                      "start": 3080,
                      "end": 3081,
                      "typeName": {
                        "type": "Identifier",
                        "start": 3080,
                        "end": 3081,
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
            "start": 3095,
            "end": 3139,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 3095,
              "end": 3098,
              "name": "a16",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3098,
              "end": 3138,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 3100,
                "end": 3138,
                "abstract": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 3104,
                  "end": 3120,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 3105,
                      "end": 3119,
                      "name": {
                        "type": "Identifier",
                        "start": 3105,
                        "end": 3106,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 3115,
                        "end": 3119,
                        "typeName": {
                          "type": "Identifier",
                          "start": 3115,
                          "end": 3119,
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
                    "start": 3121,
                    "end": 3125,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 3122,
                      "end": 3125,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 3124,
                        "end": 3125,
                        "typeName": {
                          "type": "Identifier",
                          "start": 3124,
                          "end": 3125,
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
                  "start": 3127,
                  "end": 3138,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 3130,
                    "end": 3138,
                    "elementType": {
                      "type": "TSNumberKeyword",
                      "start": 3130,
                      "end": 3136
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
            "start": 3150,
            "end": 3190,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 3150,
              "end": 3153,
              "name": "a17",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3153,
              "end": 3189,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 3155,
                "end": 3189,
                "abstract": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 3159,
                  "end": 3162,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 3160,
                      "end": 3161,
                      "name": {
                        "type": "Identifier",
                        "start": 3160,
                        "end": 3161,
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
                    "start": 3163,
                    "end": 3181,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 3164,
                      "end": 3181,
                      "typeAnnotation": {
                        "type": "TSConstructorType",
                        "start": 3166,
                        "end": 3181,
                        "abstract": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 3171,
                            "end": 3175,
                            "name": "a",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 3172,
                              "end": 3175,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 3174,
                                "end": 3175,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 3174,
                                  "end": 3175,
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
                          "start": 3177,
                          "end": 3181,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 3180,
                            "end": 3181,
                            "typeName": {
                              "type": "Identifier",
                              "start": 3180,
                              "end": 3181,
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
                  "start": 3183,
                  "end": 3189,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 3186,
                    "end": 3189,
                    "elementType": {
                      "type": "TSTypeReference",
                      "start": 3186,
                      "end": 3187,
                      "typeName": {
                        "type": "Identifier",
                        "start": 3186,
                        "end": 3187,
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
            "start": 3201,
            "end": 3241,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 3201,
              "end": 3204,
              "name": "a18",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3204,
              "end": 3240,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 3206,
                "end": 3240,
                "abstract": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 3210,
                  "end": 3213,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 3211,
                      "end": 3212,
                      "name": {
                        "type": "Identifier",
                        "start": 3211,
                        "end": 3212,
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
                    "start": 3214,
                    "end": 3232,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 3215,
                      "end": 3232,
                      "typeAnnotation": {
                        "type": "TSConstructorType",
                        "start": 3217,
                        "end": 3232,
                        "abstract": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 3222,
                            "end": 3226,
                            "name": "a",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 3223,
                              "end": 3226,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 3225,
                                "end": 3226,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 3225,
                                  "end": 3226,
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
                          "start": 3228,
                          "end": 3232,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 3231,
                            "end": 3232,
                            "typeName": {
                              "type": "Identifier",
                              "start": 3231,
                              "end": 3232,
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
                  "start": 3234,
                  "end": 3240,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 3237,
                    "end": 3240,
                    "elementType": {
                      "type": "TSTypeReference",
                      "start": 3237,
                      "end": 3238,
                      "typeName": {
                        "type": "Identifier",
                        "start": 3237,
                        "end": 3238,
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
