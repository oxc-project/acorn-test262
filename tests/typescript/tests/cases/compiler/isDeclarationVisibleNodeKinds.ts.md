__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "schema",
        "optional": false,
        "typeAnnotation": null,
        "start": 25,
        "end": 31
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "createValidator1",
                "optional": false,
                "typeAnnotation": null,
                "start": 54,
                "end": 70
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "schema",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 79,
                      "end": 82
                    },
                    "start": 77,
                    "end": 82
                  },
                  "start": 71,
                  "end": 82
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSFunctionType",
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "name": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 86,
                          "end": 87
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 86,
                        "end": 87
                      }
                    ],
                    "start": 85,
                    "end": 88
                  },
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "data",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 95,
                            "end": 96
                          },
                          "typeArguments": null,
                          "start": 95,
                          "end": 96
                        },
                        "start": 93,
                        "end": 96
                      },
                      "start": 89,
                      "end": 96
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 101,
                        "end": 102
                      },
                      "typeArguments": null,
                      "start": 101,
                      "end": 102
                    },
                    "start": 98,
                    "end": 102
                  },
                  "start": 85,
                  "end": 102
                },
                "start": 83,
                "end": 102
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "undefined",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 120,
                      "end": 129
                    },
                    "start": 113,
                    "end": 130
                  }
                ],
                "start": 103,
                "end": 136
              },
              "expression": false,
              "start": 45,
              "end": 136
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 38,
            "end": 136
          }
        ],
        "start": 32,
        "end": 138
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 18,
      "end": 138
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "schema",
        "optional": false,
        "typeAnnotation": null,
        "start": 168,
        "end": 174
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "createValidator2",
                "optional": false,
                "typeAnnotation": null,
                "start": 197,
                "end": 213
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "schema",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 222,
                      "end": 225
                    },
                    "start": 220,
                    "end": 225
                  },
                  "start": 214,
                  "end": 225
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSConstructorType",
                  "abstract": false,
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "name": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 233,
                          "end": 234
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 233,
                        "end": 234
                      }
                    ],
                    "start": 232,
                    "end": 235
                  },
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "data",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 242,
                            "end": 243
                          },
                          "typeArguments": null,
                          "start": 242,
                          "end": 243
                        },
                        "start": 240,
                        "end": 243
                      },
                      "start": 236,
                      "end": 243
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 248,
                        "end": 249
                      },
                      "typeArguments": null,
                      "start": 248,
                      "end": 249
                    },
                    "start": 245,
                    "end": 249
                  },
                  "start": 228,
                  "end": 249
                },
                "start": 226,
                "end": 249
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "undefined",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 267,
                      "end": 276
                    },
                    "start": 260,
                    "end": 277
                  }
                ],
                "start": 250,
                "end": 283
              },
              "expression": false,
              "start": 188,
              "end": 283
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 181,
            "end": 283
          }
        ],
        "start": 175,
        "end": 285
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 161,
      "end": 285
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "schema",
        "optional": false,
        "typeAnnotation": null,
        "start": 309,
        "end": 315
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "createValidator3",
                "optional": false,
                "typeAnnotation": null,
                "start": 339,
                "end": 355
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "schema",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 364,
                      "end": 367
                    },
                    "start": 362,
                    "end": 367
                  },
                  "start": 356,
                  "end": 367
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 370,
                      "end": 376
                    },
                    {
                      "type": "TSTypeLiteral",
                      "members": [
                        {
                          "type": "TSConstructSignatureDeclaration",
                          "typeParameters": {
                            "type": "TSTypeParameterDeclaration",
                            "params": [
                              {
                                "type": "TSTypeParameter",
                                "name": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 386,
                                  "end": 387
                                },
                                "constraint": null,
                                "default": null,
                                "in": false,
                                "out": false,
                                "const": false,
                                "start": 386,
                                "end": 387
                              }
                            ],
                            "start": 385,
                            "end": 388
                          },
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "data",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 395,
                                    "end": 396
                                  },
                                  "typeArguments": null,
                                  "start": 395,
                                  "end": 396
                                },
                                "start": 393,
                                "end": 396
                              },
                              "start": 389,
                              "end": 396
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 399,
                                "end": 400
                              },
                              "typeArguments": null,
                              "start": 399,
                              "end": 400
                            },
                            "start": 397,
                            "end": 400
                          },
                          "start": 381,
                          "end": 401
                        }
                      ],
                      "start": 379,
                      "end": 403
                    }
                  ],
                  "start": 370,
                  "end": 403
                },
                "start": 368,
                "end": 403
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "undefined",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 422,
                      "end": 431
                    },
                    "start": 415,
                    "end": 432
                  }
                ],
                "start": 405,
                "end": 438
              },
              "expression": false,
              "start": 330,
              "end": 438
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 323,
            "end": 438
          }
        ],
        "start": 316,
        "end": 440
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 302,
      "end": 440
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "schema",
        "optional": false,
        "typeAnnotation": null,
        "start": 464,
        "end": 470
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "createValidator4",
                "optional": false,
                "typeAnnotation": null,
                "start": 494,
                "end": 510
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "schema",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 519,
                      "end": 522
                    },
                    "start": 517,
                    "end": 522
                  },
                  "start": 511,
                  "end": 522
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSConstructSignatureDeclaration",
                        "typeParameters": {
                          "type": "TSTypeParameterDeclaration",
                          "params": [
                            {
                              "type": "TSTypeParameter",
                              "name": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 532,
                                "end": 533
                              },
                              "constraint": null,
                              "default": null,
                              "in": false,
                              "out": false,
                              "const": false,
                              "start": 532,
                              "end": 533
                            }
                          ],
                          "start": 531,
                          "end": 534
                        },
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "data",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 541,
                                  "end": 542
                                },
                                "typeArguments": null,
                                "start": 541,
                                "end": 542
                              },
                              "start": 539,
                              "end": 542
                            },
                            "start": 535,
                            "end": 542
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 545,
                              "end": 546
                            },
                            "typeArguments": null,
                            "start": 545,
                            "end": 546
                          },
                          "start": 543,
                          "end": 546
                        },
                        "start": 527,
                        "end": 547
                      }
                    ],
                    "start": 525,
                    "end": 549
                  },
                  "start": 525,
                  "end": 551
                },
                "start": 523,
                "end": 551
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "undefined",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 569,
                      "end": 578
                    },
                    "start": 562,
                    "end": 579
                  }
                ],
                "start": 552,
                "end": 585
              },
              "expression": false,
              "start": 485,
              "end": 585
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 478,
            "end": 585
          }
        ],
        "start": 471,
        "end": 587
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 457,
      "end": 587
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "schema",
        "optional": false,
        "typeAnnotation": null,
        "start": 613,
        "end": 619
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "createValidator5",
                "optional": false,
                "typeAnnotation": null,
                "start": 642,
                "end": 658
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "schema",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 667,
                      "end": 670
                    },
                    "start": 665,
                    "end": 670
                  },
                  "start": 659,
                  "end": 670
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSConstructSignatureDeclaration",
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "name": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 680,
                              "end": 681
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 680,
                            "end": 681
                          }
                        ],
                        "start": 679,
                        "end": 682
                      },
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "data",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 689,
                                "end": 690
                              },
                              "typeArguments": null,
                              "start": 689,
                              "end": 690
                            },
                            "start": 687,
                            "end": 690
                          },
                          "start": 683,
                          "end": 690
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 693,
                            "end": 694
                          },
                          "typeArguments": null,
                          "start": 693,
                          "end": 694
                        },
                        "start": 691,
                        "end": 694
                      },
                      "start": 675,
                      "end": 694
                    }
                  ],
                  "start": 673,
                  "end": 696
                },
                "start": 671,
                "end": 696
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "undefined",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 714,
                      "end": 723
                    },
                    "start": 707,
                    "end": 724
                  }
                ],
                "start": 697,
                "end": 730
              },
              "expression": false,
              "start": 633,
              "end": 730
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 626,
            "end": 730
          }
        ],
        "start": 620,
        "end": 732
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 606,
      "end": 732
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "schema",
        "optional": false,
        "typeAnnotation": null,
        "start": 756,
        "end": 762
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "createValidator6",
                "optional": false,
                "typeAnnotation": null,
                "start": 785,
                "end": 801
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "schema",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 810,
                      "end": 813
                    },
                    "start": 808,
                    "end": 813
                  },
                  "start": 802,
                  "end": 813
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTupleType",
                  "elementTypes": [
                    {
                      "type": "TSConstructorType",
                      "abstract": false,
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "name": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 823,
                              "end": 824
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 823,
                            "end": 824
                          }
                        ],
                        "start": 822,
                        "end": 825
                      },
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "data",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 832,
                                "end": 833
                              },
                              "typeArguments": null,
                              "start": 832,
                              "end": 833
                            },
                            "start": 830,
                            "end": 833
                          },
                          "start": 826,
                          "end": 833
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 838,
                            "end": 839
                          },
                          "typeArguments": null,
                          "start": 838,
                          "end": 839
                        },
                        "start": 835,
                        "end": 839
                      },
                      "start": 818,
                      "end": 839
                    },
                    {
                      "type": "TSNumberKeyword",
                      "start": 841,
                      "end": 847
                    }
                  ],
                  "start": 816,
                  "end": 848
                },
                "start": 814,
                "end": 848
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "undefined",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 866,
                      "end": 875
                    },
                    "start": 859,
                    "end": 876
                  }
                ],
                "start": 849,
                "end": 882
              },
              "expression": false,
              "start": 776,
              "end": 882
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 769,
            "end": 882
          }
        ],
        "start": 763,
        "end": 884
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 749,
      "end": 884
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "schema",
        "optional": false,
        "typeAnnotation": null,
        "start": 908,
        "end": 914
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "createValidator7",
                "optional": false,
                "typeAnnotation": null,
                "start": 937,
                "end": 953
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "schema",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 962,
                      "end": 965
                    },
                    "start": 960,
                    "end": 965
                  },
                  "start": 954,
                  "end": 965
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSConstructorType",
                    "abstract": false,
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "name": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 974,
                            "end": 975
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 974,
                          "end": 975
                        }
                      ],
                      "start": 973,
                      "end": 976
                    },
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "data",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 983,
                              "end": 984
                            },
                            "typeArguments": null,
                            "start": 983,
                            "end": 984
                          },
                          "start": 981,
                          "end": 984
                        },
                        "start": 977,
                        "end": 984
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 987,
                          "end": 988
                        },
                        "typeArguments": null,
                        "start": 987,
                        "end": 988
                      },
                      "start": 985,
                      "end": 988
                    },
                    "start": 969,
                    "end": 988
                  },
                  "start": 968,
                  "end": 992
                },
                "start": 966,
                "end": 992
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "undefined",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1010,
                      "end": 1019
                    },
                    "start": 1003,
                    "end": 1020
                  }
                ],
                "start": 993,
                "end": 1026
              },
              "expression": false,
              "start": 928,
              "end": 1026
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 921,
            "end": 1026
          }
        ],
        "start": 915,
        "end": 1028
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 901,
      "end": 1028
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "schema",
        "optional": false,
        "typeAnnotation": null,
        "start": 1055,
        "end": 1061
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "createValidator8",
                "optional": false,
                "typeAnnotation": null,
                "start": 1084,
                "end": 1100
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "schema",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1109,
                      "end": 1112
                    },
                    "start": 1107,
                    "end": 1112
                  },
                  "start": 1101,
                  "end": 1112
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Array",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1115,
                    "end": 1120
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeLiteral",
                        "members": [
                          {
                            "type": "TSCallSignatureDeclaration",
                            "typeParameters": {
                              "type": "TSTypeParameterDeclaration",
                              "params": [
                                {
                                  "type": "TSTypeParameter",
                                  "name": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1124,
                                    "end": 1125
                                  },
                                  "constraint": null,
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 1124,
                                  "end": 1125
                                }
                              ],
                              "start": 1123,
                              "end": 1126
                            },
                            "params": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "data",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "T",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1133,
                                      "end": 1134
                                    },
                                    "typeArguments": null,
                                    "start": 1133,
                                    "end": 1134
                                  },
                                  "start": 1131,
                                  "end": 1134
                                },
                                "start": 1127,
                                "end": 1134
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1138,
                                  "end": 1139
                                },
                                "typeArguments": null,
                                "start": 1138,
                                "end": 1139
                              },
                              "start": 1136,
                              "end": 1139
                            },
                            "start": 1123,
                            "end": 1139
                          }
                        ],
                        "start": 1121,
                        "end": 1140
                      }
                    ],
                    "start": 1120,
                    "end": 1141
                  },
                  "start": 1115,
                  "end": 1141
                },
                "start": 1113,
                "end": 1141
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "undefined",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1159,
                      "end": 1168
                    },
                    "start": 1152,
                    "end": 1169
                  }
                ],
                "start": 1142,
                "end": 1175
              },
              "expression": false,
              "start": 1075,
              "end": 1175
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1068,
            "end": 1175
          }
        ],
        "start": 1062,
        "end": 1177
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 1048,
      "end": 1177
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "schema",
        "optional": false,
        "typeAnnotation": null,
        "start": 1187,
        "end": 1193
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 1213,
                "end": 1214
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "createValidator9",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1229,
                      "end": 1245
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSFunctionType",
                          "typeParameters": {
                            "type": "TSTypeParameterDeclaration",
                            "params": [
                              {
                                "type": "TSTypeParameter",
                                "name": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1250,
                                  "end": 1251
                                },
                                "constraint": null,
                                "default": null,
                                "in": false,
                                "out": false,
                                "const": false,
                                "start": 1250,
                                "end": 1251
                              }
                            ],
                            "start": 1249,
                            "end": 1252
                          },
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "data",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1259,
                                    "end": 1260
                                  },
                                  "typeArguments": null,
                                  "start": 1259,
                                  "end": 1260
                                },
                                "start": 1257,
                                "end": 1260
                              },
                              "start": 1253,
                              "end": 1260
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1265,
                                "end": 1266
                              },
                              "typeArguments": null,
                              "start": 1265,
                              "end": 1266
                            },
                            "start": 1262,
                            "end": 1266
                          },
                          "start": 1249,
                          "end": 1266
                        },
                        "start": 1247,
                        "end": 1266
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "undefined",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1288,
                              "end": 1297
                            },
                            "start": 1281,
                            "end": 1298
                          }
                        ],
                        "start": 1267,
                        "end": 1308
                      },
                      "expression": false,
                      "start": 1245,
                      "end": 1308
                    },
                    "kind": "get",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 1225,
                    "end": 1308
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "createValidator10",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1330,
                      "end": 1347
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "v",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSFunctionType",
                              "typeParameters": {
                                "type": "TSTypeParameterDeclaration",
                                "params": [
                                  {
                                    "type": "TSTypeParameter",
                                    "name": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "T",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1352,
                                      "end": 1353
                                    },
                                    "constraint": null,
                                    "default": null,
                                    "in": false,
                                    "out": false,
                                    "const": false,
                                    "start": 1352,
                                    "end": 1353
                                  }
                                ],
                                "start": 1351,
                                "end": 1354
                              },
                              "params": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "data",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "T",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1361,
                                        "end": 1362
                                      },
                                      "typeArguments": null,
                                      "start": 1361,
                                      "end": 1362
                                    },
                                    "start": 1359,
                                    "end": 1362
                                  },
                                  "start": 1355,
                                  "end": 1362
                                }
                              ],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1367,
                                    "end": 1368
                                  },
                                  "typeArguments": null,
                                  "start": 1367,
                                  "end": 1368
                                },
                                "start": 1364,
                                "end": 1368
                              },
                              "start": 1351,
                              "end": 1368
                            },
                            "start": 1349,
                            "end": 1368
                          },
                          "start": 1348,
                          "end": 1368
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 1370,
                        "end": 1381
                      },
                      "expression": false,
                      "start": 1347,
                      "end": 1381
                    },
                    "kind": "set",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 1326,
                    "end": 1381
                  }
                ],
                "start": 1215,
                "end": 1387
              },
              "abstract": false,
              "declare": false,
              "start": 1207,
              "end": 1387
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1200,
            "end": 1387
          }
        ],
        "start": 1194,
        "end": 1389
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 1180,
      "end": 1389
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 18,
  "end": 1389
}
```
