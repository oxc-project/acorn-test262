__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 212,
  "end": 2656,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 212,
      "end": 239,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 223,
        "end": 239,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 225,
            "end": 237,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 225,
              "end": 228,
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
              "start": 228,
              "end": 236,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 230,
                "end": 236
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
        "start": 218,
        "end": 222,
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
      "start": 240,
      "end": 283,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 267,
        "end": 283,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 269,
            "end": 281,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 269,
              "end": 272,
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
              "start": 272,
              "end": 280,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 274,
                "end": 280
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
        "start": 246,
        "end": 253,
        "decorators": [],
        "name": "Derived",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 262,
        "end": 266,
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
      "start": 284,
      "end": 331,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 315,
        "end": 331,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 317,
            "end": 329,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 317,
              "end": 320,
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
              "start": 320,
              "end": 328,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 322,
                "end": 328
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
        "start": 290,
        "end": 298,
        "decorators": [],
        "name": "Derived2",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 307,
        "end": 314,
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
      "start": 332,
      "end": 381,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 364,
        "end": 381,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 366,
            "end": 379,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 366,
              "end": 370,
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
              "start": 370,
              "end": 378,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 372,
                "end": 378
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
        "start": 338,
        "end": 350,
        "decorators": [],
        "name": "OtherDerived",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 359,
        "end": 363,
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
      "start": 383,
      "end": 1228,
      "body": {
        "type": "TSInterfaceBody",
        "start": 395,
        "end": 1228,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 417,
            "end": 448,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 417,
              "end": 418,
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
              "start": 418,
              "end": 447,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 420,
                "end": 447,
                "abstract": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 425,
                    "end": 434,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 426,
                      "end": 434,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 428,
                        "end": 434
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 436,
                  "end": 447,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 439,
                    "end": 447,
                    "elementType": {
                      "type": "TSNumberKeyword",
                      "start": 439,
                      "end": 445
                    }
                  }
                },
                "typeParameters": null
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 453,
            "end": 485,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 453,
              "end": 455,
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
              "start": 455,
              "end": 484,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 457,
                "end": 484,
                "abstract": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 462,
                    "end": 471,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 463,
                      "end": 471,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 465,
                        "end": 471
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 473,
                  "end": 484,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 476,
                    "end": 484,
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 476,
                      "end": 482
                    }
                  }
                },
                "typeParameters": null
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 490,
            "end": 518,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 490,
              "end": 492,
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
              "start": 492,
              "end": 517,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 494,
                "end": 517,
                "abstract": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 499,
                    "end": 508,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 500,
                      "end": 508,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 502,
                        "end": 508
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 510,
                  "end": 517,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 513,
                    "end": 517
                  }
                },
                "typeParameters": null
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 523,
            "end": 564,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 523,
              "end": 525,
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
              "start": 525,
              "end": 563,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 527,
                "end": 563,
                "abstract": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 532,
                    "end": 541,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 533,
                      "end": 541,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 535,
                        "end": 541
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 543,
                    "end": 552,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 544,
                      "end": 552,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 546,
                        "end": 552
                      }
                    }
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
                },
                "typeParameters": null
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 569,
            "end": 616,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 569,
              "end": 571,
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
              "start": 571,
              "end": 615,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 573,
                "end": 615,
                "abstract": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 578,
                    "end": 604,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 579,
                      "end": 604,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 581,
                        "end": 604,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 582,
                            "end": 593,
                            "decorators": [],
                            "name": "arg",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 585,
                              "end": 593,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 587,
                                "end": 593
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 595,
                          "end": 604,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 598,
                            "end": 604
                          }
                        },
                        "typeParameters": null
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 606,
                  "end": 615,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 609,
                    "end": 615
                  }
                },
                "typeParameters": null
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 621,
            "end": 665,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 621,
              "end": 623,
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
              "start": 623,
              "end": 664,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 625,
                "end": 664,
                "abstract": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 630,
                    "end": 655,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 631,
                      "end": 655,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 633,
                        "end": 655,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 634,
                            "end": 643,
                            "decorators": [],
                            "name": "arg",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 637,
                              "end": 643,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 639,
                                "end": 643,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 639,
                                  "end": 643,
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
                          "start": 645,
                          "end": 655,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 648,
                            "end": 655,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 648,
                              "end": 655,
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
                  "start": 657,
                  "end": 664,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 660,
                    "end": 664,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 660,
                      "end": 664,
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
            "start": 670,
            "end": 730,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 670,
              "end": 672,
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
              "start": 672,
              "end": 729,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 674,
                "end": 729,
                "abstract": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 679,
                    "end": 704,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 680,
                      "end": 704,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 682,
                        "end": 704,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 683,
                            "end": 692,
                            "decorators": [],
                            "name": "arg",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 686,
                              "end": 692,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 688,
                                "end": 692,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 688,
                                  "end": 692,
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
                          "start": 694,
                          "end": 704,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 697,
                            "end": 704,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 697,
                              "end": 704,
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
                  "start": 706,
                  "end": 729,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 709,
                    "end": 729,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 710,
                        "end": 717,
                        "decorators": [],
                        "name": "r",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 711,
                          "end": 717,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 713,
                            "end": 717,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 713,
                              "end": 717,
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
                      "start": 719,
                      "end": 729,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 722,
                        "end": 729,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 722,
                          "end": 729,
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
            "start": 735,
            "end": 823,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 735,
              "end": 737,
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
              "start": 737,
              "end": 822,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 739,
                "end": 822,
                "abstract": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 744,
                    "end": 769,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 745,
                      "end": 769,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 747,
                        "end": 769,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 748,
                            "end": 757,
                            "decorators": [],
                            "name": "arg",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 751,
                              "end": 757,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 753,
                                "end": 757,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 753,
                                  "end": 757,
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
                          "start": 759,
                          "end": 769,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 762,
                            "end": 769,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 762,
                              "end": 769,
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
                    "start": 771,
                    "end": 797,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 772,
                      "end": 797,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 774,
                        "end": 797,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 775,
                            "end": 785,
                            "decorators": [],
                            "name": "arg2",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 779,
                              "end": 785,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 781,
                                "end": 785,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 781,
                                  "end": 785,
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
                          "start": 787,
                          "end": 797,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 790,
                            "end": 797,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 790,
                              "end": 797,
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
                  "start": 799,
                  "end": 822,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 802,
                    "end": 822,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 803,
                        "end": 810,
                        "decorators": [],
                        "name": "r",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 804,
                          "end": 810,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 806,
                            "end": 810,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 806,
                              "end": 810,
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
                      "start": 812,
                      "end": 822,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 815,
                        "end": 822,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 815,
                          "end": 822,
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
            "start": 828,
            "end": 916,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 828,
              "end": 830,
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
              "start": 830,
              "end": 915,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 832,
                "end": 915,
                "abstract": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 837,
                    "end": 862,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 838,
                      "end": 862,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 840,
                        "end": 862,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 841,
                            "end": 850,
                            "decorators": [],
                            "name": "arg",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 844,
                              "end": 850,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 846,
                                "end": 850,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 846,
                                  "end": 850,
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
                          "start": 852,
                          "end": 862,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 855,
                            "end": 862,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 855,
                              "end": 862,
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
                    "start": 864,
                    "end": 890,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 865,
                      "end": 890,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 867,
                        "end": 890,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 868,
                            "end": 878,
                            "decorators": [],
                            "name": "arg2",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 872,
                              "end": 878,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 874,
                                "end": 878,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 874,
                                  "end": 878,
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
                          "start": 880,
                          "end": 890,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 883,
                            "end": 890,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 883,
                              "end": 890,
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
                  "start": 892,
                  "end": 915,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 895,
                    "end": 915,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 896,
                        "end": 903,
                        "decorators": [],
                        "name": "r",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 897,
                          "end": 903,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 899,
                            "end": 903,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 899,
                              "end": 903,
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
                      "start": 905,
                      "end": 915,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 908,
                        "end": 915,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 908,
                          "end": 915,
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
            "start": 921,
            "end": 959,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 921,
              "end": 924,
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
              "start": 924,
              "end": 958,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 926,
                "end": 958,
                "abstract": false,
                "params": [
                  {
                    "type": "RestElement",
                    "start": 931,
                    "end": 946,
                    "argument": {
                      "type": "Identifier",
                      "start": 934,
                      "end": 935,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "decorators": [],
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 935,
                      "end": 946,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 937,
                        "end": 946,
                        "elementType": {
                          "type": "TSTypeReference",
                          "start": 937,
                          "end": 944,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 937,
                            "end": 944,
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
                  "start": 948,
                  "end": 958,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 951,
                    "end": 958,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 951,
                      "end": 958,
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
            "start": 964,
            "end": 1035,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 964,
              "end": 967,
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
              "start": 967,
              "end": 1034,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 969,
                "end": 1034,
                "abstract": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 974,
                    "end": 992,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 975,
                      "end": 992,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 977,
                        "end": 992,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 979,
                            "end": 990,
                            "accessibility": null,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 979,
                              "end": 982,
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
                              "start": 982,
                              "end": 990,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 984,
                                "end": 990
                              }
                            }
                          }
                        ]
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 994,
                    "end": 1025,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 995,
                      "end": 1025,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 997,
                        "end": 1025,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 999,
                            "end": 1011,
                            "accessibility": null,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 999,
                              "end": 1002,
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
                              "start": 1002,
                              "end": 1010,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 1004,
                                "end": 1010
                              }
                            }
                          },
                          {
                            "type": "TSPropertySignature",
                            "start": 1012,
                            "end": 1023,
                            "accessibility": null,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 1012,
                              "end": 1015,
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
                              "start": 1015,
                              "end": 1023,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 1017,
                                "end": 1023
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
                  "start": 1027,
                  "end": 1034,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1030,
                    "end": 1034,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1030,
                      "end": 1034,
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
            "start": 1040,
            "end": 1104,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1040,
              "end": 1043,
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
              "start": 1043,
              "end": 1103,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 1045,
                "end": 1103,
                "abstract": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1050,
                    "end": 1064,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1051,
                      "end": 1064,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1053,
                        "end": 1064,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 1058,
                          "end": 1064,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 1059,
                              "end": 1063,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1059,
                                "end": 1063,
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
                          "start": 1053,
                          "end": 1058,
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
                    "start": 1066,
                    "end": 1084,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1067,
                      "end": 1084,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1069,
                        "end": 1084,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 1074,
                          "end": 1084,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 1075,
                              "end": 1083,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1075,
                                "end": 1083,
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
                          "start": 1069,
                          "end": 1074,
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
                  "start": 1086,
                  "end": 1103,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1089,
                    "end": 1103,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 1094,
                      "end": 1103,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 1095,
                          "end": 1102,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1095,
                            "end": 1102,
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
                      "start": 1089,
                      "end": 1094,
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
            "start": 1109,
            "end": 1172,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1109,
              "end": 1112,
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
              "start": 1112,
              "end": 1171,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 1114,
                "end": 1171,
                "abstract": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1119,
                    "end": 1133,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1120,
                      "end": 1133,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1122,
                        "end": 1133,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 1127,
                          "end": 1133,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 1128,
                              "end": 1132,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1128,
                                "end": 1132,
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
                          "start": 1122,
                          "end": 1127,
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
                    "start": 1135,
                    "end": 1152,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1136,
                      "end": 1152,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1138,
                        "end": 1152,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 1143,
                          "end": 1152,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 1144,
                              "end": 1151,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1144,
                                "end": 1151,
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
                          "start": 1138,
                          "end": 1143,
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
                  "start": 1154,
                  "end": 1171,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1157,
                    "end": 1171,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 1162,
                      "end": 1171,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 1163,
                          "end": 1170,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1163,
                            "end": 1170,
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
                      "start": 1157,
                      "end": 1162,
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
            "start": 1177,
            "end": 1226,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1177,
              "end": 1180,
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
              "start": 1180,
              "end": 1225,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 1182,
                "end": 1225,
                "abstract": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1187,
                    "end": 1214,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1188,
                      "end": 1214,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 1190,
                        "end": 1214,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 1192,
                            "end": 1202,
                            "accessibility": null,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 1192,
                              "end": 1193,
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
                              "start": 1193,
                              "end": 1201,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 1195,
                                "end": 1201
                              }
                            }
                          },
                          {
                            "type": "TSPropertySignature",
                            "start": 1203,
                            "end": 1212,
                            "accessibility": null,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 1203,
                              "end": 1204,
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
                              "start": 1204,
                              "end": 1212,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 1206,
                                "end": 1212
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
                  "start": 1216,
                  "end": 1225,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1219,
                    "end": 1225,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1219,
                      "end": 1225,
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
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 393,
        "end": 394,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1230,
      "end": 1284,
      "body": {
        "type": "TSInterfaceBody",
        "start": 1252,
        "end": 1284,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 1258,
            "end": 1282,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1258,
              "end": 1259,
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
              "start": 1259,
              "end": 1281,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 1261,
                "end": 1281,
                "abstract": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1269,
                    "end": 1273,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1270,
                      "end": 1273,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1272,
                        "end": 1273,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1272,
                          "end": 1273,
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
                  "start": 1275,
                  "end": 1281,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 1278,
                    "end": 1281,
                    "elementType": {
                      "type": "TSTypeReference",
                      "start": 1278,
                      "end": 1279,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1278,
                        "end": 1279,
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
                  "start": 1265,
                  "end": 1268,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 1266,
                      "end": 1267,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 1266,
                        "end": 1267,
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
          "start": 1250,
          "end": 1251,
          "expression": {
            "type": "Identifier",
            "start": 1250,
            "end": 1251,
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
        "start": 1240,
        "end": 1241,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1293,
      "end": 2656,
      "body": {
        "type": "TSInterfaceBody",
        "start": 1315,
        "end": 2656,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 1332,
            "end": 1356,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1332,
              "end": 1333,
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
              "start": 1333,
              "end": 1355,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 1335,
                "end": 1355,
                "abstract": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1343,
                    "end": 1347,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1344,
                      "end": 1347,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1346,
                        "end": 1347,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1346,
                          "end": 1347,
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
                  "start": 1349,
                  "end": 1355,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 1352,
                    "end": 1355,
                    "elementType": {
                      "type": "TSTypeReference",
                      "start": 1352,
                      "end": 1353,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1352,
                        "end": 1353,
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
                  "start": 1339,
                  "end": 1342,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 1340,
                      "end": 1341,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 1340,
                        "end": 1341,
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
            "start": 1418,
            "end": 1448,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1418,
              "end": 1420,
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
              "start": 1420,
              "end": 1447,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 1422,
                "end": 1447,
                "abstract": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1430,
                    "end": 1434,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1431,
                      "end": 1434,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1433,
                        "end": 1434,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1433,
                          "end": 1434,
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
                  "start": 1436,
                  "end": 1447,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 1439,
                    "end": 1447,
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 1439,
                      "end": 1445
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 1426,
                  "end": 1429,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 1427,
                      "end": 1428,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 1427,
                        "end": 1428,
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
            "start": 1459,
            "end": 1482,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1459,
              "end": 1461,
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
              "start": 1461,
              "end": 1481,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 1463,
                "end": 1481,
                "abstract": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1471,
                    "end": 1475,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1472,
                      "end": 1475,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1474,
                        "end": 1475,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1474,
                          "end": 1475,
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
                  "start": 1477,
                  "end": 1481,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1480,
                    "end": 1481,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1480,
                      "end": 1481,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 1467,
                  "end": 1470,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 1468,
                      "end": 1469,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 1468,
                        "end": 1469,
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
            "start": 1517,
            "end": 1549,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1517,
              "end": 1519,
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
              "start": 1519,
              "end": 1548,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 1521,
                "end": 1548,
                "abstract": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1532,
                    "end": 1536,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1533,
                      "end": 1536,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1535,
                        "end": 1536,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1535,
                          "end": 1536,
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
                    "start": 1538,
                    "end": 1542,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1539,
                      "end": 1542,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1541,
                        "end": 1542,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1541,
                          "end": 1542,
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
                  "start": 1544,
                  "end": 1548,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1547,
                    "end": 1548,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1547,
                      "end": 1548,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 1525,
                  "end": 1531,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 1526,
                      "end": 1527,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 1526,
                        "end": 1527,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "out": false
                    },
                    {
                      "type": "TSTypeParameter",
                      "start": 1529,
                      "end": 1530,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 1529,
                        "end": 1530,
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
            "start": 1624,
            "end": 1662,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1624,
              "end": 1626,
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
              "start": 1626,
              "end": 1661,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 1628,
                "end": 1661,
                "abstract": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1639,
                    "end": 1655,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1640,
                      "end": 1655,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 1642,
                        "end": 1655,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 1643,
                            "end": 1649,
                            "decorators": [],
                            "name": "arg",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1646,
                              "end": 1649,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 1648,
                                "end": 1649,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1648,
                                  "end": 1649,
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
                          "start": 1651,
                          "end": 1655,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 1654,
                            "end": 1655,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1654,
                              "end": 1655,
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
                  "start": 1657,
                  "end": 1661,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1660,
                    "end": 1661,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1660,
                      "end": 1661,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 1632,
                  "end": 1638,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 1633,
                      "end": 1634,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 1633,
                        "end": 1634,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "out": false
                    },
                    {
                      "type": "TSTypeParameter",
                      "start": 1636,
                      "end": 1637,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 1636,
                        "end": 1637,
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
            "start": 1729,
            "end": 1796,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1729,
              "end": 1731,
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
              "start": 1731,
              "end": 1795,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 1733,
                "end": 1795,
                "abstract": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1773,
                    "end": 1789,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1774,
                      "end": 1789,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 1776,
                        "end": 1789,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 1777,
                            "end": 1783,
                            "decorators": [],
                            "name": "arg",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1780,
                              "end": 1783,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 1782,
                                "end": 1783,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1782,
                                  "end": 1783,
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
                          "start": 1785,
                          "end": 1789,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 1788,
                            "end": 1789,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1788,
                              "end": 1789,
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
                  "start": 1791,
                  "end": 1795,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1794,
                    "end": 1795,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1794,
                      "end": 1795,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 1737,
                  "end": 1772,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 1738,
                      "end": 1752,
                      "const": false,
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 1748,
                        "end": 1752,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1748,
                          "end": 1752,
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
                        "start": 1738,
                        "end": 1739,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "out": false
                    },
                    {
                      "type": "TSTypeParameter",
                      "start": 1754,
                      "end": 1771,
                      "const": false,
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 1764,
                        "end": 1771,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1764,
                          "end": 1771,
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
                        "start": 1754,
                        "end": 1755,
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
            "start": 1850,
            "end": 1927,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1850,
              "end": 1852,
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
              "start": 1852,
              "end": 1926,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 1854,
                "end": 1926,
                "abstract": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1894,
                    "end": 1910,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1895,
                      "end": 1910,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 1897,
                        "end": 1910,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 1898,
                            "end": 1904,
                            "decorators": [],
                            "name": "arg",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1901,
                              "end": 1904,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 1903,
                                "end": 1904,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1903,
                                  "end": 1904,
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
                          "start": 1906,
                          "end": 1910,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 1909,
                            "end": 1910,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1909,
                              "end": 1910,
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
                  "start": 1912,
                  "end": 1926,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 1915,
                    "end": 1926,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1916,
                        "end": 1920,
                        "decorators": [],
                        "name": "r",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1917,
                          "end": 1920,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 1919,
                            "end": 1920,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1919,
                              "end": 1920,
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
                      "start": 1922,
                      "end": 1926,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1925,
                        "end": 1926,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1925,
                          "end": 1926,
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
                  "start": 1858,
                  "end": 1893,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 1859,
                      "end": 1873,
                      "const": false,
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 1869,
                        "end": 1873,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1869,
                          "end": 1873,
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
                        "start": 1859,
                        "end": 1860,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "out": false
                    },
                    {
                      "type": "TSTypeParameter",
                      "start": 1875,
                      "end": 1892,
                      "const": false,
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 1885,
                        "end": 1892,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1885,
                          "end": 1892,
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
                        "start": 1875,
                        "end": 1876,
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
            "start": 1938,
            "end": 2034,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1938,
              "end": 1940,
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
              "start": 1940,
              "end": 2033,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 1942,
                "end": 2033,
                "abstract": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1982,
                    "end": 1998,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1983,
                      "end": 1998,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 1985,
                        "end": 1998,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 1986,
                            "end": 1992,
                            "decorators": [],
                            "name": "arg",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1989,
                              "end": 1992,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 1991,
                                "end": 1992,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1991,
                                  "end": 1992,
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
                          "start": 1994,
                          "end": 1998,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 1997,
                            "end": 1998,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1997,
                              "end": 1998,
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
                    "start": 2000,
                    "end": 2017,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2001,
                      "end": 2017,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 2003,
                        "end": 2017,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 2004,
                            "end": 2011,
                            "decorators": [],
                            "name": "arg2",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 2008,
                              "end": 2011,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 2010,
                                "end": 2011,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 2010,
                                  "end": 2011,
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
                          "start": 2013,
                          "end": 2017,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 2016,
                            "end": 2017,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2016,
                              "end": 2017,
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
                  "start": 2019,
                  "end": 2033,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 2022,
                    "end": 2033,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 2023,
                        "end": 2027,
                        "decorators": [],
                        "name": "r",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2024,
                          "end": 2027,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 2026,
                            "end": 2027,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2026,
                              "end": 2027,
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
                      "start": 2029,
                      "end": 2033,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 2032,
                        "end": 2033,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2032,
                          "end": 2033,
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
                  "start": 1946,
                  "end": 1981,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 1947,
                      "end": 1961,
                      "const": false,
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 1957,
                        "end": 1961,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1957,
                          "end": 1961,
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
                        "start": 1947,
                        "end": 1948,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "out": false
                    },
                    {
                      "type": "TSTypeParameter",
                      "start": 1963,
                      "end": 1980,
                      "const": false,
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 1973,
                        "end": 1980,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1973,
                          "end": 1980,
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
                        "start": 1963,
                        "end": 1964,
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
            "start": 2045,
            "end": 2169,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2045,
              "end": 2047,
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
              "start": 2047,
              "end": 2168,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 2049,
                "end": 2168,
                "abstract": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 2089,
                    "end": 2105,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2090,
                      "end": 2105,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 2092,
                        "end": 2105,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 2093,
                            "end": 2099,
                            "decorators": [],
                            "name": "arg",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 2096,
                              "end": 2099,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 2098,
                                "end": 2099,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 2098,
                                  "end": 2099,
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
                          "start": 2101,
                          "end": 2105,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 2104,
                            "end": 2105,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2104,
                              "end": 2105,
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
                    "start": 2107,
                    "end": 2152,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2108,
                      "end": 2152,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 2110,
                        "end": 2152,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 2111,
                            "end": 2146,
                            "decorators": [],
                            "name": "arg2",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 2115,
                              "end": 2146,
                              "typeAnnotation": {
                                "type": "TSTypeLiteral",
                                "start": 2117,
                                "end": 2146,
                                "members": [
                                  {
                                    "type": "TSPropertySignature",
                                    "start": 2119,
                                    "end": 2131,
                                    "accessibility": null,
                                    "computed": false,
                                    "key": {
                                      "type": "Identifier",
                                      "start": 2119,
                                      "end": 2122,
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
                                      "start": 2122,
                                      "end": 2130,
                                      "typeAnnotation": {
                                        "type": "TSStringKeyword",
                                        "start": 2124,
                                        "end": 2130
                                      }
                                    }
                                  },
                                  {
                                    "type": "TSPropertySignature",
                                    "start": 2132,
                                    "end": 2144,
                                    "accessibility": null,
                                    "computed": false,
                                    "key": {
                                      "type": "Identifier",
                                      "start": 2132,
                                      "end": 2136,
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
                                      "start": 2136,
                                      "end": 2144,
                                      "typeAnnotation": {
                                        "type": "TSNumberKeyword",
                                        "start": 2138,
                                        "end": 2144
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
                          "start": 2148,
                          "end": 2152,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 2151,
                            "end": 2152,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2151,
                              "end": 2152,
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
                  "start": 2154,
                  "end": 2168,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 2157,
                    "end": 2168,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 2158,
                        "end": 2162,
                        "decorators": [],
                        "name": "r",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2159,
                          "end": 2162,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 2161,
                            "end": 2162,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2161,
                              "end": 2162,
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
                      "start": 2164,
                      "end": 2168,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 2167,
                        "end": 2168,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2167,
                          "end": 2168,
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
                  "start": 2053,
                  "end": 2088,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 2054,
                      "end": 2068,
                      "const": false,
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 2064,
                        "end": 2068,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2064,
                          "end": 2068,
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
                        "start": 2054,
                        "end": 2055,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "out": false
                    },
                    {
                      "type": "TSTypeParameter",
                      "start": 2070,
                      "end": 2087,
                      "const": false,
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 2080,
                        "end": 2087,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2080,
                          "end": 2087,
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
                        "start": 2070,
                        "end": 2071,
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
            "start": 2223,
            "end": 2268,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2223,
              "end": 2226,
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
              "start": 2226,
              "end": 2267,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 2228,
                "end": 2267,
                "abstract": false,
                "params": [
                  {
                    "type": "RestElement",
                    "start": 2252,
                    "end": 2261,
                    "argument": {
                      "type": "Identifier",
                      "start": 2255,
                      "end": 2256,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "decorators": [],
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2256,
                      "end": 2261,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 2258,
                        "end": 2261,
                        "elementType": {
                          "type": "TSTypeReference",
                          "start": 2258,
                          "end": 2259,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 2258,
                            "end": 2259,
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
                  "start": 2263,
                  "end": 2267,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 2266,
                    "end": 2267,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2266,
                      "end": 2267,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 2232,
                  "end": 2251,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 2233,
                      "end": 2250,
                      "const": false,
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 2243,
                        "end": 2250,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2243,
                          "end": 2250,
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
                        "start": 2233,
                        "end": 2234,
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
            "start": 2279,
            "end": 2322,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2279,
              "end": 2282,
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
              "start": 2282,
              "end": 2321,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 2284,
                "end": 2321,
                "abstract": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 2305,
                    "end": 2309,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2306,
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
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 2311,
                    "end": 2315,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2312,
                      "end": 2315,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 2314,
                        "end": 2315,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2314,
                          "end": 2315,
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
                  "start": 2317,
                  "end": 2321,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 2320,
                    "end": 2321,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2320,
                      "end": 2321,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 2288,
                  "end": 2304,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 2289,
                      "end": 2303,
                      "const": false,
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 2299,
                        "end": 2303,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2299,
                          "end": 2303,
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
                        "start": 2289,
                        "end": 2290,
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
            "start": 2333,
            "end": 2406,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2333,
              "end": 2336,
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
              "start": 2336,
              "end": 2405,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 2338,
                "end": 2405,
                "abstract": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 2366,
                    "end": 2380,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2367,
                      "end": 2380,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 2369,
                        "end": 2380,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 2374,
                          "end": 2380,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 2375,
                              "end": 2379,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 2375,
                                "end": 2379,
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
                          "start": 2369,
                          "end": 2374,
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
                    "start": 2382,
                    "end": 2386,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2383,
                      "end": 2386,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 2385,
                        "end": 2386,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2385,
                          "end": 2386,
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
                  "start": 2388,
                  "end": 2405,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 2391,
                    "end": 2405,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 2396,
                      "end": 2405,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 2397,
                          "end": 2404,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 2397,
                            "end": 2404,
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
                      "start": 2391,
                      "end": 2396,
                      "decorators": [],
                      "name": "Array",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 2342,
                  "end": 2365,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 2343,
                      "end": 2364,
                      "const": false,
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 2353,
                        "end": 2364,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 2358,
                          "end": 2364,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 2359,
                              "end": 2363,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 2359,
                                "end": 2363,
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
                          "start": 2353,
                          "end": 2358,
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
                        "start": 2343,
                        "end": 2344,
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
            "start": 2447,
            "end": 2510,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2447,
              "end": 2450,
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
              "start": 2450,
              "end": 2509,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 2452,
                "end": 2509,
                "abstract": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 2483,
                    "end": 2497,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2484,
                      "end": 2497,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 2486,
                        "end": 2497,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 2491,
                          "end": 2497,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 2492,
                              "end": 2496,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 2492,
                                "end": 2496,
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
                          "start": 2486,
                          "end": 2491,
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
                    "start": 2499,
                    "end": 2503,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2500,
                      "end": 2503,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 2502,
                        "end": 2503,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2502,
                          "end": 2503,
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
                  "start": 2505,
                  "end": 2509,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 2508,
                    "end": 2509,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2508,
                      "end": 2509,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 2456,
                  "end": 2482,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 2457,
                      "end": 2481,
                      "const": false,
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 2467,
                        "end": 2481,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 2472,
                          "end": 2481,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 2473,
                              "end": 2480,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 2473,
                                "end": 2480,
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
                          "start": 2467,
                          "end": 2472,
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
                        "start": 2457,
                        "end": 2458,
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
            "start": 2608,
            "end": 2648,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2608,
              "end": 2611,
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
              "start": 2611,
              "end": 2647,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 2613,
                "end": 2647,
                "abstract": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 2624,
                    "end": 2641,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2625,
                      "end": 2641,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 2627,
                        "end": 2641,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 2629,
                            "end": 2634,
                            "accessibility": null,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 2629,
                              "end": 2630,
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
                              "start": 2630,
                              "end": 2633,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 2632,
                                "end": 2633,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 2632,
                                  "end": 2633,
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
                            "start": 2635,
                            "end": 2639,
                            "accessibility": null,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 2635,
                              "end": 2636,
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
                              "start": 2636,
                              "end": 2639,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 2638,
                                "end": 2639,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 2638,
                                  "end": 2639,
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
                  "start": 2643,
                  "end": 2647,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 2646,
                    "end": 2647,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2646,
                      "end": 2647,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 2617,
                  "end": 2623,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 2618,
                      "end": 2619,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 2618,
                        "end": 2619,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "out": false
                    },
                    {
                      "type": "TSTypeParameter",
                      "start": 2621,
                      "end": 2622,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 2621,
                        "end": 2622,
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
          "start": 1313,
          "end": 1314,
          "expression": {
            "type": "Identifier",
            "start": 1313,
            "end": 1314,
            "decorators": [],
            "name": "B",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 1303,
        "end": 1304,
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
