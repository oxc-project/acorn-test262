constructSignatureAssignabilityInInheritance3.ts
```json
{
  "type": "Program",
  "start": 117,
  "end": 4286,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 117,
      "end": 4286,
      "body": {
        "type": "TSModuleBlock",
        "start": 131,
        "end": 4286,
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
            "end": 3459,
            "body": {
              "type": "TSModuleBlock",
              "start": 366,
              "end": 3459,
              "body": [
                {
                  "type": "TSInterfaceDeclaration",
                  "start": 430,
                  "end": 1500,
                  "body": {
                    "type": "TSInterfaceBody",
                    "start": 442,
                    "end": 1500,
                    "body": [
                      {
                        "type": "TSPropertySignature",
                        "start": 456,
                        "end": 488,
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
                          "end": 487,
                          "typeAnnotation": {
                            "type": "TSConstructorType",
                            "start": 460,
                            "end": 487,
                            "abstract": false,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 465,
                                "end": 474,
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 466,
                                  "end": 474,
                                  "typeAnnotation": {
                                    "type": "TSNumberKeyword",
                                    "start": 468,
                                    "end": 474
                                  }
                                }
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "start": 476,
                              "end": 487,
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "start": 479,
                                "end": 487,
                                "elementType": {
                                  "type": "TSStringKeyword",
                                  "start": 479,
                                  "end": 485
                                }
                              }
                            }
                          }
                        }
                      },
                      {
                        "type": "TSPropertySignature",
                        "start": 501,
                        "end": 562,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 501,
                          "end": 503,
                          "decorators": [],
                          "name": "a7",
                          "optional": false
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 503,
                          "end": 561,
                          "typeAnnotation": {
                            "type": "TSConstructorType",
                            "start": 505,
                            "end": 561,
                            "abstract": false,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 510,
                                "end": 535,
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 511,
                                  "end": 535,
                                  "typeAnnotation": {
                                    "type": "TSFunctionType",
                                    "start": 513,
                                    "end": 535,
                                    "params": [
                                      {
                                        "type": "Identifier",
                                        "start": 514,
                                        "end": 523,
                                        "decorators": [],
                                        "name": "arg",
                                        "optional": false,
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "start": 517,
                                          "end": 523,
                                          "typeAnnotation": {
                                            "type": "TSTypeReference",
                                            "start": 519,
                                            "end": 523,
                                            "typeName": {
                                              "type": "Identifier",
                                              "start": 519,
                                              "end": 523,
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
                                      "start": 525,
                                      "end": 535,
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "start": 528,
                                        "end": 535,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 528,
                                          "end": 535,
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
                              "start": 537,
                              "end": 561,
                              "typeAnnotation": {
                                "type": "TSFunctionType",
                                "start": 540,
                                "end": 561,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "start": 541,
                                    "end": 548,
                                    "decorators": [],
                                    "name": "r",
                                    "optional": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 542,
                                      "end": 548,
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "start": 544,
                                        "end": 548,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 544,
                                          "end": 548,
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
                                  "start": 550,
                                  "end": 561,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 553,
                                    "end": 561,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 553,
                                      "end": 561,
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
                        "start": 575,
                        "end": 663,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 575,
                          "end": 577,
                          "decorators": [],
                          "name": "a8",
                          "optional": false
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 577,
                          "end": 662,
                          "typeAnnotation": {
                            "type": "TSConstructorType",
                            "start": 579,
                            "end": 662,
                            "abstract": false,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 584,
                                "end": 609,
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 585,
                                  "end": 609,
                                  "typeAnnotation": {
                                    "type": "TSFunctionType",
                                    "start": 587,
                                    "end": 609,
                                    "params": [
                                      {
                                        "type": "Identifier",
                                        "start": 588,
                                        "end": 597,
                                        "decorators": [],
                                        "name": "arg",
                                        "optional": false,
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "start": 591,
                                          "end": 597,
                                          "typeAnnotation": {
                                            "type": "TSTypeReference",
                                            "start": 593,
                                            "end": 597,
                                            "typeName": {
                                              "type": "Identifier",
                                              "start": 593,
                                              "end": 597,
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
                                      "start": 599,
                                      "end": 609,
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "start": 602,
                                        "end": 609,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 602,
                                          "end": 609,
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
                                "start": 611,
                                "end": 637,
                                "decorators": [],
                                "name": "y",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 612,
                                  "end": 637,
                                  "typeAnnotation": {
                                    "type": "TSFunctionType",
                                    "start": 614,
                                    "end": 637,
                                    "params": [
                                      {
                                        "type": "Identifier",
                                        "start": 615,
                                        "end": 625,
                                        "decorators": [],
                                        "name": "arg2",
                                        "optional": false,
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "start": 619,
                                          "end": 625,
                                          "typeAnnotation": {
                                            "type": "TSTypeReference",
                                            "start": 621,
                                            "end": 625,
                                            "typeName": {
                                              "type": "Identifier",
                                              "start": 621,
                                              "end": 625,
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
                                      "start": 627,
                                      "end": 637,
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "start": 630,
                                        "end": 637,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 630,
                                          "end": 637,
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
                              "start": 639,
                              "end": 662,
                              "typeAnnotation": {
                                "type": "TSFunctionType",
                                "start": 642,
                                "end": 662,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "start": 643,
                                    "end": 650,
                                    "decorators": [],
                                    "name": "r",
                                    "optional": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 644,
                                      "end": 650,
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "start": 646,
                                        "end": 650,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 646,
                                          "end": 650,
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
                                  "start": 652,
                                  "end": 662,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 655,
                                    "end": 662,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 655,
                                      "end": 662,
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
                        "start": 676,
                        "end": 708,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 676,
                          "end": 679,
                          "decorators": [],
                          "name": "a10",
                          "optional": false
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 679,
                          "end": 707,
                          "typeAnnotation": {
                            "type": "TSConstructorType",
                            "start": 681,
                            "end": 707,
                            "abstract": false,
                            "params": [
                              {
                                "type": "RestElement",
                                "start": 686,
                                "end": 698,
                                "argument": {
                                  "type": "Identifier",
                                  "start": 689,
                                  "end": 690,
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false
                                },
                                "decorators": [],
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 690,
                                  "end": 698,
                                  "typeAnnotation": {
                                    "type": "TSArrayType",
                                    "start": 692,
                                    "end": 698,
                                    "elementType": {
                                      "type": "TSTypeReference",
                                      "start": 692,
                                      "end": 696,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 692,
                                        "end": 696,
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
                              "start": 700,
                              "end": 707,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 703,
                                "end": 707,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 703,
                                  "end": 707,
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
                        "start": 721,
                        "end": 792,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 721,
                          "end": 724,
                          "decorators": [],
                          "name": "a11",
                          "optional": false
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 724,
                          "end": 791,
                          "typeAnnotation": {
                            "type": "TSConstructorType",
                            "start": 726,
                            "end": 791,
                            "abstract": false,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 731,
                                "end": 749,
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 732,
                                  "end": 749,
                                  "typeAnnotation": {
                                    "type": "TSTypeLiteral",
                                    "start": 734,
                                    "end": 749,
                                    "members": [
                                      {
                                        "type": "TSPropertySignature",
                                        "start": 736,
                                        "end": 747,
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
                                      }
                                    ]
                                  }
                                }
                              },
                              {
                                "type": "Identifier",
                                "start": 751,
                                "end": 782,
                                "decorators": [],
                                "name": "y",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 752,
                                  "end": 782,
                                  "typeAnnotation": {
                                    "type": "TSTypeLiteral",
                                    "start": 754,
                                    "end": 782,
                                    "members": [
                                      {
                                        "type": "TSPropertySignature",
                                        "start": 756,
                                        "end": 768,
                                        "computed": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 756,
                                          "end": 759,
                                          "decorators": [],
                                          "name": "foo",
                                          "optional": false
                                        },
                                        "optional": false,
                                        "readonly": false,
                                        "static": false,
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "start": 759,
                                          "end": 767,
                                          "typeAnnotation": {
                                            "type": "TSStringKeyword",
                                            "start": 761,
                                            "end": 767
                                          }
                                        }
                                      },
                                      {
                                        "type": "TSPropertySignature",
                                        "start": 769,
                                        "end": 780,
                                        "computed": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 769,
                                          "end": 772,
                                          "decorators": [],
                                          "name": "bar",
                                          "optional": false
                                        },
                                        "optional": false,
                                        "readonly": false,
                                        "static": false,
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "start": 772,
                                          "end": 780,
                                          "typeAnnotation": {
                                            "type": "TSStringKeyword",
                                            "start": 774,
                                            "end": 780
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
                              "start": 784,
                              "end": 791,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 787,
                                "end": 791,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 787,
                                  "end": 791,
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
                        "start": 805,
                        "end": 869,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 805,
                          "end": 808,
                          "decorators": [],
                          "name": "a12",
                          "optional": false
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 808,
                          "end": 868,
                          "typeAnnotation": {
                            "type": "TSConstructorType",
                            "start": 810,
                            "end": 868,
                            "abstract": false,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 815,
                                "end": 829,
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 816,
                                  "end": 829,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 818,
                                    "end": 829,
                                    "typeArguments": {
                                      "type": "TSTypeParameterInstantiation",
                                      "start": 823,
                                      "end": 829,
                                      "params": [
                                        {
                                          "type": "TSTypeReference",
                                          "start": 824,
                                          "end": 828,
                                          "typeName": {
                                            "type": "Identifier",
                                            "start": 824,
                                            "end": 828,
                                            "decorators": [],
                                            "name": "Base",
                                            "optional": false
                                          }
                                        }
                                      ]
                                    },
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 818,
                                      "end": 823,
                                      "decorators": [],
                                      "name": "Array",
                                      "optional": false
                                    }
                                  }
                                }
                              },
                              {
                                "type": "Identifier",
                                "start": 831,
                                "end": 849,
                                "decorators": [],
                                "name": "y",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 832,
                                  "end": 849,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 834,
                                    "end": 849,
                                    "typeArguments": {
                                      "type": "TSTypeParameterInstantiation",
                                      "start": 839,
                                      "end": 849,
                                      "params": [
                                        {
                                          "type": "TSTypeReference",
                                          "start": 840,
                                          "end": 848,
                                          "typeName": {
                                            "type": "Identifier",
                                            "start": 840,
                                            "end": 848,
                                            "decorators": [],
                                            "name": "Derived2",
                                            "optional": false
                                          }
                                        }
                                      ]
                                    },
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 834,
                                      "end": 839,
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
                              "start": 851,
                              "end": 868,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 854,
                                "end": 868,
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "start": 859,
                                  "end": 868,
                                  "params": [
                                    {
                                      "type": "TSTypeReference",
                                      "start": 860,
                                      "end": 867,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 860,
                                        "end": 867,
                                        "decorators": [],
                                        "name": "Derived",
                                        "optional": false
                                      }
                                    }
                                  ]
                                },
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 854,
                                  "end": 859,
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
                        "start": 882,
                        "end": 989,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 882,
                          "end": 885,
                          "decorators": [],
                          "name": "a14",
                          "optional": false
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 885,
                          "end": 988,
                          "typeAnnotation": {
                            "type": "TSTypeLiteral",
                            "start": 887,
                            "end": 988,
                            "members": [
                              {
                                "type": "TSConstructSignatureDeclaration",
                                "start": 905,
                                "end": 931,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "start": 910,
                                    "end": 919,
                                    "decorators": [],
                                    "name": "x",
                                    "optional": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 911,
                                      "end": 919,
                                      "typeAnnotation": {
                                        "type": "TSNumberKeyword",
                                        "start": 913,
                                        "end": 919
                                      }
                                    }
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "start": 920,
                                  "end": 930,
                                  "typeAnnotation": {
                                    "type": "TSArrayType",
                                    "start": 922,
                                    "end": 930,
                                    "elementType": {
                                      "type": "TSNumberKeyword",
                                      "start": 922,
                                      "end": 928
                                    }
                                  }
                                }
                              },
                              {
                                "type": "TSConstructSignatureDeclaration",
                                "start": 948,
                                "end": 974,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "start": 953,
                                    "end": 962,
                                    "decorators": [],
                                    "name": "x",
                                    "optional": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 954,
                                      "end": 962,
                                      "typeAnnotation": {
                                        "type": "TSStringKeyword",
                                        "start": 956,
                                        "end": 962
                                      }
                                    }
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "start": 963,
                                  "end": 973,
                                  "typeAnnotation": {
                                    "type": "TSArrayType",
                                    "start": 965,
                                    "end": 973,
                                    "elementType": {
                                      "type": "TSStringKeyword",
                                      "start": 965,
                                      "end": 971
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
                        "start": 1002,
                        "end": 1051,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 1002,
                          "end": 1005,
                          "decorators": [],
                          "name": "a15",
                          "optional": false
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1005,
                          "end": 1050,
                          "typeAnnotation": {
                            "type": "TSConstructorType",
                            "start": 1007,
                            "end": 1050,
                            "abstract": false,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 1012,
                                "end": 1039,
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 1013,
                                  "end": 1039,
                                  "typeAnnotation": {
                                    "type": "TSTypeLiteral",
                                    "start": 1015,
                                    "end": 1039,
                                    "members": [
                                      {
                                        "type": "TSPropertySignature",
                                        "start": 1017,
                                        "end": 1027,
                                        "computed": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 1017,
                                          "end": 1018,
                                          "decorators": [],
                                          "name": "a",
                                          "optional": false
                                        },
                                        "optional": false,
                                        "readonly": false,
                                        "static": false,
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "start": 1018,
                                          "end": 1026,
                                          "typeAnnotation": {
                                            "type": "TSStringKeyword",
                                            "start": 1020,
                                            "end": 1026
                                          }
                                        }
                                      },
                                      {
                                        "type": "TSPropertySignature",
                                        "start": 1028,
                                        "end": 1037,
                                        "computed": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 1028,
                                          "end": 1029,
                                          "decorators": [],
                                          "name": "b",
                                          "optional": false
                                        },
                                        "optional": false,
                                        "readonly": false,
                                        "static": false,
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "start": 1029,
                                          "end": 1037,
                                          "typeAnnotation": {
                                            "type": "TSNumberKeyword",
                                            "start": 1031,
                                            "end": 1037
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
                              "start": 1041,
                              "end": 1050,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 1044,
                                "end": 1050
                              }
                            }
                          }
                        }
                      },
                      {
                        "type": "TSPropertySignature",
                        "start": 1064,
                        "end": 1490,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 1064,
                          "end": 1067,
                          "decorators": [],
                          "name": "a16",
                          "optional": false
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1067,
                          "end": 1489,
                          "typeAnnotation": {
                            "type": "TSTypeLiteral",
                            "start": 1069,
                            "end": 1489,
                            "members": [
                              {
                                "type": "TSConstructSignatureDeclaration",
                                "start": 1193,
                                "end": 1323,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "start": 1198,
                                    "end": 1311,
                                    "decorators": [],
                                    "name": "x",
                                    "optional": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 1199,
                                      "end": 1311,
                                      "typeAnnotation": {
                                        "type": "TSTypeLiteral",
                                        "start": 1201,
                                        "end": 1311,
                                        "members": [
                                          {
                                            "type": "TSConstructSignatureDeclaration",
                                            "start": 1223,
                                            "end": 1247,
                                            "params": [
                                              {
                                                "type": "Identifier",
                                                "start": 1228,
                                                "end": 1237,
                                                "decorators": [],
                                                "name": "a",
                                                "optional": false,
                                                "typeAnnotation": {
                                                  "type": "TSTypeAnnotation",
                                                  "start": 1229,
                                                  "end": 1237,
                                                  "typeAnnotation": {
                                                    "type": "TSNumberKeyword",
                                                    "start": 1231,
                                                    "end": 1237
                                                  }
                                                }
                                              }
                                            ],
                                            "returnType": {
                                              "type": "TSTypeAnnotation",
                                              "start": 1238,
                                              "end": 1246,
                                              "typeAnnotation": {
                                                "type": "TSNumberKeyword",
                                                "start": 1240,
                                                "end": 1246
                                              }
                                            }
                                          },
                                          {
                                            "type": "TSConstructSignatureDeclaration",
                                            "start": 1268,
                                            "end": 1293,
                                            "params": [
                                              {
                                                "type": "Identifier",
                                                "start": 1273,
                                                "end": 1283,
                                                "decorators": [],
                                                "name": "a",
                                                "optional": true,
                                                "typeAnnotation": {
                                                  "type": "TSTypeAnnotation",
                                                  "start": 1275,
                                                  "end": 1283,
                                                  "typeAnnotation": {
                                                    "type": "TSNumberKeyword",
                                                    "start": 1277,
                                                    "end": 1283
                                                  }
                                                }
                                              }
                                            ],
                                            "returnType": {
                                              "type": "TSTypeAnnotation",
                                              "start": 1284,
                                              "end": 1292,
                                              "typeAnnotation": {
                                                "type": "TSNumberKeyword",
                                                "start": 1286,
                                                "end": 1292
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
                                  "start": 1312,
                                  "end": 1322,
                                  "typeAnnotation": {
                                    "type": "TSArrayType",
                                    "start": 1314,
                                    "end": 1322,
                                    "elementType": {
                                      "type": "TSNumberKeyword",
                                      "start": 1314,
                                      "end": 1320
                                    }
                                  }
                                }
                              },
                              {
                                "type": "TSConstructSignatureDeclaration",
                                "start": 1340,
                                "end": 1475,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "start": 1345,
                                    "end": 1462,
                                    "decorators": [],
                                    "name": "x",
                                    "optional": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 1346,
                                      "end": 1462,
                                      "typeAnnotation": {
                                        "type": "TSTypeLiteral",
                                        "start": 1348,
                                        "end": 1462,
                                        "members": [
                                          {
                                            "type": "TSConstructSignatureDeclaration",
                                            "start": 1370,
                                            "end": 1396,
                                            "params": [
                                              {
                                                "type": "Identifier",
                                                "start": 1375,
                                                "end": 1385,
                                                "decorators": [],
                                                "name": "a",
                                                "optional": false,
                                                "typeAnnotation": {
                                                  "type": "TSTypeAnnotation",
                                                  "start": 1376,
                                                  "end": 1385,
                                                  "typeAnnotation": {
                                                    "type": "TSBooleanKeyword",
                                                    "start": 1378,
                                                    "end": 1385
                                                  }
                                                }
                                              }
                                            ],
                                            "returnType": {
                                              "type": "TSTypeAnnotation",
                                              "start": 1386,
                                              "end": 1395,
                                              "typeAnnotation": {
                                                "type": "TSBooleanKeyword",
                                                "start": 1388,
                                                "end": 1395
                                              }
                                            }
                                          },
                                          {
                                            "type": "TSConstructSignatureDeclaration",
                                            "start": 1417,
                                            "end": 1444,
                                            "params": [
                                              {
                                                "type": "Identifier",
                                                "start": 1422,
                                                "end": 1433,
                                                "decorators": [],
                                                "name": "a",
                                                "optional": true,
                                                "typeAnnotation": {
                                                  "type": "TSTypeAnnotation",
                                                  "start": 1424,
                                                  "end": 1433,
                                                  "typeAnnotation": {
                                                    "type": "TSBooleanKeyword",
                                                    "start": 1426,
                                                    "end": 1433
                                                  }
                                                }
                                              }
                                            ],
                                            "returnType": {
                                              "type": "TSTypeAnnotation",
                                              "start": 1434,
                                              "end": 1443,
                                              "typeAnnotation": {
                                                "type": "TSBooleanKeyword",
                                                "start": 1436,
                                                "end": 1443
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
                                  "end": 1474,
                                  "typeAnnotation": {
                                    "type": "TSArrayType",
                                    "start": 1465,
                                    "end": 1474,
                                    "elementType": {
                                      "type": "TSBooleanKeyword",
                                      "start": 1465,
                                      "end": 1472
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
                  "start": 1510,
                  "end": 1695,
                  "body": {
                    "type": "TSInterfaceBody",
                    "start": 1532,
                    "end": 1695,
                    "body": [
                      {
                        "type": "TSPropertySignature",
                        "start": 1546,
                        "end": 1574,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 1546,
                          "end": 1548,
                          "decorators": [],
                          "name": "a2",
                          "optional": false
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1548,
                          "end": 1573,
                          "typeAnnotation": {
                            "type": "TSConstructorType",
                            "start": 1550,
                            "end": 1573,
                            "abstract": false,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 1561,
                                "end": 1565,
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 1562,
                                  "end": 1565,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 1564,
                                    "end": 1565,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 1564,
                                      "end": 1565,
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
                              "start": 1567,
                              "end": 1573,
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "start": 1570,
                                "end": 1573,
                                "elementType": {
                                  "type": "TSTypeReference",
                                  "start": 1570,
                                  "end": 1571,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 1570,
                                    "end": 1571,
                                    "decorators": [],
                                    "name": "U",
                                    "optional": false
                                  }
                                }
                              }
                            },
                            "typeParameters": {
                              "type": "TSTypeParameterDeclaration",
                              "start": 1554,
                              "end": 1560,
                              "params": [
                                {
                                  "type": "TSTypeParameter",
                                  "start": 1555,
                                  "end": 1556,
                                  "const": false,
                                  "in": false,
                                  "name": {
                                    "type": "Identifier",
                                    "start": 1555,
                                    "end": 1556,
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false
                                  },
                                  "out": false
                                },
                                {
                                  "type": "TSTypeParameter",
                                  "start": 1558,
                                  "end": 1559,
                                  "const": false,
                                  "in": false,
                                  "name": {
                                    "type": "Identifier",
                                    "start": 1558,
                                    "end": 1559,
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
                      "start": 1530,
                      "end": 1531,
                      "expression": {
                        "type": "Identifier",
                        "start": 1530,
                        "end": 1531,
                        "decorators": [],
                        "name": "A",
                        "optional": false
                      }
                    }
                  ],
                  "id": {
                    "type": "Identifier",
                    "start": 1520,
                    "end": 1521,
                    "decorators": [],
                    "name": "I",
                    "optional": false
                  }
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "start": 1705,
                  "end": 1855,
                  "body": {
                    "type": "TSInterfaceBody",
                    "start": 1734,
                    "end": 1855,
                    "body": [
                      {
                        "type": "TSPropertySignature",
                        "start": 1748,
                        "end": 1770,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 1748,
                          "end": 1750,
                          "decorators": [],
                          "name": "a2",
                          "optional": false
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1750,
                          "end": 1769,
                          "typeAnnotation": {
                            "type": "TSConstructorType",
                            "start": 1752,
                            "end": 1769,
                            "abstract": false,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 1757,
                                "end": 1761,
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 1758,
                                  "end": 1761,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 1760,
                                    "end": 1761,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 1760,
                                      "end": 1761,
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
                              "start": 1763,
                              "end": 1769,
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "start": 1766,
                                "end": 1769,
                                "elementType": {
                                  "type": "TSTypeReference",
                                  "start": 1766,
                                  "end": 1767,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 1766,
                                    "end": 1767,
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
                      "start": 1732,
                      "end": 1733,
                      "expression": {
                        "type": "Identifier",
                        "start": 1732,
                        "end": 1733,
                        "decorators": [],
                        "name": "A",
                        "optional": false
                      }
                    }
                  ],
                  "id": {
                    "type": "Identifier",
                    "start": 1715,
                    "end": 1717,
                    "decorators": [],
                    "name": "I2",
                    "optional": false
                  },
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "start": 1717,
                    "end": 1723,
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "start": 1718,
                        "end": 1719,
                        "const": false,
                        "in": false,
                        "name": {
                          "type": "Identifier",
                          "start": 1718,
                          "end": 1719,
                          "decorators": [],
                          "name": "T",
                          "optional": false
                        },
                        "out": false
                      },
                      {
                        "type": "TSTypeParameter",
                        "start": 1721,
                        "end": 1722,
                        "const": false,
                        "in": false,
                        "name": {
                          "type": "Identifier",
                          "start": 1721,
                          "end": 1722,
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
                  "start": 1865,
                  "end": 2078,
                  "body": {
                    "type": "TSInterfaceBody",
                    "start": 1888,
                    "end": 2078,
                    "body": [
                      {
                        "type": "TSPropertySignature",
                        "start": 1971,
                        "end": 2068,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 1971,
                          "end": 1973,
                          "decorators": [],
                          "name": "a7",
                          "optional": false
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1973,
                          "end": 2067,
                          "typeAnnotation": {
                            "type": "TSConstructorType",
                            "start": 1975,
                            "end": 2067,
                            "abstract": false,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 2035,
                                "end": 2051,
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 2036,
                                  "end": 2051,
                                  "typeAnnotation": {
                                    "type": "TSFunctionType",
                                    "start": 2038,
                                    "end": 2051,
                                    "params": [
                                      {
                                        "type": "Identifier",
                                        "start": 2039,
                                        "end": 2045,
                                        "decorators": [],
                                        "name": "arg",
                                        "optional": false,
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "start": 2042,
                                          "end": 2045,
                                          "typeAnnotation": {
                                            "type": "TSTypeReference",
                                            "start": 2044,
                                            "end": 2045,
                                            "typeName": {
                                              "type": "Identifier",
                                              "start": 2044,
                                              "end": 2045,
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
                                      "start": 2047,
                                      "end": 2051,
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "start": 2050,
                                        "end": 2051,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 2050,
                                          "end": 2051,
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
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 2060,
                                          "end": 2061,
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
                                  "start": 2063,
                                  "end": 2067,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 2066,
                                    "end": 2067,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 2066,
                                      "end": 2067,
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
                              "start": 1979,
                              "end": 2034,
                              "params": [
                                {
                                  "type": "TSTypeParameter",
                                  "start": 1980,
                                  "end": 1994,
                                  "const": false,
                                  "constraint": {
                                    "type": "TSTypeReference",
                                    "start": 1990,
                                    "end": 1994,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 1990,
                                      "end": 1994,
                                      "decorators": [],
                                      "name": "Base",
                                      "optional": false
                                    }
                                  },
                                  "in": false,
                                  "name": {
                                    "type": "Identifier",
                                    "start": 1980,
                                    "end": 1981,
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false
                                  },
                                  "out": false
                                },
                                {
                                  "type": "TSTypeParameter",
                                  "start": 1996,
                                  "end": 2013,
                                  "const": false,
                                  "constraint": {
                                    "type": "TSTypeReference",
                                    "start": 2006,
                                    "end": 2013,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 2006,
                                      "end": 2013,
                                      "decorators": [],
                                      "name": "Derived",
                                      "optional": false
                                    }
                                  },
                                  "in": false,
                                  "name": {
                                    "type": "Identifier",
                                    "start": 1996,
                                    "end": 1997,
                                    "decorators": [],
                                    "name": "U",
                                    "optional": false
                                  },
                                  "out": false
                                },
                                {
                                  "type": "TSTypeParameter",
                                  "start": 2015,
                                  "end": 2033,
                                  "const": false,
                                  "constraint": {
                                    "type": "TSTypeReference",
                                    "start": 2025,
                                    "end": 2033,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 2025,
                                      "end": 2033,
                                      "decorators": [],
                                      "name": "Derived2",
                                      "optional": false
                                    }
                                  },
                                  "in": false,
                                  "name": {
                                    "type": "Identifier",
                                    "start": 2015,
                                    "end": 2016,
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
                      "start": 1886,
                      "end": 1887,
                      "expression": {
                        "type": "Identifier",
                        "start": 1886,
                        "end": 1887,
                        "decorators": [],
                        "name": "A",
                        "optional": false
                      }
                    }
                  ],
                  "id": {
                    "type": "Identifier",
                    "start": 1875,
                    "end": 1877,
                    "decorators": [],
                    "name": "I3",
                    "optional": false
                  }
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "start": 2088,
                  "end": 2270,
                  "body": {
                    "type": "TSInterfaceBody",
                    "start": 2111,
                    "end": 2270,
                    "body": [
                      {
                        "type": "TSPropertySignature",
                        "start": 2125,
                        "end": 2236,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 2125,
                          "end": 2127,
                          "decorators": [],
                          "name": "a8",
                          "optional": false
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2127,
                          "end": 2235,
                          "typeAnnotation": {
                            "type": "TSConstructorType",
                            "start": 2129,
                            "end": 2235,
                            "abstract": false,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 2169,
                                "end": 2185,
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 2170,
                                  "end": 2185,
                                  "typeAnnotation": {
                                    "type": "TSFunctionType",
                                    "start": 2172,
                                    "end": 2185,
                                    "params": [
                                      {
                                        "type": "Identifier",
                                        "start": 2173,
                                        "end": 2179,
                                        "decorators": [],
                                        "name": "arg",
                                        "optional": false,
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "start": 2176,
                                          "end": 2179,
                                          "typeAnnotation": {
                                            "type": "TSTypeReference",
                                            "start": 2178,
                                            "end": 2179,
                                            "typeName": {
                                              "type": "Identifier",
                                              "start": 2178,
                                              "end": 2179,
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
                                      "start": 2181,
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
                                "start": 2187,
                                "end": 2219,
                                "decorators": [],
                                "name": "y",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 2188,
                                  "end": 2219,
                                  "typeAnnotation": {
                                    "type": "TSFunctionType",
                                    "start": 2190,
                                    "end": 2219,
                                    "params": [
                                      {
                                        "type": "Identifier",
                                        "start": 2191,
                                        "end": 2213,
                                        "decorators": [],
                                        "name": "arg2",
                                        "optional": false,
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "start": 2195,
                                          "end": 2213,
                                          "typeAnnotation": {
                                            "type": "TSTypeLiteral",
                                            "start": 2197,
                                            "end": 2213,
                                            "members": [
                                              {
                                                "type": "TSPropertySignature",
                                                "start": 2199,
                                                "end": 2211,
                                                "computed": false,
                                                "key": {
                                                  "type": "Identifier",
                                                  "start": 2199,
                                                  "end": 2202,
                                                  "decorators": [],
                                                  "name": "foo",
                                                  "optional": false
                                                },
                                                "optional": false,
                                                "readonly": false,
                                                "static": false,
                                                "typeAnnotation": {
                                                  "type": "TSTypeAnnotation",
                                                  "start": 2202,
                                                  "end": 2210,
                                                  "typeAnnotation": {
                                                    "type": "TSNumberKeyword",
                                                    "start": 2204,
                                                    "end": 2210
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
                                      "start": 2215,
                                      "end": 2219,
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "start": 2218,
                                        "end": 2219,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 2218,
                                          "end": 2219,
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
                              "start": 2221,
                              "end": 2235,
                              "typeAnnotation": {
                                "type": "TSFunctionType",
                                "start": 2224,
                                "end": 2235,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "start": 2225,
                                    "end": 2229,
                                    "decorators": [],
                                    "name": "r",
                                    "optional": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 2226,
                                      "end": 2229,
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "start": 2228,
                                        "end": 2229,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 2228,
                                          "end": 2229,
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
                                  "start": 2231,
                                  "end": 2235,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 2234,
                                    "end": 2235,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 2234,
                                      "end": 2235,
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
                              "start": 2133,
                              "end": 2168,
                              "params": [
                                {
                                  "type": "TSTypeParameter",
                                  "start": 2134,
                                  "end": 2148,
                                  "const": false,
                                  "constraint": {
                                    "type": "TSTypeReference",
                                    "start": 2144,
                                    "end": 2148,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 2144,
                                      "end": 2148,
                                      "decorators": [],
                                      "name": "Base",
                                      "optional": false
                                    }
                                  },
                                  "in": false,
                                  "name": {
                                    "type": "Identifier",
                                    "start": 2134,
                                    "end": 2135,
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false
                                  },
                                  "out": false
                                },
                                {
                                  "type": "TSTypeParameter",
                                  "start": 2150,
                                  "end": 2167,
                                  "const": false,
                                  "constraint": {
                                    "type": "TSTypeReference",
                                    "start": 2160,
                                    "end": 2167,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 2160,
                                      "end": 2167,
                                      "decorators": [],
                                      "name": "Derived",
                                      "optional": false
                                    }
                                  },
                                  "in": false,
                                  "name": {
                                    "type": "Identifier",
                                    "start": 2150,
                                    "end": 2151,
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
                      "start": 2109,
                      "end": 2110,
                      "expression": {
                        "type": "Identifier",
                        "start": 2109,
                        "end": 2110,
                        "decorators": [],
                        "name": "A",
                        "optional": false
                      }
                    }
                  ],
                  "id": {
                    "type": "Identifier",
                    "start": 2098,
                    "end": 2100,
                    "decorators": [],
                    "name": "I4",
                    "optional": false
                  }
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "start": 2280,
                  "end": 2456,
                  "body": {
                    "type": "TSInterfaceBody",
                    "start": 2304,
                    "end": 2456,
                    "body": [
                      {
                        "type": "TSPropertySignature",
                        "start": 2318,
                        "end": 2363,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 2318,
                          "end": 2321,
                          "decorators": [],
                          "name": "a10",
                          "optional": false
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2321,
                          "end": 2362,
                          "typeAnnotation": {
                            "type": "TSConstructorType",
                            "start": 2323,
                            "end": 2362,
                            "abstract": false,
                            "params": [
                              {
                                "type": "RestElement",
                                "start": 2347,
                                "end": 2356,
                                "argument": {
                                  "type": "Identifier",
                                  "start": 2350,
                                  "end": 2351,
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false
                                },
                                "decorators": [],
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 2351,
                                  "end": 2356,
                                  "typeAnnotation": {
                                    "type": "TSArrayType",
                                    "start": 2353,
                                    "end": 2356,
                                    "elementType": {
                                      "type": "TSTypeReference",
                                      "start": 2353,
                                      "end": 2354,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 2353,
                                        "end": 2354,
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
                              "start": 2358,
                              "end": 2362,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 2361,
                                "end": 2362,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 2361,
                                  "end": 2362,
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false
                                }
                              }
                            },
                            "typeParameters": {
                              "type": "TSTypeParameterDeclaration",
                              "start": 2327,
                              "end": 2346,
                              "params": [
                                {
                                  "type": "TSTypeParameter",
                                  "start": 2328,
                                  "end": 2345,
                                  "const": false,
                                  "constraint": {
                                    "type": "TSTypeReference",
                                    "start": 2338,
                                    "end": 2345,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 2338,
                                      "end": 2345,
                                      "decorators": [],
                                      "name": "Derived",
                                      "optional": false
                                    }
                                  },
                                  "in": false,
                                  "name": {
                                    "type": "Identifier",
                                    "start": 2328,
                                    "end": 2329,
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
                      "start": 2302,
                      "end": 2303,
                      "expression": {
                        "type": "Identifier",
                        "start": 2302,
                        "end": 2303,
                        "decorators": [],
                        "name": "A",
                        "optional": false
                      }
                    }
                  ],
                  "id": {
                    "type": "Identifier",
                    "start": 2290,
                    "end": 2293,
                    "decorators": [],
                    "name": "I4B",
                    "optional": false
                  }
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "start": 2466,
                  "end": 2668,
                  "body": {
                    "type": "TSInterfaceBody",
                    "start": 2490,
                    "end": 2668,
                    "body": [
                      {
                        "type": "TSPropertySignature",
                        "start": 2504,
                        "end": 2550,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 2504,
                          "end": 2507,
                          "decorators": [],
                          "name": "a11",
                          "optional": false
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2507,
                          "end": 2549,
                          "typeAnnotation": {
                            "type": "TSConstructorType",
                            "start": 2509,
                            "end": 2549,
                            "abstract": false,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 2533,
                                "end": 2537,
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 2534,
                                  "end": 2537,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 2536,
                                    "end": 2537,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 2536,
                                      "end": 2537,
                                      "decorators": [],
                                      "name": "T",
                                      "optional": false
                                    }
                                  }
                                }
                              },
                              {
                                "type": "Identifier",
                                "start": 2539,
                                "end": 2543,
                                "decorators": [],
                                "name": "y",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 2540,
                                  "end": 2543,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 2542,
                                    "end": 2543,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 2542,
                                      "end": 2543,
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
                              "start": 2545,
                              "end": 2549,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 2548,
                                "end": 2549,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 2548,
                                  "end": 2549,
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false
                                }
                              }
                            },
                            "typeParameters": {
                              "type": "TSTypeParameterDeclaration",
                              "start": 2513,
                              "end": 2532,
                              "params": [
                                {
                                  "type": "TSTypeParameter",
                                  "start": 2514,
                                  "end": 2531,
                                  "const": false,
                                  "constraint": {
                                    "type": "TSTypeReference",
                                    "start": 2524,
                                    "end": 2531,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 2524,
                                      "end": 2531,
                                      "decorators": [],
                                      "name": "Derived",
                                      "optional": false
                                    }
                                  },
                                  "in": false,
                                  "name": {
                                    "type": "Identifier",
                                    "start": 2514,
                                    "end": 2515,
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
                      "start": 2488,
                      "end": 2489,
                      "expression": {
                        "type": "Identifier",
                        "start": 2488,
                        "end": 2489,
                        "decorators": [],
                        "name": "A",
                        "optional": false
                      }
                    }
                  ],
                  "id": {
                    "type": "Identifier",
                    "start": 2476,
                    "end": 2479,
                    "decorators": [],
                    "name": "I4C",
                    "optional": false
                  }
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "start": 2678,
                  "end": 2859,
                  "body": {
                    "type": "TSInterfaceBody",
                    "start": 2702,
                    "end": 2859,
                    "body": [
                      {
                        "type": "TSPropertySignature",
                        "start": 2716,
                        "end": 2790,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 2716,
                          "end": 2719,
                          "decorators": [],
                          "name": "a12",
                          "optional": false
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2719,
                          "end": 2789,
                          "typeAnnotation": {
                            "type": "TSConstructorType",
                            "start": 2721,
                            "end": 2789,
                            "abstract": false,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 2753,
                                "end": 2767,
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 2754,
                                  "end": 2767,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 2756,
                                    "end": 2767,
                                    "typeArguments": {
                                      "type": "TSTypeParameterInstantiation",
                                      "start": 2761,
                                      "end": 2767,
                                      "params": [
                                        {
                                          "type": "TSTypeReference",
                                          "start": 2762,
                                          "end": 2766,
                                          "typeName": {
                                            "type": "Identifier",
                                            "start": 2762,
                                            "end": 2766,
                                            "decorators": [],
                                            "name": "Base",
                                            "optional": false
                                          }
                                        }
                                      ]
                                    },
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 2756,
                                      "end": 2761,
                                      "decorators": [],
                                      "name": "Array",
                                      "optional": false
                                    }
                                  }
                                }
                              },
                              {
                                "type": "Identifier",
                                "start": 2769,
                                "end": 2783,
                                "decorators": [],
                                "name": "y",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 2770,
                                  "end": 2783,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 2772,
                                    "end": 2783,
                                    "typeArguments": {
                                      "type": "TSTypeParameterInstantiation",
                                      "start": 2777,
                                      "end": 2783,
                                      "params": [
                                        {
                                          "type": "TSTypeReference",
                                          "start": 2778,
                                          "end": 2782,
                                          "typeName": {
                                            "type": "Identifier",
                                            "start": 2778,
                                            "end": 2782,
                                            "decorators": [],
                                            "name": "Base",
                                            "optional": false
                                          }
                                        }
                                      ]
                                    },
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 2772,
                                      "end": 2777,
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
                              "start": 2785,
                              "end": 2789,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 2788,
                                "end": 2789,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 2788,
                                  "end": 2789,
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false
                                }
                              }
                            },
                            "typeParameters": {
                              "type": "TSTypeParameterDeclaration",
                              "start": 2725,
                              "end": 2752,
                              "params": [
                                {
                                  "type": "TSTypeParameter",
                                  "start": 2726,
                                  "end": 2751,
                                  "const": false,
                                  "constraint": {
                                    "type": "TSTypeReference",
                                    "start": 2736,
                                    "end": 2751,
                                    "typeArguments": {
                                      "type": "TSTypeParameterInstantiation",
                                      "start": 2741,
                                      "end": 2751,
                                      "params": [
                                        {
                                          "type": "TSTypeReference",
                                          "start": 2742,
                                          "end": 2750,
                                          "typeName": {
                                            "type": "Identifier",
                                            "start": 2742,
                                            "end": 2750,
                                            "decorators": [],
                                            "name": "Derived2",
                                            "optional": false
                                          }
                                        }
                                      ]
                                    },
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 2736,
                                      "end": 2741,
                                      "decorators": [],
                                      "name": "Array",
                                      "optional": false
                                    }
                                  },
                                  "in": false,
                                  "name": {
                                    "type": "Identifier",
                                    "start": 2726,
                                    "end": 2727,
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
                      "start": 2700,
                      "end": 2701,
                      "expression": {
                        "type": "Identifier",
                        "start": 2700,
                        "end": 2701,
                        "decorators": [],
                        "name": "A",
                        "optional": false
                      }
                    }
                  ],
                  "id": {
                    "type": "Identifier",
                    "start": 2688,
                    "end": 2691,
                    "decorators": [],
                    "name": "I4E",
                    "optional": false
                  }
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "start": 2869,
                  "end": 3009,
                  "body": {
                    "type": "TSInterfaceBody",
                    "start": 2892,
                    "end": 3009,
                    "body": [
                      {
                        "type": "TSPropertySignature",
                        "start": 2906,
                        "end": 2943,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 2906,
                          "end": 2909,
                          "decorators": [],
                          "name": "a15",
                          "optional": false
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2909,
                          "end": 2942,
                          "typeAnnotation": {
                            "type": "TSConstructorType",
                            "start": 2911,
                            "end": 2942,
                            "abstract": false,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 2919,
                                "end": 2936,
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 2920,
                                  "end": 2936,
                                  "typeAnnotation": {
                                    "type": "TSTypeLiteral",
                                    "start": 2922,
                                    "end": 2936,
                                    "members": [
                                      {
                                        "type": "TSPropertySignature",
                                        "start": 2924,
                                        "end": 2929,
                                        "computed": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 2924,
                                          "end": 2925,
                                          "decorators": [],
                                          "name": "a",
                                          "optional": false
                                        },
                                        "optional": false,
                                        "readonly": false,
                                        "static": false,
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "start": 2925,
                                          "end": 2928,
                                          "typeAnnotation": {
                                            "type": "TSTypeReference",
                                            "start": 2927,
                                            "end": 2928,
                                            "typeName": {
                                              "type": "Identifier",
                                              "start": 2927,
                                              "end": 2928,
                                              "decorators": [],
                                              "name": "T",
                                              "optional": false
                                            }
                                          }
                                        }
                                      },
                                      {
                                        "type": "TSPropertySignature",
                                        "start": 2930,
                                        "end": 2934,
                                        "computed": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 2930,
                                          "end": 2931,
                                          "decorators": [],
                                          "name": "b",
                                          "optional": false
                                        },
                                        "optional": false,
                                        "readonly": false,
                                        "static": false,
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "start": 2931,
                                          "end": 2934,
                                          "typeAnnotation": {
                                            "type": "TSTypeReference",
                                            "start": 2933,
                                            "end": 2934,
                                            "typeName": {
                                              "type": "Identifier",
                                              "start": 2933,
                                              "end": 2934,
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
                              "start": 2938,
                              "end": 2942,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 2941,
                                "end": 2942,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 2941,
                                  "end": 2942,
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false
                                }
                              }
                            },
                            "typeParameters": {
                              "type": "TSTypeParameterDeclaration",
                              "start": 2915,
                              "end": 2918,
                              "params": [
                                {
                                  "type": "TSTypeParameter",
                                  "start": 2916,
                                  "end": 2917,
                                  "const": false,
                                  "in": false,
                                  "name": {
                                    "type": "Identifier",
                                    "start": 2916,
                                    "end": 2917,
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
                      "start": 2890,
                      "end": 2891,
                      "expression": {
                        "type": "Identifier",
                        "start": 2890,
                        "end": 2891,
                        "decorators": [],
                        "name": "A",
                        "optional": false
                      }
                    }
                  ],
                  "id": {
                    "type": "Identifier",
                    "start": 2879,
                    "end": 2881,
                    "decorators": [],
                    "name": "I6",
                    "optional": false
                  }
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "start": 3019,
                  "end": 3197,
                  "body": {
                    "type": "TSInterfaceBody",
                    "start": 3042,
                    "end": 3197,
                    "body": [
                      {
                        "type": "TSPropertySignature",
                        "start": 3056,
                        "end": 3111,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 3056,
                          "end": 3059,
                          "decorators": [],
                          "name": "a15",
                          "optional": false
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 3059,
                          "end": 3110,
                          "typeAnnotation": {
                            "type": "TSConstructorType",
                            "start": 3061,
                            "end": 3110,
                            "abstract": false,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 3082,
                                "end": 3099,
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 3083,
                                  "end": 3099,
                                  "typeAnnotation": {
                                    "type": "TSTypeLiteral",
                                    "start": 3085,
                                    "end": 3099,
                                    "members": [
                                      {
                                        "type": "TSPropertySignature",
                                        "start": 3087,
                                        "end": 3092,
                                        "computed": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 3087,
                                          "end": 3088,
                                          "decorators": [],
                                          "name": "a",
                                          "optional": false
                                        },
                                        "optional": false,
                                        "readonly": false,
                                        "static": false,
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "start": 3088,
                                          "end": 3091,
                                          "typeAnnotation": {
                                            "type": "TSTypeReference",
                                            "start": 3090,
                                            "end": 3091,
                                            "typeName": {
                                              "type": "Identifier",
                                              "start": 3090,
                                              "end": 3091,
                                              "decorators": [],
                                              "name": "T",
                                              "optional": false
                                            }
                                          }
                                        }
                                      },
                                      {
                                        "type": "TSPropertySignature",
                                        "start": 3093,
                                        "end": 3097,
                                        "computed": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 3093,
                                          "end": 3094,
                                          "decorators": [],
                                          "name": "b",
                                          "optional": false
                                        },
                                        "optional": false,
                                        "readonly": false,
                                        "static": false,
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "start": 3094,
                                          "end": 3097,
                                          "typeAnnotation": {
                                            "type": "TSTypeReference",
                                            "start": 3096,
                                            "end": 3097,
                                            "typeName": {
                                              "type": "Identifier",
                                              "start": 3096,
                                              "end": 3097,
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
                              "start": 3101,
                              "end": 3110,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 3104,
                                "end": 3110
                              }
                            },
                            "typeParameters": {
                              "type": "TSTypeParameterDeclaration",
                              "start": 3065,
                              "end": 3081,
                              "params": [
                                {
                                  "type": "TSTypeParameter",
                                  "start": 3066,
                                  "end": 3080,
                                  "const": false,
                                  "constraint": {
                                    "type": "TSTypeReference",
                                    "start": 3076,
                                    "end": 3080,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 3076,
                                      "end": 3080,
                                      "decorators": [],
                                      "name": "Base",
                                      "optional": false
                                    }
                                  },
                                  "in": false,
                                  "name": {
                                    "type": "Identifier",
                                    "start": 3066,
                                    "end": 3067,
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
                      "start": 3040,
                      "end": 3041,
                      "expression": {
                        "type": "Identifier",
                        "start": 3040,
                        "end": 3041,
                        "decorators": [],
                        "name": "A",
                        "optional": false
                      }
                    }
                  ],
                  "id": {
                    "type": "Identifier",
                    "start": 3029,
                    "end": 3031,
                    "decorators": [],
                    "name": "I7",
                    "optional": false
                  }
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "start": 3207,
                  "end": 3453,
                  "body": {
                    "type": "TSInterfaceBody",
                    "start": 3230,
                    "end": 3453,
                    "body": [
                      {
                        "type": "TSPropertySignature",
                        "start": 3403,
                        "end": 3443,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 3403,
                          "end": 3406,
                          "decorators": [],
                          "name": "a16",
                          "optional": false
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 3406,
                          "end": 3442,
                          "typeAnnotation": {
                            "type": "TSConstructorType",
                            "start": 3408,
                            "end": 3442,
                            "abstract": false,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 3416,
                                "end": 3434,
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 3417,
                                  "end": 3434,
                                  "typeAnnotation": {
                                    "type": "TSConstructorType",
                                    "start": 3419,
                                    "end": 3434,
                                    "abstract": false,
                                    "params": [
                                      {
                                        "type": "Identifier",
                                        "start": 3424,
                                        "end": 3428,
                                        "decorators": [],
                                        "name": "a",
                                        "optional": false,
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "start": 3425,
                                          "end": 3428,
                                          "typeAnnotation": {
                                            "type": "TSTypeReference",
                                            "start": 3427,
                                            "end": 3428,
                                            "typeName": {
                                              "type": "Identifier",
                                              "start": 3427,
                                              "end": 3428,
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
                                      "start": 3430,
                                      "end": 3434,
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "start": 3433,
                                        "end": 3434,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 3433,
                                          "end": 3434,
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
                              "start": 3436,
                              "end": 3442,
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "start": 3439,
                                "end": 3442,
                                "elementType": {
                                  "type": "TSTypeReference",
                                  "start": 3439,
                                  "end": 3440,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 3439,
                                    "end": 3440,
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false
                                  }
                                }
                              }
                            },
                            "typeParameters": {
                              "type": "TSTypeParameterDeclaration",
                              "start": 3412,
                              "end": 3415,
                              "params": [
                                {
                                  "type": "TSTypeParameter",
                                  "start": 3413,
                                  "end": 3414,
                                  "const": false,
                                  "in": false,
                                  "name": {
                                    "type": "Identifier",
                                    "start": 3413,
                                    "end": 3414,
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
                      "start": 3228,
                      "end": 3229,
                      "expression": {
                        "type": "Identifier",
                        "start": 3228,
                        "end": 3229,
                        "decorators": [],
                        "name": "A",
                        "optional": false
                      }
                    }
                  ],
                  "id": {
                    "type": "Identifier",
                    "start": 3217,
                    "end": 3219,
                    "decorators": [],
                    "name": "I8",
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
            "start": 3465,
            "end": 4284,
            "body": {
              "type": "TSModuleBlock",
              "start": 3504,
              "end": 4284,
              "body": [
                {
                  "type": "TSInterfaceDeclaration",
                  "start": 3562,
                  "end": 3623,
                  "body": {
                    "type": "TSInterfaceBody",
                    "start": 3574,
                    "end": 3623,
                    "body": [
                      {
                        "type": "TSPropertySignature",
                        "start": 3588,
                        "end": 3613,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 3588,
                          "end": 3590,
                          "decorators": [],
                          "name": "a2",
                          "optional": false
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 3590,
                          "end": 3612,
                          "typeAnnotation": {
                            "type": "TSConstructorType",
                            "start": 3592,
                            "end": 3612,
                            "abstract": false,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 3600,
                                "end": 3604,
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 3601,
                                  "end": 3604,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 3603,
                                    "end": 3604,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 3603,
                                      "end": 3604,
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
                              "start": 3606,
                              "end": 3612,
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "start": 3609,
                                "end": 3612,
                                "elementType": {
                                  "type": "TSTypeReference",
                                  "start": 3609,
                                  "end": 3610,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 3609,
                                    "end": 3610,
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false
                                  }
                                }
                              }
                            },
                            "typeParameters": {
                              "type": "TSTypeParameterDeclaration",
                              "start": 3596,
                              "end": 3599,
                              "params": [
                                {
                                  "type": "TSTypeParameter",
                                  "start": 3597,
                                  "end": 3598,
                                  "const": false,
                                  "in": false,
                                  "name": {
                                    "type": "Identifier",
                                    "start": 3597,
                                    "end": 3598,
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
                    "start": 3572,
                    "end": 3573,
                    "decorators": [],
                    "name": "B",
                    "optional": false
                  }
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "start": 3633,
                  "end": 3719,
                  "body": {
                    "type": "TSInterfaceBody",
                    "start": 3656,
                    "end": 3719,
                    "body": [
                      {
                        "type": "TSPropertySignature",
                        "start": 3670,
                        "end": 3700,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 3670,
                          "end": 3672,
                          "decorators": [],
                          "name": "a2",
                          "optional": false
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 3672,
                          "end": 3699,
                          "typeAnnotation": {
                            "type": "TSConstructorType",
                            "start": 3674,
                            "end": 3699,
                            "abstract": false,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 3682,
                                "end": 3686,
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 3683,
                                  "end": 3686,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 3685,
                                    "end": 3686,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 3685,
                                      "end": 3686,
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
                              "start": 3688,
                              "end": 3699,
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "start": 3691,
                                "end": 3699,
                                "elementType": {
                                  "type": "TSStringKeyword",
                                  "start": 3691,
                                  "end": 3697
                                }
                              }
                            },
                            "typeParameters": {
                              "type": "TSTypeParameterDeclaration",
                              "start": 3678,
                              "end": 3681,
                              "params": [
                                {
                                  "type": "TSTypeParameter",
                                  "start": 3679,
                                  "end": 3680,
                                  "const": false,
                                  "in": false,
                                  "name": {
                                    "type": "Identifier",
                                    "start": 3679,
                                    "end": 3680,
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
                      "start": 3654,
                      "end": 3655,
                      "expression": {
                        "type": "Identifier",
                        "start": 3654,
                        "end": 3655,
                        "decorators": [],
                        "name": "B",
                        "optional": false
                      }
                    }
                  ],
                  "id": {
                    "type": "Identifier",
                    "start": 3643,
                    "end": 3645,
                    "decorators": [],
                    "name": "I6",
                    "optional": false
                  }
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "start": 3777,
                  "end": 3843,
                  "body": {
                    "type": "TSInterfaceBody",
                    "start": 3789,
                    "end": 3843,
                    "body": [
                      {
                        "type": "TSPropertySignature",
                        "start": 3803,
                        "end": 3833,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 3803,
                          "end": 3805,
                          "decorators": [],
                          "name": "a2",
                          "optional": false
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 3805,
                          "end": 3832,
                          "typeAnnotation": {
                            "type": "TSConstructorType",
                            "start": 3807,
                            "end": 3832,
                            "abstract": false,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 3815,
                                "end": 3819,
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 3816,
                                  "end": 3819,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 3818,
                                    "end": 3819,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 3818,
                                      "end": 3819,
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
                              "start": 3821,
                              "end": 3832,
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "start": 3824,
                                "end": 3832,
                                "elementType": {
                                  "type": "TSStringKeyword",
                                  "start": 3824,
                                  "end": 3830
                                }
                              }
                            },
                            "typeParameters": {
                              "type": "TSTypeParameterDeclaration",
                              "start": 3811,
                              "end": 3814,
                              "params": [
                                {
                                  "type": "TSTypeParameter",
                                  "start": 3812,
                                  "end": 3813,
                                  "const": false,
                                  "in": false,
                                  "name": {
                                    "type": "Identifier",
                                    "start": 3812,
                                    "end": 3813,
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
                    "start": 3787,
                    "end": 3788,
                    "decorators": [],
                    "name": "C",
                    "optional": false
                  }
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "start": 3853,
                  "end": 3934,
                  "body": {
                    "type": "TSInterfaceBody",
                    "start": 3876,
                    "end": 3934,
                    "body": [
                      {
                        "type": "TSPropertySignature",
                        "start": 3890,
                        "end": 3915,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 3890,
                          "end": 3892,
                          "decorators": [],
                          "name": "a2",
                          "optional": false
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 3892,
                          "end": 3914,
                          "typeAnnotation": {
                            "type": "TSConstructorType",
                            "start": 3894,
                            "end": 3914,
                            "abstract": false,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 3902,
                                "end": 3906,
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 3903,
                                  "end": 3906,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 3905,
                                    "end": 3906,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 3905,
                                      "end": 3906,
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
                              "start": 3908,
                              "end": 3914,
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "start": 3911,
                                "end": 3914,
                                "elementType": {
                                  "type": "TSTypeReference",
                                  "start": 3911,
                                  "end": 3912,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 3911,
                                    "end": 3912,
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false
                                  }
                                }
                              }
                            },
                            "typeParameters": {
                              "type": "TSTypeParameterDeclaration",
                              "start": 3898,
                              "end": 3901,
                              "params": [
                                {
                                  "type": "TSTypeParameter",
                                  "start": 3899,
                                  "end": 3900,
                                  "const": false,
                                  "in": false,
                                  "name": {
                                    "type": "Identifier",
                                    "start": 3899,
                                    "end": 3900,
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
                      "start": 3874,
                      "end": 3875,
                      "expression": {
                        "type": "Identifier",
                        "start": 3874,
                        "end": 3875,
                        "decorators": [],
                        "name": "C",
                        "optional": false
                      }
                    }
                  ],
                  "id": {
                    "type": "Identifier",
                    "start": 3863,
                    "end": 3865,
                    "decorators": [],
                    "name": "I7",
                    "optional": false
                  }
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "start": 4009,
                  "end": 4177,
                  "body": {
                    "type": "TSInterfaceBody",
                    "start": 4021,
                    "end": 4177,
                    "body": [
                      {
                        "type": "TSPropertySignature",
                        "start": 4035,
                        "end": 4167,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 4035,
                          "end": 4038,
                          "decorators": [],
                          "name": "a14",
                          "optional": false
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 4038,
                          "end": 4166,
                          "typeAnnotation": {
                            "type": "TSTypeLiteral",
                            "start": 4040,
                            "end": 4166,
                            "members": [
                              {
                                "type": "TSConstructSignatureDeclaration",
                                "start": 4058,
                                "end": 4098,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "start": 4082,
                                    "end": 4086,
                                    "decorators": [],
                                    "name": "x",
                                    "optional": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 4083,
                                      "end": 4086,
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "start": 4085,
                                        "end": 4086,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 4085,
                                          "end": 4086,
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
                                  "start": 4087,
                                  "end": 4097,
                                  "typeAnnotation": {
                                    "type": "TSArrayType",
                                    "start": 4089,
                                    "end": 4097,
                                    "elementType": {
                                      "type": "TSNumberKeyword",
                                      "start": 4089,
                                      "end": 4095
                                    }
                                  }
                                },
                                "typeParameters": {
                                  "type": "TSTypeParameterDeclaration",
                                  "start": 4062,
                                  "end": 4081,
                                  "params": [
                                    {
                                      "type": "TSTypeParameter",
                                      "start": 4063,
                                      "end": 4080,
                                      "const": false,
                                      "constraint": {
                                        "type": "TSTypeReference",
                                        "start": 4073,
                                        "end": 4080,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 4073,
                                          "end": 4080,
                                          "decorators": [],
                                          "name": "Derived",
                                          "optional": false
                                        }
                                      },
                                      "in": false,
                                      "name": {
                                        "type": "Identifier",
                                        "start": 4063,
                                        "end": 4064,
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
                                "type": "TSConstructSignatureDeclaration",
                                "start": 4115,
                                "end": 4152,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "start": 4136,
                                    "end": 4140,
                                    "decorators": [],
                                    "name": "x",
                                    "optional": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 4137,
                                      "end": 4140,
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "start": 4139,
                                        "end": 4140,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 4139,
                                          "end": 4140,
                                          "decorators": [],
                                          "name": "U",
                                          "optional": false
                                        }
                                      }
                                    }
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "start": 4141,
                                  "end": 4151,
                                  "typeAnnotation": {
                                    "type": "TSArrayType",
                                    "start": 4143,
                                    "end": 4151,
                                    "elementType": {
                                      "type": "TSNumberKeyword",
                                      "start": 4143,
                                      "end": 4149
                                    }
                                  }
                                },
                                "typeParameters": {
                                  "type": "TSTypeParameterDeclaration",
                                  "start": 4119,
                                  "end": 4135,
                                  "params": [
                                    {
                                      "type": "TSTypeParameter",
                                      "start": 4120,
                                      "end": 4134,
                                      "const": false,
                                      "constraint": {
                                        "type": "TSTypeReference",
                                        "start": 4130,
                                        "end": 4134,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 4130,
                                          "end": 4134,
                                          "decorators": [],
                                          "name": "Base",
                                          "optional": false
                                        }
                                      },
                                      "in": false,
                                      "name": {
                                        "type": "Identifier",
                                        "start": 4120,
                                        "end": 4121,
                                        "decorators": [],
                                        "name": "U",
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
                    ]
                  },
                  "declare": false,
                  "extends": [],
                  "id": {
                    "type": "Identifier",
                    "start": 4019,
                    "end": 4020,
                    "decorators": [],
                    "name": "D",
                    "optional": false
                  }
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "start": 4187,
                  "end": 4278,
                  "body": {
                    "type": "TSInterfaceBody",
                    "start": 4210,
                    "end": 4278,
                    "body": [
                      {
                        "type": "TSPropertySignature",
                        "start": 4224,
                        "end": 4268,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 4224,
                          "end": 4227,
                          "decorators": [],
                          "name": "a14",
                          "optional": false
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 4227,
                          "end": 4267,
                          "typeAnnotation": {
                            "type": "TSConstructorType",
                            "start": 4229,
                            "end": 4267,
                            "abstract": false,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 4250,
                                "end": 4254,
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 4251,
                                  "end": 4254,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 4253,
                                    "end": 4254,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 4253,
                                      "end": 4254,
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
                              "start": 4256,
                              "end": 4267,
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "start": 4259,
                                "end": 4267,
                                "elementType": {
                                  "type": "TSNumberKeyword",
                                  "start": 4259,
                                  "end": 4265
                                }
                              }
                            },
                            "typeParameters": {
                              "type": "TSTypeParameterDeclaration",
                              "start": 4233,
                              "end": 4249,
                              "params": [
                                {
                                  "type": "TSTypeParameter",
                                  "start": 4234,
                                  "end": 4248,
                                  "const": false,
                                  "constraint": {
                                    "type": "TSTypeReference",
                                    "start": 4244,
                                    "end": 4248,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 4244,
                                      "end": 4248,
                                      "decorators": [],
                                      "name": "Base",
                                      "optional": false
                                    }
                                  },
                                  "in": false,
                                  "name": {
                                    "type": "Identifier",
                                    "start": 4234,
                                    "end": 4235,
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
                      "start": 4208,
                      "end": 4209,
                      "expression": {
                        "type": "Identifier",
                        "start": 4208,
                        "end": 4209,
                        "decorators": [],
                        "name": "D",
                        "optional": false
                      }
                    }
                  ],
                  "id": {
                    "type": "Identifier",
                    "start": 4197,
                    "end": 4199,
                    "decorators": [],
                    "name": "I8",
                    "optional": false
                  }
                }
              ]
            },
            "declare": false,
            "global": false,
            "id": {
              "type": "Identifier",
              "start": 3472,
              "end": 3503,
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
  "sourceType": "script"
}
```
