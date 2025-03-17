__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 205,
  "end": 3490,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 205,
      "end": 2039,
      "id": {
        "type": "Identifier",
        "start": 223,
        "end": 228,
        "name": "Tools",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 229,
        "end": 2039,
        "body": [
          {
            "type": "TSTypeAliasDeclaration",
            "start": 235,
            "end": 329,
            "id": {
              "type": "Identifier",
              "start": 240,
              "end": 244,
              "name": "Head",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 244,
              "end": 261,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 245,
                  "end": 260,
                  "name": {
                    "type": "Identifier",
                    "start": 245,
                    "end": 246,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": {
                    "type": "TSArrayType",
                    "start": 255,
                    "end": 260,
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 255,
                      "end": 258
                    }
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
            "typeAnnotation": {
              "type": "TSConditionalType",
              "start": 272,
              "end": 328,
              "checkType": {
                "type": "TSTypeReference",
                "start": 272,
                "end": 273,
                "typeName": {
                  "type": "Identifier",
                  "start": 272,
                  "end": 273,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              "extendsType": {
                "type": "TSTupleType",
                "start": 282,
                "end": 297,
                "elementTypes": [
                  {
                    "type": "TSAnyKeyword",
                    "start": 283,
                    "end": 286
                  },
                  {
                    "type": "TSRestType",
                    "start": 288,
                    "end": 296,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 291,
                      "end": 296,
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 291,
                        "end": 294
                      }
                    }
                  }
                ]
              },
              "trueType": {
                "type": "TSIndexedAccessType",
                "start": 308,
                "end": 312,
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 308,
                  "end": 309,
                  "typeName": {
                    "type": "Identifier",
                    "start": 308,
                    "end": 309,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                "indexType": {
                  "type": "TSLiteralType",
                  "start": 310,
                  "end": 311,
                  "literal": {
                    "type": "Literal",
                    "start": 310,
                    "end": 311,
                    "value": 0,
                    "raw": "0"
                  }
                }
              },
              "falseType": {
                "type": "TSNeverKeyword",
                "start": 323,
                "end": 328
              }
            },
            "declare": false
          },
          {
            "type": "TSTypeAliasDeclaration",
            "start": 335,
            "end": 462,
            "id": {
              "type": "Identifier",
              "start": 340,
              "end": 344,
              "name": "Tail",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 344,
              "end": 361,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 345,
                  "end": 360,
                  "name": {
                    "type": "Identifier",
                    "start": 345,
                    "end": 346,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": {
                    "type": "TSArrayType",
                    "start": 355,
                    "end": 360,
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 355,
                      "end": 358
                    }
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
            "typeAnnotation": {
              "type": "TSConditionalType",
              "start": 372,
              "end": 461,
              "checkType": {
                "type": "TSFunctionType",
                "start": 373,
                "end": 389,
                "typeParameters": null,
                "params": [
                  {
                    "type": "RestElement",
                    "start": 374,
                    "end": 381,
                    "argument": {
                      "type": "Identifier",
                      "start": 377,
                      "end": 378,
                      "name": "t",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "decorators": [],
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 378,
                      "end": 381,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 380,
                        "end": 381,
                        "typeName": {
                          "type": "Identifier",
                          "start": 380,
                          "end": 381,
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "value": null
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 383,
                  "end": 389,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 386,
                    "end": 389
                  }
                }
              },
              "extendsType": {
                "type": "TSFunctionType",
                "start": 400,
                "end": 434,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 401,
                    "end": 407,
                    "name": "_",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 402,
                      "end": 407,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 404,
                        "end": 407
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "RestElement",
                    "start": 409,
                    "end": 426,
                    "argument": {
                      "type": "Identifier",
                      "start": 412,
                      "end": 416,
                      "name": "tail",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "decorators": [],
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 416,
                      "end": 426,
                      "typeAnnotation": {
                        "type": "TSInferType",
                        "start": 418,
                        "end": 426,
                        "typeParameter": {
                          "type": "TSTypeParameter",
                          "start": 424,
                          "end": 426,
                          "name": {
                            "type": "Identifier",
                            "start": 424,
                            "end": 426,
                            "name": "TT",
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
                      }
                    },
                    "value": null
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 428,
                  "end": 434,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 431,
                    "end": 434
                  }
                }
              },
              "trueType": {
                "type": "TSTypeReference",
                "start": 446,
                "end": 448,
                "typeName": {
                  "type": "Identifier",
                  "start": 446,
                  "end": 448,
                  "name": "TT",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              "falseType": {
                "type": "TSTupleType",
                "start": 459,
                "end": 461,
                "elementTypes": []
              }
            },
            "declare": false
          },
          {
            "type": "TSTypeAliasDeclaration",
            "start": 468,
            "end": 562,
            "id": {
              "type": "Identifier",
              "start": 473,
              "end": 480,
              "name": "HasTail",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 480,
              "end": 497,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 481,
                  "end": 496,
                  "name": {
                    "type": "Identifier",
                    "start": 481,
                    "end": 482,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": {
                    "type": "TSArrayType",
                    "start": 491,
                    "end": 496,
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 491,
                      "end": 494
                    }
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
            "typeAnnotation": {
              "type": "TSConditionalType",
              "start": 508,
              "end": 561,
              "checkType": {
                "type": "TSTypeReference",
                "start": 508,
                "end": 509,
                "typeName": {
                  "type": "Identifier",
                  "start": 508,
                  "end": 509,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              "extendsType": {
                "type": "TSUnionType",
                "start": 519,
                "end": 529,
                "types": [
                  {
                    "type": "TSTupleType",
                    "start": 519,
                    "end": 521,
                    "elementTypes": []
                  },
                  {
                    "type": "TSTupleType",
                    "start": 524,
                    "end": 529,
                    "elementTypes": [
                      {
                        "type": "TSAnyKeyword",
                        "start": 525,
                        "end": 528
                      }
                    ]
                  }
                ]
              },
              "trueType": {
                "type": "TSLiteralType",
                "start": 541,
                "end": 546,
                "literal": {
                  "type": "Literal",
                  "start": 541,
                  "end": 546,
                  "value": false,
                  "raw": "false"
                }
              },
              "falseType": {
                "type": "TSLiteralType",
                "start": 557,
                "end": 561,
                "literal": {
                  "type": "Literal",
                  "start": 557,
                  "end": 561,
                  "value": true,
                  "raw": "true"
                }
              }
            },
            "declare": false
          },
          {
            "type": "TSTypeAliasDeclaration",
            "start": 568,
            "end": 714,
            "id": {
              "type": "Identifier",
              "start": 573,
              "end": 577,
              "name": "Last",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 577,
              "end": 594,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 578,
                  "end": 593,
                  "name": {
                    "type": "Identifier",
                    "start": 578,
                    "end": 579,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": {
                    "type": "TSArrayType",
                    "start": 588,
                    "end": 593,
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 588,
                      "end": 591
                    }
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
            "typeAnnotation": {
              "type": "TSIndexedAccessType",
              "start": 597,
              "end": 713,
              "objectType": {
                "type": "TSTypeLiteral",
                "start": 597,
                "end": 650,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 607,
                    "end": 624,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Literal",
                      "start": 607,
                      "end": 608,
                      "value": 0,
                      "raw": "0"
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 608,
                      "end": 623,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 610,
                        "end": 623,
                        "typeName": {
                          "type": "Identifier",
                          "start": 610,
                          "end": 614,
                          "name": "Last",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 614,
                          "end": 623,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 615,
                              "end": 622,
                              "typeName": {
                                "type": "Identifier",
                                "start": 615,
                                "end": 619,
                                "name": "Tail",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "start": 619,
                                "end": 622,
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "start": 620,
                                    "end": 621,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 620,
                                      "end": 621,
                                      "name": "T",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "typeArguments": null
                                  }
                                ]
                              }
                            }
                          ]
                        }
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 633,
                    "end": 644,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Literal",
                      "start": 633,
                      "end": 634,
                      "value": 1,
                      "raw": "1"
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 634,
                      "end": 643,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 636,
                        "end": 643,
                        "typeName": {
                          "type": "Identifier",
                          "start": 636,
                          "end": 640,
                          "name": "Head",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 640,
                          "end": 643,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 641,
                              "end": 642,
                              "typeName": {
                                "type": "Identifier",
                                "start": 641,
                                "end": 642,
                                "name": "T",
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
                    "accessibility": null,
                    "static": false
                  }
                ]
              },
              "indexType": {
                "type": "TSConditionalType",
                "start": 660,
                "end": 707,
                "checkType": {
                  "type": "TSTypeReference",
                  "start": 660,
                  "end": 670,
                  "typeName": {
                    "type": "Identifier",
                    "start": 660,
                    "end": 667,
                    "name": "HasTail",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 667,
                    "end": 670,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 668,
                        "end": 669,
                        "typeName": {
                          "type": "Identifier",
                          "start": 668,
                          "end": 669,
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                },
                "extendsType": {
                  "type": "TSLiteralType",
                  "start": 679,
                  "end": 683,
                  "literal": {
                    "type": "Literal",
                    "start": 679,
                    "end": 683,
                    "value": true,
                    "raw": "true"
                  }
                },
                "trueType": {
                  "type": "TSLiteralType",
                  "start": 694,
                  "end": 695,
                  "literal": {
                    "type": "Literal",
                    "start": 694,
                    "end": 695,
                    "value": 0,
                    "raw": "0"
                  }
                },
                "falseType": {
                  "type": "TSLiteralType",
                  "start": 706,
                  "end": 707,
                  "literal": {
                    "type": "Literal",
                    "start": 706,
                    "end": 707,
                    "value": 1,
                    "raw": "1"
                  }
                }
              }
            },
            "declare": false
          },
          {
            "type": "TSTypeAliasDeclaration",
            "start": 720,
            "end": 771,
            "id": {
              "type": "Identifier",
              "start": 725,
              "end": 731,
              "name": "Length",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 731,
              "end": 748,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 732,
                  "end": 747,
                  "name": {
                    "type": "Identifier",
                    "start": 732,
                    "end": 733,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": {
                    "type": "TSArrayType",
                    "start": 742,
                    "end": 747,
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 742,
                      "end": 745
                    }
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
            "typeAnnotation": {
              "type": "TSIndexedAccessType",
              "start": 759,
              "end": 770,
              "objectType": {
                "type": "TSTypeReference",
                "start": 759,
                "end": 760,
                "typeName": {
                  "type": "Identifier",
                  "start": 759,
                  "end": 760,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              "indexType": {
                "type": "TSLiteralType",
                "start": 761,
                "end": 769,
                "literal": {
                  "type": "Literal",
                  "start": 761,
                  "end": 769,
                  "value": "length",
                  "raw": "'length'"
                }
              }
            },
            "declare": false
          },
          {
            "type": "TSTypeAliasDeclaration",
            "start": 777,
            "end": 911,
            "id": {
              "type": "Identifier",
              "start": 782,
              "end": 789,
              "name": "Prepend",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 789,
              "end": 809,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 790,
                  "end": 791,
                  "name": {
                    "type": "Identifier",
                    "start": 790,
                    "end": 791,
                    "name": "E",
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
                  "start": 793,
                  "end": 808,
                  "name": {
                    "type": "Identifier",
                    "start": 793,
                    "end": 794,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": {
                    "type": "TSArrayType",
                    "start": 803,
                    "end": 808,
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 803,
                      "end": 806
                    }
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
            "typeAnnotation": {
              "type": "TSConditionalType",
              "start": 820,
              "end": 910,
              "checkType": {
                "type": "TSFunctionType",
                "start": 821,
                "end": 849,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 822,
                    "end": 829,
                    "name": "head",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 826,
                      "end": 829,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 828,
                        "end": 829,
                        "typeName": {
                          "type": "Identifier",
                          "start": 828,
                          "end": 829,
                          "name": "E",
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
                    "type": "RestElement",
                    "start": 831,
                    "end": 841,
                    "argument": {
                      "type": "Identifier",
                      "start": 834,
                      "end": 838,
                      "name": "args",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "decorators": [],
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 838,
                      "end": 841,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 840,
                        "end": 841,
                        "typeName": {
                          "type": "Identifier",
                          "start": 840,
                          "end": 841,
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "value": null
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 843,
                  "end": 849,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 846,
                    "end": 849
                  }
                }
              },
              "extendsType": {
                "type": "TSFunctionType",
                "start": 860,
                "end": 885,
                "typeParameters": null,
                "params": [
                  {
                    "type": "RestElement",
                    "start": 861,
                    "end": 877,
                    "argument": {
                      "type": "Identifier",
                      "start": 864,
                      "end": 868,
                      "name": "args",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "decorators": [],
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 868,
                      "end": 877,
                      "typeAnnotation": {
                        "type": "TSInferType",
                        "start": 870,
                        "end": 877,
                        "typeParameter": {
                          "type": "TSTypeParameter",
                          "start": 876,
                          "end": 877,
                          "name": {
                            "type": "Identifier",
                            "start": 876,
                            "end": 877,
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
                      }
                    },
                    "value": null
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 879,
                  "end": 885,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 882,
                    "end": 885
                  }
                }
              },
              "trueType": {
                "type": "TSTypeReference",
                "start": 897,
                "end": 898,
                "typeName": {
                  "type": "Identifier",
                  "start": 897,
                  "end": 898,
                  "name": "U",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              "falseType": {
                "type": "TSTypeReference",
                "start": 909,
                "end": 910,
                "typeName": {
                  "type": "Identifier",
                  "start": 909,
                  "end": 910,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "declare": false
          },
          {
            "type": "TSTypeAliasDeclaration",
            "start": 917,
            "end": 1113,
            "id": {
              "type": "Identifier",
              "start": 922,
              "end": 926,
              "name": "Drop",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 926,
              "end": 983,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 927,
                  "end": 943,
                  "name": {
                    "type": "Identifier",
                    "start": 927,
                    "end": 928,
                    "name": "N",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": {
                    "type": "TSNumberKeyword",
                    "start": 937,
                    "end": 943
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 945,
                  "end": 960,
                  "name": {
                    "type": "Identifier",
                    "start": 945,
                    "end": 946,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": {
                    "type": "TSArrayType",
                    "start": 955,
                    "end": 960,
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 955,
                      "end": 958
                    }
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 962,
                  "end": 982,
                  "name": {
                    "type": "Identifier",
                    "start": 962,
                    "end": 963,
                    "name": "I",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": {
                    "type": "TSArrayType",
                    "start": 972,
                    "end": 977,
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 972,
                      "end": 975
                    }
                  },
                  "default": {
                    "type": "TSTupleType",
                    "start": 980,
                    "end": 982,
                    "elementTypes": []
                  },
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
            "typeAnnotation": {
              "type": "TSIndexedAccessType",
              "start": 986,
              "end": 1112,
              "objectType": {
                "type": "TSTypeLiteral",
                "start": 986,
                "end": 1053,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 996,
                    "end": 1033,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Literal",
                      "start": 996,
                      "end": 997,
                      "value": 0,
                      "raw": "0"
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 997,
                      "end": 1032,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 999,
                        "end": 1032,
                        "typeName": {
                          "type": "Identifier",
                          "start": 999,
                          "end": 1003,
                          "name": "Drop",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 1003,
                          "end": 1032,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 1004,
                              "end": 1005,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1004,
                                "end": 1005,
                                "name": "N",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            },
                            {
                              "type": "TSTypeReference",
                              "start": 1007,
                              "end": 1014,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1007,
                                "end": 1011,
                                "name": "Tail",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "start": 1011,
                                "end": 1014,
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "start": 1012,
                                    "end": 1013,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 1012,
                                      "end": 1013,
                                      "name": "T",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "typeArguments": null
                                  }
                                ]
                              }
                            },
                            {
                              "type": "TSTypeReference",
                              "start": 1016,
                              "end": 1031,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1016,
                                "end": 1023,
                                "name": "Prepend",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "start": 1023,
                                "end": 1031,
                                "params": [
                                  {
                                    "type": "TSAnyKeyword",
                                    "start": 1024,
                                    "end": 1027
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "start": 1029,
                                    "end": 1030,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 1029,
                                      "end": 1030,
                                      "name": "I",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "typeArguments": null
                                  }
                                ]
                              }
                            }
                          ]
                        }
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 1042,
                    "end": 1047,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Literal",
                      "start": 1042,
                      "end": 1043,
                      "value": 1,
                      "raw": "1"
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1043,
                      "end": 1046,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1045,
                        "end": 1046,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1045,
                          "end": 1046,
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
              },
              "indexType": {
                "type": "TSConditionalType",
                "start": 1063,
                "end": 1106,
                "checkType": {
                  "type": "TSTypeReference",
                  "start": 1063,
                  "end": 1072,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1063,
                    "end": 1069,
                    "name": "Length",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 1069,
                    "end": 1072,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 1070,
                        "end": 1071,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1070,
                          "end": 1071,
                          "name": "I",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                },
                "extendsType": {
                  "type": "TSTypeReference",
                  "start": 1081,
                  "end": 1082,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1081,
                    "end": 1082,
                    "name": "N",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                "trueType": {
                  "type": "TSLiteralType",
                  "start": 1093,
                  "end": 1094,
                  "literal": {
                    "type": "Literal",
                    "start": 1093,
                    "end": 1094,
                    "value": 1,
                    "raw": "1"
                  }
                },
                "falseType": {
                  "type": "TSLiteralType",
                  "start": 1105,
                  "end": 1106,
                  "literal": {
                    "type": "Literal",
                    "start": 1105,
                    "end": 1106,
                    "value": 0,
                    "raw": "0"
                  }
                }
              }
            },
            "declare": false
          },
          {
            "type": "TSTypeAliasDeclaration",
            "start": 1119,
            "end": 1157,
            "id": {
              "type": "Identifier",
              "start": 1124,
              "end": 1128,
              "name": "Cast",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 1128,
              "end": 1134,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 1129,
                  "end": 1130,
                  "name": {
                    "type": "Identifier",
                    "start": 1129,
                    "end": 1130,
                    "name": "X",
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
                  "start": 1132,
                  "end": 1133,
                  "name": {
                    "type": "Identifier",
                    "start": 1132,
                    "end": 1133,
                    "name": "Y",
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
            "typeAnnotation": {
              "type": "TSConditionalType",
              "start": 1137,
              "end": 1156,
              "checkType": {
                "type": "TSTypeReference",
                "start": 1137,
                "end": 1138,
                "typeName": {
                  "type": "Identifier",
                  "start": 1137,
                  "end": 1138,
                  "name": "X",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              "extendsType": {
                "type": "TSTypeReference",
                "start": 1147,
                "end": 1148,
                "typeName": {
                  "type": "Identifier",
                  "start": 1147,
                  "end": 1148,
                  "name": "Y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              "trueType": {
                "type": "TSTypeReference",
                "start": 1151,
                "end": 1152,
                "typeName": {
                  "type": "Identifier",
                  "start": 1151,
                  "end": 1152,
                  "name": "X",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              "falseType": {
                "type": "TSTypeReference",
                "start": 1155,
                "end": 1156,
                "typeName": {
                  "type": "Identifier",
                  "start": 1155,
                  "end": 1156,
                  "name": "Y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "declare": false
          },
          {
            "type": "TSTypeAliasDeclaration",
            "start": 1163,
            "end": 1209,
            "id": {
              "type": "Identifier",
              "start": 1168,
              "end": 1171,
              "name": "Pos",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 1171,
              "end": 1188,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 1172,
                  "end": 1187,
                  "name": {
                    "type": "Identifier",
                    "start": 1172,
                    "end": 1173,
                    "name": "I",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": {
                    "type": "TSArrayType",
                    "start": 1182,
                    "end": 1187,
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 1182,
                      "end": 1185
                    }
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1199,
              "end": 1208,
              "typeName": {
                "type": "Identifier",
                "start": 1199,
                "end": 1205,
                "name": "Length",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1205,
                "end": 1208,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 1206,
                    "end": 1207,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1206,
                      "end": 1207,
                      "name": "I",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            },
            "declare": false
          },
          {
            "type": "TSTypeAliasDeclaration",
            "start": 1215,
            "end": 1268,
            "id": {
              "type": "Identifier",
              "start": 1220,
              "end": 1224,
              "name": "Next",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 1224,
              "end": 1241,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 1225,
                  "end": 1240,
                  "name": {
                    "type": "Identifier",
                    "start": 1225,
                    "end": 1226,
                    "name": "I",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": {
                    "type": "TSArrayType",
                    "start": 1235,
                    "end": 1240,
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 1235,
                      "end": 1238
                    }
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1252,
              "end": 1267,
              "typeName": {
                "type": "Identifier",
                "start": 1252,
                "end": 1259,
                "name": "Prepend",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1259,
                "end": 1267,
                "params": [
                  {
                    "type": "TSAnyKeyword",
                    "start": 1260,
                    "end": 1263
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 1265,
                    "end": 1266,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1265,
                      "end": 1266,
                      "name": "I",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            },
            "declare": false
          },
          {
            "type": "TSTypeAliasDeclaration",
            "start": 1274,
            "end": 1319,
            "id": {
              "type": "Identifier",
              "start": 1279,
              "end": 1283,
              "name": "Prev",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 1283,
              "end": 1300,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 1284,
                  "end": 1299,
                  "name": {
                    "type": "Identifier",
                    "start": 1284,
                    "end": 1285,
                    "name": "I",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": {
                    "type": "TSArrayType",
                    "start": 1294,
                    "end": 1299,
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 1294,
                      "end": 1297
                    }
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1311,
              "end": 1318,
              "typeName": {
                "type": "Identifier",
                "start": 1311,
                "end": 1315,
                "name": "Tail",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1315,
                "end": 1318,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 1316,
                    "end": 1317,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1316,
                      "end": 1317,
                      "name": "I",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            },
            "declare": false
          },
          {
            "type": "TSTypeAliasDeclaration",
            "start": 1325,
            "end": 1548,
            "id": {
              "type": "Identifier",
              "start": 1330,
              "end": 1338,
              "name": "Iterator",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 1338,
              "end": 1411,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 1339,
                  "end": 1363,
                  "name": {
                    "type": "Identifier",
                    "start": 1339,
                    "end": 1344,
                    "name": "Index",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": {
                    "type": "TSNumberKeyword",
                    "start": 1353,
                    "end": 1359
                  },
                  "default": {
                    "type": "TSLiteralType",
                    "start": 1362,
                    "end": 1363,
                    "literal": {
                      "type": "Literal",
                      "start": 1362,
                      "end": 1363,
                      "value": 0,
                      "raw": "0"
                    }
                  },
                  "in": false,
                  "out": false,
                  "const": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 1365,
                  "end": 1388,
                  "name": {
                    "type": "Identifier",
                    "start": 1365,
                    "end": 1369,
                    "name": "From",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": {
                    "type": "TSArrayType",
                    "start": 1378,
                    "end": 1383,
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 1378,
                      "end": 1381
                    }
                  },
                  "default": {
                    "type": "TSTupleType",
                    "start": 1386,
                    "end": 1388,
                    "elementTypes": []
                  },
                  "in": false,
                  "out": false,
                  "const": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 1390,
                  "end": 1410,
                  "name": {
                    "type": "Identifier",
                    "start": 1390,
                    "end": 1391,
                    "name": "I",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": {
                    "type": "TSArrayType",
                    "start": 1400,
                    "end": 1405,
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 1400,
                      "end": 1403
                    }
                  },
                  "default": {
                    "type": "TSTupleType",
                    "start": 1408,
                    "end": 1410,
                    "elementTypes": []
                  },
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
            "typeAnnotation": {
              "type": "TSIndexedAccessType",
              "start": 1414,
              "end": 1547,
              "objectType": {
                "type": "TSTypeLiteral",
                "start": 1414,
                "end": 1487,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 1424,
                    "end": 1464,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Literal",
                      "start": 1424,
                      "end": 1425,
                      "value": 0,
                      "raw": "0"
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1425,
                      "end": 1463,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1427,
                        "end": 1463,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1427,
                          "end": 1435,
                          "name": "Iterator",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 1435,
                          "end": 1463,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 1436,
                              "end": 1441,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1436,
                                "end": 1441,
                                "name": "Index",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            },
                            {
                              "type": "TSTypeReference",
                              "start": 1443,
                              "end": 1453,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1443,
                                "end": 1447,
                                "name": "Next",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "start": 1447,
                                "end": 1453,
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "start": 1448,
                                    "end": 1452,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 1448,
                                      "end": 1452,
                                      "name": "From",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "typeArguments": null
                                  }
                                ]
                              }
                            },
                            {
                              "type": "TSTypeReference",
                              "start": 1455,
                              "end": 1462,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1455,
                                "end": 1459,
                                "name": "Next",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "start": 1459,
                                "end": 1462,
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "start": 1460,
                                    "end": 1461,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 1460,
                                      "end": 1461,
                                      "name": "I",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "typeArguments": null
                                  }
                                ]
                              }
                            }
                          ]
                        }
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 1473,
                    "end": 1481,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Literal",
                      "start": 1473,
                      "end": 1474,
                      "value": 1,
                      "raw": "1"
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1474,
                      "end": 1480,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1476,
                        "end": 1480,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1476,
                          "end": 1480,
                          "name": "From",
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
              },
              "indexType": {
                "type": "TSConditionalType",
                "start": 1497,
                "end": 1541,
                "checkType": {
                  "type": "TSTypeReference",
                  "start": 1497,
                  "end": 1503,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1497,
                    "end": 1500,
                    "name": "Pos",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 1500,
                    "end": 1503,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 1501,
                        "end": 1502,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1501,
                          "end": 1502,
                          "name": "I",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                },
                "extendsType": {
                  "type": "TSTypeReference",
                  "start": 1512,
                  "end": 1517,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1512,
                    "end": 1517,
                    "name": "Index",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                "trueType": {
                  "type": "TSLiteralType",
                  "start": 1528,
                  "end": 1529,
                  "literal": {
                    "type": "Literal",
                    "start": 1528,
                    "end": 1529,
                    "value": 1,
                    "raw": "1"
                  }
                },
                "falseType": {
                  "type": "TSLiteralType",
                  "start": 1540,
                  "end": 1541,
                  "literal": {
                    "type": "Literal",
                    "start": 1540,
                    "end": 1541,
                    "value": 0,
                    "raw": "0"
                  }
                }
              }
            },
            "declare": false
          },
          {
            "type": "TSTypeAliasDeclaration",
            "start": 1554,
            "end": 1771,
            "id": {
              "type": "Identifier",
              "start": 1559,
              "end": 1566,
              "name": "Reverse",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 1566,
              "end": 1627,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 1567,
                  "end": 1582,
                  "name": {
                    "type": "Identifier",
                    "start": 1567,
                    "end": 1568,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": {
                    "type": "TSArrayType",
                    "start": 1577,
                    "end": 1582,
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 1577,
                      "end": 1580
                    }
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 1584,
                  "end": 1604,
                  "name": {
                    "type": "Identifier",
                    "start": 1584,
                    "end": 1585,
                    "name": "R",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": {
                    "type": "TSArrayType",
                    "start": 1594,
                    "end": 1599,
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 1594,
                      "end": 1597
                    }
                  },
                  "default": {
                    "type": "TSTupleType",
                    "start": 1602,
                    "end": 1604,
                    "elementTypes": []
                  },
                  "in": false,
                  "out": false,
                  "const": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 1606,
                  "end": 1626,
                  "name": {
                    "type": "Identifier",
                    "start": 1606,
                    "end": 1607,
                    "name": "I",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": {
                    "type": "TSArrayType",
                    "start": 1616,
                    "end": 1621,
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 1616,
                      "end": 1619
                    }
                  },
                  "default": {
                    "type": "TSTupleType",
                    "start": 1624,
                    "end": 1626,
                    "elementTypes": []
                  },
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
            "typeAnnotation": {
              "type": "TSIndexedAccessType",
              "start": 1630,
              "end": 1770,
              "objectType": {
                "type": "TSTypeLiteral",
                "start": 1630,
                "end": 1706,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 1640,
                    "end": 1686,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Literal",
                      "start": 1640,
                      "end": 1641,
                      "value": 0,
                      "raw": "0"
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1641,
                      "end": 1685,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1643,
                        "end": 1685,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1643,
                          "end": 1650,
                          "name": "Reverse",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 1650,
                          "end": 1685,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 1651,
                              "end": 1652,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1651,
                                "end": 1652,
                                "name": "T",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            },
                            {
                              "type": "TSTypeReference",
                              "start": 1654,
                              "end": 1675,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1654,
                                "end": 1661,
                                "name": "Prepend",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "start": 1661,
                                "end": 1675,
                                "params": [
                                  {
                                    "type": "TSIndexedAccessType",
                                    "start": 1662,
                                    "end": 1671,
                                    "objectType": {
                                      "type": "TSTypeReference",
                                      "start": 1662,
                                      "end": 1663,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 1662,
                                        "end": 1663,
                                        "name": "T",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "typeArguments": null
                                    },
                                    "indexType": {
                                      "type": "TSTypeReference",
                                      "start": 1664,
                                      "end": 1670,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 1664,
                                        "end": 1667,
                                        "name": "Pos",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "typeArguments": {
                                        "type": "TSTypeParameterInstantiation",
                                        "start": 1667,
                                        "end": 1670,
                                        "params": [
                                          {
                                            "type": "TSTypeReference",
                                            "start": 1668,
                                            "end": 1669,
                                            "typeName": {
                                              "type": "Identifier",
                                              "start": 1668,
                                              "end": 1669,
                                              "name": "I",
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
                                  {
                                    "type": "TSTypeReference",
                                    "start": 1673,
                                    "end": 1674,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 1673,
                                      "end": 1674,
                                      "name": "R",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "typeArguments": null
                                  }
                                ]
                              }
                            },
                            {
                              "type": "TSTypeReference",
                              "start": 1677,
                              "end": 1684,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1677,
                                "end": 1681,
                                "name": "Next",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "start": 1681,
                                "end": 1684,
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "start": 1682,
                                    "end": 1683,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 1682,
                                      "end": 1683,
                                      "name": "I",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "typeArguments": null
                                  }
                                ]
                              }
                            }
                          ]
                        }
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 1695,
                    "end": 1700,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Literal",
                      "start": 1695,
                      "end": 1696,
                      "value": 1,
                      "raw": "1"
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1696,
                      "end": 1699,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1698,
                        "end": 1699,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1698,
                          "end": 1699,
                          "name": "R",
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
              },
              "indexType": {
                "type": "TSConditionalType",
                "start": 1716,
                "end": 1764,
                "checkType": {
                  "type": "TSTypeReference",
                  "start": 1716,
                  "end": 1722,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1716,
                    "end": 1719,
                    "name": "Pos",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 1719,
                    "end": 1722,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 1720,
                        "end": 1721,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1720,
                          "end": 1721,
                          "name": "I",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                },
                "extendsType": {
                  "type": "TSTypeReference",
                  "start": 1731,
                  "end": 1740,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1731,
                    "end": 1737,
                    "name": "Length",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 1737,
                    "end": 1740,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 1738,
                        "end": 1739,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1738,
                          "end": 1739,
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                },
                "trueType": {
                  "type": "TSLiteralType",
                  "start": 1751,
                  "end": 1752,
                  "literal": {
                    "type": "Literal",
                    "start": 1751,
                    "end": 1752,
                    "value": 1,
                    "raw": "1"
                  }
                },
                "falseType": {
                  "type": "TSLiteralType",
                  "start": 1763,
                  "end": 1764,
                  "literal": {
                    "type": "Literal",
                    "start": 1763,
                    "end": 1764,
                    "value": 0,
                    "raw": "0"
                  }
                }
              }
            },
            "declare": false
          },
          {
            "type": "TSTypeAliasDeclaration",
            "start": 1777,
            "end": 1901,
            "id": {
              "type": "Identifier",
              "start": 1782,
              "end": 1788,
              "name": "Concat",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 1788,
              "end": 1824,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 1789,
                  "end": 1805,
                  "name": {
                    "type": "Identifier",
                    "start": 1789,
                    "end": 1791,
                    "name": "T1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": {
                    "type": "TSArrayType",
                    "start": 1800,
                    "end": 1805,
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 1800,
                      "end": 1803
                    }
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 1807,
                  "end": 1823,
                  "name": {
                    "type": "Identifier",
                    "start": 1807,
                    "end": 1809,
                    "name": "T2",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": {
                    "type": "TSArrayType",
                    "start": 1818,
                    "end": 1823,
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 1818,
                      "end": 1821
                    }
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1835,
              "end": 1900,
              "typeName": {
                "type": "Identifier",
                "start": 1835,
                "end": 1842,
                "name": "Reverse",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1842,
                "end": 1900,
                "params": [
                  {
                    "type": "TSConditionalType",
                    "start": 1843,
                    "end": 1895,
                    "checkType": {
                      "type": "TSTypeReference",
                      "start": 1843,
                      "end": 1854,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1843,
                        "end": 1850,
                        "name": "Reverse",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 1850,
                        "end": 1854,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 1851,
                            "end": 1853,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1851,
                              "end": 1853,
                              "name": "T1",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        ]
                      }
                    },
                    "extendsType": {
                      "type": "TSInferType",
                      "start": 1863,
                      "end": 1870,
                      "typeParameter": {
                        "type": "TSTypeParameter",
                        "start": 1869,
                        "end": 1870,
                        "name": {
                          "type": "Identifier",
                          "start": 1869,
                          "end": 1870,
                          "name": "R",
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
                    },
                    "trueType": {
                      "type": "TSTypeReference",
                      "start": 1873,
                      "end": 1887,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1873,
                        "end": 1877,
                        "name": "Cast",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 1877,
                        "end": 1887,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 1878,
                            "end": 1879,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1878,
                              "end": 1879,
                              "name": "R",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          },
                          {
                            "type": "TSArrayType",
                            "start": 1881,
                            "end": 1886,
                            "elementType": {
                              "type": "TSAnyKeyword",
                              "start": 1881,
                              "end": 1884
                            }
                          }
                        ]
                      }
                    },
                    "falseType": {
                      "type": "TSNeverKeyword",
                      "start": 1890,
                      "end": 1895
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 1897,
                    "end": 1899,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1897,
                      "end": 1899,
                      "name": "T2",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            },
            "declare": false
          },
          {
            "type": "TSTypeAliasDeclaration",
            "start": 1907,
            "end": 1964,
            "id": {
              "type": "Identifier",
              "start": 1912,
              "end": 1918,
              "name": "Append",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 1918,
              "end": 1938,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 1919,
                  "end": 1920,
                  "name": {
                    "type": "Identifier",
                    "start": 1919,
                    "end": 1920,
                    "name": "E",
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
                  "start": 1922,
                  "end": 1937,
                  "name": {
                    "type": "Identifier",
                    "start": 1922,
                    "end": 1923,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": {
                    "type": "TSArrayType",
                    "start": 1932,
                    "end": 1937,
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 1932,
                      "end": 1935
                    }
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1949,
              "end": 1963,
              "typeName": {
                "type": "Identifier",
                "start": 1949,
                "end": 1955,
                "name": "Concat",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1955,
                "end": 1963,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 1956,
                    "end": 1957,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1956,
                      "end": 1957,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTupleType",
                    "start": 1959,
                    "end": 1962,
                    "elementTypes": [
                      {
                        "type": "TSTypeReference",
                        "start": 1960,
                        "end": 1961,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1960,
                          "end": 1961,
                          "name": "E",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                ]
              }
            },
            "declare": false
          },
          {
            "type": "TSTypeAliasDeclaration",
            "start": 1970,
            "end": 2037,
            "id": {
              "type": "Identifier",
              "start": 1975,
              "end": 1988,
              "name": "ValueOfRecord",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 1988,
              "end": 1991,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 1989,
                  "end": 1990,
                  "name": {
                    "type": "Identifier",
                    "start": 1989,
                    "end": 1990,
                    "name": "R",
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
            "typeAnnotation": {
              "type": "TSConditionalType",
              "start": 1994,
              "end": 2036,
              "checkType": {
                "type": "TSTypeReference",
                "start": 1994,
                "end": 1995,
                "typeName": {
                  "type": "Identifier",
                  "start": 1994,
                  "end": 1995,
                  "name": "R",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              "extendsType": {
                "type": "TSTypeReference",
                "start": 2004,
                "end": 2024,
                "typeName": {
                  "type": "Identifier",
                  "start": 2004,
                  "end": 2010,
                  "name": "Record",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 2010,
                  "end": 2024,
                  "params": [
                    {
                      "type": "TSAnyKeyword",
                      "start": 2011,
                      "end": 2014
                    },
                    {
                      "type": "TSInferType",
                      "start": 2016,
                      "end": 2023,
                      "typeParameter": {
                        "type": "TSTypeParameter",
                        "start": 2022,
                        "end": 2023,
                        "name": {
                          "type": "Identifier",
                          "start": 2022,
                          "end": 2023,
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
                    }
                  ]
                }
              },
              "trueType": {
                "type": "TSTypeReference",
                "start": 2027,
                "end": 2028,
                "typeName": {
                  "type": "Identifier",
                  "start": 2027,
                  "end": 2028,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              "falseType": {
                "type": "TSNeverKeyword",
                "start": 2031,
                "end": 2036
              }
            },
            "declare": false
          }
        ]
      },
      "kind": "namespace",
      "declare": true,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 2041,
      "end": 2119,
      "id": {
        "type": "Identifier",
        "start": 2059,
        "end": 2060,
        "name": "R",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 2061,
        "end": 2119,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 2067,
            "end": 2117,
            "declaration": {
              "type": "TSTypeAliasDeclaration",
              "start": 2074,
              "end": 2117,
              "id": {
                "type": "Identifier",
                "start": 2079,
                "end": 2090,
                "name": "Placeholder",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeParameters": null,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 2093,
                "end": 2116,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 2095,
                    "end": 2114,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 2095,
                      "end": 2108,
                      "name": "__placeholder",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2108,
                      "end": 2114,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 2110,
                        "end": 2114
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              },
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "type"
          }
        ]
      },
      "kind": "namespace",
      "declare": true,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 2121,
      "end": 3489,
      "id": {
        "type": "Identifier",
        "start": 2139,
        "end": 2144,
        "name": "Curry",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 2145,
        "end": 3489,
        "body": [
          {
            "type": "TSTypeAliasDeclaration",
            "start": 2151,
            "end": 2340,
            "id": {
              "type": "Identifier",
              "start": 2156,
              "end": 2161,
              "name": "GapOf",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 2161,
              "end": 2232,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 2162,
                  "end": 2178,
                  "name": {
                    "type": "Identifier",
                    "start": 2162,
                    "end": 2164,
                    "name": "T1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": {
                    "type": "TSArrayType",
                    "start": 2173,
                    "end": 2178,
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 2173,
                      "end": 2176
                    }
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 2180,
                  "end": 2196,
                  "name": {
                    "type": "Identifier",
                    "start": 2180,
                    "end": 2182,
                    "name": "T2",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": {
                    "type": "TSArrayType",
                    "start": 2191,
                    "end": 2196,
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 2191,
                      "end": 2194
                    }
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 2198,
                  "end": 2214,
                  "name": {
                    "type": "Identifier",
                    "start": 2198,
                    "end": 2200,
                    "name": "TN",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": {
                    "type": "TSArrayType",
                    "start": 2209,
                    "end": 2214,
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 2209,
                      "end": 2212
                    }
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 2216,
                  "end": 2231,
                  "name": {
                    "type": "Identifier",
                    "start": 2216,
                    "end": 2217,
                    "name": "I",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": {
                    "type": "TSArrayType",
                    "start": 2226,
                    "end": 2231,
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 2226,
                      "end": 2229
                    }
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
            "typeAnnotation": {
              "type": "TSConditionalType",
              "start": 2243,
              "end": 2339,
              "checkType": {
                "type": "TSIndexedAccessType",
                "start": 2243,
                "end": 2259,
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 2243,
                  "end": 2245,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2243,
                    "end": 2245,
                    "name": "T1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "start": 2246,
                  "end": 2258,
                  "typeName": {
                    "type": "TSQualifiedName",
                    "start": 2246,
                    "end": 2255,
                    "left": {
                      "type": "Identifier",
                      "start": 2246,
                      "end": 2251,
                      "name": "Tools",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 2252,
                      "end": 2255,
                      "name": "Pos",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 2255,
                    "end": 2258,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 2256,
                        "end": 2257,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2256,
                          "end": 2257,
                          "name": "I",
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
              "extendsType": {
                "type": "TSTypeReference",
                "start": 2268,
                "end": 2281,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 2268,
                  "end": 2281,
                  "left": {
                    "type": "Identifier",
                    "start": 2268,
                    "end": 2269,
                    "name": "R",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 2270,
                    "end": 2281,
                    "name": "Placeholder",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "typeArguments": null
              },
              "trueType": {
                "type": "TSTypeReference",
                "start": 2292,
                "end": 2326,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 2292,
                  "end": 2304,
                  "left": {
                    "type": "Identifier",
                    "start": 2292,
                    "end": 2297,
                    "name": "Tools",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 2298,
                    "end": 2304,
                    "name": "Append",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 2304,
                  "end": 2326,
                  "params": [
                    {
                      "type": "TSIndexedAccessType",
                      "start": 2305,
                      "end": 2321,
                      "objectType": {
                        "type": "TSTypeReference",
                        "start": 2305,
                        "end": 2307,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2305,
                          "end": 2307,
                          "name": "T2",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      },
                      "indexType": {
                        "type": "TSTypeReference",
                        "start": 2308,
                        "end": 2320,
                        "typeName": {
                          "type": "TSQualifiedName",
                          "start": 2308,
                          "end": 2317,
                          "left": {
                            "type": "Identifier",
                            "start": 2308,
                            "end": 2313,
                            "name": "Tools",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 2314,
                            "end": 2317,
                            "name": "Pos",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 2317,
                          "end": 2320,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 2318,
                              "end": 2319,
                              "typeName": {
                                "type": "Identifier",
                                "start": 2318,
                                "end": 2319,
                                "name": "I",
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
                    {
                      "type": "TSTypeReference",
                      "start": 2323,
                      "end": 2325,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2323,
                        "end": 2325,
                        "name": "TN",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  ]
                }
              },
              "falseType": {
                "type": "TSTypeReference",
                "start": 2337,
                "end": 2339,
                "typeName": {
                  "type": "Identifier",
                  "start": 2337,
                  "end": 2339,
                  "name": "TN",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "declare": false
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 2346,
            "end": 2674,
            "id": {
              "type": "Identifier",
              "start": 2356,
              "end": 2368,
              "name": "GapsOfWorker",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 2368,
              "end": 2449,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 2369,
                  "end": 2385,
                  "name": {
                    "type": "Identifier",
                    "start": 2369,
                    "end": 2371,
                    "name": "T1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": {
                    "type": "TSArrayType",
                    "start": 2380,
                    "end": 2385,
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 2380,
                      "end": 2383
                    }
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 2387,
                  "end": 2403,
                  "name": {
                    "type": "Identifier",
                    "start": 2387,
                    "end": 2389,
                    "name": "T2",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": {
                    "type": "TSArrayType",
                    "start": 2398,
                    "end": 2403,
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 2398,
                      "end": 2401
                    }
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 2405,
                  "end": 2426,
                  "name": {
                    "type": "Identifier",
                    "start": 2405,
                    "end": 2407,
                    "name": "TN",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": {
                    "type": "TSArrayType",
                    "start": 2416,
                    "end": 2421,
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 2416,
                      "end": 2419
                    }
                  },
                  "default": {
                    "type": "TSTupleType",
                    "start": 2424,
                    "end": 2426,
                    "elementTypes": []
                  },
                  "in": false,
                  "out": false,
                  "const": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 2428,
                  "end": 2448,
                  "name": {
                    "type": "Identifier",
                    "start": 2428,
                    "end": 2429,
                    "name": "I",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": {
                    "type": "TSArrayType",
                    "start": 2438,
                    "end": 2443,
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 2438,
                      "end": 2441
                    }
                  },
                  "default": {
                    "type": "TSTupleType",
                    "start": 2446,
                    "end": 2448,
                    "elementTypes": []
                  },
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
            "body": {
              "type": "TSInterfaceBody",
              "start": 2450,
              "end": 2674,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 2460,
                  "end": 2562,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Literal",
                    "start": 2460,
                    "end": 2461,
                    "value": 0,
                    "raw": "0"
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2461,
                    "end": 2561,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 2463,
                      "end": 2561,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2463,
                        "end": 2469,
                        "name": "GapsOf",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 2469,
                        "end": 2561,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 2470,
                            "end": 2472,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2470,
                              "end": 2472,
                              "name": "T1",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          },
                          {
                            "type": "TSTypeReference",
                            "start": 2474,
                            "end": 2476,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2474,
                              "end": 2476,
                              "name": "T2",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          },
                          {
                            "type": "TSConditionalType",
                            "start": 2478,
                            "end": 2545,
                            "checkType": {
                              "type": "TSTypeReference",
                              "start": 2478,
                              "end": 2498,
                              "typeName": {
                                "type": "Identifier",
                                "start": 2478,
                                "end": 2483,
                                "name": "GapOf",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "start": 2483,
                                "end": 2498,
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "start": 2484,
                                    "end": 2486,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 2484,
                                      "end": 2486,
                                      "name": "T1",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "typeArguments": null
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "start": 2488,
                                    "end": 2490,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 2488,
                                      "end": 2490,
                                      "name": "T2",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "typeArguments": null
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "start": 2492,
                                    "end": 2494,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 2492,
                                      "end": 2494,
                                      "name": "TN",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "typeArguments": null
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "start": 2496,
                                    "end": 2497,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 2496,
                                      "end": 2497,
                                      "name": "I",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "typeArguments": null
                                  }
                                ]
                              }
                            },
                            "extendsType": {
                              "type": "TSInferType",
                              "start": 2507,
                              "end": 2514,
                              "typeParameter": {
                                "type": "TSTypeParameter",
                                "start": 2513,
                                "end": 2514,
                                "name": {
                                  "type": "Identifier",
                                  "start": 2513,
                                  "end": 2514,
                                  "name": "G",
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
                            },
                            "trueType": {
                              "type": "TSTypeReference",
                              "start": 2517,
                              "end": 2537,
                              "typeName": {
                                "type": "TSQualifiedName",
                                "start": 2517,
                                "end": 2527,
                                "left": {
                                  "type": "Identifier",
                                  "start": 2517,
                                  "end": 2522,
                                  "name": "Tools",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "right": {
                                  "type": "Identifier",
                                  "start": 2523,
                                  "end": 2527,
                                  "name": "Cast",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                }
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "start": 2527,
                                "end": 2537,
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "start": 2528,
                                    "end": 2529,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 2528,
                                      "end": 2529,
                                      "name": "G",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "typeArguments": null
                                  },
                                  {
                                    "type": "TSArrayType",
                                    "start": 2531,
                                    "end": 2536,
                                    "elementType": {
                                      "type": "TSAnyKeyword",
                                      "start": 2531,
                                      "end": 2534
                                    }
                                  }
                                ]
                              }
                            },
                            "falseType": {
                              "type": "TSNeverKeyword",
                              "start": 2540,
                              "end": 2545
                            }
                          },
                          {
                            "type": "TSTypeReference",
                            "start": 2547,
                            "end": 2560,
                            "typeName": {
                              "type": "TSQualifiedName",
                              "start": 2547,
                              "end": 2557,
                              "left": {
                                "type": "Identifier",
                                "start": 2547,
                                "end": 2552,
                                "name": "Tools",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 2553,
                                "end": 2557,
                                "name": "Next",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              }
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 2557,
                              "end": 2560,
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "start": 2558,
                                  "end": 2559,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 2558,
                                    "end": 2559,
                                    "name": "I",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                }
                              ]
                            }
                          }
                        ]
                      }
                    }
                  },
                  "accessibility": null,
                  "static": false
                },
                {
                  "type": "TSPropertySignature",
                  "start": 2571,
                  "end": 2668,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Literal",
                    "start": 2571,
                    "end": 2572,
                    "value": 1,
                    "raw": "1"
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2572,
                    "end": 2667,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 2574,
                      "end": 2667,
                      "typeName": {
                        "type": "TSQualifiedName",
                        "start": 2574,
                        "end": 2586,
                        "left": {
                          "type": "Identifier",
                          "start": 2574,
                          "end": 2579,
                          "name": "Tools",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 2580,
                          "end": 2586,
                          "name": "Concat",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 2586,
                        "end": 2667,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 2587,
                            "end": 2589,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2587,
                              "end": 2589,
                              "name": "TN",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          },
                          {
                            "type": "TSConditionalType",
                            "start": 2591,
                            "end": 2666,
                            "checkType": {
                              "type": "TSTypeReference",
                              "start": 2591,
                              "end": 2619,
                              "typeName": {
                                "type": "TSQualifiedName",
                                "start": 2591,
                                "end": 2601,
                                "left": {
                                  "type": "Identifier",
                                  "start": 2591,
                                  "end": 2596,
                                  "name": "Tools",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "right": {
                                  "type": "Identifier",
                                  "start": 2597,
                                  "end": 2601,
                                  "name": "Drop",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                }
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "start": 2601,
                                "end": 2619,
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "start": 2602,
                                    "end": 2614,
                                    "typeName": {
                                      "type": "TSQualifiedName",
                                      "start": 2602,
                                      "end": 2611,
                                      "left": {
                                        "type": "Identifier",
                                        "start": 2602,
                                        "end": 2607,
                                        "name": "Tools",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "right": {
                                        "type": "Identifier",
                                        "start": 2608,
                                        "end": 2611,
                                        "name": "Pos",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      }
                                    },
                                    "typeArguments": {
                                      "type": "TSTypeParameterInstantiation",
                                      "start": 2611,
                                      "end": 2614,
                                      "params": [
                                        {
                                          "type": "TSTypeReference",
                                          "start": 2612,
                                          "end": 2613,
                                          "typeName": {
                                            "type": "Identifier",
                                            "start": 2612,
                                            "end": 2613,
                                            "name": "I",
                                            "typeAnnotation": null,
                                            "decorators": [],
                                            "optional": false
                                          },
                                          "typeArguments": null
                                        }
                                      ]
                                    }
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "start": 2616,
                                    "end": 2618,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 2616,
                                      "end": 2618,
                                      "name": "T2",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "typeArguments": null
                                  }
                                ]
                              }
                            },
                            "extendsType": {
                              "type": "TSInferType",
                              "start": 2628,
                              "end": 2635,
                              "typeParameter": {
                                "type": "TSTypeParameter",
                                "start": 2634,
                                "end": 2635,
                                "name": {
                                  "type": "Identifier",
                                  "start": 2634,
                                  "end": 2635,
                                  "name": "D",
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
                            },
                            "trueType": {
                              "type": "TSTypeReference",
                              "start": 2638,
                              "end": 2658,
                              "typeName": {
                                "type": "TSQualifiedName",
                                "start": 2638,
                                "end": 2648,
                                "left": {
                                  "type": "Identifier",
                                  "start": 2638,
                                  "end": 2643,
                                  "name": "Tools",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "right": {
                                  "type": "Identifier",
                                  "start": 2644,
                                  "end": 2648,
                                  "name": "Cast",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                }
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "start": 2648,
                                "end": 2658,
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "start": 2649,
                                    "end": 2650,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 2649,
                                      "end": 2650,
                                      "name": "D",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "typeArguments": null
                                  },
                                  {
                                    "type": "TSArrayType",
                                    "start": 2652,
                                    "end": 2657,
                                    "elementType": {
                                      "type": "TSAnyKeyword",
                                      "start": 2652,
                                      "end": 2655
                                    }
                                  }
                                ]
                              }
                            },
                            "falseType": {
                              "type": "TSNeverKeyword",
                              "start": 2661,
                              "end": 2666
                            }
                          }
                        ]
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
            "type": "TSTypeAliasDeclaration",
            "start": 2679,
            "end": 2879,
            "id": {
              "type": "Identifier",
              "start": 2684,
              "end": 2690,
              "name": "GapsOf",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 2690,
              "end": 2771,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 2691,
                  "end": 2707,
                  "name": {
                    "type": "Identifier",
                    "start": 2691,
                    "end": 2693,
                    "name": "T1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": {
                    "type": "TSArrayType",
                    "start": 2702,
                    "end": 2707,
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 2702,
                      "end": 2705
                    }
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 2709,
                  "end": 2725,
                  "name": {
                    "type": "Identifier",
                    "start": 2709,
                    "end": 2711,
                    "name": "T2",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": {
                    "type": "TSArrayType",
                    "start": 2720,
                    "end": 2725,
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 2720,
                      "end": 2723
                    }
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 2727,
                  "end": 2748,
                  "name": {
                    "type": "Identifier",
                    "start": 2727,
                    "end": 2729,
                    "name": "TN",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": {
                    "type": "TSArrayType",
                    "start": 2738,
                    "end": 2743,
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 2738,
                      "end": 2741
                    }
                  },
                  "default": {
                    "type": "TSTupleType",
                    "start": 2746,
                    "end": 2748,
                    "elementTypes": []
                  },
                  "in": false,
                  "out": false,
                  "const": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 2750,
                  "end": 2770,
                  "name": {
                    "type": "Identifier",
                    "start": 2750,
                    "end": 2751,
                    "name": "I",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": {
                    "type": "TSArrayType",
                    "start": 2760,
                    "end": 2765,
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 2760,
                      "end": 2763
                    }
                  },
                  "default": {
                    "type": "TSTupleType",
                    "start": 2768,
                    "end": 2770,
                    "elementTypes": []
                  },
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
            "typeAnnotation": {
              "type": "TSIndexedAccessType",
              "start": 2774,
              "end": 2878,
              "objectType": {
                "type": "TSTypeReference",
                "start": 2774,
                "end": 2801,
                "typeName": {
                  "type": "Identifier",
                  "start": 2774,
                  "end": 2786,
                  "name": "GapsOfWorker",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 2786,
                  "end": 2801,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 2787,
                      "end": 2789,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2787,
                        "end": 2789,
                        "name": "T1",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 2791,
                      "end": 2793,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2791,
                        "end": 2793,
                        "name": "T2",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 2795,
                      "end": 2797,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2795,
                        "end": 2797,
                        "name": "TN",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 2799,
                      "end": 2800,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2799,
                        "end": 2800,
                        "name": "I",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  ]
                }
              },
              "indexType": {
                "type": "TSConditionalType",
                "start": 2811,
                "end": 2872,
                "checkType": {
                  "type": "TSTypeReference",
                  "start": 2811,
                  "end": 2823,
                  "typeName": {
                    "type": "TSQualifiedName",
                    "start": 2811,
                    "end": 2820,
                    "left": {
                      "type": "Identifier",
                      "start": 2811,
                      "end": 2816,
                      "name": "Tools",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 2817,
                      "end": 2820,
                      "name": "Pos",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 2820,
                    "end": 2823,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 2821,
                        "end": 2822,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2821,
                          "end": 2822,
                          "name": "I",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                },
                "extendsType": {
                  "type": "TSTypeReference",
                  "start": 2832,
                  "end": 2848,
                  "typeName": {
                    "type": "TSQualifiedName",
                    "start": 2832,
                    "end": 2844,
                    "left": {
                      "type": "Identifier",
                      "start": 2832,
                      "end": 2837,
                      "name": "Tools",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 2838,
                      "end": 2844,
                      "name": "Length",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 2844,
                    "end": 2848,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 2845,
                        "end": 2847,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2845,
                          "end": 2847,
                          "name": "T1",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                },
                "trueType": {
                  "type": "TSLiteralType",
                  "start": 2859,
                  "end": 2860,
                  "literal": {
                    "type": "Literal",
                    "start": 2859,
                    "end": 2860,
                    "value": 1,
                    "raw": "1"
                  }
                },
                "falseType": {
                  "type": "TSLiteralType",
                  "start": 2871,
                  "end": 2872,
                  "literal": {
                    "type": "Literal",
                    "start": 2871,
                    "end": 2872,
                    "value": 0,
                    "raw": "0"
                  }
                }
              }
            },
            "declare": false
          },
          {
            "type": "TSTypeAliasDeclaration",
            "start": 2885,
            "end": 2975,
            "id": {
              "type": "Identifier",
              "start": 2890,
              "end": 2901,
              "name": "PartialGaps",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 2901,
              "end": 2918,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 2902,
                  "end": 2917,
                  "name": {
                    "type": "Identifier",
                    "start": 2902,
                    "end": 2903,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": {
                    "type": "TSArrayType",
                    "start": 2912,
                    "end": 2917,
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 2912,
                      "end": 2915
                    }
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
            "typeAnnotation": {
              "type": "TSMappedType",
              "start": 2921,
              "end": 2974,
              "typeParameter": {
                "type": "TSTypeParameter",
                "start": 2932,
                "end": 2944,
                "name": {
                  "type": "Identifier",
                  "start": 2932,
                  "end": 2933,
                  "name": "K",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "constraint": {
                  "type": "TSTypeOperator",
                  "start": 2937,
                  "end": 2944,
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 2943,
                    "end": 2944,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2943,
                      "end": 2944,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "default": null,
                "in": false,
                "out": false,
                "const": false
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 2948,
                "end": 2968,
                "types": [
                  {
                    "type": "TSIndexedAccessType",
                    "start": 2948,
                    "end": 2952,
                    "objectType": {
                      "type": "TSTypeReference",
                      "start": 2948,
                      "end": 2949,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2948,
                        "end": 2949,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    },
                    "indexType": {
                      "type": "TSTypeReference",
                      "start": 2950,
                      "end": 2951,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2950,
                        "end": 2951,
                        "name": "K",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 2955,
                    "end": 2968,
                    "typeName": {
                      "type": "TSQualifiedName",
                      "start": 2955,
                      "end": 2968,
                      "left": {
                        "type": "Identifier",
                        "start": 2955,
                        "end": 2956,
                        "name": "R",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 2957,
                        "end": 2968,
                        "name": "Placeholder",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    "typeArguments": null
                  }
                ]
              },
              "optional": true,
              "readonly": null,
              "constraint": {
                "type": "TSTypeOperator",
                "start": 2937,
                "end": 2944,
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 2943,
                  "end": 2944,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2943,
                    "end": 2944,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              },
              "key": {
                "type": "Identifier",
                "start": 2932,
                "end": 2933,
                "name": "K",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "declare": false
          },
          {
            "type": "TSTypeAliasDeclaration",
            "start": 2981,
            "end": 3067,
            "id": {
              "type": "Identifier",
              "start": 2986,
              "end": 2997,
              "name": "CleanedGaps",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 2997,
              "end": 3014,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 2998,
                  "end": 3013,
                  "name": {
                    "type": "Identifier",
                    "start": 2998,
                    "end": 2999,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": {
                    "type": "TSArrayType",
                    "start": 3008,
                    "end": 3013,
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 3008,
                      "end": 3011
                    }
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
            "typeAnnotation": {
              "type": "TSMappedType",
              "start": 3017,
              "end": 3066,
              "typeParameter": {
                "type": "TSTypeParameter",
                "start": 3028,
                "end": 3040,
                "name": {
                  "type": "Identifier",
                  "start": 3028,
                  "end": 3029,
                  "name": "K",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "constraint": {
                  "type": "TSTypeOperator",
                  "start": 3033,
                  "end": 3040,
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 3039,
                    "end": 3040,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3039,
                      "end": 3040,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "default": null,
                "in": false,
                "out": false,
                "const": false
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 3043,
                "end": 3060,
                "typeName": {
                  "type": "Identifier",
                  "start": 3043,
                  "end": 3054,
                  "name": "NonNullable",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 3054,
                  "end": 3060,
                  "params": [
                    {
                      "type": "TSIndexedAccessType",
                      "start": 3055,
                      "end": 3059,
                      "objectType": {
                        "type": "TSTypeReference",
                        "start": 3055,
                        "end": 3056,
                        "typeName": {
                          "type": "Identifier",
                          "start": 3055,
                          "end": 3056,
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      },
                      "indexType": {
                        "type": "TSTypeReference",
                        "start": 3057,
                        "end": 3058,
                        "typeName": {
                          "type": "Identifier",
                          "start": 3057,
                          "end": 3058,
                          "name": "K",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    }
                  ]
                }
              },
              "optional": null,
              "readonly": null,
              "constraint": {
                "type": "TSTypeOperator",
                "start": 3033,
                "end": 3040,
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 3039,
                  "end": 3040,
                  "typeName": {
                    "type": "Identifier",
                    "start": 3039,
                    "end": 3040,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              },
              "key": {
                "type": "Identifier",
                "start": 3028,
                "end": 3029,
                "name": "K",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "declare": false
          },
          {
            "type": "TSTypeAliasDeclaration",
            "start": 3073,
            "end": 3130,
            "id": {
              "type": "Identifier",
              "start": 3078,
              "end": 3082,
              "name": "Gaps",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 3082,
              "end": 3099,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 3083,
                  "end": 3098,
                  "name": {
                    "type": "Identifier",
                    "start": 3083,
                    "end": 3084,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": {
                    "type": "TSArrayType",
                    "start": 3093,
                    "end": 3098,
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 3093,
                      "end": 3096
                    }
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 3102,
              "end": 3129,
              "typeName": {
                "type": "Identifier",
                "start": 3102,
                "end": 3113,
                "name": "CleanedGaps",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 3113,
                "end": 3129,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 3114,
                    "end": 3128,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3114,
                      "end": 3125,
                      "name": "PartialGaps",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 3125,
                      "end": 3128,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 3126,
                          "end": 3127,
                          "typeName": {
                            "type": "Identifier",
                            "start": 3126,
                            "end": 3127,
                            "name": "T",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      ]
                    }
                  }
                ]
              }
            },
            "declare": false
          },
          {
            "type": "TSTypeAliasDeclaration",
            "start": 3136,
            "end": 3487,
            "id": {
              "type": "Identifier",
              "start": 3141,
              "end": 3146,
              "name": "Curry",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 3146,
              "end": 3181,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 3147,
                  "end": 3180,
                  "name": {
                    "type": "Identifier",
                    "start": 3147,
                    "end": 3148,
                    "name": "F",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": {
                    "type": "TSFunctionType",
                    "start": 3158,
                    "end": 3179,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "RestElement",
                        "start": 3159,
                        "end": 3171,
                        "argument": {
                          "type": "Identifier",
                          "start": 3162,
                          "end": 3166,
                          "name": "args",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "decorators": [],
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 3166,
                          "end": 3171,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 3168,
                            "end": 3171
                          }
                        },
                        "value": null
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 3173,
                      "end": 3179,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 3176,
                        "end": 3179
                      }
                    }
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 3192,
              "end": 3486,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 3192,
                "end": 3209,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 3193,
                    "end": 3208,
                    "name": {
                      "type": "Identifier",
                      "start": 3193,
                      "end": 3194,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "constraint": {
                      "type": "TSArrayType",
                      "start": 3203,
                      "end": 3208,
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 3203,
                        "end": 3206
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
                  "type": "RestElement",
                  "start": 3210,
                  "end": 3272,
                  "argument": {
                    "type": "Identifier",
                    "start": 3213,
                    "end": 3217,
                    "name": "args",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3217,
                    "end": 3272,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 3219,
                      "end": 3272,
                      "typeName": {
                        "type": "TSQualifiedName",
                        "start": 3219,
                        "end": 3229,
                        "left": {
                          "type": "Identifier",
                          "start": 3219,
                          "end": 3224,
                          "name": "Tools",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 3225,
                          "end": 3229,
                          "name": "Cast",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 3229,
                        "end": 3272,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 3230,
                            "end": 3264,
                            "typeName": {
                              "type": "TSQualifiedName",
                              "start": 3230,
                              "end": 3240,
                              "left": {
                                "type": "Identifier",
                                "start": 3230,
                                "end": 3235,
                                "name": "Tools",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 3236,
                                "end": 3240,
                                "name": "Cast",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              }
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 3240,
                              "end": 3264,
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "start": 3241,
                                  "end": 3242,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 3241,
                                    "end": 3242,
                                    "name": "T",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                },
                                {
                                  "type": "TSTypeReference",
                                  "start": 3244,
                                  "end": 3263,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 3244,
                                    "end": 3248,
                                    "name": "Gaps",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": {
                                    "type": "TSTypeParameterInstantiation",
                                    "start": 3248,
                                    "end": 3263,
                                    "params": [
                                      {
                                        "type": "TSTypeReference",
                                        "start": 3249,
                                        "end": 3262,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 3249,
                                          "end": 3259,
                                          "name": "Parameters",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "typeArguments": {
                                          "type": "TSTypeParameterInstantiation",
                                          "start": 3259,
                                          "end": 3262,
                                          "params": [
                                            {
                                              "type": "TSTypeReference",
                                              "start": 3260,
                                              "end": 3261,
                                              "typeName": {
                                                "type": "Identifier",
                                                "start": 3260,
                                                "end": 3261,
                                                "name": "F",
                                                "typeAnnotation": null,
                                                "decorators": [],
                                                "optional": false
                                              },
                                              "typeArguments": null
                                            }
                                          ]
                                        }
                                      }
                                    ]
                                  }
                                }
                              ]
                            }
                          },
                          {
                            "type": "TSArrayType",
                            "start": 3266,
                            "end": 3271,
                            "elementType": {
                              "type": "TSAnyKeyword",
                              "start": 3266,
                              "end": 3269
                            }
                          }
                        ]
                      }
                    }
                  },
                  "value": null
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 3274,
                "end": 3486,
                "typeAnnotation": {
                  "type": "TSConditionalType",
                  "start": 3289,
                  "end": 3486,
                  "checkType": {
                    "type": "TSTypeReference",
                    "start": 3289,
                    "end": 3313,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3289,
                      "end": 3295,
                      "name": "GapsOf",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 3295,
                      "end": 3313,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 3296,
                          "end": 3297,
                          "typeName": {
                            "type": "Identifier",
                            "start": 3296,
                            "end": 3297,
                            "name": "T",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 3299,
                          "end": 3312,
                          "typeName": {
                            "type": "Identifier",
                            "start": 3299,
                            "end": 3309,
                            "name": "Parameters",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 3309,
                            "end": 3312,
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "start": 3310,
                                "end": 3311,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 3310,
                                  "end": 3311,
                                  "name": "F",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
                              }
                            ]
                          }
                        }
                      ]
                    }
                  },
                  "extendsType": {
                    "type": "TSTupleType",
                    "start": 3322,
                    "end": 3337,
                    "elementTypes": [
                      {
                        "type": "TSAnyKeyword",
                        "start": 3323,
                        "end": 3326
                      },
                      {
                        "type": "TSRestType",
                        "start": 3328,
                        "end": 3336,
                        "typeAnnotation": {
                          "type": "TSArrayType",
                          "start": 3331,
                          "end": 3336,
                          "elementType": {
                            "type": "TSAnyKeyword",
                            "start": 3331,
                            "end": 3334
                          }
                        }
                      }
                    ]
                  },
                  "trueType": {
                    "type": "TSTypeReference",
                    "start": 3352,
                    "end": 3458,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3352,
                      "end": 3357,
                      "name": "Curry",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 3357,
                      "end": 3458,
                      "params": [
                        {
                          "type": "TSFunctionType",
                          "start": 3358,
                          "end": 3457,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "RestElement",
                              "start": 3359,
                              "end": 3439,
                              "argument": {
                                "type": "Identifier",
                                "start": 3362,
                                "end": 3366,
                                "name": "args",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "decorators": [],
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 3366,
                                "end": 3439,
                                "typeAnnotation": {
                                  "type": "TSConditionalType",
                                  "start": 3368,
                                  "end": 3439,
                                  "checkType": {
                                    "type": "TSTypeReference",
                                    "start": 3368,
                                    "end": 3392,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 3368,
                                      "end": 3374,
                                      "name": "GapsOf",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "typeArguments": {
                                      "type": "TSTypeParameterInstantiation",
                                      "start": 3374,
                                      "end": 3392,
                                      "params": [
                                        {
                                          "type": "TSTypeReference",
                                          "start": 3375,
                                          "end": 3376,
                                          "typeName": {
                                            "type": "Identifier",
                                            "start": 3375,
                                            "end": 3376,
                                            "name": "T",
                                            "typeAnnotation": null,
                                            "decorators": [],
                                            "optional": false
                                          },
                                          "typeArguments": null
                                        },
                                        {
                                          "type": "TSTypeReference",
                                          "start": 3378,
                                          "end": 3391,
                                          "typeName": {
                                            "type": "Identifier",
                                            "start": 3378,
                                            "end": 3388,
                                            "name": "Parameters",
                                            "typeAnnotation": null,
                                            "decorators": [],
                                            "optional": false
                                          },
                                          "typeArguments": {
                                            "type": "TSTypeParameterInstantiation",
                                            "start": 3388,
                                            "end": 3391,
                                            "params": [
                                              {
                                                "type": "TSTypeReference",
                                                "start": 3389,
                                                "end": 3390,
                                                "typeName": {
                                                  "type": "Identifier",
                                                  "start": 3389,
                                                  "end": 3390,
                                                  "name": "F",
                                                  "typeAnnotation": null,
                                                  "decorators": [],
                                                  "optional": false
                                                },
                                                "typeArguments": null
                                              }
                                            ]
                                          }
                                        }
                                      ]
                                    }
                                  },
                                  "extendsType": {
                                    "type": "TSInferType",
                                    "start": 3401,
                                    "end": 3408,
                                    "typeParameter": {
                                      "type": "TSTypeParameter",
                                      "start": 3407,
                                      "end": 3408,
                                      "name": {
                                        "type": "Identifier",
                                        "start": 3407,
                                        "end": 3408,
                                        "name": "G",
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
                                  },
                                  "trueType": {
                                    "type": "TSTypeReference",
                                    "start": 3411,
                                    "end": 3431,
                                    "typeName": {
                                      "type": "TSQualifiedName",
                                      "start": 3411,
                                      "end": 3421,
                                      "left": {
                                        "type": "Identifier",
                                        "start": 3411,
                                        "end": 3416,
                                        "name": "Tools",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "right": {
                                        "type": "Identifier",
                                        "start": 3417,
                                        "end": 3421,
                                        "name": "Cast",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      }
                                    },
                                    "typeArguments": {
                                      "type": "TSTypeParameterInstantiation",
                                      "start": 3421,
                                      "end": 3431,
                                      "params": [
                                        {
                                          "type": "TSTypeReference",
                                          "start": 3422,
                                          "end": 3423,
                                          "typeName": {
                                            "type": "Identifier",
                                            "start": 3422,
                                            "end": 3423,
                                            "name": "G",
                                            "typeAnnotation": null,
                                            "decorators": [],
                                            "optional": false
                                          },
                                          "typeArguments": null
                                        },
                                        {
                                          "type": "TSArrayType",
                                          "start": 3425,
                                          "end": 3430,
                                          "elementType": {
                                            "type": "TSAnyKeyword",
                                            "start": 3425,
                                            "end": 3428
                                          }
                                        }
                                      ]
                                    }
                                  },
                                  "falseType": {
                                    "type": "TSNeverKeyword",
                                    "start": 3434,
                                    "end": 3439
                                  }
                                }
                              },
                              "value": null
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "start": 3441,
                            "end": 3457,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 3444,
                              "end": 3457,
                              "typeName": {
                                "type": "Identifier",
                                "start": 3444,
                                "end": 3454,
                                "name": "ReturnType",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "start": 3454,
                                "end": 3457,
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "start": 3455,
                                    "end": 3456,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 3455,
                                      "end": 3456,
                                      "name": "F",
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
                      ]
                    }
                  },
                  "falseType": {
                    "type": "TSTypeReference",
                    "start": 3473,
                    "end": 3486,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3473,
                      "end": 3483,
                      "name": "ReturnType",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 3483,
                      "end": 3486,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 3484,
                          "end": 3485,
                          "typeName": {
                            "type": "Identifier",
                            "start": 3484,
                            "end": 3485,
                            "name": "F",
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
            "declare": false
          }
        ]
      },
      "kind": "namespace",
      "declare": true,
      "global": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
