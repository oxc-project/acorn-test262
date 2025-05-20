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
      "end": 1683,
      "body": {
        "type": "TSInterfaceBody",
        "start": 285,
        "end": 1683,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 307,
            "end": 338,
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
              "end": 337,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 310,
                "end": 337,
                "abstract": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 315,
                    "end": 324,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 316,
                      "end": 324,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 318,
                        "end": 324
                      }
                    }
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
                },
                "typeParameters": null
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 343,
            "end": 375,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 343,
              "end": 345,
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
              "start": 345,
              "end": 374,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 347,
                "end": 374,
                "abstract": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 352,
                    "end": 361,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 353,
                      "end": 361,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 355,
                        "end": 361
                      }
                    }
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
                },
                "typeParameters": null
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 380,
            "end": 408,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 380,
              "end": 382,
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
              "start": 382,
              "end": 407,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 384,
                "end": 407,
                "abstract": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 389,
                    "end": 398,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 390,
                      "end": 398,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 392,
                        "end": 398
                      }
                    }
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
                },
                "typeParameters": null
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 413,
            "end": 454,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 413,
              "end": 415,
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
              "start": 415,
              "end": 453,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 417,
                "end": 453,
                "abstract": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 422,
                    "end": 431,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 423,
                      "end": 431,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 425,
                        "end": 431
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 433,
                    "end": 442,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 434,
                      "end": 442,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 436,
                        "end": 442
                      }
                    }
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
                },
                "typeParameters": null
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 459,
            "end": 506,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 459,
              "end": 461,
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
              "start": 461,
              "end": 505,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 463,
                "end": 505,
                "abstract": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 468,
                    "end": 494,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 469,
                      "end": 494,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 471,
                        "end": 494,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 472,
                            "end": 483,
                            "decorators": [],
                            "name": "arg",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 475,
                              "end": 483,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 477,
                                "end": 483
                              }
                            }
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
                        },
                        "typeParameters": null
                      }
                    }
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
                },
                "typeParameters": null
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 511,
            "end": 555,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 511,
              "end": 513,
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
              "start": 513,
              "end": 554,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 515,
                "end": 554,
                "abstract": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 520,
                    "end": 545,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 521,
                      "end": 545,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 523,
                        "end": 545,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 524,
                            "end": 533,
                            "decorators": [],
                            "name": "arg",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 527,
                              "end": 533,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 529,
                                "end": 533,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 529,
                                  "end": 533,
                                  "decorators": [],
                                  "name": "Base",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            }
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
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 538,
                              "end": 545,
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
                  "start": 547,
                  "end": 554,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 550,
                    "end": 554,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 550,
                      "end": 554,
                      "decorators": [],
                      "name": "Base",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "typeParameters": null
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 560,
            "end": 620,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 560,
              "end": 562,
              "decorators": [],
              "name": "a7",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 562,
              "end": 619,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 564,
                "end": 619,
                "abstract": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 569,
                    "end": 594,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 570,
                      "end": 594,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 572,
                        "end": 594,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 573,
                            "end": 582,
                            "decorators": [],
                            "name": "arg",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 576,
                              "end": 582,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 578,
                                "end": 582,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 578,
                                  "end": 582,
                                  "decorators": [],
                                  "name": "Base",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            }
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
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 587,
                              "end": 594,
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
                  "start": 596,
                  "end": 619,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 599,
                    "end": 619,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 600,
                        "end": 607,
                        "decorators": [],
                        "name": "r",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 601,
                          "end": 607,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 603,
                            "end": 607,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 603,
                              "end": 607,
                              "decorators": [],
                              "name": "Base",
                              "optional": false,
                              "typeAnnotation": null
                            }
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
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 612,
                          "end": 619,
                          "decorators": [],
                          "name": "Derived",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    },
                    "typeParameters": null
                  }
                },
                "typeParameters": null
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 625,
            "end": 713,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 625,
              "end": 627,
              "decorators": [],
              "name": "a8",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 627,
              "end": 712,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 629,
                "end": 712,
                "abstract": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 634,
                    "end": 659,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 635,
                      "end": 659,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 637,
                        "end": 659,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 638,
                            "end": 647,
                            "decorators": [],
                            "name": "arg",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 641,
                              "end": 647,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 643,
                                "end": 647,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 643,
                                  "end": 647,
                                  "decorators": [],
                                  "name": "Base",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            }
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
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 652,
                              "end": 659,
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
                  },
                  {
                    "type": "Identifier",
                    "start": 661,
                    "end": 687,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 662,
                      "end": 687,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 664,
                        "end": 687,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 665,
                            "end": 675,
                            "decorators": [],
                            "name": "arg2",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 669,
                              "end": 675,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 671,
                                "end": 675,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 671,
                                  "end": 675,
                                  "decorators": [],
                                  "name": "Base",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            }
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
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 680,
                              "end": 687,
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
                  "start": 689,
                  "end": 712,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 692,
                    "end": 712,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 693,
                        "end": 700,
                        "decorators": [],
                        "name": "r",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 694,
                          "end": 700,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 696,
                            "end": 700,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 696,
                              "end": 700,
                              "decorators": [],
                              "name": "Base",
                              "optional": false,
                              "typeAnnotation": null
                            }
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
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 705,
                          "end": 712,
                          "decorators": [],
                          "name": "Derived",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    },
                    "typeParameters": null
                  }
                },
                "typeParameters": null
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 718,
            "end": 806,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 718,
              "end": 720,
              "decorators": [],
              "name": "a9",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 720,
              "end": 805,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 722,
                "end": 805,
                "abstract": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 727,
                    "end": 752,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 728,
                      "end": 752,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 730,
                        "end": 752,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 731,
                            "end": 740,
                            "decorators": [],
                            "name": "arg",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 734,
                              "end": 740,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 736,
                                "end": 740,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 736,
                                  "end": 740,
                                  "decorators": [],
                                  "name": "Base",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            }
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
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 745,
                              "end": 752,
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
                  },
                  {
                    "type": "Identifier",
                    "start": 754,
                    "end": 780,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 755,
                      "end": 780,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 757,
                        "end": 780,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 758,
                            "end": 768,
                            "decorators": [],
                            "name": "arg2",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 762,
                              "end": 768,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 764,
                                "end": 768,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 764,
                                  "end": 768,
                                  "decorators": [],
                                  "name": "Base",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            }
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
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 773,
                              "end": 780,
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
                  "start": 782,
                  "end": 805,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 785,
                    "end": 805,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 786,
                        "end": 793,
                        "decorators": [],
                        "name": "r",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 787,
                          "end": 793,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 789,
                            "end": 793,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 789,
                              "end": 793,
                              "decorators": [],
                              "name": "Base",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
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
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 798,
                          "end": 805,
                          "decorators": [],
                          "name": "Derived",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    },
                    "typeParameters": null
                  }
                },
                "typeParameters": null
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 811,
            "end": 849,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 811,
              "end": 814,
              "decorators": [],
              "name": "a10",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 814,
              "end": 848,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 816,
                "end": 848,
                "abstract": false,
                "params": [
                  {
                    "type": "RestElement",
                    "start": 821,
                    "end": 836,
                    "argument": {
                      "type": "Identifier",
                      "start": 824,
                      "end": 825,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
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
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 827,
                            "end": 834,
                            "decorators": [],
                            "name": "Derived",
                            "optional": false,
                            "typeAnnotation": null
                          }
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
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 841,
                      "end": 848,
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
          },
          {
            "type": "TSPropertySignature",
            "start": 854,
            "end": 925,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 854,
              "end": 857,
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
              "start": 857,
              "end": 924,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 859,
                "end": 924,
                "abstract": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 864,
                    "end": 882,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
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
                            "accessibility": null,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 869,
                              "end": 872,
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
                              "start": 872,
                              "end": 880,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 874,
                                "end": 880
                              }
                            }
                          }
                        ]
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 884,
                    "end": 915,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
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
                            "accessibility": null,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 889,
                              "end": 892,
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
                              "start": 892,
                              "end": 900,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 894,
                                "end": 900
                              }
                            }
                          },
                          {
                            "type": "TSPropertySignature",
                            "start": 902,
                            "end": 913,
                            "accessibility": null,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 902,
                              "end": 905,
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
                              "start": 905,
                              "end": 913,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 907,
                                "end": 913
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
                  "start": 917,
                  "end": 924,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 920,
                    "end": 924,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 920,
                      "end": 924,
                      "decorators": [],
                      "name": "Base",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "typeParameters": null
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 930,
            "end": 994,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 930,
              "end": 933,
              "decorators": [],
              "name": "a12",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 933,
              "end": 993,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 935,
                "end": 993,
                "abstract": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 940,
                    "end": 954,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 941,
                      "end": 954,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 943,
                        "end": 954,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 948,
                          "end": 954,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 949,
                              "end": 953,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 949,
                                "end": 953,
                                "decorators": [],
                                "name": "Base",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          ]
                        },
                        "typeName": {
                          "type": "Identifier",
                          "start": 943,
                          "end": 948,
                          "decorators": [],
                          "name": "Array",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 956,
                    "end": 974,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 957,
                      "end": 974,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 959,
                        "end": 974,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 964,
                          "end": 974,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 965,
                              "end": 973,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 965,
                                "end": 973,
                                "decorators": [],
                                "name": "Derived2",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          ]
                        },
                        "typeName": {
                          "type": "Identifier",
                          "start": 959,
                          "end": 964,
                          "decorators": [],
                          "name": "Array",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
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
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 984,
                      "end": 993,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 985,
                          "end": 992,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 985,
                            "end": 992,
                            "decorators": [],
                            "name": "Derived",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 979,
                      "end": 984,
                      "decorators": [],
                      "name": "Array",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "typeParameters": null
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 999,
            "end": 1062,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 999,
              "end": 1002,
              "decorators": [],
              "name": "a13",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1002,
              "end": 1061,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 1004,
                "end": 1061,
                "abstract": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1009,
                    "end": 1023,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1010,
                      "end": 1023,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1012,
                        "end": 1023,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 1017,
                          "end": 1023,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 1018,
                              "end": 1022,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1018,
                                "end": 1022,
                                "decorators": [],
                                "name": "Base",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          ]
                        },
                        "typeName": {
                          "type": "Identifier",
                          "start": 1012,
                          "end": 1017,
                          "decorators": [],
                          "name": "Array",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 1025,
                    "end": 1042,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1026,
                      "end": 1042,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1028,
                        "end": 1042,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 1033,
                          "end": 1042,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 1034,
                              "end": 1041,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1034,
                                "end": 1041,
                                "decorators": [],
                                "name": "Derived",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          ]
                        },
                        "typeName": {
                          "type": "Identifier",
                          "start": 1028,
                          "end": 1033,
                          "decorators": [],
                          "name": "Array",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
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
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 1052,
                      "end": 1061,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 1053,
                          "end": 1060,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1053,
                            "end": 1060,
                            "decorators": [],
                            "name": "Derived",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 1047,
                      "end": 1052,
                      "decorators": [],
                      "name": "Array",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "typeParameters": null
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 1067,
            "end": 1116,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1067,
              "end": 1070,
              "decorators": [],
              "name": "a14",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1070,
              "end": 1115,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 1072,
                "end": 1115,
                "abstract": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1077,
                    "end": 1104,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
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
                            "accessibility": null,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 1082,
                              "end": 1083,
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
                              "start": 1083,
                              "end": 1091,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 1085,
                                "end": 1091
                              }
                            }
                          },
                          {
                            "type": "TSPropertySignature",
                            "start": 1093,
                            "end": 1102,
                            "accessibility": null,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 1093,
                              "end": 1094,
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
                              "start": 1094,
                              "end": 1102,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 1096,
                                "end": 1102
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
                  "start": 1106,
                  "end": 1115,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1109,
                    "end": 1115,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1109,
                      "end": 1115,
                      "decorators": [],
                      "name": "Object",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "typeParameters": null
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 1121,
            "end": 1204,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1121,
              "end": 1124,
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
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1141,
                        "end": 1150,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1142,
                          "end": 1150,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 1144,
                            "end": 1150
                          }
                        }
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
                    },
                    "typeParameters": null
                  },
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "start": 1171,
                    "end": 1197,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1176,
                        "end": 1185,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1177,
                          "end": 1185,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 1179,
                            "end": 1185
                          }
                        }
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
                    },
                    "typeParameters": null
                  }
                ]
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 1209,
            "end": 1317,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1209,
              "end": 1212,
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
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1248,
                        "end": 1252,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1249,
                          "end": 1252,
                          "typeAnnotation": {
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
                    },
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 1228,
                      "end": 1247,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 1229,
                          "end": 1246,
                          "const": false,
                          "constraint": {
                            "type": "TSTypeReference",
                            "start": 1239,
                            "end": 1246,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1239,
                              "end": 1246,
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
                            "start": 1229,
                            "end": 1230,
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
                    "start": 1273,
                    "end": 1310,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1294,
                        "end": 1298,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1295,
                          "end": 1298,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 1297,
                            "end": 1298,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1297,
                              "end": 1298,
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
                    },
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 1277,
                      "end": 1293,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 1278,
                          "end": 1292,
                          "const": false,
                          "constraint": {
                            "type": "TSTypeReference",
                            "start": 1288,
                            "end": 1292,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1288,
                              "end": 1292,
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
                            "start": 1278,
                            "end": 1279,
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
            "start": 1322,
            "end": 1443,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1322,
              "end": 1325,
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
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1342,
                        "end": 1370,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1343,
                          "end": 1370,
                          "typeAnnotation": {
                            "type": "TSConstructorType",
                            "start": 1345,
                            "end": 1370,
                            "abstract": false,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 1350,
                                "end": 1359,
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 1351,
                                  "end": 1359,
                                  "typeAnnotation": {
                                    "type": "TSNumberKeyword",
                                    "start": 1353,
                                    "end": 1359
                                  }
                                }
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
                            },
                            "typeParameters": null
                          }
                        }
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
                    },
                    "typeParameters": null
                  },
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "start": 1391,
                    "end": 1436,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1396,
                        "end": 1424,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1397,
                          "end": 1424,
                          "typeAnnotation": {
                            "type": "TSConstructorType",
                            "start": 1399,
                            "end": 1424,
                            "abstract": false,
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
                                    "type": "TSStringKeyword",
                                    "start": 1407,
                                    "end": 1413
                                  }
                                }
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
                            },
                            "typeParameters": null
                          }
                        }
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
                    },
                    "typeParameters": null
                  }
                ]
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 1448,
            "end": 1681,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1448,
              "end": 1451,
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
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1468,
                        "end": 1556,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
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
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "start": 1490,
                                    "end": 1499,
                                    "decorators": [],
                                    "name": "a",
                                    "optional": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 1491,
                                      "end": 1499,
                                      "typeAnnotation": {
                                        "type": "TSNumberKeyword",
                                        "start": 1493,
                                        "end": 1499
                                      }
                                    }
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
                                },
                                "typeParameters": null
                              },
                              {
                                "type": "TSConstructSignatureDeclaration",
                                "start": 1522,
                                "end": 1546,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "start": 1527,
                                    "end": 1536,
                                    "decorators": [],
                                    "name": "a",
                                    "optional": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 1528,
                                      "end": 1536,
                                      "typeAnnotation": {
                                        "type": "TSStringKeyword",
                                        "start": 1530,
                                        "end": 1536
                                      }
                                    }
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
                                },
                                "typeParameters": null
                              }
                            ]
                          }
                        }
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
                    },
                    "typeParameters": null
                  },
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "start": 1574,
                    "end": 1674,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1579,
                        "end": 1665,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
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
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "start": 1601,
                                    "end": 1611,
                                    "decorators": [],
                                    "name": "a",
                                    "optional": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 1602,
                                      "end": 1611,
                                      "typeAnnotation": {
                                        "type": "TSBooleanKeyword",
                                        "start": 1604,
                                        "end": 1611
                                      }
                                    }
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
                                },
                                "typeParameters": null
                              },
                              {
                                "type": "TSConstructSignatureDeclaration",
                                "start": 1635,
                                "end": 1655,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "start": 1640,
                                    "end": 1647,
                                    "decorators": [],
                                    "name": "a",
                                    "optional": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 1641,
                                      "end": 1647,
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "start": 1643,
                                        "end": 1647,
                                        "typeArguments": null,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 1643,
                                          "end": 1647,
                                          "decorators": [],
                                          "name": "Date",
                                          "optional": false,
                                          "typeAnnotation": null
                                        }
                                      }
                                    }
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
                                    "typeArguments": null,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 1650,
                                      "end": 1654,
                                      "decorators": [],
                                      "name": "Date",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  }
                                },
                                "typeParameters": null
                              }
                            ]
                          }
                        }
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
      "start": 1692,
      "end": 3292,
      "body": {
        "type": "TSInterfaceBody",
        "start": 1714,
        "end": 3292,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 1731,
            "end": 1755,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1731,
              "end": 1732,
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
              "start": 1732,
              "end": 1754,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 1734,
                "end": 1754,
                "abstract": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1742,
                    "end": 1746,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1743,
                      "end": 1746,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1745,
                        "end": 1746,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1745,
                          "end": 1746,
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
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1751,
                        "end": 1752,
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
                  "start": 1738,
                  "end": 1741,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 1739,
                      "end": 1740,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 1739,
                        "end": 1740,
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
            "start": 1817,
            "end": 1847,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1817,
              "end": 1819,
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
              "start": 1819,
              "end": 1846,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 1821,
                "end": 1846,
                "abstract": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1829,
                    "end": 1833,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1830,
                      "end": 1833,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1832,
                        "end": 1833,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1832,
                          "end": 1833,
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
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 1825,
                  "end": 1828,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 1826,
                      "end": 1827,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 1826,
                        "end": 1827,
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
            "start": 1858,
            "end": 1881,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1858,
              "end": 1860,
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
              "start": 1860,
              "end": 1880,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 1862,
                "end": 1880,
                "abstract": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1870,
                    "end": 1874,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1871,
                      "end": 1874,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1873,
                        "end": 1874,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1873,
                          "end": 1874,
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
                  "start": 1876,
                  "end": 1880,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1879,
                    "end": 1880,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1879,
                      "end": 1880,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 1866,
                  "end": 1869,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 1867,
                      "end": 1868,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 1867,
                        "end": 1868,
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
            "start": 1916,
            "end": 1948,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1916,
              "end": 1918,
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
              "start": 1918,
              "end": 1947,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 1920,
                "end": 1947,
                "abstract": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1931,
                    "end": 1935,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1932,
                      "end": 1935,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1934,
                        "end": 1935,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1934,
                          "end": 1935,
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
                    "start": 1937,
                    "end": 1941,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1938,
                      "end": 1941,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1940,
                        "end": 1941,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1940,
                          "end": 1941,
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
                  "start": 1943,
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
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 1924,
                  "end": 1930,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 1925,
                      "end": 1926,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 1925,
                        "end": 1926,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "out": false
                    },
                    {
                      "type": "TSTypeParameter",
                      "start": 1928,
                      "end": 1929,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 1928,
                        "end": 1929,
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
            "start": 2023,
            "end": 2061,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2023,
              "end": 2025,
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
              "start": 2025,
              "end": 2060,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 2027,
                "end": 2060,
                "abstract": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 2038,
                    "end": 2054,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2039,
                      "end": 2054,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 2041,
                        "end": 2054,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 2042,
                            "end": 2048,
                            "decorators": [],
                            "name": "arg",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 2045,
                              "end": 2048,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 2047,
                                "end": 2048,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 2047,
                                  "end": 2048,
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
                          "start": 2050,
                          "end": 2054,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 2053,
                            "end": 2054,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2053,
                              "end": 2054,
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
                  "start": 2056,
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
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 2031,
                  "end": 2037,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 2032,
                      "end": 2033,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 2032,
                        "end": 2033,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "out": false
                    },
                    {
                      "type": "TSTypeParameter",
                      "start": 2035,
                      "end": 2036,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 2035,
                        "end": 2036,
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
            "start": 2128,
            "end": 2195,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2128,
              "end": 2130,
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
              "start": 2130,
              "end": 2194,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 2132,
                "end": 2194,
                "abstract": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 2172,
                    "end": 2188,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2173,
                      "end": 2188,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 2175,
                        "end": 2188,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 2176,
                            "end": 2182,
                            "decorators": [],
                            "name": "arg",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 2179,
                              "end": 2182,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 2181,
                                "end": 2182,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 2181,
                                  "end": 2182,
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
                          "start": 2184,
                          "end": 2188,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 2187,
                            "end": 2188,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2187,
                              "end": 2188,
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
                  "start": 2190,
                  "end": 2194,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 2193,
                    "end": 2194,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2193,
                      "end": 2194,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 2136,
                  "end": 2171,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 2137,
                      "end": 2151,
                      "const": false,
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 2147,
                        "end": 2151,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2147,
                          "end": 2151,
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
                        "start": 2137,
                        "end": 2138,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "out": false
                    },
                    {
                      "type": "TSTypeParameter",
                      "start": 2153,
                      "end": 2170,
                      "const": false,
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 2163,
                        "end": 2170,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2163,
                          "end": 2170,
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
                        "start": 2153,
                        "end": 2154,
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
            "start": 2249,
            "end": 2326,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2249,
              "end": 2251,
              "decorators": [],
              "name": "a7",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2251,
              "end": 2325,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 2253,
                "end": 2325,
                "abstract": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 2293,
                    "end": 2309,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2294,
                      "end": 2309,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 2296,
                        "end": 2309,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 2297,
                            "end": 2303,
                            "decorators": [],
                            "name": "arg",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 2300,
                              "end": 2303,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 2302,
                                "end": 2303,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 2302,
                                  "end": 2303,
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
                          "start": 2305,
                          "end": 2309,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 2308,
                            "end": 2309,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2308,
                              "end": 2309,
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
                  "start": 2311,
                  "end": 2325,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 2314,
                    "end": 2325,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 2315,
                        "end": 2319,
                        "decorators": [],
                        "name": "r",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2316,
                          "end": 2319,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 2318,
                            "end": 2319,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2318,
                              "end": 2319,
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
                      "start": 2321,
                      "end": 2325,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 2324,
                        "end": 2325,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2324,
                          "end": 2325,
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    },
                    "typeParameters": null
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 2257,
                  "end": 2292,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 2258,
                      "end": 2272,
                      "const": false,
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 2268,
                        "end": 2272,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2268,
                          "end": 2272,
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
                        "start": 2258,
                        "end": 2259,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "out": false
                    },
                    {
                      "type": "TSTypeParameter",
                      "start": 2274,
                      "end": 2291,
                      "const": false,
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 2284,
                        "end": 2291,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2284,
                          "end": 2291,
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
                        "start": 2274,
                        "end": 2275,
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
            "start": 2337,
            "end": 2433,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2337,
              "end": 2339,
              "decorators": [],
              "name": "a8",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2339,
              "end": 2432,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 2341,
                "end": 2432,
                "abstract": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 2381,
                    "end": 2397,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2382,
                      "end": 2397,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 2384,
                        "end": 2397,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 2385,
                            "end": 2391,
                            "decorators": [],
                            "name": "arg",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 2388,
                              "end": 2391,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 2390,
                                "end": 2391,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 2390,
                                  "end": 2391,
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
                          "start": 2393,
                          "end": 2397,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 2396,
                            "end": 2397,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2396,
                              "end": 2397,
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
                  },
                  {
                    "type": "Identifier",
                    "start": 2399,
                    "end": 2416,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2400,
                      "end": 2416,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 2402,
                        "end": 2416,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 2403,
                            "end": 2410,
                            "decorators": [],
                            "name": "arg2",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 2407,
                              "end": 2410,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 2409,
                                "end": 2410,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 2409,
                                  "end": 2410,
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
                          "start": 2412,
                          "end": 2416,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 2415,
                            "end": 2416,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2415,
                              "end": 2416,
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
                  "start": 2418,
                  "end": 2432,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 2421,
                    "end": 2432,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 2422,
                        "end": 2426,
                        "decorators": [],
                        "name": "r",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2423,
                          "end": 2426,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 2425,
                            "end": 2426,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2425,
                              "end": 2426,
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
                      "start": 2428,
                      "end": 2432,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 2431,
                        "end": 2432,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2431,
                          "end": 2432,
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    },
                    "typeParameters": null
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 2345,
                  "end": 2380,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 2346,
                      "end": 2360,
                      "const": false,
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 2356,
                        "end": 2360,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2356,
                          "end": 2360,
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
                        "start": 2346,
                        "end": 2347,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "out": false
                    },
                    {
                      "type": "TSTypeParameter",
                      "start": 2362,
                      "end": 2379,
                      "const": false,
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 2372,
                        "end": 2379,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2372,
                          "end": 2379,
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
                        "start": 2362,
                        "end": 2363,
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
            "start": 2444,
            "end": 2568,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2444,
              "end": 2446,
              "decorators": [],
              "name": "a9",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2446,
              "end": 2567,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 2448,
                "end": 2567,
                "abstract": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 2488,
                    "end": 2504,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2489,
                      "end": 2504,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 2491,
                        "end": 2504,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 2492,
                            "end": 2498,
                            "decorators": [],
                            "name": "arg",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 2495,
                              "end": 2498,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 2497,
                                "end": 2498,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 2497,
                                  "end": 2498,
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
                          "start": 2500,
                          "end": 2504,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 2503,
                            "end": 2504,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2503,
                              "end": 2504,
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
                  },
                  {
                    "type": "Identifier",
                    "start": 2506,
                    "end": 2551,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2507,
                      "end": 2551,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 2509,
                        "end": 2551,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 2510,
                            "end": 2545,
                            "decorators": [],
                            "name": "arg2",
                            "optional": false,
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
                                    "accessibility": null,
                                    "computed": false,
                                    "key": {
                                      "type": "Identifier",
                                      "start": 2518,
                                      "end": 2521,
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
                                      "start": 2521,
                                      "end": 2529,
                                      "typeAnnotation": {
                                        "type": "TSStringKeyword",
                                        "start": 2523,
                                        "end": 2529
                                      }
                                    }
                                  },
                                  {
                                    "type": "TSPropertySignature",
                                    "start": 2531,
                                    "end": 2543,
                                    "accessibility": null,
                                    "computed": false,
                                    "key": {
                                      "type": "Identifier",
                                      "start": 2531,
                                      "end": 2535,
                                      "decorators": [],
                                      "name": "bing",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "optional": false,
                                    "readonly": false,
                                    "static": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 2535,
                                      "end": 2543,
                                      "typeAnnotation": {
                                        "type": "TSNumberKeyword",
                                        "start": 2537,
                                        "end": 2543
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
                          "start": 2547,
                          "end": 2551,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 2550,
                            "end": 2551,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2550,
                              "end": 2551,
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
                  "start": 2553,
                  "end": 2567,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 2556,
                    "end": 2567,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 2557,
                        "end": 2561,
                        "decorators": [],
                        "name": "r",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2558,
                          "end": 2561,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 2560,
                            "end": 2561,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2560,
                              "end": 2561,
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
                      "start": 2563,
                      "end": 2567,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 2566,
                        "end": 2567,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2566,
                          "end": 2567,
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    },
                    "typeParameters": null
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 2452,
                  "end": 2487,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 2453,
                      "end": 2467,
                      "const": false,
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 2463,
                        "end": 2467,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2463,
                          "end": 2467,
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
                        "start": 2453,
                        "end": 2454,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "out": false
                    },
                    {
                      "type": "TSTypeParameter",
                      "start": 2469,
                      "end": 2486,
                      "const": false,
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 2479,
                        "end": 2486,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2479,
                          "end": 2486,
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
                        "start": 2469,
                        "end": 2470,
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
            "start": 2622,
            "end": 2667,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2622,
              "end": 2625,
              "decorators": [],
              "name": "a10",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2625,
              "end": 2666,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 2627,
                "end": 2666,
                "abstract": false,
                "params": [
                  {
                    "type": "RestElement",
                    "start": 2651,
                    "end": 2660,
                    "argument": {
                      "type": "Identifier",
                      "start": 2654,
                      "end": 2655,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
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
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 2657,
                            "end": 2658,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          }
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
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2665,
                      "end": 2666,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 2631,
                  "end": 2650,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 2632,
                      "end": 2649,
                      "const": false,
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 2642,
                        "end": 2649,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2642,
                          "end": 2649,
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
                        "start": 2632,
                        "end": 2633,
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
            "start": 2678,
            "end": 2721,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2678,
              "end": 2681,
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
              "start": 2681,
              "end": 2720,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 2683,
                "end": 2720,
                "abstract": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 2704,
                    "end": 2708,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2705,
                      "end": 2708,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 2707,
                        "end": 2708,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2707,
                          "end": 2708,
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
                    "start": 2710,
                    "end": 2714,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2711,
                      "end": 2714,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 2713,
                        "end": 2714,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2713,
                          "end": 2714,
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
                  "start": 2716,
                  "end": 2720,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 2719,
                    "end": 2720,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2719,
                      "end": 2720,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 2687,
                  "end": 2703,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 2688,
                      "end": 2702,
                      "const": false,
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 2698,
                        "end": 2702,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2698,
                          "end": 2702,
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
                        "start": 2688,
                        "end": 2689,
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
            "start": 2732,
            "end": 2805,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2732,
              "end": 2735,
              "decorators": [],
              "name": "a12",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2735,
              "end": 2804,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 2737,
                "end": 2804,
                "abstract": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 2765,
                    "end": 2779,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2766,
                      "end": 2779,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 2768,
                        "end": 2779,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 2773,
                          "end": 2779,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 2774,
                              "end": 2778,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 2774,
                                "end": 2778,
                                "decorators": [],
                                "name": "Base",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          ]
                        },
                        "typeName": {
                          "type": "Identifier",
                          "start": 2768,
                          "end": 2773,
                          "decorators": [],
                          "name": "Array",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 2781,
                    "end": 2785,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2782,
                      "end": 2785,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 2784,
                        "end": 2785,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2784,
                          "end": 2785,
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
                  "start": 2787,
                  "end": 2804,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 2790,
                    "end": 2804,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 2795,
                      "end": 2804,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 2796,
                          "end": 2803,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 2796,
                            "end": 2803,
                            "decorators": [],
                            "name": "Derived",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 2790,
                      "end": 2795,
                      "decorators": [],
                      "name": "Array",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 2741,
                  "end": 2764,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 2742,
                      "end": 2763,
                      "const": false,
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 2752,
                        "end": 2763,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 2757,
                          "end": 2763,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 2758,
                              "end": 2762,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 2758,
                                "end": 2762,
                                "decorators": [],
                                "name": "Base",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          ]
                        },
                        "typeName": {
                          "type": "Identifier",
                          "start": 2752,
                          "end": 2757,
                          "decorators": [],
                          "name": "Array",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 2742,
                        "end": 2743,
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
            "start": 2846,
            "end": 2909,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2846,
              "end": 2849,
              "decorators": [],
              "name": "a13",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2849,
              "end": 2908,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 2851,
                "end": 2908,
                "abstract": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 2882,
                    "end": 2896,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2883,
                      "end": 2896,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 2885,
                        "end": 2896,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 2890,
                          "end": 2896,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 2891,
                              "end": 2895,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 2891,
                                "end": 2895,
                                "decorators": [],
                                "name": "Base",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          ]
                        },
                        "typeName": {
                          "type": "Identifier",
                          "start": 2885,
                          "end": 2890,
                          "decorators": [],
                          "name": "Array",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 2898,
                    "end": 2902,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2899,
                      "end": 2902,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 2901,
                        "end": 2902,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2901,
                          "end": 2902,
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
                  "start": 2904,
                  "end": 2908,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 2907,
                    "end": 2908,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2907,
                      "end": 2908,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 2855,
                  "end": 2881,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 2856,
                      "end": 2880,
                      "const": false,
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 2866,
                        "end": 2880,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 2871,
                          "end": 2880,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 2872,
                              "end": 2879,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 2872,
                                "end": 2879,
                                "decorators": [],
                                "name": "Derived",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          ]
                        },
                        "typeName": {
                          "type": "Identifier",
                          "start": 2866,
                          "end": 2871,
                          "decorators": [],
                          "name": "Array",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 2856,
                        "end": 2857,
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
            "start": 3007,
            "end": 3047,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 3007,
              "end": 3010,
              "decorators": [],
              "name": "a14",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3010,
              "end": 3046,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 3012,
                "end": 3046,
                "abstract": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 3023,
                    "end": 3040,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
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
                            "accessibility": null,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 3028,
                              "end": 3029,
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
                              "start": 3029,
                              "end": 3032,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 3031,
                                "end": 3032,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 3031,
                                  "end": 3032,
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
                            "start": 3034,
                            "end": 3038,
                            "accessibility": null,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 3034,
                              "end": 3035,
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
                              "start": 3035,
                              "end": 3038,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 3037,
                                "end": 3038,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 3037,
                                  "end": 3038,
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
                  "start": 3042,
                  "end": 3046,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 3045,
                    "end": 3046,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3045,
                      "end": 3046,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 3016,
                  "end": 3022,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 3017,
                      "end": 3018,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 3017,
                        "end": 3018,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "out": false
                    },
                    {
                      "type": "TSTypeParameter",
                      "start": 3020,
                      "end": 3021,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 3020,
                        "end": 3021,
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
            "start": 3058,
            "end": 3084,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 3058,
              "end": 3061,
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
              "start": 3061,
              "end": 3083,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 3063,
                "end": 3083,
                "abstract": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 3071,
                    "end": 3075,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 3072,
                      "end": 3075,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 3074,
                        "end": 3075,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 3074,
                          "end": 3075,
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
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 3080,
                        "end": 3081,
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
                  "start": 3067,
                  "end": 3070,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 3068,
                      "end": 3069,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 3068,
                        "end": 3069,
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
            "start": 3095,
            "end": 3139,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 3095,
              "end": 3098,
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
              "start": 3098,
              "end": 3138,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 3100,
                "end": 3138,
                "abstract": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 3121,
                    "end": 3125,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 3122,
                      "end": 3125,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 3124,
                        "end": 3125,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 3124,
                          "end": 3125,
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
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 3104,
                  "end": 3120,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 3105,
                      "end": 3119,
                      "const": false,
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 3115,
                        "end": 3119,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 3115,
                          "end": 3119,
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
                        "start": 3105,
                        "end": 3106,
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
            "start": 3150,
            "end": 3190,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 3150,
              "end": 3153,
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
              "start": 3153,
              "end": 3189,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 3155,
                "end": 3189,
                "abstract": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 3163,
                    "end": 3181,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 3164,
                      "end": 3181,
                      "typeAnnotation": {
                        "type": "TSConstructorType",
                        "start": 3166,
                        "end": 3181,
                        "abstract": false,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 3171,
                            "end": 3175,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 3172,
                              "end": 3175,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 3174,
                                "end": 3175,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 3174,
                                  "end": 3175,
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
                          "start": 3177,
                          "end": 3181,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 3180,
                            "end": 3181,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 3180,
                              "end": 3181,
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
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 3186,
                        "end": 3187,
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
                  "start": 3159,
                  "end": 3162,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 3160,
                      "end": 3161,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 3160,
                        "end": 3161,
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
            "start": 3201,
            "end": 3241,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 3201,
              "end": 3204,
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
              "start": 3204,
              "end": 3240,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 3206,
                "end": 3240,
                "abstract": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 3214,
                    "end": 3232,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 3215,
                      "end": 3232,
                      "typeAnnotation": {
                        "type": "TSConstructorType",
                        "start": 3217,
                        "end": 3232,
                        "abstract": false,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 3222,
                            "end": 3226,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 3223,
                              "end": 3226,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 3225,
                                "end": 3226,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 3225,
                                  "end": 3226,
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
                          "start": 3228,
                          "end": 3232,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 3231,
                            "end": 3232,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 3231,
                              "end": 3232,
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
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 3237,
                        "end": 3238,
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
                  "start": 3210,
                  "end": 3213,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 3211,
                      "end": 3212,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 3211,
                        "end": 3212,
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
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 1712,
          "end": 1713,
          "expression": {
            "type": "Identifier",
            "start": 1712,
            "end": 1713,
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
        "start": 1702,
        "end": 1703,
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
