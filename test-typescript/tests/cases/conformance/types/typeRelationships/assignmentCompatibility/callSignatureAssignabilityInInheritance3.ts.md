__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 117,
  "end": 4356,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 117,
      "end": 4356,
      "body": {
        "type": "TSModuleBlock",
        "start": 131,
        "end": 4356,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 137,
            "end": 164,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 148,
              "end": 164,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 150,
                  "end": 162,
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "start": 150,
                    "end": 153,
                    "decorators": [],
                    "name": "foo",
                    "optional": false
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 153,
                    "end": 161,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 155,
                      "end": 161
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
              "start": 143,
              "end": 147,
              "decorators": [],
              "name": "Base",
              "optional": false
            },
            "implements": [],
            "superClass": null
          },
          {
            "type": "ClassDeclaration",
            "start": 169,
            "end": 212,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 196,
              "end": 212,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 198,
                  "end": 210,
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "start": 198,
                    "end": 201,
                    "decorators": [],
                    "name": "bar",
                    "optional": false
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 201,
                    "end": 209,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 203,
                      "end": 209
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
              "start": 175,
              "end": 182,
              "decorators": [],
              "name": "Derived",
              "optional": false
            },
            "implements": [],
            "superClass": {
              "type": "Identifier",
              "start": 191,
              "end": 195,
              "decorators": [],
              "name": "Base",
              "optional": false
            }
          },
          {
            "type": "ClassDeclaration",
            "start": 217,
            "end": 264,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 248,
              "end": 264,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 250,
                  "end": 262,
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "start": 250,
                    "end": 253,
                    "decorators": [],
                    "name": "baz",
                    "optional": false
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 253,
                    "end": 261,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 255,
                      "end": 261
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
              "start": 223,
              "end": 231,
              "decorators": [],
              "name": "Derived2",
              "optional": false
            },
            "implements": [],
            "superClass": {
              "type": "Identifier",
              "start": 240,
              "end": 247,
              "decorators": [],
              "name": "Derived",
              "optional": false
            }
          },
          {
            "type": "ClassDeclaration",
            "start": 269,
            "end": 318,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 301,
              "end": 318,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 303,
                  "end": 316,
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "start": 303,
                    "end": 307,
                    "decorators": [],
                    "name": "bing",
                    "optional": false
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 307,
                    "end": 315,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 309,
                      "end": 315
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
              "start": 275,
              "end": 287,
              "decorators": [],
              "name": "OtherDerived",
              "optional": false
            },
            "implements": [],
            "superClass": {
              "type": "Identifier",
              "start": 296,
              "end": 300,
              "decorators": [],
              "name": "Base",
              "optional": false
            }
          },
          {
            "type": "TSModuleDeclaration",
            "start": 324,
            "end": 3889,
            "body": {
              "type": "TSModuleBlock",
              "start": 366,
              "end": 3889,
              "body": [
                {
                  "type": "TSInterfaceDeclaration",
                  "start": 430,
                  "end": 1767,
                  "body": {
                    "type": "TSInterfaceBody",
                    "start": 442,
                    "end": 1767,
                    "body": [
                      {
                        "type": "TSPropertySignature",
                        "start": 456,
                        "end": 484,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 456,
                          "end": 458,
                          "decorators": [],
                          "name": "a2",
                          "optional": false
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 458,
                          "end": 483,
                          "typeAnnotation": {
                            "type": "TSFunctionType",
                            "start": 460,
                            "end": 483,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 461,
                                "end": 470,
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 462,
                                  "end": 470,
                                  "typeAnnotation": {
                                    "type": "TSNumberKeyword",
                                    "start": 464,
                                    "end": 470
                                  }
                                }
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "start": 472,
                              "end": 483,
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "start": 475,
                                "end": 483,
                                "elementType": {
                                  "type": "TSStringKeyword",
                                  "start": 475,
                                  "end": 481
                                }
                              }
                            }
                          }
                        }
                      },
                      {
                        "type": "TSPropertySignature",
                        "start": 497,
                        "end": 554,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 497,
                          "end": 499,
                          "decorators": [],
                          "name": "a7",
                          "optional": false
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 499,
                          "end": 553,
                          "typeAnnotation": {
                            "type": "TSFunctionType",
                            "start": 501,
                            "end": 553,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 502,
                                "end": 527,
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 503,
                                  "end": 527,
                                  "typeAnnotation": {
                                    "type": "TSFunctionType",
                                    "start": 505,
                                    "end": 527,
                                    "params": [
                                      {
                                        "type": "Identifier",
                                        "start": 506,
                                        "end": 515,
                                        "decorators": [],
                                        "name": "arg",
                                        "optional": false,
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "start": 509,
                                          "end": 515,
                                          "typeAnnotation": {
                                            "type": "TSTypeReference",
                                            "start": 511,
                                            "end": 515,
                                            "typeName": {
                                              "type": "Identifier",
                                              "start": 511,
                                              "end": 515,
                                              "decorators": [],
                                              "name": "Base",
                                              "optional": false
                                            }
                                          }
                                        }
                                      }
                                    ],
                                    "returnType": {
                                      "type": "TSTypeAnnotation",
                                      "start": 517,
                                      "end": 527,
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "start": 520,
                                        "end": 527,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 520,
                                          "end": 527,
                                          "decorators": [],
                                          "name": "Derived",
                                          "optional": false
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "start": 529,
                              "end": 553,
                              "typeAnnotation": {
                                "type": "TSFunctionType",
                                "start": 532,
                                "end": 553,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "start": 533,
                                    "end": 540,
                                    "decorators": [],
                                    "name": "r",
                                    "optional": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 534,
                                      "end": 540,
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "start": 536,
                                        "end": 540,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 536,
                                          "end": 540,
                                          "decorators": [],
                                          "name": "Base",
                                          "optional": false
                                        }
                                      }
                                    }
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "start": 542,
                                  "end": 553,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 545,
                                    "end": 553,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 545,
                                      "end": 553,
                                      "decorators": [],
                                      "name": "Derived2",
                                      "optional": false
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      },
                      {
                        "type": "TSPropertySignature",
                        "start": 567,
                        "end": 651,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 567,
                          "end": 569,
                          "decorators": [],
                          "name": "a8",
                          "optional": false
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 569,
                          "end": 650,
                          "typeAnnotation": {
                            "type": "TSFunctionType",
                            "start": 571,
                            "end": 650,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 572,
                                "end": 597,
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 573,
                                  "end": 597,
                                  "typeAnnotation": {
                                    "type": "TSFunctionType",
                                    "start": 575,
                                    "end": 597,
                                    "params": [
                                      {
                                        "type": "Identifier",
                                        "start": 576,
                                        "end": 585,
                                        "decorators": [],
                                        "name": "arg",
                                        "optional": false,
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "start": 579,
                                          "end": 585,
                                          "typeAnnotation": {
                                            "type": "TSTypeReference",
                                            "start": 581,
                                            "end": 585,
                                            "typeName": {
                                              "type": "Identifier",
                                              "start": 581,
                                              "end": 585,
                                              "decorators": [],
                                              "name": "Base",
                                              "optional": false
                                            }
                                          }
                                        }
                                      }
                                    ],
                                    "returnType": {
                                      "type": "TSTypeAnnotation",
                                      "start": 587,
                                      "end": 597,
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "start": 590,
                                        "end": 597,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 590,
                                          "end": 597,
                                          "decorators": [],
                                          "name": "Derived",
                                          "optional": false
                                        }
                                      }
                                    }
                                  }
                                }
                              },
                              {
                                "type": "Identifier",
                                "start": 599,
                                "end": 625,
                                "decorators": [],
                                "name": "y",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 600,
                                  "end": 625,
                                  "typeAnnotation": {
                                    "type": "TSFunctionType",
                                    "start": 602,
                                    "end": 625,
                                    "params": [
                                      {
                                        "type": "Identifier",
                                        "start": 603,
                                        "end": 613,
                                        "decorators": [],
                                        "name": "arg2",
                                        "optional": false,
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "start": 607,
                                          "end": 613,
                                          "typeAnnotation": {
                                            "type": "TSTypeReference",
                                            "start": 609,
                                            "end": 613,
                                            "typeName": {
                                              "type": "Identifier",
                                              "start": 609,
                                              "end": 613,
                                              "decorators": [],
                                              "name": "Base",
                                              "optional": false
                                            }
                                          }
                                        }
                                      }
                                    ],
                                    "returnType": {
                                      "type": "TSTypeAnnotation",
                                      "start": 615,
                                      "end": 625,
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "start": 618,
                                        "end": 625,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 618,
                                          "end": 625,
                                          "decorators": [],
                                          "name": "Derived",
                                          "optional": false
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "start": 627,
                              "end": 650,
                              "typeAnnotation": {
                                "type": "TSFunctionType",
                                "start": 630,
                                "end": 650,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "start": 631,
                                    "end": 638,
                                    "decorators": [],
                                    "name": "r",
                                    "optional": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 632,
                                      "end": 638,
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "start": 634,
                                        "end": 638,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 634,
                                          "end": 638,
                                          "decorators": [],
                                          "name": "Base",
                                          "optional": false
                                        }
                                      }
                                    }
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "start": 640,
                                  "end": 650,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 643,
                                    "end": 650,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 643,
                                      "end": 650,
                                      "decorators": [],
                                      "name": "Derived",
                                      "optional": false
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      },
                      {
                        "type": "TSPropertySignature",
                        "start": 664,
                        "end": 692,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 664,
                          "end": 667,
                          "decorators": [],
                          "name": "a10",
                          "optional": false
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 667,
                          "end": 691,
                          "typeAnnotation": {
                            "type": "TSFunctionType",
                            "start": 669,
                            "end": 691,
                            "params": [
                              {
                                "type": "RestElement",
                                "start": 670,
                                "end": 682,
                                "argument": {
                                  "type": "Identifier",
                                  "start": 673,
                                  "end": 674,
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false
                                },
                                "decorators": [],
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 674,
                                  "end": 682,
                                  "typeAnnotation": {
                                    "type": "TSArrayType",
                                    "start": 676,
                                    "end": 682,
                                    "elementType": {
                                      "type": "TSTypeReference",
                                      "start": 676,
                                      "end": 680,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 676,
                                        "end": 680,
                                        "decorators": [],
                                        "name": "Base",
                                        "optional": false
                                      }
                                    }
                                  }
                                }
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "start": 684,
                              "end": 691,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 687,
                                "end": 691,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 687,
                                  "end": 691,
                                  "decorators": [],
                                  "name": "Base",
                                  "optional": false
                                }
                              }
                            }
                          }
                        }
                      },
                      {
                        "type": "TSPropertySignature",
                        "start": 705,
                        "end": 772,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 705,
                          "end": 708,
                          "decorators": [],
                          "name": "a11",
                          "optional": false
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 708,
                          "end": 771,
                          "typeAnnotation": {
                            "type": "TSFunctionType",
                            "start": 710,
                            "end": 771,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 711,
                                "end": 729,
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 712,
                                  "end": 729,
                                  "typeAnnotation": {
                                    "type": "TSTypeLiteral",
                                    "start": 714,
                                    "end": 729,
                                    "members": [
                                      {
                                        "type": "TSPropertySignature",
                                        "start": 716,
                                        "end": 727,
                                        "computed": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 716,
                                          "end": 719,
                                          "decorators": [],
                                          "name": "foo",
                                          "optional": false
                                        },
                                        "optional": false,
                                        "readonly": false,
                                        "static": false,
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "start": 719,
                                          "end": 727,
                                          "typeAnnotation": {
                                            "type": "TSStringKeyword",
                                            "start": 721,
                                            "end": 727
                                          }
                                        }
                                      }
                                    ]
                                  }
                                }
                              },
                              {
                                "type": "Identifier",
                                "start": 731,
                                "end": 762,
                                "decorators": [],
                                "name": "y",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 732,
                                  "end": 762,
                                  "typeAnnotation": {
                                    "type": "TSTypeLiteral",
                                    "start": 734,
                                    "end": 762,
                                    "members": [
                                      {
                                        "type": "TSPropertySignature",
                                        "start": 736,
                                        "end": 748,
                                        "computed": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 736,
                                          "end": 739,
                                          "decorators": [],
                                          "name": "foo",
                                          "optional": false
                                        },
                                        "optional": false,
                                        "readonly": false,
                                        "static": false,
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "start": 739,
                                          "end": 747,
                                          "typeAnnotation": {
                                            "type": "TSStringKeyword",
                                            "start": 741,
                                            "end": 747
                                          }
                                        }
                                      },
                                      {
                                        "type": "TSPropertySignature",
                                        "start": 749,
                                        "end": 760,
                                        "computed": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 749,
                                          "end": 752,
                                          "decorators": [],
                                          "name": "bar",
                                          "optional": false
                                        },
                                        "optional": false,
                                        "readonly": false,
                                        "static": false,
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "start": 752,
                                          "end": 760,
                                          "typeAnnotation": {
                                            "type": "TSStringKeyword",
                                            "start": 754,
                                            "end": 760
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
                              "start": 764,
                              "end": 771,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 767,
                                "end": 771,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 767,
                                  "end": 771,
                                  "decorators": [],
                                  "name": "Base",
                                  "optional": false
                                }
                              }
                            }
                          }
                        }
                      },
                      {
                        "type": "TSPropertySignature",
                        "start": 785,
                        "end": 845,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 785,
                          "end": 788,
                          "decorators": [],
                          "name": "a12",
                          "optional": false
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 788,
                          "end": 844,
                          "typeAnnotation": {
                            "type": "TSFunctionType",
                            "start": 790,
                            "end": 844,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 791,
                                "end": 805,
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 792,
                                  "end": 805,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 794,
                                    "end": 805,
                                    "typeArguments": {
                                      "type": "TSTypeParameterInstantiation",
                                      "start": 799,
                                      "end": 805,
                                      "params": [
                                        {
                                          "type": "TSTypeReference",
                                          "start": 800,
                                          "end": 804,
                                          "typeName": {
                                            "type": "Identifier",
                                            "start": 800,
                                            "end": 804,
                                            "decorators": [],
                                            "name": "Base",
                                            "optional": false
                                          }
                                        }
                                      ]
                                    },
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 794,
                                      "end": 799,
                                      "decorators": [],
                                      "name": "Array",
                                      "optional": false
                                    }
                                  }
                                }
                              },
                              {
                                "type": "Identifier",
                                "start": 807,
                                "end": 825,
                                "decorators": [],
                                "name": "y",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 808,
                                  "end": 825,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 810,
                                    "end": 825,
                                    "typeArguments": {
                                      "type": "TSTypeParameterInstantiation",
                                      "start": 815,
                                      "end": 825,
                                      "params": [
                                        {
                                          "type": "TSTypeReference",
                                          "start": 816,
                                          "end": 824,
                                          "typeName": {
                                            "type": "Identifier",
                                            "start": 816,
                                            "end": 824,
                                            "decorators": [],
                                            "name": "Derived2",
                                            "optional": false
                                          }
                                        }
                                      ]
                                    },
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 810,
                                      "end": 815,
                                      "decorators": [],
                                      "name": "Array",
                                      "optional": false
                                    }
                                  }
                                }
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "start": 827,
                              "end": 844,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 830,
                                "end": 844,
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "start": 835,
                                  "end": 844,
                                  "params": [
                                    {
                                      "type": "TSTypeReference",
                                      "start": 836,
                                      "end": 843,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 836,
                                        "end": 843,
                                        "decorators": [],
                                        "name": "Derived",
                                        "optional": false
                                      }
                                    }
                                  ]
                                },
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 830,
                                  "end": 835,
                                  "decorators": [],
                                  "name": "Array",
                                  "optional": false
                                }
                              }
                            }
                          }
                        }
                      },
                      {
                        "type": "TSPropertySignature",
                        "start": 858,
                        "end": 957,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 858,
                          "end": 861,
                          "decorators": [],
                          "name": "a14",
                          "optional": false
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 861,
                          "end": 956,
                          "typeAnnotation": {
                            "type": "TSTypeLiteral",
                            "start": 863,
                            "end": 956,
                            "members": [
                              {
                                "type": "TSCallSignatureDeclaration",
                                "start": 881,
                                "end": 903,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "start": 882,
                                    "end": 891,
                                    "decorators": [],
                                    "name": "x",
                                    "optional": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 883,
                                      "end": 891,
                                      "typeAnnotation": {
                                        "type": "TSNumberKeyword",
                                        "start": 885,
                                        "end": 891
                                      }
                                    }
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "start": 892,
                                  "end": 902,
                                  "typeAnnotation": {
                                    "type": "TSArrayType",
                                    "start": 894,
                                    "end": 902,
                                    "elementType": {
                                      "type": "TSNumberKeyword",
                                      "start": 894,
                                      "end": 900
                                    }
                                  }
                                }
                              },
                              {
                                "type": "TSCallSignatureDeclaration",
                                "start": 920,
                                "end": 942,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "start": 921,
                                    "end": 930,
                                    "decorators": [],
                                    "name": "x",
                                    "optional": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 922,
                                      "end": 930,
                                      "typeAnnotation": {
                                        "type": "TSStringKeyword",
                                        "start": 924,
                                        "end": 930
                                      }
                                    }
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "start": 931,
                                  "end": 941,
                                  "typeAnnotation": {
                                    "type": "TSArrayType",
                                    "start": 933,
                                    "end": 941,
                                    "elementType": {
                                      "type": "TSStringKeyword",
                                      "start": 933,
                                      "end": 939
                                    }
                                  }
                                }
                              }
                            ]
                          }
                        }
                      },
                      {
                        "type": "TSPropertySignature",
                        "start": 970,
                        "end": 1015,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 970,
                          "end": 973,
                          "decorators": [],
                          "name": "a15",
                          "optional": false
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 973,
                          "end": 1014,
                          "typeAnnotation": {
                            "type": "TSFunctionType",
                            "start": 975,
                            "end": 1014,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 976,
                                "end": 1003,
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 977,
                                  "end": 1003,
                                  "typeAnnotation": {
                                    "type": "TSTypeLiteral",
                                    "start": 979,
                                    "end": 1003,
                                    "members": [
                                      {
                                        "type": "TSPropertySignature",
                                        "start": 981,
                                        "end": 991,
                                        "computed": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 981,
                                          "end": 982,
                                          "decorators": [],
                                          "name": "a",
                                          "optional": false
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
                                      },
                                      {
                                        "type": "TSPropertySignature",
                                        "start": 992,
                                        "end": 1001,
                                        "computed": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 992,
                                          "end": 993,
                                          "decorators": [],
                                          "name": "b",
                                          "optional": false
                                        },
                                        "optional": false,
                                        "readonly": false,
                                        "static": false,
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "start": 993,
                                          "end": 1001,
                                          "typeAnnotation": {
                                            "type": "TSNumberKeyword",
                                            "start": 995,
                                            "end": 1001
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
                              "start": 1005,
                              "end": 1014,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 1008,
                                "end": 1014
                              }
                            }
                          }
                        }
                      },
                      {
                        "type": "TSPropertySignature",
                        "start": 1028,
                        "end": 1430,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 1028,
                          "end": 1031,
                          "decorators": [],
                          "name": "a16",
                          "optional": false
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1031,
                          "end": 1429,
                          "typeAnnotation": {
                            "type": "TSTypeLiteral",
                            "start": 1033,
                            "end": 1429,
                            "members": [
                              {
                                "type": "TSCallSignatureDeclaration",
                                "start": 1157,
                                "end": 1275,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "start": 1158,
                                    "end": 1263,
                                    "decorators": [],
                                    "name": "x",
                                    "optional": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 1159,
                                      "end": 1263,
                                      "typeAnnotation": {
                                        "type": "TSTypeLiteral",
                                        "start": 1161,
                                        "end": 1263,
                                        "members": [
                                          {
                                            "type": "TSCallSignatureDeclaration",
                                            "start": 1183,
                                            "end": 1203,
                                            "params": [
                                              {
                                                "type": "Identifier",
                                                "start": 1184,
                                                "end": 1193,
                                                "decorators": [],
                                                "name": "a",
                                                "optional": false,
                                                "typeAnnotation": {
                                                  "type": "TSTypeAnnotation",
                                                  "start": 1185,
                                                  "end": 1193,
                                                  "typeAnnotation": {
                                                    "type": "TSNumberKeyword",
                                                    "start": 1187,
                                                    "end": 1193
                                                  }
                                                }
                                              }
                                            ],
                                            "returnType": {
                                              "type": "TSTypeAnnotation",
                                              "start": 1194,
                                              "end": 1202,
                                              "typeAnnotation": {
                                                "type": "TSNumberKeyword",
                                                "start": 1196,
                                                "end": 1202
                                              }
                                            }
                                          },
                                          {
                                            "type": "TSCallSignatureDeclaration",
                                            "start": 1224,
                                            "end": 1245,
                                            "params": [
                                              {
                                                "type": "Identifier",
                                                "start": 1225,
                                                "end": 1235,
                                                "decorators": [],
                                                "name": "a",
                                                "optional": true,
                                                "typeAnnotation": {
                                                  "type": "TSTypeAnnotation",
                                                  "start": 1227,
                                                  "end": 1235,
                                                  "typeAnnotation": {
                                                    "type": "TSNumberKeyword",
                                                    "start": 1229,
                                                    "end": 1235
                                                  }
                                                }
                                              }
                                            ],
                                            "returnType": {
                                              "type": "TSTypeAnnotation",
                                              "start": 1236,
                                              "end": 1244,
                                              "typeAnnotation": {
                                                "type": "TSNumberKeyword",
                                                "start": 1238,
                                                "end": 1244
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
                                  "start": 1264,
                                  "end": 1274,
                                  "typeAnnotation": {
                                    "type": "TSArrayType",
                                    "start": 1266,
                                    "end": 1274,
                                    "elementType": {
                                      "type": "TSNumberKeyword",
                                      "start": 1266,
                                      "end": 1272
                                    }
                                  }
                                }
                              },
                              {
                                "type": "TSCallSignatureDeclaration",
                                "start": 1292,
                                "end": 1415,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "start": 1293,
                                    "end": 1402,
                                    "decorators": [],
                                    "name": "x",
                                    "optional": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 1294,
                                      "end": 1402,
                                      "typeAnnotation": {
                                        "type": "TSTypeLiteral",
                                        "start": 1296,
                                        "end": 1402,
                                        "members": [
                                          {
                                            "type": "TSCallSignatureDeclaration",
                                            "start": 1318,
                                            "end": 1340,
                                            "params": [
                                              {
                                                "type": "Identifier",
                                                "start": 1319,
                                                "end": 1329,
                                                "decorators": [],
                                                "name": "a",
                                                "optional": false,
                                                "typeAnnotation": {
                                                  "type": "TSTypeAnnotation",
                                                  "start": 1320,
                                                  "end": 1329,
                                                  "typeAnnotation": {
                                                    "type": "TSBooleanKeyword",
                                                    "start": 1322,
                                                    "end": 1329
                                                  }
                                                }
                                              }
                                            ],
                                            "returnType": {
                                              "type": "TSTypeAnnotation",
                                              "start": 1330,
                                              "end": 1339,
                                              "typeAnnotation": {
                                                "type": "TSBooleanKeyword",
                                                "start": 1332,
                                                "end": 1339
                                              }
                                            }
                                          },
                                          {
                                            "type": "TSCallSignatureDeclaration",
                                            "start": 1361,
                                            "end": 1384,
                                            "params": [
                                              {
                                                "type": "Identifier",
                                                "start": 1362,
                                                "end": 1373,
                                                "decorators": [],
                                                "name": "a",
                                                "optional": true,
                                                "typeAnnotation": {
                                                  "type": "TSTypeAnnotation",
                                                  "start": 1364,
                                                  "end": 1373,
                                                  "typeAnnotation": {
                                                    "type": "TSBooleanKeyword",
                                                    "start": 1366,
                                                    "end": 1373
                                                  }
                                                }
                                              }
                                            ],
                                            "returnType": {
                                              "type": "TSTypeAnnotation",
                                              "start": 1374,
                                              "end": 1383,
                                              "typeAnnotation": {
                                                "type": "TSBooleanKeyword",
                                                "start": 1376,
                                                "end": 1383
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
                                  "start": 1403,
                                  "end": 1414,
                                  "typeAnnotation": {
                                    "type": "TSArrayType",
                                    "start": 1405,
                                    "end": 1414,
                                    "elementType": {
                                      "type": "TSBooleanKeyword",
                                      "start": 1405,
                                      "end": 1412
                                    }
                                  }
                                }
                              }
                            ]
                          }
                        }
                      },
                      {
                        "type": "TSPropertySignature",
                        "start": 1443,
                        "end": 1757,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 1443,
                          "end": 1446,
                          "decorators": [],
                          "name": "a17",
                          "optional": false
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1446,
                          "end": 1756,
                          "typeAnnotation": {
                            "type": "TSTypeLiteral",
                            "start": 1448,
                            "end": 1756,
                            "members": [
                              {
                                "type": "TSCallSignatureDeclaration",
                                "start": 1466,
                                "end": 1595,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "start": 1467,
                                    "end": 1586,
                                    "decorators": [],
                                    "name": "x",
                                    "optional": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 1468,
                                      "end": 1586,
                                      "typeAnnotation": {
                                        "type": "TSTypeLiteral",
                                        "start": 1470,
                                        "end": 1586,
                                        "members": [
                                          {
                                            "type": "TSCallSignatureDeclaration",
                                            "start": 1492,
                                            "end": 1521,
                                            "params": [
                                              {
                                                "type": "Identifier",
                                                "start": 1512,
                                                "end": 1516,
                                                "decorators": [],
                                                "name": "a",
                                                "optional": false,
                                                "typeAnnotation": {
                                                  "type": "TSTypeAnnotation",
                                                  "start": 1513,
                                                  "end": 1516,
                                                  "typeAnnotation": {
                                                    "type": "TSTypeReference",
                                                    "start": 1515,
                                                    "end": 1516,
                                                    "typeName": {
                                                      "type": "Identifier",
                                                      "start": 1515,
                                                      "end": 1516,
                                                      "decorators": [],
                                                      "name": "T",
                                                      "optional": false
                                                    }
                                                  }
                                                }
                                              }
                                            ],
                                            "returnType": {
                                              "type": "TSTypeAnnotation",
                                              "start": 1517,
                                              "end": 1520,
                                              "typeAnnotation": {
                                                "type": "TSTypeReference",
                                                "start": 1519,
                                                "end": 1520,
                                                "typeName": {
                                                  "type": "Identifier",
                                                  "start": 1519,
                                                  "end": 1520,
                                                  "decorators": [],
                                                  "name": "T",
                                                  "optional": false
                                                }
                                              }
                                            },
                                            "typeParameters": {
                                              "type": "TSTypeParameterDeclaration",
                                              "start": 1492,
                                              "end": 1511,
                                              "params": [
                                                {
                                                  "type": "TSTypeParameter",
                                                  "start": 1493,
                                                  "end": 1510,
                                                  "const": false,
                                                  "constraint": {
                                                    "type": "TSTypeReference",
                                                    "start": 1503,
                                                    "end": 1510,
                                                    "typeName": {
                                                      "type": "Identifier",
                                                      "start": 1503,
                                                      "end": 1510,
                                                      "decorators": [],
                                                      "name": "Derived",
                                                      "optional": false
                                                    }
                                                  },
                                                  "in": false,
                                                  "name": {
                                                    "type": "Identifier",
                                                    "start": 1493,
                                                    "end": 1494,
                                                    "decorators": [],
                                                    "name": "T",
                                                    "optional": false
                                                  },
                                                  "out": false
                                                }
                                              ]
                                            }
                                          },
                                          {
                                            "type": "TSCallSignatureDeclaration",
                                            "start": 1542,
                                            "end": 1568,
                                            "params": [
                                              {
                                                "type": "Identifier",
                                                "start": 1559,
                                                "end": 1563,
                                                "decorators": [],
                                                "name": "a",
                                                "optional": false,
                                                "typeAnnotation": {
                                                  "type": "TSTypeAnnotation",
                                                  "start": 1560,
                                                  "end": 1563,
                                                  "typeAnnotation": {
                                                    "type": "TSTypeReference",
                                                    "start": 1562,
                                                    "end": 1563,
                                                    "typeName": {
                                                      "type": "Identifier",
                                                      "start": 1562,
                                                      "end": 1563,
                                                      "decorators": [],
                                                      "name": "T",
                                                      "optional": false
                                                    }
                                                  }
                                                }
                                              }
                                            ],
                                            "returnType": {
                                              "type": "TSTypeAnnotation",
                                              "start": 1564,
                                              "end": 1567,
                                              "typeAnnotation": {
                                                "type": "TSTypeReference",
                                                "start": 1566,
                                                "end": 1567,
                                                "typeName": {
                                                  "type": "Identifier",
                                                  "start": 1566,
                                                  "end": 1567,
                                                  "decorators": [],
                                                  "name": "T",
                                                  "optional": false
                                                }
                                              }
                                            },
                                            "typeParameters": {
                                              "type": "TSTypeParameterDeclaration",
                                              "start": 1542,
                                              "end": 1558,
                                              "params": [
                                                {
                                                  "type": "TSTypeParameter",
                                                  "start": 1543,
                                                  "end": 1557,
                                                  "const": false,
                                                  "constraint": {
                                                    "type": "TSTypeReference",
                                                    "start": 1553,
                                                    "end": 1557,
                                                    "typeName": {
                                                      "type": "Identifier",
                                                      "start": 1553,
                                                      "end": 1557,
                                                      "decorators": [],
                                                      "name": "Base",
                                                      "optional": false
                                                    }
                                                  },
                                                  "in": false,
                                                  "name": {
                                                    "type": "Identifier",
                                                    "start": 1543,
                                                    "end": 1544,
                                                    "decorators": [],
                                                    "name": "T",
                                                    "optional": false
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
                                  "start": 1587,
                                  "end": 1594,
                                  "typeAnnotation": {
                                    "type": "TSArrayType",
                                    "start": 1589,
                                    "end": 1594,
                                    "elementType": {
                                      "type": "TSAnyKeyword",
                                      "start": 1589,
                                      "end": 1592
                                    }
                                  }
                                }
                              },
                              {
                                "type": "TSCallSignatureDeclaration",
                                "start": 1612,
                                "end": 1742,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "start": 1613,
                                    "end": 1733,
                                    "decorators": [],
                                    "name": "x",
                                    "optional": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 1614,
                                      "end": 1733,
                                      "typeAnnotation": {
                                        "type": "TSTypeLiteral",
                                        "start": 1616,
                                        "end": 1733,
                                        "members": [
                                          {
                                            "type": "TSCallSignatureDeclaration",
                                            "start": 1638,
                                            "end": 1668,
                                            "params": [
                                              {
                                                "type": "Identifier",
                                                "start": 1659,
                                                "end": 1663,
                                                "decorators": [],
                                                "name": "a",
                                                "optional": false,
                                                "typeAnnotation": {
                                                  "type": "TSTypeAnnotation",
                                                  "start": 1660,
                                                  "end": 1663,
                                                  "typeAnnotation": {
                                                    "type": "TSTypeReference",
                                                    "start": 1662,
                                                    "end": 1663,
                                                    "typeName": {
                                                      "type": "Identifier",
                                                      "start": 1662,
                                                      "end": 1663,
                                                      "decorators": [],
                                                      "name": "T",
                                                      "optional": false
                                                    }
                                                  }
                                                }
                                              }
                                            ],
                                            "returnType": {
                                              "type": "TSTypeAnnotation",
                                              "start": 1664,
                                              "end": 1667,
                                              "typeAnnotation": {
                                                "type": "TSTypeReference",
                                                "start": 1666,
                                                "end": 1667,
                                                "typeName": {
                                                  "type": "Identifier",
                                                  "start": 1666,
                                                  "end": 1667,
                                                  "decorators": [],
                                                  "name": "T",
                                                  "optional": false
                                                }
                                              }
                                            },
                                            "typeParameters": {
                                              "type": "TSTypeParameterDeclaration",
                                              "start": 1638,
                                              "end": 1658,
                                              "params": [
                                                {
                                                  "type": "TSTypeParameter",
                                                  "start": 1639,
                                                  "end": 1657,
                                                  "const": false,
                                                  "constraint": {
                                                    "type": "TSTypeReference",
                                                    "start": 1649,
                                                    "end": 1657,
                                                    "typeName": {
                                                      "type": "Identifier",
                                                      "start": 1649,
                                                      "end": 1657,
                                                      "decorators": [],
                                                      "name": "Derived2",
                                                      "optional": false
                                                    }
                                                  },
                                                  "in": false,
                                                  "name": {
                                                    "type": "Identifier",
                                                    "start": 1639,
                                                    "end": 1640,
                                                    "decorators": [],
                                                    "name": "T",
                                                    "optional": false
                                                  },
                                                  "out": false
                                                }
                                              ]
                                            }
                                          },
                                          {
                                            "type": "TSCallSignatureDeclaration",
                                            "start": 1689,
                                            "end": 1715,
                                            "params": [
                                              {
                                                "type": "Identifier",
                                                "start": 1706,
                                                "end": 1710,
                                                "decorators": [],
                                                "name": "a",
                                                "optional": false,
                                                "typeAnnotation": {
                                                  "type": "TSTypeAnnotation",
                                                  "start": 1707,
                                                  "end": 1710,
                                                  "typeAnnotation": {
                                                    "type": "TSTypeReference",
                                                    "start": 1709,
                                                    "end": 1710,
                                                    "typeName": {
                                                      "type": "Identifier",
                                                      "start": 1709,
                                                      "end": 1710,
                                                      "decorators": [],
                                                      "name": "T",
                                                      "optional": false
                                                    }
                                                  }
                                                }
                                              }
                                            ],
                                            "returnType": {
                                              "type": "TSTypeAnnotation",
                                              "start": 1711,
                                              "end": 1714,
                                              "typeAnnotation": {
                                                "type": "TSTypeReference",
                                                "start": 1713,
                                                "end": 1714,
                                                "typeName": {
                                                  "type": "Identifier",
                                                  "start": 1713,
                                                  "end": 1714,
                                                  "decorators": [],
                                                  "name": "T",
                                                  "optional": false
                                                }
                                              }
                                            },
                                            "typeParameters": {
                                              "type": "TSTypeParameterDeclaration",
                                              "start": 1689,
                                              "end": 1705,
                                              "params": [
                                                {
                                                  "type": "TSTypeParameter",
                                                  "start": 1690,
                                                  "end": 1704,
                                                  "const": false,
                                                  "constraint": {
                                                    "type": "TSTypeReference",
                                                    "start": 1700,
                                                    "end": 1704,
                                                    "typeName": {
                                                      "type": "Identifier",
                                                      "start": 1700,
                                                      "end": 1704,
                                                      "decorators": [],
                                                      "name": "Base",
                                                      "optional": false
                                                    }
                                                  },
                                                  "in": false,
                                                  "name": {
                                                    "type": "Identifier",
                                                    "start": 1690,
                                                    "end": 1691,
                                                    "decorators": [],
                                                    "name": "T",
                                                    "optional": false
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
                                  "start": 1734,
                                  "end": 1741,
                                  "typeAnnotation": {
                                    "type": "TSArrayType",
                                    "start": 1736,
                                    "end": 1741,
                                    "elementType": {
                                      "type": "TSAnyKeyword",
                                      "start": 1736,
                                      "end": 1739
                                    }
                                  }
                                }
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
                    "start": 440,
                    "end": 441,
                    "decorators": [],
                    "name": "A",
                    "optional": false
                  }
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "start": 1777,
                  "end": 1958,
                  "body": {
                    "type": "TSInterfaceBody",
                    "start": 1799,
                    "end": 1958,
                    "body": [
                      {
                        "type": "TSPropertySignature",
                        "start": 1813,
                        "end": 1837,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 1813,
                          "end": 1815,
                          "decorators": [],
                          "name": "a2",
                          "optional": false
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1815,
                          "end": 1836,
                          "typeAnnotation": {
                            "type": "TSFunctionType",
                            "start": 1817,
                            "end": 1836,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 1824,
                                "end": 1828,
                                "decorators": [],
                                "name": "x",
                                "optional": false,
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
                                      "decorators": [],
                                      "name": "T",
                                      "optional": false
                                    }
                                  }
                                }
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "start": 1830,
                              "end": 1836,
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "start": 1833,
                                "end": 1836,
                                "elementType": {
                                  "type": "TSTypeReference",
                                  "start": 1833,
                                  "end": 1834,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 1833,
                                    "end": 1834,
                                    "decorators": [],
                                    "name": "U",
                                    "optional": false
                                  }
                                }
                              }
                            },
                            "typeParameters": {
                              "type": "TSTypeParameterDeclaration",
                              "start": 1817,
                              "end": 1823,
                              "params": [
                                {
                                  "type": "TSTypeParameter",
                                  "start": 1818,
                                  "end": 1819,
                                  "const": false,
                                  "in": false,
                                  "name": {
                                    "type": "Identifier",
                                    "start": 1818,
                                    "end": 1819,
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false
                                  },
                                  "out": false
                                },
                                {
                                  "type": "TSTypeParameter",
                                  "start": 1821,
                                  "end": 1822,
                                  "const": false,
                                  "in": false,
                                  "name": {
                                    "type": "Identifier",
                                    "start": 1821,
                                    "end": 1822,
                                    "decorators": [],
                                    "name": "U",
                                    "optional": false
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
                      "start": 1797,
                      "end": 1798,
                      "expression": {
                        "type": "Identifier",
                        "start": 1797,
                        "end": 1798,
                        "decorators": [],
                        "name": "A",
                        "optional": false
                      }
                    }
                  ],
                  "id": {
                    "type": "Identifier",
                    "start": 1787,
                    "end": 1788,
                    "decorators": [],
                    "name": "I",
                    "optional": false
                  }
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "start": 1968,
                  "end": 2114,
                  "body": {
                    "type": "TSInterfaceBody",
                    "start": 1997,
                    "end": 2114,
                    "body": [
                      {
                        "type": "TSPropertySignature",
                        "start": 2011,
                        "end": 2029,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 2011,
                          "end": 2013,
                          "decorators": [],
                          "name": "a2",
                          "optional": false
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2013,
                          "end": 2028,
                          "typeAnnotation": {
                            "type": "TSFunctionType",
                            "start": 2015,
                            "end": 2028,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 2016,
                                "end": 2020,
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 2017,
                                  "end": 2020,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 2019,
                                    "end": 2020,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 2019,
                                      "end": 2020,
                                      "decorators": [],
                                      "name": "T",
                                      "optional": false
                                    }
                                  }
                                }
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "start": 2022,
                              "end": 2028,
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "start": 2025,
                                "end": 2028,
                                "elementType": {
                                  "type": "TSTypeReference",
                                  "start": 2025,
                                  "end": 2026,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 2025,
                                    "end": 2026,
                                    "decorators": [],
                                    "name": "U",
                                    "optional": false
                                  }
                                }
                              }
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
                      "start": 1995,
                      "end": 1996,
                      "expression": {
                        "type": "Identifier",
                        "start": 1995,
                        "end": 1996,
                        "decorators": [],
                        "name": "A",
                        "optional": false
                      }
                    }
                  ],
                  "id": {
                    "type": "Identifier",
                    "start": 1978,
                    "end": 1980,
                    "decorators": [],
                    "name": "I2",
                    "optional": false
                  },
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "start": 1980,
                    "end": 1986,
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "start": 1981,
                        "end": 1982,
                        "const": false,
                        "in": false,
                        "name": {
                          "type": "Identifier",
                          "start": 1981,
                          "end": 1982,
                          "decorators": [],
                          "name": "T",
                          "optional": false
                        },
                        "out": false
                      },
                      {
                        "type": "TSTypeParameter",
                        "start": 1984,
                        "end": 1985,
                        "const": false,
                        "in": false,
                        "name": {
                          "type": "Identifier",
                          "start": 1984,
                          "end": 1985,
                          "decorators": [],
                          "name": "U",
                          "optional": false
                        },
                        "out": false
                      }
                    ]
                  }
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "start": 2124,
                  "end": 2333,
                  "body": {
                    "type": "TSInterfaceBody",
                    "start": 2147,
                    "end": 2333,
                    "body": [
                      {
                        "type": "TSPropertySignature",
                        "start": 2230,
                        "end": 2323,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 2230,
                          "end": 2232,
                          "decorators": [],
                          "name": "a7",
                          "optional": false
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2232,
                          "end": 2322,
                          "typeAnnotation": {
                            "type": "TSFunctionType",
                            "start": 2234,
                            "end": 2322,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 2290,
                                "end": 2306,
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 2291,
                                  "end": 2306,
                                  "typeAnnotation": {
                                    "type": "TSFunctionType",
                                    "start": 2293,
                                    "end": 2306,
                                    "params": [
                                      {
                                        "type": "Identifier",
                                        "start": 2294,
                                        "end": 2300,
                                        "decorators": [],
                                        "name": "arg",
                                        "optional": false,
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "start": 2297,
                                          "end": 2300,
                                          "typeAnnotation": {
                                            "type": "TSTypeReference",
                                            "start": 2299,
                                            "end": 2300,
                                            "typeName": {
                                              "type": "Identifier",
                                              "start": 2299,
                                              "end": 2300,
                                              "decorators": [],
                                              "name": "T",
                                              "optional": false
                                            }
                                          }
                                        }
                                      }
                                    ],
                                    "returnType": {
                                      "type": "TSTypeAnnotation",
                                      "start": 2302,
                                      "end": 2306,
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "start": 2305,
                                        "end": 2306,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 2305,
                                          "end": 2306,
                                          "decorators": [],
                                          "name": "U",
                                          "optional": false
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "start": 2308,
                              "end": 2322,
                              "typeAnnotation": {
                                "type": "TSFunctionType",
                                "start": 2311,
                                "end": 2322,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "start": 2312,
                                    "end": 2316,
                                    "decorators": [],
                                    "name": "r",
                                    "optional": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 2313,
                                      "end": 2316,
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "start": 2315,
                                        "end": 2316,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 2315,
                                          "end": 2316,
                                          "decorators": [],
                                          "name": "T",
                                          "optional": false
                                        }
                                      }
                                    }
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "start": 2318,
                                  "end": 2322,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 2321,
                                    "end": 2322,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 2321,
                                      "end": 2322,
                                      "decorators": [],
                                      "name": "V",
                                      "optional": false
                                    }
                                  }
                                }
                              }
                            },
                            "typeParameters": {
                              "type": "TSTypeParameterDeclaration",
                              "start": 2234,
                              "end": 2289,
                              "params": [
                                {
                                  "type": "TSTypeParameter",
                                  "start": 2235,
                                  "end": 2249,
                                  "const": false,
                                  "constraint": {
                                    "type": "TSTypeReference",
                                    "start": 2245,
                                    "end": 2249,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 2245,
                                      "end": 2249,
                                      "decorators": [],
                                      "name": "Base",
                                      "optional": false
                                    }
                                  },
                                  "in": false,
                                  "name": {
                                    "type": "Identifier",
                                    "start": 2235,
                                    "end": 2236,
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false
                                  },
                                  "out": false
                                },
                                {
                                  "type": "TSTypeParameter",
                                  "start": 2251,
                                  "end": 2268,
                                  "const": false,
                                  "constraint": {
                                    "type": "TSTypeReference",
                                    "start": 2261,
                                    "end": 2268,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 2261,
                                      "end": 2268,
                                      "decorators": [],
                                      "name": "Derived",
                                      "optional": false
                                    }
                                  },
                                  "in": false,
                                  "name": {
                                    "type": "Identifier",
                                    "start": 2251,
                                    "end": 2252,
                                    "decorators": [],
                                    "name": "U",
                                    "optional": false
                                  },
                                  "out": false
                                },
                                {
                                  "type": "TSTypeParameter",
                                  "start": 2270,
                                  "end": 2288,
                                  "const": false,
                                  "constraint": {
                                    "type": "TSTypeReference",
                                    "start": 2280,
                                    "end": 2288,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 2280,
                                      "end": 2288,
                                      "decorators": [],
                                      "name": "Derived2",
                                      "optional": false
                                    }
                                  },
                                  "in": false,
                                  "name": {
                                    "type": "Identifier",
                                    "start": 2270,
                                    "end": 2271,
                                    "decorators": [],
                                    "name": "V",
                                    "optional": false
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
                      "start": 2145,
                      "end": 2146,
                      "expression": {
                        "type": "Identifier",
                        "start": 2145,
                        "end": 2146,
                        "decorators": [],
                        "name": "A",
                        "optional": false
                      }
                    }
                  ],
                  "id": {
                    "type": "Identifier",
                    "start": 2134,
                    "end": 2136,
                    "decorators": [],
                    "name": "I3",
                    "optional": false
                  }
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "start": 2343,
                  "end": 2521,
                  "body": {
                    "type": "TSInterfaceBody",
                    "start": 2366,
                    "end": 2521,
                    "body": [
                      {
                        "type": "TSPropertySignature",
                        "start": 2380,
                        "end": 2487,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 2380,
                          "end": 2382,
                          "decorators": [],
                          "name": "a8",
                          "optional": false
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2382,
                          "end": 2486,
                          "typeAnnotation": {
                            "type": "TSFunctionType",
                            "start": 2384,
                            "end": 2486,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 2420,
                                "end": 2436,
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 2421,
                                  "end": 2436,
                                  "typeAnnotation": {
                                    "type": "TSFunctionType",
                                    "start": 2423,
                                    "end": 2436,
                                    "params": [
                                      {
                                        "type": "Identifier",
                                        "start": 2424,
                                        "end": 2430,
                                        "decorators": [],
                                        "name": "arg",
                                        "optional": false,
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "start": 2427,
                                          "end": 2430,
                                          "typeAnnotation": {
                                            "type": "TSTypeReference",
                                            "start": 2429,
                                            "end": 2430,
                                            "typeName": {
                                              "type": "Identifier",
                                              "start": 2429,
                                              "end": 2430,
                                              "decorators": [],
                                              "name": "T",
                                              "optional": false
                                            }
                                          }
                                        }
                                      }
                                    ],
                                    "returnType": {
                                      "type": "TSTypeAnnotation",
                                      "start": 2432,
                                      "end": 2436,
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "start": 2435,
                                        "end": 2436,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 2435,
                                          "end": 2436,
                                          "decorators": [],
                                          "name": "U",
                                          "optional": false
                                        }
                                      }
                                    }
                                  }
                                }
                              },
                              {
                                "type": "Identifier",
                                "start": 2438,
                                "end": 2470,
                                "decorators": [],
                                "name": "y",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 2439,
                                  "end": 2470,
                                  "typeAnnotation": {
                                    "type": "TSFunctionType",
                                    "start": 2441,
                                    "end": 2470,
                                    "params": [
                                      {
                                        "type": "Identifier",
                                        "start": 2442,
                                        "end": 2464,
                                        "decorators": [],
                                        "name": "arg2",
                                        "optional": false,
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "start": 2446,
                                          "end": 2464,
                                          "typeAnnotation": {
                                            "type": "TSTypeLiteral",
                                            "start": 2448,
                                            "end": 2464,
                                            "members": [
                                              {
                                                "type": "TSPropertySignature",
                                                "start": 2450,
                                                "end": 2462,
                                                "computed": false,
                                                "key": {
                                                  "type": "Identifier",
                                                  "start": 2450,
                                                  "end": 2453,
                                                  "decorators": [],
                                                  "name": "foo",
                                                  "optional": false
                                                },
                                                "optional": false,
                                                "readonly": false,
                                                "static": false,
                                                "typeAnnotation": {
                                                  "type": "TSTypeAnnotation",
                                                  "start": 2453,
                                                  "end": 2461,
                                                  "typeAnnotation": {
                                                    "type": "TSNumberKeyword",
                                                    "start": 2455,
                                                    "end": 2461
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
                                      "start": 2466,
                                      "end": 2470,
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "start": 2469,
                                        "end": 2470,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 2469,
                                          "end": 2470,
                                          "decorators": [],
                                          "name": "U",
                                          "optional": false
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "start": 2472,
                              "end": 2486,
                              "typeAnnotation": {
                                "type": "TSFunctionType",
                                "start": 2475,
                                "end": 2486,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "start": 2476,
                                    "end": 2480,
                                    "decorators": [],
                                    "name": "r",
                                    "optional": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 2477,
                                      "end": 2480,
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "start": 2479,
                                        "end": 2480,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 2479,
                                          "end": 2480,
                                          "decorators": [],
                                          "name": "T",
                                          "optional": false
                                        }
                                      }
                                    }
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "start": 2482,
                                  "end": 2486,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 2485,
                                    "end": 2486,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 2485,
                                      "end": 2486,
                                      "decorators": [],
                                      "name": "U",
                                      "optional": false
                                    }
                                  }
                                }
                              }
                            },
                            "typeParameters": {
                              "type": "TSTypeParameterDeclaration",
                              "start": 2384,
                              "end": 2419,
                              "params": [
                                {
                                  "type": "TSTypeParameter",
                                  "start": 2385,
                                  "end": 2399,
                                  "const": false,
                                  "constraint": {
                                    "type": "TSTypeReference",
                                    "start": 2395,
                                    "end": 2399,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 2395,
                                      "end": 2399,
                                      "decorators": [],
                                      "name": "Base",
                                      "optional": false
                                    }
                                  },
                                  "in": false,
                                  "name": {
                                    "type": "Identifier",
                                    "start": 2385,
                                    "end": 2386,
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false
                                  },
                                  "out": false
                                },
                                {
                                  "type": "TSTypeParameter",
                                  "start": 2401,
                                  "end": 2418,
                                  "const": false,
                                  "constraint": {
                                    "type": "TSTypeReference",
                                    "start": 2411,
                                    "end": 2418,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 2411,
                                      "end": 2418,
                                      "decorators": [],
                                      "name": "Derived",
                                      "optional": false
                                    }
                                  },
                                  "in": false,
                                  "name": {
                                    "type": "Identifier",
                                    "start": 2401,
                                    "end": 2402,
                                    "decorators": [],
                                    "name": "U",
                                    "optional": false
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
                      "start": 2364,
                      "end": 2365,
                      "expression": {
                        "type": "Identifier",
                        "start": 2364,
                        "end": 2365,
                        "decorators": [],
                        "name": "A",
                        "optional": false
                      }
                    }
                  ],
                  "id": {
                    "type": "Identifier",
                    "start": 2353,
                    "end": 2355,
                    "decorators": [],
                    "name": "I4",
                    "optional": false
                  }
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "start": 2531,
                  "end": 2703,
                  "body": {
                    "type": "TSInterfaceBody",
                    "start": 2555,
                    "end": 2703,
                    "body": [
                      {
                        "type": "TSPropertySignature",
                        "start": 2569,
                        "end": 2610,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 2569,
                          "end": 2572,
                          "decorators": [],
                          "name": "a10",
                          "optional": false
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2572,
                          "end": 2609,
                          "typeAnnotation": {
                            "type": "TSFunctionType",
                            "start": 2574,
                            "end": 2609,
                            "params": [
                              {
                                "type": "RestElement",
                                "start": 2594,
                                "end": 2603,
                                "argument": {
                                  "type": "Identifier",
                                  "start": 2597,
                                  "end": 2598,
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false
                                },
                                "decorators": [],
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 2598,
                                  "end": 2603,
                                  "typeAnnotation": {
                                    "type": "TSArrayType",
                                    "start": 2600,
                                    "end": 2603,
                                    "elementType": {
                                      "type": "TSTypeReference",
                                      "start": 2600,
                                      "end": 2601,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 2600,
                                        "end": 2601,
                                        "decorators": [],
                                        "name": "T",
                                        "optional": false
                                      }
                                    }
                                  }
                                }
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "start": 2605,
                              "end": 2609,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 2608,
                                "end": 2609,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 2608,
                                  "end": 2609,
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false
                                }
                              }
                            },
                            "typeParameters": {
                              "type": "TSTypeParameterDeclaration",
                              "start": 2574,
                              "end": 2593,
                              "params": [
                                {
                                  "type": "TSTypeParameter",
                                  "start": 2575,
                                  "end": 2592,
                                  "const": false,
                                  "constraint": {
                                    "type": "TSTypeReference",
                                    "start": 2585,
                                    "end": 2592,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 2585,
                                      "end": 2592,
                                      "decorators": [],
                                      "name": "Derived",
                                      "optional": false
                                    }
                                  },
                                  "in": false,
                                  "name": {
                                    "type": "Identifier",
                                    "start": 2575,
                                    "end": 2576,
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false
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
                      "start": 2553,
                      "end": 2554,
                      "expression": {
                        "type": "Identifier",
                        "start": 2553,
                        "end": 2554,
                        "decorators": [],
                        "name": "A",
                        "optional": false
                      }
                    }
                  ],
                  "id": {
                    "type": "Identifier",
                    "start": 2541,
                    "end": 2544,
                    "decorators": [],
                    "name": "I4B",
                    "optional": false
                  }
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "start": 2713,
                  "end": 2911,
                  "body": {
                    "type": "TSInterfaceBody",
                    "start": 2737,
                    "end": 2911,
                    "body": [
                      {
                        "type": "TSPropertySignature",
                        "start": 2751,
                        "end": 2793,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 2751,
                          "end": 2754,
                          "decorators": [],
                          "name": "a11",
                          "optional": false
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2754,
                          "end": 2792,
                          "typeAnnotation": {
                            "type": "TSFunctionType",
                            "start": 2756,
                            "end": 2792,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 2776,
                                "end": 2780,
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 2777,
                                  "end": 2780,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 2779,
                                    "end": 2780,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 2779,
                                      "end": 2780,
                                      "decorators": [],
                                      "name": "T",
                                      "optional": false
                                    }
                                  }
                                }
                              },
                              {
                                "type": "Identifier",
                                "start": 2782,
                                "end": 2786,
                                "decorators": [],
                                "name": "y",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 2783,
                                  "end": 2786,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 2785,
                                    "end": 2786,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 2785,
                                      "end": 2786,
                                      "decorators": [],
                                      "name": "T",
                                      "optional": false
                                    }
                                  }
                                }
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "start": 2788,
                              "end": 2792,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 2791,
                                "end": 2792,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 2791,
                                  "end": 2792,
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false
                                }
                              }
                            },
                            "typeParameters": {
                              "type": "TSTypeParameterDeclaration",
                              "start": 2756,
                              "end": 2775,
                              "params": [
                                {
                                  "type": "TSTypeParameter",
                                  "start": 2757,
                                  "end": 2774,
                                  "const": false,
                                  "constraint": {
                                    "type": "TSTypeReference",
                                    "start": 2767,
                                    "end": 2774,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 2767,
                                      "end": 2774,
                                      "decorators": [],
                                      "name": "Derived",
                                      "optional": false
                                    }
                                  },
                                  "in": false,
                                  "name": {
                                    "type": "Identifier",
                                    "start": 2757,
                                    "end": 2758,
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false
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
                      "start": 2735,
                      "end": 2736,
                      "expression": {
                        "type": "Identifier",
                        "start": 2735,
                        "end": 2736,
                        "decorators": [],
                        "name": "A",
                        "optional": false
                      }
                    }
                  ],
                  "id": {
                    "type": "Identifier",
                    "start": 2723,
                    "end": 2726,
                    "decorators": [],
                    "name": "I4C",
                    "optional": false
                  }
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "start": 2921,
                  "end": 3098,
                  "body": {
                    "type": "TSInterfaceBody",
                    "start": 2945,
                    "end": 3098,
                    "body": [
                      {
                        "type": "TSPropertySignature",
                        "start": 2959,
                        "end": 3029,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 2959,
                          "end": 2962,
                          "decorators": [],
                          "name": "a12",
                          "optional": false
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2962,
                          "end": 3028,
                          "typeAnnotation": {
                            "type": "TSFunctionType",
                            "start": 2964,
                            "end": 3028,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 2992,
                                "end": 3006,
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 2993,
                                  "end": 3006,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 2995,
                                    "end": 3006,
                                    "typeArguments": {
                                      "type": "TSTypeParameterInstantiation",
                                      "start": 3000,
                                      "end": 3006,
                                      "params": [
                                        {
                                          "type": "TSTypeReference",
                                          "start": 3001,
                                          "end": 3005,
                                          "typeName": {
                                            "type": "Identifier",
                                            "start": 3001,
                                            "end": 3005,
                                            "decorators": [],
                                            "name": "Base",
                                            "optional": false
                                          }
                                        }
                                      ]
                                    },
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 2995,
                                      "end": 3000,
                                      "decorators": [],
                                      "name": "Array",
                                      "optional": false
                                    }
                                  }
                                }
                              },
                              {
                                "type": "Identifier",
                                "start": 3008,
                                "end": 3022,
                                "decorators": [],
                                "name": "y",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 3009,
                                  "end": 3022,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 3011,
                                    "end": 3022,
                                    "typeArguments": {
                                      "type": "TSTypeParameterInstantiation",
                                      "start": 3016,
                                      "end": 3022,
                                      "params": [
                                        {
                                          "type": "TSTypeReference",
                                          "start": 3017,
                                          "end": 3021,
                                          "typeName": {
                                            "type": "Identifier",
                                            "start": 3017,
                                            "end": 3021,
                                            "decorators": [],
                                            "name": "Base",
                                            "optional": false
                                          }
                                        }
                                      ]
                                    },
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 3011,
                                      "end": 3016,
                                      "decorators": [],
                                      "name": "Array",
                                      "optional": false
                                    }
                                  }
                                }
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "start": 3024,
                              "end": 3028,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 3027,
                                "end": 3028,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 3027,
                                  "end": 3028,
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false
                                }
                              }
                            },
                            "typeParameters": {
                              "type": "TSTypeParameterDeclaration",
                              "start": 2964,
                              "end": 2991,
                              "params": [
                                {
                                  "type": "TSTypeParameter",
                                  "start": 2965,
                                  "end": 2990,
                                  "const": false,
                                  "constraint": {
                                    "type": "TSTypeReference",
                                    "start": 2975,
                                    "end": 2990,
                                    "typeArguments": {
                                      "type": "TSTypeParameterInstantiation",
                                      "start": 2980,
                                      "end": 2990,
                                      "params": [
                                        {
                                          "type": "TSTypeReference",
                                          "start": 2981,
                                          "end": 2989,
                                          "typeName": {
                                            "type": "Identifier",
                                            "start": 2981,
                                            "end": 2989,
                                            "decorators": [],
                                            "name": "Derived2",
                                            "optional": false
                                          }
                                        }
                                      ]
                                    },
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 2975,
                                      "end": 2980,
                                      "decorators": [],
                                      "name": "Array",
                                      "optional": false
                                    }
                                  },
                                  "in": false,
                                  "name": {
                                    "type": "Identifier",
                                    "start": 2965,
                                    "end": 2966,
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false
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
                      "start": 2943,
                      "end": 2944,
                      "expression": {
                        "type": "Identifier",
                        "start": 2943,
                        "end": 2944,
                        "decorators": [],
                        "name": "A",
                        "optional": false
                      }
                    }
                  ],
                  "id": {
                    "type": "Identifier",
                    "start": 2931,
                    "end": 2934,
                    "decorators": [],
                    "name": "I4E",
                    "optional": false
                  }
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "start": 3108,
                  "end": 3244,
                  "body": {
                    "type": "TSInterfaceBody",
                    "start": 3131,
                    "end": 3244,
                    "body": [
                      {
                        "type": "TSPropertySignature",
                        "start": 3145,
                        "end": 3178,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 3145,
                          "end": 3148,
                          "decorators": [],
                          "name": "a15",
                          "optional": false
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 3148,
                          "end": 3177,
                          "typeAnnotation": {
                            "type": "TSFunctionType",
                            "start": 3150,
                            "end": 3177,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 3154,
                                "end": 3171,
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 3155,
                                  "end": 3171,
                                  "typeAnnotation": {
                                    "type": "TSTypeLiteral",
                                    "start": 3157,
                                    "end": 3171,
                                    "members": [
                                      {
                                        "type": "TSPropertySignature",
                                        "start": 3159,
                                        "end": 3164,
                                        "computed": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 3159,
                                          "end": 3160,
                                          "decorators": [],
                                          "name": "a",
                                          "optional": false
                                        },
                                        "optional": false,
                                        "readonly": false,
                                        "static": false,
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "start": 3160,
                                          "end": 3163,
                                          "typeAnnotation": {
                                            "type": "TSTypeReference",
                                            "start": 3162,
                                            "end": 3163,
                                            "typeName": {
                                              "type": "Identifier",
                                              "start": 3162,
                                              "end": 3163,
                                              "decorators": [],
                                              "name": "T",
                                              "optional": false
                                            }
                                          }
                                        }
                                      },
                                      {
                                        "type": "TSPropertySignature",
                                        "start": 3165,
                                        "end": 3169,
                                        "computed": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 3165,
                                          "end": 3166,
                                          "decorators": [],
                                          "name": "b",
                                          "optional": false
                                        },
                                        "optional": false,
                                        "readonly": false,
                                        "static": false,
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "start": 3166,
                                          "end": 3169,
                                          "typeAnnotation": {
                                            "type": "TSTypeReference",
                                            "start": 3168,
                                            "end": 3169,
                                            "typeName": {
                                              "type": "Identifier",
                                              "start": 3168,
                                              "end": 3169,
                                              "decorators": [],
                                              "name": "T",
                                              "optional": false
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
                              "start": 3173,
                              "end": 3177,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 3176,
                                "end": 3177,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 3176,
                                  "end": 3177,
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false
                                }
                              }
                            },
                            "typeParameters": {
                              "type": "TSTypeParameterDeclaration",
                              "start": 3150,
                              "end": 3153,
                              "params": [
                                {
                                  "type": "TSTypeParameter",
                                  "start": 3151,
                                  "end": 3152,
                                  "const": false,
                                  "in": false,
                                  "name": {
                                    "type": "Identifier",
                                    "start": 3151,
                                    "end": 3152,
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false
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
                      "start": 3129,
                      "end": 3130,
                      "expression": {
                        "type": "Identifier",
                        "start": 3129,
                        "end": 3130,
                        "decorators": [],
                        "name": "A",
                        "optional": false
                      }
                    }
                  ],
                  "id": {
                    "type": "Identifier",
                    "start": 3118,
                    "end": 3120,
                    "decorators": [],
                    "name": "I6",
                    "optional": false
                  }
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "start": 3254,
                  "end": 3428,
                  "body": {
                    "type": "TSInterfaceBody",
                    "start": 3277,
                    "end": 3428,
                    "body": [
                      {
                        "type": "TSPropertySignature",
                        "start": 3291,
                        "end": 3342,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 3291,
                          "end": 3294,
                          "decorators": [],
                          "name": "a15",
                          "optional": false
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 3294,
                          "end": 3341,
                          "typeAnnotation": {
                            "type": "TSFunctionType",
                            "start": 3296,
                            "end": 3341,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 3313,
                                "end": 3330,
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 3314,
                                  "end": 3330,
                                  "typeAnnotation": {
                                    "type": "TSTypeLiteral",
                                    "start": 3316,
                                    "end": 3330,
                                    "members": [
                                      {
                                        "type": "TSPropertySignature",
                                        "start": 3318,
                                        "end": 3323,
                                        "computed": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 3318,
                                          "end": 3319,
                                          "decorators": [],
                                          "name": "a",
                                          "optional": false
                                        },
                                        "optional": false,
                                        "readonly": false,
                                        "static": false,
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "start": 3319,
                                          "end": 3322,
                                          "typeAnnotation": {
                                            "type": "TSTypeReference",
                                            "start": 3321,
                                            "end": 3322,
                                            "typeName": {
                                              "type": "Identifier",
                                              "start": 3321,
                                              "end": 3322,
                                              "decorators": [],
                                              "name": "T",
                                              "optional": false
                                            }
                                          }
                                        }
                                      },
                                      {
                                        "type": "TSPropertySignature",
                                        "start": 3324,
                                        "end": 3328,
                                        "computed": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 3324,
                                          "end": 3325,
                                          "decorators": [],
                                          "name": "b",
                                          "optional": false
                                        },
                                        "optional": false,
                                        "readonly": false,
                                        "static": false,
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "start": 3325,
                                          "end": 3328,
                                          "typeAnnotation": {
                                            "type": "TSTypeReference",
                                            "start": 3327,
                                            "end": 3328,
                                            "typeName": {
                                              "type": "Identifier",
                                              "start": 3327,
                                              "end": 3328,
                                              "decorators": [],
                                              "name": "T",
                                              "optional": false
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
                              "start": 3332,
                              "end": 3341,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 3335,
                                "end": 3341
                              }
                            },
                            "typeParameters": {
                              "type": "TSTypeParameterDeclaration",
                              "start": 3296,
                              "end": 3312,
                              "params": [
                                {
                                  "type": "TSTypeParameter",
                                  "start": 3297,
                                  "end": 3311,
                                  "const": false,
                                  "constraint": {
                                    "type": "TSTypeReference",
                                    "start": 3307,
                                    "end": 3311,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 3307,
                                      "end": 3311,
                                      "decorators": [],
                                      "name": "Base",
                                      "optional": false
                                    }
                                  },
                                  "in": false,
                                  "name": {
                                    "type": "Identifier",
                                    "start": 3297,
                                    "end": 3298,
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false
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
                      "start": 3275,
                      "end": 3276,
                      "expression": {
                        "type": "Identifier",
                        "start": 3275,
                        "end": 3276,
                        "decorators": [],
                        "name": "A",
                        "optional": false
                      }
                    }
                  ],
                  "id": {
                    "type": "Identifier",
                    "start": 3264,
                    "end": 3266,
                    "decorators": [],
                    "name": "I7",
                    "optional": false
                  }
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "start": 3438,
                  "end": 3676,
                  "body": {
                    "type": "TSInterfaceBody",
                    "start": 3461,
                    "end": 3676,
                    "body": [
                      {
                        "type": "TSPropertySignature",
                        "start": 3634,
                        "end": 3666,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 3634,
                          "end": 3637,
                          "decorators": [],
                          "name": "a16",
                          "optional": false
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 3637,
                          "end": 3665,
                          "typeAnnotation": {
                            "type": "TSFunctionType",
                            "start": 3639,
                            "end": 3665,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 3643,
                                "end": 3657,
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 3644,
                                  "end": 3657,
                                  "typeAnnotation": {
                                    "type": "TSFunctionType",
                                    "start": 3646,
                                    "end": 3657,
                                    "params": [
                                      {
                                        "type": "Identifier",
                                        "start": 3647,
                                        "end": 3651,
                                        "decorators": [],
                                        "name": "a",
                                        "optional": false,
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "start": 3648,
                                          "end": 3651,
                                          "typeAnnotation": {
                                            "type": "TSTypeReference",
                                            "start": 3650,
                                            "end": 3651,
                                            "typeName": {
                                              "type": "Identifier",
                                              "start": 3650,
                                              "end": 3651,
                                              "decorators": [],
                                              "name": "T",
                                              "optional": false
                                            }
                                          }
                                        }
                                      }
                                    ],
                                    "returnType": {
                                      "type": "TSTypeAnnotation",
                                      "start": 3653,
                                      "end": 3657,
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "start": 3656,
                                        "end": 3657,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 3656,
                                          "end": 3657,
                                          "decorators": [],
                                          "name": "T",
                                          "optional": false
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "start": 3659,
                              "end": 3665,
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "start": 3662,
                                "end": 3665,
                                "elementType": {
                                  "type": "TSTypeReference",
                                  "start": 3662,
                                  "end": 3663,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 3662,
                                    "end": 3663,
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false
                                  }
                                }
                              }
                            },
                            "typeParameters": {
                              "type": "TSTypeParameterDeclaration",
                              "start": 3639,
                              "end": 3642,
                              "params": [
                                {
                                  "type": "TSTypeParameter",
                                  "start": 3640,
                                  "end": 3641,
                                  "const": false,
                                  "in": false,
                                  "name": {
                                    "type": "Identifier",
                                    "start": 3640,
                                    "end": 3641,
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false
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
                      "start": 3459,
                      "end": 3460,
                      "expression": {
                        "type": "Identifier",
                        "start": 3459,
                        "end": 3460,
                        "decorators": [],
                        "name": "A",
                        "optional": false
                      }
                    }
                  ],
                  "id": {
                    "type": "Identifier",
                    "start": 3448,
                    "end": 3450,
                    "decorators": [],
                    "name": "I8",
                    "optional": false
                  }
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "start": 3686,
                  "end": 3883,
                  "body": {
                    "type": "TSInterfaceBody",
                    "start": 3709,
                    "end": 3883,
                    "body": [
                      {
                        "type": "TSPropertySignature",
                        "start": 3723,
                        "end": 3757,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 3723,
                          "end": 3726,
                          "decorators": [],
                          "name": "a17",
                          "optional": false
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 3726,
                          "end": 3756,
                          "typeAnnotation": {
                            "type": "TSFunctionType",
                            "start": 3728,
                            "end": 3756,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 3732,
                                "end": 3746,
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 3733,
                                  "end": 3746,
                                  "typeAnnotation": {
                                    "type": "TSFunctionType",
                                    "start": 3735,
                                    "end": 3746,
                                    "params": [
                                      {
                                        "type": "Identifier",
                                        "start": 3736,
                                        "end": 3740,
                                        "decorators": [],
                                        "name": "a",
                                        "optional": false,
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "start": 3737,
                                          "end": 3740,
                                          "typeAnnotation": {
                                            "type": "TSTypeReference",
                                            "start": 3739,
                                            "end": 3740,
                                            "typeName": {
                                              "type": "Identifier",
                                              "start": 3739,
                                              "end": 3740,
                                              "decorators": [],
                                              "name": "T",
                                              "optional": false
                                            }
                                          }
                                        }
                                      }
                                    ],
                                    "returnType": {
                                      "type": "TSTypeAnnotation",
                                      "start": 3742,
                                      "end": 3746,
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "start": 3745,
                                        "end": 3746,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 3745,
                                          "end": 3746,
                                          "decorators": [],
                                          "name": "T",
                                          "optional": false
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "start": 3748,
                              "end": 3756,
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "start": 3751,
                                "end": 3756,
                                "elementType": {
                                  "type": "TSAnyKeyword",
                                  "start": 3751,
                                  "end": 3754
                                }
                              }
                            },
                            "typeParameters": {
                              "type": "TSTypeParameterDeclaration",
                              "start": 3728,
                              "end": 3731,
                              "params": [
                                {
                                  "type": "TSTypeParameter",
                                  "start": 3729,
                                  "end": 3730,
                                  "const": false,
                                  "in": false,
                                  "name": {
                                    "type": "Identifier",
                                    "start": 3729,
                                    "end": 3730,
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false
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
                      "start": 3707,
                      "end": 3708,
                      "expression": {
                        "type": "Identifier",
                        "start": 3707,
                        "end": 3708,
                        "decorators": [],
                        "name": "A",
                        "optional": false
                      }
                    }
                  ],
                  "id": {
                    "type": "Identifier",
                    "start": 3696,
                    "end": 3698,
                    "decorators": [],
                    "name": "I9",
                    "optional": false
                  }
                }
              ]
            },
            "declare": false,
            "global": false,
            "id": {
              "type": "Identifier",
              "start": 331,
              "end": 365,
              "decorators": [],
              "name": "WithNonGenericSignaturesInBaseType",
              "optional": false
            },
            "kind": "module"
          },
          {
            "type": "TSModuleDeclaration",
            "start": 3895,
            "end": 4354,
            "body": {
              "type": "TSModuleBlock",
              "start": 3934,
              "end": 4354,
              "body": [
                {
                  "type": "TSInterfaceDeclaration",
                  "start": 3992,
                  "end": 4049,
                  "body": {
                    "type": "TSInterfaceBody",
                    "start": 4004,
                    "end": 4049,
                    "body": [
                      {
                        "type": "TSPropertySignature",
                        "start": 4018,
                        "end": 4039,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 4018,
                          "end": 4020,
                          "decorators": [],
                          "name": "a2",
                          "optional": false
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 4020,
                          "end": 4038,
                          "typeAnnotation": {
                            "type": "TSFunctionType",
                            "start": 4022,
                            "end": 4038,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 4026,
                                "end": 4030,
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 4027,
                                  "end": 4030,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 4029,
                                    "end": 4030,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 4029,
                                      "end": 4030,
                                      "decorators": [],
                                      "name": "T",
                                      "optional": false
                                    }
                                  }
                                }
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "start": 4032,
                              "end": 4038,
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "start": 4035,
                                "end": 4038,
                                "elementType": {
                                  "type": "TSTypeReference",
                                  "start": 4035,
                                  "end": 4036,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 4035,
                                    "end": 4036,
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false
                                  }
                                }
                              }
                            },
                            "typeParameters": {
                              "type": "TSTypeParameterDeclaration",
                              "start": 4022,
                              "end": 4025,
                              "params": [
                                {
                                  "type": "TSTypeParameter",
                                  "start": 4023,
                                  "end": 4024,
                                  "const": false,
                                  "in": false,
                                  "name": {
                                    "type": "Identifier",
                                    "start": 4023,
                                    "end": 4024,
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false
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
                    "start": 4002,
                    "end": 4003,
                    "decorators": [],
                    "name": "B",
                    "optional": false
                  }
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "start": 4059,
                  "end": 4141,
                  "body": {
                    "type": "TSInterfaceBody",
                    "start": 4082,
                    "end": 4141,
                    "body": [
                      {
                        "type": "TSPropertySignature",
                        "start": 4096,
                        "end": 4122,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 4096,
                          "end": 4098,
                          "decorators": [],
                          "name": "a2",
                          "optional": false
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 4098,
                          "end": 4121,
                          "typeAnnotation": {
                            "type": "TSFunctionType",
                            "start": 4100,
                            "end": 4121,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 4104,
                                "end": 4108,
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 4105,
                                  "end": 4108,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 4107,
                                    "end": 4108,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 4107,
                                      "end": 4108,
                                      "decorators": [],
                                      "name": "T",
                                      "optional": false
                                    }
                                  }
                                }
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "start": 4110,
                              "end": 4121,
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "start": 4113,
                                "end": 4121,
                                "elementType": {
                                  "type": "TSStringKeyword",
                                  "start": 4113,
                                  "end": 4119
                                }
                              }
                            },
                            "typeParameters": {
                              "type": "TSTypeParameterDeclaration",
                              "start": 4100,
                              "end": 4103,
                              "params": [
                                {
                                  "type": "TSTypeParameter",
                                  "start": 4101,
                                  "end": 4102,
                                  "const": false,
                                  "in": false,
                                  "name": {
                                    "type": "Identifier",
                                    "start": 4101,
                                    "end": 4102,
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false
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
                      "start": 4080,
                      "end": 4081,
                      "expression": {
                        "type": "Identifier",
                        "start": 4080,
                        "end": 4081,
                        "decorators": [],
                        "name": "B",
                        "optional": false
                      }
                    }
                  ],
                  "id": {
                    "type": "Identifier",
                    "start": 4069,
                    "end": 4071,
                    "decorators": [],
                    "name": "I6",
                    "optional": false
                  }
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "start": 4199,
                  "end": 4261,
                  "body": {
                    "type": "TSInterfaceBody",
                    "start": 4211,
                    "end": 4261,
                    "body": [
                      {
                        "type": "TSPropertySignature",
                        "start": 4225,
                        "end": 4251,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 4225,
                          "end": 4227,
                          "decorators": [],
                          "name": "a2",
                          "optional": false
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 4227,
                          "end": 4250,
                          "typeAnnotation": {
                            "type": "TSFunctionType",
                            "start": 4229,
                            "end": 4250,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 4233,
                                "end": 4237,
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 4234,
                                  "end": 4237,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 4236,
                                    "end": 4237,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 4236,
                                      "end": 4237,
                                      "decorators": [],
                                      "name": "T",
                                      "optional": false
                                    }
                                  }
                                }
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "start": 4239,
                              "end": 4250,
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "start": 4242,
                                "end": 4250,
                                "elementType": {
                                  "type": "TSStringKeyword",
                                  "start": 4242,
                                  "end": 4248
                                }
                              }
                            },
                            "typeParameters": {
                              "type": "TSTypeParameterDeclaration",
                              "start": 4229,
                              "end": 4232,
                              "params": [
                                {
                                  "type": "TSTypeParameter",
                                  "start": 4230,
                                  "end": 4231,
                                  "const": false,
                                  "in": false,
                                  "name": {
                                    "type": "Identifier",
                                    "start": 4230,
                                    "end": 4231,
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false
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
                    "start": 4209,
                    "end": 4210,
                    "decorators": [],
                    "name": "C",
                    "optional": false
                  }
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "start": 4271,
                  "end": 4348,
                  "body": {
                    "type": "TSInterfaceBody",
                    "start": 4294,
                    "end": 4348,
                    "body": [
                      {
                        "type": "TSPropertySignature",
                        "start": 4308,
                        "end": 4329,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 4308,
                          "end": 4310,
                          "decorators": [],
                          "name": "a2",
                          "optional": false
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 4310,
                          "end": 4328,
                          "typeAnnotation": {
                            "type": "TSFunctionType",
                            "start": 4312,
                            "end": 4328,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 4316,
                                "end": 4320,
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 4317,
                                  "end": 4320,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 4319,
                                    "end": 4320,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 4319,
                                      "end": 4320,
                                      "decorators": [],
                                      "name": "T",
                                      "optional": false
                                    }
                                  }
                                }
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "start": 4322,
                              "end": 4328,
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "start": 4325,
                                "end": 4328,
                                "elementType": {
                                  "type": "TSTypeReference",
                                  "start": 4325,
                                  "end": 4326,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 4325,
                                    "end": 4326,
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false
                                  }
                                }
                              }
                            },
                            "typeParameters": {
                              "type": "TSTypeParameterDeclaration",
                              "start": 4312,
                              "end": 4315,
                              "params": [
                                {
                                  "type": "TSTypeParameter",
                                  "start": 4313,
                                  "end": 4314,
                                  "const": false,
                                  "in": false,
                                  "name": {
                                    "type": "Identifier",
                                    "start": 4313,
                                    "end": 4314,
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false
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
                      "start": 4292,
                      "end": 4293,
                      "expression": {
                        "type": "Identifier",
                        "start": 4292,
                        "end": 4293,
                        "decorators": [],
                        "name": "C",
                        "optional": false
                      }
                    }
                  ],
                  "id": {
                    "type": "Identifier",
                    "start": 4281,
                    "end": 4283,
                    "decorators": [],
                    "name": "I7",
                    "optional": false
                  }
                }
              ]
            },
            "declare": false,
            "global": false,
            "id": {
              "type": "Identifier",
              "start": 3902,
              "end": 3933,
              "decorators": [],
              "name": "WithGenericSignaturesInBaseType",
              "optional": false
            },
            "kind": "module"
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 124,
        "end": 130,
        "decorators": [],
        "name": "Errors",
        "optional": false
      },
      "kind": "module"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
