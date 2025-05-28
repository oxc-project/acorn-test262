__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 18,
  "end": 1389,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 18,
      "end": 138,
      "id": {
        "type": "Identifier",
        "start": 25,
        "end": 31,
        "decorators": [],
        "name": "schema",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 32,
        "end": 138,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 38,
            "end": 136,
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 45,
              "end": 136,
              "id": {
                "type": "Identifier",
                "start": 54,
                "end": 70,
                "decorators": [],
                "name": "createValidator1",
                "optional": false,
                "typeAnnotation": null
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 71,
                  "end": 82,
                  "decorators": [],
                  "name": "schema",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 77,
                    "end": 82,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 79,
                      "end": 82
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 83,
                "end": 102,
                "typeAnnotation": {
                  "type": "TSFunctionType",
                  "start": 85,
                  "end": 102,
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "start": 85,
                    "end": 88,
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "start": 86,
                        "end": 87,
                        "name": {
                          "type": "Identifier",
                          "start": 86,
                          "end": 87,
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
                      "start": 89,
                      "end": 96,
                      "decorators": [],
                      "name": "data",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 93,
                        "end": 96,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 95,
                          "end": 96,
                          "typeName": {
                            "type": "Identifier",
                            "start": 95,
                            "end": 96,
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
                    "start": 98,
                    "end": 102,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 101,
                      "end": 102,
                      "typeName": {
                        "type": "Identifier",
                        "start": 101,
                        "end": 102,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                }
              },
              "body": {
                "type": "BlockStatement",
                "start": 103,
                "end": 136,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 113,
                    "end": 130,
                    "argument": {
                      "type": "Identifier",
                      "start": 120,
                      "end": 129,
                      "decorators": [],
                      "name": "undefined",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "expression": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 161,
      "end": 285,
      "id": {
        "type": "Identifier",
        "start": 168,
        "end": 174,
        "decorators": [],
        "name": "schema",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 175,
        "end": 285,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 181,
            "end": 283,
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 188,
              "end": 283,
              "id": {
                "type": "Identifier",
                "start": 197,
                "end": 213,
                "decorators": [],
                "name": "createValidator2",
                "optional": false,
                "typeAnnotation": null
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 214,
                  "end": 225,
                  "decorators": [],
                  "name": "schema",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 220,
                    "end": 225,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 222,
                      "end": 225
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 226,
                "end": 249,
                "typeAnnotation": {
                  "type": "TSConstructorType",
                  "start": 228,
                  "end": 249,
                  "abstract": false,
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "start": 232,
                    "end": 235,
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "start": 233,
                        "end": 234,
                        "name": {
                          "type": "Identifier",
                          "start": 233,
                          "end": 234,
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
                      "start": 236,
                      "end": 243,
                      "decorators": [],
                      "name": "data",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 240,
                        "end": 243,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 242,
                          "end": 243,
                          "typeName": {
                            "type": "Identifier",
                            "start": 242,
                            "end": 243,
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
                    "start": 245,
                    "end": 249,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 248,
                      "end": 249,
                      "typeName": {
                        "type": "Identifier",
                        "start": 248,
                        "end": 249,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                }
              },
              "body": {
                "type": "BlockStatement",
                "start": 250,
                "end": 283,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 260,
                    "end": 277,
                    "argument": {
                      "type": "Identifier",
                      "start": 267,
                      "end": 276,
                      "decorators": [],
                      "name": "undefined",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "expression": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 302,
      "end": 440,
      "id": {
        "type": "Identifier",
        "start": 309,
        "end": 315,
        "decorators": [],
        "name": "schema",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 316,
        "end": 440,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 323,
            "end": 438,
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 330,
              "end": 438,
              "id": {
                "type": "Identifier",
                "start": 339,
                "end": 355,
                "decorators": [],
                "name": "createValidator3",
                "optional": false,
                "typeAnnotation": null
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 356,
                  "end": 367,
                  "decorators": [],
                  "name": "schema",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 362,
                    "end": 367,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 364,
                      "end": 367
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 368,
                "end": 403,
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "start": 370,
                  "end": 403,
                  "types": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 370,
                      "end": 376
                    },
                    {
                      "type": "TSTypeLiteral",
                      "start": 379,
                      "end": 403,
                      "members": [
                        {
                          "type": "TSConstructSignatureDeclaration",
                          "start": 381,
                          "end": 401,
                          "typeParameters": {
                            "type": "TSTypeParameterDeclaration",
                            "start": 385,
                            "end": 388,
                            "params": [
                              {
                                "type": "TSTypeParameter",
                                "start": 386,
                                "end": 387,
                                "name": {
                                  "type": "Identifier",
                                  "start": 386,
                                  "end": 387,
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
                              "start": 389,
                              "end": 396,
                              "decorators": [],
                              "name": "data",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 393,
                                "end": 396,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 395,
                                  "end": 396,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 395,
                                    "end": 396,
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
                            "start": 397,
                            "end": 400,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 399,
                              "end": 400,
                              "typeName": {
                                "type": "Identifier",
                                "start": 399,
                                "end": 400,
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
                  ]
                }
              },
              "body": {
                "type": "BlockStatement",
                "start": 405,
                "end": 438,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 415,
                    "end": 432,
                    "argument": {
                      "type": "Identifier",
                      "start": 422,
                      "end": 431,
                      "decorators": [],
                      "name": "undefined",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "expression": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 457,
      "end": 587,
      "id": {
        "type": "Identifier",
        "start": 464,
        "end": 470,
        "decorators": [],
        "name": "schema",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 471,
        "end": 587,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 478,
            "end": 585,
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 485,
              "end": 585,
              "id": {
                "type": "Identifier",
                "start": 494,
                "end": 510,
                "decorators": [],
                "name": "createValidator4",
                "optional": false,
                "typeAnnotation": null
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 511,
                  "end": 522,
                  "decorators": [],
                  "name": "schema",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 517,
                    "end": 522,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 519,
                      "end": 522
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 523,
                "end": 551,
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "start": 525,
                  "end": 551,
                  "elementType": {
                    "type": "TSTypeLiteral",
                    "start": 525,
                    "end": 549,
                    "members": [
                      {
                        "type": "TSConstructSignatureDeclaration",
                        "start": 527,
                        "end": 547,
                        "typeParameters": {
                          "type": "TSTypeParameterDeclaration",
                          "start": 531,
                          "end": 534,
                          "params": [
                            {
                              "type": "TSTypeParameter",
                              "start": 532,
                              "end": 533,
                              "name": {
                                "type": "Identifier",
                                "start": 532,
                                "end": 533,
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
                            "start": 535,
                            "end": 542,
                            "decorators": [],
                            "name": "data",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 539,
                              "end": 542,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 541,
                                "end": 542,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 541,
                                  "end": 542,
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
                          "start": 543,
                          "end": 546,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 545,
                            "end": 546,
                            "typeName": {
                              "type": "Identifier",
                              "start": 545,
                              "end": 546,
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
              },
              "body": {
                "type": "BlockStatement",
                "start": 552,
                "end": 585,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 562,
                    "end": 579,
                    "argument": {
                      "type": "Identifier",
                      "start": 569,
                      "end": 578,
                      "decorators": [],
                      "name": "undefined",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "expression": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 606,
      "end": 732,
      "id": {
        "type": "Identifier",
        "start": 613,
        "end": 619,
        "decorators": [],
        "name": "schema",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 620,
        "end": 732,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 626,
            "end": 730,
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 633,
              "end": 730,
              "id": {
                "type": "Identifier",
                "start": 642,
                "end": 658,
                "decorators": [],
                "name": "createValidator5",
                "optional": false,
                "typeAnnotation": null
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 659,
                  "end": 670,
                  "decorators": [],
                  "name": "schema",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 665,
                    "end": 670,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 667,
                      "end": 670
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 671,
                "end": 696,
                "typeAnnotation": {
                  "type": "TSTypeLiteral",
                  "start": 673,
                  "end": 696,
                  "members": [
                    {
                      "type": "TSConstructSignatureDeclaration",
                      "start": 675,
                      "end": 694,
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "start": 679,
                        "end": 682,
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "start": 680,
                            "end": 681,
                            "name": {
                              "type": "Identifier",
                              "start": 680,
                              "end": 681,
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
                          "start": 683,
                          "end": 690,
                          "decorators": [],
                          "name": "data",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 687,
                            "end": 690,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 689,
                              "end": 690,
                              "typeName": {
                                "type": "Identifier",
                                "start": 689,
                                "end": 690,
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
                        "start": 691,
                        "end": 694,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 693,
                          "end": 694,
                          "typeName": {
                            "type": "Identifier",
                            "start": 693,
                            "end": 694,
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
              },
              "body": {
                "type": "BlockStatement",
                "start": 697,
                "end": 730,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 707,
                    "end": 724,
                    "argument": {
                      "type": "Identifier",
                      "start": 714,
                      "end": 723,
                      "decorators": [],
                      "name": "undefined",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "expression": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 749,
      "end": 884,
      "id": {
        "type": "Identifier",
        "start": 756,
        "end": 762,
        "decorators": [],
        "name": "schema",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 763,
        "end": 884,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 769,
            "end": 882,
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 776,
              "end": 882,
              "id": {
                "type": "Identifier",
                "start": 785,
                "end": 801,
                "decorators": [],
                "name": "createValidator6",
                "optional": false,
                "typeAnnotation": null
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 802,
                  "end": 813,
                  "decorators": [],
                  "name": "schema",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 808,
                    "end": 813,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 810,
                      "end": 813
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 814,
                "end": 848,
                "typeAnnotation": {
                  "type": "TSTupleType",
                  "start": 816,
                  "end": 848,
                  "elementTypes": [
                    {
                      "type": "TSConstructorType",
                      "start": 818,
                      "end": 839,
                      "abstract": false,
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "start": 822,
                        "end": 825,
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "start": 823,
                            "end": 824,
                            "name": {
                              "type": "Identifier",
                              "start": 823,
                              "end": 824,
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
                          "start": 826,
                          "end": 833,
                          "decorators": [],
                          "name": "data",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 830,
                            "end": 833,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 832,
                              "end": 833,
                              "typeName": {
                                "type": "Identifier",
                                "start": 832,
                                "end": 833,
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
                        "start": 835,
                        "end": 839,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 838,
                          "end": 839,
                          "typeName": {
                            "type": "Identifier",
                            "start": 838,
                            "end": 839,
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
                      "type": "TSNumberKeyword",
                      "start": 841,
                      "end": 847
                    }
                  ]
                }
              },
              "body": {
                "type": "BlockStatement",
                "start": 849,
                "end": 882,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 859,
                    "end": 876,
                    "argument": {
                      "type": "Identifier",
                      "start": 866,
                      "end": 875,
                      "decorators": [],
                      "name": "undefined",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "expression": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 901,
      "end": 1028,
      "id": {
        "type": "Identifier",
        "start": 908,
        "end": 914,
        "decorators": [],
        "name": "schema",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 915,
        "end": 1028,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 921,
            "end": 1026,
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 928,
              "end": 1026,
              "id": {
                "type": "Identifier",
                "start": 937,
                "end": 953,
                "decorators": [],
                "name": "createValidator7",
                "optional": false,
                "typeAnnotation": null
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 954,
                  "end": 965,
                  "decorators": [],
                  "name": "schema",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 960,
                    "end": 965,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 962,
                      "end": 965
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 966,
                "end": 992,
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "start": 968,
                  "end": 992,
                  "elementType": {
                    "type": "TSConstructorType",
                    "start": 969,
                    "end": 988,
                    "abstract": false,
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 973,
                      "end": 976,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 974,
                          "end": 975,
                          "name": {
                            "type": "Identifier",
                            "start": 974,
                            "end": 975,
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
                        "start": 977,
                        "end": 984,
                        "decorators": [],
                        "name": "data",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 981,
                          "end": 984,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 983,
                            "end": 984,
                            "typeName": {
                              "type": "Identifier",
                              "start": 983,
                              "end": 984,
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
                      "start": 985,
                      "end": 988,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 987,
                        "end": 988,
                        "typeName": {
                          "type": "Identifier",
                          "start": 987,
                          "end": 988,
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
              },
              "body": {
                "type": "BlockStatement",
                "start": 993,
                "end": 1026,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 1003,
                    "end": 1020,
                    "argument": {
                      "type": "Identifier",
                      "start": 1010,
                      "end": 1019,
                      "decorators": [],
                      "name": "undefined",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "expression": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 1048,
      "end": 1177,
      "id": {
        "type": "Identifier",
        "start": 1055,
        "end": 1061,
        "decorators": [],
        "name": "schema",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 1062,
        "end": 1177,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 1068,
            "end": 1175,
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 1075,
              "end": 1175,
              "id": {
                "type": "Identifier",
                "start": 1084,
                "end": 1100,
                "decorators": [],
                "name": "createValidator8",
                "optional": false,
                "typeAnnotation": null
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1101,
                  "end": 1112,
                  "decorators": [],
                  "name": "schema",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1107,
                    "end": 1112,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1109,
                      "end": 1112
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1113,
                "end": 1141,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 1115,
                  "end": 1141,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1115,
                    "end": 1120,
                    "decorators": [],
                    "name": "Array",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 1120,
                    "end": 1141,
                    "params": [
                      {
                        "type": "TSTypeLiteral",
                        "start": 1121,
                        "end": 1140,
                        "members": [
                          {
                            "type": "TSCallSignatureDeclaration",
                            "start": 1123,
                            "end": 1139,
                            "typeParameters": {
                              "type": "TSTypeParameterDeclaration",
                              "start": 1123,
                              "end": 1126,
                              "params": [
                                {
                                  "type": "TSTypeParameter",
                                  "start": 1124,
                                  "end": 1125,
                                  "name": {
                                    "type": "Identifier",
                                    "start": 1124,
                                    "end": 1125,
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
                                "start": 1127,
                                "end": 1134,
                                "decorators": [],
                                "name": "data",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 1131,
                                  "end": 1134,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 1133,
                                    "end": 1134,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 1133,
                                      "end": 1134,
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
                              "start": 1136,
                              "end": 1139,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 1138,
                                "end": 1139,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1138,
                                  "end": 1139,
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
                    ]
                  }
                }
              },
              "body": {
                "type": "BlockStatement",
                "start": 1142,
                "end": 1175,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 1152,
                    "end": 1169,
                    "argument": {
                      "type": "Identifier",
                      "start": 1159,
                      "end": 1168,
                      "decorators": [],
                      "name": "undefined",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "expression": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 1180,
      "end": 1389,
      "id": {
        "type": "Identifier",
        "start": 1187,
        "end": 1193,
        "decorators": [],
        "name": "schema",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 1194,
        "end": 1389,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 1200,
            "end": 1387,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 1207,
              "end": 1387,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 1213,
                "end": 1214,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "start": 1215,
                "end": 1387,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 1225,
                    "end": 1308,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 1229,
                      "end": 1245,
                      "decorators": [],
                      "name": "createValidator9",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 1245,
                      "end": 1308,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 1247,
                        "end": 1266,
                        "typeAnnotation": {
                          "type": "TSFunctionType",
                          "start": 1249,
                          "end": 1266,
                          "typeParameters": {
                            "type": "TSTypeParameterDeclaration",
                            "start": 1249,
                            "end": 1252,
                            "params": [
                              {
                                "type": "TSTypeParameter",
                                "start": 1250,
                                "end": 1251,
                                "name": {
                                  "type": "Identifier",
                                  "start": 1250,
                                  "end": 1251,
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
                              "start": 1253,
                              "end": 1260,
                              "decorators": [],
                              "name": "data",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 1257,
                                "end": 1260,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 1259,
                                  "end": 1260,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 1259,
                                    "end": 1260,
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
                            "start": 1262,
                            "end": 1266,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 1265,
                              "end": 1266,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1265,
                                "end": 1266,
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          }
                        }
                      },
                      "body": {
                        "type": "BlockStatement",
                        "start": 1267,
                        "end": 1308,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 1281,
                            "end": 1298,
                            "argument": {
                              "type": "Identifier",
                              "start": 1288,
                              "end": 1297,
                              "decorators": [],
                              "name": "undefined",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        ]
                      },
                      "expression": false
                    },
                    "kind": "get",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 1326,
                    "end": 1381,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 1330,
                      "end": 1347,
                      "decorators": [],
                      "name": "createValidator10",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 1347,
                      "end": 1381,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 1348,
                          "end": 1368,
                          "decorators": [],
                          "name": "v",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1349,
                            "end": 1368,
                            "typeAnnotation": {
                              "type": "TSFunctionType",
                              "start": 1351,
                              "end": 1368,
                              "typeParameters": {
                                "type": "TSTypeParameterDeclaration",
                                "start": 1351,
                                "end": 1354,
                                "params": [
                                  {
                                    "type": "TSTypeParameter",
                                    "start": 1352,
                                    "end": 1353,
                                    "name": {
                                      "type": "Identifier",
                                      "start": 1352,
                                      "end": 1353,
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
                                  "start": 1355,
                                  "end": 1362,
                                  "decorators": [],
                                  "name": "data",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 1359,
                                    "end": 1362,
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "start": 1361,
                                      "end": 1362,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 1361,
                                        "end": 1362,
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
                                "start": 1364,
                                "end": 1368,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 1367,
                                  "end": 1368,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 1367,
                                    "end": 1368,
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
                        "type": "BlockStatement",
                        "start": 1370,
                        "end": 1381,
                        "body": []
                      },
                      "expression": false
                    },
                    "kind": "set",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null
                  }
                ]
              },
              "abstract": false,
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
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
