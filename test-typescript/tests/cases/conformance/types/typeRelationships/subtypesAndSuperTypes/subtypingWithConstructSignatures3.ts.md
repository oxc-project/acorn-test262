__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 161,
  "end": 4928,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 161,
      "end": 4460,
      "id": {
        "type": "Identifier",
        "start": 168,
        "end": 174,
        "name": "Errors",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 175,
        "end": 4460,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 181,
            "end": 208,
            "id": {
              "type": "Identifier",
              "start": 187,
              "end": 191,
              "name": "Base",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 192,
              "end": 208,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 194,
                  "end": 206,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 194,
                    "end": 197,
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
                    "start": 197,
                    "end": 205,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 199,
                      "end": 205
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
            "start": 213,
            "end": 256,
            "id": {
              "type": "Identifier",
              "start": 219,
              "end": 226,
              "name": "Derived",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": {
              "type": "Identifier",
              "start": 235,
              "end": 239,
              "name": "Base",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "body": {
              "type": "ClassBody",
              "start": 240,
              "end": 256,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 242,
                  "end": 254,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 242,
                    "end": 245,
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
                    "start": 245,
                    "end": 253,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 247,
                      "end": 253
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
            "start": 261,
            "end": 308,
            "id": {
              "type": "Identifier",
              "start": 267,
              "end": 275,
              "name": "Derived2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": {
              "type": "Identifier",
              "start": 284,
              "end": 291,
              "name": "Derived",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "body": {
              "type": "ClassBody",
              "start": 292,
              "end": 308,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 294,
                  "end": 306,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 294,
                    "end": 297,
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
                    "start": 297,
                    "end": 305,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 299,
                      "end": 305
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
            "start": 313,
            "end": 362,
            "id": {
              "type": "Identifier",
              "start": 319,
              "end": 331,
              "name": "OtherDerived",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": {
              "type": "Identifier",
              "start": 340,
              "end": 344,
              "name": "Base",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "body": {
              "type": "ClassBody",
              "start": 345,
              "end": 362,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 347,
                  "end": 360,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 347,
                    "end": 351,
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
                    "start": 351,
                    "end": 359,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 353,
                      "end": 359
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
            "type": "TSDeclareFunction",
            "start": 368,
            "end": 434,
            "id": {
              "type": "Identifier",
              "start": 385,
              "end": 389,
              "name": "foo2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 390,
                "end": 421,
                "name": "a2",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 392,
                  "end": 421,
                  "typeAnnotation": {
                    "type": "TSConstructorType",
                    "start": 394,
                    "end": 421,
                    "abstract": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 399,
                        "end": 408,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 400,
                          "end": 408,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 402,
                            "end": 408
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 410,
                      "end": 421,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 413,
                        "end": 421,
                        "elementType": {
                          "type": "TSStringKeyword",
                          "start": 413,
                          "end": 419
                        }
                      }
                    }
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "body": null,
            "declare": true,
            "typeParameters": null,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 422,
              "end": 433,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 424,
                "end": 433,
                "exprName": {
                  "type": "Identifier",
                  "start": 431,
                  "end": 433,
                  "name": "a2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            }
          },
          {
            "type": "TSDeclareFunction",
            "start": 439,
            "end": 475,
            "id": {
              "type": "Identifier",
              "start": 456,
              "end": 460,
              "name": "foo2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 461,
                "end": 468,
                "name": "a2",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 463,
                  "end": 468,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 465,
                    "end": 468
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "body": null,
            "declare": true,
            "typeParameters": null,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 469,
              "end": 474,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 471,
                "end": 474
              }
            }
          },
          {
            "type": "TSDeclareFunction",
            "start": 481,
            "end": 584,
            "id": {
              "type": "Identifier",
              "start": 498,
              "end": 502,
              "name": "foo7",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 503,
                "end": 571,
                "name": "a2",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 505,
                  "end": 571,
                  "typeAnnotation": {
                    "type": "TSConstructorType",
                    "start": 507,
                    "end": 571,
                    "abstract": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 512,
                        "end": 541,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 513,
                          "end": 541,
                          "typeAnnotation": {
                            "type": "TSConstructorType",
                            "start": 515,
                            "end": 541,
                            "abstract": false,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 520,
                                "end": 529,
                                "name": "arg",
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 523,
                                  "end": 529,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 525,
                                    "end": 529,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 525,
                                      "end": 529,
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
                              "start": 531,
                              "end": 541,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 534,
                                "end": 541,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 534,
                                  "end": 541,
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
                      "start": 543,
                      "end": 571,
                      "typeAnnotation": {
                        "type": "TSConstructorType",
                        "start": 546,
                        "end": 571,
                        "abstract": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 551,
                            "end": 558,
                            "name": "r",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 552,
                              "end": 558,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 554,
                                "end": 558,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 554,
                                  "end": 558,
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
                          "start": 560,
                          "end": 571,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 563,
                            "end": 571,
                            "typeName": {
                              "type": "Identifier",
                              "start": 563,
                              "end": 571,
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
                "decorators": [],
                "optional": false
              }
            ],
            "body": null,
            "declare": true,
            "typeParameters": null,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 572,
              "end": 583,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 574,
                "end": 583,
                "exprName": {
                  "type": "Identifier",
                  "start": 581,
                  "end": 583,
                  "name": "a2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            }
          },
          {
            "type": "TSDeclareFunction",
            "start": 589,
            "end": 625,
            "id": {
              "type": "Identifier",
              "start": 606,
              "end": 610,
              "name": "foo7",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 611,
                "end": 618,
                "name": "a2",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 613,
                  "end": 618,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 615,
                    "end": 618
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "body": null,
            "declare": true,
            "typeParameters": null,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 619,
              "end": 624,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 621,
                "end": 624
              }
            }
          },
          {
            "type": "TSDeclareFunction",
            "start": 631,
            "end": 765,
            "id": {
              "type": "Identifier",
              "start": 648,
              "end": 652,
              "name": "foo8",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 653,
                "end": 752,
                "name": "a2",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 655,
                  "end": 752,
                  "typeAnnotation": {
                    "type": "TSConstructorType",
                    "start": 657,
                    "end": 752,
                    "abstract": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 662,
                        "end": 691,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 663,
                          "end": 691,
                          "typeAnnotation": {
                            "type": "TSConstructorType",
                            "start": 665,
                            "end": 691,
                            "abstract": false,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 670,
                                "end": 679,
                                "name": "arg",
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 673,
                                  "end": 679,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 675,
                                    "end": 679,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 675,
                                      "end": 679,
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
                              "start": 681,
                              "end": 691,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 684,
                                "end": 691,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 684,
                                  "end": 691,
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
                        "start": 693,
                        "end": 723,
                        "name": "y",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 694,
                          "end": 723,
                          "typeAnnotation": {
                            "type": "TSConstructorType",
                            "start": 696,
                            "end": 723,
                            "abstract": false,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 701,
                                "end": 711,
                                "name": "arg2",
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 705,
                                  "end": 711,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 707,
                                    "end": 711,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 707,
                                      "end": 711,
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
                              "start": 713,
                              "end": 723,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 716,
                                "end": 723,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 716,
                                  "end": 723,
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
                      "start": 725,
                      "end": 752,
                      "typeAnnotation": {
                        "type": "TSConstructorType",
                        "start": 728,
                        "end": 752,
                        "abstract": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 733,
                            "end": 740,
                            "name": "r",
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
                    }
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "body": null,
            "declare": true,
            "typeParameters": null,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 753,
              "end": 764,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 755,
                "end": 764,
                "exprName": {
                  "type": "Identifier",
                  "start": 762,
                  "end": 764,
                  "name": "a2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            }
          },
          {
            "type": "TSDeclareFunction",
            "start": 770,
            "end": 806,
            "id": {
              "type": "Identifier",
              "start": 787,
              "end": 791,
              "name": "foo8",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 792,
                "end": 799,
                "name": "a2",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 794,
                  "end": 799,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 796,
                    "end": 799
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "body": null,
            "declare": true,
            "typeParameters": null,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 800,
              "end": 805,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 802,
                "end": 805
              }
            }
          },
          {
            "type": "TSDeclareFunction",
            "start": 812,
            "end": 878,
            "id": {
              "type": "Identifier",
              "start": 829,
              "end": 834,
              "name": "foo10",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 835,
                "end": 865,
                "name": "a2",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 837,
                  "end": 865,
                  "typeAnnotation": {
                    "type": "TSConstructorType",
                    "start": 839,
                    "end": 865,
                    "abstract": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "RestElement",
                        "start": 844,
                        "end": 856,
                        "argument": {
                          "type": "Identifier",
                          "start": 847,
                          "end": 848,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "decorators": [],
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 848,
                          "end": 856,
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "start": 850,
                            "end": 856,
                            "elementType": {
                              "type": "TSTypeReference",
                              "start": 850,
                              "end": 854,
                              "typeName": {
                                "type": "Identifier",
                                "start": 850,
                                "end": 854,
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
                      "start": 858,
                      "end": 865,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 861,
                        "end": 865,
                        "typeName": {
                          "type": "Identifier",
                          "start": 861,
                          "end": 865,
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
                "decorators": [],
                "optional": false
              }
            ],
            "body": null,
            "declare": true,
            "typeParameters": null,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 866,
              "end": 877,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 868,
                "end": 877,
                "exprName": {
                  "type": "Identifier",
                  "start": 875,
                  "end": 877,
                  "name": "a2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            }
          },
          {
            "type": "TSDeclareFunction",
            "start": 883,
            "end": 920,
            "id": {
              "type": "Identifier",
              "start": 900,
              "end": 905,
              "name": "foo10",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 906,
                "end": 913,
                "name": "a2",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 908,
                  "end": 913,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 910,
                    "end": 913
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "body": null,
            "declare": true,
            "typeParameters": null,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 914,
              "end": 919,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 916,
                "end": 919
              }
            }
          },
          {
            "type": "TSDeclareFunction",
            "start": 926,
            "end": 1031,
            "id": {
              "type": "Identifier",
              "start": 943,
              "end": 948,
              "name": "foo11",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 949,
                "end": 1018,
                "name": "a2",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 951,
                  "end": 1018,
                  "typeAnnotation": {
                    "type": "TSConstructorType",
                    "start": 953,
                    "end": 1018,
                    "abstract": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 958,
                        "end": 976,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 959,
                          "end": 976,
                          "typeAnnotation": {
                            "type": "TSTypeLiteral",
                            "start": 961,
                            "end": 976,
                            "members": [
                              {
                                "type": "TSPropertySignature",
                                "start": 963,
                                "end": 974,
                                "computed": false,
                                "optional": false,
                                "readonly": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 963,
                                  "end": 966,
                                  "name": "foo",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 966,
                                  "end": 974,
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 968,
                                    "end": 974
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
                        "start": 978,
                        "end": 1009,
                        "name": "y",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 979,
                          "end": 1009,
                          "typeAnnotation": {
                            "type": "TSTypeLiteral",
                            "start": 981,
                            "end": 1009,
                            "members": [
                              {
                                "type": "TSPropertySignature",
                                "start": 983,
                                "end": 995,
                                "computed": false,
                                "optional": false,
                                "readonly": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 983,
                                  "end": 986,
                                  "name": "foo",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 986,
                                  "end": 994,
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 988,
                                    "end": 994
                                  }
                                },
                                "accessibility": null,
                                "static": false
                              },
                              {
                                "type": "TSPropertySignature",
                                "start": 996,
                                "end": 1007,
                                "computed": false,
                                "optional": false,
                                "readonly": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 996,
                                  "end": 999,
                                  "name": "bar",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 999,
                                  "end": 1007,
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 1001,
                                    "end": 1007
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
                      "start": 1011,
                      "end": 1018,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1014,
                        "end": 1018,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1014,
                          "end": 1018,
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
                "decorators": [],
                "optional": false
              }
            ],
            "body": null,
            "declare": true,
            "typeParameters": null,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 1019,
              "end": 1030,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 1021,
                "end": 1030,
                "exprName": {
                  "type": "Identifier",
                  "start": 1028,
                  "end": 1030,
                  "name": "a2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            }
          },
          {
            "type": "TSDeclareFunction",
            "start": 1036,
            "end": 1073,
            "id": {
              "type": "Identifier",
              "start": 1053,
              "end": 1058,
              "name": "foo11",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 1059,
                "end": 1066,
                "name": "a2",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1061,
                  "end": 1066,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 1063,
                    "end": 1066
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "body": null,
            "declare": true,
            "typeParameters": null,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 1067,
              "end": 1072,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1069,
                "end": 1072
              }
            }
          },
          {
            "type": "TSDeclareFunction",
            "start": 1079,
            "end": 1177,
            "id": {
              "type": "Identifier",
              "start": 1096,
              "end": 1101,
              "name": "foo12",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 1102,
                "end": 1164,
                "name": "a2",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1104,
                  "end": 1164,
                  "typeAnnotation": {
                    "type": "TSConstructorType",
                    "start": 1106,
                    "end": 1164,
                    "abstract": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1111,
                        "end": 1125,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1112,
                          "end": 1125,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 1114,
                            "end": 1125,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1114,
                              "end": 1119,
                              "name": "Array",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 1119,
                              "end": 1125,
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "start": 1120,
                                  "end": 1124,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 1120,
                                    "end": 1124,
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
                        "start": 1127,
                        "end": 1145,
                        "name": "y",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1128,
                          "end": 1145,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 1130,
                            "end": 1145,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1130,
                              "end": 1135,
                              "name": "Array",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 1135,
                              "end": 1145,
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "start": 1136,
                                  "end": 1144,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 1136,
                                    "end": 1144,
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
                      "start": 1147,
                      "end": 1164,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1150,
                        "end": 1164,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1150,
                          "end": 1155,
                          "name": "Array",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 1155,
                          "end": 1164,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 1156,
                              "end": 1163,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1156,
                                "end": 1163,
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
                "decorators": [],
                "optional": false
              }
            ],
            "body": null,
            "declare": true,
            "typeParameters": null,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 1165,
              "end": 1176,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 1167,
                "end": 1176,
                "exprName": {
                  "type": "Identifier",
                  "start": 1174,
                  "end": 1176,
                  "name": "a2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            }
          },
          {
            "type": "TSDeclareFunction",
            "start": 1182,
            "end": 1219,
            "id": {
              "type": "Identifier",
              "start": 1199,
              "end": 1204,
              "name": "foo12",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 1205,
                "end": 1212,
                "name": "a2",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1207,
                  "end": 1212,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 1209,
                    "end": 1212
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "body": null,
            "declare": true,
            "typeParameters": null,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 1213,
              "end": 1218,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1215,
                "end": 1218
              }
            }
          },
          {
            "type": "TSDeclareFunction",
            "start": 1225,
            "end": 1308,
            "id": {
              "type": "Identifier",
              "start": 1242,
              "end": 1247,
              "name": "foo15",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 1248,
                "end": 1295,
                "name": "a2",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1250,
                  "end": 1295,
                  "typeAnnotation": {
                    "type": "TSConstructorType",
                    "start": 1252,
                    "end": 1295,
                    "abstract": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1257,
                        "end": 1284,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1258,
                          "end": 1284,
                          "typeAnnotation": {
                            "type": "TSTypeLiteral",
                            "start": 1260,
                            "end": 1284,
                            "members": [
                              {
                                "type": "TSPropertySignature",
                                "start": 1262,
                                "end": 1272,
                                "computed": false,
                                "optional": false,
                                "readonly": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 1262,
                                  "end": 1263,
                                  "name": "a",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 1263,
                                  "end": 1271,
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 1265,
                                    "end": 1271
                                  }
                                },
                                "accessibility": null,
                                "static": false
                              },
                              {
                                "type": "TSPropertySignature",
                                "start": 1273,
                                "end": 1282,
                                "computed": false,
                                "optional": false,
                                "readonly": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 1273,
                                  "end": 1274,
                                  "name": "b",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 1274,
                                  "end": 1282,
                                  "typeAnnotation": {
                                    "type": "TSNumberKeyword",
                                    "start": 1276,
                                    "end": 1282
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
                      "start": 1286,
                      "end": 1295,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1289,
                        "end": 1295
                      }
                    }
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "body": null,
            "declare": true,
            "typeParameters": null,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 1296,
              "end": 1307,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 1298,
                "end": 1307,
                "exprName": {
                  "type": "Identifier",
                  "start": 1305,
                  "end": 1307,
                  "name": "a2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            }
          },
          {
            "type": "TSDeclareFunction",
            "start": 1313,
            "end": 1350,
            "id": {
              "type": "Identifier",
              "start": 1330,
              "end": 1335,
              "name": "foo15",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 1336,
                "end": 1343,
                "name": "a2",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1338,
                  "end": 1343,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 1340,
                    "end": 1343
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "body": null,
            "declare": true,
            "typeParameters": null,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 1344,
              "end": 1349,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1346,
                "end": 1349
              }
            }
          },
          {
            "type": "TSDeclareFunction",
            "start": 1356,
            "end": 1736,
            "id": {
              "type": "Identifier",
              "start": 1373,
              "end": 1378,
              "name": "foo16",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 1379,
                "end": 1723,
                "name": "a2",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1381,
                  "end": 1723,
                  "typeAnnotation": {
                    "type": "TSTypeLiteral",
                    "start": 1383,
                    "end": 1723,
                    "members": [
                      {
                        "type": "TSConstructSignatureDeclaration",
                        "start": 1491,
                        "end": 1597,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 1496,
                            "end": 1585,
                            "name": "x",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1497,
                              "end": 1585,
                              "typeAnnotation": {
                                "type": "TSTypeLiteral",
                                "start": 1499,
                                "end": 1585,
                                "members": [
                                  {
                                    "type": "TSConstructSignatureDeclaration",
                                    "start": 1513,
                                    "end": 1537,
                                    "typeParameters": null,
                                    "params": [
                                      {
                                        "type": "Identifier",
                                        "start": 1518,
                                        "end": 1527,
                                        "name": "a",
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "start": 1519,
                                          "end": 1527,
                                          "typeAnnotation": {
                                            "type": "TSNumberKeyword",
                                            "start": 1521,
                                            "end": 1527
                                          }
                                        },
                                        "decorators": [],
                                        "optional": false
                                      }
                                    ],
                                    "returnType": {
                                      "type": "TSTypeAnnotation",
                                      "start": 1528,
                                      "end": 1536,
                                      "typeAnnotation": {
                                        "type": "TSNumberKeyword",
                                        "start": 1530,
                                        "end": 1536
                                      }
                                    }
                                  },
                                  {
                                    "type": "TSConstructSignatureDeclaration",
                                    "start": 1550,
                                    "end": 1575,
                                    "typeParameters": null,
                                    "params": [
                                      {
                                        "type": "Identifier",
                                        "start": 1555,
                                        "end": 1565,
                                        "name": "a",
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "start": 1557,
                                          "end": 1565,
                                          "typeAnnotation": {
                                            "type": "TSNumberKeyword",
                                            "start": 1559,
                                            "end": 1565
                                          }
                                        },
                                        "decorators": [],
                                        "optional": true
                                      }
                                    ],
                                    "returnType": {
                                      "type": "TSTypeAnnotation",
                                      "start": 1566,
                                      "end": 1574,
                                      "typeAnnotation": {
                                        "type": "TSNumberKeyword",
                                        "start": 1568,
                                        "end": 1574
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
                          "start": 1586,
                          "end": 1596,
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "start": 1588,
                            "end": 1596,
                            "elementType": {
                              "type": "TSNumberKeyword",
                              "start": 1588,
                              "end": 1594
                            }
                          }
                        }
                      },
                      {
                        "type": "TSConstructSignatureDeclaration",
                        "start": 1606,
                        "end": 1717,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 1611,
                            "end": 1704,
                            "name": "x",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1612,
                              "end": 1704,
                              "typeAnnotation": {
                                "type": "TSTypeLiteral",
                                "start": 1614,
                                "end": 1704,
                                "members": [
                                  {
                                    "type": "TSConstructSignatureDeclaration",
                                    "start": 1628,
                                    "end": 1654,
                                    "typeParameters": null,
                                    "params": [
                                      {
                                        "type": "Identifier",
                                        "start": 1633,
                                        "end": 1643,
                                        "name": "a",
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "start": 1634,
                                          "end": 1643,
                                          "typeAnnotation": {
                                            "type": "TSBooleanKeyword",
                                            "start": 1636,
                                            "end": 1643
                                          }
                                        },
                                        "decorators": [],
                                        "optional": false
                                      }
                                    ],
                                    "returnType": {
                                      "type": "TSTypeAnnotation",
                                      "start": 1644,
                                      "end": 1653,
                                      "typeAnnotation": {
                                        "type": "TSBooleanKeyword",
                                        "start": 1646,
                                        "end": 1653
                                      }
                                    }
                                  },
                                  {
                                    "type": "TSConstructSignatureDeclaration",
                                    "start": 1667,
                                    "end": 1694,
                                    "typeParameters": null,
                                    "params": [
                                      {
                                        "type": "Identifier",
                                        "start": 1672,
                                        "end": 1683,
                                        "name": "a",
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "start": 1674,
                                          "end": 1683,
                                          "typeAnnotation": {
                                            "type": "TSBooleanKeyword",
                                            "start": 1676,
                                            "end": 1683
                                          }
                                        },
                                        "decorators": [],
                                        "optional": true
                                      }
                                    ],
                                    "returnType": {
                                      "type": "TSTypeAnnotation",
                                      "start": 1684,
                                      "end": 1693,
                                      "typeAnnotation": {
                                        "type": "TSBooleanKeyword",
                                        "start": 1686,
                                        "end": 1693
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
                          "start": 1705,
                          "end": 1716,
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "start": 1707,
                            "end": 1716,
                            "elementType": {
                              "type": "TSBooleanKeyword",
                              "start": 1707,
                              "end": 1714
                            }
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
            "body": null,
            "declare": true,
            "typeParameters": null,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 1724,
              "end": 1735,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 1726,
                "end": 1735,
                "exprName": {
                  "type": "Identifier",
                  "start": 1733,
                  "end": 1735,
                  "name": "a2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            }
          },
          {
            "type": "TSDeclareFunction",
            "start": 1741,
            "end": 1778,
            "id": {
              "type": "Identifier",
              "start": 1758,
              "end": 1763,
              "name": "foo16",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 1764,
                "end": 1771,
                "name": "a2",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1766,
                  "end": 1771,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 1768,
                    "end": 1771
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "body": null,
            "declare": true,
            "typeParameters": null,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 1772,
              "end": 1777,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1774,
                "end": 1777
              }
            }
          },
          {
            "type": "TSDeclareFunction",
            "start": 1784,
            "end": 2084,
            "id": {
              "type": "Identifier",
              "start": 1801,
              "end": 1806,
              "name": "foo17",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 1807,
                "end": 2071,
                "name": "a2",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1809,
                  "end": 2071,
                  "typeAnnotation": {
                    "type": "TSTypeLiteral",
                    "start": 1811,
                    "end": 2071,
                    "members": [
                      {
                        "type": "TSConstructSignatureDeclaration",
                        "start": 1821,
                        "end": 1938,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 1826,
                            "end": 1929,
                            "name": "x",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1827,
                              "end": 1929,
                              "typeAnnotation": {
                                "type": "TSTypeLiteral",
                                "start": 1829,
                                "end": 1929,
                                "members": [
                                  {
                                    "type": "TSConstructSignatureDeclaration",
                                    "start": 1843,
                                    "end": 1876,
                                    "typeParameters": {
                                      "type": "TSTypeParameterDeclaration",
                                      "start": 1847,
                                      "end": 1866,
                                      "params": [
                                        {
                                          "type": "TSTypeParameter",
                                          "start": 1848,
                                          "end": 1865,
                                          "name": {
                                            "type": "Identifier",
                                            "start": 1848,
                                            "end": 1849,
                                            "name": "T",
                                            "typeAnnotation": null,
                                            "decorators": [],
                                            "optional": false
                                          },
                                          "constraint": {
                                            "type": "TSTypeReference",
                                            "start": 1858,
                                            "end": 1865,
                                            "typeName": {
                                              "type": "Identifier",
                                              "start": 1858,
                                              "end": 1865,
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
                                        "start": 1867,
                                        "end": 1871,
                                        "name": "a",
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "start": 1868,
                                          "end": 1871,
                                          "typeAnnotation": {
                                            "type": "TSTypeReference",
                                            "start": 1870,
                                            "end": 1871,
                                            "typeName": {
                                              "type": "Identifier",
                                              "start": 1870,
                                              "end": 1871,
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
                                      "start": 1872,
                                      "end": 1875,
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "start": 1874,
                                        "end": 1875,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 1874,
                                          "end": 1875,
                                          "name": "T",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "typeArguments": null
                                      }
                                    }
                                  },
                                  {
                                    "type": "TSConstructSignatureDeclaration",
                                    "start": 1889,
                                    "end": 1919,
                                    "typeParameters": {
                                      "type": "TSTypeParameterDeclaration",
                                      "start": 1893,
                                      "end": 1909,
                                      "params": [
                                        {
                                          "type": "TSTypeParameter",
                                          "start": 1894,
                                          "end": 1908,
                                          "name": {
                                            "type": "Identifier",
                                            "start": 1894,
                                            "end": 1895,
                                            "name": "T",
                                            "typeAnnotation": null,
                                            "decorators": [],
                                            "optional": false
                                          },
                                          "constraint": {
                                            "type": "TSTypeReference",
                                            "start": 1904,
                                            "end": 1908,
                                            "typeName": {
                                              "type": "Identifier",
                                              "start": 1904,
                                              "end": 1908,
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
                                        "start": 1910,
                                        "end": 1914,
                                        "name": "a",
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "start": 1911,
                                          "end": 1914,
                                          "typeAnnotation": {
                                            "type": "TSTypeReference",
                                            "start": 1913,
                                            "end": 1914,
                                            "typeName": {
                                              "type": "Identifier",
                                              "start": 1913,
                                              "end": 1914,
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
                                      "start": 1915,
                                      "end": 1918,
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "start": 1917,
                                        "end": 1918,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 1917,
                                          "end": 1918,
                                          "name": "T",
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
                          "start": 1930,
                          "end": 1937,
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "start": 1932,
                            "end": 1937,
                            "elementType": {
                              "type": "TSAnyKeyword",
                              "start": 1932,
                              "end": 1935
                            }
                          }
                        }
                      },
                      {
                        "type": "TSConstructSignatureDeclaration",
                        "start": 1947,
                        "end": 2065,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 1952,
                            "end": 2056,
                            "name": "x",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1953,
                              "end": 2056,
                              "typeAnnotation": {
                                "type": "TSTypeLiteral",
                                "start": 1955,
                                "end": 2056,
                                "members": [
                                  {
                                    "type": "TSConstructSignatureDeclaration",
                                    "start": 1969,
                                    "end": 2003,
                                    "typeParameters": {
                                      "type": "TSTypeParameterDeclaration",
                                      "start": 1973,
                                      "end": 1993,
                                      "params": [
                                        {
                                          "type": "TSTypeParameter",
                                          "start": 1974,
                                          "end": 1992,
                                          "name": {
                                            "type": "Identifier",
                                            "start": 1974,
                                            "end": 1975,
                                            "name": "T",
                                            "typeAnnotation": null,
                                            "decorators": [],
                                            "optional": false
                                          },
                                          "constraint": {
                                            "type": "TSTypeReference",
                                            "start": 1984,
                                            "end": 1992,
                                            "typeName": {
                                              "type": "Identifier",
                                              "start": 1984,
                                              "end": 1992,
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
                                        "start": 1994,
                                        "end": 1998,
                                        "name": "a",
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "start": 1995,
                                          "end": 1998,
                                          "typeAnnotation": {
                                            "type": "TSTypeReference",
                                            "start": 1997,
                                            "end": 1998,
                                            "typeName": {
                                              "type": "Identifier",
                                              "start": 1997,
                                              "end": 1998,
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
                                      "start": 1999,
                                      "end": 2002,
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "start": 2001,
                                        "end": 2002,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 2001,
                                          "end": 2002,
                                          "name": "T",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "typeArguments": null
                                      }
                                    }
                                  },
                                  {
                                    "type": "TSConstructSignatureDeclaration",
                                    "start": 2016,
                                    "end": 2046,
                                    "typeParameters": {
                                      "type": "TSTypeParameterDeclaration",
                                      "start": 2020,
                                      "end": 2036,
                                      "params": [
                                        {
                                          "type": "TSTypeParameter",
                                          "start": 2021,
                                          "end": 2035,
                                          "name": {
                                            "type": "Identifier",
                                            "start": 2021,
                                            "end": 2022,
                                            "name": "T",
                                            "typeAnnotation": null,
                                            "decorators": [],
                                            "optional": false
                                          },
                                          "constraint": {
                                            "type": "TSTypeReference",
                                            "start": 2031,
                                            "end": 2035,
                                            "typeName": {
                                              "type": "Identifier",
                                              "start": 2031,
                                              "end": 2035,
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
                                        "start": 2037,
                                        "end": 2041,
                                        "name": "a",
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "start": 2038,
                                          "end": 2041,
                                          "typeAnnotation": {
                                            "type": "TSTypeReference",
                                            "start": 2040,
                                            "end": 2041,
                                            "typeName": {
                                              "type": "Identifier",
                                              "start": 2040,
                                              "end": 2041,
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
                          "start": 2057,
                          "end": 2064,
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "start": 2059,
                            "end": 2064,
                            "elementType": {
                              "type": "TSAnyKeyword",
                              "start": 2059,
                              "end": 2062
                            }
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
            "body": null,
            "declare": true,
            "typeParameters": null,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 2072,
              "end": 2083,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 2074,
                "end": 2083,
                "exprName": {
                  "type": "Identifier",
                  "start": 2081,
                  "end": 2083,
                  "name": "a2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            }
          },
          {
            "type": "TSDeclareFunction",
            "start": 2089,
            "end": 2126,
            "id": {
              "type": "Identifier",
              "start": 2106,
              "end": 2111,
              "name": "foo17",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 2112,
                "end": 2119,
                "name": "a2",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 2114,
                  "end": 2119,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 2116,
                    "end": 2119
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "body": null,
            "declare": true,
            "typeParameters": null,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 2120,
              "end": 2125,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 2122,
                "end": 2125
              }
            }
          },
          {
            "type": "VariableDeclaration",
            "start": 2132,
            "end": 2168,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2136,
                "end": 2167,
                "id": {
                  "type": "Identifier",
                  "start": 2136,
                  "end": 2167,
                  "name": "r1arg1",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2142,
                    "end": 2167,
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "start": 2144,
                      "end": 2167,
                      "abstract": false,
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "start": 2148,
                        "end": 2154,
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "start": 2149,
                            "end": 2150,
                            "name": {
                              "type": "Identifier",
                              "start": 2149,
                              "end": 2150,
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
                            "start": 2152,
                            "end": 2153,
                            "name": {
                              "type": "Identifier",
                              "start": 2152,
                              "end": 2153,
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
                          "start": 2155,
                          "end": 2159,
                          "name": "x",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 2156,
                            "end": 2159,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 2158,
                              "end": 2159,
                              "typeName": {
                                "type": "Identifier",
                                "start": 2158,
                                "end": 2159,
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
                        "start": 2161,
                        "end": 2167,
                        "typeAnnotation": {
                          "type": "TSArrayType",
                          "start": 2164,
                          "end": 2167,
                          "elementType": {
                            "type": "TSTypeReference",
                            "start": 2164,
                            "end": 2165,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2164,
                              "end": 2165,
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
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 2173,
            "end": 2213,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2177,
                "end": 2212,
                "id": {
                  "type": "Identifier",
                  "start": 2177,
                  "end": 2212,
                  "name": "r1arg2",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2183,
                    "end": 2212,
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "start": 2185,
                      "end": 2212,
                      "abstract": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 2190,
                          "end": 2199,
                          "name": "x",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 2191,
                            "end": 2199,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 2193,
                              "end": 2199
                            }
                          },
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 2201,
                        "end": 2212,
                        "typeAnnotation": {
                          "type": "TSArrayType",
                          "start": 2204,
                          "end": 2212,
                          "elementType": {
                            "type": "TSStringKeyword",
                            "start": 2204,
                            "end": 2210
                          }
                        }
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 2219,
            "end": 2241,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2223,
                "end": 2240,
                "id": {
                  "type": "Identifier",
                  "start": 2223,
                  "end": 2225,
                  "name": "r1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 2228,
                  "end": 2240,
                  "callee": {
                    "type": "Identifier",
                    "start": 2228,
                    "end": 2232,
                    "name": "foo2",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 2233,
                      "end": 2239,
                      "name": "r1arg1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 2253,
            "end": 2280,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2257,
                "end": 2279,
                "id": {
                  "type": "Identifier",
                  "start": 2257,
                  "end": 2260,
                  "name": "r1a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ArrayExpression",
                  "start": 2263,
                  "end": 2279,
                  "elements": [
                    {
                      "type": "Identifier",
                      "start": 2264,
                      "end": 2270,
                      "name": "r1arg2",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 2272,
                      "end": 2278,
                      "name": "r1arg1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ]
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 2285,
            "end": 2312,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2289,
                "end": 2311,
                "id": {
                  "type": "Identifier",
                  "start": 2289,
                  "end": 2292,
                  "name": "r1b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ArrayExpression",
                  "start": 2295,
                  "end": 2311,
                  "elements": [
                    {
                      "type": "Identifier",
                      "start": 2296,
                      "end": 2302,
                      "name": "r1arg1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 2304,
                      "end": 2310,
                      "name": "r1arg2",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ]
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 2318,
            "end": 2431,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2322,
                "end": 2430,
                "id": {
                  "type": "Identifier",
                  "start": 2322,
                  "end": 2430,
                  "name": "r2arg1",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2328,
                    "end": 2430,
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "start": 2330,
                      "end": 2430,
                      "abstract": false,
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "start": 2334,
                        "end": 2389,
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "start": 2335,
                            "end": 2349,
                            "name": {
                              "type": "Identifier",
                              "start": 2335,
                              "end": 2336,
                              "name": "T",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "constraint": {
                              "type": "TSTypeReference",
                              "start": 2345,
                              "end": 2349,
                              "typeName": {
                                "type": "Identifier",
                                "start": 2345,
                                "end": 2349,
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
                            "start": 2351,
                            "end": 2368,
                            "name": {
                              "type": "Identifier",
                              "start": 2351,
                              "end": 2352,
                              "name": "U",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "constraint": {
                              "type": "TSTypeReference",
                              "start": 2361,
                              "end": 2368,
                              "typeName": {
                                "type": "Identifier",
                                "start": 2361,
                                "end": 2368,
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
                            "start": 2370,
                            "end": 2388,
                            "name": {
                              "type": "Identifier",
                              "start": 2370,
                              "end": 2371,
                              "name": "V",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "constraint": {
                              "type": "TSTypeReference",
                              "start": 2380,
                              "end": 2388,
                              "typeName": {
                                "type": "Identifier",
                                "start": 2380,
                                "end": 2388,
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
                          "start": 2390,
                          "end": 2410,
                          "name": "x",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 2391,
                            "end": 2410,
                            "typeAnnotation": {
                              "type": "TSConstructorType",
                              "start": 2393,
                              "end": 2410,
                              "abstract": false,
                              "typeParameters": null,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "start": 2398,
                                  "end": 2404,
                                  "name": "arg",
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 2401,
                                    "end": 2404,
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "start": 2403,
                                      "end": 2404,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 2403,
                                        "end": 2404,
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
                                "start": 2406,
                                "end": 2410,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 2409,
                                  "end": 2410,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 2409,
                                    "end": 2410,
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
                        "start": 2412,
                        "end": 2430,
                        "typeAnnotation": {
                          "type": "TSConstructorType",
                          "start": 2415,
                          "end": 2430,
                          "abstract": false,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 2420,
                              "end": 2424,
                              "name": "r",
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 2421,
                                "end": 2424,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 2423,
                                  "end": 2424,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 2423,
                                    "end": 2424,
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
                            "start": 2426,
                            "end": 2430,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 2429,
                              "end": 2430,
                              "typeName": {
                                "type": "Identifier",
                                "start": 2429,
                                "end": 2430,
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
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 2436,
            "end": 2513,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2440,
                "end": 2512,
                "id": {
                  "type": "Identifier",
                  "start": 2440,
                  "end": 2512,
                  "name": "r2arg2",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2446,
                    "end": 2512,
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "start": 2448,
                      "end": 2512,
                      "abstract": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 2453,
                          "end": 2482,
                          "name": "x",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 2454,
                            "end": 2482,
                            "typeAnnotation": {
                              "type": "TSConstructorType",
                              "start": 2456,
                              "end": 2482,
                              "abstract": false,
                              "typeParameters": null,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "start": 2461,
                                  "end": 2470,
                                  "name": "arg",
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 2464,
                                    "end": 2470,
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "start": 2466,
                                      "end": 2470,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 2466,
                                        "end": 2470,
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
                                "start": 2472,
                                "end": 2482,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 2475,
                                  "end": 2482,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 2475,
                                    "end": 2482,
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
                        "start": 2484,
                        "end": 2512,
                        "typeAnnotation": {
                          "type": "TSConstructorType",
                          "start": 2487,
                          "end": 2512,
                          "abstract": false,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 2492,
                              "end": 2499,
                              "name": "r",
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 2493,
                                "end": 2499,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 2495,
                                  "end": 2499,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 2495,
                                    "end": 2499,
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
                            "start": 2501,
                            "end": 2512,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 2504,
                              "end": 2512,
                              "typeName": {
                                "type": "Identifier",
                                "start": 2504,
                                "end": 2512,
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
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 2518,
            "end": 2540,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2522,
                "end": 2539,
                "id": {
                  "type": "Identifier",
                  "start": 2522,
                  "end": 2524,
                  "name": "r2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 2527,
                  "end": 2539,
                  "callee": {
                    "type": "Identifier",
                    "start": 2527,
                    "end": 2531,
                    "name": "foo7",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 2532,
                      "end": 2538,
                      "name": "r2arg1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 2552,
            "end": 2579,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2556,
                "end": 2578,
                "id": {
                  "type": "Identifier",
                  "start": 2556,
                  "end": 2559,
                  "name": "r2a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ArrayExpression",
                  "start": 2562,
                  "end": 2578,
                  "elements": [
                    {
                      "type": "Identifier",
                      "start": 2563,
                      "end": 2569,
                      "name": "r2arg2",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 2571,
                      "end": 2577,
                      "name": "r2arg1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ]
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 2584,
            "end": 2611,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2588,
                "end": 2610,
                "id": {
                  "type": "Identifier",
                  "start": 2588,
                  "end": 2591,
                  "name": "r2b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ArrayExpression",
                  "start": 2594,
                  "end": 2610,
                  "elements": [
                    {
                      "type": "Identifier",
                      "start": 2595,
                      "end": 2601,
                      "name": "r2arg1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 2603,
                      "end": 2609,
                      "name": "r2arg2",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ]
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 2617,
            "end": 2744,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2621,
                "end": 2743,
                "id": {
                  "type": "Identifier",
                  "start": 2621,
                  "end": 2743,
                  "name": "r3arg1",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2627,
                    "end": 2743,
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "start": 2629,
                      "end": 2743,
                      "abstract": false,
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "start": 2633,
                        "end": 2668,
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "start": 2634,
                            "end": 2648,
                            "name": {
                              "type": "Identifier",
                              "start": 2634,
                              "end": 2635,
                              "name": "T",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "constraint": {
                              "type": "TSTypeReference",
                              "start": 2644,
                              "end": 2648,
                              "typeName": {
                                "type": "Identifier",
                                "start": 2644,
                                "end": 2648,
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
                            "start": 2650,
                            "end": 2667,
                            "name": {
                              "type": "Identifier",
                              "start": 2650,
                              "end": 2651,
                              "name": "U",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "constraint": {
                              "type": "TSTypeReference",
                              "start": 2660,
                              "end": 2667,
                              "typeName": {
                                "type": "Identifier",
                                "start": 2660,
                                "end": 2667,
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
                          "start": 2669,
                          "end": 2689,
                          "name": "x",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 2670,
                            "end": 2689,
                            "typeAnnotation": {
                              "type": "TSConstructorType",
                              "start": 2672,
                              "end": 2689,
                              "abstract": false,
                              "typeParameters": null,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "start": 2677,
                                  "end": 2683,
                                  "name": "arg",
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 2680,
                                    "end": 2683,
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "start": 2682,
                                      "end": 2683,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 2682,
                                        "end": 2683,
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
                                "start": 2685,
                                "end": 2689,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 2688,
                                  "end": 2689,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 2688,
                                    "end": 2689,
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
                          "start": 2691,
                          "end": 2723,
                          "name": "y",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 2692,
                            "end": 2723,
                            "typeAnnotation": {
                              "type": "TSFunctionType",
                              "start": 2694,
                              "end": 2723,
                              "typeParameters": null,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "start": 2695,
                                  "end": 2717,
                                  "name": "arg2",
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 2699,
                                    "end": 2717,
                                    "typeAnnotation": {
                                      "type": "TSTypeLiteral",
                                      "start": 2701,
                                      "end": 2717,
                                      "members": [
                                        {
                                          "type": "TSPropertySignature",
                                          "start": 2703,
                                          "end": 2715,
                                          "computed": false,
                                          "optional": false,
                                          "readonly": false,
                                          "key": {
                                            "type": "Identifier",
                                            "start": 2703,
                                            "end": 2706,
                                            "name": "foo",
                                            "typeAnnotation": null,
                                            "decorators": [],
                                            "optional": false
                                          },
                                          "typeAnnotation": {
                                            "type": "TSTypeAnnotation",
                                            "start": 2706,
                                            "end": 2714,
                                            "typeAnnotation": {
                                              "type": "TSNumberKeyword",
                                              "start": 2708,
                                              "end": 2714
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
                                "start": 2719,
                                "end": 2723,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 2722,
                                  "end": 2723,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 2722,
                                    "end": 2723,
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
                        "start": 2725,
                        "end": 2743,
                        "typeAnnotation": {
                          "type": "TSConstructorType",
                          "start": 2728,
                          "end": 2743,
                          "abstract": false,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 2733,
                              "end": 2737,
                              "name": "r",
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 2734,
                                "end": 2737,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 2736,
                                  "end": 2737,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 2736,
                                    "end": 2737,
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
                            "start": 2739,
                            "end": 2743,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 2742,
                              "end": 2743,
                              "typeName": {
                                "type": "Identifier",
                                "start": 2742,
                                "end": 2743,
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
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 2749,
            "end": 2853,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2753,
                "end": 2852,
                "id": {
                  "type": "Identifier",
                  "start": 2753,
                  "end": 2852,
                  "name": "r3arg2",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2759,
                    "end": 2852,
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "start": 2761,
                      "end": 2852,
                      "abstract": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 2766,
                          "end": 2791,
                          "name": "x",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 2767,
                            "end": 2791,
                            "typeAnnotation": {
                              "type": "TSFunctionType",
                              "start": 2769,
                              "end": 2791,
                              "typeParameters": null,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "start": 2770,
                                  "end": 2779,
                                  "name": "arg",
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 2773,
                                    "end": 2779,
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "start": 2775,
                                      "end": 2779,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 2775,
                                        "end": 2779,
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
                                "start": 2781,
                                "end": 2791,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 2784,
                                  "end": 2791,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 2784,
                                    "end": 2791,
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
                          "start": 2793,
                          "end": 2823,
                          "name": "y",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 2794,
                            "end": 2823,
                            "typeAnnotation": {
                              "type": "TSConstructorType",
                              "start": 2796,
                              "end": 2823,
                              "abstract": false,
                              "typeParameters": null,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "start": 2801,
                                  "end": 2811,
                                  "name": "arg2",
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 2805,
                                    "end": 2811,
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "start": 2807,
                                      "end": 2811,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 2807,
                                        "end": 2811,
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
                                "start": 2813,
                                "end": 2823,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 2816,
                                  "end": 2823,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 2816,
                                    "end": 2823,
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
                        "start": 2825,
                        "end": 2852,
                        "typeAnnotation": {
                          "type": "TSConstructorType",
                          "start": 2828,
                          "end": 2852,
                          "abstract": false,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 2833,
                              "end": 2840,
                              "name": "r",
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 2834,
                                "end": 2840,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 2836,
                                  "end": 2840,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 2836,
                                    "end": 2840,
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
                            "start": 2842,
                            "end": 2852,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 2845,
                              "end": 2852,
                              "typeName": {
                                "type": "Identifier",
                                "start": 2845,
                                "end": 2852,
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
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 2858,
            "end": 2880,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2862,
                "end": 2879,
                "id": {
                  "type": "Identifier",
                  "start": 2862,
                  "end": 2864,
                  "name": "r3",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 2867,
                  "end": 2879,
                  "callee": {
                    "type": "Identifier",
                    "start": 2867,
                    "end": 2871,
                    "name": "foo8",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 2872,
                      "end": 2878,
                      "name": "r3arg1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 2892,
            "end": 2919,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2896,
                "end": 2918,
                "id": {
                  "type": "Identifier",
                  "start": 2896,
                  "end": 2899,
                  "name": "r3a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ArrayExpression",
                  "start": 2902,
                  "end": 2918,
                  "elements": [
                    {
                      "type": "Identifier",
                      "start": 2903,
                      "end": 2909,
                      "name": "r3arg2",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 2911,
                      "end": 2917,
                      "name": "r3arg1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ]
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 2924,
            "end": 2951,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2928,
                "end": 2950,
                "id": {
                  "type": "Identifier",
                  "start": 2928,
                  "end": 2931,
                  "name": "r3b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ArrayExpression",
                  "start": 2934,
                  "end": 2950,
                  "elements": [
                    {
                      "type": "Identifier",
                      "start": 2935,
                      "end": 2941,
                      "name": "r3arg1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 2943,
                      "end": 2949,
                      "name": "r3arg2",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ]
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 2957,
            "end": 3009,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2961,
                "end": 3008,
                "id": {
                  "type": "Identifier",
                  "start": 2961,
                  "end": 3008,
                  "name": "r4arg1",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2967,
                    "end": 3008,
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "start": 2969,
                      "end": 3008,
                      "abstract": false,
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "start": 2973,
                        "end": 2992,
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "start": 2974,
                            "end": 2991,
                            "name": {
                              "type": "Identifier",
                              "start": 2974,
                              "end": 2975,
                              "name": "T",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "constraint": {
                              "type": "TSTypeReference",
                              "start": 2984,
                              "end": 2991,
                              "typeName": {
                                "type": "Identifier",
                                "start": 2984,
                                "end": 2991,
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
                          "start": 2993,
                          "end": 3002,
                          "argument": {
                            "type": "Identifier",
                            "start": 2996,
                            "end": 2997,
                            "name": "x",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "decorators": [],
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 2997,
                            "end": 3002,
                            "typeAnnotation": {
                              "type": "TSArrayType",
                              "start": 2999,
                              "end": 3002,
                              "elementType": {
                                "type": "TSTypeReference",
                                "start": 2999,
                                "end": 3000,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 2999,
                                  "end": 3000,
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
                        "start": 3004,
                        "end": 3008,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 3007,
                          "end": 3008,
                          "typeName": {
                            "type": "Identifier",
                            "start": 3007,
                            "end": 3008,
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
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 3014,
            "end": 3053,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 3018,
                "end": 3052,
                "id": {
                  "type": "Identifier",
                  "start": 3018,
                  "end": 3052,
                  "name": "r4arg2",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3024,
                    "end": 3052,
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "start": 3026,
                      "end": 3052,
                      "abstract": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "RestElement",
                          "start": 3031,
                          "end": 3043,
                          "argument": {
                            "type": "Identifier",
                            "start": 3034,
                            "end": 3035,
                            "name": "x",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "decorators": [],
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 3035,
                            "end": 3043,
                            "typeAnnotation": {
                              "type": "TSArrayType",
                              "start": 3037,
                              "end": 3043,
                              "elementType": {
                                "type": "TSTypeReference",
                                "start": 3037,
                                "end": 3041,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 3037,
                                  "end": 3041,
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
                        "start": 3045,
                        "end": 3052,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 3048,
                          "end": 3052,
                          "typeName": {
                            "type": "Identifier",
                            "start": 3048,
                            "end": 3052,
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
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 3058,
            "end": 3081,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 3062,
                "end": 3080,
                "id": {
                  "type": "Identifier",
                  "start": 3062,
                  "end": 3064,
                  "name": "r4",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 3067,
                  "end": 3080,
                  "callee": {
                    "type": "Identifier",
                    "start": 3067,
                    "end": 3072,
                    "name": "foo10",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 3073,
                      "end": 3079,
                      "name": "r4arg1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 3093,
            "end": 3120,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 3097,
                "end": 3119,
                "id": {
                  "type": "Identifier",
                  "start": 3097,
                  "end": 3100,
                  "name": "r4a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ArrayExpression",
                  "start": 3103,
                  "end": 3119,
                  "elements": [
                    {
                      "type": "Identifier",
                      "start": 3104,
                      "end": 3110,
                      "name": "r4arg2",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 3112,
                      "end": 3118,
                      "name": "r4arg1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ]
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 3125,
            "end": 3152,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 3129,
                "end": 3151,
                "id": {
                  "type": "Identifier",
                  "start": 3129,
                  "end": 3132,
                  "name": "r4b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ArrayExpression",
                  "start": 3135,
                  "end": 3151,
                  "elements": [
                    {
                      "type": "Identifier",
                      "start": 3136,
                      "end": 3142,
                      "name": "r4arg1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 3144,
                      "end": 3150,
                      "name": "r4arg2",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ]
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 3158,
            "end": 3211,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 3162,
                "end": 3210,
                "id": {
                  "type": "Identifier",
                  "start": 3162,
                  "end": 3210,
                  "name": "r5arg1",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3168,
                    "end": 3210,
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "start": 3170,
                      "end": 3210,
                      "abstract": false,
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "start": 3174,
                        "end": 3193,
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "start": 3175,
                            "end": 3192,
                            "name": {
                              "type": "Identifier",
                              "start": 3175,
                              "end": 3176,
                              "name": "T",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "constraint": {
                              "type": "TSTypeReference",
                              "start": 3185,
                              "end": 3192,
                              "typeName": {
                                "type": "Identifier",
                                "start": 3185,
                                "end": 3192,
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
                          "start": 3194,
                          "end": 3198,
                          "name": "x",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 3195,
                            "end": 3198,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 3197,
                              "end": 3198,
                              "typeName": {
                                "type": "Identifier",
                                "start": 3197,
                                "end": 3198,
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
                          "start": 3200,
                          "end": 3204,
                          "name": "y",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 3201,
                            "end": 3204,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 3203,
                              "end": 3204,
                              "typeName": {
                                "type": "Identifier",
                                "start": 3203,
                                "end": 3204,
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
                        "start": 3206,
                        "end": 3210,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 3209,
                          "end": 3210,
                          "typeName": {
                            "type": "Identifier",
                            "start": 3209,
                            "end": 3210,
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
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 3216,
            "end": 3294,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 3220,
                "end": 3293,
                "id": {
                  "type": "Identifier",
                  "start": 3220,
                  "end": 3293,
                  "name": "r5arg2",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3226,
                    "end": 3293,
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "start": 3228,
                      "end": 3293,
                      "abstract": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 3233,
                          "end": 3251,
                          "name": "x",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 3234,
                            "end": 3251,
                            "typeAnnotation": {
                              "type": "TSTypeLiteral",
                              "start": 3236,
                              "end": 3251,
                              "members": [
                                {
                                  "type": "TSPropertySignature",
                                  "start": 3238,
                                  "end": 3249,
                                  "computed": false,
                                  "optional": false,
                                  "readonly": false,
                                  "key": {
                                    "type": "Identifier",
                                    "start": 3238,
                                    "end": 3241,
                                    "name": "foo",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 3241,
                                    "end": 3249,
                                    "typeAnnotation": {
                                      "type": "TSStringKeyword",
                                      "start": 3243,
                                      "end": 3249
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
                          "start": 3253,
                          "end": 3284,
                          "name": "y",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 3254,
                            "end": 3284,
                            "typeAnnotation": {
                              "type": "TSTypeLiteral",
                              "start": 3256,
                              "end": 3284,
                              "members": [
                                {
                                  "type": "TSPropertySignature",
                                  "start": 3258,
                                  "end": 3270,
                                  "computed": false,
                                  "optional": false,
                                  "readonly": false,
                                  "key": {
                                    "type": "Identifier",
                                    "start": 3258,
                                    "end": 3261,
                                    "name": "foo",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 3261,
                                    "end": 3269,
                                    "typeAnnotation": {
                                      "type": "TSStringKeyword",
                                      "start": 3263,
                                      "end": 3269
                                    }
                                  },
                                  "accessibility": null,
                                  "static": false
                                },
                                {
                                  "type": "TSPropertySignature",
                                  "start": 3271,
                                  "end": 3282,
                                  "computed": false,
                                  "optional": false,
                                  "readonly": false,
                                  "key": {
                                    "type": "Identifier",
                                    "start": 3271,
                                    "end": 3274,
                                    "name": "bar",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 3274,
                                    "end": 3282,
                                    "typeAnnotation": {
                                      "type": "TSStringKeyword",
                                      "start": 3276,
                                      "end": 3282
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
                        "start": 3286,
                        "end": 3293,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 3289,
                          "end": 3293,
                          "typeName": {
                            "type": "Identifier",
                            "start": 3289,
                            "end": 3293,
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
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 3299,
            "end": 3322,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 3303,
                "end": 3321,
                "id": {
                  "type": "Identifier",
                  "start": 3303,
                  "end": 3305,
                  "name": "r5",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 3308,
                  "end": 3321,
                  "callee": {
                    "type": "Identifier",
                    "start": 3308,
                    "end": 3313,
                    "name": "foo11",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 3314,
                      "end": 3320,
                      "name": "r5arg1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 3334,
            "end": 3361,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 3338,
                "end": 3360,
                "id": {
                  "type": "Identifier",
                  "start": 3338,
                  "end": 3341,
                  "name": "r5a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ArrayExpression",
                  "start": 3344,
                  "end": 3360,
                  "elements": [
                    {
                      "type": "Identifier",
                      "start": 3345,
                      "end": 3351,
                      "name": "r5arg2",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 3353,
                      "end": 3359,
                      "name": "r5arg1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ]
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 3366,
            "end": 3393,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 3370,
                "end": 3392,
                "id": {
                  "type": "Identifier",
                  "start": 3370,
                  "end": 3373,
                  "name": "r5b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ArrayExpression",
                  "start": 3376,
                  "end": 3392,
                  "elements": [
                    {
                      "type": "Identifier",
                      "start": 3377,
                      "end": 3383,
                      "name": "r5arg1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 3385,
                      "end": 3391,
                      "name": "r5arg2",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ]
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 3399,
            "end": 3470,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 3403,
                "end": 3469,
                "id": {
                  "type": "Identifier",
                  "start": 3403,
                  "end": 3469,
                  "name": "r6arg1",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3409,
                    "end": 3469,
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "start": 3411,
                      "end": 3469,
                      "abstract": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 3416,
                          "end": 3430,
                          "name": "x",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 3417,
                            "end": 3430,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 3419,
                              "end": 3430,
                              "typeName": {
                                "type": "Identifier",
                                "start": 3419,
                                "end": 3424,
                                "name": "Array",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "start": 3424,
                                "end": 3430,
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "start": 3425,
                                    "end": 3429,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 3425,
                                      "end": 3429,
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
                          "start": 3432,
                          "end": 3450,
                          "name": "y",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 3433,
                            "end": 3450,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 3435,
                              "end": 3450,
                              "typeName": {
                                "type": "Identifier",
                                "start": 3435,
                                "end": 3440,
                                "name": "Array",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "start": 3440,
                                "end": 3450,
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "start": 3441,
                                    "end": 3449,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 3441,
                                      "end": 3449,
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
                        "start": 3452,
                        "end": 3469,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 3455,
                          "end": 3469,
                          "typeName": {
                            "type": "Identifier",
                            "start": 3455,
                            "end": 3460,
                            "name": "Array",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 3460,
                            "end": 3469,
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "start": 3461,
                                "end": 3468,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 3461,
                                  "end": 3468,
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
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 3475,
            "end": 3556,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 3479,
                "end": 3555,
                "id": {
                  "type": "Identifier",
                  "start": 3479,
                  "end": 3555,
                  "name": "r6arg2",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3485,
                    "end": 3555,
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "start": 3487,
                      "end": 3555,
                      "abstract": false,
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "start": 3491,
                        "end": 3518,
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "start": 3492,
                            "end": 3517,
                            "name": {
                              "type": "Identifier",
                              "start": 3492,
                              "end": 3493,
                              "name": "T",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "constraint": {
                              "type": "TSTypeReference",
                              "start": 3502,
                              "end": 3517,
                              "typeName": {
                                "type": "Identifier",
                                "start": 3502,
                                "end": 3507,
                                "name": "Array",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "start": 3507,
                                "end": 3517,
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "start": 3508,
                                    "end": 3516,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 3508,
                                      "end": 3516,
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
                          "start": 3519,
                          "end": 3533,
                          "name": "x",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 3520,
                            "end": 3533,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 3522,
                              "end": 3533,
                              "typeName": {
                                "type": "Identifier",
                                "start": 3522,
                                "end": 3527,
                                "name": "Array",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "start": 3527,
                                "end": 3533,
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "start": 3528,
                                    "end": 3532,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 3528,
                                      "end": 3532,
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
                          "start": 3535,
                          "end": 3549,
                          "name": "y",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 3536,
                            "end": 3549,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 3538,
                              "end": 3549,
                              "typeName": {
                                "type": "Identifier",
                                "start": 3538,
                                "end": 3543,
                                "name": "Array",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "start": 3543,
                                "end": 3549,
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "start": 3544,
                                    "end": 3548,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 3544,
                                      "end": 3548,
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
                        "start": 3551,
                        "end": 3555,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 3554,
                          "end": 3555,
                          "typeName": {
                            "type": "Identifier",
                            "start": 3554,
                            "end": 3555,
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
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 3561,
            "end": 3584,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 3565,
                "end": 3583,
                "id": {
                  "type": "Identifier",
                  "start": 3565,
                  "end": 3567,
                  "name": "r6",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 3570,
                  "end": 3583,
                  "callee": {
                    "type": "Identifier",
                    "start": 3570,
                    "end": 3575,
                    "name": "foo12",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 3576,
                      "end": 3582,
                      "name": "r6arg1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 3651,
            "end": 3678,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 3655,
                "end": 3677,
                "id": {
                  "type": "Identifier",
                  "start": 3655,
                  "end": 3658,
                  "name": "r6a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ArrayExpression",
                  "start": 3661,
                  "end": 3677,
                  "elements": [
                    {
                      "type": "Identifier",
                      "start": 3662,
                      "end": 3668,
                      "name": "r6arg2",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 3670,
                      "end": 3676,
                      "name": "r6arg1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ]
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 3683,
            "end": 3710,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 3687,
                "end": 3709,
                "id": {
                  "type": "Identifier",
                  "start": 3687,
                  "end": 3690,
                  "name": "r6b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ArrayExpression",
                  "start": 3693,
                  "end": 3709,
                  "elements": [
                    {
                      "type": "Identifier",
                      "start": 3694,
                      "end": 3700,
                      "name": "r6arg1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 3702,
                      "end": 3708,
                      "name": "r6arg2",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ]
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 3716,
            "end": 3760,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 3720,
                "end": 3759,
                "id": {
                  "type": "Identifier",
                  "start": 3720,
                  "end": 3759,
                  "name": "r7arg1",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3726,
                    "end": 3759,
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "start": 3728,
                      "end": 3759,
                      "abstract": false,
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "start": 3732,
                        "end": 3735,
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "start": 3733,
                            "end": 3734,
                            "name": {
                              "type": "Identifier",
                              "start": 3733,
                              "end": 3734,
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
                          "start": 3736,
                          "end": 3753,
                          "name": "x",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 3737,
                            "end": 3753,
                            "typeAnnotation": {
                              "type": "TSTypeLiteral",
                              "start": 3739,
                              "end": 3753,
                              "members": [
                                {
                                  "type": "TSPropertySignature",
                                  "start": 3741,
                                  "end": 3746,
                                  "computed": false,
                                  "optional": false,
                                  "readonly": false,
                                  "key": {
                                    "type": "Identifier",
                                    "start": 3741,
                                    "end": 3742,
                                    "name": "a",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 3742,
                                    "end": 3745,
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "start": 3744,
                                      "end": 3745,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 3744,
                                        "end": 3745,
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
                                  "start": 3747,
                                  "end": 3751,
                                  "computed": false,
                                  "optional": false,
                                  "readonly": false,
                                  "key": {
                                    "type": "Identifier",
                                    "start": 3747,
                                    "end": 3748,
                                    "name": "b",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 3748,
                                    "end": 3751,
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "start": 3750,
                                      "end": 3751,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 3750,
                                        "end": 3751,
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
                        "start": 3755,
                        "end": 3759,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 3758,
                          "end": 3759,
                          "typeName": {
                            "type": "Identifier",
                            "start": 3758,
                            "end": 3759,
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
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 3765,
            "end": 3821,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 3769,
                "end": 3820,
                "id": {
                  "type": "Identifier",
                  "start": 3769,
                  "end": 3820,
                  "name": "r7arg2",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3775,
                    "end": 3820,
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "start": 3777,
                      "end": 3820,
                      "abstract": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 3782,
                          "end": 3809,
                          "name": "x",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 3783,
                            "end": 3809,
                            "typeAnnotation": {
                              "type": "TSTypeLiteral",
                              "start": 3785,
                              "end": 3809,
                              "members": [
                                {
                                  "type": "TSPropertySignature",
                                  "start": 3787,
                                  "end": 3797,
                                  "computed": false,
                                  "optional": false,
                                  "readonly": false,
                                  "key": {
                                    "type": "Identifier",
                                    "start": 3787,
                                    "end": 3788,
                                    "name": "a",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 3788,
                                    "end": 3796,
                                    "typeAnnotation": {
                                      "type": "TSStringKeyword",
                                      "start": 3790,
                                      "end": 3796
                                    }
                                  },
                                  "accessibility": null,
                                  "static": false
                                },
                                {
                                  "type": "TSPropertySignature",
                                  "start": 3798,
                                  "end": 3807,
                                  "computed": false,
                                  "optional": false,
                                  "readonly": false,
                                  "key": {
                                    "type": "Identifier",
                                    "start": 3798,
                                    "end": 3799,
                                    "name": "b",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 3799,
                                    "end": 3807,
                                    "typeAnnotation": {
                                      "type": "TSNumberKeyword",
                                      "start": 3801,
                                      "end": 3807
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
                        "start": 3811,
                        "end": 3820,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 3814,
                          "end": 3820
                        }
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 3826,
            "end": 3849,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 3830,
                "end": 3848,
                "id": {
                  "type": "Identifier",
                  "start": 3830,
                  "end": 3832,
                  "name": "r7",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 3835,
                  "end": 3848,
                  "callee": {
                    "type": "Identifier",
                    "start": 3835,
                    "end": 3840,
                    "name": "foo15",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 3841,
                      "end": 3847,
                      "name": "r7arg1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 3907,
            "end": 3934,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 3911,
                "end": 3933,
                "id": {
                  "type": "Identifier",
                  "start": 3911,
                  "end": 3914,
                  "name": "r7a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ArrayExpression",
                  "start": 3917,
                  "end": 3933,
                  "elements": [
                    {
                      "type": "Identifier",
                      "start": 3918,
                      "end": 3924,
                      "name": "r7arg2",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 3926,
                      "end": 3932,
                      "name": "r7arg1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ]
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 3939,
            "end": 3966,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 3943,
                "end": 3965,
                "id": {
                  "type": "Identifier",
                  "start": 3943,
                  "end": 3946,
                  "name": "r7b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ArrayExpression",
                  "start": 3949,
                  "end": 3965,
                  "elements": [
                    {
                      "type": "Identifier",
                      "start": 3950,
                      "end": 3956,
                      "name": "r7arg1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 3958,
                      "end": 3964,
                      "name": "r7arg2",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ]
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 3972,
            "end": 4034,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 3976,
                "end": 4033,
                "id": {
                  "type": "Identifier",
                  "start": 3976,
                  "end": 4033,
                  "name": "r7arg3",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3982,
                    "end": 4033,
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "start": 3984,
                      "end": 4033,
                      "abstract": false,
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "start": 3988,
                        "end": 4004,
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "start": 3989,
                            "end": 4003,
                            "name": {
                              "type": "Identifier",
                              "start": 3989,
                              "end": 3990,
                              "name": "T",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "constraint": {
                              "type": "TSTypeReference",
                              "start": 3999,
                              "end": 4003,
                              "typeName": {
                                "type": "Identifier",
                                "start": 3999,
                                "end": 4003,
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
                          "start": 4005,
                          "end": 4022,
                          "name": "x",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 4006,
                            "end": 4022,
                            "typeAnnotation": {
                              "type": "TSTypeLiteral",
                              "start": 4008,
                              "end": 4022,
                              "members": [
                                {
                                  "type": "TSPropertySignature",
                                  "start": 4010,
                                  "end": 4015,
                                  "computed": false,
                                  "optional": false,
                                  "readonly": false,
                                  "key": {
                                    "type": "Identifier",
                                    "start": 4010,
                                    "end": 4011,
                                    "name": "a",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 4011,
                                    "end": 4014,
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "start": 4013,
                                      "end": 4014,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 4013,
                                        "end": 4014,
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
                                  "start": 4016,
                                  "end": 4020,
                                  "computed": false,
                                  "optional": false,
                                  "readonly": false,
                                  "key": {
                                    "type": "Identifier",
                                    "start": 4016,
                                    "end": 4017,
                                    "name": "b",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 4017,
                                    "end": 4020,
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "start": 4019,
                                      "end": 4020,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 4019,
                                        "end": 4020,
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
                        "start": 4024,
                        "end": 4033,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 4027,
                          "end": 4033
                        }
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 4039,
            "end": 4063,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 4043,
                "end": 4062,
                "id": {
                  "type": "Identifier",
                  "start": 4043,
                  "end": 4046,
                  "name": "r7c",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 4049,
                  "end": 4062,
                  "callee": {
                    "type": "Identifier",
                    "start": 4049,
                    "end": 4054,
                    "name": "foo15",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 4055,
                      "end": 4061,
                      "name": "r7arg3",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 4075,
            "end": 4102,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 4079,
                "end": 4101,
                "id": {
                  "type": "Identifier",
                  "start": 4079,
                  "end": 4082,
                  "name": "r7d",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ArrayExpression",
                  "start": 4085,
                  "end": 4101,
                  "elements": [
                    {
                      "type": "Identifier",
                      "start": 4086,
                      "end": 4092,
                      "name": "r7arg2",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 4094,
                      "end": 4100,
                      "name": "r7arg3",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ]
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 4107,
            "end": 4134,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 4111,
                "end": 4133,
                "id": {
                  "type": "Identifier",
                  "start": 4111,
                  "end": 4114,
                  "name": "r7e",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ArrayExpression",
                  "start": 4117,
                  "end": 4133,
                  "elements": [
                    {
                      "type": "Identifier",
                      "start": 4118,
                      "end": 4124,
                      "name": "r7arg3",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 4126,
                      "end": 4132,
                      "name": "r7arg2",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ]
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 4140,
            "end": 4186,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 4144,
                "end": 4185,
                "id": {
                  "type": "Identifier",
                  "start": 4144,
                  "end": 4185,
                  "name": "r8arg",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 4149,
                    "end": 4185,
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "start": 4151,
                      "end": 4185,
                      "abstract": false,
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "start": 4155,
                        "end": 4158,
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "start": 4156,
                            "end": 4157,
                            "name": {
                              "type": "Identifier",
                              "start": 4156,
                              "end": 4157,
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
                          "start": 4159,
                          "end": 4177,
                          "name": "x",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 4160,
                            "end": 4177,
                            "typeAnnotation": {
                              "type": "TSConstructorType",
                              "start": 4162,
                              "end": 4177,
                              "abstract": false,
                              "typeParameters": null,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "start": 4167,
                                  "end": 4171,
                                  "name": "a",
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 4168,
                                    "end": 4171,
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "start": 4170,
                                      "end": 4171,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 4170,
                                        "end": 4171,
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
                                "start": 4173,
                                "end": 4177,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 4176,
                                  "end": 4177,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 4176,
                                    "end": 4177,
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
                        "start": 4179,
                        "end": 4185,
                        "typeAnnotation": {
                          "type": "TSArrayType",
                          "start": 4182,
                          "end": 4185,
                          "elementType": {
                            "type": "TSTypeReference",
                            "start": 4182,
                            "end": 4183,
                            "typeName": {
                              "type": "Identifier",
                              "start": 4182,
                              "end": 4183,
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
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 4191,
            "end": 4213,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 4195,
                "end": 4212,
                "id": {
                  "type": "Identifier",
                  "start": 4195,
                  "end": 4197,
                  "name": "r8",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 4200,
                  "end": 4212,
                  "callee": {
                    "type": "Identifier",
                    "start": 4200,
                    "end": 4205,
                    "name": "foo16",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 4206,
                      "end": 4211,
                      "name": "r8arg",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 4226,
            "end": 4274,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 4230,
                "end": 4273,
                "id": {
                  "type": "Identifier",
                  "start": 4230,
                  "end": 4273,
                  "name": "r9arg",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 4235,
                    "end": 4273,
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "start": 4237,
                      "end": 4273,
                      "abstract": false,
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "start": 4241,
                        "end": 4244,
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "start": 4242,
                            "end": 4243,
                            "name": {
                              "type": "Identifier",
                              "start": 4242,
                              "end": 4243,
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
                          "start": 4245,
                          "end": 4263,
                          "name": "x",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 4246,
                            "end": 4263,
                            "typeAnnotation": {
                              "type": "TSConstructorType",
                              "start": 4248,
                              "end": 4263,
                              "abstract": false,
                              "typeParameters": null,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "start": 4253,
                                  "end": 4257,
                                  "name": "a",
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 4254,
                                    "end": 4257,
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "start": 4256,
                                      "end": 4257,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 4256,
                                        "end": 4257,
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
                                "start": 4259,
                                "end": 4263,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 4262,
                                  "end": 4263,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 4262,
                                    "end": 4263,
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
                        "start": 4265,
                        "end": 4273,
                        "typeAnnotation": {
                          "type": "TSArrayType",
                          "start": 4268,
                          "end": 4273,
                          "elementType": {
                            "type": "TSAnyKeyword",
                            "start": 4268,
                            "end": 4271
                          }
                        }
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 4279,
            "end": 4301,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 4283,
                "end": 4300,
                "id": {
                  "type": "Identifier",
                  "start": 4283,
                  "end": 4285,
                  "name": "r9",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 4288,
                  "end": 4300,
                  "callee": {
                    "type": "Identifier",
                    "start": 4288,
                    "end": 4293,
                    "name": "foo17",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 4294,
                      "end": 4299,
                      "name": "r9arg",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "definite": false
              }
            ],
            "kind": "var",
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
      "start": 4462,
      "end": 4928,
      "id": {
        "type": "Identifier",
        "start": 4469,
        "end": 4500,
        "name": "WithGenericSignaturesInBaseType",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 4501,
        "end": 4928,
        "body": [
          {
            "type": "TSDeclareFunction",
            "start": 4507,
            "end": 4566,
            "id": {
              "type": "Identifier",
              "start": 4524,
              "end": 4528,
              "name": "foo2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 4529,
                "end": 4553,
                "name": "a2",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 4531,
                  "end": 4553,
                  "typeAnnotation": {
                    "type": "TSConstructorType",
                    "start": 4533,
                    "end": 4553,
                    "abstract": false,
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 4537,
                      "end": 4540,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 4538,
                          "end": 4539,
                          "name": {
                            "type": "Identifier",
                            "start": 4538,
                            "end": 4539,
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
                        "start": 4541,
                        "end": 4545,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 4542,
                          "end": 4545,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 4544,
                            "end": 4545,
                            "typeName": {
                              "type": "Identifier",
                              "start": 4544,
                              "end": 4545,
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
                      "start": 4547,
                      "end": 4553,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 4550,
                        "end": 4553,
                        "elementType": {
                          "type": "TSTypeReference",
                          "start": 4550,
                          "end": 4551,
                          "typeName": {
                            "type": "Identifier",
                            "start": 4550,
                            "end": 4551,
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
                "decorators": [],
                "optional": false
              }
            ],
            "body": null,
            "declare": true,
            "typeParameters": null,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 4554,
              "end": 4565,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 4556,
                "end": 4565,
                "exprName": {
                  "type": "Identifier",
                  "start": 4563,
                  "end": 4565,
                  "name": "a2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            }
          },
          {
            "type": "TSDeclareFunction",
            "start": 4571,
            "end": 4607,
            "id": {
              "type": "Identifier",
              "start": 4588,
              "end": 4592,
              "name": "foo2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 4593,
                "end": 4600,
                "name": "a2",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 4595,
                  "end": 4600,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 4597,
                    "end": 4600
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "body": null,
            "declare": true,
            "typeParameters": null,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 4601,
              "end": 4606,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 4603,
                "end": 4606
              }
            }
          },
          {
            "type": "VariableDeclaration",
            "start": 4612,
            "end": 4650,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 4616,
                "end": 4649,
                "id": {
                  "type": "Identifier",
                  "start": 4616,
                  "end": 4649,
                  "name": "r2arg2",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 4622,
                    "end": 4649,
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "start": 4624,
                      "end": 4649,
                      "abstract": false,
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "start": 4628,
                        "end": 4631,
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "start": 4629,
                            "end": 4630,
                            "name": {
                              "type": "Identifier",
                              "start": 4629,
                              "end": 4630,
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
                          "start": 4632,
                          "end": 4636,
                          "name": "x",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 4633,
                            "end": 4636,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 4635,
                              "end": 4636,
                              "typeName": {
                                "type": "Identifier",
                                "start": 4635,
                                "end": 4636,
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
                        "start": 4638,
                        "end": 4649,
                        "typeAnnotation": {
                          "type": "TSArrayType",
                          "start": 4641,
                          "end": 4649,
                          "elementType": {
                            "type": "TSStringKeyword",
                            "start": 4641,
                            "end": 4647
                          }
                        }
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 4655,
            "end": 4677,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 4659,
                "end": 4676,
                "id": {
                  "type": "Identifier",
                  "start": 4659,
                  "end": 4661,
                  "name": "r2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 4664,
                  "end": 4676,
                  "callee": {
                    "type": "Identifier",
                    "start": 4664,
                    "end": 4668,
                    "name": "foo2",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 4669,
                      "end": 4675,
                      "name": "r2arg2",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "TSDeclareFunction",
            "start": 4749,
            "end": 4813,
            "id": {
              "type": "Identifier",
              "start": 4766,
              "end": 4770,
              "name": "foo3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 4771,
                "end": 4800,
                "name": "a2",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 4773,
                  "end": 4800,
                  "typeAnnotation": {
                    "type": "TSConstructorType",
                    "start": 4775,
                    "end": 4800,
                    "abstract": false,
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 4779,
                      "end": 4782,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 4780,
                          "end": 4781,
                          "name": {
                            "type": "Identifier",
                            "start": 4780,
                            "end": 4781,
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
                        "start": 4783,
                        "end": 4787,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 4784,
                          "end": 4787,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 4786,
                            "end": 4787,
                            "typeName": {
                              "type": "Identifier",
                              "start": 4786,
                              "end": 4787,
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
                      "start": 4789,
                      "end": 4800,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 4792,
                        "end": 4800,
                        "elementType": {
                          "type": "TSStringKeyword",
                          "start": 4792,
                          "end": 4798
                        }
                      }
                    }
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "body": null,
            "declare": true,
            "typeParameters": null,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 4801,
              "end": 4812,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 4803,
                "end": 4812,
                "exprName": {
                  "type": "Identifier",
                  "start": 4810,
                  "end": 4812,
                  "name": "a2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            }
          },
          {
            "type": "TSDeclareFunction",
            "start": 4818,
            "end": 4854,
            "id": {
              "type": "Identifier",
              "start": 4835,
              "end": 4839,
              "name": "foo3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 4840,
                "end": 4847,
                "name": "a2",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 4842,
                  "end": 4847,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 4844,
                    "end": 4847
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "body": null,
            "declare": true,
            "typeParameters": null,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 4848,
              "end": 4853,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 4850,
                "end": 4853
              }
            }
          },
          {
            "type": "VariableDeclaration",
            "start": 4859,
            "end": 4892,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 4863,
                "end": 4891,
                "id": {
                  "type": "Identifier",
                  "start": 4863,
                  "end": 4891,
                  "name": "r3arg2",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 4869,
                    "end": 4891,
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "start": 4871,
                      "end": 4891,
                      "abstract": false,
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "start": 4875,
                        "end": 4878,
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "start": 4876,
                            "end": 4877,
                            "name": {
                              "type": "Identifier",
                              "start": 4876,
                              "end": 4877,
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
                          "start": 4879,
                          "end": 4883,
                          "name": "x",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 4880,
                            "end": 4883,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 4882,
                              "end": 4883,
                              "typeName": {
                                "type": "Identifier",
                                "start": 4882,
                                "end": 4883,
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
                        "start": 4885,
                        "end": 4891,
                        "typeAnnotation": {
                          "type": "TSArrayType",
                          "start": 4888,
                          "end": 4891,
                          "elementType": {
                            "type": "TSTypeReference",
                            "start": 4888,
                            "end": 4889,
                            "typeName": {
                              "type": "Identifier",
                              "start": 4888,
                              "end": 4889,
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
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 4897,
            "end": 4919,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 4901,
                "end": 4918,
                "id": {
                  "type": "Identifier",
                  "start": 4901,
                  "end": 4903,
                  "name": "r3",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 4906,
                  "end": 4918,
                  "callee": {
                    "type": "Identifier",
                    "start": 4906,
                    "end": 4910,
                    "name": "foo3",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 4911,
                      "end": 4917,
                      "name": "r3arg2",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
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
