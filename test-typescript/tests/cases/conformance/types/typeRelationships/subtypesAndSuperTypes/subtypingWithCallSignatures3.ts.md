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
        "name": "Errors",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "end": 430,
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
                "end": 417,
                "name": "a2",
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
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 396,
                          "end": 404,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 398,
                            "end": 404
                          }
                        },
                        "decorators": [],
                        "optional": false
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
            "start": 435,
            "end": 471,
            "id": {
              "type": "Identifier",
              "start": 452,
              "end": 456,
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
                "start": 457,
                "end": 464,
                "name": "a2",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 459,
                  "end": 464,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 461,
                    "end": 464
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
              "start": 465,
              "end": 470,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 467,
                "end": 470
              }
            }
          },
          {
            "type": "TSDeclareFunction",
            "start": 477,
            "end": 568,
            "id": {
              "type": "Identifier",
              "start": 494,
              "end": 498,
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
                "start": 499,
                "end": 555,
                "name": "a2",
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
                        "name": "x",
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
                                "name": "arg",
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
                            "name": "r",
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
            "start": 573,
            "end": 609,
            "id": {
              "type": "Identifier",
              "start": 590,
              "end": 594,
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
                "start": 595,
                "end": 602,
                "name": "a2",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 597,
                  "end": 602,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 599,
                    "end": 602
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
              "start": 603,
              "end": 608,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 605,
                "end": 608
              }
            }
          },
          {
            "type": "TSDeclareFunction",
            "start": 615,
            "end": 733,
            "id": {
              "type": "Identifier",
              "start": 632,
              "end": 636,
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
                "start": 637,
                "end": 720,
                "name": "a2",
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
                        "name": "x",
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
                                "name": "arg",
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
                        "start": 669,
                        "end": 695,
                        "name": "y",
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
                                "name": "arg2",
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
                            "name": "r",
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
            "start": 738,
            "end": 774,
            "id": {
              "type": "Identifier",
              "start": 755,
              "end": 759,
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
                "start": 760,
                "end": 767,
                "name": "a2",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 762,
                  "end": 767,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 764,
                    "end": 767
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
              "start": 768,
              "end": 773,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 770,
                "end": 773
              }
            }
          },
          {
            "type": "TSDeclareFunction",
            "start": 780,
            "end": 842,
            "id": {
              "type": "Identifier",
              "start": 797,
              "end": 802,
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
                "start": 803,
                "end": 829,
                "name": "a2",
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
                        "argument": {
                          "type": "Identifier",
                          "start": 811,
                          "end": 812,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "decorators": [],
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
            "start": 847,
            "end": 884,
            "id": {
              "type": "Identifier",
              "start": 864,
              "end": 869,
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
                "start": 870,
                "end": 877,
                "name": "a2",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 872,
                  "end": 877,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 874,
                    "end": 877
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
              "start": 878,
              "end": 883,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 880,
                "end": 883
              }
            }
          },
          {
            "type": "TSDeclareFunction",
            "start": 890,
            "end": 991,
            "id": {
              "type": "Identifier",
              "start": 907,
              "end": 912,
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
                "start": 913,
                "end": 978,
                "name": "a2",
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
                        "name": "x",
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
                                  "name": "foo",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
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
                        },
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 938,
                        "end": 969,
                        "name": "y",
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
                                  "name": "foo",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
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
                                  "name": "bar",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
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
                        },
                        "decorators": [],
                        "optional": false
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
            "start": 996,
            "end": 1033,
            "id": {
              "type": "Identifier",
              "start": 1013,
              "end": 1018,
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
                "start": 1019,
                "end": 1026,
                "name": "a2",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1021,
                  "end": 1026,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 1023,
                    "end": 1026
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
              "start": 1027,
              "end": 1032,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1029,
                "end": 1032
              }
            }
          },
          {
            "type": "TSDeclareFunction",
            "start": 1039,
            "end": 1133,
            "id": {
              "type": "Identifier",
              "start": 1056,
              "end": 1061,
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
                "start": 1062,
                "end": 1120,
                "name": "a2",
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
                        "name": "x",
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
                              "name": "Array",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
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
                        "start": 1083,
                        "end": 1101,
                        "name": "y",
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
                              "name": "Array",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
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
                          "name": "Array",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
            "start": 1138,
            "end": 1175,
            "id": {
              "type": "Identifier",
              "start": 1155,
              "end": 1160,
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
                "start": 1161,
                "end": 1168,
                "name": "a2",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1163,
                  "end": 1168,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 1165,
                    "end": 1168
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
              "start": 1169,
              "end": 1174,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1171,
                "end": 1174
              }
            }
          },
          {
            "type": "TSDeclareFunction",
            "start": 1181,
            "end": 1260,
            "id": {
              "type": "Identifier",
              "start": 1198,
              "end": 1203,
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
                "start": 1204,
                "end": 1247,
                "name": "a2",
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
                        "name": "x",
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
                                  "name": "a",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
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
                                  "name": "b",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
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
                        },
                        "decorators": [],
                        "optional": false
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
            "start": 1265,
            "end": 1302,
            "id": {
              "type": "Identifier",
              "start": 1282,
              "end": 1287,
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
                "start": 1288,
                "end": 1295,
                "name": "a2",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1290,
                  "end": 1295,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 1292,
                    "end": 1295
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
              "end": 1301,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1298,
                "end": 1301
              }
            }
          },
          {
            "type": "TSDeclareFunction",
            "start": 1308,
            "end": 1664,
            "id": {
              "type": "Identifier",
              "start": 1325,
              "end": 1330,
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
                "start": 1331,
                "end": 1651,
                "name": "a2",
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
                            "name": "x",
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
                                        "name": "a",
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "start": 1463,
                                          "end": 1471,
                                          "typeAnnotation": {
                                            "type": "TSNumberKeyword",
                                            "start": 1465,
                                            "end": 1471
                                          }
                                        },
                                        "decorators": [],
                                        "optional": false
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
                                        "name": "a",
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "start": 1497,
                                          "end": 1505,
                                          "typeAnnotation": {
                                            "type": "TSNumberKeyword",
                                            "start": 1499,
                                            "end": 1505
                                          }
                                        },
                                        "decorators": [],
                                        "optional": true
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
                            },
                            "decorators": [],
                            "optional": false
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
                            "name": "x",
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
                                        "name": "a",
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "start": 1566,
                                          "end": 1575,
                                          "typeAnnotation": {
                                            "type": "TSBooleanKeyword",
                                            "start": 1568,
                                            "end": 1575
                                          }
                                        },
                                        "decorators": [],
                                        "optional": false
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
                                        "optional": true
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
                            },
                            "decorators": [],
                            "optional": false
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
            "start": 1669,
            "end": 1706,
            "id": {
              "type": "Identifier",
              "start": 1686,
              "end": 1691,
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
                "start": 1692,
                "end": 1699,
                "name": "a2",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1694,
                  "end": 1699,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 1696,
                    "end": 1699
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
              "start": 1700,
              "end": 1705,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1702,
                "end": 1705
              }
            }
          },
          {
            "type": "TSDeclareFunction",
            "start": 1712,
            "end": 1988,
            "id": {
              "type": "Identifier",
              "start": 1729,
              "end": 1734,
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
                "start": 1735,
                "end": 1975,
                "name": "a2",
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
                            "name": "x",
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
                                            "name": "T",
                                            "typeAnnotation": null,
                                            "decorators": [],
                                            "optional": false
                                          },
                                          "constraint": {
                                            "type": "TSTypeReference",
                                            "start": 1778,
                                            "end": 1785,
                                            "typeName": {
                                              "type": "Identifier",
                                              "start": 1778,
                                              "end": 1785,
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
                                        "start": 1787,
                                        "end": 1791,
                                        "name": "a",
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
                                            "name": "T",
                                            "typeAnnotation": null,
                                            "decorators": [],
                                            "optional": false
                                          },
                                          "constraint": {
                                            "type": "TSTypeReference",
                                            "start": 1820,
                                            "end": 1824,
                                            "typeName": {
                                              "type": "Identifier",
                                              "start": 1820,
                                              "end": 1824,
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
                                        "start": 1826,
                                        "end": 1830,
                                        "name": "a",
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
                            "name": "x",
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
                                            "name": "T",
                                            "typeAnnotation": null,
                                            "decorators": [],
                                            "optional": false
                                          },
                                          "constraint": {
                                            "type": "TSTypeReference",
                                            "start": 1892,
                                            "end": 1900,
                                            "typeName": {
                                              "type": "Identifier",
                                              "start": 1892,
                                              "end": 1900,
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
                                        "start": 1902,
                                        "end": 1906,
                                        "name": "a",
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
                                            "name": "T",
                                            "typeAnnotation": null,
                                            "decorators": [],
                                            "optional": false
                                          },
                                          "constraint": {
                                            "type": "TSTypeReference",
                                            "start": 1935,
                                            "end": 1939,
                                            "typeName": {
                                              "type": "Identifier",
                                              "start": 1935,
                                              "end": 1939,
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
                                        "start": 1941,
                                        "end": 1945,
                                        "name": "a",
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
            "start": 1993,
            "end": 2030,
            "id": {
              "type": "Identifier",
              "start": 2010,
              "end": 2015,
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
                "start": 2016,
                "end": 2023,
                "name": "a2",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 2018,
                  "end": 2023,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 2020,
                    "end": 2023
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
              "start": 2024,
              "end": 2029,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 2026,
                "end": 2029
              }
            }
          },
          {
            "type": "VariableDeclaration",
            "start": 2036,
            "end": 2077,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2040,
                "end": 2076,
                "id": {
                  "type": "Identifier",
                  "start": 2040,
                  "end": 2042,
                  "name": "r1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 2045,
                  "end": 2076,
                  "callee": {
                    "type": "Identifier",
                    "start": 2045,
                    "end": 2049,
                    "name": "foo2",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "start": 2050,
                      "end": 2075,
                      "id": null,
                      "expression": true,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 2057,
                          "end": 2061,
                          "name": "x",
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
                      "body": {
                        "type": "TSTypeAssertion",
                        "start": 2066,
                        "end": 2075,
                        "expression": {
                          "type": "Literal",
                          "start": 2071,
                          "end": 2075,
                          "value": null,
                          "raw": "null"
                        },
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
                              "name": "U",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        }
                      },
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
                            "start": 2054,
                            "end": 2055,
                            "name": {
                              "type": "Identifier",
                              "start": 2054,
                              "end": 2055,
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
                      "returnType": null
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
            "start": 2089,
            "end": 2148,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2093,
                "end": 2147,
                "id": {
                  "type": "Identifier",
                  "start": 2093,
                  "end": 2096,
                  "name": "r1a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                      "id": null,
                      "expression": true,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 2101,
                          "end": 2110,
                          "name": "x",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 2102,
                            "end": 2110,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 2104,
                              "end": 2110
                            }
                          },
                          "decorators": [],
                          "optional": false
                        }
                      ],
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
                      "typeParameters": null,
                      "returnType": null
                    },
                    {
                      "type": "ArrowFunctionExpression",
                      "start": 2121,
                      "end": 2146,
                      "id": null,
                      "expression": true,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 2128,
                          "end": 2132,
                          "name": "x",
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
                      "body": {
                        "type": "TSTypeAssertion",
                        "start": 2137,
                        "end": 2146,
                        "expression": {
                          "type": "Literal",
                          "start": 2142,
                          "end": 2146,
                          "value": null,
                          "raw": "null"
                        },
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
                              "name": "U",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        }
                      },
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
                            "start": 2125,
                            "end": 2126,
                            "name": {
                              "type": "Identifier",
                              "start": 2125,
                              "end": 2126,
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
                      "returnType": null
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
            "start": 2153,
            "end": 2212,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2157,
                "end": 2211,
                "id": {
                  "type": "Identifier",
                  "start": 2157,
                  "end": 2160,
                  "name": "r1b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                      "id": null,
                      "expression": true,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 2171,
                          "end": 2175,
                          "name": "x",
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
                      "body": {
                        "type": "TSTypeAssertion",
                        "start": 2180,
                        "end": 2189,
                        "expression": {
                          "type": "Literal",
                          "start": 2185,
                          "end": 2189,
                          "value": null,
                          "raw": "null"
                        },
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
                              "name": "U",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        }
                      },
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
                            "start": 2168,
                            "end": 2169,
                            "name": {
                              "type": "Identifier",
                              "start": 2168,
                              "end": 2169,
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
                      "returnType": null
                    },
                    {
                      "type": "ArrowFunctionExpression",
                      "start": 2191,
                      "end": 2210,
                      "id": null,
                      "expression": true,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 2192,
                          "end": 2201,
                          "name": "x",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 2193,
                            "end": 2201,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 2195,
                              "end": 2201
                            }
                          },
                          "decorators": [],
                          "optional": false
                        }
                      ],
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
                      "typeParameters": null,
                      "returnType": null
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
            "start": 2218,
            "end": 2325,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2222,
                "end": 2324,
                "id": {
                  "type": "Identifier",
                  "start": 2222,
                  "end": 2227,
                  "name": "r2arg",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "start": 2230,
                  "end": 2324,
                  "id": null,
                  "expression": true,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 2286,
                      "end": 2302,
                      "name": "x",
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
                              "name": "arg",
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
                  "body": {
                    "type": "ArrowFunctionExpression",
                    "start": 2307,
                    "end": 2324,
                    "id": null,
                    "expression": true,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 2308,
                        "end": 2312,
                        "name": "r",
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
                    "body": {
                      "type": "TSTypeAssertion",
                      "start": 2317,
                      "end": 2324,
                      "expression": {
                        "type": "Literal",
                        "start": 2320,
                        "end": 2324,
                        "value": null,
                        "raw": "null"
                      },
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 2318,
                        "end": 2319,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2318,
                          "end": 2319,
                          "name": "V",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "typeParameters": null,
                    "returnType": null
                  },
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
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "constraint": {
                          "type": "TSTypeReference",
                          "start": 2241,
                          "end": 2245,
                          "typeName": {
                            "type": "Identifier",
                            "start": 2241,
                            "end": 2245,
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
                        "start": 2247,
                        "end": 2264,
                        "name": {
                          "type": "Identifier",
                          "start": 2247,
                          "end": 2248,
                          "name": "U",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "constraint": {
                          "type": "TSTypeReference",
                          "start": 2257,
                          "end": 2264,
                          "typeName": {
                            "type": "Identifier",
                            "start": 2257,
                            "end": 2264,
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
                        "start": 2266,
                        "end": 2284,
                        "name": {
                          "type": "Identifier",
                          "start": 2266,
                          "end": 2267,
                          "name": "V",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "constraint": {
                          "type": "TSTypeReference",
                          "start": 2276,
                          "end": 2284,
                          "typeName": {
                            "type": "Identifier",
                            "start": 2276,
                            "end": 2284,
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
                  "returnType": null
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 2330,
            "end": 2402,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2334,
                "end": 2401,
                "id": {
                  "type": "Identifier",
                  "start": 2334,
                  "end": 2340,
                  "name": "r2arg2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "start": 2343,
                  "end": 2401,
                  "id": null,
                  "expression": true,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 2344,
                      "end": 2369,
                      "name": "x",
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
                              "name": "arg",
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
                  "body": {
                    "type": "ArrowFunctionExpression",
                    "start": 2374,
                    "end": 2401,
                    "id": null,
                    "expression": true,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 2375,
                        "end": 2382,
                        "name": "r",
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
                    "body": {
                      "type": "TSTypeAssertion",
                      "start": 2387,
                      "end": 2401,
                      "expression": {
                        "type": "Literal",
                        "start": 2397,
                        "end": 2401,
                        "value": null,
                        "raw": "null"
                      },
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 2388,
                        "end": 2396,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2388,
                          "end": 2396,
                          "name": "Derived2",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "typeParameters": null,
                    "returnType": null
                  },
                  "typeParameters": null,
                  "returnType": null
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 2407,
            "end": 2428,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2411,
                "end": 2427,
                "id": {
                  "type": "Identifier",
                  "start": 2411,
                  "end": 2413,
                  "name": "r2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 2416,
                  "end": 2427,
                  "callee": {
                    "type": "Identifier",
                    "start": 2416,
                    "end": 2420,
                    "name": "foo7",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 2421,
                      "end": 2426,
                      "name": "r2arg",
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
            "start": 2440,
            "end": 2466,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2444,
                "end": 2465,
                "id": {
                  "type": "Identifier",
                  "start": 2444,
                  "end": 2447,
                  "name": "r2a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                      "name": "r2arg2",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 2459,
                      "end": 2464,
                      "name": "r2arg",
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
            "start": 2471,
            "end": 2497,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2475,
                "end": 2496,
                "id": {
                  "type": "Identifier",
                  "start": 2475,
                  "end": 2478,
                  "name": "r2b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                      "name": "r2arg",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 2489,
                      "end": 2495,
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
            "start": 2503,
            "end": 2624,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2507,
                "end": 2623,
                "id": {
                  "type": "Identifier",
                  "start": 2507,
                  "end": 2512,
                  "name": "r3arg",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "start": 2515,
                  "end": 2623,
                  "id": null,
                  "expression": true,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 2551,
                      "end": 2567,
                      "name": "x",
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
                              "name": "arg",
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
                      },
                      "decorators": [],
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 2569,
                      "end": 2601,
                      "name": "y",
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
                              "name": "arg2",
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
                                        "name": "foo",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
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
                              },
                              "decorators": [],
                              "optional": false
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
                  "body": {
                    "type": "ArrowFunctionExpression",
                    "start": 2606,
                    "end": 2623,
                    "id": null,
                    "expression": true,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 2607,
                        "end": 2611,
                        "name": "r",
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
                    "body": {
                      "type": "TSTypeAssertion",
                      "start": 2616,
                      "end": 2623,
                      "expression": {
                        "type": "Literal",
                        "start": 2619,
                        "end": 2623,
                        "value": null,
                        "raw": "null"
                      },
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 2617,
                        "end": 2618,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2617,
                          "end": 2618,
                          "name": "U",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "typeParameters": null,
                    "returnType": null
                  },
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
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "constraint": {
                          "type": "TSTypeReference",
                          "start": 2526,
                          "end": 2530,
                          "typeName": {
                            "type": "Identifier",
                            "start": 2526,
                            "end": 2530,
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
                        "start": 2532,
                        "end": 2549,
                        "name": {
                          "type": "Identifier",
                          "start": 2532,
                          "end": 2533,
                          "name": "U",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "constraint": {
                          "type": "TSTypeReference",
                          "start": 2542,
                          "end": 2549,
                          "typeName": {
                            "type": "Identifier",
                            "start": 2542,
                            "end": 2549,
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
                  "returnType": null
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 2629,
            "end": 2728,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2633,
                "end": 2727,
                "id": {
                  "type": "Identifier",
                  "start": 2633,
                  "end": 2639,
                  "name": "r3arg2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "start": 2642,
                  "end": 2727,
                  "id": null,
                  "expression": true,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 2643,
                      "end": 2668,
                      "name": "x",
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
                              "name": "arg",
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
                      "start": 2670,
                      "end": 2696,
                      "name": "y",
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
                              "name": "arg2",
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
                  "body": {
                    "type": "ArrowFunctionExpression",
                    "start": 2701,
                    "end": 2727,
                    "id": null,
                    "expression": true,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 2702,
                        "end": 2709,
                        "name": "r",
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
                    "body": {
                      "type": "TSTypeAssertion",
                      "start": 2714,
                      "end": 2727,
                      "expression": {
                        "type": "Literal",
                        "start": 2723,
                        "end": 2727,
                        "value": null,
                        "raw": "null"
                      },
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 2715,
                        "end": 2722,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2715,
                          "end": 2722,
                          "name": "Derived",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "typeParameters": null,
                    "returnType": null
                  },
                  "typeParameters": null,
                  "returnType": null
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 2733,
            "end": 2754,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2737,
                "end": 2753,
                "id": {
                  "type": "Identifier",
                  "start": 2737,
                  "end": 2739,
                  "name": "r3",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 2742,
                  "end": 2753,
                  "callee": {
                    "type": "Identifier",
                    "start": 2742,
                    "end": 2746,
                    "name": "foo8",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 2747,
                      "end": 2752,
                      "name": "r3arg",
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
            "start": 2766,
            "end": 2792,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2770,
                "end": 2791,
                "id": {
                  "type": "Identifier",
                  "start": 2770,
                  "end": 2773,
                  "name": "r3a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                      "name": "r3arg2",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 2785,
                      "end": 2790,
                      "name": "r3arg",
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
            "start": 2797,
            "end": 2823,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2801,
                "end": 2822,
                "id": {
                  "type": "Identifier",
                  "start": 2801,
                  "end": 2804,
                  "name": "r3b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                      "name": "r3arg",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 2815,
                      "end": 2821,
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
            "start": 2829,
            "end": 2883,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2833,
                "end": 2882,
                "id": {
                  "type": "Identifier",
                  "start": 2833,
                  "end": 2838,
                  "name": "r4arg",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "start": 2841,
                  "end": 2882,
                  "id": null,
                  "expression": true,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "RestElement",
                      "start": 2861,
                      "end": 2870,
                      "argument": {
                        "type": "Identifier",
                        "start": 2864,
                        "end": 2865,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "decorators": [],
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
                  "body": {
                    "type": "TSTypeAssertion",
                    "start": 2875,
                    "end": 2882,
                    "expression": {
                      "type": "Literal",
                      "start": 2878,
                      "end": 2882,
                      "value": null,
                      "raw": "null"
                    },
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 2876,
                      "end": 2877,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2876,
                        "end": 2877,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
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
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "constraint": {
                          "type": "TSTypeReference",
                          "start": 2852,
                          "end": 2859,
                          "typeName": {
                            "type": "Identifier",
                            "start": 2852,
                            "end": 2859,
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
                  "returnType": null
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 2888,
            "end": 2930,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2892,
                "end": 2929,
                "id": {
                  "type": "Identifier",
                  "start": 2892,
                  "end": 2898,
                  "name": "r4arg2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "start": 2901,
                  "end": 2929,
                  "id": null,
                  "expression": true,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "RestElement",
                      "start": 2902,
                      "end": 2914,
                      "argument": {
                        "type": "Identifier",
                        "start": 2905,
                        "end": 2906,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "decorators": [],
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
                  "body": {
                    "type": "TSTypeAssertion",
                    "start": 2919,
                    "end": 2929,
                    "expression": {
                      "type": "Literal",
                      "start": 2925,
                      "end": 2929,
                      "value": null,
                      "raw": "null"
                    },
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 2920,
                      "end": 2924,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2920,
                        "end": 2924,
                        "name": "Base",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "typeParameters": null,
                  "returnType": null
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 2935,
            "end": 2957,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2939,
                "end": 2956,
                "id": {
                  "type": "Identifier",
                  "start": 2939,
                  "end": 2941,
                  "name": "r4",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 2944,
                  "end": 2956,
                  "callee": {
                    "type": "Identifier",
                    "start": 2944,
                    "end": 2949,
                    "name": "foo10",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 2950,
                      "end": 2955,
                      "name": "r4arg",
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
            "start": 2969,
            "end": 2995,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2973,
                "end": 2994,
                "id": {
                  "type": "Identifier",
                  "start": 2973,
                  "end": 2976,
                  "name": "r4a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                      "name": "r4arg2",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 2988,
                      "end": 2993,
                      "name": "r4arg",
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
            "start": 3000,
            "end": 3026,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 3004,
                "end": 3025,
                "id": {
                  "type": "Identifier",
                  "start": 3004,
                  "end": 3007,
                  "name": "r4b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                      "name": "r4arg",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 3018,
                      "end": 3024,
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
            "start": 3032,
            "end": 3087,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 3036,
                "end": 3086,
                "id": {
                  "type": "Identifier",
                  "start": 3036,
                  "end": 3041,
                  "name": "r5arg",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "start": 3044,
                  "end": 3086,
                  "id": null,
                  "expression": true,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 3064,
                      "end": 3068,
                      "name": "x",
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
                      "start": 3070,
                      "end": 3074,
                      "name": "y",
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
                  "body": {
                    "type": "TSTypeAssertion",
                    "start": 3079,
                    "end": 3086,
                    "expression": {
                      "type": "Literal",
                      "start": 3082,
                      "end": 3086,
                      "value": null,
                      "raw": "null"
                    },
                    "typeAnnotation": {
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
                  },
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
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "constraint": {
                          "type": "TSTypeReference",
                          "start": 3055,
                          "end": 3062,
                          "typeName": {
                            "type": "Identifier",
                            "start": 3055,
                            "end": 3062,
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
                  "returnType": null
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 3092,
            "end": 3173,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 3096,
                "end": 3172,
                "id": {
                  "type": "Identifier",
                  "start": 3096,
                  "end": 3102,
                  "name": "r5arg2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "start": 3105,
                  "end": 3172,
                  "id": null,
                  "expression": true,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 3106,
                      "end": 3124,
                      "name": "x",
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
                                "name": "foo",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
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
                      },
                      "decorators": [],
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 3126,
                      "end": 3157,
                      "name": "y",
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
                                "name": "foo",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
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
                                "name": "bar",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
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
                      },
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "TSTypeAssertion",
                    "start": 3162,
                    "end": 3172,
                    "expression": {
                      "type": "Literal",
                      "start": 3168,
                      "end": 3172,
                      "value": null,
                      "raw": "null"
                    },
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 3163,
                      "end": 3167,
                      "typeName": {
                        "type": "Identifier",
                        "start": 3163,
                        "end": 3167,
                        "name": "Base",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "typeParameters": null,
                  "returnType": null
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 3178,
            "end": 3200,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 3182,
                "end": 3199,
                "id": {
                  "type": "Identifier",
                  "start": 3182,
                  "end": 3184,
                  "name": "r5",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 3187,
                  "end": 3199,
                  "callee": {
                    "type": "Identifier",
                    "start": 3187,
                    "end": 3192,
                    "name": "foo11",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 3193,
                      "end": 3198,
                      "name": "r5arg",
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
            "start": 3212,
            "end": 3238,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 3216,
                "end": 3237,
                "id": {
                  "type": "Identifier",
                  "start": 3216,
                  "end": 3219,
                  "name": "r5a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                      "name": "r5arg2",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 3231,
                      "end": 3236,
                      "name": "r5arg",
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
            "start": 3243,
            "end": 3269,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 3247,
                "end": 3268,
                "id": {
                  "type": "Identifier",
                  "start": 3247,
                  "end": 3250,
                  "name": "r5b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                      "name": "r5arg",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 3261,
                      "end": 3267,
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
            "start": 3275,
            "end": 3348,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 3279,
                "end": 3347,
                "id": {
                  "type": "Identifier",
                  "start": 3279,
                  "end": 3284,
                  "name": "r6arg",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "start": 3287,
                  "end": 3347,
                  "id": null,
                  "expression": true,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 3288,
                      "end": 3302,
                      "name": "x",
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
                            "name": "Array",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
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
                      "start": 3304,
                      "end": 3322,
                      "name": "y",
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
                            "name": "Array",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
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
                  "body": {
                    "type": "TSTypeAssertion",
                    "start": 3327,
                    "end": 3347,
                    "expression": {
                      "type": "Literal",
                      "start": 3343,
                      "end": 3347,
                      "value": null,
                      "raw": "null"
                    },
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 3328,
                      "end": 3342,
                      "typeName": {
                        "type": "Identifier",
                        "start": 3328,
                        "end": 3333,
                        "name": "Array",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
                  "typeParameters": null,
                  "returnType": null
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 3353,
            "end": 3437,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 3357,
                "end": 3436,
                "id": {
                  "type": "Identifier",
                  "start": 3357,
                  "end": 3363,
                  "name": "r6arg2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "start": 3366,
                  "end": 3436,
                  "id": null,
                  "expression": true,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 3394,
                      "end": 3408,
                      "name": "x",
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
                            "name": "Array",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
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
                      "start": 3410,
                      "end": 3424,
                      "name": "y",
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
                            "name": "Array",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
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
                  "body": {
                    "type": "TSTypeAssertion",
                    "start": 3429,
                    "end": 3436,
                    "expression": {
                      "type": "Literal",
                      "start": 3432,
                      "end": 3436,
                      "value": null,
                      "raw": "null"
                    },
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 3430,
                      "end": 3431,
                      "typeName": {
                        "type": "Identifier",
                        "start": 3430,
                        "end": 3431,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
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
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "constraint": {
                          "type": "TSTypeReference",
                          "start": 3377,
                          "end": 3392,
                          "typeName": {
                            "type": "Identifier",
                            "start": 3377,
                            "end": 3382,
                            "name": "Array",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
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
                  "returnType": null
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 3442,
            "end": 3464,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 3446,
                "end": 3463,
                "id": {
                  "type": "Identifier",
                  "start": 3446,
                  "end": 3448,
                  "name": "r6",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 3451,
                  "end": 3463,
                  "callee": {
                    "type": "Identifier",
                    "start": 3451,
                    "end": 3456,
                    "name": "foo12",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 3457,
                      "end": 3462,
                      "name": "r6arg",
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
            "start": 3527,
            "end": 3553,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 3531,
                "end": 3552,
                "id": {
                  "type": "Identifier",
                  "start": 3531,
                  "end": 3534,
                  "name": "r6a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                      "name": "r6arg2",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 3546,
                      "end": 3551,
                      "name": "r6arg",
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
            "start": 3558,
            "end": 3584,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 3562,
                "end": 3583,
                "id": {
                  "type": "Identifier",
                  "start": 3562,
                  "end": 3565,
                  "name": "r6b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                      "name": "r6arg",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 3576,
                      "end": 3582,
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
            "start": 3590,
            "end": 3636,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 3594,
                "end": 3635,
                "id": {
                  "type": "Identifier",
                  "start": 3594,
                  "end": 3599,
                  "name": "r7arg",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "start": 3602,
                  "end": 3635,
                  "id": null,
                  "expression": true,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 3606,
                      "end": 3623,
                      "name": "x",
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
                                "name": "a",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
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
                              "start": 3617,
                              "end": 3621,
                              "computed": false,
                              "optional": false,
                              "readonly": false,
                              "key": {
                                "type": "Identifier",
                                "start": 3617,
                                "end": 3618,
                                "name": "b",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
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
                  "body": {
                    "type": "TSTypeAssertion",
                    "start": 3628,
                    "end": 3635,
                    "expression": {
                      "type": "Literal",
                      "start": 3631,
                      "end": 3635,
                      "value": null,
                      "raw": "null"
                    },
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 3629,
                      "end": 3630,
                      "typeName": {
                        "type": "Identifier",
                        "start": 3629,
                        "end": 3630,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
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
                  "returnType": null
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 3641,
            "end": 3689,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 3645,
                "end": 3688,
                "id": {
                  "type": "Identifier",
                  "start": 3645,
                  "end": 3651,
                  "name": "r7arg2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "start": 3654,
                  "end": 3688,
                  "id": null,
                  "expression": true,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 3655,
                      "end": 3682,
                      "name": "x",
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
                                "name": "a",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
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
                                "name": "b",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
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
                      },
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "Literal",
                    "start": 3687,
                    "end": 3688,
                    "value": 1,
                    "raw": "1"
                  },
                  "typeParameters": null,
                  "returnType": null
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 3694,
            "end": 3716,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 3698,
                "end": 3715,
                "id": {
                  "type": "Identifier",
                  "start": 3698,
                  "end": 3700,
                  "name": "r7",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 3703,
                  "end": 3715,
                  "callee": {
                    "type": "Identifier",
                    "start": 3703,
                    "end": 3708,
                    "name": "foo15",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 3709,
                      "end": 3714,
                      "name": "r7arg",
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
            "start": 3728,
            "end": 3754,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 3732,
                "end": 3753,
                "id": {
                  "type": "Identifier",
                  "start": 3732,
                  "end": 3735,
                  "name": "r7a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                      "name": "r7arg2",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 3747,
                      "end": 3752,
                      "name": "r7arg",
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
            "start": 3759,
            "end": 3785,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 3763,
                "end": 3784,
                "id": {
                  "type": "Identifier",
                  "start": 3763,
                  "end": 3766,
                  "name": "r7b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                      "name": "r7arg",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 3777,
                      "end": 3783,
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
            "start": 3791,
            "end": 3845,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 3795,
                "end": 3844,
                "id": {
                  "type": "Identifier",
                  "start": 3795,
                  "end": 3801,
                  "name": "r7arg3",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "start": 3804,
                  "end": 3844,
                  "id": null,
                  "expression": true,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 3821,
                      "end": 3838,
                      "name": "x",
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
                                "name": "a",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
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
                              "start": 3832,
                              "end": 3836,
                              "computed": false,
                              "optional": false,
                              "readonly": false,
                              "key": {
                                "type": "Identifier",
                                "start": 3832,
                                "end": 3833,
                                "name": "b",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
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
                  "body": {
                    "type": "Literal",
                    "start": 3843,
                    "end": 3844,
                    "value": 1,
                    "raw": "1"
                  },
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
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "constraint": {
                          "type": "TSTypeReference",
                          "start": 3815,
                          "end": 3819,
                          "typeName": {
                            "type": "Identifier",
                            "start": 3815,
                            "end": 3819,
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
                  "returnType": null
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 3850,
            "end": 3874,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 3854,
                "end": 3873,
                "id": {
                  "type": "Identifier",
                  "start": 3854,
                  "end": 3857,
                  "name": "r7c",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 3860,
                  "end": 3873,
                  "callee": {
                    "type": "Identifier",
                    "start": 3860,
                    "end": 3865,
                    "name": "foo15",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 3866,
                      "end": 3872,
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
            "start": 3932,
            "end": 3959,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 3936,
                "end": 3958,
                "id": {
                  "type": "Identifier",
                  "start": 3936,
                  "end": 3939,
                  "name": "r7d",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                      "name": "r7arg2",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 3951,
                      "end": 3957,
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
            "start": 3964,
            "end": 3991,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 3968,
                "end": 3990,
                "id": {
                  "type": "Identifier",
                  "start": 3968,
                  "end": 3971,
                  "name": "r7e",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                      "name": "r7arg3",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 3983,
                      "end": 3989,
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
            "start": 3997,
            "end": 4042,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 4001,
                "end": 4041,
                "id": {
                  "type": "Identifier",
                  "start": 4001,
                  "end": 4006,
                  "name": "r8arg",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "start": 4009,
                  "end": 4041,
                  "id": null,
                  "expression": true,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 4013,
                      "end": 4027,
                      "name": "x",
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
                              "name": "a",
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
                  "body": {
                    "type": "TSTypeAssertion",
                    "start": 4032,
                    "end": 4041,
                    "expression": {
                      "type": "Literal",
                      "start": 4037,
                      "end": 4041,
                      "value": null,
                      "raw": "null"
                    },
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
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    }
                  },
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
                  "returnType": null
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 4047,
            "end": 4069,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 4051,
                "end": 4068,
                "id": {
                  "type": "Identifier",
                  "start": 4051,
                  "end": 4053,
                  "name": "r8",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 4056,
                  "end": 4068,
                  "callee": {
                    "type": "Identifier",
                    "start": 4056,
                    "end": 4061,
                    "name": "foo16",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 4062,
                      "end": 4067,
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
            "start": 4082,
            "end": 4129,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 4086,
                "end": 4128,
                "id": {
                  "type": "Identifier",
                  "start": 4086,
                  "end": 4091,
                  "name": "r9arg",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "start": 4094,
                  "end": 4128,
                  "id": null,
                  "expression": true,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 4098,
                      "end": 4112,
                      "name": "x",
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
                              "name": "a",
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
                  "body": {
                    "type": "TSTypeAssertion",
                    "start": 4117,
                    "end": 4128,
                    "expression": {
                      "type": "Literal",
                      "start": 4124,
                      "end": 4128,
                      "value": null,
                      "raw": "null"
                    },
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 4118,
                      "end": 4123,
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 4118,
                        "end": 4121
                      }
                    }
                  },
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
                  "returnType": null
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 4134,
            "end": 4156,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 4138,
                "end": 4155,
                "id": {
                  "type": "Identifier",
                  "start": 4138,
                  "end": 4140,
                  "name": "r9",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 4143,
                  "end": 4155,
                  "callee": {
                    "type": "Identifier",
                    "start": 4143,
                    "end": 4148,
                    "name": "foo17",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 4149,
                      "end": 4154,
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
      "start": 4314,
      "end": 4768,
      "id": {
        "type": "Identifier",
        "start": 4321,
        "end": 4352,
        "name": "WithGenericSignaturesInBaseType",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
                "start": 4381,
                "end": 4401,
                "name": "a2",
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
                        "start": 4389,
                        "end": 4393,
                        "name": "x",
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
            "start": 4419,
            "end": 4455,
            "id": {
              "type": "Identifier",
              "start": 4436,
              "end": 4440,
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
                "start": 4441,
                "end": 4448,
                "name": "a2",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 4443,
                  "end": 4448,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 4445,
                    "end": 4448
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
              "start": 4449,
              "end": 4454,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 4451,
                "end": 4454
              }
            }
          },
          {
            "type": "VariableDeclaration",
            "start": 4460,
            "end": 4491,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 4464,
                "end": 4490,
                "id": {
                  "type": "Identifier",
                  "start": 4464,
                  "end": 4470,
                  "name": "r2arg2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "start": 4473,
                  "end": 4490,
                  "id": null,
                  "expression": true,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 4477,
                      "end": 4481,
                      "name": "x",
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
                  "returnType": null
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 4496,
            "end": 4518,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 4500,
                "end": 4517,
                "id": {
                  "type": "Identifier",
                  "start": 4500,
                  "end": 4502,
                  "name": "r2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 4505,
                  "end": 4517,
                  "callee": {
                    "type": "Identifier",
                    "start": 4505,
                    "end": 4509,
                    "name": "foo2",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 4510,
                      "end": 4516,
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
            "start": 4590,
            "end": 4650,
            "id": {
              "type": "Identifier",
              "start": 4607,
              "end": 4611,
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
                "start": 4612,
                "end": 4637,
                "name": "a2",
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
                        "start": 4620,
                        "end": 4624,
                        "name": "x",
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
            "start": 4655,
            "end": 4691,
            "id": {
              "type": "Identifier",
              "start": 4672,
              "end": 4676,
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
                "start": 4677,
                "end": 4684,
                "name": "a2",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 4679,
                  "end": 4684,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 4681,
                    "end": 4684
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
              "start": 4685,
              "end": 4690,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 4687,
                "end": 4690
              }
            }
          },
          {
            "type": "VariableDeclaration",
            "start": 4696,
            "end": 4732,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 4700,
                "end": 4731,
                "id": {
                  "type": "Identifier",
                  "start": 4700,
                  "end": 4706,
                  "name": "r3arg2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "start": 4709,
                  "end": 4731,
                  "id": null,
                  "expression": true,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 4713,
                      "end": 4717,
                      "name": "x",
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
                  "body": {
                    "type": "TSTypeAssertion",
                    "start": 4722,
                    "end": 4731,
                    "expression": {
                      "type": "Literal",
                      "start": 4727,
                      "end": 4731,
                      "value": null,
                      "raw": "null"
                    },
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
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    }
                  },
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
                  "returnType": null
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 4737,
            "end": 4759,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 4741,
                "end": 4758,
                "id": {
                  "type": "Identifier",
                  "start": 4741,
                  "end": 4743,
                  "name": "r3",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 4746,
                  "end": 4758,
                  "callee": {
                    "type": "Identifier",
                    "start": 4746,
                    "end": 4750,
                    "name": "foo3",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 4751,
                      "end": 4757,
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
