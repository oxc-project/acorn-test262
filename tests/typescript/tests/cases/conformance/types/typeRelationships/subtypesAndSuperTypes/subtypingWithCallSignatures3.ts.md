__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 161,
  "end": 4768,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 161,
      "end": 4312,
      "id": {
        "type": "Identifier",
        "start": 168,
        "end": 174,
        "decorators": [],
        "name": "Errors",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 175,
        "end": 4312,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 181,
            "end": 208,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 187,
              "end": 191,
              "decorators": [],
              "name": "Base",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "start": 192,
              "end": 208,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 194,
                  "end": 206,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 194,
                    "end": 197,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
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
                  "value": null,
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null
                }
              ]
            },
            "abstract": false,
            "declare": false
          },
          {
            "type": "ClassDeclaration",
            "start": 213,
            "end": 256,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 219,
              "end": 226,
              "decorators": [],
              "name": "Derived",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "superClass": {
              "type": "Identifier",
              "start": 235,
              "end": 239,
              "decorators": [],
              "name": "Base",
              "optional": false,
              "typeAnnotation": null
            },
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "start": 240,
              "end": 256,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 242,
                  "end": 254,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 242,
                    "end": 245,
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null
                  },
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
                  "value": null,
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null
                }
              ]
            },
            "abstract": false,
            "declare": false
          },
          {
            "type": "ClassDeclaration",
            "start": 261,
            "end": 308,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 267,
              "end": 275,
              "decorators": [],
              "name": "Derived2",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "superClass": {
              "type": "Identifier",
              "start": 284,
              "end": 291,
              "decorators": [],
              "name": "Derived",
              "optional": false,
              "typeAnnotation": null
            },
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "start": 292,
              "end": 308,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 294,
                  "end": 306,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 294,
                    "end": 297,
                    "decorators": [],
                    "name": "baz",
                    "optional": false,
                    "typeAnnotation": null
                  },
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
                  "value": null,
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null
                }
              ]
            },
            "abstract": false,
            "declare": false
          },
          {
            "type": "ClassDeclaration",
            "start": 313,
            "end": 362,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 319,
              "end": 331,
              "decorators": [],
              "name": "OtherDerived",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "superClass": {
              "type": "Identifier",
              "start": 340,
              "end": 344,
              "decorators": [],
              "name": "Base",
              "optional": false,
              "typeAnnotation": null
            },
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "start": 345,
              "end": 362,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 347,
                  "end": 360,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 347,
                    "end": 351,
                    "decorators": [],
                    "name": "bing",
                    "optional": false,
                    "typeAnnotation": null
                  },
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
                  "value": null,
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null
                }
              ]
            },
            "abstract": false,
            "declare": false
          },
          {
            "type": "TSDeclareFunction",
            "start": 368,
            "end": 430,
            "id": {
              "type": "Identifier",
              "start": 385,
              "end": 389,
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "typeAnnotation": null
            },
            "generator": false,
            "async": false,
            "declare": true,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 390,
                "end": 417,
                "decorators": [],
                "name": "a2",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 392,
                  "end": 417,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 394,
                    "end": 417,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 395,
                        "end": 404,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 396,
                          "end": 404,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 398,
                            "end": 404
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 406,
                      "end": 417,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 409,
                        "end": 417,
                        "elementType": {
                          "type": "TSStringKeyword",
                          "start": 409,
                          "end": 415
                        }
                      }
                    }
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 418,
              "end": 429,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 420,
                "end": 429,
                "exprName": {
                  "type": "Identifier",
                  "start": 427,
                  "end": 429,
                  "decorators": [],
                  "name": "a2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "body": null,
            "expression": false
          },
          {
            "type": "TSDeclareFunction",
            "start": 435,
            "end": 471,
            "id": {
              "type": "Identifier",
              "start": 452,
              "end": 456,
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "typeAnnotation": null
            },
            "generator": false,
            "async": false,
            "declare": true,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 457,
                "end": 464,
                "decorators": [],
                "name": "a2",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 459,
                  "end": 464,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 461,
                    "end": 464
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 465,
              "end": 470,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 467,
                "end": 470
              }
            },
            "body": null,
            "expression": false
          },
          {
            "type": "TSDeclareFunction",
            "start": 477,
            "end": 568,
            "id": {
              "type": "Identifier",
              "start": 494,
              "end": 498,
              "decorators": [],
              "name": "foo7",
              "optional": false,
              "typeAnnotation": null
            },
            "generator": false,
            "async": false,
            "declare": true,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 499,
                "end": 555,
                "decorators": [],
                "name": "a2",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 501,
                  "end": 555,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 503,
                    "end": 555,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 504,
                        "end": 529,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 505,
                          "end": 529,
                          "typeAnnotation": {
                            "type": "TSFunctionType",
                            "start": 507,
                            "end": 529,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 508,
                                "end": 517,
                                "decorators": [],
                                "name": "arg",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 511,
                                  "end": 517,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 513,
                                    "end": 517,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 513,
                                      "end": 517,
                                      "decorators": [],
                                      "name": "Base",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  }
                                }
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "start": 519,
                              "end": 529,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 522,
                                "end": 529,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 522,
                                  "end": 529,
                                  "decorators": [],
                                  "name": "Derived",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              }
                            }
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 531,
                      "end": 555,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 534,
                        "end": 555,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 535,
                            "end": 542,
                            "decorators": [],
                            "name": "r",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 536,
                              "end": 542,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 538,
                                "end": 542,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 538,
                                  "end": 542,
                                  "decorators": [],
                                  "name": "Base",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 544,
                          "end": 555,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 547,
                            "end": 555,
                            "typeName": {
                              "type": "Identifier",
                              "start": 547,
                              "end": 555,
                              "decorators": [],
                              "name": "Derived2",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        }
                      }
                    }
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 556,
              "end": 567,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 558,
                "end": 567,
                "exprName": {
                  "type": "Identifier",
                  "start": 565,
                  "end": 567,
                  "decorators": [],
                  "name": "a2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "body": null,
            "expression": false
          },
          {
            "type": "TSDeclareFunction",
            "start": 573,
            "end": 609,
            "id": {
              "type": "Identifier",
              "start": 590,
              "end": 594,
              "decorators": [],
              "name": "foo7",
              "optional": false,
              "typeAnnotation": null
            },
            "generator": false,
            "async": false,
            "declare": true,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 595,
                "end": 602,
                "decorators": [],
                "name": "a2",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 597,
                  "end": 602,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 599,
                    "end": 602
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 603,
              "end": 608,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 605,
                "end": 608
              }
            },
            "body": null,
            "expression": false
          },
          {
            "type": "TSDeclareFunction",
            "start": 615,
            "end": 733,
            "id": {
              "type": "Identifier",
              "start": 632,
              "end": 636,
              "decorators": [],
              "name": "foo8",
              "optional": false,
              "typeAnnotation": null
            },
            "generator": false,
            "async": false,
            "declare": true,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 637,
                "end": 720,
                "decorators": [],
                "name": "a2",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 639,
                  "end": 720,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 641,
                    "end": 720,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 642,
                        "end": 667,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 643,
                          "end": 667,
                          "typeAnnotation": {
                            "type": "TSFunctionType",
                            "start": 645,
                            "end": 667,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 646,
                                "end": 655,
                                "decorators": [],
                                "name": "arg",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 649,
                                  "end": 655,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 651,
                                    "end": 655,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 651,
                                      "end": 655,
                                      "decorators": [],
                                      "name": "Base",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  }
                                }
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "start": 657,
                              "end": 667,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 660,
                                "end": 667,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 660,
                                  "end": 667,
                                  "decorators": [],
                                  "name": "Derived",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              }
                            }
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "start": 669,
                        "end": 695,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 670,
                          "end": 695,
                          "typeAnnotation": {
                            "type": "TSFunctionType",
                            "start": 672,
                            "end": 695,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 673,
                                "end": 683,
                                "decorators": [],
                                "name": "arg2",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 677,
                                  "end": 683,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 679,
                                    "end": 683,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 679,
                                      "end": 683,
                                      "decorators": [],
                                      "name": "Base",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  }
                                }
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "start": 685,
                              "end": 695,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 688,
                                "end": 695,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 688,
                                  "end": 695,
                                  "decorators": [],
                                  "name": "Derived",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              }
                            }
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 697,
                      "end": 720,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 700,
                        "end": 720,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 701,
                            "end": 708,
                            "decorators": [],
                            "name": "r",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 702,
                              "end": 708,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 704,
                                "end": 708,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 704,
                                  "end": 708,
                                  "decorators": [],
                                  "name": "Base",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 710,
                          "end": 720,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 713,
                            "end": 720,
                            "typeName": {
                              "type": "Identifier",
                              "start": 713,
                              "end": 720,
                              "decorators": [],
                              "name": "Derived",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        }
                      }
                    }
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 721,
              "end": 732,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 723,
                "end": 732,
                "exprName": {
                  "type": "Identifier",
                  "start": 730,
                  "end": 732,
                  "decorators": [],
                  "name": "a2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "body": null,
            "expression": false
          },
          {
            "type": "TSDeclareFunction",
            "start": 738,
            "end": 774,
            "id": {
              "type": "Identifier",
              "start": 755,
              "end": 759,
              "decorators": [],
              "name": "foo8",
              "optional": false,
              "typeAnnotation": null
            },
            "generator": false,
            "async": false,
            "declare": true,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 760,
                "end": 767,
                "decorators": [],
                "name": "a2",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 762,
                  "end": 767,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 764,
                    "end": 767
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 768,
              "end": 773,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 770,
                "end": 773
              }
            },
            "body": null,
            "expression": false
          },
          {
            "type": "TSDeclareFunction",
            "start": 780,
            "end": 842,
            "id": {
              "type": "Identifier",
              "start": 797,
              "end": 802,
              "decorators": [],
              "name": "foo10",
              "optional": false,
              "typeAnnotation": null
            },
            "generator": false,
            "async": false,
            "declare": true,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 803,
                "end": 829,
                "decorators": [],
                "name": "a2",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 805,
                  "end": 829,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 807,
                    "end": 829,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "RestElement",
                        "start": 808,
                        "end": 820,
                        "decorators": [],
                        "argument": {
                          "type": "Identifier",
                          "start": 811,
                          "end": 812,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 812,
                          "end": 820,
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "start": 814,
                            "end": 820,
                            "elementType": {
                              "type": "TSTypeReference",
                              "start": 814,
                              "end": 818,
                              "typeName": {
                                "type": "Identifier",
                                "start": 814,
                                "end": 818,
                                "decorators": [],
                                "name": "Base",
                                "optional": false,
                                "typeAnnotation": null
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
                      "start": 822,
                      "end": 829,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 825,
                        "end": 829,
                        "typeName": {
                          "type": "Identifier",
                          "start": 825,
                          "end": 829,
                          "decorators": [],
                          "name": "Base",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 830,
              "end": 841,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 832,
                "end": 841,
                "exprName": {
                  "type": "Identifier",
                  "start": 839,
                  "end": 841,
                  "decorators": [],
                  "name": "a2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "body": null,
            "expression": false
          },
          {
            "type": "TSDeclareFunction",
            "start": 847,
            "end": 884,
            "id": {
              "type": "Identifier",
              "start": 864,
              "end": 869,
              "decorators": [],
              "name": "foo10",
              "optional": false,
              "typeAnnotation": null
            },
            "generator": false,
            "async": false,
            "declare": true,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 870,
                "end": 877,
                "decorators": [],
                "name": "a2",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 872,
                  "end": 877,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 874,
                    "end": 877
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 878,
              "end": 883,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 880,
                "end": 883
              }
            },
            "body": null,
            "expression": false
          },
          {
            "type": "TSDeclareFunction",
            "start": 890,
            "end": 991,
            "id": {
              "type": "Identifier",
              "start": 907,
              "end": 912,
              "decorators": [],
              "name": "foo11",
              "optional": false,
              "typeAnnotation": null
            },
            "generator": false,
            "async": false,
            "declare": true,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 913,
                "end": 978,
                "decorators": [],
                "name": "a2",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 915,
                  "end": 978,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 917,
                    "end": 978,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 918,
                        "end": 936,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 919,
                          "end": 936,
                          "typeAnnotation": {
                            "type": "TSTypeLiteral",
                            "start": 921,
                            "end": 936,
                            "members": [
                              {
                                "type": "TSPropertySignature",
                                "start": 923,
                                "end": 934,
                                "computed": false,
                                "optional": false,
                                "readonly": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 923,
                                  "end": 926,
                                  "decorators": [],
                                  "name": "foo",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 926,
                                  "end": 934,
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 928,
                                    "end": 934
                                  }
                                },
                                "accessibility": null,
                                "static": false
                              }
                            ]
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "start": 938,
                        "end": 969,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 939,
                          "end": 969,
                          "typeAnnotation": {
                            "type": "TSTypeLiteral",
                            "start": 941,
                            "end": 969,
                            "members": [
                              {
                                "type": "TSPropertySignature",
                                "start": 943,
                                "end": 955,
                                "computed": false,
                                "optional": false,
                                "readonly": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 943,
                                  "end": 946,
                                  "decorators": [],
                                  "name": "foo",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 946,
                                  "end": 954,
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 948,
                                    "end": 954
                                  }
                                },
                                "accessibility": null,
                                "static": false
                              },
                              {
                                "type": "TSPropertySignature",
                                "start": 956,
                                "end": 967,
                                "computed": false,
                                "optional": false,
                                "readonly": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 956,
                                  "end": 959,
                                  "decorators": [],
                                  "name": "bar",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 959,
                                  "end": 967,
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 961,
                                    "end": 967
                                  }
                                },
                                "accessibility": null,
                                "static": false
                              }
                            ]
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 971,
                      "end": 978,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 974,
                        "end": 978,
                        "typeName": {
                          "type": "Identifier",
                          "start": 974,
                          "end": 978,
                          "decorators": [],
                          "name": "Base",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 979,
              "end": 990,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 981,
                "end": 990,
                "exprName": {
                  "type": "Identifier",
                  "start": 988,
                  "end": 990,
                  "decorators": [],
                  "name": "a2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "body": null,
            "expression": false
          },
          {
            "type": "TSDeclareFunction",
            "start": 996,
            "end": 1033,
            "id": {
              "type": "Identifier",
              "start": 1013,
              "end": 1018,
              "decorators": [],
              "name": "foo11",
              "optional": false,
              "typeAnnotation": null
            },
            "generator": false,
            "async": false,
            "declare": true,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 1019,
                "end": 1026,
                "decorators": [],
                "name": "a2",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1021,
                  "end": 1026,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 1023,
                    "end": 1026
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 1027,
              "end": 1032,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1029,
                "end": 1032
              }
            },
            "body": null,
            "expression": false
          },
          {
            "type": "TSDeclareFunction",
            "start": 1039,
            "end": 1133,
            "id": {
              "type": "Identifier",
              "start": 1056,
              "end": 1061,
              "decorators": [],
              "name": "foo12",
              "optional": false,
              "typeAnnotation": null
            },
            "generator": false,
            "async": false,
            "declare": true,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 1062,
                "end": 1120,
                "decorators": [],
                "name": "a2",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1064,
                  "end": 1120,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 1066,
                    "end": 1120,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1067,
                        "end": 1081,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1068,
                          "end": 1081,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 1070,
                            "end": 1081,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1070,
                              "end": 1075,
                              "decorators": [],
                              "name": "Array",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 1075,
                              "end": 1081,
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "start": 1076,
                                  "end": 1080,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 1076,
                                    "end": 1080,
                                    "decorators": [],
                                    "name": "Base",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "typeArguments": null
                                }
                              ]
                            }
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "start": 1083,
                        "end": 1101,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1084,
                          "end": 1101,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 1086,
                            "end": 1101,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1086,
                              "end": 1091,
                              "decorators": [],
                              "name": "Array",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 1091,
                              "end": 1101,
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "start": 1092,
                                  "end": 1100,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 1092,
                                    "end": 1100,
                                    "decorators": [],
                                    "name": "Derived2",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "typeArguments": null
                                }
                              ]
                            }
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 1103,
                      "end": 1120,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1106,
                        "end": 1120,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1106,
                          "end": 1111,
                          "decorators": [],
                          "name": "Array",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 1111,
                          "end": 1120,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 1112,
                              "end": 1119,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1112,
                                "end": 1119,
                                "decorators": [],
                                "name": "Derived",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          ]
                        }
                      }
                    }
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 1121,
              "end": 1132,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 1123,
                "end": 1132,
                "exprName": {
                  "type": "Identifier",
                  "start": 1130,
                  "end": 1132,
                  "decorators": [],
                  "name": "a2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "body": null,
            "expression": false
          },
          {
            "type": "TSDeclareFunction",
            "start": 1138,
            "end": 1175,
            "id": {
              "type": "Identifier",
              "start": 1155,
              "end": 1160,
              "decorators": [],
              "name": "foo12",
              "optional": false,
              "typeAnnotation": null
            },
            "generator": false,
            "async": false,
            "declare": true,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 1161,
                "end": 1168,
                "decorators": [],
                "name": "a2",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1163,
                  "end": 1168,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 1165,
                    "end": 1168
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 1169,
              "end": 1174,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1171,
                "end": 1174
              }
            },
            "body": null,
            "expression": false
          },
          {
            "type": "TSDeclareFunction",
            "start": 1181,
            "end": 1260,
            "id": {
              "type": "Identifier",
              "start": 1198,
              "end": 1203,
              "decorators": [],
              "name": "foo15",
              "optional": false,
              "typeAnnotation": null
            },
            "generator": false,
            "async": false,
            "declare": true,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 1204,
                "end": 1247,
                "decorators": [],
                "name": "a2",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1206,
                  "end": 1247,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 1208,
                    "end": 1247,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1209,
                        "end": 1236,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1210,
                          "end": 1236,
                          "typeAnnotation": {
                            "type": "TSTypeLiteral",
                            "start": 1212,
                            "end": 1236,
                            "members": [
                              {
                                "type": "TSPropertySignature",
                                "start": 1214,
                                "end": 1224,
                                "computed": false,
                                "optional": false,
                                "readonly": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 1214,
                                  "end": 1215,
                                  "decorators": [],
                                  "name": "a",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 1215,
                                  "end": 1223,
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 1217,
                                    "end": 1223
                                  }
                                },
                                "accessibility": null,
                                "static": false
                              },
                              {
                                "type": "TSPropertySignature",
                                "start": 1225,
                                "end": 1234,
                                "computed": false,
                                "optional": false,
                                "readonly": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 1225,
                                  "end": 1226,
                                  "decorators": [],
                                  "name": "b",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 1226,
                                  "end": 1234,
                                  "typeAnnotation": {
                                    "type": "TSNumberKeyword",
                                    "start": 1228,
                                    "end": 1234
                                  }
                                },
                                "accessibility": null,
                                "static": false
                              }
                            ]
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 1238,
                      "end": 1247,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1241,
                        "end": 1247
                      }
                    }
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 1248,
              "end": 1259,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 1250,
                "end": 1259,
                "exprName": {
                  "type": "Identifier",
                  "start": 1257,
                  "end": 1259,
                  "decorators": [],
                  "name": "a2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "body": null,
            "expression": false
          },
          {
            "type": "TSDeclareFunction",
            "start": 1265,
            "end": 1302,
            "id": {
              "type": "Identifier",
              "start": 1282,
              "end": 1287,
              "decorators": [],
              "name": "foo15",
              "optional": false,
              "typeAnnotation": null
            },
            "generator": false,
            "async": false,
            "declare": true,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 1288,
                "end": 1295,
                "decorators": [],
                "name": "a2",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1290,
                  "end": 1295,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 1292,
                    "end": 1295
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 1296,
              "end": 1301,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1298,
                "end": 1301
              }
            },
            "body": null,
            "expression": false
          },
          {
            "type": "TSDeclareFunction",
            "start": 1308,
            "end": 1664,
            "id": {
              "type": "Identifier",
              "start": 1325,
              "end": 1330,
              "decorators": [],
              "name": "foo16",
              "optional": false,
              "typeAnnotation": null
            },
            "generator": false,
            "async": false,
            "declare": true,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 1331,
                "end": 1651,
                "decorators": [],
                "name": "a2",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1333,
                  "end": 1651,
                  "typeAnnotation": {
                    "type": "TSTypeLiteral",
                    "start": 1335,
                    "end": 1651,
                    "members": [
                      {
                        "type": "TSCallSignatureDeclaration",
                        "start": 1443,
                        "end": 1537,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 1444,
                            "end": 1525,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1445,
                              "end": 1525,
                              "typeAnnotation": {
                                "type": "TSTypeLiteral",
                                "start": 1447,
                                "end": 1525,
                                "members": [
                                  {
                                    "type": "TSCallSignatureDeclaration",
                                    "start": 1461,
                                    "end": 1481,
                                    "typeParameters": null,
                                    "params": [
                                      {
                                        "type": "Identifier",
                                        "start": 1462,
                                        "end": 1471,
                                        "decorators": [],
                                        "name": "a",
                                        "optional": false,
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "start": 1463,
                                          "end": 1471,
                                          "typeAnnotation": {
                                            "type": "TSNumberKeyword",
                                            "start": 1465,
                                            "end": 1471
                                          }
                                        }
                                      }
                                    ],
                                    "returnType": {
                                      "type": "TSTypeAnnotation",
                                      "start": 1472,
                                      "end": 1480,
                                      "typeAnnotation": {
                                        "type": "TSNumberKeyword",
                                        "start": 1474,
                                        "end": 1480
                                      }
                                    }
                                  },
                                  {
                                    "type": "TSCallSignatureDeclaration",
                                    "start": 1494,
                                    "end": 1515,
                                    "typeParameters": null,
                                    "params": [
                                      {
                                        "type": "Identifier",
                                        "start": 1495,
                                        "end": 1505,
                                        "decorators": [],
                                        "name": "a",
                                        "optional": true,
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "start": 1497,
                                          "end": 1505,
                                          "typeAnnotation": {
                                            "type": "TSNumberKeyword",
                                            "start": 1499,
                                            "end": 1505
                                          }
                                        }
                                      }
                                    ],
                                    "returnType": {
                                      "type": "TSTypeAnnotation",
                                      "start": 1506,
                                      "end": 1514,
                                      "typeAnnotation": {
                                        "type": "TSNumberKeyword",
                                        "start": 1508,
                                        "end": 1514
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
                          "start": 1526,
                          "end": 1536,
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "start": 1528,
                            "end": 1536,
                            "elementType": {
                              "type": "TSNumberKeyword",
                              "start": 1528,
                              "end": 1534
                            }
                          }
                        }
                      },
                      {
                        "type": "TSCallSignatureDeclaration",
                        "start": 1546,
                        "end": 1645,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 1547,
                            "end": 1632,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1548,
                              "end": 1632,
                              "typeAnnotation": {
                                "type": "TSTypeLiteral",
                                "start": 1550,
                                "end": 1632,
                                "members": [
                                  {
                                    "type": "TSCallSignatureDeclaration",
                                    "start": 1564,
                                    "end": 1586,
                                    "typeParameters": null,
                                    "params": [
                                      {
                                        "type": "Identifier",
                                        "start": 1565,
                                        "end": 1575,
                                        "decorators": [],
                                        "name": "a",
                                        "optional": false,
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "start": 1566,
                                          "end": 1575,
                                          "typeAnnotation": {
                                            "type": "TSBooleanKeyword",
                                            "start": 1568,
                                            "end": 1575
                                          }
                                        }
                                      }
                                    ],
                                    "returnType": {
                                      "type": "TSTypeAnnotation",
                                      "start": 1576,
                                      "end": 1585,
                                      "typeAnnotation": {
                                        "type": "TSBooleanKeyword",
                                        "start": 1578,
                                        "end": 1585
                                      }
                                    }
                                  },
                                  {
                                    "type": "TSCallSignatureDeclaration",
                                    "start": 1599,
                                    "end": 1622,
                                    "typeParameters": null,
                                    "params": [
                                      {
                                        "type": "Identifier",
                                        "start": 1600,
                                        "end": 1611,
                                        "decorators": [],
                                        "name": "a",
                                        "optional": true,
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
                                    }
                                  }
                                ]
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 1633,
                          "end": 1644,
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "start": 1635,
                            "end": 1644,
                            "elementType": {
                              "type": "TSBooleanKeyword",
                              "start": 1635,
                              "end": 1642
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
              "start": 1652,
              "end": 1663,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 1654,
                "end": 1663,
                "exprName": {
                  "type": "Identifier",
                  "start": 1661,
                  "end": 1663,
                  "decorators": [],
                  "name": "a2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "body": null,
            "expression": false
          },
          {
            "type": "TSDeclareFunction",
            "start": 1669,
            "end": 1706,
            "id": {
              "type": "Identifier",
              "start": 1686,
              "end": 1691,
              "decorators": [],
              "name": "foo16",
              "optional": false,
              "typeAnnotation": null
            },
            "generator": false,
            "async": false,
            "declare": true,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 1692,
                "end": 1699,
                "decorators": [],
                "name": "a2",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1694,
                  "end": 1699,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 1696,
                    "end": 1699
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 1700,
              "end": 1705,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1702,
                "end": 1705
              }
            },
            "body": null,
            "expression": false
          },
          {
            "type": "TSDeclareFunction",
            "start": 1712,
            "end": 1988,
            "id": {
              "type": "Identifier",
              "start": 1729,
              "end": 1734,
              "decorators": [],
              "name": "foo17",
              "optional": false,
              "typeAnnotation": null
            },
            "generator": false,
            "async": false,
            "declare": true,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 1735,
                "end": 1975,
                "decorators": [],
                "name": "a2",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1737,
                  "end": 1975,
                  "typeAnnotation": {
                    "type": "TSTypeLiteral",
                    "start": 1739,
                    "end": 1975,
                    "members": [
                      {
                        "type": "TSCallSignatureDeclaration",
                        "start": 1749,
                        "end": 1854,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 1750,
                            "end": 1845,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1751,
                              "end": 1845,
                              "typeAnnotation": {
                                "type": "TSTypeLiteral",
                                "start": 1753,
                                "end": 1845,
                                "members": [
                                  {
                                    "type": "TSCallSignatureDeclaration",
                                    "start": 1767,
                                    "end": 1796,
                                    "typeParameters": {
                                      "type": "TSTypeParameterDeclaration",
                                      "start": 1767,
                                      "end": 1786,
                                      "params": [
                                        {
                                          "type": "TSTypeParameter",
                                          "start": 1768,
                                          "end": 1785,
                                          "name": {
                                            "type": "Identifier",
                                            "start": 1768,
                                            "end": 1769,
                                            "decorators": [],
                                            "name": "T",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "constraint": {
                                            "type": "TSTypeReference",
                                            "start": 1778,
                                            "end": 1785,
                                            "typeName": {
                                              "type": "Identifier",
                                              "start": 1778,
                                              "end": 1785,
                                              "decorators": [],
                                              "name": "Derived",
                                              "optional": false,
                                              "typeAnnotation": null
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
                                        "start": 1787,
                                        "end": 1791,
                                        "decorators": [],
                                        "name": "a",
                                        "optional": false,
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "start": 1788,
                                          "end": 1791,
                                          "typeAnnotation": {
                                            "type": "TSTypeReference",
                                            "start": 1790,
                                            "end": 1791,
                                            "typeName": {
                                              "type": "Identifier",
                                              "start": 1790,
                                              "end": 1791,
                                              "decorators": [],
                                              "name": "T",
                                              "optional": false,
                                              "typeAnnotation": null
                                            },
                                            "typeArguments": null
                                          }
                                        }
                                      }
                                    ],
                                    "returnType": {
                                      "type": "TSTypeAnnotation",
                                      "start": 1792,
                                      "end": 1795,
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "start": 1794,
                                        "end": 1795,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 1794,
                                          "end": 1795,
                                          "decorators": [],
                                          "name": "T",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "typeArguments": null
                                      }
                                    }
                                  },
                                  {
                                    "type": "TSCallSignatureDeclaration",
                                    "start": 1809,
                                    "end": 1835,
                                    "typeParameters": {
                                      "type": "TSTypeParameterDeclaration",
                                      "start": 1809,
                                      "end": 1825,
                                      "params": [
                                        {
                                          "type": "TSTypeParameter",
                                          "start": 1810,
                                          "end": 1824,
                                          "name": {
                                            "type": "Identifier",
                                            "start": 1810,
                                            "end": 1811,
                                            "decorators": [],
                                            "name": "T",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "constraint": {
                                            "type": "TSTypeReference",
                                            "start": 1820,
                                            "end": 1824,
                                            "typeName": {
                                              "type": "Identifier",
                                              "start": 1820,
                                              "end": 1824,
                                              "decorators": [],
                                              "name": "Base",
                                              "optional": false,
                                              "typeAnnotation": null
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
                                        "start": 1826,
                                        "end": 1830,
                                        "decorators": [],
                                        "name": "a",
                                        "optional": false,
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "start": 1827,
                                          "end": 1830,
                                          "typeAnnotation": {
                                            "type": "TSTypeReference",
                                            "start": 1829,
                                            "end": 1830,
                                            "typeName": {
                                              "type": "Identifier",
                                              "start": 1829,
                                              "end": 1830,
                                              "decorators": [],
                                              "name": "T",
                                              "optional": false,
                                              "typeAnnotation": null
                                            },
                                            "typeArguments": null
                                          }
                                        }
                                      }
                                    ],
                                    "returnType": {
                                      "type": "TSTypeAnnotation",
                                      "start": 1831,
                                      "end": 1834,
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "start": 1833,
                                        "end": 1834,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 1833,
                                          "end": 1834,
                                          "decorators": [],
                                          "name": "T",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "typeArguments": null
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
                          "start": 1846,
                          "end": 1853,
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "start": 1848,
                            "end": 1853,
                            "elementType": {
                              "type": "TSAnyKeyword",
                              "start": 1848,
                              "end": 1851
                            }
                          }
                        }
                      },
                      {
                        "type": "TSCallSignatureDeclaration",
                        "start": 1863,
                        "end": 1969,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 1864,
                            "end": 1960,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1865,
                              "end": 1960,
                              "typeAnnotation": {
                                "type": "TSTypeLiteral",
                                "start": 1867,
                                "end": 1960,
                                "members": [
                                  {
                                    "type": "TSCallSignatureDeclaration",
                                    "start": 1881,
                                    "end": 1911,
                                    "typeParameters": {
                                      "type": "TSTypeParameterDeclaration",
                                      "start": 1881,
                                      "end": 1901,
                                      "params": [
                                        {
                                          "type": "TSTypeParameter",
                                          "start": 1882,
                                          "end": 1900,
                                          "name": {
                                            "type": "Identifier",
                                            "start": 1882,
                                            "end": 1883,
                                            "decorators": [],
                                            "name": "T",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "constraint": {
                                            "type": "TSTypeReference",
                                            "start": 1892,
                                            "end": 1900,
                                            "typeName": {
                                              "type": "Identifier",
                                              "start": 1892,
                                              "end": 1900,
                                              "decorators": [],
                                              "name": "Derived2",
                                              "optional": false,
                                              "typeAnnotation": null
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
                                        "start": 1902,
                                        "end": 1906,
                                        "decorators": [],
                                        "name": "a",
                                        "optional": false,
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "start": 1903,
                                          "end": 1906,
                                          "typeAnnotation": {
                                            "type": "TSTypeReference",
                                            "start": 1905,
                                            "end": 1906,
                                            "typeName": {
                                              "type": "Identifier",
                                              "start": 1905,
                                              "end": 1906,
                                              "decorators": [],
                                              "name": "T",
                                              "optional": false,
                                              "typeAnnotation": null
                                            },
                                            "typeArguments": null
                                          }
                                        }
                                      }
                                    ],
                                    "returnType": {
                                      "type": "TSTypeAnnotation",
                                      "start": 1907,
                                      "end": 1910,
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "start": 1909,
                                        "end": 1910,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 1909,
                                          "end": 1910,
                                          "decorators": [],
                                          "name": "T",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "typeArguments": null
                                      }
                                    }
                                  },
                                  {
                                    "type": "TSCallSignatureDeclaration",
                                    "start": 1924,
                                    "end": 1950,
                                    "typeParameters": {
                                      "type": "TSTypeParameterDeclaration",
                                      "start": 1924,
                                      "end": 1940,
                                      "params": [
                                        {
                                          "type": "TSTypeParameter",
                                          "start": 1925,
                                          "end": 1939,
                                          "name": {
                                            "type": "Identifier",
                                            "start": 1925,
                                            "end": 1926,
                                            "decorators": [],
                                            "name": "T",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "constraint": {
                                            "type": "TSTypeReference",
                                            "start": 1935,
                                            "end": 1939,
                                            "typeName": {
                                              "type": "Identifier",
                                              "start": 1935,
                                              "end": 1939,
                                              "decorators": [],
                                              "name": "Base",
                                              "optional": false,
                                              "typeAnnotation": null
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
                                        "start": 1941,
                                        "end": 1945,
                                        "decorators": [],
                                        "name": "a",
                                        "optional": false,
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "start": 1942,
                                          "end": 1945,
                                          "typeAnnotation": {
                                            "type": "TSTypeReference",
                                            "start": 1944,
                                            "end": 1945,
                                            "typeName": {
                                              "type": "Identifier",
                                              "start": 1944,
                                              "end": 1945,
                                              "decorators": [],
                                              "name": "T",
                                              "optional": false,
                                              "typeAnnotation": null
                                            },
                                            "typeArguments": null
                                          }
                                        }
                                      }
                                    ],
                                    "returnType": {
                                      "type": "TSTypeAnnotation",
                                      "start": 1946,
                                      "end": 1949,
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "start": 1948,
                                        "end": 1949,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 1948,
                                          "end": 1949,
                                          "decorators": [],
                                          "name": "T",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "typeArguments": null
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
                          "start": 1961,
                          "end": 1968,
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "start": 1963,
                            "end": 1968,
                            "elementType": {
                              "type": "TSAnyKeyword",
                              "start": 1963,
                              "end": 1966
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
              "start": 1976,
              "end": 1987,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 1978,
                "end": 1987,
                "exprName": {
                  "type": "Identifier",
                  "start": 1985,
                  "end": 1987,
                  "decorators": [],
                  "name": "a2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "body": null,
            "expression": false
          },
          {
            "type": "TSDeclareFunction",
            "start": 1993,
            "end": 2030,
            "id": {
              "type": "Identifier",
              "start": 2010,
              "end": 2015,
              "decorators": [],
              "name": "foo17",
              "optional": false,
              "typeAnnotation": null
            },
            "generator": false,
            "async": false,
            "declare": true,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 2016,
                "end": 2023,
                "decorators": [],
                "name": "a2",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 2018,
                  "end": 2023,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 2020,
                    "end": 2023
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 2024,
              "end": 2029,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 2026,
                "end": 2029
              }
            },
            "body": null,
            "expression": false
          },
          {
            "type": "VariableDeclaration",
            "start": 2036,
            "end": 2077,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2040,
                "end": 2076,
                "id": {
                  "type": "Identifier",
                  "start": 2040,
                  "end": 2042,
                  "decorators": [],
                  "name": "r1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 2045,
                  "end": 2076,
                  "callee": {
                    "type": "Identifier",
                    "start": 2045,
                    "end": 2049,
                    "decorators": [],
                    "name": "foo2",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "start": 2050,
                      "end": 2075,
                      "expression": true,
                      "async": false,
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "start": 2050,
                        "end": 2056,
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "start": 2051,
                            "end": 2052,
                            "name": {
                              "type": "Identifier",
                              "start": 2051,
                              "end": 2052,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false
                          },
                          {
                            "type": "TSTypeParameter",
                            "start": 2054,
                            "end": 2055,
                            "name": {
                              "type": "Identifier",
                              "start": 2054,
                              "end": 2055,
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null
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
                          "start": 2057,
                          "end": 2061,
                          "decorators": [],
                          "name": "x",
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
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          }
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "TSTypeAssertion",
                        "start": 2066,
                        "end": 2075,
                        "typeAnnotation": {
                          "type": "TSArrayType",
                          "start": 2067,
                          "end": 2070,
                          "elementType": {
                            "type": "TSTypeReference",
                            "start": 2067,
                            "end": 2068,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2067,
                              "end": 2068,
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        },
                        "expression": {
                          "type": "Literal",
                          "start": 2071,
                          "end": 2075,
                          "value": null,
                          "raw": "null"
                        }
                      },
                      "id": null,
                      "generator": false
                    }
                  ],
                  "optional": false
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 2089,
            "end": 2148,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2093,
                "end": 2147,
                "id": {
                  "type": "Identifier",
                  "start": 2093,
                  "end": 2096,
                  "decorators": [],
                  "name": "r1a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ArrayExpression",
                  "start": 2099,
                  "end": 2147,
                  "elements": [
                    {
                      "type": "ArrowFunctionExpression",
                      "start": 2100,
                      "end": 2119,
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 2101,
                          "end": 2110,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 2102,
                            "end": 2110,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 2104,
                              "end": 2110
                            }
                          }
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "ArrayExpression",
                        "start": 2115,
                        "end": 2119,
                        "elements": [
                          {
                            "type": "Literal",
                            "start": 2116,
                            "end": 2118,
                            "value": "",
                            "raw": "''"
                          }
                        ]
                      },
                      "id": null,
                      "generator": false
                    },
                    {
                      "type": "ArrowFunctionExpression",
                      "start": 2121,
                      "end": 2146,
                      "expression": true,
                      "async": false,
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "start": 2121,
                        "end": 2127,
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "start": 2122,
                            "end": 2123,
                            "name": {
                              "type": "Identifier",
                              "start": 2122,
                              "end": 2123,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false
                          },
                          {
                            "type": "TSTypeParameter",
                            "start": 2125,
                            "end": 2126,
                            "name": {
                              "type": "Identifier",
                              "start": 2125,
                              "end": 2126,
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null
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
                          "start": 2128,
                          "end": 2132,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 2129,
                            "end": 2132,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 2131,
                              "end": 2132,
                              "typeName": {
                                "type": "Identifier",
                                "start": 2131,
                                "end": 2132,
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          }
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "TSTypeAssertion",
                        "start": 2137,
                        "end": 2146,
                        "typeAnnotation": {
                          "type": "TSArrayType",
                          "start": 2138,
                          "end": 2141,
                          "elementType": {
                            "type": "TSTypeReference",
                            "start": 2138,
                            "end": 2139,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2138,
                              "end": 2139,
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        },
                        "expression": {
                          "type": "Literal",
                          "start": 2142,
                          "end": 2146,
                          "value": null,
                          "raw": "null"
                        }
                      },
                      "id": null,
                      "generator": false
                    }
                  ]
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 2153,
            "end": 2212,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2157,
                "end": 2211,
                "id": {
                  "type": "Identifier",
                  "start": 2157,
                  "end": 2160,
                  "decorators": [],
                  "name": "r1b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ArrayExpression",
                  "start": 2163,
                  "end": 2211,
                  "elements": [
                    {
                      "type": "ArrowFunctionExpression",
                      "start": 2164,
                      "end": 2189,
                      "expression": true,
                      "async": false,
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "start": 2164,
                        "end": 2170,
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "start": 2165,
                            "end": 2166,
                            "name": {
                              "type": "Identifier",
                              "start": 2165,
                              "end": 2166,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false
                          },
                          {
                            "type": "TSTypeParameter",
                            "start": 2168,
                            "end": 2169,
                            "name": {
                              "type": "Identifier",
                              "start": 2168,
                              "end": 2169,
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null
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
                          "start": 2171,
                          "end": 2175,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 2172,
                            "end": 2175,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 2174,
                              "end": 2175,
                              "typeName": {
                                "type": "Identifier",
                                "start": 2174,
                                "end": 2175,
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          }
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "TSTypeAssertion",
                        "start": 2180,
                        "end": 2189,
                        "typeAnnotation": {
                          "type": "TSArrayType",
                          "start": 2181,
                          "end": 2184,
                          "elementType": {
                            "type": "TSTypeReference",
                            "start": 2181,
                            "end": 2182,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2181,
                              "end": 2182,
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        },
                        "expression": {
                          "type": "Literal",
                          "start": 2185,
                          "end": 2189,
                          "value": null,
                          "raw": "null"
                        }
                      },
                      "id": null,
                      "generator": false
                    },
                    {
                      "type": "ArrowFunctionExpression",
                      "start": 2191,
                      "end": 2210,
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 2192,
                          "end": 2201,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 2193,
                            "end": 2201,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 2195,
                              "end": 2201
                            }
                          }
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "ArrayExpression",
                        "start": 2206,
                        "end": 2210,
                        "elements": [
                          {
                            "type": "Literal",
                            "start": 2207,
                            "end": 2209,
                            "value": "",
                            "raw": "''"
                          }
                        ]
                      },
                      "id": null,
                      "generator": false
                    }
                  ]
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 2218,
            "end": 2325,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2222,
                "end": 2324,
                "id": {
                  "type": "Identifier",
                  "start": 2222,
                  "end": 2227,
                  "decorators": [],
                  "name": "r2arg",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "start": 2230,
                  "end": 2324,
                  "expression": true,
                  "async": false,
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "start": 2230,
                    "end": 2285,
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "start": 2231,
                        "end": 2245,
                        "name": {
                          "type": "Identifier",
                          "start": 2231,
                          "end": 2232,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "constraint": {
                          "type": "TSTypeReference",
                          "start": 2241,
                          "end": 2245,
                          "typeName": {
                            "type": "Identifier",
                            "start": 2241,
                            "end": 2245,
                            "decorators": [],
                            "name": "Base",
                            "optional": false,
                            "typeAnnotation": null
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
                        "start": 2247,
                        "end": 2264,
                        "name": {
                          "type": "Identifier",
                          "start": 2247,
                          "end": 2248,
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "constraint": {
                          "type": "TSTypeReference",
                          "start": 2257,
                          "end": 2264,
                          "typeName": {
                            "type": "Identifier",
                            "start": 2257,
                            "end": 2264,
                            "decorators": [],
                            "name": "Derived",
                            "optional": false,
                            "typeAnnotation": null
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
                        "start": 2266,
                        "end": 2284,
                        "name": {
                          "type": "Identifier",
                          "start": 2266,
                          "end": 2267,
                          "decorators": [],
                          "name": "V",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "constraint": {
                          "type": "TSTypeReference",
                          "start": 2276,
                          "end": 2284,
                          "typeName": {
                            "type": "Identifier",
                            "start": 2276,
                            "end": 2284,
                            "decorators": [],
                            "name": "Derived2",
                            "optional": false,
                            "typeAnnotation": null
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
                      "start": 2286,
                      "end": 2302,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 2287,
                        "end": 2302,
                        "typeAnnotation": {
                          "type": "TSFunctionType",
                          "start": 2289,
                          "end": 2302,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 2290,
                              "end": 2296,
                              "decorators": [],
                              "name": "arg",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 2293,
                                "end": 2296,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 2295,
                                  "end": 2296,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 2295,
                                    "end": 2296,
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "typeArguments": null
                                }
                              }
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "start": 2298,
                            "end": 2302,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 2301,
                              "end": 2302,
                              "typeName": {
                                "type": "Identifier",
                                "start": 2301,
                                "end": 2302,
                                "decorators": [],
                                "name": "U",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          }
                        }
                      }
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "ArrowFunctionExpression",
                    "start": 2307,
                    "end": 2324,
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 2308,
                        "end": 2312,
                        "decorators": [],
                        "name": "r",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2309,
                          "end": 2312,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 2311,
                            "end": 2312,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2311,
                              "end": 2312,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        }
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "TSTypeAssertion",
                      "start": 2317,
                      "end": 2324,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 2318,
                        "end": 2319,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2318,
                          "end": 2319,
                          "decorators": [],
                          "name": "V",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      },
                      "expression": {
                        "type": "Literal",
                        "start": 2320,
                        "end": 2324,
                        "value": null,
                        "raw": "null"
                      }
                    },
                    "id": null,
                    "generator": false
                  },
                  "id": null,
                  "generator": false
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 2330,
            "end": 2402,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2334,
                "end": 2401,
                "id": {
                  "type": "Identifier",
                  "start": 2334,
                  "end": 2340,
                  "decorators": [],
                  "name": "r2arg2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "start": 2343,
                  "end": 2401,
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 2344,
                      "end": 2369,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 2345,
                        "end": 2369,
                        "typeAnnotation": {
                          "type": "TSFunctionType",
                          "start": 2347,
                          "end": 2369,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 2348,
                              "end": 2357,
                              "decorators": [],
                              "name": "arg",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 2351,
                                "end": 2357,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 2353,
                                  "end": 2357,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 2353,
                                    "end": 2357,
                                    "decorators": [],
                                    "name": "Base",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "typeArguments": null
                                }
                              }
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "start": 2359,
                            "end": 2369,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 2362,
                              "end": 2369,
                              "typeName": {
                                "type": "Identifier",
                                "start": 2362,
                                "end": 2369,
                                "decorators": [],
                                "name": "Derived",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          }
                        }
                      }
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "ArrowFunctionExpression",
                    "start": 2374,
                    "end": 2401,
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 2375,
                        "end": 2382,
                        "decorators": [],
                        "name": "r",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2376,
                          "end": 2382,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 2378,
                            "end": 2382,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2378,
                              "end": 2382,
                              "decorators": [],
                              "name": "Base",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        }
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "TSTypeAssertion",
                      "start": 2387,
                      "end": 2401,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 2388,
                        "end": 2396,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2388,
                          "end": 2396,
                          "decorators": [],
                          "name": "Derived2",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      },
                      "expression": {
                        "type": "Literal",
                        "start": 2397,
                        "end": 2401,
                        "value": null,
                        "raw": "null"
                      }
                    },
                    "id": null,
                    "generator": false
                  },
                  "id": null,
                  "generator": false
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 2407,
            "end": 2428,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2411,
                "end": 2427,
                "id": {
                  "type": "Identifier",
                  "start": 2411,
                  "end": 2413,
                  "decorators": [],
                  "name": "r2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 2416,
                  "end": 2427,
                  "callee": {
                    "type": "Identifier",
                    "start": 2416,
                    "end": 2420,
                    "decorators": [],
                    "name": "foo7",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 2421,
                      "end": 2426,
                      "decorators": [],
                      "name": "r2arg",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "optional": false
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 2440,
            "end": 2466,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2444,
                "end": 2465,
                "id": {
                  "type": "Identifier",
                  "start": 2444,
                  "end": 2447,
                  "decorators": [],
                  "name": "r2a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ArrayExpression",
                  "start": 2450,
                  "end": 2465,
                  "elements": [
                    {
                      "type": "Identifier",
                      "start": 2451,
                      "end": 2457,
                      "decorators": [],
                      "name": "r2arg2",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    {
                      "type": "Identifier",
                      "start": 2459,
                      "end": 2464,
                      "decorators": [],
                      "name": "r2arg",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ]
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 2471,
            "end": 2497,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2475,
                "end": 2496,
                "id": {
                  "type": "Identifier",
                  "start": 2475,
                  "end": 2478,
                  "decorators": [],
                  "name": "r2b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ArrayExpression",
                  "start": 2481,
                  "end": 2496,
                  "elements": [
                    {
                      "type": "Identifier",
                      "start": 2482,
                      "end": 2487,
                      "decorators": [],
                      "name": "r2arg",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    {
                      "type": "Identifier",
                      "start": 2489,
                      "end": 2495,
                      "decorators": [],
                      "name": "r2arg2",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ]
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 2503,
            "end": 2624,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2507,
                "end": 2623,
                "id": {
                  "type": "Identifier",
                  "start": 2507,
                  "end": 2512,
                  "decorators": [],
                  "name": "r3arg",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "start": 2515,
                  "end": 2623,
                  "expression": true,
                  "async": false,
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "start": 2515,
                    "end": 2550,
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "start": 2516,
                        "end": 2530,
                        "name": {
                          "type": "Identifier",
                          "start": 2516,
                          "end": 2517,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "constraint": {
                          "type": "TSTypeReference",
                          "start": 2526,
                          "end": 2530,
                          "typeName": {
                            "type": "Identifier",
                            "start": 2526,
                            "end": 2530,
                            "decorators": [],
                            "name": "Base",
                            "optional": false,
                            "typeAnnotation": null
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
                        "start": 2532,
                        "end": 2549,
                        "name": {
                          "type": "Identifier",
                          "start": 2532,
                          "end": 2533,
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "constraint": {
                          "type": "TSTypeReference",
                          "start": 2542,
                          "end": 2549,
                          "typeName": {
                            "type": "Identifier",
                            "start": 2542,
                            "end": 2549,
                            "decorators": [],
                            "name": "Derived",
                            "optional": false,
                            "typeAnnotation": null
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
                      "start": 2551,
                      "end": 2567,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 2552,
                        "end": 2567,
                        "typeAnnotation": {
                          "type": "TSFunctionType",
                          "start": 2554,
                          "end": 2567,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 2555,
                              "end": 2561,
                              "decorators": [],
                              "name": "arg",
                              "optional": false,
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
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "typeArguments": null
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
                              "typeName": {
                                "type": "Identifier",
                                "start": 2566,
                                "end": 2567,
                                "decorators": [],
                                "name": "U",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          }
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "start": 2569,
                      "end": 2601,
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 2570,
                        "end": 2601,
                        "typeAnnotation": {
                          "type": "TSFunctionType",
                          "start": 2572,
                          "end": 2601,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 2573,
                              "end": 2595,
                              "decorators": [],
                              "name": "arg2",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 2577,
                                "end": 2595,
                                "typeAnnotation": {
                                  "type": "TSTypeLiteral",
                                  "start": 2579,
                                  "end": 2595,
                                  "members": [
                                    {
                                      "type": "TSPropertySignature",
                                      "start": 2581,
                                      "end": 2593,
                                      "computed": false,
                                      "optional": false,
                                      "readonly": false,
                                      "key": {
                                        "type": "Identifier",
                                        "start": 2581,
                                        "end": 2584,
                                        "decorators": [],
                                        "name": "foo",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "typeAnnotation": {
                                        "type": "TSTypeAnnotation",
                                        "start": 2584,
                                        "end": 2592,
                                        "typeAnnotation": {
                                          "type": "TSNumberKeyword",
                                          "start": 2586,
                                          "end": 2592
                                        }
                                      },
                                      "accessibility": null,
                                      "static": false
                                    }
                                  ]
                                }
                              }
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "start": 2597,
                            "end": 2601,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 2600,
                              "end": 2601,
                              "typeName": {
                                "type": "Identifier",
                                "start": 2600,
                                "end": 2601,
                                "decorators": [],
                                "name": "U",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          }
                        }
                      }
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "ArrowFunctionExpression",
                    "start": 2606,
                    "end": 2623,
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 2607,
                        "end": 2611,
                        "decorators": [],
                        "name": "r",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2608,
                          "end": 2611,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 2610,
                            "end": 2611,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2610,
                              "end": 2611,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        }
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "TSTypeAssertion",
                      "start": 2616,
                      "end": 2623,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 2617,
                        "end": 2618,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2617,
                          "end": 2618,
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      },
                      "expression": {
                        "type": "Literal",
                        "start": 2619,
                        "end": 2623,
                        "value": null,
                        "raw": "null"
                      }
                    },
                    "id": null,
                    "generator": false
                  },
                  "id": null,
                  "generator": false
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 2629,
            "end": 2728,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2633,
                "end": 2727,
                "id": {
                  "type": "Identifier",
                  "start": 2633,
                  "end": 2639,
                  "decorators": [],
                  "name": "r3arg2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "start": 2642,
                  "end": 2727,
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 2643,
                      "end": 2668,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 2644,
                        "end": 2668,
                        "typeAnnotation": {
                          "type": "TSFunctionType",
                          "start": 2646,
                          "end": 2668,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 2647,
                              "end": 2656,
                              "decorators": [],
                              "name": "arg",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 2650,
                                "end": 2656,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 2652,
                                  "end": 2656,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 2652,
                                    "end": 2656,
                                    "decorators": [],
                                    "name": "Base",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "typeArguments": null
                                }
                              }
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "start": 2658,
                            "end": 2668,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 2661,
                              "end": 2668,
                              "typeName": {
                                "type": "Identifier",
                                "start": 2661,
                                "end": 2668,
                                "decorators": [],
                                "name": "Derived",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          }
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "start": 2670,
                      "end": 2696,
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 2671,
                        "end": 2696,
                        "typeAnnotation": {
                          "type": "TSFunctionType",
                          "start": 2673,
                          "end": 2696,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 2674,
                              "end": 2684,
                              "decorators": [],
                              "name": "arg2",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 2678,
                                "end": 2684,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 2680,
                                  "end": 2684,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 2680,
                                    "end": 2684,
                                    "decorators": [],
                                    "name": "Base",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "typeArguments": null
                                }
                              }
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "start": 2686,
                            "end": 2696,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 2689,
                              "end": 2696,
                              "typeName": {
                                "type": "Identifier",
                                "start": 2689,
                                "end": 2696,
                                "decorators": [],
                                "name": "Derived",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          }
                        }
                      }
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "ArrowFunctionExpression",
                    "start": 2701,
                    "end": 2727,
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 2702,
                        "end": 2709,
                        "decorators": [],
                        "name": "r",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2703,
                          "end": 2709,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 2705,
                            "end": 2709,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2705,
                              "end": 2709,
                              "decorators": [],
                              "name": "Base",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        }
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "TSTypeAssertion",
                      "start": 2714,
                      "end": 2727,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 2715,
                        "end": 2722,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2715,
                          "end": 2722,
                          "decorators": [],
                          "name": "Derived",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      },
                      "expression": {
                        "type": "Literal",
                        "start": 2723,
                        "end": 2727,
                        "value": null,
                        "raw": "null"
                      }
                    },
                    "id": null,
                    "generator": false
                  },
                  "id": null,
                  "generator": false
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 2733,
            "end": 2754,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2737,
                "end": 2753,
                "id": {
                  "type": "Identifier",
                  "start": 2737,
                  "end": 2739,
                  "decorators": [],
                  "name": "r3",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 2742,
                  "end": 2753,
                  "callee": {
                    "type": "Identifier",
                    "start": 2742,
                    "end": 2746,
                    "decorators": [],
                    "name": "foo8",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 2747,
                      "end": 2752,
                      "decorators": [],
                      "name": "r3arg",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "optional": false
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 2766,
            "end": 2792,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2770,
                "end": 2791,
                "id": {
                  "type": "Identifier",
                  "start": 2770,
                  "end": 2773,
                  "decorators": [],
                  "name": "r3a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ArrayExpression",
                  "start": 2776,
                  "end": 2791,
                  "elements": [
                    {
                      "type": "Identifier",
                      "start": 2777,
                      "end": 2783,
                      "decorators": [],
                      "name": "r3arg2",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    {
                      "type": "Identifier",
                      "start": 2785,
                      "end": 2790,
                      "decorators": [],
                      "name": "r3arg",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ]
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 2797,
            "end": 2823,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2801,
                "end": 2822,
                "id": {
                  "type": "Identifier",
                  "start": 2801,
                  "end": 2804,
                  "decorators": [],
                  "name": "r3b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ArrayExpression",
                  "start": 2807,
                  "end": 2822,
                  "elements": [
                    {
                      "type": "Identifier",
                      "start": 2808,
                      "end": 2813,
                      "decorators": [],
                      "name": "r3arg",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    {
                      "type": "Identifier",
                      "start": 2815,
                      "end": 2821,
                      "decorators": [],
                      "name": "r3arg2",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ]
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 2829,
            "end": 2883,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2833,
                "end": 2882,
                "id": {
                  "type": "Identifier",
                  "start": 2833,
                  "end": 2838,
                  "decorators": [],
                  "name": "r4arg",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "start": 2841,
                  "end": 2882,
                  "expression": true,
                  "async": false,
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "start": 2841,
                    "end": 2860,
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "start": 2842,
                        "end": 2859,
                        "name": {
                          "type": "Identifier",
                          "start": 2842,
                          "end": 2843,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "constraint": {
                          "type": "TSTypeReference",
                          "start": 2852,
                          "end": 2859,
                          "typeName": {
                            "type": "Identifier",
                            "start": 2852,
                            "end": 2859,
                            "decorators": [],
                            "name": "Derived",
                            "optional": false,
                            "typeAnnotation": null
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
                      "start": 2861,
                      "end": 2870,
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "start": 2864,
                        "end": 2865,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 2865,
                        "end": 2870,
                        "typeAnnotation": {
                          "type": "TSArrayType",
                          "start": 2867,
                          "end": 2870,
                          "elementType": {
                            "type": "TSTypeReference",
                            "start": 2867,
                            "end": 2868,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2867,
                              "end": 2868,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        }
                      },
                      "value": null
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "TSTypeAssertion",
                    "start": 2875,
                    "end": 2882,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 2876,
                      "end": 2877,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2876,
                        "end": 2877,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    },
                    "expression": {
                      "type": "Literal",
                      "start": 2878,
                      "end": 2882,
                      "value": null,
                      "raw": "null"
                    }
                  },
                  "id": null,
                  "generator": false
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 2888,
            "end": 2930,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2892,
                "end": 2929,
                "id": {
                  "type": "Identifier",
                  "start": 2892,
                  "end": 2898,
                  "decorators": [],
                  "name": "r4arg2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "start": 2901,
                  "end": 2929,
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "RestElement",
                      "start": 2902,
                      "end": 2914,
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "start": 2905,
                        "end": 2906,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 2906,
                        "end": 2914,
                        "typeAnnotation": {
                          "type": "TSArrayType",
                          "start": 2908,
                          "end": 2914,
                          "elementType": {
                            "type": "TSTypeReference",
                            "start": 2908,
                            "end": 2912,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2908,
                              "end": 2912,
                              "decorators": [],
                              "name": "Base",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        }
                      },
                      "value": null
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "TSTypeAssertion",
                    "start": 2919,
                    "end": 2929,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 2920,
                      "end": 2924,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2920,
                        "end": 2924,
                        "decorators": [],
                        "name": "Base",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    },
                    "expression": {
                      "type": "Literal",
                      "start": 2925,
                      "end": 2929,
                      "value": null,
                      "raw": "null"
                    }
                  },
                  "id": null,
                  "generator": false
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 2935,
            "end": 2957,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2939,
                "end": 2956,
                "id": {
                  "type": "Identifier",
                  "start": 2939,
                  "end": 2941,
                  "decorators": [],
                  "name": "r4",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 2944,
                  "end": 2956,
                  "callee": {
                    "type": "Identifier",
                    "start": 2944,
                    "end": 2949,
                    "decorators": [],
                    "name": "foo10",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 2950,
                      "end": 2955,
                      "decorators": [],
                      "name": "r4arg",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "optional": false
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 2969,
            "end": 2995,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2973,
                "end": 2994,
                "id": {
                  "type": "Identifier",
                  "start": 2973,
                  "end": 2976,
                  "decorators": [],
                  "name": "r4a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ArrayExpression",
                  "start": 2979,
                  "end": 2994,
                  "elements": [
                    {
                      "type": "Identifier",
                      "start": 2980,
                      "end": 2986,
                      "decorators": [],
                      "name": "r4arg2",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    {
                      "type": "Identifier",
                      "start": 2988,
                      "end": 2993,
                      "decorators": [],
                      "name": "r4arg",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ]
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 3000,
            "end": 3026,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 3004,
                "end": 3025,
                "id": {
                  "type": "Identifier",
                  "start": 3004,
                  "end": 3007,
                  "decorators": [],
                  "name": "r4b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ArrayExpression",
                  "start": 3010,
                  "end": 3025,
                  "elements": [
                    {
                      "type": "Identifier",
                      "start": 3011,
                      "end": 3016,
                      "decorators": [],
                      "name": "r4arg",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    {
                      "type": "Identifier",
                      "start": 3018,
                      "end": 3024,
                      "decorators": [],
                      "name": "r4arg2",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ]
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 3032,
            "end": 3087,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 3036,
                "end": 3086,
                "id": {
                  "type": "Identifier",
                  "start": 3036,
                  "end": 3041,
                  "decorators": [],
                  "name": "r5arg",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "start": 3044,
                  "end": 3086,
                  "expression": true,
                  "async": false,
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "start": 3044,
                    "end": 3063,
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "start": 3045,
                        "end": 3062,
                        "name": {
                          "type": "Identifier",
                          "start": 3045,
                          "end": 3046,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "constraint": {
                          "type": "TSTypeReference",
                          "start": 3055,
                          "end": 3062,
                          "typeName": {
                            "type": "Identifier",
                            "start": 3055,
                            "end": 3062,
                            "decorators": [],
                            "name": "Derived",
                            "optional": false,
                            "typeAnnotation": null
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
                      "start": 3064,
                      "end": 3068,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 3065,
                        "end": 3068,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 3067,
                          "end": 3068,
                          "typeName": {
                            "type": "Identifier",
                            "start": 3067,
                            "end": 3068,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "start": 3070,
                      "end": 3074,
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 3071,
                        "end": 3074,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 3073,
                          "end": 3074,
                          "typeName": {
                            "type": "Identifier",
                            "start": 3073,
                            "end": 3074,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      }
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "TSTypeAssertion",
                    "start": 3079,
                    "end": 3086,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 3080,
                      "end": 3081,
                      "typeName": {
                        "type": "Identifier",
                        "start": 3080,
                        "end": 3081,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    },
                    "expression": {
                      "type": "Literal",
                      "start": 3082,
                      "end": 3086,
                      "value": null,
                      "raw": "null"
                    }
                  },
                  "id": null,
                  "generator": false
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 3092,
            "end": 3173,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 3096,
                "end": 3172,
                "id": {
                  "type": "Identifier",
                  "start": 3096,
                  "end": 3102,
                  "decorators": [],
                  "name": "r5arg2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "start": 3105,
                  "end": 3172,
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 3106,
                      "end": 3124,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 3107,
                        "end": 3124,
                        "typeAnnotation": {
                          "type": "TSTypeLiteral",
                          "start": 3109,
                          "end": 3124,
                          "members": [
                            {
                              "type": "TSPropertySignature",
                              "start": 3111,
                              "end": 3122,
                              "computed": false,
                              "optional": false,
                              "readonly": false,
                              "key": {
                                "type": "Identifier",
                                "start": 3111,
                                "end": 3114,
                                "decorators": [],
                                "name": "foo",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 3114,
                                "end": 3122,
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "start": 3116,
                                  "end": 3122
                                }
                              },
                              "accessibility": null,
                              "static": false
                            }
                          ]
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "start": 3126,
                      "end": 3157,
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 3127,
                        "end": 3157,
                        "typeAnnotation": {
                          "type": "TSTypeLiteral",
                          "start": 3129,
                          "end": 3157,
                          "members": [
                            {
                              "type": "TSPropertySignature",
                              "start": 3131,
                              "end": 3143,
                              "computed": false,
                              "optional": false,
                              "readonly": false,
                              "key": {
                                "type": "Identifier",
                                "start": 3131,
                                "end": 3134,
                                "decorators": [],
                                "name": "foo",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 3134,
                                "end": 3142,
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "start": 3136,
                                  "end": 3142
                                }
                              },
                              "accessibility": null,
                              "static": false
                            },
                            {
                              "type": "TSPropertySignature",
                              "start": 3144,
                              "end": 3155,
                              "computed": false,
                              "optional": false,
                              "readonly": false,
                              "key": {
                                "type": "Identifier",
                                "start": 3144,
                                "end": 3147,
                                "decorators": [],
                                "name": "bar",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 3147,
                                "end": 3155,
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "start": 3149,
                                  "end": 3155
                                }
                              },
                              "accessibility": null,
                              "static": false
                            }
                          ]
                        }
                      }
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "TSTypeAssertion",
                    "start": 3162,
                    "end": 3172,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 3163,
                      "end": 3167,
                      "typeName": {
                        "type": "Identifier",
                        "start": 3163,
                        "end": 3167,
                        "decorators": [],
                        "name": "Base",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    },
                    "expression": {
                      "type": "Literal",
                      "start": 3168,
                      "end": 3172,
                      "value": null,
                      "raw": "null"
                    }
                  },
                  "id": null,
                  "generator": false
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 3178,
            "end": 3200,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 3182,
                "end": 3199,
                "id": {
                  "type": "Identifier",
                  "start": 3182,
                  "end": 3184,
                  "decorators": [],
                  "name": "r5",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 3187,
                  "end": 3199,
                  "callee": {
                    "type": "Identifier",
                    "start": 3187,
                    "end": 3192,
                    "decorators": [],
                    "name": "foo11",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 3193,
                      "end": 3198,
                      "decorators": [],
                      "name": "r5arg",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "optional": false
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 3212,
            "end": 3238,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 3216,
                "end": 3237,
                "id": {
                  "type": "Identifier",
                  "start": 3216,
                  "end": 3219,
                  "decorators": [],
                  "name": "r5a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ArrayExpression",
                  "start": 3222,
                  "end": 3237,
                  "elements": [
                    {
                      "type": "Identifier",
                      "start": 3223,
                      "end": 3229,
                      "decorators": [],
                      "name": "r5arg2",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    {
                      "type": "Identifier",
                      "start": 3231,
                      "end": 3236,
                      "decorators": [],
                      "name": "r5arg",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ]
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 3243,
            "end": 3269,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 3247,
                "end": 3268,
                "id": {
                  "type": "Identifier",
                  "start": 3247,
                  "end": 3250,
                  "decorators": [],
                  "name": "r5b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ArrayExpression",
                  "start": 3253,
                  "end": 3268,
                  "elements": [
                    {
                      "type": "Identifier",
                      "start": 3254,
                      "end": 3259,
                      "decorators": [],
                      "name": "r5arg",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    {
                      "type": "Identifier",
                      "start": 3261,
                      "end": 3267,
                      "decorators": [],
                      "name": "r5arg2",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ]
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 3275,
            "end": 3348,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 3279,
                "end": 3347,
                "id": {
                  "type": "Identifier",
                  "start": 3279,
                  "end": 3284,
                  "decorators": [],
                  "name": "r6arg",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "start": 3287,
                  "end": 3347,
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 3288,
                      "end": 3302,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 3289,
                        "end": 3302,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 3291,
                          "end": 3302,
                          "typeName": {
                            "type": "Identifier",
                            "start": 3291,
                            "end": 3296,
                            "decorators": [],
                            "name": "Array",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 3296,
                            "end": 3302,
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "start": 3297,
                                "end": 3301,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 3297,
                                  "end": 3301,
                                  "decorators": [],
                                  "name": "Base",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              }
                            ]
                          }
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "start": 3304,
                      "end": 3322,
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 3305,
                        "end": 3322,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 3307,
                          "end": 3322,
                          "typeName": {
                            "type": "Identifier",
                            "start": 3307,
                            "end": 3312,
                            "decorators": [],
                            "name": "Array",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 3312,
                            "end": 3322,
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "start": 3313,
                                "end": 3321,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 3313,
                                  "end": 3321,
                                  "decorators": [],
                                  "name": "Derived2",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              }
                            ]
                          }
                        }
                      }
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "TSTypeAssertion",
                    "start": 3327,
                    "end": 3347,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 3328,
                      "end": 3342,
                      "typeName": {
                        "type": "Identifier",
                        "start": 3328,
                        "end": 3333,
                        "decorators": [],
                        "name": "Array",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 3333,
                        "end": 3342,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 3334,
                            "end": 3341,
                            "typeName": {
                              "type": "Identifier",
                              "start": 3334,
                              "end": 3341,
                              "decorators": [],
                              "name": "Derived",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        ]
                      }
                    },
                    "expression": {
                      "type": "Literal",
                      "start": 3343,
                      "end": 3347,
                      "value": null,
                      "raw": "null"
                    }
                  },
                  "id": null,
                  "generator": false
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 3353,
            "end": 3437,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 3357,
                "end": 3436,
                "id": {
                  "type": "Identifier",
                  "start": 3357,
                  "end": 3363,
                  "decorators": [],
                  "name": "r6arg2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "start": 3366,
                  "end": 3436,
                  "expression": true,
                  "async": false,
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "start": 3366,
                    "end": 3393,
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "start": 3367,
                        "end": 3392,
                        "name": {
                          "type": "Identifier",
                          "start": 3367,
                          "end": 3368,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "constraint": {
                          "type": "TSTypeReference",
                          "start": 3377,
                          "end": 3392,
                          "typeName": {
                            "type": "Identifier",
                            "start": 3377,
                            "end": 3382,
                            "decorators": [],
                            "name": "Array",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 3382,
                            "end": 3392,
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "start": 3383,
                                "end": 3391,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 3383,
                                  "end": 3391,
                                  "decorators": [],
                                  "name": "Derived2",
                                  "optional": false,
                                  "typeAnnotation": null
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
                      "start": 3394,
                      "end": 3408,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 3395,
                        "end": 3408,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 3397,
                          "end": 3408,
                          "typeName": {
                            "type": "Identifier",
                            "start": 3397,
                            "end": 3402,
                            "decorators": [],
                            "name": "Array",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 3402,
                            "end": 3408,
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "start": 3403,
                                "end": 3407,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 3403,
                                  "end": 3407,
                                  "decorators": [],
                                  "name": "Base",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              }
                            ]
                          }
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "start": 3410,
                      "end": 3424,
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 3411,
                        "end": 3424,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 3413,
                          "end": 3424,
                          "typeName": {
                            "type": "Identifier",
                            "start": 3413,
                            "end": 3418,
                            "decorators": [],
                            "name": "Array",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 3418,
                            "end": 3424,
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "start": 3419,
                                "end": 3423,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 3419,
                                  "end": 3423,
                                  "decorators": [],
                                  "name": "Base",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              }
                            ]
                          }
                        }
                      }
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "TSTypeAssertion",
                    "start": 3429,
                    "end": 3436,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 3430,
                      "end": 3431,
                      "typeName": {
                        "type": "Identifier",
                        "start": 3430,
                        "end": 3431,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    },
                    "expression": {
                      "type": "Literal",
                      "start": 3432,
                      "end": 3436,
                      "value": null,
                      "raw": "null"
                    }
                  },
                  "id": null,
                  "generator": false
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 3442,
            "end": 3464,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 3446,
                "end": 3463,
                "id": {
                  "type": "Identifier",
                  "start": 3446,
                  "end": 3448,
                  "decorators": [],
                  "name": "r6",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 3451,
                  "end": 3463,
                  "callee": {
                    "type": "Identifier",
                    "start": 3451,
                    "end": 3456,
                    "decorators": [],
                    "name": "foo12",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 3457,
                      "end": 3462,
                      "decorators": [],
                      "name": "r6arg",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "optional": false
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 3527,
            "end": 3553,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 3531,
                "end": 3552,
                "id": {
                  "type": "Identifier",
                  "start": 3531,
                  "end": 3534,
                  "decorators": [],
                  "name": "r6a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ArrayExpression",
                  "start": 3537,
                  "end": 3552,
                  "elements": [
                    {
                      "type": "Identifier",
                      "start": 3538,
                      "end": 3544,
                      "decorators": [],
                      "name": "r6arg2",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    {
                      "type": "Identifier",
                      "start": 3546,
                      "end": 3551,
                      "decorators": [],
                      "name": "r6arg",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ]
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 3558,
            "end": 3584,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 3562,
                "end": 3583,
                "id": {
                  "type": "Identifier",
                  "start": 3562,
                  "end": 3565,
                  "decorators": [],
                  "name": "r6b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ArrayExpression",
                  "start": 3568,
                  "end": 3583,
                  "elements": [
                    {
                      "type": "Identifier",
                      "start": 3569,
                      "end": 3574,
                      "decorators": [],
                      "name": "r6arg",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    {
                      "type": "Identifier",
                      "start": 3576,
                      "end": 3582,
                      "decorators": [],
                      "name": "r6arg2",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ]
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 3590,
            "end": 3636,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 3594,
                "end": 3635,
                "id": {
                  "type": "Identifier",
                  "start": 3594,
                  "end": 3599,
                  "decorators": [],
                  "name": "r7arg",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "start": 3602,
                  "end": 3635,
                  "expression": true,
                  "async": false,
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "start": 3602,
                    "end": 3605,
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "start": 3603,
                        "end": 3604,
                        "name": {
                          "type": "Identifier",
                          "start": 3603,
                          "end": 3604,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
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
                      "start": 3606,
                      "end": 3623,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 3607,
                        "end": 3623,
                        "typeAnnotation": {
                          "type": "TSTypeLiteral",
                          "start": 3609,
                          "end": 3623,
                          "members": [
                            {
                              "type": "TSPropertySignature",
                              "start": 3611,
                              "end": 3616,
                              "computed": false,
                              "optional": false,
                              "readonly": false,
                              "key": {
                                "type": "Identifier",
                                "start": 3611,
                                "end": 3612,
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 3612,
                                "end": 3615,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 3614,
                                  "end": 3615,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 3614,
                                    "end": 3615,
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "typeArguments": null
                                }
                              },
                              "accessibility": null,
                              "static": false
                            },
                            {
                              "type": "TSPropertySignature",
                              "start": 3617,
                              "end": 3621,
                              "computed": false,
                              "optional": false,
                              "readonly": false,
                              "key": {
                                "type": "Identifier",
                                "start": 3617,
                                "end": 3618,
                                "decorators": [],
                                "name": "b",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 3618,
                                "end": 3621,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 3620,
                                  "end": 3621,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 3620,
                                    "end": 3621,
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "typeArguments": null
                                }
                              },
                              "accessibility": null,
                              "static": false
                            }
                          ]
                        }
                      }
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "TSTypeAssertion",
                    "start": 3628,
                    "end": 3635,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 3629,
                      "end": 3630,
                      "typeName": {
                        "type": "Identifier",
                        "start": 3629,
                        "end": 3630,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    },
                    "expression": {
                      "type": "Literal",
                      "start": 3631,
                      "end": 3635,
                      "value": null,
                      "raw": "null"
                    }
                  },
                  "id": null,
                  "generator": false
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 3641,
            "end": 3689,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 3645,
                "end": 3688,
                "id": {
                  "type": "Identifier",
                  "start": 3645,
                  "end": 3651,
                  "decorators": [],
                  "name": "r7arg2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "start": 3654,
                  "end": 3688,
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 3655,
                      "end": 3682,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 3656,
                        "end": 3682,
                        "typeAnnotation": {
                          "type": "TSTypeLiteral",
                          "start": 3658,
                          "end": 3682,
                          "members": [
                            {
                              "type": "TSPropertySignature",
                              "start": 3660,
                              "end": 3670,
                              "computed": false,
                              "optional": false,
                              "readonly": false,
                              "key": {
                                "type": "Identifier",
                                "start": 3660,
                                "end": 3661,
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 3661,
                                "end": 3669,
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "start": 3663,
                                  "end": 3669
                                }
                              },
                              "accessibility": null,
                              "static": false
                            },
                            {
                              "type": "TSPropertySignature",
                              "start": 3671,
                              "end": 3680,
                              "computed": false,
                              "optional": false,
                              "readonly": false,
                              "key": {
                                "type": "Identifier",
                                "start": 3671,
                                "end": 3672,
                                "decorators": [],
                                "name": "b",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 3672,
                                "end": 3680,
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "start": 3674,
                                  "end": 3680
                                }
                              },
                              "accessibility": null,
                              "static": false
                            }
                          ]
                        }
                      }
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "Literal",
                    "start": 3687,
                    "end": 3688,
                    "value": 1,
                    "raw": "1"
                  },
                  "id": null,
                  "generator": false
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 3694,
            "end": 3716,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 3698,
                "end": 3715,
                "id": {
                  "type": "Identifier",
                  "start": 3698,
                  "end": 3700,
                  "decorators": [],
                  "name": "r7",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 3703,
                  "end": 3715,
                  "callee": {
                    "type": "Identifier",
                    "start": 3703,
                    "end": 3708,
                    "decorators": [],
                    "name": "foo15",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 3709,
                      "end": 3714,
                      "decorators": [],
                      "name": "r7arg",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "optional": false
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 3728,
            "end": 3754,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 3732,
                "end": 3753,
                "id": {
                  "type": "Identifier",
                  "start": 3732,
                  "end": 3735,
                  "decorators": [],
                  "name": "r7a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ArrayExpression",
                  "start": 3738,
                  "end": 3753,
                  "elements": [
                    {
                      "type": "Identifier",
                      "start": 3739,
                      "end": 3745,
                      "decorators": [],
                      "name": "r7arg2",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    {
                      "type": "Identifier",
                      "start": 3747,
                      "end": 3752,
                      "decorators": [],
                      "name": "r7arg",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ]
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 3759,
            "end": 3785,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 3763,
                "end": 3784,
                "id": {
                  "type": "Identifier",
                  "start": 3763,
                  "end": 3766,
                  "decorators": [],
                  "name": "r7b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ArrayExpression",
                  "start": 3769,
                  "end": 3784,
                  "elements": [
                    {
                      "type": "Identifier",
                      "start": 3770,
                      "end": 3775,
                      "decorators": [],
                      "name": "r7arg",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    {
                      "type": "Identifier",
                      "start": 3777,
                      "end": 3783,
                      "decorators": [],
                      "name": "r7arg2",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ]
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 3791,
            "end": 3845,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 3795,
                "end": 3844,
                "id": {
                  "type": "Identifier",
                  "start": 3795,
                  "end": 3801,
                  "decorators": [],
                  "name": "r7arg3",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "start": 3804,
                  "end": 3844,
                  "expression": true,
                  "async": false,
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "start": 3804,
                    "end": 3820,
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "start": 3805,
                        "end": 3819,
                        "name": {
                          "type": "Identifier",
                          "start": 3805,
                          "end": 3806,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "constraint": {
                          "type": "TSTypeReference",
                          "start": 3815,
                          "end": 3819,
                          "typeName": {
                            "type": "Identifier",
                            "start": 3815,
                            "end": 3819,
                            "decorators": [],
                            "name": "Base",
                            "optional": false,
                            "typeAnnotation": null
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
                      "start": 3821,
                      "end": 3838,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 3822,
                        "end": 3838,
                        "typeAnnotation": {
                          "type": "TSTypeLiteral",
                          "start": 3824,
                          "end": 3838,
                          "members": [
                            {
                              "type": "TSPropertySignature",
                              "start": 3826,
                              "end": 3831,
                              "computed": false,
                              "optional": false,
                              "readonly": false,
                              "key": {
                                "type": "Identifier",
                                "start": 3826,
                                "end": 3827,
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 3827,
                                "end": 3830,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 3829,
                                  "end": 3830,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 3829,
                                    "end": 3830,
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "typeArguments": null
                                }
                              },
                              "accessibility": null,
                              "static": false
                            },
                            {
                              "type": "TSPropertySignature",
                              "start": 3832,
                              "end": 3836,
                              "computed": false,
                              "optional": false,
                              "readonly": false,
                              "key": {
                                "type": "Identifier",
                                "start": 3832,
                                "end": 3833,
                                "decorators": [],
                                "name": "b",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 3833,
                                "end": 3836,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 3835,
                                  "end": 3836,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 3835,
                                    "end": 3836,
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "typeArguments": null
                                }
                              },
                              "accessibility": null,
                              "static": false
                            }
                          ]
                        }
                      }
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "Literal",
                    "start": 3843,
                    "end": 3844,
                    "value": 1,
                    "raw": "1"
                  },
                  "id": null,
                  "generator": false
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 3850,
            "end": 3874,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 3854,
                "end": 3873,
                "id": {
                  "type": "Identifier",
                  "start": 3854,
                  "end": 3857,
                  "decorators": [],
                  "name": "r7c",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 3860,
                  "end": 3873,
                  "callee": {
                    "type": "Identifier",
                    "start": 3860,
                    "end": 3865,
                    "decorators": [],
                    "name": "foo15",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 3866,
                      "end": 3872,
                      "decorators": [],
                      "name": "r7arg3",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "optional": false
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 3932,
            "end": 3959,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 3936,
                "end": 3958,
                "id": {
                  "type": "Identifier",
                  "start": 3936,
                  "end": 3939,
                  "decorators": [],
                  "name": "r7d",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ArrayExpression",
                  "start": 3942,
                  "end": 3958,
                  "elements": [
                    {
                      "type": "Identifier",
                      "start": 3943,
                      "end": 3949,
                      "decorators": [],
                      "name": "r7arg2",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    {
                      "type": "Identifier",
                      "start": 3951,
                      "end": 3957,
                      "decorators": [],
                      "name": "r7arg3",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ]
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 3964,
            "end": 3991,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 3968,
                "end": 3990,
                "id": {
                  "type": "Identifier",
                  "start": 3968,
                  "end": 3971,
                  "decorators": [],
                  "name": "r7e",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ArrayExpression",
                  "start": 3974,
                  "end": 3990,
                  "elements": [
                    {
                      "type": "Identifier",
                      "start": 3975,
                      "end": 3981,
                      "decorators": [],
                      "name": "r7arg3",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    {
                      "type": "Identifier",
                      "start": 3983,
                      "end": 3989,
                      "decorators": [],
                      "name": "r7arg2",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ]
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 3997,
            "end": 4042,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 4001,
                "end": 4041,
                "id": {
                  "type": "Identifier",
                  "start": 4001,
                  "end": 4006,
                  "decorators": [],
                  "name": "r8arg",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "start": 4009,
                  "end": 4041,
                  "expression": true,
                  "async": false,
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "start": 4009,
                    "end": 4012,
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "start": 4010,
                        "end": 4011,
                        "name": {
                          "type": "Identifier",
                          "start": 4010,
                          "end": 4011,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
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
                      "start": 4013,
                      "end": 4027,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 4014,
                        "end": 4027,
                        "typeAnnotation": {
                          "type": "TSFunctionType",
                          "start": 4016,
                          "end": 4027,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 4017,
                              "end": 4021,
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 4018,
                                "end": 4021,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 4020,
                                  "end": 4021,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 4020,
                                    "end": 4021,
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "typeArguments": null
                                }
                              }
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "start": 4023,
                            "end": 4027,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 4026,
                              "end": 4027,
                              "typeName": {
                                "type": "Identifier",
                                "start": 4026,
                                "end": 4027,
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          }
                        }
                      }
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "TSTypeAssertion",
                    "start": 4032,
                    "end": 4041,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 4033,
                      "end": 4036,
                      "elementType": {
                        "type": "TSTypeReference",
                        "start": 4033,
                        "end": 4034,
                        "typeName": {
                          "type": "Identifier",
                          "start": 4033,
                          "end": 4034,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    },
                    "expression": {
                      "type": "Literal",
                      "start": 4037,
                      "end": 4041,
                      "value": null,
                      "raw": "null"
                    }
                  },
                  "id": null,
                  "generator": false
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 4047,
            "end": 4069,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 4051,
                "end": 4068,
                "id": {
                  "type": "Identifier",
                  "start": 4051,
                  "end": 4053,
                  "decorators": [],
                  "name": "r8",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 4056,
                  "end": 4068,
                  "callee": {
                    "type": "Identifier",
                    "start": 4056,
                    "end": 4061,
                    "decorators": [],
                    "name": "foo16",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 4062,
                      "end": 4067,
                      "decorators": [],
                      "name": "r8arg",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "optional": false
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 4082,
            "end": 4129,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 4086,
                "end": 4128,
                "id": {
                  "type": "Identifier",
                  "start": 4086,
                  "end": 4091,
                  "decorators": [],
                  "name": "r9arg",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "start": 4094,
                  "end": 4128,
                  "expression": true,
                  "async": false,
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "start": 4094,
                    "end": 4097,
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "start": 4095,
                        "end": 4096,
                        "name": {
                          "type": "Identifier",
                          "start": 4095,
                          "end": 4096,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
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
                      "start": 4098,
                      "end": 4112,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 4099,
                        "end": 4112,
                        "typeAnnotation": {
                          "type": "TSFunctionType",
                          "start": 4101,
                          "end": 4112,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 4102,
                              "end": 4106,
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 4103,
                                "end": 4106,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 4105,
                                  "end": 4106,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 4105,
                                    "end": 4106,
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "typeArguments": null
                                }
                              }
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "start": 4108,
                            "end": 4112,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 4111,
                              "end": 4112,
                              "typeName": {
                                "type": "Identifier",
                                "start": 4111,
                                "end": 4112,
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          }
                        }
                      }
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "TSTypeAssertion",
                    "start": 4117,
                    "end": 4128,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 4118,
                      "end": 4123,
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 4118,
                        "end": 4121
                      }
                    },
                    "expression": {
                      "type": "Literal",
                      "start": 4124,
                      "end": 4128,
                      "value": null,
                      "raw": "null"
                    }
                  },
                  "id": null,
                  "generator": false
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 4134,
            "end": 4156,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 4138,
                "end": 4155,
                "id": {
                  "type": "Identifier",
                  "start": 4138,
                  "end": 4140,
                  "decorators": [],
                  "name": "r9",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 4143,
                  "end": 4155,
                  "callee": {
                    "type": "Identifier",
                    "start": 4143,
                    "end": 4148,
                    "decorators": [],
                    "name": "foo17",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 4149,
                      "end": 4154,
                      "decorators": [],
                      "name": "r9arg",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "optional": false
                },
                "definite": false
              }
            ],
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
      "start": 4314,
      "end": 4768,
      "id": {
        "type": "Identifier",
        "start": 4321,
        "end": 4352,
        "decorators": [],
        "name": "WithGenericSignaturesInBaseType",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 4353,
        "end": 4768,
        "body": [
          {
            "type": "TSDeclareFunction",
            "start": 4359,
            "end": 4414,
            "id": {
              "type": "Identifier",
              "start": 4376,
              "end": 4380,
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "typeAnnotation": null
            },
            "generator": false,
            "async": false,
            "declare": true,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 4381,
                "end": 4401,
                "decorators": [],
                "name": "a2",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 4383,
                  "end": 4401,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 4385,
                    "end": 4401,
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 4385,
                      "end": 4388,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 4386,
                          "end": 4387,
                          "name": {
                            "type": "Identifier",
                            "start": 4386,
                            "end": 4387,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
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
                        "start": 4389,
                        "end": 4393,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 4390,
                          "end": 4393,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 4392,
                            "end": 4393,
                            "typeName": {
                              "type": "Identifier",
                              "start": 4392,
                              "end": 4393,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 4395,
                      "end": 4401,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 4398,
                        "end": 4401,
                        "elementType": {
                          "type": "TSTypeReference",
                          "start": 4398,
                          "end": 4399,
                          "typeName": {
                            "type": "Identifier",
                            "start": 4398,
                            "end": 4399,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      }
                    }
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 4402,
              "end": 4413,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 4404,
                "end": 4413,
                "exprName": {
                  "type": "Identifier",
                  "start": 4411,
                  "end": 4413,
                  "decorators": [],
                  "name": "a2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "body": null,
            "expression": false
          },
          {
            "type": "TSDeclareFunction",
            "start": 4419,
            "end": 4455,
            "id": {
              "type": "Identifier",
              "start": 4436,
              "end": 4440,
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "typeAnnotation": null
            },
            "generator": false,
            "async": false,
            "declare": true,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 4441,
                "end": 4448,
                "decorators": [],
                "name": "a2",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 4443,
                  "end": 4448,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 4445,
                    "end": 4448
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 4449,
              "end": 4454,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 4451,
                "end": 4454
              }
            },
            "body": null,
            "expression": false
          },
          {
            "type": "VariableDeclaration",
            "start": 4460,
            "end": 4491,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 4464,
                "end": 4490,
                "id": {
                  "type": "Identifier",
                  "start": 4464,
                  "end": 4470,
                  "decorators": [],
                  "name": "r2arg2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "start": 4473,
                  "end": 4490,
                  "expression": true,
                  "async": false,
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "start": 4473,
                    "end": 4476,
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "start": 4474,
                        "end": 4475,
                        "name": {
                          "type": "Identifier",
                          "start": 4474,
                          "end": 4475,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
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
                      "start": 4477,
                      "end": 4481,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 4478,
                        "end": 4481,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 4480,
                          "end": 4481,
                          "typeName": {
                            "type": "Identifier",
                            "start": 4480,
                            "end": 4481,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      }
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "ArrayExpression",
                    "start": 4486,
                    "end": 4490,
                    "elements": [
                      {
                        "type": "Literal",
                        "start": 4487,
                        "end": 4489,
                        "value": "",
                        "raw": "''"
                      }
                    ]
                  },
                  "id": null,
                  "generator": false
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 4496,
            "end": 4518,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 4500,
                "end": 4517,
                "id": {
                  "type": "Identifier",
                  "start": 4500,
                  "end": 4502,
                  "decorators": [],
                  "name": "r2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 4505,
                  "end": 4517,
                  "callee": {
                    "type": "Identifier",
                    "start": 4505,
                    "end": 4509,
                    "decorators": [],
                    "name": "foo2",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 4510,
                      "end": 4516,
                      "decorators": [],
                      "name": "r2arg2",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "optional": false
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "TSDeclareFunction",
            "start": 4590,
            "end": 4650,
            "id": {
              "type": "Identifier",
              "start": 4607,
              "end": 4611,
              "decorators": [],
              "name": "foo3",
              "optional": false,
              "typeAnnotation": null
            },
            "generator": false,
            "async": false,
            "declare": true,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 4612,
                "end": 4637,
                "decorators": [],
                "name": "a2",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 4614,
                  "end": 4637,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 4616,
                    "end": 4637,
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 4616,
                      "end": 4619,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 4617,
                          "end": 4618,
                          "name": {
                            "type": "Identifier",
                            "start": 4617,
                            "end": 4618,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
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
                        "start": 4620,
                        "end": 4624,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 4621,
                          "end": 4624,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 4623,
                            "end": 4624,
                            "typeName": {
                              "type": "Identifier",
                              "start": 4623,
                              "end": 4624,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 4626,
                      "end": 4637,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 4629,
                        "end": 4637,
                        "elementType": {
                          "type": "TSStringKeyword",
                          "start": 4629,
                          "end": 4635
                        }
                      }
                    }
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 4638,
              "end": 4649,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 4640,
                "end": 4649,
                "exprName": {
                  "type": "Identifier",
                  "start": 4647,
                  "end": 4649,
                  "decorators": [],
                  "name": "a2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "body": null,
            "expression": false
          },
          {
            "type": "TSDeclareFunction",
            "start": 4655,
            "end": 4691,
            "id": {
              "type": "Identifier",
              "start": 4672,
              "end": 4676,
              "decorators": [],
              "name": "foo3",
              "optional": false,
              "typeAnnotation": null
            },
            "generator": false,
            "async": false,
            "declare": true,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 4677,
                "end": 4684,
                "decorators": [],
                "name": "a2",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 4679,
                  "end": 4684,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 4681,
                    "end": 4684
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 4685,
              "end": 4690,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 4687,
                "end": 4690
              }
            },
            "body": null,
            "expression": false
          },
          {
            "type": "VariableDeclaration",
            "start": 4696,
            "end": 4732,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 4700,
                "end": 4731,
                "id": {
                  "type": "Identifier",
                  "start": 4700,
                  "end": 4706,
                  "decorators": [],
                  "name": "r3arg2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "start": 4709,
                  "end": 4731,
                  "expression": true,
                  "async": false,
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "start": 4709,
                    "end": 4712,
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "start": 4710,
                        "end": 4711,
                        "name": {
                          "type": "Identifier",
                          "start": 4710,
                          "end": 4711,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
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
                      "start": 4713,
                      "end": 4717,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 4714,
                        "end": 4717,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 4716,
                          "end": 4717,
                          "typeName": {
                            "type": "Identifier",
                            "start": 4716,
                            "end": 4717,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      }
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "TSTypeAssertion",
                    "start": 4722,
                    "end": 4731,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 4723,
                      "end": 4726,
                      "elementType": {
                        "type": "TSTypeReference",
                        "start": 4723,
                        "end": 4724,
                        "typeName": {
                          "type": "Identifier",
                          "start": 4723,
                          "end": 4724,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    },
                    "expression": {
                      "type": "Literal",
                      "start": 4727,
                      "end": 4731,
                      "value": null,
                      "raw": "null"
                    }
                  },
                  "id": null,
                  "generator": false
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 4737,
            "end": 4759,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 4741,
                "end": 4758,
                "id": {
                  "type": "Identifier",
                  "start": 4741,
                  "end": 4743,
                  "decorators": [],
                  "name": "r3",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 4746,
                  "end": 4758,
                  "callee": {
                    "type": "Identifier",
                    "start": 4746,
                    "end": 4750,
                    "decorators": [],
                    "name": "foo3",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 4751,
                      "end": 4757,
                      "decorators": [],
                      "name": "r3arg2",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "optional": false
                },
                "definite": false
              }
            ],
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
