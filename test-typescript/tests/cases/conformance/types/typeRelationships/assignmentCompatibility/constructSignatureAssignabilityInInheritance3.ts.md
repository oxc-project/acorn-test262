__ESTREE_TEST__:PASS:
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
      "id": {
        "type": "Identifier",
        "start": 124,
        "end": 130,
        "name": "Errors",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 131,
        "end": 4286,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 137,
            "end": 164,
            "id": {
              "type": "Identifier",
              "start": 143,
              "end": 147,
              "name": "Base",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 148,
              "end": 164,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 150,
                  "end": 162,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 150,
                    "end": 153,
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
                    "start": 153,
                    "end": 161,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 155,
                      "end": 161
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
            "start": 169,
            "end": 212,
            "id": {
              "type": "Identifier",
              "start": 175,
              "end": 182,
              "name": "Derived",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": {
              "type": "Identifier",
              "start": 191,
              "end": 195,
              "name": "Base",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "body": {
              "type": "ClassBody",
              "start": 196,
              "end": 212,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 198,
                  "end": 210,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 198,
                    "end": 201,
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
                    "start": 201,
                    "end": 209,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 203,
                      "end": 209
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
            "start": 217,
            "end": 264,
            "id": {
              "type": "Identifier",
              "start": 223,
              "end": 231,
              "name": "Derived2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": {
              "type": "Identifier",
              "start": 240,
              "end": 247,
              "name": "Derived",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "body": {
              "type": "ClassBody",
              "start": 248,
              "end": 264,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 250,
                  "end": 262,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 250,
                    "end": 253,
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
                    "start": 253,
                    "end": 261,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 255,
                      "end": 261
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
            "start": 269,
            "end": 318,
            "id": {
              "type": "Identifier",
              "start": 275,
              "end": 287,
              "name": "OtherDerived",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": {
              "type": "Identifier",
              "start": 296,
              "end": 300,
              "name": "Base",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "body": {
              "type": "ClassBody",
              "start": 301,
              "end": 318,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 303,
                  "end": 316,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 303,
                    "end": 307,
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
                    "start": 307,
                    "end": 315,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 309,
                      "end": 315
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
            "type": "TSModuleDeclaration",
            "start": 324,
            "end": 3459,
            "id": {
              "type": "Identifier",
              "start": 331,
              "end": 365,
              "name": "WithNonGenericSignaturesInBaseType",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "body": {
              "type": "TSModuleBlock",
              "start": 366,
              "end": 3459,
              "body": [
                {
                  "type": "TSInterfaceDeclaration",
                  "start": 430,
                  "end": 1500,
                  "id": {
                    "type": "Identifier",
                    "start": 440,
                    "end": 441,
                    "name": "A",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "extends": [],
                  "typeParameters": null,
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
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 456,
                          "end": 458,
                          "name": "a2",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 458,
                          "end": 487,
                          "typeAnnotation": {
                            "type": "TSConstructorType",
                            "start": 460,
                            "end": 487,
                            "abstract": false,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 465,
                                "end": 474,
                                "name": "x",
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 466,
                                  "end": 474,
                                  "typeAnnotation": {
                                    "type": "TSNumberKeyword",
                                    "start": 468,
                                    "end": 474
                                  }
                                },
                                "decorators": [],
                                "optional": false
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
                        },
                        "accessibility": null,
                        "static": false
                      },
                      {
                        "type": "TSPropertySignature",
                        "start": 501,
                        "end": 562,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 501,
                          "end": 503,
                          "name": "a7",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 503,
                          "end": 561,
                          "typeAnnotation": {
                            "type": "TSConstructorType",
                            "start": 505,
                            "end": 561,
                            "abstract": false,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 510,
                                "end": 535,
                                "name": "x",
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 511,
                                  "end": 535,
                                  "typeAnnotation": {
                                    "type": "TSFunctionType",
                                    "start": 513,
                                    "end": 535,
                                    "typeParameters": null,
                                    "params": [
                                      {
                                        "type": "Identifier",
                                        "start": 514,
                                        "end": 523,
                                        "name": "arg",
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
                              "start": 537,
                              "end": 561,
                              "typeAnnotation": {
                                "type": "TSFunctionType",
                                "start": 540,
                                "end": 561,
                                "typeParameters": null,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "start": 541,
                                    "end": 548,
                                    "name": "r",
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
                                      "name": "Derived2",
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
                        "start": 575,
                        "end": 663,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 575,
                          "end": 577,
                          "name": "a8",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 577,
                          "end": 662,
                          "typeAnnotation": {
                            "type": "TSConstructorType",
                            "start": 579,
                            "end": 662,
                            "abstract": false,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 584,
                                "end": 609,
                                "name": "x",
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 585,
                                  "end": 609,
                                  "typeAnnotation": {
                                    "type": "TSFunctionType",
                                    "start": 587,
                                    "end": 609,
                                    "typeParameters": null,
                                    "params": [
                                      {
                                        "type": "Identifier",
                                        "start": 588,
                                        "end": 597,
                                        "name": "arg",
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
                                "start": 611,
                                "end": 637,
                                "name": "y",
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 612,
                                  "end": 637,
                                  "typeAnnotation": {
                                    "type": "TSFunctionType",
                                    "start": 614,
                                    "end": 637,
                                    "typeParameters": null,
                                    "params": [
                                      {
                                        "type": "Identifier",
                                        "start": 615,
                                        "end": 625,
                                        "name": "arg2",
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
                              "start": 639,
                              "end": 662,
                              "typeAnnotation": {
                                "type": "TSFunctionType",
                                "start": 642,
                                "end": 662,
                                "typeParameters": null,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "start": 643,
                                    "end": 650,
                                    "name": "r",
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
                        "start": 676,
                        "end": 708,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 676,
                          "end": 679,
                          "name": "a10",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 679,
                          "end": 707,
                          "typeAnnotation": {
                            "type": "TSConstructorType",
                            "start": 681,
                            "end": 707,
                            "abstract": false,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "RestElement",
                                "start": 686,
                                "end": 698,
                                "argument": {
                                  "type": "Identifier",
                                  "start": 689,
                                  "end": 690,
                                  "name": "x",
                                  "typeAnnotation": null,
                                  "decorators": [],
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
                                        "name": "Base",
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
                        "start": 721,
                        "end": 792,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 721,
                          "end": 724,
                          "name": "a11",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 724,
                          "end": 791,
                          "typeAnnotation": {
                            "type": "TSConstructorType",
                            "start": 726,
                            "end": 791,
                            "abstract": false,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 731,
                                "end": 749,
                                "name": "x",
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
                                        "optional": false,
                                        "readonly": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 736,
                                          "end": 739,
                                          "name": "foo",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "start": 739,
                                          "end": 747,
                                          "typeAnnotation": {
                                            "type": "TSStringKeyword",
                                            "start": 741,
                                            "end": 747
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
                                "start": 751,
                                "end": 782,
                                "name": "y",
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
                                        "optional": false,
                                        "readonly": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 756,
                                          "end": 759,
                                          "name": "foo",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "start": 759,
                                          "end": 767,
                                          "typeAnnotation": {
                                            "type": "TSStringKeyword",
                                            "start": 761,
                                            "end": 767
                                          }
                                        },
                                        "accessibility": null,
                                        "static": false
                                      },
                                      {
                                        "type": "TSPropertySignature",
                                        "start": 769,
                                        "end": 780,
                                        "computed": false,
                                        "optional": false,
                                        "readonly": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 769,
                                          "end": 772,
                                          "name": "bar",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "start": 772,
                                          "end": 780,
                                          "typeAnnotation": {
                                            "type": "TSStringKeyword",
                                            "start": 774,
                                            "end": 780
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
                        "start": 805,
                        "end": 869,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 805,
                          "end": 808,
                          "name": "a12",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 808,
                          "end": 868,
                          "typeAnnotation": {
                            "type": "TSConstructorType",
                            "start": 810,
                            "end": 868,
                            "abstract": false,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 815,
                                "end": 829,
                                "name": "x",
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 816,
                                  "end": 829,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 818,
                                    "end": 829,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 818,
                                      "end": 823,
                                      "name": "Array",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
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
                                "start": 831,
                                "end": 849,
                                "name": "y",
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 832,
                                  "end": 849,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 834,
                                    "end": 849,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 834,
                                      "end": 839,
                                      "name": "Array",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
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
                              "start": 851,
                              "end": 868,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 854,
                                "end": 868,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 854,
                                  "end": 859,
                                  "name": "Array",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
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
                        "start": 882,
                        "end": 989,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 882,
                          "end": 885,
                          "name": "a14",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
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
                                "typeParameters": null,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "start": 910,
                                    "end": 919,
                                    "name": "x",
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 911,
                                      "end": 919,
                                      "typeAnnotation": {
                                        "type": "TSNumberKeyword",
                                        "start": 913,
                                        "end": 919
                                      }
                                    },
                                    "decorators": [],
                                    "optional": false
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
                                "typeParameters": null,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "start": 953,
                                    "end": 962,
                                    "name": "x",
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 954,
                                      "end": 962,
                                      "typeAnnotation": {
                                        "type": "TSStringKeyword",
                                        "start": 956,
                                        "end": 962
                                      }
                                    },
                                    "decorators": [],
                                    "optional": false
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
                        },
                        "accessibility": null,
                        "static": false
                      },
                      {
                        "type": "TSPropertySignature",
                        "start": 1002,
                        "end": 1051,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 1002,
                          "end": 1005,
                          "name": "a15",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1005,
                          "end": 1050,
                          "typeAnnotation": {
                            "type": "TSConstructorType",
                            "start": 1007,
                            "end": 1050,
                            "abstract": false,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 1012,
                                "end": 1039,
                                "name": "x",
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
                                        "optional": false,
                                        "readonly": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 1017,
                                          "end": 1018,
                                          "name": "a",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "start": 1018,
                                          "end": 1026,
                                          "typeAnnotation": {
                                            "type": "TSStringKeyword",
                                            "start": 1020,
                                            "end": 1026
                                          }
                                        },
                                        "accessibility": null,
                                        "static": false
                                      },
                                      {
                                        "type": "TSPropertySignature",
                                        "start": 1028,
                                        "end": 1037,
                                        "computed": false,
                                        "optional": false,
                                        "readonly": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 1028,
                                          "end": 1029,
                                          "name": "b",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "start": 1029,
                                          "end": 1037,
                                          "typeAnnotation": {
                                            "type": "TSNumberKeyword",
                                            "start": 1031,
                                            "end": 1037
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
                              "start": 1041,
                              "end": 1050,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 1044,
                                "end": 1050
                              }
                            }
                          }
                        },
                        "accessibility": null,
                        "static": false
                      },
                      {
                        "type": "TSPropertySignature",
                        "start": 1064,
                        "end": 1490,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 1064,
                          "end": 1067,
                          "name": "a16",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
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
                                "typeParameters": null,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "start": 1198,
                                    "end": 1311,
                                    "name": "x",
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
                                            "typeParameters": null,
                                            "params": [
                                              {
                                                "type": "Identifier",
                                                "start": 1228,
                                                "end": 1237,
                                                "name": "a",
                                                "typeAnnotation": {
                                                  "type": "TSTypeAnnotation",
                                                  "start": 1229,
                                                  "end": 1237,
                                                  "typeAnnotation": {
                                                    "type": "TSNumberKeyword",
                                                    "start": 1231,
                                                    "end": 1237
                                                  }
                                                },
                                                "decorators": [],
                                                "optional": false
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
                                            "typeParameters": null,
                                            "params": [
                                              {
                                                "type": "Identifier",
                                                "start": 1273,
                                                "end": 1283,
                                                "name": "a",
                                                "typeAnnotation": {
                                                  "type": "TSTypeAnnotation",
                                                  "start": 1275,
                                                  "end": 1283,
                                                  "typeAnnotation": {
                                                    "type": "TSNumberKeyword",
                                                    "start": 1277,
                                                    "end": 1283
                                                  }
                                                },
                                                "decorators": [],
                                                "optional": true
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
                                    },
                                    "decorators": [],
                                    "optional": false
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
                                "typeParameters": null,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "start": 1345,
                                    "end": 1462,
                                    "name": "x",
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
                                            "typeParameters": null,
                                            "params": [
                                              {
                                                "type": "Identifier",
                                                "start": 1375,
                                                "end": 1385,
                                                "name": "a",
                                                "typeAnnotation": {
                                                  "type": "TSTypeAnnotation",
                                                  "start": 1376,
                                                  "end": 1385,
                                                  "typeAnnotation": {
                                                    "type": "TSBooleanKeyword",
                                                    "start": 1378,
                                                    "end": 1385
                                                  }
                                                },
                                                "decorators": [],
                                                "optional": false
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
                                            "typeParameters": null,
                                            "params": [
                                              {
                                                "type": "Identifier",
                                                "start": 1422,
                                                "end": 1433,
                                                "name": "a",
                                                "typeAnnotation": {
                                                  "type": "TSTypeAnnotation",
                                                  "start": 1424,
                                                  "end": 1433,
                                                  "typeAnnotation": {
                                                    "type": "TSBooleanKeyword",
                                                    "start": 1426,
                                                    "end": 1433
                                                  }
                                                },
                                                "decorators": [],
                                                "optional": true
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
                                    },
                                    "decorators": [],
                                    "optional": false
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
                  "start": 1510,
                  "end": 1695,
                  "id": {
                    "type": "Identifier",
                    "start": 1520,
                    "end": 1521,
                    "name": "I",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "extends": [
                    {
                      "type": "TSInterfaceHeritage",
                      "start": 1530,
                      "end": 1531,
                      "expression": {
                        "type": "Identifier",
                        "start": 1530,
                        "end": 1531,
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
                    "start": 1532,
                    "end": 1695,
                    "body": [
                      {
                        "type": "TSPropertySignature",
                        "start": 1546,
                        "end": 1574,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 1546,
                          "end": 1548,
                          "name": "a2",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1548,
                          "end": 1573,
                          "typeAnnotation": {
                            "type": "TSConstructorType",
                            "start": 1550,
                            "end": 1573,
                            "abstract": false,
                            "typeParameters": {
                              "type": "TSTypeParameterDeclaration",
                              "start": 1554,
                              "end": 1560,
                              "params": [
                                {
                                  "type": "TSTypeParameter",
                                  "start": 1555,
                                  "end": 1556,
                                  "name": {
                                    "type": "Identifier",
                                    "start": 1555,
                                    "end": 1556,
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
                                  "start": 1558,
                                  "end": 1559,
                                  "name": {
                                    "type": "Identifier",
                                    "start": 1558,
                                    "end": 1559,
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
                                "start": 1561,
                                "end": 1565,
                                "name": "x",
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
                  "start": 1705,
                  "end": 1855,
                  "id": {
                    "type": "Identifier",
                    "start": 1715,
                    "end": 1717,
                    "name": "I2",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "extends": [
                    {
                      "type": "TSInterfaceHeritage",
                      "start": 1732,
                      "end": 1733,
                      "expression": {
                        "type": "Identifier",
                        "start": 1732,
                        "end": 1733,
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
                    "start": 1717,
                    "end": 1723,
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "start": 1718,
                        "end": 1719,
                        "name": {
                          "type": "Identifier",
                          "start": 1718,
                          "end": 1719,
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
                        "start": 1721,
                        "end": 1722,
                        "name": {
                          "type": "Identifier",
                          "start": 1721,
                          "end": 1722,
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
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 1748,
                          "end": 1750,
                          "name": "a2",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1750,
                          "end": 1769,
                          "typeAnnotation": {
                            "type": "TSConstructorType",
                            "start": 1752,
                            "end": 1769,
                            "abstract": false,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 1757,
                                "end": 1761,
                                "name": "x",
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
                  "start": 1865,
                  "end": 2078,
                  "id": {
                    "type": "Identifier",
                    "start": 1875,
                    "end": 1877,
                    "name": "I3",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "extends": [
                    {
                      "type": "TSInterfaceHeritage",
                      "start": 1886,
                      "end": 1887,
                      "expression": {
                        "type": "Identifier",
                        "start": 1886,
                        "end": 1887,
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
                    "start": 1888,
                    "end": 2078,
                    "body": [
                      {
                        "type": "TSPropertySignature",
                        "start": 1971,
                        "end": 2068,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 1971,
                          "end": 1973,
                          "name": "a7",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1973,
                          "end": 2067,
                          "typeAnnotation": {
                            "type": "TSConstructorType",
                            "start": 1975,
                            "end": 2067,
                            "abstract": false,
                            "typeParameters": {
                              "type": "TSTypeParameterDeclaration",
                              "start": 1979,
                              "end": 2034,
                              "params": [
                                {
                                  "type": "TSTypeParameter",
                                  "start": 1980,
                                  "end": 1994,
                                  "name": {
                                    "type": "Identifier",
                                    "start": 1980,
                                    "end": 1981,
                                    "name": "T",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "constraint": {
                                    "type": "TSTypeReference",
                                    "start": 1990,
                                    "end": 1994,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 1990,
                                      "end": 1994,
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
                                  "start": 1996,
                                  "end": 2013,
                                  "name": {
                                    "type": "Identifier",
                                    "start": 1996,
                                    "end": 1997,
                                    "name": "U",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "constraint": {
                                    "type": "TSTypeReference",
                                    "start": 2006,
                                    "end": 2013,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 2006,
                                      "end": 2013,
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
                                },
                                {
                                  "type": "TSTypeParameter",
                                  "start": 2015,
                                  "end": 2033,
                                  "name": {
                                    "type": "Identifier",
                                    "start": 2015,
                                    "end": 2016,
                                    "name": "V",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "constraint": {
                                    "type": "TSTypeReference",
                                    "start": 2025,
                                    "end": 2033,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 2025,
                                      "end": 2033,
                                      "name": "Derived2",
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
                                "start": 2035,
                                "end": 2051,
                                "name": "x",
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 2036,
                                  "end": 2051,
                                  "typeAnnotation": {
                                    "type": "TSFunctionType",
                                    "start": 2038,
                                    "end": 2051,
                                    "typeParameters": null,
                                    "params": [
                                      {
                                        "type": "Identifier",
                                        "start": 2039,
                                        "end": 2045,
                                        "name": "arg",
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
                              "start": 2053,
                              "end": 2067,
                              "typeAnnotation": {
                                "type": "TSFunctionType",
                                "start": 2056,
                                "end": 2067,
                                "typeParameters": null,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "start": 2057,
                                    "end": 2061,
                                    "name": "r",
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
                                      "name": "V",
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
                      }
                    ]
                  },
                  "declare": false
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "start": 2088,
                  "end": 2270,
                  "id": {
                    "type": "Identifier",
                    "start": 2098,
                    "end": 2100,
                    "name": "I4",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "extends": [
                    {
                      "type": "TSInterfaceHeritage",
                      "start": 2109,
                      "end": 2110,
                      "expression": {
                        "type": "Identifier",
                        "start": 2109,
                        "end": 2110,
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
                    "start": 2111,
                    "end": 2270,
                    "body": [
                      {
                        "type": "TSPropertySignature",
                        "start": 2125,
                        "end": 2236,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 2125,
                          "end": 2127,
                          "name": "a8",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2127,
                          "end": 2235,
                          "typeAnnotation": {
                            "type": "TSConstructorType",
                            "start": 2129,
                            "end": 2235,
                            "abstract": false,
                            "typeParameters": {
                              "type": "TSTypeParameterDeclaration",
                              "start": 2133,
                              "end": 2168,
                              "params": [
                                {
                                  "type": "TSTypeParameter",
                                  "start": 2134,
                                  "end": 2148,
                                  "name": {
                                    "type": "Identifier",
                                    "start": 2134,
                                    "end": 2135,
                                    "name": "T",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "constraint": {
                                    "type": "TSTypeReference",
                                    "start": 2144,
                                    "end": 2148,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 2144,
                                      "end": 2148,
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
                                  "start": 2150,
                                  "end": 2167,
                                  "name": {
                                    "type": "Identifier",
                                    "start": 2150,
                                    "end": 2151,
                                    "name": "U",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "constraint": {
                                    "type": "TSTypeReference",
                                    "start": 2160,
                                    "end": 2167,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 2160,
                                      "end": 2167,
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
                                "start": 2169,
                                "end": 2185,
                                "name": "x",
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 2170,
                                  "end": 2185,
                                  "typeAnnotation": {
                                    "type": "TSFunctionType",
                                    "start": 2172,
                                    "end": 2185,
                                    "typeParameters": null,
                                    "params": [
                                      {
                                        "type": "Identifier",
                                        "start": 2173,
                                        "end": 2179,
                                        "name": "arg",
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
                                "start": 2187,
                                "end": 2219,
                                "name": "y",
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 2188,
                                  "end": 2219,
                                  "typeAnnotation": {
                                    "type": "TSFunctionType",
                                    "start": 2190,
                                    "end": 2219,
                                    "typeParameters": null,
                                    "params": [
                                      {
                                        "type": "Identifier",
                                        "start": 2191,
                                        "end": 2213,
                                        "name": "arg2",
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
                                                "optional": false,
                                                "readonly": false,
                                                "key": {
                                                  "type": "Identifier",
                                                  "start": 2199,
                                                  "end": 2202,
                                                  "name": "foo",
                                                  "typeAnnotation": null,
                                                  "decorators": [],
                                                  "optional": false
                                                },
                                                "typeAnnotation": {
                                                  "type": "TSTypeAnnotation",
                                                  "start": 2202,
                                                  "end": 2210,
                                                  "typeAnnotation": {
                                                    "type": "TSNumberKeyword",
                                                    "start": 2204,
                                                    "end": 2210
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
                              "start": 2221,
                              "end": 2235,
                              "typeAnnotation": {
                                "type": "TSFunctionType",
                                "start": 2224,
                                "end": 2235,
                                "typeParameters": null,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "start": 2225,
                                    "end": 2229,
                                    "name": "r",
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
                      }
                    ]
                  },
                  "declare": false
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "start": 2280,
                  "end": 2456,
                  "id": {
                    "type": "Identifier",
                    "start": 2290,
                    "end": 2293,
                    "name": "I4B",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "extends": [
                    {
                      "type": "TSInterfaceHeritage",
                      "start": 2302,
                      "end": 2303,
                      "expression": {
                        "type": "Identifier",
                        "start": 2302,
                        "end": 2303,
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
                    "start": 2304,
                    "end": 2456,
                    "body": [
                      {
                        "type": "TSPropertySignature",
                        "start": 2318,
                        "end": 2363,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 2318,
                          "end": 2321,
                          "name": "a10",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2321,
                          "end": 2362,
                          "typeAnnotation": {
                            "type": "TSConstructorType",
                            "start": 2323,
                            "end": 2362,
                            "abstract": false,
                            "typeParameters": {
                              "type": "TSTypeParameterDeclaration",
                              "start": 2327,
                              "end": 2346,
                              "params": [
                                {
                                  "type": "TSTypeParameter",
                                  "start": 2328,
                                  "end": 2345,
                                  "name": {
                                    "type": "Identifier",
                                    "start": 2328,
                                    "end": 2329,
                                    "name": "T",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "constraint": {
                                    "type": "TSTypeReference",
                                    "start": 2338,
                                    "end": 2345,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 2338,
                                      "end": 2345,
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
                                "start": 2347,
                                "end": 2356,
                                "argument": {
                                  "type": "Identifier",
                                  "start": 2350,
                                  "end": 2351,
                                  "name": "x",
                                  "typeAnnotation": null,
                                  "decorators": [],
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
                  "start": 2466,
                  "end": 2668,
                  "id": {
                    "type": "Identifier",
                    "start": 2476,
                    "end": 2479,
                    "name": "I4C",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "extends": [
                    {
                      "type": "TSInterfaceHeritage",
                      "start": 2488,
                      "end": 2489,
                      "expression": {
                        "type": "Identifier",
                        "start": 2488,
                        "end": 2489,
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
                    "start": 2490,
                    "end": 2668,
                    "body": [
                      {
                        "type": "TSPropertySignature",
                        "start": 2504,
                        "end": 2550,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 2504,
                          "end": 2507,
                          "name": "a11",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2507,
                          "end": 2549,
                          "typeAnnotation": {
                            "type": "TSConstructorType",
                            "start": 2509,
                            "end": 2549,
                            "abstract": false,
                            "typeParameters": {
                              "type": "TSTypeParameterDeclaration",
                              "start": 2513,
                              "end": 2532,
                              "params": [
                                {
                                  "type": "TSTypeParameter",
                                  "start": 2514,
                                  "end": 2531,
                                  "name": {
                                    "type": "Identifier",
                                    "start": 2514,
                                    "end": 2515,
                                    "name": "T",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "constraint": {
                                    "type": "TSTypeReference",
                                    "start": 2524,
                                    "end": 2531,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 2524,
                                      "end": 2531,
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
                                "start": 2533,
                                "end": 2537,
                                "name": "x",
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
                                "start": 2539,
                                "end": 2543,
                                "name": "y",
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
                  "start": 2678,
                  "end": 2859,
                  "id": {
                    "type": "Identifier",
                    "start": 2688,
                    "end": 2691,
                    "name": "I4E",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "extends": [
                    {
                      "type": "TSInterfaceHeritage",
                      "start": 2700,
                      "end": 2701,
                      "expression": {
                        "type": "Identifier",
                        "start": 2700,
                        "end": 2701,
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
                    "start": 2702,
                    "end": 2859,
                    "body": [
                      {
                        "type": "TSPropertySignature",
                        "start": 2716,
                        "end": 2790,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 2716,
                          "end": 2719,
                          "name": "a12",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2719,
                          "end": 2789,
                          "typeAnnotation": {
                            "type": "TSConstructorType",
                            "start": 2721,
                            "end": 2789,
                            "abstract": false,
                            "typeParameters": {
                              "type": "TSTypeParameterDeclaration",
                              "start": 2725,
                              "end": 2752,
                              "params": [
                                {
                                  "type": "TSTypeParameter",
                                  "start": 2726,
                                  "end": 2751,
                                  "name": {
                                    "type": "Identifier",
                                    "start": 2726,
                                    "end": 2727,
                                    "name": "T",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "constraint": {
                                    "type": "TSTypeReference",
                                    "start": 2736,
                                    "end": 2751,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 2736,
                                      "end": 2741,
                                      "name": "Array",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
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
                                            "name": "Derived2",
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
                                "start": 2753,
                                "end": 2767,
                                "name": "x",
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 2754,
                                  "end": 2767,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 2756,
                                    "end": 2767,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 2756,
                                      "end": 2761,
                                      "name": "Array",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
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
                                "start": 2769,
                                "end": 2783,
                                "name": "y",
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 2770,
                                  "end": 2783,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 2772,
                                    "end": 2783,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 2772,
                                      "end": 2777,
                                      "name": "Array",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
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
                  "start": 2869,
                  "end": 3009,
                  "id": {
                    "type": "Identifier",
                    "start": 2879,
                    "end": 2881,
                    "name": "I6",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "extends": [
                    {
                      "type": "TSInterfaceHeritage",
                      "start": 2890,
                      "end": 2891,
                      "expression": {
                        "type": "Identifier",
                        "start": 2890,
                        "end": 2891,
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
                    "start": 2892,
                    "end": 3009,
                    "body": [
                      {
                        "type": "TSPropertySignature",
                        "start": 2906,
                        "end": 2943,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 2906,
                          "end": 2909,
                          "name": "a15",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2909,
                          "end": 2942,
                          "typeAnnotation": {
                            "type": "TSConstructorType",
                            "start": 2911,
                            "end": 2942,
                            "abstract": false,
                            "typeParameters": {
                              "type": "TSTypeParameterDeclaration",
                              "start": 2915,
                              "end": 2918,
                              "params": [
                                {
                                  "type": "TSTypeParameter",
                                  "start": 2916,
                                  "end": 2917,
                                  "name": {
                                    "type": "Identifier",
                                    "start": 2916,
                                    "end": 2917,
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
                                "start": 2919,
                                "end": 2936,
                                "name": "x",
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
                                        "optional": false,
                                        "readonly": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 2924,
                                          "end": 2925,
                                          "name": "a",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
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
                                        "start": 2930,
                                        "end": 2934,
                                        "computed": false,
                                        "optional": false,
                                        "readonly": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 2930,
                                          "end": 2931,
                                          "name": "b",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
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
                  "start": 3019,
                  "end": 3197,
                  "id": {
                    "type": "Identifier",
                    "start": 3029,
                    "end": 3031,
                    "name": "I7",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "extends": [
                    {
                      "type": "TSInterfaceHeritage",
                      "start": 3040,
                      "end": 3041,
                      "expression": {
                        "type": "Identifier",
                        "start": 3040,
                        "end": 3041,
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
                    "start": 3042,
                    "end": 3197,
                    "body": [
                      {
                        "type": "TSPropertySignature",
                        "start": 3056,
                        "end": 3111,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 3056,
                          "end": 3059,
                          "name": "a15",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 3059,
                          "end": 3110,
                          "typeAnnotation": {
                            "type": "TSConstructorType",
                            "start": 3061,
                            "end": 3110,
                            "abstract": false,
                            "typeParameters": {
                              "type": "TSTypeParameterDeclaration",
                              "start": 3065,
                              "end": 3081,
                              "params": [
                                {
                                  "type": "TSTypeParameter",
                                  "start": 3066,
                                  "end": 3080,
                                  "name": {
                                    "type": "Identifier",
                                    "start": 3066,
                                    "end": 3067,
                                    "name": "T",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "constraint": {
                                    "type": "TSTypeReference",
                                    "start": 3076,
                                    "end": 3080,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 3076,
                                      "end": 3080,
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
                                "start": 3082,
                                "end": 3099,
                                "name": "x",
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
                                        "optional": false,
                                        "readonly": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 3087,
                                          "end": 3088,
                                          "name": "a",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
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
                                        "start": 3093,
                                        "end": 3097,
                                        "computed": false,
                                        "optional": false,
                                        "readonly": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 3093,
                                          "end": 3094,
                                          "name": "b",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
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
                              "start": 3101,
                              "end": 3110,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 3104,
                                "end": 3110
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
                  "start": 3207,
                  "end": 3453,
                  "id": {
                    "type": "Identifier",
                    "start": 3217,
                    "end": 3219,
                    "name": "I8",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "extends": [
                    {
                      "type": "TSInterfaceHeritage",
                      "start": 3228,
                      "end": 3229,
                      "expression": {
                        "type": "Identifier",
                        "start": 3228,
                        "end": 3229,
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
                    "start": 3230,
                    "end": 3453,
                    "body": [
                      {
                        "type": "TSPropertySignature",
                        "start": 3403,
                        "end": 3443,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 3403,
                          "end": 3406,
                          "name": "a16",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 3406,
                          "end": 3442,
                          "typeAnnotation": {
                            "type": "TSConstructorType",
                            "start": 3408,
                            "end": 3442,
                            "abstract": false,
                            "typeParameters": {
                              "type": "TSTypeParameterDeclaration",
                              "start": 3412,
                              "end": 3415,
                              "params": [
                                {
                                  "type": "TSTypeParameter",
                                  "start": 3413,
                                  "end": 3414,
                                  "name": {
                                    "type": "Identifier",
                                    "start": 3413,
                                    "end": 3414,
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
                                "start": 3416,
                                "end": 3434,
                                "name": "x",
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 3417,
                                  "end": 3434,
                                  "typeAnnotation": {
                                    "type": "TSConstructorType",
                                    "start": 3419,
                                    "end": 3434,
                                    "abstract": false,
                                    "typeParameters": null,
                                    "params": [
                                      {
                                        "type": "Identifier",
                                        "start": 3424,
                                        "end": 3428,
                                        "name": "a",
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
              ]
            },
            "kind": "module",
            "declare": false,
            "global": false
          },
          {
            "type": "TSModuleDeclaration",
            "start": 3465,
            "end": 4284,
            "id": {
              "type": "Identifier",
              "start": 3472,
              "end": 3503,
              "name": "WithGenericSignaturesInBaseType",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "body": {
              "type": "TSModuleBlock",
              "start": 3504,
              "end": 4284,
              "body": [
                {
                  "type": "TSInterfaceDeclaration",
                  "start": 3562,
                  "end": 3623,
                  "id": {
                    "type": "Identifier",
                    "start": 3572,
                    "end": 3573,
                    "name": "B",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "extends": [],
                  "typeParameters": null,
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
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 3588,
                          "end": 3590,
                          "name": "a2",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 3590,
                          "end": 3612,
                          "typeAnnotation": {
                            "type": "TSConstructorType",
                            "start": 3592,
                            "end": 3612,
                            "abstract": false,
                            "typeParameters": {
                              "type": "TSTypeParameterDeclaration",
                              "start": 3596,
                              "end": 3599,
                              "params": [
                                {
                                  "type": "TSTypeParameter",
                                  "start": 3597,
                                  "end": 3598,
                                  "name": {
                                    "type": "Identifier",
                                    "start": 3597,
                                    "end": 3598,
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
                                "start": 3600,
                                "end": 3604,
                                "name": "x",
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
                  "start": 3633,
                  "end": 3719,
                  "id": {
                    "type": "Identifier",
                    "start": 3643,
                    "end": 3645,
                    "name": "I6",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "extends": [
                    {
                      "type": "TSInterfaceHeritage",
                      "start": 3654,
                      "end": 3655,
                      "expression": {
                        "type": "Identifier",
                        "start": 3654,
                        "end": 3655,
                        "name": "B",
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
                    "start": 3656,
                    "end": 3719,
                    "body": [
                      {
                        "type": "TSPropertySignature",
                        "start": 3670,
                        "end": 3700,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 3670,
                          "end": 3672,
                          "name": "a2",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 3672,
                          "end": 3699,
                          "typeAnnotation": {
                            "type": "TSConstructorType",
                            "start": 3674,
                            "end": 3699,
                            "abstract": false,
                            "typeParameters": {
                              "type": "TSTypeParameterDeclaration",
                              "start": 3678,
                              "end": 3681,
                              "params": [
                                {
                                  "type": "TSTypeParameter",
                                  "start": 3679,
                                  "end": 3680,
                                  "name": {
                                    "type": "Identifier",
                                    "start": 3679,
                                    "end": 3680,
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
                                "start": 3682,
                                "end": 3686,
                                "name": "x",
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
                  "start": 3777,
                  "end": 3843,
                  "id": {
                    "type": "Identifier",
                    "start": 3787,
                    "end": 3788,
                    "name": "C",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "extends": [],
                  "typeParameters": null,
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
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 3803,
                          "end": 3805,
                          "name": "a2",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 3805,
                          "end": 3832,
                          "typeAnnotation": {
                            "type": "TSConstructorType",
                            "start": 3807,
                            "end": 3832,
                            "abstract": false,
                            "typeParameters": {
                              "type": "TSTypeParameterDeclaration",
                              "start": 3811,
                              "end": 3814,
                              "params": [
                                {
                                  "type": "TSTypeParameter",
                                  "start": 3812,
                                  "end": 3813,
                                  "name": {
                                    "type": "Identifier",
                                    "start": 3812,
                                    "end": 3813,
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
                                "start": 3815,
                                "end": 3819,
                                "name": "x",
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
                  "start": 3853,
                  "end": 3934,
                  "id": {
                    "type": "Identifier",
                    "start": 3863,
                    "end": 3865,
                    "name": "I7",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "extends": [
                    {
                      "type": "TSInterfaceHeritage",
                      "start": 3874,
                      "end": 3875,
                      "expression": {
                        "type": "Identifier",
                        "start": 3874,
                        "end": 3875,
                        "name": "C",
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
                    "start": 3876,
                    "end": 3934,
                    "body": [
                      {
                        "type": "TSPropertySignature",
                        "start": 3890,
                        "end": 3915,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 3890,
                          "end": 3892,
                          "name": "a2",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 3892,
                          "end": 3914,
                          "typeAnnotation": {
                            "type": "TSConstructorType",
                            "start": 3894,
                            "end": 3914,
                            "abstract": false,
                            "typeParameters": {
                              "type": "TSTypeParameterDeclaration",
                              "start": 3898,
                              "end": 3901,
                              "params": [
                                {
                                  "type": "TSTypeParameter",
                                  "start": 3899,
                                  "end": 3900,
                                  "name": {
                                    "type": "Identifier",
                                    "start": 3899,
                                    "end": 3900,
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
                                "start": 3902,
                                "end": 3906,
                                "name": "x",
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
                  "start": 4009,
                  "end": 4177,
                  "id": {
                    "type": "Identifier",
                    "start": 4019,
                    "end": 4020,
                    "name": "D",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "extends": [],
                  "typeParameters": null,
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
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 4035,
                          "end": 4038,
                          "name": "a14",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
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
                                "typeParameters": {
                                  "type": "TSTypeParameterDeclaration",
                                  "start": 4062,
                                  "end": 4081,
                                  "params": [
                                    {
                                      "type": "TSTypeParameter",
                                      "start": 4063,
                                      "end": 4080,
                                      "name": {
                                        "type": "Identifier",
                                        "start": 4063,
                                        "end": 4064,
                                        "name": "T",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "constraint": {
                                        "type": "TSTypeReference",
                                        "start": 4073,
                                        "end": 4080,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 4073,
                                          "end": 4080,
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
                                    "start": 4082,
                                    "end": 4086,
                                    "name": "x",
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
                                }
                              },
                              {
                                "type": "TSConstructSignatureDeclaration",
                                "start": 4115,
                                "end": 4152,
                                "typeParameters": {
                                  "type": "TSTypeParameterDeclaration",
                                  "start": 4119,
                                  "end": 4135,
                                  "params": [
                                    {
                                      "type": "TSTypeParameter",
                                      "start": 4120,
                                      "end": 4134,
                                      "name": {
                                        "type": "Identifier",
                                        "start": 4120,
                                        "end": 4121,
                                        "name": "U",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "constraint": {
                                        "type": "TSTypeReference",
                                        "start": 4130,
                                        "end": 4134,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 4130,
                                          "end": 4134,
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
                                    "start": 4136,
                                    "end": 4140,
                                    "name": "x",
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
                  "start": 4187,
                  "end": 4278,
                  "id": {
                    "type": "Identifier",
                    "start": 4197,
                    "end": 4199,
                    "name": "I8",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "extends": [
                    {
                      "type": "TSInterfaceHeritage",
                      "start": 4208,
                      "end": 4209,
                      "expression": {
                        "type": "Identifier",
                        "start": 4208,
                        "end": 4209,
                        "name": "D",
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
                    "start": 4210,
                    "end": 4278,
                    "body": [
                      {
                        "type": "TSPropertySignature",
                        "start": 4224,
                        "end": 4268,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 4224,
                          "end": 4227,
                          "name": "a14",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 4227,
                          "end": 4267,
                          "typeAnnotation": {
                            "type": "TSConstructorType",
                            "start": 4229,
                            "end": 4267,
                            "abstract": false,
                            "typeParameters": {
                              "type": "TSTypeParameterDeclaration",
                              "start": 4233,
                              "end": 4249,
                              "params": [
                                {
                                  "type": "TSTypeParameter",
                                  "start": 4234,
                                  "end": 4248,
                                  "name": {
                                    "type": "Identifier",
                                    "start": 4234,
                                    "end": 4235,
                                    "name": "T",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "constraint": {
                                    "type": "TSTypeReference",
                                    "start": 4244,
                                    "end": 4248,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 4244,
                                      "end": 4248,
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
                                "start": 4250,
                                "end": 4254,
                                "name": "x",
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
              ]
            },
            "kind": "module",
            "declare": false,
            "global": false
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
