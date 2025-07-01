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
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 7,
        "end": 8
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 26,
                    "end": 27
                  },
                  "init": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 28,
                    "end": 29
                  },
                  "definite": false,
                  "start": 26,
                  "end": 29
                }
              ],
              "declare": false,
              "start": 22,
              "end": 30
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 15,
            "end": 30
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSModuleDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "N",
                "optional": false,
                "typeAnnotation": null,
                "start": 49,
                "end": 50
              },
              "body": {
                "type": "TSModuleBlock",
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "declaration": {
                      "type": "VariableDeclaration",
                      "kind": "var",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "id": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "n",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 72,
                            "end": 73
                          },
                          "init": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 74,
                            "end": 75
                          },
                          "definite": false,
                          "start": 72,
                          "end": 75
                        }
                      ],
                      "declare": false,
                      "start": 68,
                      "end": 76
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 61,
                    "end": 76
                  }
                ],
                "start": 51,
                "end": 82
              },
              "kind": "module",
              "declare": false,
              "global": false,
              "start": 42,
              "end": 82
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 35,
            "end": 82
          }
        ],
        "start": 9,
        "end": 84
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 84
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 93,
        "end": 94
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSModuleDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "N",
                "optional": false,
                "typeAnnotation": null,
                "start": 115,
                "end": 116
              },
              "body": {
                "type": "TSModuleBlock",
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 131,
                          "end": 132
                        },
                        "init": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "m",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 133,
                          "end": 134
                        },
                        "definite": false,
                        "start": 131,
                        "end": 134
                      }
                    ],
                    "declare": false,
                    "start": 127,
                    "end": 135
                  },
                  {
                    "type": "VariableDeclaration",
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 148,
                          "end": 149
                        },
                        "init": {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "n",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 150,
                            "end": 151
                          },
                          "operator": "+",
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "y",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 152,
                            "end": 153
                          },
                          "start": 150,
                          "end": 153
                        },
                        "definite": false,
                        "start": 148,
                        "end": 153
                      }
                    ],
                    "declare": false,
                    "start": 144,
                    "end": 154
                  }
                ],
                "start": 117,
                "end": 160
              },
              "kind": "module",
              "declare": false,
              "global": false,
              "start": 108,
              "end": 160
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 101,
            "end": 160
          }
        ],
        "start": 95,
        "end": 162
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 86,
      "end": 162
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T",
        "optional": false,
        "typeAnnotation": null,
        "start": 172,
        "end": 173
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "I",
                "optional": false,
                "typeAnnotation": null,
                "start": 197,
                "end": 198
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "p",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 209,
                      "end": 210
                    },
                    "typeAnnotation": null,
                    "accessibility": null,
                    "static": false,
                    "start": 209,
                    "end": 211
                  }
                ],
                "start": 199,
                "end": 217
              },
              "declare": false,
              "start": 187,
              "end": 217
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 180,
            "end": 217
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSModuleDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 236,
                "end": 237
              },
              "body": {
                "type": "TSModuleBlock",
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "z",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "I",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 254,
                                "end": 255
                              },
                              "typeArguments": null,
                              "start": 254,
                              "end": 255
                            },
                            "start": 253,
                            "end": 255
                          },
                          "start": 252,
                          "end": 255
                        },
                        "init": {
                          "type": "Literal",
                          "value": 3,
                          "raw": "3",
                          "start": 256,
                          "end": 257
                        },
                        "definite": false,
                        "start": 252,
                        "end": 257
                      }
                    ],
                    "declare": false,
                    "start": 248,
                    "end": 258
                  },
                  {
                    "type": "ExportNamedDeclaration",
                    "declaration": {
                      "type": "TSInterfaceDeclaration",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "I2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 284,
                        "end": 286
                      },
                      "typeParameters": null,
                      "extends": [],
                      "body": {
                        "type": "TSInterfaceBody",
                        "body": [
                          {
                            "type": "TSPropertySignature",
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "q",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 301,
                              "end": 302
                            },
                            "typeAnnotation": null,
                            "accessibility": null,
                            "static": false,
                            "start": 301,
                            "end": 303
                          }
                        ],
                        "start": 287,
                        "end": 313
                      },
                      "declare": false,
                      "start": 274,
                      "end": 313
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "type",
                    "attributes": [],
                    "start": 267,
                    "end": 313
                  }
                ],
                "start": 238,
                "end": 319
              },
              "kind": "module",
              "declare": false,
              "global": false,
              "start": 229,
              "end": 319
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 222,
            "end": 319
          }
        ],
        "start": 174,
        "end": 321
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 165,
      "end": 321
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Peer",
        "optional": false,
        "typeAnnotation": null,
        "start": 330,
        "end": 334
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSModuleDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "U2",
                "optional": false,
                "typeAnnotation": null,
                "start": 355,
                "end": 357
              },
              "body": {
                "type": "TSModuleBlock",
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "z",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "TSQualifiedName",
                                "left": {
                                  "type": "TSQualifiedName",
                                  "left": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 374,
                                    "end": 375
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "U",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 376,
                                    "end": 377
                                  },
                                  "start": 374,
                                  "end": 377
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "I2",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 378,
                                  "end": 380
                                },
                                "start": 374,
                                "end": 380
                              },
                              "typeArguments": null,
                              "start": 374,
                              "end": 380
                            },
                            "start": 373,
                            "end": 380
                          },
                          "start": 372,
                          "end": 380
                        },
                        "init": {
                          "type": "Literal",
                          "value": 3,
                          "raw": "3",
                          "start": 381,
                          "end": 382
                        },
                        "definite": false,
                        "start": 372,
                        "end": 382
                      }
                    ],
                    "declare": false,
                    "start": 368,
                    "end": 383
                  }
                ],
                "start": 358,
                "end": 389
              },
              "kind": "module",
              "declare": false,
              "global": false,
              "start": 348,
              "end": 389
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 341,
            "end": 389
          }
        ],
        "start": 335,
        "end": 391
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 323,
      "end": 391
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Everest",
        "optional": false,
        "typeAnnotation": null,
        "start": 400,
        "end": 407
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSModuleDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "K1",
                "optional": false,
                "typeAnnotation": null,
                "start": 428,
                "end": 430
              },
              "body": {
                "type": "TSModuleBlock",
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "declaration": {
                      "type": "TSInterfaceDeclaration",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "I3",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 458,
                        "end": 460
                      },
                      "typeParameters": null,
                      "extends": [],
                      "body": {
                        "type": "TSInterfaceBody",
                        "body": [
                          {
                            "type": "TSPropertySignature",
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "zeep",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 475,
                              "end": 479
                            },
                            "typeAnnotation": null,
                            "accessibility": null,
                            "static": false,
                            "start": 475,
                            "end": 480
                          }
                        ],
                        "start": 461,
                        "end": 490
                      },
                      "declare": false,
                      "start": 448,
                      "end": 490
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "type",
                    "attributes": [],
                    "start": 441,
                    "end": 490
                  }
                ],
                "start": 431,
                "end": 496
              },
              "kind": "module",
              "declare": false,
              "global": false,
              "start": 421,
              "end": 496
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 414,
            "end": 496
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSModuleDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "K2",
                "optional": false,
                "typeAnnotation": null,
                "start": 515,
                "end": 517
              },
              "body": {
                "type": "TSModuleBlock",
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "declaration": {
                      "type": "TSInterfaceDeclaration",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "I4",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 545,
                        "end": 547
                      },
                      "typeParameters": null,
                      "extends": [],
                      "body": {
                        "type": "TSInterfaceBody",
                        "body": [
                          {
                            "type": "TSPropertySignature",
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "z",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 562,
                              "end": 563
                            },
                            "typeAnnotation": null,
                            "accessibility": null,
                            "static": false,
                            "start": 562,
                            "end": 564
                          }
                        ],
                        "start": 548,
                        "end": 574
                      },
                      "declare": false,
                      "start": 535,
                      "end": 574
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "type",
                    "attributes": [],
                    "start": 528,
                    "end": 574
                  },
                  {
                    "type": "VariableDeclaration",
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "v1",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "I4",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 590,
                                "end": 592
                              },
                              "typeArguments": null,
                              "start": 590,
                              "end": 592
                            },
                            "start": 589,
                            "end": 592
                          },
                          "start": 587,
                          "end": 592
                        },
                        "init": null,
                        "definite": false,
                        "start": 587,
                        "end": 592
                      }
                    ],
                    "declare": false,
                    "start": 583,
                    "end": 593
                  },
                  {
                    "type": "VariableDeclaration",
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "v2",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "TSQualifiedName",
                                "left": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "K1",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 609,
                                  "end": 611
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "I3",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 612,
                                  "end": 614
                                },
                                "start": 609,
                                "end": 614
                              },
                              "typeArguments": null,
                              "start": 609,
                              "end": 614
                            },
                            "start": 608,
                            "end": 614
                          },
                          "start": 606,
                          "end": 614
                        },
                        "init": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "v1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 615,
                          "end": 617
                        },
                        "definite": false,
                        "start": 606,
                        "end": 617
                      }
                    ],
                    "declare": false,
                    "start": 602,
                    "end": 618
                  },
                  {
                    "type": "VariableDeclaration",
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "v3",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSArrayType",
                              "elementType": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "TSQualifiedName",
                                  "left": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "K1",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 634,
                                    "end": 636
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "I3",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 637,
                                    "end": 639
                                  },
                                  "start": 634,
                                  "end": 639
                                },
                                "typeArguments": null,
                                "start": 634,
                                "end": 639
                              },
                              "start": 634,
                              "end": 641
                            },
                            "start": 633,
                            "end": 641
                          },
                          "start": 631,
                          "end": 641
                        },
                        "init": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "v1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 642,
                          "end": 644
                        },
                        "definite": false,
                        "start": 631,
                        "end": 644
                      }
                    ],
                    "declare": false,
                    "start": 627,
                    "end": 645
                  },
                  {
                    "type": "VariableDeclaration",
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "v4",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSFunctionType",
                              "typeParameters": null,
                              "params": [],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "TSQualifiedName",
                                    "left": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "K1",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 665,
                                      "end": 667
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "I3",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 668,
                                      "end": 670
                                    },
                                    "start": 665,
                                    "end": 670
                                  },
                                  "typeArguments": null,
                                  "start": 665,
                                  "end": 670
                                },
                                "start": 663,
                                "end": 670
                              },
                              "start": 661,
                              "end": 670
                            },
                            "start": 660,
                            "end": 670
                          },
                          "start": 658,
                          "end": 670
                        },
                        "init": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "v1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 671,
                          "end": 673
                        },
                        "definite": false,
                        "start": 658,
                        "end": 673
                      }
                    ],
                    "declare": false,
                    "start": 654,
                    "end": 674
                  },
                  {
                    "type": "VariableDeclaration",
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "v5",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSFunctionType",
                              "typeParameters": null,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "k",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "TSQualifiedName",
                                        "left": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "K1",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 693,
                                          "end": 695
                                        },
                                        "right": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "I3",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 696,
                                          "end": 698
                                        },
                                        "start": 693,
                                        "end": 698
                                      },
                                      "typeArguments": null,
                                      "start": 693,
                                      "end": 698
                                    },
                                    "start": 692,
                                    "end": 698
                                  },
                                  "start": 691,
                                  "end": 698
                                }
                              ],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSVoidKeyword",
                                  "start": 701,
                                  "end": 705
                                },
                                "start": 699,
                                "end": 705
                              },
                              "start": 690,
                              "end": 705
                            },
                            "start": 689,
                            "end": 705
                          },
                          "start": 687,
                          "end": 705
                        },
                        "init": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "v1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 706,
                          "end": 708
                        },
                        "definite": false,
                        "start": 687,
                        "end": 708
                      }
                    ],
                    "declare": false,
                    "start": 683,
                    "end": 709
                  },
                  {
                    "type": "VariableDeclaration",
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "v6",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeLiteral",
                              "members": [
                                {
                                  "type": "TSPropertySignature",
                                  "computed": false,
                                  "optional": false,
                                  "readonly": false,
                                  "key": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "k",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 726,
                                    "end": 727
                                  },
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "TSQualifiedName",
                                        "left": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "K1",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 728,
                                          "end": 730
                                        },
                                        "right": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "I3",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 731,
                                          "end": 733
                                        },
                                        "start": 728,
                                        "end": 733
                                      },
                                      "typeArguments": null,
                                      "start": 728,
                                      "end": 733
                                    },
                                    "start": 727,
                                    "end": 733
                                  },
                                  "accessibility": null,
                                  "static": false,
                                  "start": 726,
                                  "end": 734
                                }
                              ],
                              "start": 725,
                              "end": 735
                            },
                            "start": 724,
                            "end": 735
                          },
                          "start": 722,
                          "end": 735
                        },
                        "init": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "v1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 736,
                          "end": 738
                        },
                        "definite": false,
                        "start": 722,
                        "end": 738
                      }
                    ],
                    "declare": false,
                    "start": 718,
                    "end": 739
                  }
                ],
                "start": 518,
                "end": 745
              },
              "kind": "module",
              "declare": false,
              "global": false,
              "start": 508,
              "end": 745
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 501,
            "end": 745
          }
        ],
        "start": 408,
        "end": 747
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 393,
      "end": 747
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 759,
        "end": 760
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "k",
              "optional": false,
              "typeAnnotation": null,
              "start": 767,
              "end": 768
            },
            "typeAnnotation": null,
            "accessibility": null,
            "static": false,
            "start": 767,
            "end": 769
          }
        ],
        "start": 761,
        "end": 771
      },
      "declare": false,
      "start": 749,
      "end": 771
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 779,
                  "end": 780
                },
                "typeArguments": null,
                "start": 779,
                "end": 780
              },
              "start": 778,
              "end": 780
            },
            "start": 777,
            "end": 780
          },
          "init": null,
          "definite": false,
          "start": 777,
          "end": 780
        }
      ],
      "declare": false,
      "start": 773,
      "end": 781
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 788,
                    "end": 789
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "I",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 790,
                    "end": 791
                  },
                  "start": 788,
                  "end": 791
                },
                "typeArguments": null,
                "start": 788,
                "end": 791
              },
              "start": 787,
              "end": 791
            },
            "start": 786,
            "end": 791
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 792,
            "end": 793
          },
          "definite": false,
          "start": 786,
          "end": 793
        }
      ],
      "declare": false,
      "start": 782,
      "end": 794
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 795
}
```
