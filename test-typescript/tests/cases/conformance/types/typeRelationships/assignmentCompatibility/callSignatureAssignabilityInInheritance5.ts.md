__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 207,
  "end": 2535,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 207,
      "end": 234,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 218,
        "end": 234,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 220,
            "end": 232,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 220,
              "end": 223,
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
              "start": 223,
              "end": 231,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 225,
                "end": 231
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
        "start": 213,
        "end": 217,
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
      "start": 235,
      "end": 278,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 262,
        "end": 278,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 264,
            "end": 276,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 264,
              "end": 267,
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
              "start": 267,
              "end": 275,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 269,
                "end": 275
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
        "start": 241,
        "end": 248,
        "decorators": [],
        "name": "Derived",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 257,
        "end": 261,
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
      "start": 279,
      "end": 326,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 310,
        "end": 326,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 312,
            "end": 324,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 312,
              "end": 315,
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
              "start": 315,
              "end": 323,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 317,
                "end": 323
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
        "start": 285,
        "end": 293,
        "decorators": [],
        "name": "Derived2",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 302,
        "end": 309,
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
      "start": 327,
      "end": 376,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 359,
        "end": 376,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 361,
            "end": 374,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 361,
              "end": 365,
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
              "start": 365,
              "end": 373,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 367,
                "end": 373
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
        "start": 333,
        "end": 345,
        "decorators": [],
        "name": "OtherDerived",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 354,
        "end": 358,
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
      "start": 378,
      "end": 1167,
      "body": {
        "type": "TSInterfaceBody",
        "start": 390,
        "end": 1167,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 412,
            "end": 439,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 412,
              "end": 413,
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
              "start": 413,
              "end": 438,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 415,
                "end": 438,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 416,
                    "end": 425,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 417,
                      "end": 425,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 419,
                        "end": 425
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 427,
                  "end": 438,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 430,
                    "end": 438,
                    "elementType": {
                      "type": "TSNumberKeyword",
                      "start": 430,
                      "end": 436
                    }
                  }
                },
                "typeParameters": null
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 444,
            "end": 472,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 444,
              "end": 446,
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
              "start": 446,
              "end": 471,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 448,
                "end": 471,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 449,
                    "end": 458,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 450,
                      "end": 458,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 452,
                        "end": 458
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 460,
                  "end": 471,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 463,
                    "end": 471,
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 463,
                      "end": 469
                    }
                  }
                },
                "typeParameters": null
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 477,
            "end": 501,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 477,
              "end": 479,
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
              "start": 479,
              "end": 500,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 481,
                "end": 500,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 482,
                    "end": 491,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 483,
                      "end": 491,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 485,
                        "end": 491
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 493,
                  "end": 500,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 496,
                    "end": 500
                  }
                },
                "typeParameters": null
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 506,
            "end": 543,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 506,
              "end": 508,
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
              "start": 508,
              "end": 542,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 510,
                "end": 542,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 511,
                    "end": 520,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 512,
                      "end": 520,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 514,
                        "end": 520
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 522,
                    "end": 531,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 523,
                      "end": 531,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 525,
                        "end": 531
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 533,
                  "end": 542,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 536,
                    "end": 542
                  }
                },
                "typeParameters": null
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 548,
            "end": 591,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 548,
              "end": 550,
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
              "start": 550,
              "end": 590,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 552,
                "end": 590,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 553,
                    "end": 579,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 554,
                      "end": 579,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 556,
                        "end": 579,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 557,
                            "end": 568,
                            "decorators": [],
                            "name": "arg",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 560,
                              "end": 568,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 562,
                                "end": 568
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 570,
                          "end": 579,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 573,
                            "end": 579
                          }
                        },
                        "typeParameters": null
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 581,
                  "end": 590,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 584,
                    "end": 590
                  }
                },
                "typeParameters": null
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 596,
            "end": 636,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 596,
              "end": 598,
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
              "start": 598,
              "end": 635,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 600,
                "end": 635,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 601,
                    "end": 626,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 602,
                      "end": 626,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 604,
                        "end": 626,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 605,
                            "end": 614,
                            "decorators": [],
                            "name": "arg",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 608,
                              "end": 614,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 610,
                                "end": 614,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 610,
                                  "end": 614,
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
                          "start": 616,
                          "end": 626,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 619,
                            "end": 626,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 619,
                              "end": 626,
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
                  "start": 628,
                  "end": 635,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 631,
                    "end": 635,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 631,
                      "end": 635,
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
            "start": 641,
            "end": 697,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 641,
              "end": 643,
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
              "start": 643,
              "end": 696,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 645,
                "end": 696,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 646,
                    "end": 671,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 647,
                      "end": 671,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 649,
                        "end": 671,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 650,
                            "end": 659,
                            "decorators": [],
                            "name": "arg",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 653,
                              "end": 659,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 655,
                                "end": 659,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 655,
                                  "end": 659,
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
                          "start": 661,
                          "end": 671,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 664,
                            "end": 671,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 664,
                              "end": 671,
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
                  "start": 673,
                  "end": 696,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 676,
                    "end": 696,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 677,
                        "end": 684,
                        "decorators": [],
                        "name": "r",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 678,
                          "end": 684,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 680,
                            "end": 684,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 680,
                              "end": 684,
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
                      "start": 686,
                      "end": 696,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 689,
                        "end": 696,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 689,
                          "end": 696,
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
            "start": 702,
            "end": 786,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 702,
              "end": 704,
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
              "start": 704,
              "end": 785,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 706,
                "end": 785,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 707,
                    "end": 732,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 708,
                      "end": 732,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 710,
                        "end": 732,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 711,
                            "end": 720,
                            "decorators": [],
                            "name": "arg",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 714,
                              "end": 720,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 716,
                                "end": 720,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 716,
                                  "end": 720,
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
                          "start": 722,
                          "end": 732,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 725,
                            "end": 732,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 725,
                              "end": 732,
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
                    "start": 734,
                    "end": 760,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 735,
                      "end": 760,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 737,
                        "end": 760,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 738,
                            "end": 748,
                            "decorators": [],
                            "name": "arg2",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 742,
                              "end": 748,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 744,
                                "end": 748,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 744,
                                  "end": 748,
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
                          "start": 750,
                          "end": 760,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 753,
                            "end": 760,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 753,
                              "end": 760,
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
                  "start": 762,
                  "end": 785,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 765,
                    "end": 785,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 766,
                        "end": 773,
                        "decorators": [],
                        "name": "r",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 767,
                          "end": 773,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 769,
                            "end": 773,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 769,
                              "end": 773,
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
                      "start": 775,
                      "end": 785,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 778,
                        "end": 785,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 778,
                          "end": 785,
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
            "start": 791,
            "end": 875,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 791,
              "end": 793,
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
              "start": 793,
              "end": 874,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 795,
                "end": 874,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 796,
                    "end": 821,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 797,
                      "end": 821,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 799,
                        "end": 821,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 800,
                            "end": 809,
                            "decorators": [],
                            "name": "arg",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 803,
                              "end": 809,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 805,
                                "end": 809,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 805,
                                  "end": 809,
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
                          "start": 811,
                          "end": 821,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 814,
                            "end": 821,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 814,
                              "end": 821,
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
                    "start": 823,
                    "end": 849,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 824,
                      "end": 849,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 826,
                        "end": 849,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 827,
                            "end": 837,
                            "decorators": [],
                            "name": "arg2",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 831,
                              "end": 837,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 833,
                                "end": 837,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 833,
                                  "end": 837,
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
                          "start": 839,
                          "end": 849,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 842,
                            "end": 849,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 842,
                              "end": 849,
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
                  "start": 851,
                  "end": 874,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 854,
                    "end": 874,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 855,
                        "end": 862,
                        "decorators": [],
                        "name": "r",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 856,
                          "end": 862,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 858,
                            "end": 862,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 858,
                              "end": 862,
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
                      "start": 864,
                      "end": 874,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 867,
                        "end": 874,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 867,
                          "end": 874,
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
            "start": 880,
            "end": 914,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 880,
              "end": 883,
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
              "start": 883,
              "end": 913,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 885,
                "end": 913,
                "params": [
                  {
                    "type": "RestElement",
                    "start": 886,
                    "end": 901,
                    "argument": {
                      "type": "Identifier",
                      "start": 889,
                      "end": 890,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "decorators": [],
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 890,
                      "end": 901,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 892,
                        "end": 901,
                        "elementType": {
                          "type": "TSTypeReference",
                          "start": 892,
                          "end": 899,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 892,
                            "end": 899,
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
                  "start": 903,
                  "end": 913,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 906,
                    "end": 913,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 906,
                      "end": 913,
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
            "start": 919,
            "end": 986,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 919,
              "end": 922,
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
              "start": 922,
              "end": 985,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 924,
                "end": 985,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 925,
                    "end": 943,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 926,
                      "end": 943,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 928,
                        "end": 943,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 930,
                            "end": 941,
                            "accessibility": null,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 930,
                              "end": 933,
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
                              "start": 933,
                              "end": 941,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 935,
                                "end": 941
                              }
                            }
                          }
                        ]
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 945,
                    "end": 976,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 946,
                      "end": 976,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 948,
                        "end": 976,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 950,
                            "end": 962,
                            "accessibility": null,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 950,
                              "end": 953,
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
                              "start": 953,
                              "end": 961,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 955,
                                "end": 961
                              }
                            }
                          },
                          {
                            "type": "TSPropertySignature",
                            "start": 963,
                            "end": 974,
                            "accessibility": null,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 963,
                              "end": 966,
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
                              "start": 966,
                              "end": 974,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 968,
                                "end": 974
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
                  "start": 978,
                  "end": 985,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 981,
                    "end": 985,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 981,
                      "end": 985,
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
            "start": 991,
            "end": 1051,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 991,
              "end": 994,
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
              "start": 994,
              "end": 1050,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 996,
                "end": 1050,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 997,
                    "end": 1011,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 998,
                      "end": 1011,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1000,
                        "end": 1011,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 1005,
                          "end": 1011,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 1006,
                              "end": 1010,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1006,
                                "end": 1010,
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
                          "start": 1000,
                          "end": 1005,
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
                    "start": 1013,
                    "end": 1031,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1014,
                      "end": 1031,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1016,
                        "end": 1031,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 1021,
                          "end": 1031,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 1022,
                              "end": 1030,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1022,
                                "end": 1030,
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
                          "start": 1016,
                          "end": 1021,
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
                  "start": 1033,
                  "end": 1050,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1036,
                    "end": 1050,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 1041,
                      "end": 1050,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 1042,
                          "end": 1049,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1042,
                            "end": 1049,
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
                      "start": 1036,
                      "end": 1041,
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
            "start": 1056,
            "end": 1115,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1056,
              "end": 1059,
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
              "start": 1059,
              "end": 1114,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 1061,
                "end": 1114,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1062,
                    "end": 1076,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1063,
                      "end": 1076,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1065,
                        "end": 1076,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 1070,
                          "end": 1076,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 1071,
                              "end": 1075,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1071,
                                "end": 1075,
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
                          "start": 1065,
                          "end": 1070,
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
                    "start": 1078,
                    "end": 1095,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1079,
                      "end": 1095,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1081,
                        "end": 1095,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 1086,
                          "end": 1095,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 1087,
                              "end": 1094,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1087,
                                "end": 1094,
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
                          "start": 1081,
                          "end": 1086,
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
                  "start": 1097,
                  "end": 1114,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1100,
                    "end": 1114,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 1105,
                      "end": 1114,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 1106,
                          "end": 1113,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1106,
                            "end": 1113,
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
                      "start": 1100,
                      "end": 1105,
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
            "start": 1120,
            "end": 1165,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1120,
              "end": 1123,
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
              "start": 1123,
              "end": 1164,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 1125,
                "end": 1164,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1126,
                    "end": 1153,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1127,
                      "end": 1153,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 1129,
                        "end": 1153,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 1131,
                            "end": 1141,
                            "accessibility": null,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 1131,
                              "end": 1132,
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
                              "start": 1132,
                              "end": 1140,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 1134,
                                "end": 1140
                              }
                            }
                          },
                          {
                            "type": "TSPropertySignature",
                            "start": 1142,
                            "end": 1151,
                            "accessibility": null,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 1142,
                              "end": 1143,
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
                              "start": 1143,
                              "end": 1151,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 1145,
                                "end": 1151
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
                  "start": 1155,
                  "end": 1164,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1158,
                    "end": 1164,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1158,
                      "end": 1164,
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
        "start": 388,
        "end": 389,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1169,
      "end": 1219,
      "body": {
        "type": "TSInterfaceBody",
        "start": 1191,
        "end": 1219,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 1197,
            "end": 1217,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1197,
              "end": 1198,
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
              "start": 1198,
              "end": 1216,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 1200,
                "end": 1216,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1204,
                    "end": 1208,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1205,
                      "end": 1208,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1207,
                        "end": 1208,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1207,
                          "end": 1208,
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
                  "start": 1210,
                  "end": 1216,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 1213,
                    "end": 1216,
                    "elementType": {
                      "type": "TSTypeReference",
                      "start": 1213,
                      "end": 1214,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1213,
                        "end": 1214,
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
                  "start": 1200,
                  "end": 1203,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 1201,
                      "end": 1202,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 1201,
                        "end": 1202,
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
          "start": 1189,
          "end": 1190,
          "expression": {
            "type": "Identifier",
            "start": 1189,
            "end": 1190,
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
        "start": 1179,
        "end": 1180,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1228,
      "end": 2535,
      "body": {
        "type": "TSInterfaceBody",
        "start": 1250,
        "end": 2535,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 1267,
            "end": 1287,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1267,
              "end": 1268,
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
              "start": 1268,
              "end": 1286,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 1270,
                "end": 1286,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1274,
                    "end": 1278,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1275,
                      "end": 1278,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1277,
                        "end": 1278,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1277,
                          "end": 1278,
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
                  "start": 1280,
                  "end": 1286,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 1283,
                    "end": 1286,
                    "elementType": {
                      "type": "TSTypeReference",
                      "start": 1283,
                      "end": 1284,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1283,
                        "end": 1284,
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
                  "start": 1270,
                  "end": 1273,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 1271,
                      "end": 1272,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 1271,
                        "end": 1272,
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
            "start": 1349,
            "end": 1375,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1349,
              "end": 1351,
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
              "start": 1351,
              "end": 1374,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 1353,
                "end": 1374,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1357,
                    "end": 1361,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1358,
                      "end": 1361,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1360,
                        "end": 1361,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1360,
                          "end": 1361,
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
                  "start": 1363,
                  "end": 1374,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 1366,
                    "end": 1374,
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 1366,
                      "end": 1372
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 1353,
                  "end": 1356,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 1354,
                      "end": 1355,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 1354,
                        "end": 1355,
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
            "start": 1386,
            "end": 1405,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1386,
              "end": 1388,
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
              "start": 1388,
              "end": 1404,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 1390,
                "end": 1404,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1394,
                    "end": 1398,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1395,
                      "end": 1398,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1397,
                        "end": 1398,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1397,
                          "end": 1398,
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
                  "start": 1400,
                  "end": 1404,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1403,
                    "end": 1404,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1403,
                      "end": 1404,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 1390,
                  "end": 1393,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 1391,
                      "end": 1392,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 1391,
                        "end": 1392,
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
            "start": 1440,
            "end": 1468,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1440,
              "end": 1442,
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
              "start": 1442,
              "end": 1467,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 1444,
                "end": 1467,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1451,
                    "end": 1455,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1452,
                      "end": 1455,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1454,
                        "end": 1455,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1454,
                          "end": 1455,
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
                    "start": 1457,
                    "end": 1461,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1458,
                      "end": 1461,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1460,
                        "end": 1461,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1460,
                          "end": 1461,
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
                  "start": 1463,
                  "end": 1467,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1466,
                    "end": 1467,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1466,
                      "end": 1467,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 1444,
                  "end": 1450,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 1445,
                      "end": 1446,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 1445,
                        "end": 1446,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "out": false
                    },
                    {
                      "type": "TSTypeParameter",
                      "start": 1448,
                      "end": 1449,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 1448,
                        "end": 1449,
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
            "start": 1543,
            "end": 1577,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1543,
              "end": 1545,
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
              "start": 1545,
              "end": 1576,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 1547,
                "end": 1576,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1554,
                    "end": 1570,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1555,
                      "end": 1570,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 1557,
                        "end": 1570,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 1558,
                            "end": 1564,
                            "decorators": [],
                            "name": "arg",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1561,
                              "end": 1564,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 1563,
                                "end": 1564,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1563,
                                  "end": 1564,
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
                          "start": 1566,
                          "end": 1570,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 1569,
                            "end": 1570,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1569,
                              "end": 1570,
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
                  "start": 1572,
                  "end": 1576,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1575,
                    "end": 1576,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1575,
                      "end": 1576,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 1547,
                  "end": 1553,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 1548,
                      "end": 1549,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 1548,
                        "end": 1549,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "out": false
                    },
                    {
                      "type": "TSTypeParameter",
                      "start": 1551,
                      "end": 1552,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 1551,
                        "end": 1552,
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
            "start": 1644,
            "end": 1707,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1644,
              "end": 1646,
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
              "start": 1646,
              "end": 1706,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 1648,
                "end": 1706,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1684,
                    "end": 1700,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1685,
                      "end": 1700,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 1687,
                        "end": 1700,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 1688,
                            "end": 1694,
                            "decorators": [],
                            "name": "arg",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1691,
                              "end": 1694,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 1693,
                                "end": 1694,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1693,
                                  "end": 1694,
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
                          "start": 1696,
                          "end": 1700,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 1699,
                            "end": 1700,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1699,
                              "end": 1700,
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
                  "start": 1702,
                  "end": 1706,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1705,
                    "end": 1706,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1705,
                      "end": 1706,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 1648,
                  "end": 1683,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 1649,
                      "end": 1663,
                      "const": false,
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 1659,
                        "end": 1663,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1659,
                          "end": 1663,
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
                        "start": 1649,
                        "end": 1650,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "out": false
                    },
                    {
                      "type": "TSTypeParameter",
                      "start": 1665,
                      "end": 1682,
                      "const": false,
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 1675,
                        "end": 1682,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1675,
                          "end": 1682,
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
                        "start": 1665,
                        "end": 1666,
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
            "start": 1761,
            "end": 1834,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1761,
              "end": 1763,
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
              "start": 1763,
              "end": 1833,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 1765,
                "end": 1833,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1801,
                    "end": 1817,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1802,
                      "end": 1817,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 1804,
                        "end": 1817,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 1805,
                            "end": 1811,
                            "decorators": [],
                            "name": "arg",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1808,
                              "end": 1811,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 1810,
                                "end": 1811,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1810,
                                  "end": 1811,
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
                          "start": 1813,
                          "end": 1817,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 1816,
                            "end": 1817,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1816,
                              "end": 1817,
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
                  "start": 1819,
                  "end": 1833,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 1822,
                    "end": 1833,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1823,
                        "end": 1827,
                        "decorators": [],
                        "name": "r",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1824,
                          "end": 1827,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 1826,
                            "end": 1827,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1826,
                              "end": 1827,
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
                      "start": 1829,
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
                  "start": 1765,
                  "end": 1800,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 1766,
                      "end": 1780,
                      "const": false,
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 1776,
                        "end": 1780,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1776,
                          "end": 1780,
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
                        "start": 1766,
                        "end": 1767,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "out": false
                    },
                    {
                      "type": "TSTypeParameter",
                      "start": 1782,
                      "end": 1799,
                      "const": false,
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 1792,
                        "end": 1799,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1792,
                          "end": 1799,
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
                        "start": 1782,
                        "end": 1783,
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
            "start": 1845,
            "end": 1937,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1845,
              "end": 1847,
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
              "start": 1847,
              "end": 1936,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 1849,
                "end": 1936,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1885,
                    "end": 1901,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1886,
                      "end": 1901,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 1888,
                        "end": 1901,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 1889,
                            "end": 1895,
                            "decorators": [],
                            "name": "arg",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1892,
                              "end": 1895,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 1894,
                                "end": 1895,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1894,
                                  "end": 1895,
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
                          "start": 1897,
                          "end": 1901,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 1900,
                            "end": 1901,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1900,
                              "end": 1901,
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
                    "start": 1903,
                    "end": 1920,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1904,
                      "end": 1920,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 1906,
                        "end": 1920,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 1907,
                            "end": 1914,
                            "decorators": [],
                            "name": "arg2",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1911,
                              "end": 1914,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 1913,
                                "end": 1914,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1913,
                                  "end": 1914,
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
                          "start": 1916,
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
                  "start": 1922,
                  "end": 1936,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 1925,
                    "end": 1936,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1926,
                        "end": 1930,
                        "decorators": [],
                        "name": "r",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1927,
                          "end": 1930,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 1929,
                            "end": 1930,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1929,
                              "end": 1930,
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
                      "start": 1932,
                      "end": 1936,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1935,
                        "end": 1936,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1935,
                          "end": 1936,
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
                  "start": 1849,
                  "end": 1884,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 1850,
                      "end": 1864,
                      "const": false,
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 1860,
                        "end": 1864,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1860,
                          "end": 1864,
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
                        "start": 1850,
                        "end": 1851,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "out": false
                    },
                    {
                      "type": "TSTypeParameter",
                      "start": 1866,
                      "end": 1883,
                      "const": false,
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 1876,
                        "end": 1883,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1876,
                          "end": 1883,
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
                        "start": 1866,
                        "end": 1867,
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
            "start": 1948,
            "end": 2068,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1948,
              "end": 1950,
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
              "start": 1950,
              "end": 2067,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 1952,
                "end": 2067,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1988,
                    "end": 2004,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1989,
                      "end": 2004,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 1991,
                        "end": 2004,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 1992,
                            "end": 1998,
                            "decorators": [],
                            "name": "arg",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1995,
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
                          "start": 2000,
                          "end": 2004,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 2003,
                            "end": 2004,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2003,
                              "end": 2004,
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
                    "start": 2006,
                    "end": 2051,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2007,
                      "end": 2051,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 2009,
                        "end": 2051,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 2010,
                            "end": 2045,
                            "decorators": [],
                            "name": "arg2",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 2014,
                              "end": 2045,
                              "typeAnnotation": {
                                "type": "TSTypeLiteral",
                                "start": 2016,
                                "end": 2045,
                                "members": [
                                  {
                                    "type": "TSPropertySignature",
                                    "start": 2018,
                                    "end": 2030,
                                    "accessibility": null,
                                    "computed": false,
                                    "key": {
                                      "type": "Identifier",
                                      "start": 2018,
                                      "end": 2021,
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
                                      "start": 2021,
                                      "end": 2029,
                                      "typeAnnotation": {
                                        "type": "TSStringKeyword",
                                        "start": 2023,
                                        "end": 2029
                                      }
                                    }
                                  },
                                  {
                                    "type": "TSPropertySignature",
                                    "start": 2031,
                                    "end": 2043,
                                    "accessibility": null,
                                    "computed": false,
                                    "key": {
                                      "type": "Identifier",
                                      "start": 2031,
                                      "end": 2035,
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
                                      "start": 2035,
                                      "end": 2043,
                                      "typeAnnotation": {
                                        "type": "TSNumberKeyword",
                                        "start": 2037,
                                        "end": 2043
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
                          "start": 2047,
                          "end": 2051,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 2050,
                            "end": 2051,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2050,
                              "end": 2051,
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
                  "start": 2053,
                  "end": 2067,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 2056,
                    "end": 2067,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 2057,
                        "end": 2061,
                        "decorators": [],
                        "name": "r",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2058,
                          "end": 2061,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 2060,
                            "end": 2061,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2060,
                              "end": 2061,
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
                      "start": 2063,
                      "end": 2067,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 2066,
                        "end": 2067,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2066,
                          "end": 2067,
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
                  "start": 1952,
                  "end": 1987,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 1953,
                      "end": 1967,
                      "const": false,
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 1963,
                        "end": 1967,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1963,
                          "end": 1967,
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
                        "start": 1953,
                        "end": 1954,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "out": false
                    },
                    {
                      "type": "TSTypeParameter",
                      "start": 1969,
                      "end": 1986,
                      "const": false,
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 1979,
                        "end": 1986,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1979,
                          "end": 1986,
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
                        "start": 1969,
                        "end": 1970,
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
            "start": 2122,
            "end": 2163,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2122,
              "end": 2125,
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
              "start": 2125,
              "end": 2162,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 2127,
                "end": 2162,
                "params": [
                  {
                    "type": "RestElement",
                    "start": 2147,
                    "end": 2156,
                    "argument": {
                      "type": "Identifier",
                      "start": 2150,
                      "end": 2151,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "decorators": [],
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2151,
                      "end": 2156,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 2153,
                        "end": 2156,
                        "elementType": {
                          "type": "TSTypeReference",
                          "start": 2153,
                          "end": 2154,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 2153,
                            "end": 2154,
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
                  "start": 2158,
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
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 2127,
                  "end": 2146,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 2128,
                      "end": 2145,
                      "const": false,
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 2138,
                        "end": 2145,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2138,
                          "end": 2145,
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
                        "start": 2128,
                        "end": 2129,
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
            "start": 2174,
            "end": 2213,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2174,
              "end": 2177,
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
              "start": 2177,
              "end": 2212,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 2179,
                "end": 2212,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 2196,
                    "end": 2200,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2197,
                      "end": 2200,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 2199,
                        "end": 2200,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2199,
                          "end": 2200,
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
                    "start": 2202,
                    "end": 2206,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2203,
                      "end": 2206,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 2205,
                        "end": 2206,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2205,
                          "end": 2206,
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
                  "start": 2208,
                  "end": 2212,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 2211,
                    "end": 2212,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2211,
                      "end": 2212,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 2179,
                  "end": 2195,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 2180,
                      "end": 2194,
                      "const": false,
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 2190,
                        "end": 2194,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2190,
                          "end": 2194,
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
                        "start": 2180,
                        "end": 2181,
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
            "start": 2224,
            "end": 2293,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2224,
              "end": 2227,
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
              "start": 2227,
              "end": 2292,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 2229,
                "end": 2292,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 2253,
                    "end": 2267,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2254,
                      "end": 2267,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 2256,
                        "end": 2267,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 2261,
                          "end": 2267,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 2262,
                              "end": 2266,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 2262,
                                "end": 2266,
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
                          "start": 2256,
                          "end": 2261,
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
                    "start": 2269,
                    "end": 2273,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2270,
                      "end": 2273,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 2272,
                        "end": 2273,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2272,
                          "end": 2273,
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
                  "start": 2275,
                  "end": 2292,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 2278,
                    "end": 2292,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 2283,
                      "end": 2292,
                      "params": [
                        {
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
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 2278,
                      "end": 2283,
                      "decorators": [],
                      "name": "Array",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 2229,
                  "end": 2252,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 2230,
                      "end": 2251,
                      "const": false,
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 2240,
                        "end": 2251,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 2245,
                          "end": 2251,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 2246,
                              "end": 2250,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 2246,
                                "end": 2250,
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
                          "start": 2240,
                          "end": 2245,
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
                        "start": 2230,
                        "end": 2231,
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
            "start": 2334,
            "end": 2393,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2334,
              "end": 2337,
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
              "start": 2337,
              "end": 2392,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 2339,
                "end": 2392,
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
                  "end": 2392,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 2391,
                    "end": 2392,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2391,
                      "end": 2392,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 2339,
                  "end": 2365,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 2340,
                      "end": 2364,
                      "const": false,
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 2350,
                        "end": 2364,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 2355,
                          "end": 2364,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 2356,
                              "end": 2363,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 2356,
                                "end": 2363,
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
                          "start": 2350,
                          "end": 2355,
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
                        "start": 2340,
                        "end": 2341,
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
            "start": 2491,
            "end": 2527,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2491,
              "end": 2494,
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
              "start": 2494,
              "end": 2526,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 2496,
                "end": 2526,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 2503,
                    "end": 2520,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2504,
                      "end": 2520,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 2506,
                        "end": 2520,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 2508,
                            "end": 2513,
                            "accessibility": null,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 2508,
                              "end": 2509,
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
                              "start": 2509,
                              "end": 2512,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 2511,
                                "end": 2512,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 2511,
                                  "end": 2512,
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
                            "start": 2514,
                            "end": 2518,
                            "accessibility": null,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 2514,
                              "end": 2515,
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
                              "start": 2515,
                              "end": 2518,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 2517,
                                "end": 2518,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 2517,
                                  "end": 2518,
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
                  "start": 2522,
                  "end": 2526,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 2525,
                    "end": 2526,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2525,
                      "end": 2526,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 2496,
                  "end": 2502,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 2497,
                      "end": 2498,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 2497,
                        "end": 2498,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "out": false
                    },
                    {
                      "type": "TSTypeParameter",
                      "start": 2500,
                      "end": 2501,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 2500,
                        "end": 2501,
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
          "start": 1248,
          "end": 1249,
          "expression": {
            "type": "Identifier",
            "start": 1248,
            "end": 1249,
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
        "start": 1238,
        "end": 1239,
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
