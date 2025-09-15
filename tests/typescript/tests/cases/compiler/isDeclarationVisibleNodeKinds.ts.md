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
        "start": 28,
        "end": 34
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
                "start": 57,
                "end": 73
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
                      "start": 82,
                      "end": 85
                    },
                    "start": 80,
                    "end": 85
                  },
                  "start": 74,
                  "end": 85
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
                          "start": 89,
                          "end": 90
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 89,
                        "end": 90
                      }
                    ],
                    "start": 88,
                    "end": 91
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
                            "start": 98,
                            "end": 99
                          },
                          "typeArguments": null,
                          "start": 98,
                          "end": 99
                        },
                        "start": 96,
                        "end": 99
                      },
                      "start": 92,
                      "end": 99
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
                        "start": 104,
                        "end": 105
                      },
                      "typeArguments": null,
                      "start": 104,
                      "end": 105
                    },
                    "start": 101,
                    "end": 105
                  },
                  "start": 88,
                  "end": 105
                },
                "start": 86,
                "end": 105
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
                      "start": 123,
                      "end": 132
                    },
                    "start": 116,
                    "end": 133
                  }
                ],
                "start": 106,
                "end": 139
              },
              "expression": false,
              "start": 48,
              "end": 139
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 41,
            "end": 139
          }
        ],
        "start": 35,
        "end": 141
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 18,
      "end": 141
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "schema",
        "optional": false,
        "typeAnnotation": null,
        "start": 174,
        "end": 180
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
                "start": 203,
                "end": 219
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
                      "start": 228,
                      "end": 231
                    },
                    "start": 226,
                    "end": 231
                  },
                  "start": 220,
                  "end": 231
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
                          "start": 239,
                          "end": 240
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 239,
                        "end": 240
                      }
                    ],
                    "start": 238,
                    "end": 241
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
                            "start": 248,
                            "end": 249
                          },
                          "typeArguments": null,
                          "start": 248,
                          "end": 249
                        },
                        "start": 246,
                        "end": 249
                      },
                      "start": 242,
                      "end": 249
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
                        "start": 254,
                        "end": 255
                      },
                      "typeArguments": null,
                      "start": 254,
                      "end": 255
                    },
                    "start": 251,
                    "end": 255
                  },
                  "start": 234,
                  "end": 255
                },
                "start": 232,
                "end": 255
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
                      "start": 273,
                      "end": 282
                    },
                    "start": 266,
                    "end": 283
                  }
                ],
                "start": 256,
                "end": 289
              },
              "expression": false,
              "start": 194,
              "end": 289
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 187,
            "end": 289
          }
        ],
        "start": 181,
        "end": 291
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 164,
      "end": 291
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "schema",
        "optional": false,
        "typeAnnotation": null,
        "start": 318,
        "end": 324
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
                "start": 348,
                "end": 364
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
                      "start": 373,
                      "end": 376
                    },
                    "start": 371,
                    "end": 376
                  },
                  "start": 365,
                  "end": 376
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 379,
                      "end": 385
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
                                  "start": 395,
                                  "end": 396
                                },
                                "constraint": null,
                                "default": null,
                                "in": false,
                                "out": false,
                                "const": false,
                                "start": 395,
                                "end": 396
                              }
                            ],
                            "start": 394,
                            "end": 397
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
                                    "start": 404,
                                    "end": 405
                                  },
                                  "typeArguments": null,
                                  "start": 404,
                                  "end": 405
                                },
                                "start": 402,
                                "end": 405
                              },
                              "start": 398,
                              "end": 405
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
                                "start": 408,
                                "end": 409
                              },
                              "typeArguments": null,
                              "start": 408,
                              "end": 409
                            },
                            "start": 406,
                            "end": 409
                          },
                          "start": 390,
                          "end": 410
                        }
                      ],
                      "start": 388,
                      "end": 412
                    }
                  ],
                  "start": 379,
                  "end": 412
                },
                "start": 377,
                "end": 412
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
                      "start": 431,
                      "end": 440
                    },
                    "start": 424,
                    "end": 441
                  }
                ],
                "start": 414,
                "end": 447
              },
              "expression": false,
              "start": 339,
              "end": 447
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 332,
            "end": 447
          }
        ],
        "start": 325,
        "end": 449
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 308,
      "end": 449
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "schema",
        "optional": false,
        "typeAnnotation": null,
        "start": 476,
        "end": 482
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
                "start": 506,
                "end": 522
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
                      "start": 531,
                      "end": 534
                    },
                    "start": 529,
                    "end": 534
                  },
                  "start": 523,
                  "end": 534
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
                                "start": 544,
                                "end": 545
                              },
                              "constraint": null,
                              "default": null,
                              "in": false,
                              "out": false,
                              "const": false,
                              "start": 544,
                              "end": 545
                            }
                          ],
                          "start": 543,
                          "end": 546
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
                                  "start": 553,
                                  "end": 554
                                },
                                "typeArguments": null,
                                "start": 553,
                                "end": 554
                              },
                              "start": 551,
                              "end": 554
                            },
                            "start": 547,
                            "end": 554
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
                              "start": 557,
                              "end": 558
                            },
                            "typeArguments": null,
                            "start": 557,
                            "end": 558
                          },
                          "start": 555,
                          "end": 558
                        },
                        "start": 539,
                        "end": 559
                      }
                    ],
                    "start": 537,
                    "end": 561
                  },
                  "start": 537,
                  "end": 563
                },
                "start": 535,
                "end": 563
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
                      "start": 581,
                      "end": 590
                    },
                    "start": 574,
                    "end": 591
                  }
                ],
                "start": 564,
                "end": 597
              },
              "expression": false,
              "start": 497,
              "end": 597
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 490,
            "end": 597
          }
        ],
        "start": 483,
        "end": 599
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 466,
      "end": 599
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "schema",
        "optional": false,
        "typeAnnotation": null,
        "start": 628,
        "end": 634
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
                "start": 657,
                "end": 673
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
                      "start": 682,
                      "end": 685
                    },
                    "start": 680,
                    "end": 685
                  },
                  "start": 674,
                  "end": 685
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
                              "start": 695,
                              "end": 696
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 695,
                            "end": 696
                          }
                        ],
                        "start": 694,
                        "end": 697
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
                                "start": 704,
                                "end": 705
                              },
                              "typeArguments": null,
                              "start": 704,
                              "end": 705
                            },
                            "start": 702,
                            "end": 705
                          },
                          "start": 698,
                          "end": 705
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
                            "start": 708,
                            "end": 709
                          },
                          "typeArguments": null,
                          "start": 708,
                          "end": 709
                        },
                        "start": 706,
                        "end": 709
                      },
                      "start": 690,
                      "end": 709
                    }
                  ],
                  "start": 688,
                  "end": 711
                },
                "start": 686,
                "end": 711
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
                      "start": 729,
                      "end": 738
                    },
                    "start": 722,
                    "end": 739
                  }
                ],
                "start": 712,
                "end": 745
              },
              "expression": false,
              "start": 648,
              "end": 745
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 641,
            "end": 745
          }
        ],
        "start": 635,
        "end": 747
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 618,
      "end": 747
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "schema",
        "optional": false,
        "typeAnnotation": null,
        "start": 774,
        "end": 780
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
                "start": 803,
                "end": 819
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
                      "start": 828,
                      "end": 831
                    },
                    "start": 826,
                    "end": 831
                  },
                  "start": 820,
                  "end": 831
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
                              "start": 841,
                              "end": 842
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 841,
                            "end": 842
                          }
                        ],
                        "start": 840,
                        "end": 843
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
                                "start": 850,
                                "end": 851
                              },
                              "typeArguments": null,
                              "start": 850,
                              "end": 851
                            },
                            "start": 848,
                            "end": 851
                          },
                          "start": 844,
                          "end": 851
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
                            "start": 856,
                            "end": 857
                          },
                          "typeArguments": null,
                          "start": 856,
                          "end": 857
                        },
                        "start": 853,
                        "end": 857
                      },
                      "start": 836,
                      "end": 857
                    },
                    {
                      "type": "TSNumberKeyword",
                      "start": 859,
                      "end": 865
                    }
                  ],
                  "start": 834,
                  "end": 866
                },
                "start": 832,
                "end": 866
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
                      "start": 884,
                      "end": 893
                    },
                    "start": 877,
                    "end": 894
                  }
                ],
                "start": 867,
                "end": 900
              },
              "expression": false,
              "start": 794,
              "end": 900
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 787,
            "end": 900
          }
        ],
        "start": 781,
        "end": 902
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 764,
      "end": 902
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "schema",
        "optional": false,
        "typeAnnotation": null,
        "start": 929,
        "end": 935
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
                "start": 958,
                "end": 974
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
                      "start": 983,
                      "end": 986
                    },
                    "start": 981,
                    "end": 986
                  },
                  "start": 975,
                  "end": 986
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
                            "start": 995,
                            "end": 996
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 995,
                          "end": 996
                        }
                      ],
                      "start": 994,
                      "end": 997
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
                              "start": 1004,
                              "end": 1005
                            },
                            "typeArguments": null,
                            "start": 1004,
                            "end": 1005
                          },
                          "start": 1002,
                          "end": 1005
                        },
                        "start": 998,
                        "end": 1005
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
                          "start": 1008,
                          "end": 1009
                        },
                        "typeArguments": null,
                        "start": 1008,
                        "end": 1009
                      },
                      "start": 1006,
                      "end": 1009
                    },
                    "start": 990,
                    "end": 1009
                  },
                  "start": 989,
                  "end": 1013
                },
                "start": 987,
                "end": 1013
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
                      "start": 1031,
                      "end": 1040
                    },
                    "start": 1024,
                    "end": 1041
                  }
                ],
                "start": 1014,
                "end": 1047
              },
              "expression": false,
              "start": 949,
              "end": 1047
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 942,
            "end": 1047
          }
        ],
        "start": 936,
        "end": 1049
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 919,
      "end": 1049
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "schema",
        "optional": false,
        "typeAnnotation": null,
        "start": 1079,
        "end": 1085
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
                "start": 1108,
                "end": 1124
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
                      "start": 1133,
                      "end": 1136
                    },
                    "start": 1131,
                    "end": 1136
                  },
                  "start": 1125,
                  "end": 1136
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
                    "start": 1139,
                    "end": 1144
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
                                    "start": 1148,
                                    "end": 1149
                                  },
                                  "constraint": null,
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 1148,
                                  "end": 1149
                                }
                              ],
                              "start": 1147,
                              "end": 1150
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
                                      "start": 1157,
                                      "end": 1158
                                    },
                                    "typeArguments": null,
                                    "start": 1157,
                                    "end": 1158
                                  },
                                  "start": 1155,
                                  "end": 1158
                                },
                                "start": 1151,
                                "end": 1158
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
                                  "start": 1162,
                                  "end": 1163
                                },
                                "typeArguments": null,
                                "start": 1162,
                                "end": 1163
                              },
                              "start": 1160,
                              "end": 1163
                            },
                            "start": 1147,
                            "end": 1163
                          }
                        ],
                        "start": 1145,
                        "end": 1164
                      }
                    ],
                    "start": 1144,
                    "end": 1165
                  },
                  "start": 1139,
                  "end": 1165
                },
                "start": 1137,
                "end": 1165
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
                      "start": 1183,
                      "end": 1192
                    },
                    "start": 1176,
                    "end": 1193
                  }
                ],
                "start": 1166,
                "end": 1199
              },
              "expression": false,
              "start": 1099,
              "end": 1199
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1092,
            "end": 1199
          }
        ],
        "start": 1086,
        "end": 1201
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 1069,
      "end": 1201
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "schema",
        "optional": false,
        "typeAnnotation": null,
        "start": 1214,
        "end": 1220
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
                "start": 1240,
                "end": 1241
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
                      "start": 1256,
                      "end": 1272
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
                                  "start": 1277,
                                  "end": 1278
                                },
                                "constraint": null,
                                "default": null,
                                "in": false,
                                "out": false,
                                "const": false,
                                "start": 1277,
                                "end": 1278
                              }
                            ],
                            "start": 1276,
                            "end": 1279
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
                                    "start": 1286,
                                    "end": 1287
                                  },
                                  "typeArguments": null,
                                  "start": 1286,
                                  "end": 1287
                                },
                                "start": 1284,
                                "end": 1287
                              },
                              "start": 1280,
                              "end": 1287
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
                                "start": 1292,
                                "end": 1293
                              },
                              "typeArguments": null,
                              "start": 1292,
                              "end": 1293
                            },
                            "start": 1289,
                            "end": 1293
                          },
                          "start": 1276,
                          "end": 1293
                        },
                        "start": 1274,
                        "end": 1293
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
                              "start": 1315,
                              "end": 1324
                            },
                            "start": 1308,
                            "end": 1325
                          }
                        ],
                        "start": 1294,
                        "end": 1335
                      },
                      "expression": false,
                      "start": 1272,
                      "end": 1335
                    },
                    "kind": "get",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 1252,
                    "end": 1335
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
                      "start": 1357,
                      "end": 1374
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
                                      "start": 1379,
                                      "end": 1380
                                    },
                                    "constraint": null,
                                    "default": null,
                                    "in": false,
                                    "out": false,
                                    "const": false,
                                    "start": 1379,
                                    "end": 1380
                                  }
                                ],
                                "start": 1378,
                                "end": 1381
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
                                        "start": 1388,
                                        "end": 1389
                                      },
                                      "typeArguments": null,
                                      "start": 1388,
                                      "end": 1389
                                    },
                                    "start": 1386,
                                    "end": 1389
                                  },
                                  "start": 1382,
                                  "end": 1389
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
                                    "start": 1394,
                                    "end": 1395
                                  },
                                  "typeArguments": null,
                                  "start": 1394,
                                  "end": 1395
                                },
                                "start": 1391,
                                "end": 1395
                              },
                              "start": 1378,
                              "end": 1395
                            },
                            "start": 1376,
                            "end": 1395
                          },
                          "start": 1375,
                          "end": 1395
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 1397,
                        "end": 1408
                      },
                      "expression": false,
                      "start": 1374,
                      "end": 1408
                    },
                    "kind": "set",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 1353,
                    "end": 1408
                  }
                ],
                "start": 1242,
                "end": 1414
              },
              "abstract": false,
              "declare": false,
              "start": 1234,
              "end": 1414
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1227,
            "end": 1414
          }
        ],
        "start": 1221,
        "end": 1416
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 1204,
      "end": 1416
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 18,
  "end": 1416
}
```
