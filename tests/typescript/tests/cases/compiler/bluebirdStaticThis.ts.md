__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 231,
  "end": 9380,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 231,
      "end": 8626,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 238,
        "end": 8626,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 294,
          "end": 8626,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 297,
              "end": 421,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 297,
                "end": 308,
                "decorators": [],
                "name": "constructor",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "constructor",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "start": 308,
                "end": 421,
                "async": false,
                "body": null,
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 309,
                    "end": 419,
                    "decorators": [],
                    "name": "callback",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 317,
                      "end": 419,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 319,
                        "end": 419,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 320,
                            "end": 380,
                            "decorators": [],
                            "name": "resolve",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 327,
                              "end": 380,
                              "typeAnnotation": {
                                "type": "TSFunctionType",
                                "start": 329,
                                "end": 380,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "start": 330,
                                    "end": 371,
                                    "decorators": [],
                                    "name": "thenableOrResult",
                                    "optional": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 346,
                                      "end": 371,
                                      "typeAnnotation": {
                                        "type": "TSUnionType",
                                        "start": 348,
                                        "end": 371,
                                        "types": [
                                          {
                                            "type": "TSTypeReference",
                                            "start": 348,
                                            "end": 349,
                                            "typeArguments": null,
                                            "typeName": {
                                              "type": "Identifier",
                                              "start": 348,
                                              "end": 349,
                                              "decorators": [],
                                              "name": "R",
                                              "optional": false,
                                              "typeAnnotation": null
                                            }
                                          },
                                          {
                                            "type": "TSTypeReference",
                                            "start": 352,
                                            "end": 371,
                                            "typeArguments": {
                                              "type": "TSTypeParameterInstantiation",
                                              "start": 368,
                                              "end": 371,
                                              "params": [
                                                {
                                                  "type": "TSTypeReference",
                                                  "start": 369,
                                                  "end": 370,
                                                  "typeArguments": null,
                                                  "typeName": {
                                                    "type": "Identifier",
                                                    "start": 369,
                                                    "end": 370,
                                                    "decorators": [],
                                                    "name": "R",
                                                    "optional": false,
                                                    "typeAnnotation": null
                                                  }
                                                }
                                              ]
                                            },
                                            "typeName": {
                                              "type": "TSQualifiedName",
                                              "start": 352,
                                              "end": 368,
                                              "left": {
                                                "type": "Identifier",
                                                "start": 352,
                                                "end": 359,
                                                "decorators": [],
                                                "name": "Promise",
                                                "optional": false,
                                                "typeAnnotation": null
                                              },
                                              "right": {
                                                "type": "Identifier",
                                                "start": 360,
                                                "end": 368,
                                                "decorators": [],
                                                "name": "Thenable",
                                                "optional": false,
                                                "typeAnnotation": null
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
                                  "start": 373,
                                  "end": 380,
                                  "typeAnnotation": {
                                    "type": "TSVoidKeyword",
                                    "start": 376,
                                    "end": 380
                                  }
                                },
                                "typeParameters": null
                              }
                            }
                          },
                          {
                            "type": "Identifier",
                            "start": 382,
                            "end": 410,
                            "decorators": [],
                            "name": "reject",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 388,
                              "end": 410,
                              "typeAnnotation": {
                                "type": "TSFunctionType",
                                "start": 390,
                                "end": 410,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "start": 391,
                                    "end": 401,
                                    "decorators": [],
                                    "name": "error",
                                    "optional": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 396,
                                      "end": 401,
                                      "typeAnnotation": {
                                        "type": "TSAnyKeyword",
                                        "start": 398,
                                        "end": 401
                                      }
                                    }
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "start": 403,
                                  "end": 410,
                                  "typeAnnotation": {
                                    "type": "TSVoidKeyword",
                                    "start": 406,
                                    "end": 410
                                  }
                                },
                                "typeParameters": null
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 412,
                          "end": 419,
                          "typeAnnotation": {
                            "type": "TSVoidKeyword",
                            "start": 415,
                            "end": 419
                          }
                        },
                        "typeParameters": null
                      }
                    }
                  }
                ],
                "returnType": null,
                "typeParameters": null
              }
            },
            {
              "type": "MethodDefinition",
              "start": 426,
              "end": 529,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 433,
                "end": 436,
                "decorators": [],
                "name": "try",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": true,
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "start": 436,
                "end": 529,
                "async": false,
                "body": null,
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 440,
                    "end": 459,
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 443,
                      "end": 459,
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "start": 445,
                        "end": 459,
                        "exprName": {
                          "type": "Identifier",
                          "start": 452,
                          "end": 459,
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 461,
                    "end": 490,
                    "decorators": [],
                    "name": "fn",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 463,
                      "end": 490,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 465,
                        "end": 490,
                        "params": [],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 468,
                          "end": 490,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 471,
                            "end": 490,
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 487,
                              "end": 490,
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "start": 488,
                                  "end": 489,
                                  "typeArguments": null,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 488,
                                    "end": 489,
                                    "decorators": [],
                                    "name": "R",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                }
                              ]
                            },
                            "typeName": {
                              "type": "TSQualifiedName",
                              "start": 471,
                              "end": 487,
                              "left": {
                                "type": "Identifier",
                                "start": 471,
                                "end": 478,
                                "decorators": [],
                                "name": "Promise",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 479,
                                "end": 487,
                                "decorators": [],
                                "name": "Thenable",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          }
                        },
                        "typeParameters": null
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 492,
                    "end": 504,
                    "decorators": [],
                    "name": "args",
                    "optional": true,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 497,
                      "end": 504,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 499,
                        "end": 504,
                        "elementType": {
                          "type": "TSAnyKeyword",
                          "start": 499,
                          "end": 502
                        }
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 506,
                    "end": 515,
                    "decorators": [],
                    "name": "ctx",
                    "optional": true,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 510,
                      "end": 515,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 512,
                        "end": 515
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 516,
                  "end": 528,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 518,
                    "end": 528,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 525,
                      "end": 528,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 526,
                          "end": 527,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 526,
                            "end": 527,
                            "decorators": [],
                            "name": "R",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 518,
                      "end": 525,
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 436,
                  "end": 439,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 437,
                      "end": 438,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 437,
                        "end": 438,
                        "decorators": [],
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "out": false
                    }
                  ]
                }
              }
            },
            {
              "type": "MethodDefinition",
              "start": 534,
              "end": 619,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 541,
                "end": 544,
                "decorators": [],
                "name": "try",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": true,
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "start": 544,
                "end": 619,
                "async": false,
                "body": null,
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 548,
                    "end": 567,
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 551,
                      "end": 567,
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "start": 553,
                        "end": 567,
                        "exprName": {
                          "type": "Identifier",
                          "start": 560,
                          "end": 567,
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 569,
                    "end": 580,
                    "decorators": [],
                    "name": "fn",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 571,
                      "end": 580,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 573,
                        "end": 580,
                        "params": [],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 576,
                          "end": 580,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 579,
                            "end": 580,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 579,
                              "end": 580,
                              "decorators": [],
                              "name": "R",
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
                    "start": 582,
                    "end": 594,
                    "decorators": [],
                    "name": "args",
                    "optional": true,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 587,
                      "end": 594,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 589,
                        "end": 594,
                        "elementType": {
                          "type": "TSAnyKeyword",
                          "start": 589,
                          "end": 592
                        }
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 596,
                    "end": 605,
                    "decorators": [],
                    "name": "ctx",
                    "optional": true,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 600,
                      "end": 605,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 602,
                        "end": 605
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 606,
                  "end": 618,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 608,
                    "end": 618,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 615,
                      "end": 618,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 616,
                          "end": 617,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 616,
                            "end": 617,
                            "decorators": [],
                            "name": "R",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 608,
                      "end": 615,
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 544,
                  "end": 547,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 545,
                      "end": 546,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 545,
                        "end": 546,
                        "decorators": [],
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "out": false
                    }
                  ]
                }
              }
            },
            {
              "type": "MethodDefinition",
              "start": 625,
              "end": 732,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 632,
                "end": 639,
                "decorators": [],
                "name": "attempt",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": true,
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "start": 639,
                "end": 732,
                "async": false,
                "body": null,
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 643,
                    "end": 662,
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 646,
                      "end": 662,
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "start": 648,
                        "end": 662,
                        "exprName": {
                          "type": "Identifier",
                          "start": 655,
                          "end": 662,
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 664,
                    "end": 693,
                    "decorators": [],
                    "name": "fn",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 666,
                      "end": 693,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 668,
                        "end": 693,
                        "params": [],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 671,
                          "end": 693,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 674,
                            "end": 693,
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 690,
                              "end": 693,
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "start": 691,
                                  "end": 692,
                                  "typeArguments": null,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 691,
                                    "end": 692,
                                    "decorators": [],
                                    "name": "R",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                }
                              ]
                            },
                            "typeName": {
                              "type": "TSQualifiedName",
                              "start": 674,
                              "end": 690,
                              "left": {
                                "type": "Identifier",
                                "start": 674,
                                "end": 681,
                                "decorators": [],
                                "name": "Promise",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 682,
                                "end": 690,
                                "decorators": [],
                                "name": "Thenable",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          }
                        },
                        "typeParameters": null
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 695,
                    "end": 707,
                    "decorators": [],
                    "name": "args",
                    "optional": true,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 700,
                      "end": 707,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 702,
                        "end": 707,
                        "elementType": {
                          "type": "TSAnyKeyword",
                          "start": 702,
                          "end": 705
                        }
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 709,
                    "end": 718,
                    "decorators": [],
                    "name": "ctx",
                    "optional": true,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 713,
                      "end": 718,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 715,
                        "end": 718
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 719,
                  "end": 731,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 721,
                    "end": 731,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 728,
                      "end": 731,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 729,
                          "end": 730,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 729,
                            "end": 730,
                            "decorators": [],
                            "name": "R",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 721,
                      "end": 728,
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 639,
                  "end": 642,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 640,
                      "end": 641,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 640,
                        "end": 641,
                        "decorators": [],
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "out": false
                    }
                  ]
                }
              }
            },
            {
              "type": "MethodDefinition",
              "start": 737,
              "end": 826,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 744,
                "end": 751,
                "decorators": [],
                "name": "attempt",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": true,
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "start": 751,
                "end": 826,
                "async": false,
                "body": null,
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 755,
                    "end": 774,
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 758,
                      "end": 774,
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "start": 760,
                        "end": 774,
                        "exprName": {
                          "type": "Identifier",
                          "start": 767,
                          "end": 774,
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 776,
                    "end": 787,
                    "decorators": [],
                    "name": "fn",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 778,
                      "end": 787,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 780,
                        "end": 787,
                        "params": [],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 783,
                          "end": 787,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 786,
                            "end": 787,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 786,
                              "end": 787,
                              "decorators": [],
                              "name": "R",
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
                    "start": 789,
                    "end": 801,
                    "decorators": [],
                    "name": "args",
                    "optional": true,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 794,
                      "end": 801,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 796,
                        "end": 801,
                        "elementType": {
                          "type": "TSAnyKeyword",
                          "start": 796,
                          "end": 799
                        }
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 803,
                    "end": 812,
                    "decorators": [],
                    "name": "ctx",
                    "optional": true,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 807,
                      "end": 812,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 809,
                        "end": 812
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 813,
                  "end": 825,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 815,
                    "end": 825,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 822,
                      "end": 825,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 823,
                          "end": 824,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 823,
                            "end": 824,
                            "decorators": [],
                            "name": "R",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 815,
                      "end": 822,
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 751,
                  "end": 754,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 752,
                      "end": 753,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 752,
                        "end": 753,
                        "decorators": [],
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "out": false
                    }
                  ]
                }
              }
            },
            {
              "type": "MethodDefinition",
              "start": 832,
              "end": 891,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 839,
                "end": 845,
                "decorators": [],
                "name": "method",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": true,
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "start": 845,
                "end": 891,
                "async": false,
                "body": null,
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 846,
                    "end": 865,
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 849,
                      "end": 865,
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "start": 851,
                        "end": 865,
                        "exprName": {
                          "type": "Identifier",
                          "start": 858,
                          "end": 865,
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 867,
                    "end": 879,
                    "decorators": [],
                    "name": "fn",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 869,
                      "end": 879,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 871,
                        "end": 879,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 871,
                          "end": 879,
                          "decorators": [],
                          "name": "Function",
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
                    "start": 882,
                    "end": 890,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 882,
                      "end": 890,
                      "decorators": [],
                      "name": "Function",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "typeParameters": null
              }
            },
            {
              "type": "MethodDefinition",
              "start": 897,
              "end": 948,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 904,
                "end": 911,
                "decorators": [],
                "name": "resolve",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": true,
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "start": 911,
                "end": 948,
                "async": false,
                "body": null,
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 912,
                    "end": 931,
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 915,
                      "end": 931,
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "start": 917,
                        "end": 931,
                        "exprName": {
                          "type": "Identifier",
                          "start": 924,
                          "end": 931,
                          "decorators": [],
                          "name": "Promise",
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
                  "start": 932,
                  "end": 947,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 934,
                    "end": 947,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 941,
                      "end": 947,
                      "params": [
                        {
                          "type": "TSVoidKeyword",
                          "start": 942,
                          "end": 946
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 934,
                      "end": 941,
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "typeParameters": null
              }
            },
            {
              "type": "MethodDefinition",
              "start": 953,
              "end": 1032,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 960,
                "end": 967,
                "decorators": [],
                "name": "resolve",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": true,
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "start": 967,
                "end": 1032,
                "async": false,
                "body": null,
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 971,
                    "end": 990,
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 974,
                      "end": 990,
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "start": 976,
                        "end": 990,
                        "exprName": {
                          "type": "Identifier",
                          "start": 983,
                          "end": 990,
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 992,
                    "end": 1018,
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 997,
                      "end": 1018,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 999,
                        "end": 1018,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 1015,
                          "end": 1018,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 1016,
                              "end": 1017,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1016,
                                "end": 1017,
                                "decorators": [],
                                "name": "R",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          ]
                        },
                        "typeName": {
                          "type": "TSQualifiedName",
                          "start": 999,
                          "end": 1015,
                          "left": {
                            "type": "Identifier",
                            "start": 999,
                            "end": 1006,
                            "decorators": [],
                            "name": "Promise",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 1007,
                            "end": 1015,
                            "decorators": [],
                            "name": "Thenable",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 1019,
                  "end": 1031,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1021,
                    "end": 1031,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 1028,
                      "end": 1031,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 1029,
                          "end": 1030,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1029,
                            "end": 1030,
                            "decorators": [],
                            "name": "R",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 1021,
                      "end": 1028,
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 967,
                  "end": 970,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 968,
                      "end": 969,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 968,
                        "end": 969,
                        "decorators": [],
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "out": false
                    }
                  ]
                }
              }
            },
            {
              "type": "MethodDefinition",
              "start": 1037,
              "end": 1098,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 1044,
                "end": 1051,
                "decorators": [],
                "name": "resolve",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": true,
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "start": 1051,
                "end": 1098,
                "async": false,
                "body": null,
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1055,
                    "end": 1074,
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1058,
                      "end": 1074,
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "start": 1060,
                        "end": 1074,
                        "exprName": {
                          "type": "Identifier",
                          "start": 1067,
                          "end": 1074,
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 1076,
                    "end": 1084,
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1081,
                      "end": 1084,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1083,
                        "end": 1084,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1083,
                          "end": 1084,
                          "decorators": [],
                          "name": "R",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 1085,
                  "end": 1097,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1087,
                    "end": 1097,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 1094,
                      "end": 1097,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 1095,
                          "end": 1096,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1095,
                            "end": 1096,
                            "decorators": [],
                            "name": "R",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 1087,
                      "end": 1094,
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 1051,
                  "end": 1054,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 1052,
                      "end": 1053,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 1052,
                        "end": 1053,
                        "decorators": [],
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "out": false
                    }
                  ]
                }
              }
            },
            {
              "type": "MethodDefinition",
              "start": 1104,
              "end": 1166,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 1111,
                "end": 1117,
                "decorators": [],
                "name": "reject",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": true,
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "start": 1117,
                "end": 1166,
                "async": false,
                "body": null,
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1118,
                    "end": 1137,
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1121,
                      "end": 1137,
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "start": 1123,
                        "end": 1137,
                        "exprName": {
                          "type": "Identifier",
                          "start": 1130,
                          "end": 1137,
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 1139,
                    "end": 1150,
                    "decorators": [],
                    "name": "reason",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1145,
                      "end": 1150,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 1147,
                        "end": 1150
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 1151,
                  "end": 1165,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1153,
                    "end": 1165,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 1160,
                      "end": 1165,
                      "params": [
                        {
                          "type": "TSAnyKeyword",
                          "start": 1161,
                          "end": 1164
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 1153,
                      "end": 1160,
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "typeParameters": null
              }
            },
            {
              "type": "MethodDefinition",
              "start": 1171,
              "end": 1234,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 1178,
                "end": 1184,
                "decorators": [],
                "name": "reject",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": true,
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "start": 1184,
                "end": 1234,
                "async": false,
                "body": null,
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1188,
                    "end": 1207,
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1191,
                      "end": 1207,
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "start": 1193,
                        "end": 1207,
                        "exprName": {
                          "type": "Identifier",
                          "start": 1200,
                          "end": 1207,
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 1209,
                    "end": 1220,
                    "decorators": [],
                    "name": "reason",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1215,
                      "end": 1220,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 1217,
                        "end": 1220
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 1221,
                  "end": 1233,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1223,
                    "end": 1233,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 1230,
                      "end": 1233,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 1231,
                          "end": 1232,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1231,
                            "end": 1232,
                            "decorators": [],
                            "name": "R",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 1223,
                      "end": 1230,
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 1184,
                  "end": 1187,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 1185,
                      "end": 1186,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 1185,
                        "end": 1186,
                        "decorators": [],
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "out": false
                    }
                  ]
                }
              }
            },
            {
              "type": "MethodDefinition",
              "start": 1240,
              "end": 1298,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 1247,
                "end": 1252,
                "decorators": [],
                "name": "defer",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": true,
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "start": 1252,
                "end": 1298,
                "async": false,
                "body": null,
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1256,
                    "end": 1275,
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1259,
                      "end": 1275,
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "start": 1261,
                        "end": 1275,
                        "exprName": {
                          "type": "Identifier",
                          "start": 1268,
                          "end": 1275,
                          "decorators": [],
                          "name": "Promise",
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
                  "start": 1276,
                  "end": 1297,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1278,
                    "end": 1297,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 1294,
                      "end": 1297,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 1295,
                          "end": 1296,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1295,
                            "end": 1296,
                            "decorators": [],
                            "name": "R",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "TSQualifiedName",
                      "start": 1278,
                      "end": 1294,
                      "left": {
                        "type": "Identifier",
                        "start": 1278,
                        "end": 1285,
                        "decorators": [],
                        "name": "Promise",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 1286,
                        "end": 1294,
                        "decorators": [],
                        "name": "Resolver",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 1252,
                  "end": 1255,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 1253,
                      "end": 1254,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 1253,
                        "end": 1254,
                        "decorators": [],
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "out": false
                    }
                  ]
                }
              }
            },
            {
              "type": "MethodDefinition",
              "start": 1304,
              "end": 1380,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 1311,
                "end": 1315,
                "decorators": [],
                "name": "cast",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": true,
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "start": 1315,
                "end": 1380,
                "async": false,
                "body": null,
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1319,
                    "end": 1338,
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1322,
                      "end": 1338,
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "start": 1324,
                        "end": 1338,
                        "exprName": {
                          "type": "Identifier",
                          "start": 1331,
                          "end": 1338,
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 1340,
                    "end": 1366,
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1345,
                      "end": 1366,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1347,
                        "end": 1366,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 1363,
                          "end": 1366,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 1364,
                              "end": 1365,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1364,
                                "end": 1365,
                                "decorators": [],
                                "name": "R",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          ]
                        },
                        "typeName": {
                          "type": "TSQualifiedName",
                          "start": 1347,
                          "end": 1363,
                          "left": {
                            "type": "Identifier",
                            "start": 1347,
                            "end": 1354,
                            "decorators": [],
                            "name": "Promise",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 1355,
                            "end": 1363,
                            "decorators": [],
                            "name": "Thenable",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 1367,
                  "end": 1379,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1369,
                    "end": 1379,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 1376,
                      "end": 1379,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 1377,
                          "end": 1378,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1377,
                            "end": 1378,
                            "decorators": [],
                            "name": "R",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 1369,
                      "end": 1376,
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 1315,
                  "end": 1318,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 1316,
                      "end": 1317,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 1316,
                        "end": 1317,
                        "decorators": [],
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "out": false
                    }
                  ]
                }
              }
            },
            {
              "type": "MethodDefinition",
              "start": 1385,
              "end": 1443,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 1392,
                "end": 1396,
                "decorators": [],
                "name": "cast",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": true,
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "start": 1396,
                "end": 1443,
                "async": false,
                "body": null,
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1400,
                    "end": 1419,
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1403,
                      "end": 1419,
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "start": 1405,
                        "end": 1419,
                        "exprName": {
                          "type": "Identifier",
                          "start": 1412,
                          "end": 1419,
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 1421,
                    "end": 1429,
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1426,
                      "end": 1429,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1428,
                        "end": 1429,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1428,
                          "end": 1429,
                          "decorators": [],
                          "name": "R",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 1430,
                  "end": 1442,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1432,
                    "end": 1442,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 1439,
                      "end": 1442,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 1440,
                          "end": 1441,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1440,
                            "end": 1441,
                            "decorators": [],
                            "name": "R",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 1432,
                      "end": 1439,
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 1396,
                  "end": 1399,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 1397,
                      "end": 1398,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 1397,
                        "end": 1398,
                        "decorators": [],
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "out": false
                    }
                  ]
                }
              }
            },
            {
              "type": "MethodDefinition",
              "start": 1449,
              "end": 1511,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 1456,
                "end": 1460,
                "decorators": [],
                "name": "bind",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": true,
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "start": 1460,
                "end": 1511,
                "async": false,
                "body": null,
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1461,
                    "end": 1480,
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1464,
                      "end": 1480,
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "start": 1466,
                        "end": 1480,
                        "exprName": {
                          "type": "Identifier",
                          "start": 1473,
                          "end": 1480,
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 1482,
                    "end": 1494,
                    "decorators": [],
                    "name": "thisArg",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1489,
                      "end": 1494,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 1491,
                        "end": 1494
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 1495,
                  "end": 1510,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1497,
                    "end": 1510,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 1504,
                      "end": 1510,
                      "params": [
                        {
                          "type": "TSVoidKeyword",
                          "start": 1505,
                          "end": 1509
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 1497,
                      "end": 1504,
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "typeParameters": null
              }
            },
            {
              "type": "MethodDefinition",
              "start": 1517,
              "end": 1569,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 1524,
                "end": 1526,
                "decorators": [],
                "name": "is",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": true,
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "start": 1526,
                "end": 1569,
                "async": false,
                "body": null,
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1527,
                    "end": 1546,
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1530,
                      "end": 1546,
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "start": 1532,
                        "end": 1546,
                        "exprName": {
                          "type": "Identifier",
                          "start": 1539,
                          "end": 1546,
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 1548,
                    "end": 1558,
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1553,
                      "end": 1558,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 1555,
                        "end": 1558
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 1559,
                  "end": 1568,
                  "typeAnnotation": {
                    "type": "TSBooleanKeyword",
                    "start": 1561,
                    "end": 1568
                  }
                },
                "typeParameters": null
              }
            },
            {
              "type": "MethodDefinition",
              "start": 1575,
              "end": 1625,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 1582,
                "end": 1597,
                "decorators": [],
                "name": "longStackTraces",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": true,
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "start": 1597,
                "end": 1625,
                "async": false,
                "body": null,
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1598,
                    "end": 1617,
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1601,
                      "end": 1617,
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "start": 1603,
                        "end": 1617,
                        "exprName": {
                          "type": "Identifier",
                          "start": 1610,
                          "end": 1617,
                          "decorators": [],
                          "name": "Promise",
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
                  "start": 1618,
                  "end": 1624,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 1620,
                    "end": 1624
                  }
                },
                "typeParameters": null
              }
            },
            {
              "type": "MethodDefinition",
              "start": 1631,
              "end": 1720,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 1638,
                "end": 1643,
                "decorators": [],
                "name": "delay",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": true,
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "start": 1643,
                "end": 1720,
                "async": false,
                "body": null,
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1647,
                    "end": 1666,
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1650,
                      "end": 1666,
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "start": 1652,
                        "end": 1666,
                        "exprName": {
                          "type": "Identifier",
                          "start": 1659,
                          "end": 1666,
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 1668,
                    "end": 1694,
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1673,
                      "end": 1694,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1675,
                        "end": 1694,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 1691,
                          "end": 1694,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 1692,
                              "end": 1693,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1692,
                                "end": 1693,
                                "decorators": [],
                                "name": "R",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          ]
                        },
                        "typeName": {
                          "type": "TSQualifiedName",
                          "start": 1675,
                          "end": 1691,
                          "left": {
                            "type": "Identifier",
                            "start": 1675,
                            "end": 1682,
                            "decorators": [],
                            "name": "Promise",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 1683,
                            "end": 1691,
                            "decorators": [],
                            "name": "Thenable",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 1696,
                    "end": 1706,
                    "decorators": [],
                    "name": "ms",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1698,
                      "end": 1706,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1700,
                        "end": 1706
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 1707,
                  "end": 1719,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1709,
                    "end": 1719,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 1716,
                      "end": 1719,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 1717,
                          "end": 1718,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1717,
                            "end": 1718,
                            "decorators": [],
                            "name": "R",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 1709,
                      "end": 1716,
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 1643,
                  "end": 1646,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 1644,
                      "end": 1645,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 1644,
                        "end": 1645,
                        "decorators": [],
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "out": false
                    }
                  ]
                }
              }
            },
            {
              "type": "MethodDefinition",
              "start": 1725,
              "end": 1796,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 1732,
                "end": 1737,
                "decorators": [],
                "name": "delay",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": true,
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "start": 1737,
                "end": 1796,
                "async": false,
                "body": null,
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1741,
                    "end": 1760,
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1744,
                      "end": 1760,
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "start": 1746,
                        "end": 1760,
                        "exprName": {
                          "type": "Identifier",
                          "start": 1753,
                          "end": 1760,
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 1762,
                    "end": 1770,
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1767,
                      "end": 1770,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1769,
                        "end": 1770,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1769,
                          "end": 1770,
                          "decorators": [],
                          "name": "R",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 1772,
                    "end": 1782,
                    "decorators": [],
                    "name": "ms",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1774,
                      "end": 1782,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1776,
                        "end": 1782
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 1783,
                  "end": 1795,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1785,
                    "end": 1795,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 1792,
                      "end": 1795,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 1793,
                          "end": 1794,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1793,
                            "end": 1794,
                            "decorators": [],
                            "name": "R",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 1785,
                      "end": 1792,
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 1737,
                  "end": 1740,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 1738,
                      "end": 1739,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 1738,
                        "end": 1739,
                        "decorators": [],
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "out": false
                    }
                  ]
                }
              }
            },
            {
              "type": "MethodDefinition",
              "start": 1801,
              "end": 1862,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 1808,
                "end": 1813,
                "decorators": [],
                "name": "delay",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": true,
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "start": 1813,
                "end": 1862,
                "async": false,
                "body": null,
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1814,
                    "end": 1833,
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1817,
                      "end": 1833,
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "start": 1819,
                        "end": 1833,
                        "exprName": {
                          "type": "Identifier",
                          "start": 1826,
                          "end": 1833,
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 1835,
                    "end": 1845,
                    "decorators": [],
                    "name": "ms",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1837,
                      "end": 1845,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1839,
                        "end": 1845
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 1846,
                  "end": 1861,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1848,
                    "end": 1861,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 1855,
                      "end": 1861,
                      "params": [
                        {
                          "type": "TSVoidKeyword",
                          "start": 1856,
                          "end": 1860
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 1848,
                      "end": 1855,
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "typeParameters": null
              }
            },
            {
              "type": "MethodDefinition",
              "start": 1868,
              "end": 1956,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 1875,
                "end": 1884,
                "decorators": [],
                "name": "promisify",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": true,
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "start": 1884,
                "end": 1956,
                "async": false,
                "body": null,
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1885,
                    "end": 1904,
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1888,
                      "end": 1904,
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "start": 1890,
                        "end": 1904,
                        "exprName": {
                          "type": "Identifier",
                          "start": 1897,
                          "end": 1904,
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 1906,
                    "end": 1928,
                    "decorators": [],
                    "name": "nodeFunction",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1918,
                      "end": 1928,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1920,
                        "end": 1928,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1920,
                          "end": 1928,
                          "decorators": [],
                          "name": "Function",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 1930,
                    "end": 1944,
                    "decorators": [],
                    "name": "receiver",
                    "optional": true,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1939,
                      "end": 1944,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 1941,
                        "end": 1944
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 1945,
                  "end": 1955,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1947,
                    "end": 1955,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1947,
                      "end": 1955,
                      "decorators": [],
                      "name": "Function",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "typeParameters": null
              }
            },
            {
              "type": "MethodDefinition",
              "start": 1962,
              "end": 2027,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 1969,
                "end": 1981,
                "decorators": [],
                "name": "promisifyAll",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": true,
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "start": 1981,
                "end": 2027,
                "async": false,
                "body": null,
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1982,
                    "end": 2001,
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1985,
                      "end": 2001,
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "start": 1987,
                        "end": 2001,
                        "exprName": {
                          "type": "Identifier",
                          "start": 1994,
                          "end": 2001,
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 2003,
                    "end": 2017,
                    "decorators": [],
                    "name": "target",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2009,
                      "end": 2017,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 2011,
                        "end": 2017,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2011,
                          "end": 2017,
                          "decorators": [],
                          "name": "Object",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 2018,
                  "end": 2026,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 2020,
                    "end": 2026,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2020,
                      "end": 2026,
                      "decorators": [],
                      "name": "Object",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "typeParameters": null
              }
            },
            {
              "type": "MethodDefinition",
              "start": 2033,
              "end": 2113,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 2040,
                "end": 2049,
                "decorators": [],
                "name": "coroutine",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": true,
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "start": 2049,
                "end": 2113,
                "async": false,
                "body": null,
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 2053,
                    "end": 2072,
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2056,
                      "end": 2072,
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "start": 2058,
                        "end": 2072,
                        "exprName": {
                          "type": "Identifier",
                          "start": 2065,
                          "end": 2072,
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 2074,
                    "end": 2101,
                    "decorators": [],
                    "name": "generatorFunction",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2091,
                      "end": 2101,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 2093,
                        "end": 2101,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2093,
                          "end": 2101,
                          "decorators": [],
                          "name": "Function",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 2102,
                  "end": 2112,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 2104,
                    "end": 2112,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2104,
                      "end": 2112,
                      "decorators": [],
                      "name": "Function",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 2049,
                  "end": 2052,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 2050,
                      "end": 2051,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 2050,
                        "end": 2051,
                        "decorators": [],
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "out": false
                    }
                  ]
                }
              }
            },
            {
              "type": "MethodDefinition",
              "start": 2119,
              "end": 2197,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 2126,
                "end": 2131,
                "decorators": [],
                "name": "spawn",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": true,
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "start": 2131,
                "end": 2197,
                "async": false,
                "body": null,
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 2135,
                    "end": 2154,
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2138,
                      "end": 2154,
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "start": 2140,
                        "end": 2154,
                        "exprName": {
                          "type": "Identifier",
                          "start": 2147,
                          "end": 2154,
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 2156,
                    "end": 2183,
                    "decorators": [],
                    "name": "generatorFunction",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2173,
                      "end": 2183,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 2175,
                        "end": 2183,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2175,
                          "end": 2183,
                          "decorators": [],
                          "name": "Function",
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
                  "end": 2196,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 2186,
                    "end": 2196,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 2193,
                      "end": 2196,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 2194,
                          "end": 2195,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 2194,
                            "end": 2195,
                            "decorators": [],
                            "name": "R",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 2186,
                      "end": 2193,
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 2131,
                  "end": 2134,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 2132,
                      "end": 2133,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 2132,
                        "end": 2133,
                        "decorators": [],
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "out": false
                    }
                  ]
                }
              }
            },
            {
              "type": "MethodDefinition",
              "start": 2203,
              "end": 2258,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 2210,
                "end": 2220,
                "decorators": [],
                "name": "noConflict",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": true,
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "start": 2220,
                "end": 2258,
                "async": false,
                "body": null,
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 2221,
                    "end": 2240,
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2224,
                      "end": 2240,
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "start": 2226,
                        "end": 2240,
                        "exprName": {
                          "type": "Identifier",
                          "start": 2233,
                          "end": 2240,
                          "decorators": [],
                          "name": "Promise",
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
                  "start": 2241,
                  "end": 2257,
                  "typeAnnotation": {
                    "type": "TSTypeQuery",
                    "start": 2243,
                    "end": 2257,
                    "exprName": {
                      "type": "Identifier",
                      "start": 2250,
                      "end": 2257,
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                },
                "typeParameters": null
              }
            },
            {
              "type": "MethodDefinition",
              "start": 2264,
              "end": 2358,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 2271,
                "end": 2299,
                "decorators": [],
                "name": "onPossiblyUnhandledRejection",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": true,
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "start": 2299,
                "end": 2358,
                "async": false,
                "body": null,
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 2300,
                    "end": 2319,
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2303,
                      "end": 2319,
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "start": 2305,
                        "end": 2319,
                        "exprName": {
                          "type": "Identifier",
                          "start": 2312,
                          "end": 2319,
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 2321,
                    "end": 2350,
                    "decorators": [],
                    "name": "handler",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2328,
                      "end": 2350,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 2330,
                        "end": 2350,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 2331,
                            "end": 2342,
                            "decorators": [],
                            "name": "reason",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 2337,
                              "end": 2342,
                              "typeAnnotation": {
                                "type": "TSAnyKeyword",
                                "start": 2339,
                                "end": 2342
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 2344,
                          "end": 2350,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 2347,
                            "end": 2350
                          }
                        },
                        "typeParameters": null
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 2351,
                  "end": 2357,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 2353,
                    "end": 2357
                  }
                },
                "typeParameters": null
              }
            },
            {
              "type": "MethodDefinition",
              "start": 2364,
              "end": 2462,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 2371,
                "end": 2374,
                "decorators": [],
                "name": "all",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": true,
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "start": 2374,
                "end": 2462,
                "async": false,
                "body": null,
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 2378,
                    "end": 2397,
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2381,
                      "end": 2397,
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "start": 2383,
                        "end": 2397,
                        "exprName": {
                          "type": "Identifier",
                          "start": 2390,
                          "end": 2397,
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 2399,
                    "end": 2446,
                    "decorators": [],
                    "name": "values",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2405,
                      "end": 2446,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 2407,
                        "end": 2446,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 2423,
                          "end": 2446,
                          "params": [
                            {
                              "type": "TSArrayType",
                              "start": 2424,
                              "end": 2445,
                              "elementType": {
                                "type": "TSTypeReference",
                                "start": 2424,
                                "end": 2443,
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "start": 2440,
                                  "end": 2443,
                                  "params": [
                                    {
                                      "type": "TSTypeReference",
                                      "start": 2441,
                                      "end": 2442,
                                      "typeArguments": null,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 2441,
                                        "end": 2442,
                                        "decorators": [],
                                        "name": "R",
                                        "optional": false,
                                        "typeAnnotation": null
                                      }
                                    }
                                  ]
                                },
                                "typeName": {
                                  "type": "TSQualifiedName",
                                  "start": 2424,
                                  "end": 2440,
                                  "left": {
                                    "type": "Identifier",
                                    "start": 2424,
                                    "end": 2431,
                                    "decorators": [],
                                    "name": "Promise",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "start": 2432,
                                    "end": 2440,
                                    "decorators": [],
                                    "name": "Thenable",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                }
                              }
                            }
                          ]
                        },
                        "typeName": {
                          "type": "TSQualifiedName",
                          "start": 2407,
                          "end": 2423,
                          "left": {
                            "type": "Identifier",
                            "start": 2407,
                            "end": 2414,
                            "decorators": [],
                            "name": "Promise",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 2415,
                            "end": 2423,
                            "decorators": [],
                            "name": "Thenable",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 2447,
                  "end": 2461,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 2449,
                    "end": 2461,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 2456,
                      "end": 2461,
                      "params": [
                        {
                          "type": "TSArrayType",
                          "start": 2457,
                          "end": 2460,
                          "elementType": {
                            "type": "TSTypeReference",
                            "start": 2457,
                            "end": 2458,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2457,
                              "end": 2458,
                              "decorators": [],
                              "name": "R",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 2449,
                      "end": 2456,
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 2374,
                  "end": 2377,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 2375,
                      "end": 2376,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 2375,
                        "end": 2376,
                        "decorators": [],
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "out": false
                    }
                  ]
                }
              }
            },
            {
              "type": "MethodDefinition",
              "start": 2467,
              "end": 2547,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 2474,
                "end": 2477,
                "decorators": [],
                "name": "all",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": true,
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "start": 2477,
                "end": 2547,
                "async": false,
                "body": null,
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 2481,
                    "end": 2500,
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2484,
                      "end": 2500,
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "start": 2486,
                        "end": 2500,
                        "exprName": {
                          "type": "Identifier",
                          "start": 2493,
                          "end": 2500,
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 2502,
                    "end": 2531,
                    "decorators": [],
                    "name": "values",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2508,
                      "end": 2531,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 2510,
                        "end": 2531,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 2526,
                          "end": 2531,
                          "params": [
                            {
                              "type": "TSArrayType",
                              "start": 2527,
                              "end": 2530,
                              "elementType": {
                                "type": "TSTypeReference",
                                "start": 2527,
                                "end": 2528,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 2527,
                                  "end": 2528,
                                  "decorators": [],
                                  "name": "R",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            }
                          ]
                        },
                        "typeName": {
                          "type": "TSQualifiedName",
                          "start": 2510,
                          "end": 2526,
                          "left": {
                            "type": "Identifier",
                            "start": 2510,
                            "end": 2517,
                            "decorators": [],
                            "name": "Promise",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 2518,
                            "end": 2526,
                            "decorators": [],
                            "name": "Thenable",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 2532,
                  "end": 2546,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 2534,
                    "end": 2546,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 2541,
                      "end": 2546,
                      "params": [
                        {
                          "type": "TSArrayType",
                          "start": 2542,
                          "end": 2545,
                          "elementType": {
                            "type": "TSTypeReference",
                            "start": 2542,
                            "end": 2543,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2542,
                              "end": 2543,
                              "decorators": [],
                              "name": "R",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 2534,
                      "end": 2541,
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 2477,
                  "end": 2480,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 2478,
                      "end": 2479,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 2478,
                        "end": 2479,
                        "decorators": [],
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "out": false
                    }
                  ]
                }
              }
            },
            {
              "type": "MethodDefinition",
              "start": 2552,
              "end": 2632,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 2559,
                "end": 2562,
                "decorators": [],
                "name": "all",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": true,
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "start": 2562,
                "end": 2632,
                "async": false,
                "body": null,
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 2566,
                    "end": 2585,
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2569,
                      "end": 2585,
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "start": 2571,
                        "end": 2585,
                        "exprName": {
                          "type": "Identifier",
                          "start": 2578,
                          "end": 2585,
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 2587,
                    "end": 2616,
                    "decorators": [],
                    "name": "values",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2593,
                      "end": 2616,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 2595,
                        "end": 2616,
                        "elementType": {
                          "type": "TSTypeReference",
                          "start": 2595,
                          "end": 2614,
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 2611,
                            "end": 2614,
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "start": 2612,
                                "end": 2613,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 2612,
                                  "end": 2613,
                                  "decorators": [],
                                  "name": "R",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            ]
                          },
                          "typeName": {
                            "type": "TSQualifiedName",
                            "start": 2595,
                            "end": 2611,
                            "left": {
                              "type": "Identifier",
                              "start": 2595,
                              "end": 2602,
                              "decorators": [],
                              "name": "Promise",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 2603,
                              "end": 2611,
                              "decorators": [],
                              "name": "Thenable",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 2617,
                  "end": 2631,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 2619,
                    "end": 2631,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 2626,
                      "end": 2631,
                      "params": [
                        {
                          "type": "TSArrayType",
                          "start": 2627,
                          "end": 2630,
                          "elementType": {
                            "type": "TSTypeReference",
                            "start": 2627,
                            "end": 2628,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2627,
                              "end": 2628,
                              "decorators": [],
                              "name": "R",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 2619,
                      "end": 2626,
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 2562,
                  "end": 2565,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 2563,
                      "end": 2564,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 2563,
                        "end": 2564,
                        "decorators": [],
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "out": false
                    }
                  ]
                }
              }
            },
            {
              "type": "MethodDefinition",
              "start": 2637,
              "end": 2699,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 2644,
                "end": 2647,
                "decorators": [],
                "name": "all",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": true,
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "start": 2647,
                "end": 2699,
                "async": false,
                "body": null,
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 2651,
                    "end": 2670,
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2654,
                      "end": 2670,
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "start": 2656,
                        "end": 2670,
                        "exprName": {
                          "type": "Identifier",
                          "start": 2663,
                          "end": 2670,
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 2672,
                    "end": 2683,
                    "decorators": [],
                    "name": "values",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2678,
                      "end": 2683,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 2680,
                        "end": 2683,
                        "elementType": {
                          "type": "TSTypeReference",
                          "start": 2680,
                          "end": 2681,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 2680,
                            "end": 2681,
                            "decorators": [],
                            "name": "R",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 2684,
                  "end": 2698,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 2686,
                    "end": 2698,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 2693,
                      "end": 2698,
                      "params": [
                        {
                          "type": "TSArrayType",
                          "start": 2694,
                          "end": 2697,
                          "elementType": {
                            "type": "TSTypeReference",
                            "start": 2694,
                            "end": 2695,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2694,
                              "end": 2695,
                              "decorators": [],
                              "name": "R",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 2686,
                      "end": 2693,
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 2647,
                  "end": 2650,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 2648,
                      "end": 2649,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 2648,
                        "end": 2649,
                        "decorators": [],
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "out": false
                    }
                  ]
                }
              }
            },
            {
              "type": "MethodDefinition",
              "start": 2705,
              "end": 2781,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 2712,
                "end": 2717,
                "decorators": [],
                "name": "props",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": true,
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "start": 2717,
                "end": 2781,
                "async": false,
                "body": null,
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 2718,
                    "end": 2737,
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2721,
                      "end": 2737,
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "start": 2723,
                        "end": 2737,
                        "exprName": {
                          "type": "Identifier",
                          "start": 2730,
                          "end": 2737,
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 2739,
                    "end": 2762,
                    "decorators": [],
                    "name": "object",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2745,
                      "end": 2762,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 2747,
                        "end": 2762,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 2754,
                          "end": 2762,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 2755,
                              "end": 2761,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 2755,
                                "end": 2761,
                                "decorators": [],
                                "name": "Object",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          ]
                        },
                        "typeName": {
                          "type": "Identifier",
                          "start": 2747,
                          "end": 2754,
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 2763,
                  "end": 2780,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 2765,
                    "end": 2780,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 2772,
                      "end": 2780,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 2773,
                          "end": 2779,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 2773,
                            "end": 2779,
                            "decorators": [],
                            "name": "Object",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 2765,
                      "end": 2772,
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "typeParameters": null
              }
            },
            {
              "type": "MethodDefinition",
              "start": 2786,
              "end": 2853,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 2793,
                "end": 2798,
                "decorators": [],
                "name": "props",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": true,
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "start": 2798,
                "end": 2853,
                "async": false,
                "body": null,
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 2799,
                    "end": 2818,
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2802,
                      "end": 2818,
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "start": 2804,
                        "end": 2818,
                        "exprName": {
                          "type": "Identifier",
                          "start": 2811,
                          "end": 2818,
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 2820,
                    "end": 2834,
                    "decorators": [],
                    "name": "object",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2826,
                      "end": 2834,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 2828,
                        "end": 2834,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2828,
                          "end": 2834,
                          "decorators": [],
                          "name": "Object",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 2835,
                  "end": 2852,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 2837,
                    "end": 2852,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 2844,
                      "end": 2852,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 2845,
                          "end": 2851,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 2845,
                            "end": 2851,
                            "decorators": [],
                            "name": "Object",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 2837,
                      "end": 2844,
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "typeParameters": null
              }
            },
            {
              "type": "MethodDefinition",
              "start": 2859,
              "end": 2980,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 2866,
                "end": 2872,
                "decorators": [],
                "name": "settle",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": true,
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "start": 2872,
                "end": 2980,
                "async": false,
                "body": null,
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 2876,
                    "end": 2895,
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2879,
                      "end": 2895,
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "start": 2881,
                        "end": 2895,
                        "exprName": {
                          "type": "Identifier",
                          "start": 2888,
                          "end": 2895,
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 2897,
                    "end": 2944,
                    "decorators": [],
                    "name": "values",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2903,
                      "end": 2944,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 2905,
                        "end": 2944,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 2921,
                          "end": 2944,
                          "params": [
                            {
                              "type": "TSArrayType",
                              "start": 2922,
                              "end": 2943,
                              "elementType": {
                                "type": "TSTypeReference",
                                "start": 2922,
                                "end": 2941,
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "start": 2938,
                                  "end": 2941,
                                  "params": [
                                    {
                                      "type": "TSTypeReference",
                                      "start": 2939,
                                      "end": 2940,
                                      "typeArguments": null,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 2939,
                                        "end": 2940,
                                        "decorators": [],
                                        "name": "R",
                                        "optional": false,
                                        "typeAnnotation": null
                                      }
                                    }
                                  ]
                                },
                                "typeName": {
                                  "type": "TSQualifiedName",
                                  "start": 2922,
                                  "end": 2938,
                                  "left": {
                                    "type": "Identifier",
                                    "start": 2922,
                                    "end": 2929,
                                    "decorators": [],
                                    "name": "Promise",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "start": 2930,
                                    "end": 2938,
                                    "decorators": [],
                                    "name": "Thenable",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                }
                              }
                            }
                          ]
                        },
                        "typeName": {
                          "type": "TSQualifiedName",
                          "start": 2905,
                          "end": 2921,
                          "left": {
                            "type": "Identifier",
                            "start": 2905,
                            "end": 2912,
                            "decorators": [],
                            "name": "Promise",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 2913,
                            "end": 2921,
                            "decorators": [],
                            "name": "Thenable",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 2945,
                  "end": 2979,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 2947,
                    "end": 2979,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 2954,
                      "end": 2979,
                      "params": [
                        {
                          "type": "TSArrayType",
                          "start": 2955,
                          "end": 2978,
                          "elementType": {
                            "type": "TSTypeReference",
                            "start": 2955,
                            "end": 2976,
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 2973,
                              "end": 2976,
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "start": 2974,
                                  "end": 2975,
                                  "typeArguments": null,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 2974,
                                    "end": 2975,
                                    "decorators": [],
                                    "name": "R",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                }
                              ]
                            },
                            "typeName": {
                              "type": "TSQualifiedName",
                              "start": 2955,
                              "end": 2973,
                              "left": {
                                "type": "Identifier",
                                "start": 2955,
                                "end": 2962,
                                "decorators": [],
                                "name": "Promise",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 2963,
                                "end": 2973,
                                "decorators": [],
                                "name": "Inspection",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 2947,
                      "end": 2954,
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 2872,
                  "end": 2875,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 2873,
                      "end": 2874,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 2873,
                        "end": 2874,
                        "decorators": [],
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "out": false
                    }
                  ]
                }
              }
            },
            {
              "type": "MethodDefinition",
              "start": 2985,
              "end": 3088,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 2992,
                "end": 2998,
                "decorators": [],
                "name": "settle",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": true,
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "start": 2998,
                "end": 3088,
                "async": false,
                "body": null,
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 3002,
                    "end": 3021,
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 3005,
                      "end": 3021,
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "start": 3007,
                        "end": 3021,
                        "exprName": {
                          "type": "Identifier",
                          "start": 3014,
                          "end": 3021,
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 3023,
                    "end": 3052,
                    "decorators": [],
                    "name": "values",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 3029,
                      "end": 3052,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 3031,
                        "end": 3052,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 3047,
                          "end": 3052,
                          "params": [
                            {
                              "type": "TSArrayType",
                              "start": 3048,
                              "end": 3051,
                              "elementType": {
                                "type": "TSTypeReference",
                                "start": 3048,
                                "end": 3049,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 3048,
                                  "end": 3049,
                                  "decorators": [],
                                  "name": "R",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            }
                          ]
                        },
                        "typeName": {
                          "type": "TSQualifiedName",
                          "start": 3031,
                          "end": 3047,
                          "left": {
                            "type": "Identifier",
                            "start": 3031,
                            "end": 3038,
                            "decorators": [],
                            "name": "Promise",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 3039,
                            "end": 3047,
                            "decorators": [],
                            "name": "Thenable",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 3053,
                  "end": 3087,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 3055,
                    "end": 3087,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 3062,
                      "end": 3087,
                      "params": [
                        {
                          "type": "TSArrayType",
                          "start": 3063,
                          "end": 3086,
                          "elementType": {
                            "type": "TSTypeReference",
                            "start": 3063,
                            "end": 3084,
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 3081,
                              "end": 3084,
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "start": 3082,
                                  "end": 3083,
                                  "typeArguments": null,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 3082,
                                    "end": 3083,
                                    "decorators": [],
                                    "name": "R",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                }
                              ]
                            },
                            "typeName": {
                              "type": "TSQualifiedName",
                              "start": 3063,
                              "end": 3081,
                              "left": {
                                "type": "Identifier",
                                "start": 3063,
                                "end": 3070,
                                "decorators": [],
                                "name": "Promise",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 3071,
                                "end": 3081,
                                "decorators": [],
                                "name": "Inspection",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 3055,
                      "end": 3062,
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 2998,
                  "end": 3001,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 2999,
                      "end": 3000,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 2999,
                        "end": 3000,
                        "decorators": [],
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "out": false
                    }
                  ]
                }
              }
            },
            {
              "type": "MethodDefinition",
              "start": 3093,
              "end": 3196,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 3100,
                "end": 3106,
                "decorators": [],
                "name": "settle",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": true,
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "start": 3106,
                "end": 3196,
                "async": false,
                "body": null,
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 3110,
                    "end": 3129,
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 3113,
                      "end": 3129,
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "start": 3115,
                        "end": 3129,
                        "exprName": {
                          "type": "Identifier",
                          "start": 3122,
                          "end": 3129,
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 3131,
                    "end": 3160,
                    "decorators": [],
                    "name": "values",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 3137,
                      "end": 3160,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 3139,
                        "end": 3160,
                        "elementType": {
                          "type": "TSTypeReference",
                          "start": 3139,
                          "end": 3158,
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 3155,
                            "end": 3158,
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "start": 3156,
                                "end": 3157,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 3156,
                                  "end": 3157,
                                  "decorators": [],
                                  "name": "R",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            ]
                          },
                          "typeName": {
                            "type": "TSQualifiedName",
                            "start": 3139,
                            "end": 3155,
                            "left": {
                              "type": "Identifier",
                              "start": 3139,
                              "end": 3146,
                              "decorators": [],
                              "name": "Promise",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 3147,
                              "end": 3155,
                              "decorators": [],
                              "name": "Thenable",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 3161,
                  "end": 3195,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 3163,
                    "end": 3195,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 3170,
                      "end": 3195,
                      "params": [
                        {
                          "type": "TSArrayType",
                          "start": 3171,
                          "end": 3194,
                          "elementType": {
                            "type": "TSTypeReference",
                            "start": 3171,
                            "end": 3192,
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 3189,
                              "end": 3192,
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "start": 3190,
                                  "end": 3191,
                                  "typeArguments": null,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 3190,
                                    "end": 3191,
                                    "decorators": [],
                                    "name": "R",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                }
                              ]
                            },
                            "typeName": {
                              "type": "TSQualifiedName",
                              "start": 3171,
                              "end": 3189,
                              "left": {
                                "type": "Identifier",
                                "start": 3171,
                                "end": 3178,
                                "decorators": [],
                                "name": "Promise",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 3179,
                                "end": 3189,
                                "decorators": [],
                                "name": "Inspection",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 3163,
                      "end": 3170,
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 3106,
                  "end": 3109,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 3107,
                      "end": 3108,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 3107,
                        "end": 3108,
                        "decorators": [],
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "out": false
                    }
                  ]
                }
              }
            },
            {
              "type": "MethodDefinition",
              "start": 3201,
              "end": 3286,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 3208,
                "end": 3214,
                "decorators": [],
                "name": "settle",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": true,
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "start": 3214,
                "end": 3286,
                "async": false,
                "body": null,
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 3218,
                    "end": 3237,
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 3221,
                      "end": 3237,
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "start": 3223,
                        "end": 3237,
                        "exprName": {
                          "type": "Identifier",
                          "start": 3230,
                          "end": 3237,
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 3239,
                    "end": 3250,
                    "decorators": [],
                    "name": "values",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 3245,
                      "end": 3250,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 3247,
                        "end": 3250,
                        "elementType": {
                          "type": "TSTypeReference",
                          "start": 3247,
                          "end": 3248,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 3247,
                            "end": 3248,
                            "decorators": [],
                            "name": "R",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 3251,
                  "end": 3285,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 3253,
                    "end": 3285,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 3260,
                      "end": 3285,
                      "params": [
                        {
                          "type": "TSArrayType",
                          "start": 3261,
                          "end": 3284,
                          "elementType": {
                            "type": "TSTypeReference",
                            "start": 3261,
                            "end": 3282,
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 3279,
                              "end": 3282,
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "start": 3280,
                                  "end": 3281,
                                  "typeArguments": null,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 3280,
                                    "end": 3281,
                                    "decorators": [],
                                    "name": "R",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                }
                              ]
                            },
                            "typeName": {
                              "type": "TSQualifiedName",
                              "start": 3261,
                              "end": 3279,
                              "left": {
                                "type": "Identifier",
                                "start": 3261,
                                "end": 3268,
                                "decorators": [],
                                "name": "Promise",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 3269,
                                "end": 3279,
                                "decorators": [],
                                "name": "Inspection",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 3253,
                      "end": 3260,
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 3214,
                  "end": 3217,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 3215,
                      "end": 3216,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 3215,
                        "end": 3216,
                        "decorators": [],
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "out": false
                    }
                  ]
                }
              }
            },
            {
              "type": "MethodDefinition",
              "start": 3292,
              "end": 3388,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 3299,
                "end": 3302,
                "decorators": [],
                "name": "any",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": true,
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "start": 3302,
                "end": 3388,
                "async": false,
                "body": null,
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 3306,
                    "end": 3325,
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 3309,
                      "end": 3325,
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "start": 3311,
                        "end": 3325,
                        "exprName": {
                          "type": "Identifier",
                          "start": 3318,
                          "end": 3325,
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 3327,
                    "end": 3374,
                    "decorators": [],
                    "name": "values",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 3333,
                      "end": 3374,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 3335,
                        "end": 3374,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 3351,
                          "end": 3374,
                          "params": [
                            {
                              "type": "TSArrayType",
                              "start": 3352,
                              "end": 3373,
                              "elementType": {
                                "type": "TSTypeReference",
                                "start": 3352,
                                "end": 3371,
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "start": 3368,
                                  "end": 3371,
                                  "params": [
                                    {
                                      "type": "TSTypeReference",
                                      "start": 3369,
                                      "end": 3370,
                                      "typeArguments": null,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 3369,
                                        "end": 3370,
                                        "decorators": [],
                                        "name": "R",
                                        "optional": false,
                                        "typeAnnotation": null
                                      }
                                    }
                                  ]
                                },
                                "typeName": {
                                  "type": "TSQualifiedName",
                                  "start": 3352,
                                  "end": 3368,
                                  "left": {
                                    "type": "Identifier",
                                    "start": 3352,
                                    "end": 3359,
                                    "decorators": [],
                                    "name": "Promise",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "start": 3360,
                                    "end": 3368,
                                    "decorators": [],
                                    "name": "Thenable",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                }
                              }
                            }
                          ]
                        },
                        "typeName": {
                          "type": "TSQualifiedName",
                          "start": 3335,
                          "end": 3351,
                          "left": {
                            "type": "Identifier",
                            "start": 3335,
                            "end": 3342,
                            "decorators": [],
                            "name": "Promise",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 3343,
                            "end": 3351,
                            "decorators": [],
                            "name": "Thenable",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 3375,
                  "end": 3387,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 3377,
                    "end": 3387,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 3384,
                      "end": 3387,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 3385,
                          "end": 3386,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 3385,
                            "end": 3386,
                            "decorators": [],
                            "name": "R",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 3377,
                      "end": 3384,
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 3302,
                  "end": 3305,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 3303,
                      "end": 3304,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 3303,
                        "end": 3304,
                        "decorators": [],
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "out": false
                    }
                  ]
                }
              }
            },
            {
              "type": "MethodDefinition",
              "start": 3393,
              "end": 3471,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 3400,
                "end": 3403,
                "decorators": [],
                "name": "any",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": true,
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "start": 3403,
                "end": 3471,
                "async": false,
                "body": null,
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 3407,
                    "end": 3426,
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 3410,
                      "end": 3426,
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "start": 3412,
                        "end": 3426,
                        "exprName": {
                          "type": "Identifier",
                          "start": 3419,
                          "end": 3426,
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 3428,
                    "end": 3457,
                    "decorators": [],
                    "name": "values",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 3434,
                      "end": 3457,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 3436,
                        "end": 3457,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 3452,
                          "end": 3457,
                          "params": [
                            {
                              "type": "TSArrayType",
                              "start": 3453,
                              "end": 3456,
                              "elementType": {
                                "type": "TSTypeReference",
                                "start": 3453,
                                "end": 3454,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 3453,
                                  "end": 3454,
                                  "decorators": [],
                                  "name": "R",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            }
                          ]
                        },
                        "typeName": {
                          "type": "TSQualifiedName",
                          "start": 3436,
                          "end": 3452,
                          "left": {
                            "type": "Identifier",
                            "start": 3436,
                            "end": 3443,
                            "decorators": [],
                            "name": "Promise",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 3444,
                            "end": 3452,
                            "decorators": [],
                            "name": "Thenable",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 3458,
                  "end": 3470,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 3460,
                    "end": 3470,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 3467,
                      "end": 3470,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 3468,
                          "end": 3469,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 3468,
                            "end": 3469,
                            "decorators": [],
                            "name": "R",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 3460,
                      "end": 3467,
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 3403,
                  "end": 3406,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 3404,
                      "end": 3405,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 3404,
                        "end": 3405,
                        "decorators": [],
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "out": false
                    }
                  ]
                }
              }
            },
            {
              "type": "MethodDefinition",
              "start": 3476,
              "end": 3554,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 3483,
                "end": 3486,
                "decorators": [],
                "name": "any",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": true,
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "start": 3486,
                "end": 3554,
                "async": false,
                "body": null,
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 3490,
                    "end": 3509,
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 3493,
                      "end": 3509,
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "start": 3495,
                        "end": 3509,
                        "exprName": {
                          "type": "Identifier",
                          "start": 3502,
                          "end": 3509,
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 3511,
                    "end": 3540,
                    "decorators": [],
                    "name": "values",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 3517,
                      "end": 3540,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 3519,
                        "end": 3540,
                        "elementType": {
                          "type": "TSTypeReference",
                          "start": 3519,
                          "end": 3538,
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 3535,
                            "end": 3538,
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "start": 3536,
                                "end": 3537,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 3536,
                                  "end": 3537,
                                  "decorators": [],
                                  "name": "R",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            ]
                          },
                          "typeName": {
                            "type": "TSQualifiedName",
                            "start": 3519,
                            "end": 3535,
                            "left": {
                              "type": "Identifier",
                              "start": 3519,
                              "end": 3526,
                              "decorators": [],
                              "name": "Promise",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 3527,
                              "end": 3535,
                              "decorators": [],
                              "name": "Thenable",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 3541,
                  "end": 3553,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 3543,
                    "end": 3553,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 3550,
                      "end": 3553,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 3551,
                          "end": 3552,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 3551,
                            "end": 3552,
                            "decorators": [],
                            "name": "R",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 3543,
                      "end": 3550,
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 3486,
                  "end": 3489,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 3487,
                      "end": 3488,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 3487,
                        "end": 3488,
                        "decorators": [],
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "out": false
                    }
                  ]
                }
              }
            },
            {
              "type": "MethodDefinition",
              "start": 3559,
              "end": 3619,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 3566,
                "end": 3569,
                "decorators": [],
                "name": "any",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": true,
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "start": 3569,
                "end": 3619,
                "async": false,
                "body": null,
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 3573,
                    "end": 3592,
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 3576,
                      "end": 3592,
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "start": 3578,
                        "end": 3592,
                        "exprName": {
                          "type": "Identifier",
                          "start": 3585,
                          "end": 3592,
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 3594,
                    "end": 3605,
                    "decorators": [],
                    "name": "values",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 3600,
                      "end": 3605,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 3602,
                        "end": 3605,
                        "elementType": {
                          "type": "TSTypeReference",
                          "start": 3602,
                          "end": 3603,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 3602,
                            "end": 3603,
                            "decorators": [],
                            "name": "R",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 3606,
                  "end": 3618,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 3608,
                    "end": 3618,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 3615,
                      "end": 3618,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 3616,
                          "end": 3617,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 3616,
                            "end": 3617,
                            "decorators": [],
                            "name": "R",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 3608,
                      "end": 3615,
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 3569,
                  "end": 3572,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 3570,
                      "end": 3571,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 3570,
                        "end": 3571,
                        "decorators": [],
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "out": false
                    }
                  ]
                }
              }
            },
            {
              "type": "MethodDefinition",
              "start": 3625,
              "end": 3722,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 3632,
                "end": 3636,
                "decorators": [],
                "name": "race",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": true,
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "start": 3636,
                "end": 3722,
                "async": false,
                "body": null,
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 3640,
                    "end": 3659,
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 3643,
                      "end": 3659,
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "start": 3645,
                        "end": 3659,
                        "exprName": {
                          "type": "Identifier",
                          "start": 3652,
                          "end": 3659,
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 3661,
                    "end": 3708,
                    "decorators": [],
                    "name": "values",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 3667,
                      "end": 3708,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 3669,
                        "end": 3708,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 3685,
                          "end": 3708,
                          "params": [
                            {
                              "type": "TSArrayType",
                              "start": 3686,
                              "end": 3707,
                              "elementType": {
                                "type": "TSTypeReference",
                                "start": 3686,
                                "end": 3705,
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "start": 3702,
                                  "end": 3705,
                                  "params": [
                                    {
                                      "type": "TSTypeReference",
                                      "start": 3703,
                                      "end": 3704,
                                      "typeArguments": null,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 3703,
                                        "end": 3704,
                                        "decorators": [],
                                        "name": "R",
                                        "optional": false,
                                        "typeAnnotation": null
                                      }
                                    }
                                  ]
                                },
                                "typeName": {
                                  "type": "TSQualifiedName",
                                  "start": 3686,
                                  "end": 3702,
                                  "left": {
                                    "type": "Identifier",
                                    "start": 3686,
                                    "end": 3693,
                                    "decorators": [],
                                    "name": "Promise",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "start": 3694,
                                    "end": 3702,
                                    "decorators": [],
                                    "name": "Thenable",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                }
                              }
                            }
                          ]
                        },
                        "typeName": {
                          "type": "TSQualifiedName",
                          "start": 3669,
                          "end": 3685,
                          "left": {
                            "type": "Identifier",
                            "start": 3669,
                            "end": 3676,
                            "decorators": [],
                            "name": "Promise",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 3677,
                            "end": 3685,
                            "decorators": [],
                            "name": "Thenable",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 3709,
                  "end": 3721,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 3711,
                    "end": 3721,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 3718,
                      "end": 3721,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 3719,
                          "end": 3720,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 3719,
                            "end": 3720,
                            "decorators": [],
                            "name": "R",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 3711,
                      "end": 3718,
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 3636,
                  "end": 3639,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 3637,
                      "end": 3638,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 3637,
                        "end": 3638,
                        "decorators": [],
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "out": false
                    }
                  ]
                }
              }
            },
            {
              "type": "MethodDefinition",
              "start": 3727,
              "end": 3806,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 3734,
                "end": 3738,
                "decorators": [],
                "name": "race",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": true,
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "start": 3738,
                "end": 3806,
                "async": false,
                "body": null,
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 3742,
                    "end": 3761,
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 3745,
                      "end": 3761,
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "start": 3747,
                        "end": 3761,
                        "exprName": {
                          "type": "Identifier",
                          "start": 3754,
                          "end": 3761,
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 3763,
                    "end": 3792,
                    "decorators": [],
                    "name": "values",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 3769,
                      "end": 3792,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 3771,
                        "end": 3792,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 3787,
                          "end": 3792,
                          "params": [
                            {
                              "type": "TSArrayType",
                              "start": 3788,
                              "end": 3791,
                              "elementType": {
                                "type": "TSTypeReference",
                                "start": 3788,
                                "end": 3789,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 3788,
                                  "end": 3789,
                                  "decorators": [],
                                  "name": "R",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            }
                          ]
                        },
                        "typeName": {
                          "type": "TSQualifiedName",
                          "start": 3771,
                          "end": 3787,
                          "left": {
                            "type": "Identifier",
                            "start": 3771,
                            "end": 3778,
                            "decorators": [],
                            "name": "Promise",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 3779,
                            "end": 3787,
                            "decorators": [],
                            "name": "Thenable",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 3793,
                  "end": 3805,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 3795,
                    "end": 3805,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 3802,
                      "end": 3805,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 3803,
                          "end": 3804,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 3803,
                            "end": 3804,
                            "decorators": [],
                            "name": "R",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 3795,
                      "end": 3802,
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 3738,
                  "end": 3741,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 3739,
                      "end": 3740,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 3739,
                        "end": 3740,
                        "decorators": [],
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "out": false
                    }
                  ]
                }
              }
            },
            {
              "type": "MethodDefinition",
              "start": 3811,
              "end": 3890,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 3818,
                "end": 3822,
                "decorators": [],
                "name": "race",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": true,
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "start": 3822,
                "end": 3890,
                "async": false,
                "body": null,
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 3826,
                    "end": 3845,
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 3829,
                      "end": 3845,
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "start": 3831,
                        "end": 3845,
                        "exprName": {
                          "type": "Identifier",
                          "start": 3838,
                          "end": 3845,
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 3847,
                    "end": 3876,
                    "decorators": [],
                    "name": "values",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 3853,
                      "end": 3876,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 3855,
                        "end": 3876,
                        "elementType": {
                          "type": "TSTypeReference",
                          "start": 3855,
                          "end": 3874,
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 3871,
                            "end": 3874,
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "start": 3872,
                                "end": 3873,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 3872,
                                  "end": 3873,
                                  "decorators": [],
                                  "name": "R",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            ]
                          },
                          "typeName": {
                            "type": "TSQualifiedName",
                            "start": 3855,
                            "end": 3871,
                            "left": {
                              "type": "Identifier",
                              "start": 3855,
                              "end": 3862,
                              "decorators": [],
                              "name": "Promise",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 3863,
                              "end": 3871,
                              "decorators": [],
                              "name": "Thenable",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 3877,
                  "end": 3889,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 3879,
                    "end": 3889,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 3886,
                      "end": 3889,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 3887,
                          "end": 3888,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 3887,
                            "end": 3888,
                            "decorators": [],
                            "name": "R",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 3879,
                      "end": 3886,
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 3822,
                  "end": 3825,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 3823,
                      "end": 3824,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 3823,
                        "end": 3824,
                        "decorators": [],
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "out": false
                    }
                  ]
                }
              }
            },
            {
              "type": "MethodDefinition",
              "start": 3895,
              "end": 3956,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 3902,
                "end": 3906,
                "decorators": [],
                "name": "race",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": true,
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "start": 3906,
                "end": 3956,
                "async": false,
                "body": null,
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 3910,
                    "end": 3929,
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 3913,
                      "end": 3929,
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "start": 3915,
                        "end": 3929,
                        "exprName": {
                          "type": "Identifier",
                          "start": 3922,
                          "end": 3929,
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 3931,
                    "end": 3942,
                    "decorators": [],
                    "name": "values",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 3937,
                      "end": 3942,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 3939,
                        "end": 3942,
                        "elementType": {
                          "type": "TSTypeReference",
                          "start": 3939,
                          "end": 3940,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 3939,
                            "end": 3940,
                            "decorators": [],
                            "name": "R",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 3943,
                  "end": 3955,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 3945,
                    "end": 3955,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 3952,
                      "end": 3955,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 3953,
                          "end": 3954,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 3953,
                            "end": 3954,
                            "decorators": [],
                            "name": "R",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 3945,
                      "end": 3952,
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 3906,
                  "end": 3909,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 3907,
                      "end": 3908,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 3907,
                        "end": 3908,
                        "decorators": [],
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "out": false
                    }
                  ]
                }
              }
            },
            {
              "type": "MethodDefinition",
              "start": 3962,
              "end": 4076,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 3969,
                "end": 3973,
                "decorators": [],
                "name": "some",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": true,
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "start": 3973,
                "end": 4076,
                "async": false,
                "body": null,
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 3977,
                    "end": 3996,
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 3980,
                      "end": 3996,
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "start": 3982,
                        "end": 3996,
                        "exprName": {
                          "type": "Identifier",
                          "start": 3989,
                          "end": 3996,
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 3998,
                    "end": 4045,
                    "decorators": [],
                    "name": "values",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 4004,
                      "end": 4045,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 4006,
                        "end": 4045,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 4022,
                          "end": 4045,
                          "params": [
                            {
                              "type": "TSArrayType",
                              "start": 4023,
                              "end": 4044,
                              "elementType": {
                                "type": "TSTypeReference",
                                "start": 4023,
                                "end": 4042,
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "start": 4039,
                                  "end": 4042,
                                  "params": [
                                    {
                                      "type": "TSTypeReference",
                                      "start": 4040,
                                      "end": 4041,
                                      "typeArguments": null,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 4040,
                                        "end": 4041,
                                        "decorators": [],
                                        "name": "R",
                                        "optional": false,
                                        "typeAnnotation": null
                                      }
                                    }
                                  ]
                                },
                                "typeName": {
                                  "type": "TSQualifiedName",
                                  "start": 4023,
                                  "end": 4039,
                                  "left": {
                                    "type": "Identifier",
                                    "start": 4023,
                                    "end": 4030,
                                    "decorators": [],
                                    "name": "Promise",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "start": 4031,
                                    "end": 4039,
                                    "decorators": [],
                                    "name": "Thenable",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                }
                              }
                            }
                          ]
                        },
                        "typeName": {
                          "type": "TSQualifiedName",
                          "start": 4006,
                          "end": 4022,
                          "left": {
                            "type": "Identifier",
                            "start": 4006,
                            "end": 4013,
                            "decorators": [],
                            "name": "Promise",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 4014,
                            "end": 4022,
                            "decorators": [],
                            "name": "Thenable",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 4047,
                    "end": 4060,
                    "decorators": [],
                    "name": "count",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 4052,
                      "end": 4060,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 4054,
                        "end": 4060
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 4061,
                  "end": 4075,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 4063,
                    "end": 4075,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 4070,
                      "end": 4075,
                      "params": [
                        {
                          "type": "TSArrayType",
                          "start": 4071,
                          "end": 4074,
                          "elementType": {
                            "type": "TSTypeReference",
                            "start": 4071,
                            "end": 4072,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 4071,
                              "end": 4072,
                              "decorators": [],
                              "name": "R",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 4063,
                      "end": 4070,
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 3973,
                  "end": 3976,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 3974,
                      "end": 3975,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 3974,
                        "end": 3975,
                        "decorators": [],
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "out": false
                    }
                  ]
                }
              }
            },
            {
              "type": "MethodDefinition",
              "start": 4081,
              "end": 4177,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 4088,
                "end": 4092,
                "decorators": [],
                "name": "some",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": true,
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "start": 4092,
                "end": 4177,
                "async": false,
                "body": null,
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 4096,
                    "end": 4115,
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 4099,
                      "end": 4115,
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "start": 4101,
                        "end": 4115,
                        "exprName": {
                          "type": "Identifier",
                          "start": 4108,
                          "end": 4115,
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 4117,
                    "end": 4146,
                    "decorators": [],
                    "name": "values",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 4123,
                      "end": 4146,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 4125,
                        "end": 4146,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 4141,
                          "end": 4146,
                          "params": [
                            {
                              "type": "TSArrayType",
                              "start": 4142,
                              "end": 4145,
                              "elementType": {
                                "type": "TSTypeReference",
                                "start": 4142,
                                "end": 4143,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 4142,
                                  "end": 4143,
                                  "decorators": [],
                                  "name": "R",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            }
                          ]
                        },
                        "typeName": {
                          "type": "TSQualifiedName",
                          "start": 4125,
                          "end": 4141,
                          "left": {
                            "type": "Identifier",
                            "start": 4125,
                            "end": 4132,
                            "decorators": [],
                            "name": "Promise",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 4133,
                            "end": 4141,
                            "decorators": [],
                            "name": "Thenable",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 4148,
                    "end": 4161,
                    "decorators": [],
                    "name": "count",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 4153,
                      "end": 4161,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 4155,
                        "end": 4161
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 4162,
                  "end": 4176,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 4164,
                    "end": 4176,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 4171,
                      "end": 4176,
                      "params": [
                        {
                          "type": "TSArrayType",
                          "start": 4172,
                          "end": 4175,
                          "elementType": {
                            "type": "TSTypeReference",
                            "start": 4172,
                            "end": 4173,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 4172,
                              "end": 4173,
                              "decorators": [],
                              "name": "R",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 4164,
                      "end": 4171,
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 4092,
                  "end": 4095,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 4093,
                      "end": 4094,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 4093,
                        "end": 4094,
                        "decorators": [],
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "out": false
                    }
                  ]
                }
              }
            },
            {
              "type": "MethodDefinition",
              "start": 4182,
              "end": 4278,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 4189,
                "end": 4193,
                "decorators": [],
                "name": "some",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": true,
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "start": 4193,
                "end": 4278,
                "async": false,
                "body": null,
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 4197,
                    "end": 4216,
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 4200,
                      "end": 4216,
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "start": 4202,
                        "end": 4216,
                        "exprName": {
                          "type": "Identifier",
                          "start": 4209,
                          "end": 4216,
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 4218,
                    "end": 4247,
                    "decorators": [],
                    "name": "values",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 4224,
                      "end": 4247,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 4226,
                        "end": 4247,
                        "elementType": {
                          "type": "TSTypeReference",
                          "start": 4226,
                          "end": 4245,
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 4242,
                            "end": 4245,
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "start": 4243,
                                "end": 4244,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 4243,
                                  "end": 4244,
                                  "decorators": [],
                                  "name": "R",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            ]
                          },
                          "typeName": {
                            "type": "TSQualifiedName",
                            "start": 4226,
                            "end": 4242,
                            "left": {
                              "type": "Identifier",
                              "start": 4226,
                              "end": 4233,
                              "decorators": [],
                              "name": "Promise",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 4234,
                              "end": 4242,
                              "decorators": [],
                              "name": "Thenable",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 4249,
                    "end": 4262,
                    "decorators": [],
                    "name": "count",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 4254,
                      "end": 4262,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 4256,
                        "end": 4262
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 4263,
                  "end": 4277,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 4265,
                    "end": 4277,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 4272,
                      "end": 4277,
                      "params": [
                        {
                          "type": "TSArrayType",
                          "start": 4273,
                          "end": 4276,
                          "elementType": {
                            "type": "TSTypeReference",
                            "start": 4273,
                            "end": 4274,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 4273,
                              "end": 4274,
                              "decorators": [],
                              "name": "R",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 4265,
                      "end": 4272,
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 4193,
                  "end": 4196,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 4194,
                      "end": 4195,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 4194,
                        "end": 4195,
                        "decorators": [],
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "out": false
                    }
                  ]
                }
              }
            },
            {
              "type": "MethodDefinition",
              "start": 4283,
              "end": 4361,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 4290,
                "end": 4294,
                "decorators": [],
                "name": "some",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": true,
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "start": 4294,
                "end": 4361,
                "async": false,
                "body": null,
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 4298,
                    "end": 4317,
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 4301,
                      "end": 4317,
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "start": 4303,
                        "end": 4317,
                        "exprName": {
                          "type": "Identifier",
                          "start": 4310,
                          "end": 4317,
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 4319,
                    "end": 4330,
                    "decorators": [],
                    "name": "values",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 4325,
                      "end": 4330,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 4327,
                        "end": 4330,
                        "elementType": {
                          "type": "TSTypeReference",
                          "start": 4327,
                          "end": 4328,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 4327,
                            "end": 4328,
                            "decorators": [],
                            "name": "R",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 4332,
                    "end": 4345,
                    "decorators": [],
                    "name": "count",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 4337,
                      "end": 4345,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 4339,
                        "end": 4345
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 4346,
                  "end": 4360,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 4348,
                    "end": 4360,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 4355,
                      "end": 4360,
                      "params": [
                        {
                          "type": "TSArrayType",
                          "start": 4356,
                          "end": 4359,
                          "elementType": {
                            "type": "TSTypeReference",
                            "start": 4356,
                            "end": 4357,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 4356,
                              "end": 4357,
                              "decorators": [],
                              "name": "R",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 4348,
                      "end": 4355,
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 4294,
                  "end": 4297,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 4295,
                      "end": 4296,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 4295,
                        "end": 4296,
                        "decorators": [],
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "out": false
                    }
                  ]
                }
              }
            },
            {
              "type": "MethodDefinition",
              "start": 4367,
              "end": 4451,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 4374,
                "end": 4378,
                "decorators": [],
                "name": "join",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": true,
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "start": 4378,
                "end": 4451,
                "async": false,
                "body": null,
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 4382,
                    "end": 4401,
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 4385,
                      "end": 4401,
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "start": 4387,
                        "end": 4401,
                        "exprName": {
                          "type": "Identifier",
                          "start": 4394,
                          "end": 4401,
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  {
                    "type": "RestElement",
                    "start": 4403,
                    "end": 4435,
                    "argument": {
                      "type": "Identifier",
                      "start": 4406,
                      "end": 4412,
                      "decorators": [],
                      "name": "values",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "decorators": [],
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 4412,
                      "end": 4435,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 4414,
                        "end": 4435,
                        "elementType": {
                          "type": "TSTypeReference",
                          "start": 4414,
                          "end": 4433,
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 4430,
                            "end": 4433,
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "start": 4431,
                                "end": 4432,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 4431,
                                  "end": 4432,
                                  "decorators": [],
                                  "name": "R",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            ]
                          },
                          "typeName": {
                            "type": "TSQualifiedName",
                            "start": 4414,
                            "end": 4430,
                            "left": {
                              "type": "Identifier",
                              "start": 4414,
                              "end": 4421,
                              "decorators": [],
                              "name": "Promise",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 4422,
                              "end": 4430,
                              "decorators": [],
                              "name": "Thenable",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      }
                    },
                    "value": null
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 4436,
                  "end": 4450,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 4438,
                    "end": 4450,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 4445,
                      "end": 4450,
                      "params": [
                        {
                          "type": "TSArrayType",
                          "start": 4446,
                          "end": 4449,
                          "elementType": {
                            "type": "TSTypeReference",
                            "start": 4446,
                            "end": 4447,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 4446,
                              "end": 4447,
                              "decorators": [],
                              "name": "R",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 4438,
                      "end": 4445,
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 4378,
                  "end": 4381,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 4379,
                      "end": 4380,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 4379,
                        "end": 4380,
                        "decorators": [],
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "out": false
                    }
                  ]
                }
              }
            },
            {
              "type": "MethodDefinition",
              "start": 4456,
              "end": 4522,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 4463,
                "end": 4467,
                "decorators": [],
                "name": "join",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": true,
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "start": 4467,
                "end": 4522,
                "async": false,
                "body": null,
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 4471,
                    "end": 4490,
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 4474,
                      "end": 4490,
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "start": 4476,
                        "end": 4490,
                        "exprName": {
                          "type": "Identifier",
                          "start": 4483,
                          "end": 4490,
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  {
                    "type": "RestElement",
                    "start": 4492,
                    "end": 4506,
                    "argument": {
                      "type": "Identifier",
                      "start": 4495,
                      "end": 4501,
                      "decorators": [],
                      "name": "values",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "decorators": [],
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 4501,
                      "end": 4506,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 4503,
                        "end": 4506,
                        "elementType": {
                          "type": "TSTypeReference",
                          "start": 4503,
                          "end": 4504,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 4503,
                            "end": 4504,
                            "decorators": [],
                            "name": "R",
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
                  "start": 4507,
                  "end": 4521,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 4509,
                    "end": 4521,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 4516,
                      "end": 4521,
                      "params": [
                        {
                          "type": "TSArrayType",
                          "start": 4517,
                          "end": 4520,
                          "elementType": {
                            "type": "TSTypeReference",
                            "start": 4517,
                            "end": 4518,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 4517,
                              "end": 4518,
                              "decorators": [],
                              "name": "R",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 4509,
                      "end": 4516,
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 4467,
                  "end": 4470,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 4468,
                      "end": 4469,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 4468,
                        "end": 4469,
                        "decorators": [],
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "out": false
                    }
                  ]
                }
              }
            },
            {
              "type": "MethodDefinition",
              "start": 4528,
              "end": 4707,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 4535,
                "end": 4538,
                "decorators": [],
                "name": "map",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": true,
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "start": 4538,
                "end": 4707,
                "async": false,
                "body": null,
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 4545,
                    "end": 4564,
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 4548,
                      "end": 4564,
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "start": 4550,
                        "end": 4564,
                        "exprName": {
                          "type": "Identifier",
                          "start": 4557,
                          "end": 4564,
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 4566,
                    "end": 4613,
                    "decorators": [],
                    "name": "values",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 4572,
                      "end": 4613,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 4574,
                        "end": 4613,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 4590,
                          "end": 4613,
                          "params": [
                            {
                              "type": "TSArrayType",
                              "start": 4591,
                              "end": 4612,
                              "elementType": {
                                "type": "TSTypeReference",
                                "start": 4591,
                                "end": 4610,
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "start": 4607,
                                  "end": 4610,
                                  "params": [
                                    {
                                      "type": "TSTypeReference",
                                      "start": 4608,
                                      "end": 4609,
                                      "typeArguments": null,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 4608,
                                        "end": 4609,
                                        "decorators": [],
                                        "name": "R",
                                        "optional": false,
                                        "typeAnnotation": null
                                      }
                                    }
                                  ]
                                },
                                "typeName": {
                                  "type": "TSQualifiedName",
                                  "start": 4591,
                                  "end": 4607,
                                  "left": {
                                    "type": "Identifier",
                                    "start": 4591,
                                    "end": 4598,
                                    "decorators": [],
                                    "name": "Promise",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "start": 4599,
                                    "end": 4607,
                                    "decorators": [],
                                    "name": "Thenable",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                }
                              }
                            }
                          ]
                        },
                        "typeName": {
                          "type": "TSQualifiedName",
                          "start": 4574,
                          "end": 4590,
                          "left": {
                            "type": "Identifier",
                            "start": 4574,
                            "end": 4581,
                            "decorators": [],
                            "name": "Promise",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 4582,
                            "end": 4590,
                            "decorators": [],
                            "name": "Thenable",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 4615,
                    "end": 4691,
                    "decorators": [],
                    "name": "mapper",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 4621,
                      "end": 4691,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 4623,
                        "end": 4691,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 4624,
                            "end": 4631,
                            "decorators": [],
                            "name": "item",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 4628,
                              "end": 4631,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 4630,
                                "end": 4631,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 4630,
                                  "end": 4631,
                                  "decorators": [],
                                  "name": "R",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            }
                          },
                          {
                            "type": "Identifier",
                            "start": 4633,
                            "end": 4646,
                            "decorators": [],
                            "name": "index",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 4638,
                              "end": 4646,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 4640,
                                "end": 4646
                              }
                            }
                          },
                          {
                            "type": "Identifier",
                            "start": 4648,
                            "end": 4667,
                            "decorators": [],
                            "name": "arrayLength",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 4659,
                              "end": 4667,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 4661,
                                "end": 4667
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 4669,
                          "end": 4691,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 4672,
                            "end": 4691,
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 4688,
                              "end": 4691,
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "start": 4689,
                                  "end": 4690,
                                  "typeArguments": null,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 4689,
                                    "end": 4690,
                                    "decorators": [],
                                    "name": "U",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                }
                              ]
                            },
                            "typeName": {
                              "type": "TSQualifiedName",
                              "start": 4672,
                              "end": 4688,
                              "left": {
                                "type": "Identifier",
                                "start": 4672,
                                "end": 4679,
                                "decorators": [],
                                "name": "Promise",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 4680,
                                "end": 4688,
                                "decorators": [],
                                "name": "Thenable",
                                "optional": false,
                                "typeAnnotation": null
                              }
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
                  "start": 4692,
                  "end": 4706,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 4694,
                    "end": 4706,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 4701,
                      "end": 4706,
                      "params": [
                        {
                          "type": "TSArrayType",
                          "start": 4702,
                          "end": 4705,
                          "elementType": {
                            "type": "TSTypeReference",
                            "start": 4702,
                            "end": 4703,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 4702,
                              "end": 4703,
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 4694,
                      "end": 4701,
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 4538,
                  "end": 4544,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 4539,
                      "end": 4540,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 4539,
                        "end": 4540,
                        "decorators": [],
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "out": false
                    },
                    {
                      "type": "TSTypeParameter",
                      "start": 4542,
                      "end": 4543,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 4542,
                        "end": 4543,
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
            },
            {
              "type": "MethodDefinition",
              "start": 4712,
              "end": 4873,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 4719,
                "end": 4722,
                "decorators": [],
                "name": "map",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": true,
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "start": 4722,
                "end": 4873,
                "async": false,
                "body": null,
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 4729,
                    "end": 4748,
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 4732,
                      "end": 4748,
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "start": 4734,
                        "end": 4748,
                        "exprName": {
                          "type": "Identifier",
                          "start": 4741,
                          "end": 4748,
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 4750,
                    "end": 4797,
                    "decorators": [],
                    "name": "values",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 4756,
                      "end": 4797,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 4758,
                        "end": 4797,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 4774,
                          "end": 4797,
                          "params": [
                            {
                              "type": "TSArrayType",
                              "start": 4775,
                              "end": 4796,
                              "elementType": {
                                "type": "TSTypeReference",
                                "start": 4775,
                                "end": 4794,
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "start": 4791,
                                  "end": 4794,
                                  "params": [
                                    {
                                      "type": "TSTypeReference",
                                      "start": 4792,
                                      "end": 4793,
                                      "typeArguments": null,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 4792,
                                        "end": 4793,
                                        "decorators": [],
                                        "name": "R",
                                        "optional": false,
                                        "typeAnnotation": null
                                      }
                                    }
                                  ]
                                },
                                "typeName": {
                                  "type": "TSQualifiedName",
                                  "start": 4775,
                                  "end": 4791,
                                  "left": {
                                    "type": "Identifier",
                                    "start": 4775,
                                    "end": 4782,
                                    "decorators": [],
                                    "name": "Promise",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "start": 4783,
                                    "end": 4791,
                                    "decorators": [],
                                    "name": "Thenable",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                }
                              }
                            }
                          ]
                        },
                        "typeName": {
                          "type": "TSQualifiedName",
                          "start": 4758,
                          "end": 4774,
                          "left": {
                            "type": "Identifier",
                            "start": 4758,
                            "end": 4765,
                            "decorators": [],
                            "name": "Promise",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 4766,
                            "end": 4774,
                            "decorators": [],
                            "name": "Thenable",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 4799,
                    "end": 4857,
                    "decorators": [],
                    "name": "mapper",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 4805,
                      "end": 4857,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 4807,
                        "end": 4857,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 4808,
                            "end": 4815,
                            "decorators": [],
                            "name": "item",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 4812,
                              "end": 4815,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 4814,
                                "end": 4815,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 4814,
                                  "end": 4815,
                                  "decorators": [],
                                  "name": "R",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            }
                          },
                          {
                            "type": "Identifier",
                            "start": 4817,
                            "end": 4830,
                            "decorators": [],
                            "name": "index",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 4822,
                              "end": 4830,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 4824,
                                "end": 4830
                              }
                            }
                          },
                          {
                            "type": "Identifier",
                            "start": 4832,
                            "end": 4851,
                            "decorators": [],
                            "name": "arrayLength",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 4843,
                              "end": 4851,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 4845,
                                "end": 4851
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 4853,
                          "end": 4857,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 4856,
                            "end": 4857,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 4856,
                              "end": 4857,
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
                  "start": 4858,
                  "end": 4872,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 4860,
                    "end": 4872,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 4867,
                      "end": 4872,
                      "params": [
                        {
                          "type": "TSArrayType",
                          "start": 4868,
                          "end": 4871,
                          "elementType": {
                            "type": "TSTypeReference",
                            "start": 4868,
                            "end": 4869,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 4868,
                              "end": 4869,
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 4860,
                      "end": 4867,
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 4722,
                  "end": 4728,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 4723,
                      "end": 4724,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 4723,
                        "end": 4724,
                        "decorators": [],
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "out": false
                    },
                    {
                      "type": "TSTypeParameter",
                      "start": 4726,
                      "end": 4727,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 4726,
                        "end": 4727,
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
            },
            {
              "type": "MethodDefinition",
              "start": 4878,
              "end": 5039,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 4885,
                "end": 4888,
                "decorators": [],
                "name": "map",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": true,
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "start": 4888,
                "end": 5039,
                "async": false,
                "body": null,
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 4895,
                    "end": 4914,
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 4898,
                      "end": 4914,
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "start": 4900,
                        "end": 4914,
                        "exprName": {
                          "type": "Identifier",
                          "start": 4907,
                          "end": 4914,
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 4916,
                    "end": 4945,
                    "decorators": [],
                    "name": "values",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 4922,
                      "end": 4945,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 4924,
                        "end": 4945,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 4940,
                          "end": 4945,
                          "params": [
                            {
                              "type": "TSArrayType",
                              "start": 4941,
                              "end": 4944,
                              "elementType": {
                                "type": "TSTypeReference",
                                "start": 4941,
                                "end": 4942,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 4941,
                                  "end": 4942,
                                  "decorators": [],
                                  "name": "R",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            }
                          ]
                        },
                        "typeName": {
                          "type": "TSQualifiedName",
                          "start": 4924,
                          "end": 4940,
                          "left": {
                            "type": "Identifier",
                            "start": 4924,
                            "end": 4931,
                            "decorators": [],
                            "name": "Promise",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 4932,
                            "end": 4940,
                            "decorators": [],
                            "name": "Thenable",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 4947,
                    "end": 5023,
                    "decorators": [],
                    "name": "mapper",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 4953,
                      "end": 5023,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 4955,
                        "end": 5023,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 4956,
                            "end": 4963,
                            "decorators": [],
                            "name": "item",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 4960,
                              "end": 4963,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 4962,
                                "end": 4963,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 4962,
                                  "end": 4963,
                                  "decorators": [],
                                  "name": "R",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            }
                          },
                          {
                            "type": "Identifier",
                            "start": 4965,
                            "end": 4978,
                            "decorators": [],
                            "name": "index",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 4970,
                              "end": 4978,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 4972,
                                "end": 4978
                              }
                            }
                          },
                          {
                            "type": "Identifier",
                            "start": 4980,
                            "end": 4999,
                            "decorators": [],
                            "name": "arrayLength",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 4991,
                              "end": 4999,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 4993,
                                "end": 4999
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 5001,
                          "end": 5023,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 5004,
                            "end": 5023,
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 5020,
                              "end": 5023,
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "start": 5021,
                                  "end": 5022,
                                  "typeArguments": null,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 5021,
                                    "end": 5022,
                                    "decorators": [],
                                    "name": "U",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                }
                              ]
                            },
                            "typeName": {
                              "type": "TSQualifiedName",
                              "start": 5004,
                              "end": 5020,
                              "left": {
                                "type": "Identifier",
                                "start": 5004,
                                "end": 5011,
                                "decorators": [],
                                "name": "Promise",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 5012,
                                "end": 5020,
                                "decorators": [],
                                "name": "Thenable",
                                "optional": false,
                                "typeAnnotation": null
                              }
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
                  "start": 5024,
                  "end": 5038,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 5026,
                    "end": 5038,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 5033,
                      "end": 5038,
                      "params": [
                        {
                          "type": "TSArrayType",
                          "start": 5034,
                          "end": 5037,
                          "elementType": {
                            "type": "TSTypeReference",
                            "start": 5034,
                            "end": 5035,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 5034,
                              "end": 5035,
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 5026,
                      "end": 5033,
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 4888,
                  "end": 4894,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 4889,
                      "end": 4890,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 4889,
                        "end": 4890,
                        "decorators": [],
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "out": false
                    },
                    {
                      "type": "TSTypeParameter",
                      "start": 4892,
                      "end": 4893,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 4892,
                        "end": 4893,
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
            },
            {
              "type": "MethodDefinition",
              "start": 5044,
              "end": 5187,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 5051,
                "end": 5054,
                "decorators": [],
                "name": "map",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": true,
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "start": 5054,
                "end": 5187,
                "async": false,
                "body": null,
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 5061,
                    "end": 5080,
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 5064,
                      "end": 5080,
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "start": 5066,
                        "end": 5080,
                        "exprName": {
                          "type": "Identifier",
                          "start": 5073,
                          "end": 5080,
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 5082,
                    "end": 5111,
                    "decorators": [],
                    "name": "values",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 5088,
                      "end": 5111,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 5090,
                        "end": 5111,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 5106,
                          "end": 5111,
                          "params": [
                            {
                              "type": "TSArrayType",
                              "start": 5107,
                              "end": 5110,
                              "elementType": {
                                "type": "TSTypeReference",
                                "start": 5107,
                                "end": 5108,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 5107,
                                  "end": 5108,
                                  "decorators": [],
                                  "name": "R",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            }
                          ]
                        },
                        "typeName": {
                          "type": "TSQualifiedName",
                          "start": 5090,
                          "end": 5106,
                          "left": {
                            "type": "Identifier",
                            "start": 5090,
                            "end": 5097,
                            "decorators": [],
                            "name": "Promise",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 5098,
                            "end": 5106,
                            "decorators": [],
                            "name": "Thenable",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 5113,
                    "end": 5171,
                    "decorators": [],
                    "name": "mapper",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 5119,
                      "end": 5171,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 5121,
                        "end": 5171,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 5122,
                            "end": 5129,
                            "decorators": [],
                            "name": "item",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 5126,
                              "end": 5129,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 5128,
                                "end": 5129,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 5128,
                                  "end": 5129,
                                  "decorators": [],
                                  "name": "R",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            }
                          },
                          {
                            "type": "Identifier",
                            "start": 5131,
                            "end": 5144,
                            "decorators": [],
                            "name": "index",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 5136,
                              "end": 5144,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 5138,
                                "end": 5144
                              }
                            }
                          },
                          {
                            "type": "Identifier",
                            "start": 5146,
                            "end": 5165,
                            "decorators": [],
                            "name": "arrayLength",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 5157,
                              "end": 5165,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 5159,
                                "end": 5165
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 5167,
                          "end": 5171,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 5170,
                            "end": 5171,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 5170,
                              "end": 5171,
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
                  "start": 5172,
                  "end": 5186,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 5174,
                    "end": 5186,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 5181,
                      "end": 5186,
                      "params": [
                        {
                          "type": "TSArrayType",
                          "start": 5182,
                          "end": 5185,
                          "elementType": {
                            "type": "TSTypeReference",
                            "start": 5182,
                            "end": 5183,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 5182,
                              "end": 5183,
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 5174,
                      "end": 5181,
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 5054,
                  "end": 5060,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 5055,
                      "end": 5056,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 5055,
                        "end": 5056,
                        "decorators": [],
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "out": false
                    },
                    {
                      "type": "TSTypeParameter",
                      "start": 5058,
                      "end": 5059,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 5058,
                        "end": 5059,
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
            },
            {
              "type": "MethodDefinition",
              "start": 5192,
              "end": 5353,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 5199,
                "end": 5202,
                "decorators": [],
                "name": "map",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": true,
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "start": 5202,
                "end": 5353,
                "async": false,
                "body": null,
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 5209,
                    "end": 5228,
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 5212,
                      "end": 5228,
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "start": 5214,
                        "end": 5228,
                        "exprName": {
                          "type": "Identifier",
                          "start": 5221,
                          "end": 5228,
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 5230,
                    "end": 5259,
                    "decorators": [],
                    "name": "values",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 5236,
                      "end": 5259,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 5238,
                        "end": 5259,
                        "elementType": {
                          "type": "TSTypeReference",
                          "start": 5238,
                          "end": 5257,
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 5254,
                            "end": 5257,
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "start": 5255,
                                "end": 5256,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 5255,
                                  "end": 5256,
                                  "decorators": [],
                                  "name": "R",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            ]
                          },
                          "typeName": {
                            "type": "TSQualifiedName",
                            "start": 5238,
                            "end": 5254,
                            "left": {
                              "type": "Identifier",
                              "start": 5238,
                              "end": 5245,
                              "decorators": [],
                              "name": "Promise",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 5246,
                              "end": 5254,
                              "decorators": [],
                              "name": "Thenable",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 5261,
                    "end": 5337,
                    "decorators": [],
                    "name": "mapper",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 5267,
                      "end": 5337,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 5269,
                        "end": 5337,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 5270,
                            "end": 5277,
                            "decorators": [],
                            "name": "item",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 5274,
                              "end": 5277,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 5276,
                                "end": 5277,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 5276,
                                  "end": 5277,
                                  "decorators": [],
                                  "name": "R",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            }
                          },
                          {
                            "type": "Identifier",
                            "start": 5279,
                            "end": 5292,
                            "decorators": [],
                            "name": "index",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 5284,
                              "end": 5292,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 5286,
                                "end": 5292
                              }
                            }
                          },
                          {
                            "type": "Identifier",
                            "start": 5294,
                            "end": 5313,
                            "decorators": [],
                            "name": "arrayLength",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 5305,
                              "end": 5313,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 5307,
                                "end": 5313
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 5315,
                          "end": 5337,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 5318,
                            "end": 5337,
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 5334,
                              "end": 5337,
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "start": 5335,
                                  "end": 5336,
                                  "typeArguments": null,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 5335,
                                    "end": 5336,
                                    "decorators": [],
                                    "name": "U",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                }
                              ]
                            },
                            "typeName": {
                              "type": "TSQualifiedName",
                              "start": 5318,
                              "end": 5334,
                              "left": {
                                "type": "Identifier",
                                "start": 5318,
                                "end": 5325,
                                "decorators": [],
                                "name": "Promise",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 5326,
                                "end": 5334,
                                "decorators": [],
                                "name": "Thenable",
                                "optional": false,
                                "typeAnnotation": null
                              }
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
                  "start": 5338,
                  "end": 5352,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 5340,
                    "end": 5352,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 5347,
                      "end": 5352,
                      "params": [
                        {
                          "type": "TSArrayType",
                          "start": 5348,
                          "end": 5351,
                          "elementType": {
                            "type": "TSTypeReference",
                            "start": 5348,
                            "end": 5349,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 5348,
                              "end": 5349,
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 5340,
                      "end": 5347,
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 5202,
                  "end": 5208,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 5203,
                      "end": 5204,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 5203,
                        "end": 5204,
                        "decorators": [],
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "out": false
                    },
                    {
                      "type": "TSTypeParameter",
                      "start": 5206,
                      "end": 5207,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 5206,
                        "end": 5207,
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
            },
            {
              "type": "MethodDefinition",
              "start": 5358,
              "end": 5501,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 5365,
                "end": 5368,
                "decorators": [],
                "name": "map",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": true,
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "start": 5368,
                "end": 5501,
                "async": false,
                "body": null,
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 5375,
                    "end": 5394,
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 5378,
                      "end": 5394,
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "start": 5380,
                        "end": 5394,
                        "exprName": {
                          "type": "Identifier",
                          "start": 5387,
                          "end": 5394,
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 5396,
                    "end": 5425,
                    "decorators": [],
                    "name": "values",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 5402,
                      "end": 5425,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 5404,
                        "end": 5425,
                        "elementType": {
                          "type": "TSTypeReference",
                          "start": 5404,
                          "end": 5423,
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 5420,
                            "end": 5423,
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "start": 5421,
                                "end": 5422,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 5421,
                                  "end": 5422,
                                  "decorators": [],
                                  "name": "R",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            ]
                          },
                          "typeName": {
                            "type": "TSQualifiedName",
                            "start": 5404,
                            "end": 5420,
                            "left": {
                              "type": "Identifier",
                              "start": 5404,
                              "end": 5411,
                              "decorators": [],
                              "name": "Promise",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 5412,
                              "end": 5420,
                              "decorators": [],
                              "name": "Thenable",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 5427,
                    "end": 5485,
                    "decorators": [],
                    "name": "mapper",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 5433,
                      "end": 5485,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 5435,
                        "end": 5485,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 5436,
                            "end": 5443,
                            "decorators": [],
                            "name": "item",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 5440,
                              "end": 5443,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 5442,
                                "end": 5443,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 5442,
                                  "end": 5443,
                                  "decorators": [],
                                  "name": "R",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            }
                          },
                          {
                            "type": "Identifier",
                            "start": 5445,
                            "end": 5458,
                            "decorators": [],
                            "name": "index",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 5450,
                              "end": 5458,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 5452,
                                "end": 5458
                              }
                            }
                          },
                          {
                            "type": "Identifier",
                            "start": 5460,
                            "end": 5479,
                            "decorators": [],
                            "name": "arrayLength",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 5471,
                              "end": 5479,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 5473,
                                "end": 5479
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 5481,
                          "end": 5485,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 5484,
                            "end": 5485,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 5484,
                              "end": 5485,
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
                  "start": 5486,
                  "end": 5500,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 5488,
                    "end": 5500,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 5495,
                      "end": 5500,
                      "params": [
                        {
                          "type": "TSArrayType",
                          "start": 5496,
                          "end": 5499,
                          "elementType": {
                            "type": "TSTypeReference",
                            "start": 5496,
                            "end": 5497,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 5496,
                              "end": 5497,
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 5488,
                      "end": 5495,
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 5368,
                  "end": 5374,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 5369,
                      "end": 5370,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 5369,
                        "end": 5370,
                        "decorators": [],
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "out": false
                    },
                    {
                      "type": "TSTypeParameter",
                      "start": 5372,
                      "end": 5373,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 5372,
                        "end": 5373,
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
            },
            {
              "type": "MethodDefinition",
              "start": 5506,
              "end": 5649,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 5513,
                "end": 5516,
                "decorators": [],
                "name": "map",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": true,
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "start": 5516,
                "end": 5649,
                "async": false,
                "body": null,
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 5523,
                    "end": 5542,
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 5526,
                      "end": 5542,
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "start": 5528,
                        "end": 5542,
                        "exprName": {
                          "type": "Identifier",
                          "start": 5535,
                          "end": 5542,
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 5544,
                    "end": 5555,
                    "decorators": [],
                    "name": "values",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 5550,
                      "end": 5555,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 5552,
                        "end": 5555,
                        "elementType": {
                          "type": "TSTypeReference",
                          "start": 5552,
                          "end": 5553,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 5552,
                            "end": 5553,
                            "decorators": [],
                            "name": "R",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 5557,
                    "end": 5633,
                    "decorators": [],
                    "name": "mapper",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 5563,
                      "end": 5633,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 5565,
                        "end": 5633,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 5566,
                            "end": 5573,
                            "decorators": [],
                            "name": "item",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 5570,
                              "end": 5573,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 5572,
                                "end": 5573,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 5572,
                                  "end": 5573,
                                  "decorators": [],
                                  "name": "R",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            }
                          },
                          {
                            "type": "Identifier",
                            "start": 5575,
                            "end": 5588,
                            "decorators": [],
                            "name": "index",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 5580,
                              "end": 5588,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 5582,
                                "end": 5588
                              }
                            }
                          },
                          {
                            "type": "Identifier",
                            "start": 5590,
                            "end": 5609,
                            "decorators": [],
                            "name": "arrayLength",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 5601,
                              "end": 5609,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 5603,
                                "end": 5609
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 5611,
                          "end": 5633,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 5614,
                            "end": 5633,
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 5630,
                              "end": 5633,
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "start": 5631,
                                  "end": 5632,
                                  "typeArguments": null,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 5631,
                                    "end": 5632,
                                    "decorators": [],
                                    "name": "U",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                }
                              ]
                            },
                            "typeName": {
                              "type": "TSQualifiedName",
                              "start": 5614,
                              "end": 5630,
                              "left": {
                                "type": "Identifier",
                                "start": 5614,
                                "end": 5621,
                                "decorators": [],
                                "name": "Promise",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 5622,
                                "end": 5630,
                                "decorators": [],
                                "name": "Thenable",
                                "optional": false,
                                "typeAnnotation": null
                              }
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
                  "start": 5634,
                  "end": 5648,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 5636,
                    "end": 5648,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 5643,
                      "end": 5648,
                      "params": [
                        {
                          "type": "TSArrayType",
                          "start": 5644,
                          "end": 5647,
                          "elementType": {
                            "type": "TSTypeReference",
                            "start": 5644,
                            "end": 5645,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 5644,
                              "end": 5645,
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 5636,
                      "end": 5643,
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 5516,
                  "end": 5522,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 5517,
                      "end": 5518,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 5517,
                        "end": 5518,
                        "decorators": [],
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "out": false
                    },
                    {
                      "type": "TSTypeParameter",
                      "start": 5520,
                      "end": 5521,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 5520,
                        "end": 5521,
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
            },
            {
              "type": "MethodDefinition",
              "start": 5654,
              "end": 5779,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 5661,
                "end": 5664,
                "decorators": [],
                "name": "map",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": true,
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "start": 5664,
                "end": 5779,
                "async": false,
                "body": null,
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 5671,
                    "end": 5690,
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 5674,
                      "end": 5690,
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "start": 5676,
                        "end": 5690,
                        "exprName": {
                          "type": "Identifier",
                          "start": 5683,
                          "end": 5690,
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 5692,
                    "end": 5703,
                    "decorators": [],
                    "name": "values",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 5698,
                      "end": 5703,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 5700,
                        "end": 5703,
                        "elementType": {
                          "type": "TSTypeReference",
                          "start": 5700,
                          "end": 5701,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 5700,
                            "end": 5701,
                            "decorators": [],
                            "name": "R",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 5705,
                    "end": 5763,
                    "decorators": [],
                    "name": "mapper",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 5711,
                      "end": 5763,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 5713,
                        "end": 5763,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 5714,
                            "end": 5721,
                            "decorators": [],
                            "name": "item",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 5718,
                              "end": 5721,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 5720,
                                "end": 5721,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 5720,
                                  "end": 5721,
                                  "decorators": [],
                                  "name": "R",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            }
                          },
                          {
                            "type": "Identifier",
                            "start": 5723,
                            "end": 5736,
                            "decorators": [],
                            "name": "index",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 5728,
                              "end": 5736,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 5730,
                                "end": 5736
                              }
                            }
                          },
                          {
                            "type": "Identifier",
                            "start": 5738,
                            "end": 5757,
                            "decorators": [],
                            "name": "arrayLength",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 5749,
                              "end": 5757,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 5751,
                                "end": 5757
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 5759,
                          "end": 5763,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 5762,
                            "end": 5763,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 5762,
                              "end": 5763,
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
                  "start": 5764,
                  "end": 5778,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 5766,
                    "end": 5778,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 5773,
                      "end": 5778,
                      "params": [
                        {
                          "type": "TSArrayType",
                          "start": 5774,
                          "end": 5777,
                          "elementType": {
                            "type": "TSTypeReference",
                            "start": 5774,
                            "end": 5775,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 5774,
                              "end": 5775,
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 5766,
                      "end": 5773,
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 5664,
                  "end": 5670,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 5665,
                      "end": 5666,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 5665,
                        "end": 5666,
                        "decorators": [],
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "out": false
                    },
                    {
                      "type": "TSTypeParameter",
                      "start": 5668,
                      "end": 5669,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 5668,
                        "end": 5669,
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
            },
            {
              "type": "MethodDefinition",
              "start": 5785,
              "end": 5997,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 5792,
                "end": 5798,
                "decorators": [],
                "name": "reduce",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": true,
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "start": 5798,
                "end": 5997,
                "async": false,
                "body": null,
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 5805,
                    "end": 5824,
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 5808,
                      "end": 5824,
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "start": 5810,
                        "end": 5824,
                        "exprName": {
                          "type": "Identifier",
                          "start": 5817,
                          "end": 5824,
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 5826,
                    "end": 5873,
                    "decorators": [],
                    "name": "values",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 5832,
                      "end": 5873,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 5834,
                        "end": 5873,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 5850,
                          "end": 5873,
                          "params": [
                            {
                              "type": "TSArrayType",
                              "start": 5851,
                              "end": 5872,
                              "elementType": {
                                "type": "TSTypeReference",
                                "start": 5851,
                                "end": 5870,
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "start": 5867,
                                  "end": 5870,
                                  "params": [
                                    {
                                      "type": "TSTypeReference",
                                      "start": 5868,
                                      "end": 5869,
                                      "typeArguments": null,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 5868,
                                        "end": 5869,
                                        "decorators": [],
                                        "name": "R",
                                        "optional": false,
                                        "typeAnnotation": null
                                      }
                                    }
                                  ]
                                },
                                "typeName": {
                                  "type": "TSQualifiedName",
                                  "start": 5851,
                                  "end": 5867,
                                  "left": {
                                    "type": "Identifier",
                                    "start": 5851,
                                    "end": 5858,
                                    "decorators": [],
                                    "name": "Promise",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "start": 5859,
                                    "end": 5867,
                                    "decorators": [],
                                    "name": "Thenable",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                }
                              }
                            }
                          ]
                        },
                        "typeName": {
                          "type": "TSQualifiedName",
                          "start": 5834,
                          "end": 5850,
                          "left": {
                            "type": "Identifier",
                            "start": 5834,
                            "end": 5841,
                            "decorators": [],
                            "name": "Promise",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 5842,
                            "end": 5850,
                            "decorators": [],
                            "name": "Thenable",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 5875,
                    "end": 5965,
                    "decorators": [],
                    "name": "reducer",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 5882,
                      "end": 5965,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 5884,
                        "end": 5965,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 5885,
                            "end": 5893,
                            "decorators": [],
                            "name": "total",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 5890,
                              "end": 5893,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 5892,
                                "end": 5893,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 5892,
                                  "end": 5893,
                                  "decorators": [],
                                  "name": "U",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            }
                          },
                          {
                            "type": "Identifier",
                            "start": 5895,
                            "end": 5905,
                            "decorators": [],
                            "name": "current",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 5902,
                              "end": 5905,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 5904,
                                "end": 5905,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 5904,
                                  "end": 5905,
                                  "decorators": [],
                                  "name": "R",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            }
                          },
                          {
                            "type": "Identifier",
                            "start": 5907,
                            "end": 5920,
                            "decorators": [],
                            "name": "index",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 5912,
                              "end": 5920,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 5914,
                                "end": 5920
                              }
                            }
                          },
                          {
                            "type": "Identifier",
                            "start": 5922,
                            "end": 5941,
                            "decorators": [],
                            "name": "arrayLength",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 5933,
                              "end": 5941,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 5935,
                                "end": 5941
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 5943,
                          "end": 5965,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 5946,
                            "end": 5965,
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 5962,
                              "end": 5965,
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "start": 5963,
                                  "end": 5964,
                                  "typeArguments": null,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 5963,
                                    "end": 5964,
                                    "decorators": [],
                                    "name": "U",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                }
                              ]
                            },
                            "typeName": {
                              "type": "TSQualifiedName",
                              "start": 5946,
                              "end": 5962,
                              "left": {
                                "type": "Identifier",
                                "start": 5946,
                                "end": 5953,
                                "decorators": [],
                                "name": "Promise",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 5954,
                                "end": 5962,
                                "decorators": [],
                                "name": "Thenable",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          }
                        },
                        "typeParameters": null
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 5967,
                    "end": 5983,
                    "decorators": [],
                    "name": "initialValue",
                    "optional": true,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 5980,
                      "end": 5983,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 5982,
                        "end": 5983,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 5982,
                          "end": 5983,
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
                  "start": 5984,
                  "end": 5996,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 5986,
                    "end": 5996,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 5993,
                      "end": 5996,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 5994,
                          "end": 5995,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 5994,
                            "end": 5995,
                            "decorators": [],
                            "name": "U",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 5986,
                      "end": 5993,
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 5798,
                  "end": 5804,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 5799,
                      "end": 5800,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 5799,
                        "end": 5800,
                        "decorators": [],
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "out": false
                    },
                    {
                      "type": "TSTypeParameter",
                      "start": 5802,
                      "end": 5803,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 5802,
                        "end": 5803,
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
            },
            {
              "type": "MethodDefinition",
              "start": 6002,
              "end": 6196,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 6009,
                "end": 6015,
                "decorators": [],
                "name": "reduce",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": true,
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "start": 6015,
                "end": 6196,
                "async": false,
                "body": null,
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 6022,
                    "end": 6041,
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 6025,
                      "end": 6041,
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "start": 6027,
                        "end": 6041,
                        "exprName": {
                          "type": "Identifier",
                          "start": 6034,
                          "end": 6041,
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 6043,
                    "end": 6090,
                    "decorators": [],
                    "name": "values",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 6049,
                      "end": 6090,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 6051,
                        "end": 6090,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 6067,
                          "end": 6090,
                          "params": [
                            {
                              "type": "TSArrayType",
                              "start": 6068,
                              "end": 6089,
                              "elementType": {
                                "type": "TSTypeReference",
                                "start": 6068,
                                "end": 6087,
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "start": 6084,
                                  "end": 6087,
                                  "params": [
                                    {
                                      "type": "TSTypeReference",
                                      "start": 6085,
                                      "end": 6086,
                                      "typeArguments": null,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 6085,
                                        "end": 6086,
                                        "decorators": [],
                                        "name": "R",
                                        "optional": false,
                                        "typeAnnotation": null
                                      }
                                    }
                                  ]
                                },
                                "typeName": {
                                  "type": "TSQualifiedName",
                                  "start": 6068,
                                  "end": 6084,
                                  "left": {
                                    "type": "Identifier",
                                    "start": 6068,
                                    "end": 6075,
                                    "decorators": [],
                                    "name": "Promise",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "start": 6076,
                                    "end": 6084,
                                    "decorators": [],
                                    "name": "Thenable",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                }
                              }
                            }
                          ]
                        },
                        "typeName": {
                          "type": "TSQualifiedName",
                          "start": 6051,
                          "end": 6067,
                          "left": {
                            "type": "Identifier",
                            "start": 6051,
                            "end": 6058,
                            "decorators": [],
                            "name": "Promise",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 6059,
                            "end": 6067,
                            "decorators": [],
                            "name": "Thenable",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 6092,
                    "end": 6164,
                    "decorators": [],
                    "name": "reducer",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 6099,
                      "end": 6164,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 6101,
                        "end": 6164,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 6102,
                            "end": 6110,
                            "decorators": [],
                            "name": "total",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 6107,
                              "end": 6110,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 6109,
                                "end": 6110,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 6109,
                                  "end": 6110,
                                  "decorators": [],
                                  "name": "U",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            }
                          },
                          {
                            "type": "Identifier",
                            "start": 6112,
                            "end": 6122,
                            "decorators": [],
                            "name": "current",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 6119,
                              "end": 6122,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 6121,
                                "end": 6122,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 6121,
                                  "end": 6122,
                                  "decorators": [],
                                  "name": "R",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            }
                          },
                          {
                            "type": "Identifier",
                            "start": 6124,
                            "end": 6137,
                            "decorators": [],
                            "name": "index",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 6129,
                              "end": 6137,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 6131,
                                "end": 6137
                              }
                            }
                          },
                          {
                            "type": "Identifier",
                            "start": 6139,
                            "end": 6158,
                            "decorators": [],
                            "name": "arrayLength",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 6150,
                              "end": 6158,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 6152,
                                "end": 6158
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 6160,
                          "end": 6164,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 6163,
                            "end": 6164,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 6163,
                              "end": 6164,
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
                    "start": 6166,
                    "end": 6182,
                    "decorators": [],
                    "name": "initialValue",
                    "optional": true,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 6179,
                      "end": 6182,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 6181,
                        "end": 6182,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 6181,
                          "end": 6182,
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
                  "start": 6183,
                  "end": 6195,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 6185,
                    "end": 6195,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 6192,
                      "end": 6195,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 6193,
                          "end": 6194,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 6193,
                            "end": 6194,
                            "decorators": [],
                            "name": "U",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 6185,
                      "end": 6192,
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 6015,
                  "end": 6021,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 6016,
                      "end": 6017,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 6016,
                        "end": 6017,
                        "decorators": [],
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "out": false
                    },
                    {
                      "type": "TSTypeParameter",
                      "start": 6019,
                      "end": 6020,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 6019,
                        "end": 6020,
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
            },
            {
              "type": "MethodDefinition",
              "start": 6202,
              "end": 6396,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 6209,
                "end": 6215,
                "decorators": [],
                "name": "reduce",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": true,
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "start": 6215,
                "end": 6396,
                "async": false,
                "body": null,
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 6222,
                    "end": 6241,
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 6225,
                      "end": 6241,
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "start": 6227,
                        "end": 6241,
                        "exprName": {
                          "type": "Identifier",
                          "start": 6234,
                          "end": 6241,
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 6243,
                    "end": 6272,
                    "decorators": [],
                    "name": "values",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 6249,
                      "end": 6272,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 6251,
                        "end": 6272,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 6267,
                          "end": 6272,
                          "params": [
                            {
                              "type": "TSArrayType",
                              "start": 6268,
                              "end": 6271,
                              "elementType": {
                                "type": "TSTypeReference",
                                "start": 6268,
                                "end": 6269,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 6268,
                                  "end": 6269,
                                  "decorators": [],
                                  "name": "R",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            }
                          ]
                        },
                        "typeName": {
                          "type": "TSQualifiedName",
                          "start": 6251,
                          "end": 6267,
                          "left": {
                            "type": "Identifier",
                            "start": 6251,
                            "end": 6258,
                            "decorators": [],
                            "name": "Promise",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 6259,
                            "end": 6267,
                            "decorators": [],
                            "name": "Thenable",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 6274,
                    "end": 6364,
                    "decorators": [],
                    "name": "reducer",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 6281,
                      "end": 6364,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 6283,
                        "end": 6364,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 6284,
                            "end": 6292,
                            "decorators": [],
                            "name": "total",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 6289,
                              "end": 6292,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 6291,
                                "end": 6292,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 6291,
                                  "end": 6292,
                                  "decorators": [],
                                  "name": "U",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            }
                          },
                          {
                            "type": "Identifier",
                            "start": 6294,
                            "end": 6304,
                            "decorators": [],
                            "name": "current",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 6301,
                              "end": 6304,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 6303,
                                "end": 6304,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 6303,
                                  "end": 6304,
                                  "decorators": [],
                                  "name": "R",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            }
                          },
                          {
                            "type": "Identifier",
                            "start": 6306,
                            "end": 6319,
                            "decorators": [],
                            "name": "index",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 6311,
                              "end": 6319,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 6313,
                                "end": 6319
                              }
                            }
                          },
                          {
                            "type": "Identifier",
                            "start": 6321,
                            "end": 6340,
                            "decorators": [],
                            "name": "arrayLength",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 6332,
                              "end": 6340,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 6334,
                                "end": 6340
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 6342,
                          "end": 6364,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 6345,
                            "end": 6364,
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 6361,
                              "end": 6364,
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "start": 6362,
                                  "end": 6363,
                                  "typeArguments": null,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 6362,
                                    "end": 6363,
                                    "decorators": [],
                                    "name": "U",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                }
                              ]
                            },
                            "typeName": {
                              "type": "TSQualifiedName",
                              "start": 6345,
                              "end": 6361,
                              "left": {
                                "type": "Identifier",
                                "start": 6345,
                                "end": 6352,
                                "decorators": [],
                                "name": "Promise",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 6353,
                                "end": 6361,
                                "decorators": [],
                                "name": "Thenable",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          }
                        },
                        "typeParameters": null
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 6366,
                    "end": 6382,
                    "decorators": [],
                    "name": "initialValue",
                    "optional": true,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 6379,
                      "end": 6382,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 6381,
                        "end": 6382,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 6381,
                          "end": 6382,
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
                  "start": 6383,
                  "end": 6395,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 6385,
                    "end": 6395,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 6392,
                      "end": 6395,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 6393,
                          "end": 6394,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 6393,
                            "end": 6394,
                            "decorators": [],
                            "name": "U",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 6385,
                      "end": 6392,
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 6215,
                  "end": 6221,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 6216,
                      "end": 6217,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 6216,
                        "end": 6217,
                        "decorators": [],
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "out": false
                    },
                    {
                      "type": "TSTypeParameter",
                      "start": 6219,
                      "end": 6220,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 6219,
                        "end": 6220,
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
            },
            {
              "type": "MethodDefinition",
              "start": 6401,
              "end": 6577,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 6408,
                "end": 6414,
                "decorators": [],
                "name": "reduce",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": true,
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "start": 6414,
                "end": 6577,
                "async": false,
                "body": null,
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 6421,
                    "end": 6440,
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 6424,
                      "end": 6440,
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "start": 6426,
                        "end": 6440,
                        "exprName": {
                          "type": "Identifier",
                          "start": 6433,
                          "end": 6440,
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 6442,
                    "end": 6471,
                    "decorators": [],
                    "name": "values",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 6448,
                      "end": 6471,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 6450,
                        "end": 6471,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 6466,
                          "end": 6471,
                          "params": [
                            {
                              "type": "TSArrayType",
                              "start": 6467,
                              "end": 6470,
                              "elementType": {
                                "type": "TSTypeReference",
                                "start": 6467,
                                "end": 6468,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 6467,
                                  "end": 6468,
                                  "decorators": [],
                                  "name": "R",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            }
                          ]
                        },
                        "typeName": {
                          "type": "TSQualifiedName",
                          "start": 6450,
                          "end": 6466,
                          "left": {
                            "type": "Identifier",
                            "start": 6450,
                            "end": 6457,
                            "decorators": [],
                            "name": "Promise",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 6458,
                            "end": 6466,
                            "decorators": [],
                            "name": "Thenable",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 6473,
                    "end": 6545,
                    "decorators": [],
                    "name": "reducer",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 6480,
                      "end": 6545,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 6482,
                        "end": 6545,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 6483,
                            "end": 6491,
                            "decorators": [],
                            "name": "total",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 6488,
                              "end": 6491,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 6490,
                                "end": 6491,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 6490,
                                  "end": 6491,
                                  "decorators": [],
                                  "name": "U",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            }
                          },
                          {
                            "type": "Identifier",
                            "start": 6493,
                            "end": 6503,
                            "decorators": [],
                            "name": "current",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 6500,
                              "end": 6503,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 6502,
                                "end": 6503,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 6502,
                                  "end": 6503,
                                  "decorators": [],
                                  "name": "R",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            }
                          },
                          {
                            "type": "Identifier",
                            "start": 6505,
                            "end": 6518,
                            "decorators": [],
                            "name": "index",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 6510,
                              "end": 6518,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 6512,
                                "end": 6518
                              }
                            }
                          },
                          {
                            "type": "Identifier",
                            "start": 6520,
                            "end": 6539,
                            "decorators": [],
                            "name": "arrayLength",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 6531,
                              "end": 6539,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 6533,
                                "end": 6539
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 6541,
                          "end": 6545,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 6544,
                            "end": 6545,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 6544,
                              "end": 6545,
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
                    "start": 6547,
                    "end": 6563,
                    "decorators": [],
                    "name": "initialValue",
                    "optional": true,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 6560,
                      "end": 6563,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 6562,
                        "end": 6563,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 6562,
                          "end": 6563,
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
                  "start": 6564,
                  "end": 6576,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 6566,
                    "end": 6576,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 6573,
                      "end": 6576,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 6574,
                          "end": 6575,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 6574,
                            "end": 6575,
                            "decorators": [],
                            "name": "U",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 6566,
                      "end": 6573,
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 6414,
                  "end": 6420,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 6415,
                      "end": 6416,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 6415,
                        "end": 6416,
                        "decorators": [],
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "out": false
                    },
                    {
                      "type": "TSTypeParameter",
                      "start": 6418,
                      "end": 6419,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 6418,
                        "end": 6419,
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
            },
            {
              "type": "MethodDefinition",
              "start": 6583,
              "end": 6777,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 6590,
                "end": 6596,
                "decorators": [],
                "name": "reduce",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": true,
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "start": 6596,
                "end": 6777,
                "async": false,
                "body": null,
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 6603,
                    "end": 6622,
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 6606,
                      "end": 6622,
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "start": 6608,
                        "end": 6622,
                        "exprName": {
                          "type": "Identifier",
                          "start": 6615,
                          "end": 6622,
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 6624,
                    "end": 6653,
                    "decorators": [],
                    "name": "values",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 6630,
                      "end": 6653,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 6632,
                        "end": 6653,
                        "elementType": {
                          "type": "TSTypeReference",
                          "start": 6632,
                          "end": 6651,
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 6648,
                            "end": 6651,
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "start": 6649,
                                "end": 6650,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 6649,
                                  "end": 6650,
                                  "decorators": [],
                                  "name": "R",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            ]
                          },
                          "typeName": {
                            "type": "TSQualifiedName",
                            "start": 6632,
                            "end": 6648,
                            "left": {
                              "type": "Identifier",
                              "start": 6632,
                              "end": 6639,
                              "decorators": [],
                              "name": "Promise",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 6640,
                              "end": 6648,
                              "decorators": [],
                              "name": "Thenable",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 6655,
                    "end": 6745,
                    "decorators": [],
                    "name": "reducer",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 6662,
                      "end": 6745,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 6664,
                        "end": 6745,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 6665,
                            "end": 6673,
                            "decorators": [],
                            "name": "total",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 6670,
                              "end": 6673,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 6672,
                                "end": 6673,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 6672,
                                  "end": 6673,
                                  "decorators": [],
                                  "name": "U",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            }
                          },
                          {
                            "type": "Identifier",
                            "start": 6675,
                            "end": 6685,
                            "decorators": [],
                            "name": "current",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 6682,
                              "end": 6685,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 6684,
                                "end": 6685,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 6684,
                                  "end": 6685,
                                  "decorators": [],
                                  "name": "R",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            }
                          },
                          {
                            "type": "Identifier",
                            "start": 6687,
                            "end": 6700,
                            "decorators": [],
                            "name": "index",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 6692,
                              "end": 6700,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 6694,
                                "end": 6700
                              }
                            }
                          },
                          {
                            "type": "Identifier",
                            "start": 6702,
                            "end": 6721,
                            "decorators": [],
                            "name": "arrayLength",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 6713,
                              "end": 6721,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 6715,
                                "end": 6721
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 6723,
                          "end": 6745,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 6726,
                            "end": 6745,
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 6742,
                              "end": 6745,
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "start": 6743,
                                  "end": 6744,
                                  "typeArguments": null,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 6743,
                                    "end": 6744,
                                    "decorators": [],
                                    "name": "U",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                }
                              ]
                            },
                            "typeName": {
                              "type": "TSQualifiedName",
                              "start": 6726,
                              "end": 6742,
                              "left": {
                                "type": "Identifier",
                                "start": 6726,
                                "end": 6733,
                                "decorators": [],
                                "name": "Promise",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 6734,
                                "end": 6742,
                                "decorators": [],
                                "name": "Thenable",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          }
                        },
                        "typeParameters": null
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 6747,
                    "end": 6763,
                    "decorators": [],
                    "name": "initialValue",
                    "optional": true,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 6760,
                      "end": 6763,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 6762,
                        "end": 6763,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 6762,
                          "end": 6763,
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
                  "start": 6764,
                  "end": 6776,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 6766,
                    "end": 6776,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 6773,
                      "end": 6776,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 6774,
                          "end": 6775,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 6774,
                            "end": 6775,
                            "decorators": [],
                            "name": "U",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 6766,
                      "end": 6773,
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 6596,
                  "end": 6602,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 6597,
                      "end": 6598,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 6597,
                        "end": 6598,
                        "decorators": [],
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "out": false
                    },
                    {
                      "type": "TSTypeParameter",
                      "start": 6600,
                      "end": 6601,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 6600,
                        "end": 6601,
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
            },
            {
              "type": "MethodDefinition",
              "start": 6782,
              "end": 6958,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 6789,
                "end": 6795,
                "decorators": [],
                "name": "reduce",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": true,
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "start": 6795,
                "end": 6958,
                "async": false,
                "body": null,
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 6802,
                    "end": 6821,
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 6805,
                      "end": 6821,
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "start": 6807,
                        "end": 6821,
                        "exprName": {
                          "type": "Identifier",
                          "start": 6814,
                          "end": 6821,
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 6823,
                    "end": 6852,
                    "decorators": [],
                    "name": "values",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 6829,
                      "end": 6852,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 6831,
                        "end": 6852,
                        "elementType": {
                          "type": "TSTypeReference",
                          "start": 6831,
                          "end": 6850,
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 6847,
                            "end": 6850,
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "start": 6848,
                                "end": 6849,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 6848,
                                  "end": 6849,
                                  "decorators": [],
                                  "name": "R",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            ]
                          },
                          "typeName": {
                            "type": "TSQualifiedName",
                            "start": 6831,
                            "end": 6847,
                            "left": {
                              "type": "Identifier",
                              "start": 6831,
                              "end": 6838,
                              "decorators": [],
                              "name": "Promise",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 6839,
                              "end": 6847,
                              "decorators": [],
                              "name": "Thenable",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 6854,
                    "end": 6926,
                    "decorators": [],
                    "name": "reducer",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 6861,
                      "end": 6926,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 6863,
                        "end": 6926,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 6864,
                            "end": 6872,
                            "decorators": [],
                            "name": "total",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 6869,
                              "end": 6872,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 6871,
                                "end": 6872,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 6871,
                                  "end": 6872,
                                  "decorators": [],
                                  "name": "U",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            }
                          },
                          {
                            "type": "Identifier",
                            "start": 6874,
                            "end": 6884,
                            "decorators": [],
                            "name": "current",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 6881,
                              "end": 6884,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 6883,
                                "end": 6884,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 6883,
                                  "end": 6884,
                                  "decorators": [],
                                  "name": "R",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            }
                          },
                          {
                            "type": "Identifier",
                            "start": 6886,
                            "end": 6899,
                            "decorators": [],
                            "name": "index",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 6891,
                              "end": 6899,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 6893,
                                "end": 6899
                              }
                            }
                          },
                          {
                            "type": "Identifier",
                            "start": 6901,
                            "end": 6920,
                            "decorators": [],
                            "name": "arrayLength",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 6912,
                              "end": 6920,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 6914,
                                "end": 6920
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 6922,
                          "end": 6926,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 6925,
                            "end": 6926,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 6925,
                              "end": 6926,
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
                    "start": 6928,
                    "end": 6944,
                    "decorators": [],
                    "name": "initialValue",
                    "optional": true,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 6941,
                      "end": 6944,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 6943,
                        "end": 6944,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 6943,
                          "end": 6944,
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
                  "start": 6945,
                  "end": 6957,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 6947,
                    "end": 6957,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 6954,
                      "end": 6957,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 6955,
                          "end": 6956,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 6955,
                            "end": 6956,
                            "decorators": [],
                            "name": "U",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 6947,
                      "end": 6954,
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 6795,
                  "end": 6801,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 6796,
                      "end": 6797,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 6796,
                        "end": 6797,
                        "decorators": [],
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "out": false
                    },
                    {
                      "type": "TSTypeParameter",
                      "start": 6799,
                      "end": 6800,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 6799,
                        "end": 6800,
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
            },
            {
              "type": "MethodDefinition",
              "start": 6964,
              "end": 7140,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 6971,
                "end": 6977,
                "decorators": [],
                "name": "reduce",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": true,
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "start": 6977,
                "end": 7140,
                "async": false,
                "body": null,
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 6984,
                    "end": 7003,
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 6987,
                      "end": 7003,
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "start": 6989,
                        "end": 7003,
                        "exprName": {
                          "type": "Identifier",
                          "start": 6996,
                          "end": 7003,
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 7005,
                    "end": 7016,
                    "decorators": [],
                    "name": "values",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 7011,
                      "end": 7016,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 7013,
                        "end": 7016,
                        "elementType": {
                          "type": "TSTypeReference",
                          "start": 7013,
                          "end": 7014,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 7013,
                            "end": 7014,
                            "decorators": [],
                            "name": "R",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 7018,
                    "end": 7108,
                    "decorators": [],
                    "name": "reducer",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 7025,
                      "end": 7108,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 7027,
                        "end": 7108,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 7028,
                            "end": 7036,
                            "decorators": [],
                            "name": "total",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 7033,
                              "end": 7036,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 7035,
                                "end": 7036,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 7035,
                                  "end": 7036,
                                  "decorators": [],
                                  "name": "U",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            }
                          },
                          {
                            "type": "Identifier",
                            "start": 7038,
                            "end": 7048,
                            "decorators": [],
                            "name": "current",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 7045,
                              "end": 7048,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 7047,
                                "end": 7048,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 7047,
                                  "end": 7048,
                                  "decorators": [],
                                  "name": "R",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            }
                          },
                          {
                            "type": "Identifier",
                            "start": 7050,
                            "end": 7063,
                            "decorators": [],
                            "name": "index",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 7055,
                              "end": 7063,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 7057,
                                "end": 7063
                              }
                            }
                          },
                          {
                            "type": "Identifier",
                            "start": 7065,
                            "end": 7084,
                            "decorators": [],
                            "name": "arrayLength",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 7076,
                              "end": 7084,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 7078,
                                "end": 7084
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 7086,
                          "end": 7108,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 7089,
                            "end": 7108,
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 7105,
                              "end": 7108,
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "start": 7106,
                                  "end": 7107,
                                  "typeArguments": null,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 7106,
                                    "end": 7107,
                                    "decorators": [],
                                    "name": "U",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                }
                              ]
                            },
                            "typeName": {
                              "type": "TSQualifiedName",
                              "start": 7089,
                              "end": 7105,
                              "left": {
                                "type": "Identifier",
                                "start": 7089,
                                "end": 7096,
                                "decorators": [],
                                "name": "Promise",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 7097,
                                "end": 7105,
                                "decorators": [],
                                "name": "Thenable",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          }
                        },
                        "typeParameters": null
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 7110,
                    "end": 7126,
                    "decorators": [],
                    "name": "initialValue",
                    "optional": true,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 7123,
                      "end": 7126,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 7125,
                        "end": 7126,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 7125,
                          "end": 7126,
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
                  "start": 7127,
                  "end": 7139,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 7129,
                    "end": 7139,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 7136,
                      "end": 7139,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 7137,
                          "end": 7138,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 7137,
                            "end": 7138,
                            "decorators": [],
                            "name": "U",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 7129,
                      "end": 7136,
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 6977,
                  "end": 6983,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 6978,
                      "end": 6979,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 6978,
                        "end": 6979,
                        "decorators": [],
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "out": false
                    },
                    {
                      "type": "TSTypeParameter",
                      "start": 6981,
                      "end": 6982,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 6981,
                        "end": 6982,
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
            },
            {
              "type": "MethodDefinition",
              "start": 7145,
              "end": 7303,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 7152,
                "end": 7158,
                "decorators": [],
                "name": "reduce",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": true,
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "start": 7158,
                "end": 7303,
                "async": false,
                "body": null,
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 7165,
                    "end": 7184,
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 7168,
                      "end": 7184,
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "start": 7170,
                        "end": 7184,
                        "exprName": {
                          "type": "Identifier",
                          "start": 7177,
                          "end": 7184,
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 7186,
                    "end": 7197,
                    "decorators": [],
                    "name": "values",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 7192,
                      "end": 7197,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 7194,
                        "end": 7197,
                        "elementType": {
                          "type": "TSTypeReference",
                          "start": 7194,
                          "end": 7195,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 7194,
                            "end": 7195,
                            "decorators": [],
                            "name": "R",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 7199,
                    "end": 7271,
                    "decorators": [],
                    "name": "reducer",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 7206,
                      "end": 7271,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 7208,
                        "end": 7271,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 7209,
                            "end": 7217,
                            "decorators": [],
                            "name": "total",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 7214,
                              "end": 7217,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 7216,
                                "end": 7217,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 7216,
                                  "end": 7217,
                                  "decorators": [],
                                  "name": "U",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            }
                          },
                          {
                            "type": "Identifier",
                            "start": 7219,
                            "end": 7229,
                            "decorators": [],
                            "name": "current",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 7226,
                              "end": 7229,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 7228,
                                "end": 7229,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 7228,
                                  "end": 7229,
                                  "decorators": [],
                                  "name": "R",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            }
                          },
                          {
                            "type": "Identifier",
                            "start": 7231,
                            "end": 7244,
                            "decorators": [],
                            "name": "index",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 7236,
                              "end": 7244,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 7238,
                                "end": 7244
                              }
                            }
                          },
                          {
                            "type": "Identifier",
                            "start": 7246,
                            "end": 7265,
                            "decorators": [],
                            "name": "arrayLength",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 7257,
                              "end": 7265,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 7259,
                                "end": 7265
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 7267,
                          "end": 7271,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 7270,
                            "end": 7271,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 7270,
                              "end": 7271,
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
                    "start": 7273,
                    "end": 7289,
                    "decorators": [],
                    "name": "initialValue",
                    "optional": true,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 7286,
                      "end": 7289,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 7288,
                        "end": 7289,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 7288,
                          "end": 7289,
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
                  "start": 7290,
                  "end": 7302,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 7292,
                    "end": 7302,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 7299,
                      "end": 7302,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 7300,
                          "end": 7301,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 7300,
                            "end": 7301,
                            "decorators": [],
                            "name": "U",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 7292,
                      "end": 7299,
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 7158,
                  "end": 7164,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 7159,
                      "end": 7160,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 7159,
                        "end": 7160,
                        "decorators": [],
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "out": false
                    },
                    {
                      "type": "TSTypeParameter",
                      "start": 7162,
                      "end": 7163,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 7162,
                        "end": 7163,
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
            },
            {
              "type": "MethodDefinition",
              "start": 7309,
              "end": 7496,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 7316,
                "end": 7322,
                "decorators": [],
                "name": "filter",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": true,
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "start": 7322,
                "end": 7496,
                "async": false,
                "body": null,
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 7326,
                    "end": 7345,
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 7329,
                      "end": 7345,
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "start": 7331,
                        "end": 7345,
                        "exprName": {
                          "type": "Identifier",
                          "start": 7338,
                          "end": 7345,
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 7347,
                    "end": 7394,
                    "decorators": [],
                    "name": "values",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 7353,
                      "end": 7394,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 7355,
                        "end": 7394,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 7371,
                          "end": 7394,
                          "params": [
                            {
                              "type": "TSArrayType",
                              "start": 7372,
                              "end": 7393,
                              "elementType": {
                                "type": "TSTypeReference",
                                "start": 7372,
                                "end": 7391,
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "start": 7388,
                                  "end": 7391,
                                  "params": [
                                    {
                                      "type": "TSTypeReference",
                                      "start": 7389,
                                      "end": 7390,
                                      "typeArguments": null,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 7389,
                                        "end": 7390,
                                        "decorators": [],
                                        "name": "R",
                                        "optional": false,
                                        "typeAnnotation": null
                                      }
                                    }
                                  ]
                                },
                                "typeName": {
                                  "type": "TSQualifiedName",
                                  "start": 7372,
                                  "end": 7388,
                                  "left": {
                                    "type": "Identifier",
                                    "start": 7372,
                                    "end": 7379,
                                    "decorators": [],
                                    "name": "Promise",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "start": 7380,
                                    "end": 7388,
                                    "decorators": [],
                                    "name": "Thenable",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                }
                              }
                            }
                          ]
                        },
                        "typeName": {
                          "type": "TSQualifiedName",
                          "start": 7355,
                          "end": 7371,
                          "left": {
                            "type": "Identifier",
                            "start": 7355,
                            "end": 7362,
                            "decorators": [],
                            "name": "Promise",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 7363,
                            "end": 7371,
                            "decorators": [],
                            "name": "Thenable",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 7396,
                    "end": 7480,
                    "decorators": [],
                    "name": "filterer",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 7404,
                      "end": 7480,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 7406,
                        "end": 7480,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 7407,
                            "end": 7414,
                            "decorators": [],
                            "name": "item",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 7411,
                              "end": 7414,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 7413,
                                "end": 7414,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 7413,
                                  "end": 7414,
                                  "decorators": [],
                                  "name": "R",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            }
                          },
                          {
                            "type": "Identifier",
                            "start": 7416,
                            "end": 7429,
                            "decorators": [],
                            "name": "index",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 7421,
                              "end": 7429,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 7423,
                                "end": 7429
                              }
                            }
                          },
                          {
                            "type": "Identifier",
                            "start": 7431,
                            "end": 7450,
                            "decorators": [],
                            "name": "arrayLength",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 7442,
                              "end": 7450,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 7444,
                                "end": 7450
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 7452,
                          "end": 7480,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 7455,
                            "end": 7480,
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 7471,
                              "end": 7480,
                              "params": [
                                {
                                  "type": "TSBooleanKeyword",
                                  "start": 7472,
                                  "end": 7479
                                }
                              ]
                            },
                            "typeName": {
                              "type": "TSQualifiedName",
                              "start": 7455,
                              "end": 7471,
                              "left": {
                                "type": "Identifier",
                                "start": 7455,
                                "end": 7462,
                                "decorators": [],
                                "name": "Promise",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 7463,
                                "end": 7471,
                                "decorators": [],
                                "name": "Thenable",
                                "optional": false,
                                "typeAnnotation": null
                              }
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
                  "start": 7481,
                  "end": 7495,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 7483,
                    "end": 7495,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 7490,
                      "end": 7495,
                      "params": [
                        {
                          "type": "TSArrayType",
                          "start": 7491,
                          "end": 7494,
                          "elementType": {
                            "type": "TSTypeReference",
                            "start": 7491,
                            "end": 7492,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 7491,
                              "end": 7492,
                              "decorators": [],
                              "name": "R",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 7483,
                      "end": 7490,
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 7322,
                  "end": 7325,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 7323,
                      "end": 7324,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 7323,
                        "end": 7324,
                        "decorators": [],
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "out": false
                    }
                  ]
                }
              }
            },
            {
              "type": "MethodDefinition",
              "start": 7501,
              "end": 7670,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 7508,
                "end": 7514,
                "decorators": [],
                "name": "filter",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": true,
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "start": 7514,
                "end": 7670,
                "async": false,
                "body": null,
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 7518,
                    "end": 7537,
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 7521,
                      "end": 7537,
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "start": 7523,
                        "end": 7537,
                        "exprName": {
                          "type": "Identifier",
                          "start": 7530,
                          "end": 7537,
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 7539,
                    "end": 7586,
                    "decorators": [],
                    "name": "values",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 7545,
                      "end": 7586,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 7547,
                        "end": 7586,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 7563,
                          "end": 7586,
                          "params": [
                            {
                              "type": "TSArrayType",
                              "start": 7564,
                              "end": 7585,
                              "elementType": {
                                "type": "TSTypeReference",
                                "start": 7564,
                                "end": 7583,
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "start": 7580,
                                  "end": 7583,
                                  "params": [
                                    {
                                      "type": "TSTypeReference",
                                      "start": 7581,
                                      "end": 7582,
                                      "typeArguments": null,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 7581,
                                        "end": 7582,
                                        "decorators": [],
                                        "name": "R",
                                        "optional": false,
                                        "typeAnnotation": null
                                      }
                                    }
                                  ]
                                },
                                "typeName": {
                                  "type": "TSQualifiedName",
                                  "start": 7564,
                                  "end": 7580,
                                  "left": {
                                    "type": "Identifier",
                                    "start": 7564,
                                    "end": 7571,
                                    "decorators": [],
                                    "name": "Promise",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "start": 7572,
                                    "end": 7580,
                                    "decorators": [],
                                    "name": "Thenable",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                }
                              }
                            }
                          ]
                        },
                        "typeName": {
                          "type": "TSQualifiedName",
                          "start": 7547,
                          "end": 7563,
                          "left": {
                            "type": "Identifier",
                            "start": 7547,
                            "end": 7554,
                            "decorators": [],
                            "name": "Promise",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 7555,
                            "end": 7563,
                            "decorators": [],
                            "name": "Thenable",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 7588,
                    "end": 7654,
                    "decorators": [],
                    "name": "filterer",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 7596,
                      "end": 7654,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 7598,
                        "end": 7654,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 7599,
                            "end": 7606,
                            "decorators": [],
                            "name": "item",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 7603,
                              "end": 7606,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 7605,
                                "end": 7606,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 7605,
                                  "end": 7606,
                                  "decorators": [],
                                  "name": "R",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            }
                          },
                          {
                            "type": "Identifier",
                            "start": 7608,
                            "end": 7621,
                            "decorators": [],
                            "name": "index",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 7613,
                              "end": 7621,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 7615,
                                "end": 7621
                              }
                            }
                          },
                          {
                            "type": "Identifier",
                            "start": 7623,
                            "end": 7642,
                            "decorators": [],
                            "name": "arrayLength",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 7634,
                              "end": 7642,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 7636,
                                "end": 7642
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 7644,
                          "end": 7654,
                          "typeAnnotation": {
                            "type": "TSBooleanKeyword",
                            "start": 7647,
                            "end": 7654
                          }
                        },
                        "typeParameters": null
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 7655,
                  "end": 7669,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 7657,
                    "end": 7669,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 7664,
                      "end": 7669,
                      "params": [
                        {
                          "type": "TSArrayType",
                          "start": 7665,
                          "end": 7668,
                          "elementType": {
                            "type": "TSTypeReference",
                            "start": 7665,
                            "end": 7666,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 7665,
                              "end": 7666,
                              "decorators": [],
                              "name": "R",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 7657,
                      "end": 7664,
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 7514,
                  "end": 7517,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 7515,
                      "end": 7516,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 7515,
                        "end": 7516,
                        "decorators": [],
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "out": false
                    }
                  ]
                }
              }
            },
            {
              "type": "MethodDefinition",
              "start": 7675,
              "end": 7844,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 7682,
                "end": 7688,
                "decorators": [],
                "name": "filter",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": true,
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "start": 7688,
                "end": 7844,
                "async": false,
                "body": null,
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 7692,
                    "end": 7711,
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 7695,
                      "end": 7711,
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "start": 7697,
                        "end": 7711,
                        "exprName": {
                          "type": "Identifier",
                          "start": 7704,
                          "end": 7711,
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 7713,
                    "end": 7742,
                    "decorators": [],
                    "name": "values",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 7719,
                      "end": 7742,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 7721,
                        "end": 7742,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 7737,
                          "end": 7742,
                          "params": [
                            {
                              "type": "TSArrayType",
                              "start": 7738,
                              "end": 7741,
                              "elementType": {
                                "type": "TSTypeReference",
                                "start": 7738,
                                "end": 7739,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 7738,
                                  "end": 7739,
                                  "decorators": [],
                                  "name": "R",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            }
                          ]
                        },
                        "typeName": {
                          "type": "TSQualifiedName",
                          "start": 7721,
                          "end": 7737,
                          "left": {
                            "type": "Identifier",
                            "start": 7721,
                            "end": 7728,
                            "decorators": [],
                            "name": "Promise",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 7729,
                            "end": 7737,
                            "decorators": [],
                            "name": "Thenable",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 7744,
                    "end": 7828,
                    "decorators": [],
                    "name": "filterer",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 7752,
                      "end": 7828,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 7754,
                        "end": 7828,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 7755,
                            "end": 7762,
                            "decorators": [],
                            "name": "item",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 7759,
                              "end": 7762,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 7761,
                                "end": 7762,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 7761,
                                  "end": 7762,
                                  "decorators": [],
                                  "name": "R",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            }
                          },
                          {
                            "type": "Identifier",
                            "start": 7764,
                            "end": 7777,
                            "decorators": [],
                            "name": "index",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 7769,
                              "end": 7777,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 7771,
                                "end": 7777
                              }
                            }
                          },
                          {
                            "type": "Identifier",
                            "start": 7779,
                            "end": 7798,
                            "decorators": [],
                            "name": "arrayLength",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 7790,
                              "end": 7798,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 7792,
                                "end": 7798
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 7800,
                          "end": 7828,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 7803,
                            "end": 7828,
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 7819,
                              "end": 7828,
                              "params": [
                                {
                                  "type": "TSBooleanKeyword",
                                  "start": 7820,
                                  "end": 7827
                                }
                              ]
                            },
                            "typeName": {
                              "type": "TSQualifiedName",
                              "start": 7803,
                              "end": 7819,
                              "left": {
                                "type": "Identifier",
                                "start": 7803,
                                "end": 7810,
                                "decorators": [],
                                "name": "Promise",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 7811,
                                "end": 7819,
                                "decorators": [],
                                "name": "Thenable",
                                "optional": false,
                                "typeAnnotation": null
                              }
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
                  "start": 7829,
                  "end": 7843,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 7831,
                    "end": 7843,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 7838,
                      "end": 7843,
                      "params": [
                        {
                          "type": "TSArrayType",
                          "start": 7839,
                          "end": 7842,
                          "elementType": {
                            "type": "TSTypeReference",
                            "start": 7839,
                            "end": 7840,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 7839,
                              "end": 7840,
                              "decorators": [],
                              "name": "R",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 7831,
                      "end": 7838,
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 7688,
                  "end": 7691,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 7689,
                      "end": 7690,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 7689,
                        "end": 7690,
                        "decorators": [],
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "out": false
                    }
                  ]
                }
              }
            },
            {
              "type": "MethodDefinition",
              "start": 7849,
              "end": 8000,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 7856,
                "end": 7862,
                "decorators": [],
                "name": "filter",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": true,
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "start": 7862,
                "end": 8000,
                "async": false,
                "body": null,
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 7866,
                    "end": 7885,
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 7869,
                      "end": 7885,
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "start": 7871,
                        "end": 7885,
                        "exprName": {
                          "type": "Identifier",
                          "start": 7878,
                          "end": 7885,
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 7887,
                    "end": 7916,
                    "decorators": [],
                    "name": "values",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 7893,
                      "end": 7916,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 7895,
                        "end": 7916,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 7911,
                          "end": 7916,
                          "params": [
                            {
                              "type": "TSArrayType",
                              "start": 7912,
                              "end": 7915,
                              "elementType": {
                                "type": "TSTypeReference",
                                "start": 7912,
                                "end": 7913,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 7912,
                                  "end": 7913,
                                  "decorators": [],
                                  "name": "R",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            }
                          ]
                        },
                        "typeName": {
                          "type": "TSQualifiedName",
                          "start": 7895,
                          "end": 7911,
                          "left": {
                            "type": "Identifier",
                            "start": 7895,
                            "end": 7902,
                            "decorators": [],
                            "name": "Promise",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 7903,
                            "end": 7911,
                            "decorators": [],
                            "name": "Thenable",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 7918,
                    "end": 7984,
                    "decorators": [],
                    "name": "filterer",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 7926,
                      "end": 7984,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 7928,
                        "end": 7984,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 7929,
                            "end": 7936,
                            "decorators": [],
                            "name": "item",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 7933,
                              "end": 7936,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 7935,
                                "end": 7936,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 7935,
                                  "end": 7936,
                                  "decorators": [],
                                  "name": "R",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            }
                          },
                          {
                            "type": "Identifier",
                            "start": 7938,
                            "end": 7951,
                            "decorators": [],
                            "name": "index",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 7943,
                              "end": 7951,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 7945,
                                "end": 7951
                              }
                            }
                          },
                          {
                            "type": "Identifier",
                            "start": 7953,
                            "end": 7972,
                            "decorators": [],
                            "name": "arrayLength",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 7964,
                              "end": 7972,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 7966,
                                "end": 7972
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 7974,
                          "end": 7984,
                          "typeAnnotation": {
                            "type": "TSBooleanKeyword",
                            "start": 7977,
                            "end": 7984
                          }
                        },
                        "typeParameters": null
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 7985,
                  "end": 7999,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 7987,
                    "end": 7999,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 7994,
                      "end": 7999,
                      "params": [
                        {
                          "type": "TSArrayType",
                          "start": 7995,
                          "end": 7998,
                          "elementType": {
                            "type": "TSTypeReference",
                            "start": 7995,
                            "end": 7996,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 7995,
                              "end": 7996,
                              "decorators": [],
                              "name": "R",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 7987,
                      "end": 7994,
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 7862,
                  "end": 7865,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 7863,
                      "end": 7864,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 7863,
                        "end": 7864,
                        "decorators": [],
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "out": false
                    }
                  ]
                }
              }
            },
            {
              "type": "MethodDefinition",
              "start": 8005,
              "end": 8174,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 8012,
                "end": 8018,
                "decorators": [],
                "name": "filter",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": true,
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "start": 8018,
                "end": 8174,
                "async": false,
                "body": null,
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 8022,
                    "end": 8041,
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 8025,
                      "end": 8041,
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "start": 8027,
                        "end": 8041,
                        "exprName": {
                          "type": "Identifier",
                          "start": 8034,
                          "end": 8041,
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 8043,
                    "end": 8072,
                    "decorators": [],
                    "name": "values",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 8049,
                      "end": 8072,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 8051,
                        "end": 8072,
                        "elementType": {
                          "type": "TSTypeReference",
                          "start": 8051,
                          "end": 8070,
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 8067,
                            "end": 8070,
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "start": 8068,
                                "end": 8069,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 8068,
                                  "end": 8069,
                                  "decorators": [],
                                  "name": "R",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            ]
                          },
                          "typeName": {
                            "type": "TSQualifiedName",
                            "start": 8051,
                            "end": 8067,
                            "left": {
                              "type": "Identifier",
                              "start": 8051,
                              "end": 8058,
                              "decorators": [],
                              "name": "Promise",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 8059,
                              "end": 8067,
                              "decorators": [],
                              "name": "Thenable",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 8074,
                    "end": 8158,
                    "decorators": [],
                    "name": "filterer",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 8082,
                      "end": 8158,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 8084,
                        "end": 8158,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 8085,
                            "end": 8092,
                            "decorators": [],
                            "name": "item",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 8089,
                              "end": 8092,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 8091,
                                "end": 8092,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 8091,
                                  "end": 8092,
                                  "decorators": [],
                                  "name": "R",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            }
                          },
                          {
                            "type": "Identifier",
                            "start": 8094,
                            "end": 8107,
                            "decorators": [],
                            "name": "index",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 8099,
                              "end": 8107,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 8101,
                                "end": 8107
                              }
                            }
                          },
                          {
                            "type": "Identifier",
                            "start": 8109,
                            "end": 8128,
                            "decorators": [],
                            "name": "arrayLength",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 8120,
                              "end": 8128,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 8122,
                                "end": 8128
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 8130,
                          "end": 8158,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 8133,
                            "end": 8158,
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 8149,
                              "end": 8158,
                              "params": [
                                {
                                  "type": "TSBooleanKeyword",
                                  "start": 8150,
                                  "end": 8157
                                }
                              ]
                            },
                            "typeName": {
                              "type": "TSQualifiedName",
                              "start": 8133,
                              "end": 8149,
                              "left": {
                                "type": "Identifier",
                                "start": 8133,
                                "end": 8140,
                                "decorators": [],
                                "name": "Promise",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 8141,
                                "end": 8149,
                                "decorators": [],
                                "name": "Thenable",
                                "optional": false,
                                "typeAnnotation": null
                              }
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
                  "start": 8159,
                  "end": 8173,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 8161,
                    "end": 8173,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 8168,
                      "end": 8173,
                      "params": [
                        {
                          "type": "TSArrayType",
                          "start": 8169,
                          "end": 8172,
                          "elementType": {
                            "type": "TSTypeReference",
                            "start": 8169,
                            "end": 8170,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 8169,
                              "end": 8170,
                              "decorators": [],
                              "name": "R",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 8161,
                      "end": 8168,
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 8018,
                  "end": 8021,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 8019,
                      "end": 8020,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 8019,
                        "end": 8020,
                        "decorators": [],
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "out": false
                    }
                  ]
                }
              }
            },
            {
              "type": "MethodDefinition",
              "start": 8179,
              "end": 8330,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 8186,
                "end": 8192,
                "decorators": [],
                "name": "filter",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": true,
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "start": 8192,
                "end": 8330,
                "async": false,
                "body": null,
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 8196,
                    "end": 8215,
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 8199,
                      "end": 8215,
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "start": 8201,
                        "end": 8215,
                        "exprName": {
                          "type": "Identifier",
                          "start": 8208,
                          "end": 8215,
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 8217,
                    "end": 8246,
                    "decorators": [],
                    "name": "values",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 8223,
                      "end": 8246,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 8225,
                        "end": 8246,
                        "elementType": {
                          "type": "TSTypeReference",
                          "start": 8225,
                          "end": 8244,
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 8241,
                            "end": 8244,
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "start": 8242,
                                "end": 8243,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 8242,
                                  "end": 8243,
                                  "decorators": [],
                                  "name": "R",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            ]
                          },
                          "typeName": {
                            "type": "TSQualifiedName",
                            "start": 8225,
                            "end": 8241,
                            "left": {
                              "type": "Identifier",
                              "start": 8225,
                              "end": 8232,
                              "decorators": [],
                              "name": "Promise",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 8233,
                              "end": 8241,
                              "decorators": [],
                              "name": "Thenable",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 8248,
                    "end": 8314,
                    "decorators": [],
                    "name": "filterer",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 8256,
                      "end": 8314,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 8258,
                        "end": 8314,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 8259,
                            "end": 8266,
                            "decorators": [],
                            "name": "item",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 8263,
                              "end": 8266,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 8265,
                                "end": 8266,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 8265,
                                  "end": 8266,
                                  "decorators": [],
                                  "name": "R",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            }
                          },
                          {
                            "type": "Identifier",
                            "start": 8268,
                            "end": 8281,
                            "decorators": [],
                            "name": "index",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 8273,
                              "end": 8281,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 8275,
                                "end": 8281
                              }
                            }
                          },
                          {
                            "type": "Identifier",
                            "start": 8283,
                            "end": 8302,
                            "decorators": [],
                            "name": "arrayLength",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 8294,
                              "end": 8302,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 8296,
                                "end": 8302
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 8304,
                          "end": 8314,
                          "typeAnnotation": {
                            "type": "TSBooleanKeyword",
                            "start": 8307,
                            "end": 8314
                          }
                        },
                        "typeParameters": null
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 8315,
                  "end": 8329,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 8317,
                    "end": 8329,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 8324,
                      "end": 8329,
                      "params": [
                        {
                          "type": "TSArrayType",
                          "start": 8325,
                          "end": 8328,
                          "elementType": {
                            "type": "TSTypeReference",
                            "start": 8325,
                            "end": 8326,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 8325,
                              "end": 8326,
                              "decorators": [],
                              "name": "R",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 8317,
                      "end": 8324,
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 8192,
                  "end": 8195,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 8193,
                      "end": 8194,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 8193,
                        "end": 8194,
                        "decorators": [],
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "out": false
                    }
                  ]
                }
              }
            },
            {
              "type": "MethodDefinition",
              "start": 8335,
              "end": 8486,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 8342,
                "end": 8348,
                "decorators": [],
                "name": "filter",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": true,
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "start": 8348,
                "end": 8486,
                "async": false,
                "body": null,
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 8352,
                    "end": 8371,
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 8355,
                      "end": 8371,
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "start": 8357,
                        "end": 8371,
                        "exprName": {
                          "type": "Identifier",
                          "start": 8364,
                          "end": 8371,
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 8373,
                    "end": 8384,
                    "decorators": [],
                    "name": "values",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 8379,
                      "end": 8384,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 8381,
                        "end": 8384,
                        "elementType": {
                          "type": "TSTypeReference",
                          "start": 8381,
                          "end": 8382,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 8381,
                            "end": 8382,
                            "decorators": [],
                            "name": "R",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 8386,
                    "end": 8470,
                    "decorators": [],
                    "name": "filterer",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 8394,
                      "end": 8470,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 8396,
                        "end": 8470,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 8397,
                            "end": 8404,
                            "decorators": [],
                            "name": "item",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 8401,
                              "end": 8404,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 8403,
                                "end": 8404,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 8403,
                                  "end": 8404,
                                  "decorators": [],
                                  "name": "R",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            }
                          },
                          {
                            "type": "Identifier",
                            "start": 8406,
                            "end": 8419,
                            "decorators": [],
                            "name": "index",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 8411,
                              "end": 8419,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 8413,
                                "end": 8419
                              }
                            }
                          },
                          {
                            "type": "Identifier",
                            "start": 8421,
                            "end": 8440,
                            "decorators": [],
                            "name": "arrayLength",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 8432,
                              "end": 8440,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 8434,
                                "end": 8440
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 8442,
                          "end": 8470,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 8445,
                            "end": 8470,
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 8461,
                              "end": 8470,
                              "params": [
                                {
                                  "type": "TSBooleanKeyword",
                                  "start": 8462,
                                  "end": 8469
                                }
                              ]
                            },
                            "typeName": {
                              "type": "TSQualifiedName",
                              "start": 8445,
                              "end": 8461,
                              "left": {
                                "type": "Identifier",
                                "start": 8445,
                                "end": 8452,
                                "decorators": [],
                                "name": "Promise",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 8453,
                                "end": 8461,
                                "decorators": [],
                                "name": "Thenable",
                                "optional": false,
                                "typeAnnotation": null
                              }
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
                  "start": 8471,
                  "end": 8485,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 8473,
                    "end": 8485,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 8480,
                      "end": 8485,
                      "params": [
                        {
                          "type": "TSArrayType",
                          "start": 8481,
                          "end": 8484,
                          "elementType": {
                            "type": "TSTypeReference",
                            "start": 8481,
                            "end": 8482,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 8481,
                              "end": 8482,
                              "decorators": [],
                              "name": "R",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 8473,
                      "end": 8480,
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 8348,
                  "end": 8351,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 8349,
                      "end": 8350,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 8349,
                        "end": 8350,
                        "decorators": [],
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "out": false
                    }
                  ]
                }
              }
            },
            {
              "type": "MethodDefinition",
              "start": 8491,
              "end": 8624,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 8498,
                "end": 8504,
                "decorators": [],
                "name": "filter",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": true,
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "start": 8504,
                "end": 8624,
                "async": false,
                "body": null,
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 8508,
                    "end": 8527,
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 8511,
                      "end": 8527,
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "start": 8513,
                        "end": 8527,
                        "exprName": {
                          "type": "Identifier",
                          "start": 8520,
                          "end": 8527,
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 8529,
                    "end": 8540,
                    "decorators": [],
                    "name": "values",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 8535,
                      "end": 8540,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 8537,
                        "end": 8540,
                        "elementType": {
                          "type": "TSTypeReference",
                          "start": 8537,
                          "end": 8538,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 8537,
                            "end": 8538,
                            "decorators": [],
                            "name": "R",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 8542,
                    "end": 8608,
                    "decorators": [],
                    "name": "filterer",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 8550,
                      "end": 8608,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 8552,
                        "end": 8608,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 8553,
                            "end": 8560,
                            "decorators": [],
                            "name": "item",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 8557,
                              "end": 8560,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 8559,
                                "end": 8560,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 8559,
                                  "end": 8560,
                                  "decorators": [],
                                  "name": "R",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            }
                          },
                          {
                            "type": "Identifier",
                            "start": 8562,
                            "end": 8575,
                            "decorators": [],
                            "name": "index",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 8567,
                              "end": 8575,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 8569,
                                "end": 8575
                              }
                            }
                          },
                          {
                            "type": "Identifier",
                            "start": 8577,
                            "end": 8596,
                            "decorators": [],
                            "name": "arrayLength",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 8588,
                              "end": 8596,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 8590,
                                "end": 8596
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 8598,
                          "end": 8608,
                          "typeAnnotation": {
                            "type": "TSBooleanKeyword",
                            "start": 8601,
                            "end": 8608
                          }
                        },
                        "typeParameters": null
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 8609,
                  "end": 8623,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 8611,
                    "end": 8623,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 8618,
                      "end": 8623,
                      "params": [
                        {
                          "type": "TSArrayType",
                          "start": 8619,
                          "end": 8622,
                          "elementType": {
                            "type": "TSTypeReference",
                            "start": 8619,
                            "end": 8620,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 8619,
                              "end": 8620,
                              "decorators": [],
                              "name": "R",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 8611,
                      "end": 8618,
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 8504,
                  "end": 8507,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 8505,
                      "end": 8506,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 8505,
                        "end": 8506,
                        "decorators": [],
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "out": false
                    }
                  ]
                }
              }
            }
          ]
        },
        "declare": true,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 252,
          "end": 259,
          "decorators": [],
          "name": "Promise",
          "optional": false,
          "typeAnnotation": null
        },
        "implements": [
          {
            "type": "TSClassImplements",
            "start": 274,
            "end": 293,
            "expression": {
              "type": "MemberExpression",
              "start": 274,
              "end": 290,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 274,
                "end": 281,
                "decorators": [],
                "name": "Promise",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 282,
                "end": 290,
                "decorators": [],
                "name": "Thenable",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 290,
              "end": 293,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 291,
                  "end": 292,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 291,
                    "end": 292,
                    "decorators": [],
                    "name": "R",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            }
          }
        ],
        "superClass": null,
        "superTypeArguments": null,
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 259,
          "end": 262,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 260,
              "end": 261,
              "const": false,
              "constraint": null,
              "default": null,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 260,
                "end": 261,
                "decorators": [],
                "name": "R",
                "optional": false,
                "typeAnnotation": null
              },
              "out": false
            }
          ]
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 8628,
      "end": 9080,
      "attributes": [],
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 8635,
        "end": 9080,
        "body": {
          "type": "TSModuleBlock",
          "start": 8658,
          "end": 9080,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 8661,
              "end": 9077,
              "attributes": [],
              "declaration": {
                "type": "TSInterfaceDeclaration",
                "start": 8668,
                "end": 9077,
                "body": {
                  "type": "TSInterfaceBody",
                  "start": 8690,
                  "end": 9077,
                  "body": [
                    {
                      "type": "TSMethodSignature",
                      "start": 8694,
                      "end": 8796,
                      "accessibility": null,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 8694,
                        "end": 8698,
                        "decorators": [],
                        "name": "then",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "method",
                      "optional": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 8702,
                          "end": 8740,
                          "decorators": [],
                          "name": "onFulfilled",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 8713,
                            "end": 8740,
                            "typeAnnotation": {
                              "type": "TSFunctionType",
                              "start": 8715,
                              "end": 8740,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "start": 8716,
                                  "end": 8724,
                                  "decorators": [],
                                  "name": "value",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 8721,
                                    "end": 8724,
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "start": 8723,
                                      "end": 8724,
                                      "typeArguments": null,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 8723,
                                        "end": 8724,
                                        "decorators": [],
                                        "name": "R",
                                        "optional": false,
                                        "typeAnnotation": null
                                      }
                                    }
                                  }
                                }
                              ],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "start": 8726,
                                "end": 8740,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 8729,
                                  "end": 8740,
                                  "typeArguments": {
                                    "type": "TSTypeParameterInstantiation",
                                    "start": 8737,
                                    "end": 8740,
                                    "params": [
                                      {
                                        "type": "TSTypeReference",
                                        "start": 8738,
                                        "end": 8739,
                                        "typeArguments": null,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 8738,
                                          "end": 8739,
                                          "decorators": [],
                                          "name": "U",
                                          "optional": false,
                                          "typeAnnotation": null
                                        }
                                      }
                                    ]
                                  },
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 8729,
                                    "end": 8737,
                                    "decorators": [],
                                    "name": "Thenable",
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
                          "start": 8742,
                          "end": 8781,
                          "decorators": [],
                          "name": "onRejected",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 8752,
                            "end": 8781,
                            "typeAnnotation": {
                              "type": "TSFunctionType",
                              "start": 8754,
                              "end": 8781,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "start": 8755,
                                  "end": 8765,
                                  "decorators": [],
                                  "name": "error",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 8760,
                                    "end": 8765,
                                    "typeAnnotation": {
                                      "type": "TSAnyKeyword",
                                      "start": 8762,
                                      "end": 8765
                                    }
                                  }
                                }
                              ],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "start": 8767,
                                "end": 8781,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 8770,
                                  "end": 8781,
                                  "typeArguments": {
                                    "type": "TSTypeParameterInstantiation",
                                    "start": 8778,
                                    "end": 8781,
                                    "params": [
                                      {
                                        "type": "TSTypeReference",
                                        "start": 8779,
                                        "end": 8780,
                                        "typeArguments": null,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 8779,
                                          "end": 8780,
                                          "decorators": [],
                                          "name": "U",
                                          "optional": false,
                                          "typeAnnotation": null
                                        }
                                      }
                                    ]
                                  },
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 8770,
                                    "end": 8778,
                                    "decorators": [],
                                    "name": "Thenable",
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
                      "readonly": false,
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 8782,
                        "end": 8795,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 8784,
                          "end": 8795,
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 8792,
                            "end": 8795,
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "start": 8793,
                                "end": 8794,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 8793,
                                  "end": 8794,
                                  "decorators": [],
                                  "name": "U",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            ]
                          },
                          "typeName": {
                            "type": "Identifier",
                            "start": 8784,
                            "end": 8792,
                            "decorators": [],
                            "name": "Thenable",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      },
                      "static": false,
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "start": 8698,
                        "end": 8701,
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "start": 8699,
                            "end": 8700,
                            "const": false,
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "name": {
                              "type": "Identifier",
                              "start": 8699,
                              "end": 8700,
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "out": false
                          }
                        ]
                      }
                    },
                    {
                      "type": "TSMethodSignature",
                      "start": 8799,
                      "end": 8892,
                      "accessibility": null,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 8799,
                        "end": 8803,
                        "decorators": [],
                        "name": "then",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "method",
                      "optional": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 8807,
                          "end": 8845,
                          "decorators": [],
                          "name": "onFulfilled",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 8818,
                            "end": 8845,
                            "typeAnnotation": {
                              "type": "TSFunctionType",
                              "start": 8820,
                              "end": 8845,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "start": 8821,
                                  "end": 8829,
                                  "decorators": [],
                                  "name": "value",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 8826,
                                    "end": 8829,
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "start": 8828,
                                      "end": 8829,
                                      "typeArguments": null,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 8828,
                                        "end": 8829,
                                        "decorators": [],
                                        "name": "R",
                                        "optional": false,
                                        "typeAnnotation": null
                                      }
                                    }
                                  }
                                }
                              ],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "start": 8831,
                                "end": 8845,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 8834,
                                  "end": 8845,
                                  "typeArguments": {
                                    "type": "TSTypeParameterInstantiation",
                                    "start": 8842,
                                    "end": 8845,
                                    "params": [
                                      {
                                        "type": "TSTypeReference",
                                        "start": 8843,
                                        "end": 8844,
                                        "typeArguments": null,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 8843,
                                          "end": 8844,
                                          "decorators": [],
                                          "name": "U",
                                          "optional": false,
                                          "typeAnnotation": null
                                        }
                                      }
                                    ]
                                  },
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 8834,
                                    "end": 8842,
                                    "decorators": [],
                                    "name": "Thenable",
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
                          "start": 8847,
                          "end": 8877,
                          "decorators": [],
                          "name": "onRejected",
                          "optional": true,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 8858,
                            "end": 8877,
                            "typeAnnotation": {
                              "type": "TSFunctionType",
                              "start": 8860,
                              "end": 8877,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "start": 8861,
                                  "end": 8871,
                                  "decorators": [],
                                  "name": "error",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 8866,
                                    "end": 8871,
                                    "typeAnnotation": {
                                      "type": "TSAnyKeyword",
                                      "start": 8868,
                                      "end": 8871
                                    }
                                  }
                                }
                              ],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "start": 8873,
                                "end": 8877,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 8876,
                                  "end": 8877,
                                  "typeArguments": null,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 8876,
                                    "end": 8877,
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
                      "readonly": false,
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 8878,
                        "end": 8891,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 8880,
                          "end": 8891,
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 8888,
                            "end": 8891,
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "start": 8889,
                                "end": 8890,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 8889,
                                  "end": 8890,
                                  "decorators": [],
                                  "name": "U",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            ]
                          },
                          "typeName": {
                            "type": "Identifier",
                            "start": 8880,
                            "end": 8888,
                            "decorators": [],
                            "name": "Thenable",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      },
                      "static": false,
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "start": 8803,
                        "end": 8806,
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "start": 8804,
                            "end": 8805,
                            "const": false,
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "name": {
                              "type": "Identifier",
                              "start": 8804,
                              "end": 8805,
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "out": false
                          }
                        ]
                      }
                    },
                    {
                      "type": "TSMethodSignature",
                      "start": 8895,
                      "end": 8987,
                      "accessibility": null,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 8895,
                        "end": 8899,
                        "decorators": [],
                        "name": "then",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "method",
                      "optional": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 8903,
                          "end": 8931,
                          "decorators": [],
                          "name": "onFulfilled",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 8914,
                            "end": 8931,
                            "typeAnnotation": {
                              "type": "TSFunctionType",
                              "start": 8916,
                              "end": 8931,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "start": 8917,
                                  "end": 8925,
                                  "decorators": [],
                                  "name": "value",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 8922,
                                    "end": 8925,
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "start": 8924,
                                      "end": 8925,
                                      "typeArguments": null,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 8924,
                                        "end": 8925,
                                        "decorators": [],
                                        "name": "R",
                                        "optional": false,
                                        "typeAnnotation": null
                                      }
                                    }
                                  }
                                }
                              ],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "start": 8927,
                                "end": 8931,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 8930,
                                  "end": 8931,
                                  "typeArguments": null,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 8930,
                                    "end": 8931,
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
                          "start": 8933,
                          "end": 8972,
                          "decorators": [],
                          "name": "onRejected",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 8943,
                            "end": 8972,
                            "typeAnnotation": {
                              "type": "TSFunctionType",
                              "start": 8945,
                              "end": 8972,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "start": 8946,
                                  "end": 8956,
                                  "decorators": [],
                                  "name": "error",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 8951,
                                    "end": 8956,
                                    "typeAnnotation": {
                                      "type": "TSAnyKeyword",
                                      "start": 8953,
                                      "end": 8956
                                    }
                                  }
                                }
                              ],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "start": 8958,
                                "end": 8972,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 8961,
                                  "end": 8972,
                                  "typeArguments": {
                                    "type": "TSTypeParameterInstantiation",
                                    "start": 8969,
                                    "end": 8972,
                                    "params": [
                                      {
                                        "type": "TSTypeReference",
                                        "start": 8970,
                                        "end": 8971,
                                        "typeArguments": null,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 8970,
                                          "end": 8971,
                                          "decorators": [],
                                          "name": "U",
                                          "optional": false,
                                          "typeAnnotation": null
                                        }
                                      }
                                    ]
                                  },
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 8961,
                                    "end": 8969,
                                    "decorators": [],
                                    "name": "Thenable",
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
                      "readonly": false,
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 8973,
                        "end": 8986,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 8975,
                          "end": 8986,
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 8983,
                            "end": 8986,
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "start": 8984,
                                "end": 8985,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 8984,
                                  "end": 8985,
                                  "decorators": [],
                                  "name": "U",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            ]
                          },
                          "typeName": {
                            "type": "Identifier",
                            "start": 8975,
                            "end": 8983,
                            "decorators": [],
                            "name": "Thenable",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      },
                      "static": false,
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "start": 8899,
                        "end": 8902,
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "start": 8900,
                            "end": 8901,
                            "const": false,
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "name": {
                              "type": "Identifier",
                              "start": 8900,
                              "end": 8901,
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "out": false
                          }
                        ]
                      }
                    },
                    {
                      "type": "TSMethodSignature",
                      "start": 8990,
                      "end": 9074,
                      "accessibility": null,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 8990,
                        "end": 8994,
                        "decorators": [],
                        "name": "then",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "method",
                      "optional": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 8998,
                          "end": 9027,
                          "decorators": [],
                          "name": "onFulfilled",
                          "optional": true,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 9010,
                            "end": 9027,
                            "typeAnnotation": {
                              "type": "TSFunctionType",
                              "start": 9012,
                              "end": 9027,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "start": 9013,
                                  "end": 9021,
                                  "decorators": [],
                                  "name": "value",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 9018,
                                    "end": 9021,
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "start": 9020,
                                      "end": 9021,
                                      "typeArguments": null,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 9020,
                                        "end": 9021,
                                        "decorators": [],
                                        "name": "R",
                                        "optional": false,
                                        "typeAnnotation": null
                                      }
                                    }
                                  }
                                }
                              ],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "start": 9023,
                                "end": 9027,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 9026,
                                  "end": 9027,
                                  "typeArguments": null,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 9026,
                                    "end": 9027,
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
                          "start": 9029,
                          "end": 9059,
                          "decorators": [],
                          "name": "onRejected",
                          "optional": true,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 9040,
                            "end": 9059,
                            "typeAnnotation": {
                              "type": "TSFunctionType",
                              "start": 9042,
                              "end": 9059,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "start": 9043,
                                  "end": 9053,
                                  "decorators": [],
                                  "name": "error",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 9048,
                                    "end": 9053,
                                    "typeAnnotation": {
                                      "type": "TSAnyKeyword",
                                      "start": 9050,
                                      "end": 9053
                                    }
                                  }
                                }
                              ],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "start": 9055,
                                "end": 9059,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 9058,
                                  "end": 9059,
                                  "typeArguments": null,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 9058,
                                    "end": 9059,
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
                      "readonly": false,
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 9060,
                        "end": 9073,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 9062,
                          "end": 9073,
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 9070,
                            "end": 9073,
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "start": 9071,
                                "end": 9072,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 9071,
                                  "end": 9072,
                                  "decorators": [],
                                  "name": "U",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            ]
                          },
                          "typeName": {
                            "type": "Identifier",
                            "start": 9062,
                            "end": 9070,
                            "decorators": [],
                            "name": "Thenable",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      },
                      "static": false,
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "start": 8994,
                        "end": 8997,
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "start": 8995,
                            "end": 8996,
                            "const": false,
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "name": {
                              "type": "Identifier",
                              "start": 8995,
                              "end": 8996,
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
                },
                "declare": false,
                "extends": [],
                "id": {
                  "type": "Identifier",
                  "start": 8678,
                  "end": 8686,
                  "decorators": [],
                  "name": "Thenable",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 8686,
                  "end": 8689,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 8687,
                      "end": 8688,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 8687,
                        "end": 8688,
                        "decorators": [],
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "out": false
                    }
                  ]
                }
              },
              "exportKind": "type",
              "source": null,
              "specifiers": []
            }
          ]
        },
        "declare": true,
        "global": false,
        "id": {
          "type": "Identifier",
          "start": 8650,
          "end": 8657,
          "decorators": [],
          "name": "Promise",
          "optional": false,
          "typeAnnotation": null
        },
        "kind": "module"
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 9082,
      "end": 9129,
      "body": {
        "type": "TSInterfaceBody",
        "start": 9096,
        "end": 9129,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 9102,
            "end": 9112,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 9102,
              "end": 9103,
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
              "start": 9103,
              "end": 9111,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 9105,
                "end": 9111
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 9117,
            "end": 9127,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 9117,
              "end": 9118,
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
              "start": 9118,
              "end": 9126,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 9120,
                "end": 9126
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 9092,
        "end": 9095,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 9130,
      "end": 9141,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 9134,
          "end": 9140,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 9134,
            "end": 9140,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 9135,
              "end": 9140,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 9137,
                "end": 9140
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 9142,
      "end": 9157,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 9146,
          "end": 9156,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 9146,
            "end": 9156,
            "decorators": [],
            "name": "arr",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 9149,
              "end": 9156,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 9151,
                "end": 9156,
                "elementType": {
                  "type": "TSAnyKeyword",
                  "start": 9151,
                  "end": 9154
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 9158,
      "end": 9171,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 9162,
          "end": 9170,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 9162,
            "end": 9170,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 9165,
              "end": 9170,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 9167,
                "end": 9170,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 9167,
                  "end": 9170,
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 9172,
      "end": 9198,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 9176,
          "end": 9197,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 9176,
            "end": 9197,
            "decorators": [],
            "name": "fooProm",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 9183,
              "end": 9197,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 9185,
                "end": 9197,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 9192,
                  "end": 9197,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 9193,
                      "end": 9196,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 9193,
                        "end": 9196,
                        "decorators": [],
                        "name": "Foo",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 9185,
                  "end": 9192,
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 9200,
      "end": 9255,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 9200,
        "end": 9254,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 9200,
          "end": 9207,
          "decorators": [],
          "name": "fooProm",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 9210,
          "end": 9254,
          "arguments": [
            {
              "type": "Identifier",
              "start": 9222,
              "end": 9229,
              "decorators": [],
              "name": "Promise",
              "optional": false,
              "typeAnnotation": null
            },
            {
              "type": "ArrowFunctionExpression",
              "start": 9231,
              "end": 9253,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 9237,
                "end": 9253,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 9240,
                    "end": 9251,
                    "argument": {
                      "type": "Identifier",
                      "start": 9247,
                      "end": 9250,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          ],
          "callee": {
            "type": "MemberExpression",
            "start": 9210,
            "end": 9221,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 9210,
              "end": 9217,
              "decorators": [],
              "name": "Promise",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 9218,
              "end": 9221,
              "decorators": [],
              "name": "try",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "typeArguments": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 9256,
      "end": 9316,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 9256,
        "end": 9315,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 9256,
          "end": 9263,
          "decorators": [],
          "name": "fooProm",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 9266,
          "end": 9315,
          "arguments": [
            {
              "type": "Identifier",
              "start": 9278,
              "end": 9285,
              "decorators": [],
              "name": "Promise",
              "optional": false,
              "typeAnnotation": null
            },
            {
              "type": "ArrowFunctionExpression",
              "start": 9287,
              "end": 9309,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 9293,
                "end": 9309,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 9296,
                    "end": 9307,
                    "argument": {
                      "type": "Identifier",
                      "start": 9303,
                      "end": 9306,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            },
            {
              "type": "Identifier",
              "start": 9311,
              "end": 9314,
              "decorators": [],
              "name": "arr",
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "callee": {
            "type": "MemberExpression",
            "start": 9266,
            "end": 9277,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 9266,
              "end": 9273,
              "decorators": [],
              "name": "Promise",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 9274,
              "end": 9277,
              "decorators": [],
              "name": "try",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "typeArguments": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 9317,
      "end": 9380,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 9317,
        "end": 9379,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 9317,
          "end": 9324,
          "decorators": [],
          "name": "fooProm",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 9327,
          "end": 9379,
          "arguments": [
            {
              "type": "Identifier",
              "start": 9339,
              "end": 9346,
              "decorators": [],
              "name": "Promise",
              "optional": false,
              "typeAnnotation": null
            },
            {
              "type": "ArrowFunctionExpression",
              "start": 9348,
              "end": 9370,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 9354,
                "end": 9370,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 9357,
                    "end": 9368,
                    "argument": {
                      "type": "Identifier",
                      "start": 9364,
                      "end": 9367,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            },
            {
              "type": "Identifier",
              "start": 9372,
              "end": 9375,
              "decorators": [],
              "name": "arr",
              "optional": false,
              "typeAnnotation": null
            },
            {
              "type": "Identifier",
              "start": 9377,
              "end": 9378,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "callee": {
            "type": "MemberExpression",
            "start": 9327,
            "end": 9338,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 9327,
              "end": 9334,
              "decorators": [],
              "name": "Promise",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 9335,
              "end": 9338,
              "decorators": [],
              "name": "try",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "typeArguments": null
        }
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
