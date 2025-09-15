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
        "start": 10,
        "end": 11
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
                    "start": 29,
                    "end": 30
                  },
                  "init": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 31,
                    "end": 32
                  },
                  "definite": false,
                  "start": 29,
                  "end": 32
                }
              ],
              "declare": false,
              "start": 25,
              "end": 33
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 18,
            "end": 33
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
                "start": 55,
                "end": 56
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
                            "start": 78,
                            "end": 79
                          },
                          "init": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 80,
                            "end": 81
                          },
                          "definite": false,
                          "start": 78,
                          "end": 81
                        }
                      ],
                      "declare": false,
                      "start": 74,
                      "end": 82
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 67,
                    "end": 82
                  }
                ],
                "start": 57,
                "end": 88
              },
              "kind": "namespace",
              "declare": false,
              "global": false,
              "start": 45,
              "end": 88
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 38,
            "end": 88
          }
        ],
        "start": 12,
        "end": 90
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 90
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 102,
        "end": 103
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
                "start": 127,
                "end": 128
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
                          "start": 143,
                          "end": 144
                        },
                        "init": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "m",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 145,
                          "end": 146
                        },
                        "definite": false,
                        "start": 143,
                        "end": 146
                      }
                    ],
                    "declare": false,
                    "start": 139,
                    "end": 147
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
                          "start": 160,
                          "end": 161
                        },
                        "init": {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "n",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 162,
                            "end": 163
                          },
                          "operator": "+",
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "y",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 164,
                            "end": 165
                          },
                          "start": 162,
                          "end": 165
                        },
                        "definite": false,
                        "start": 160,
                        "end": 165
                      }
                    ],
                    "declare": false,
                    "start": 156,
                    "end": 166
                  }
                ],
                "start": 129,
                "end": 172
              },
              "kind": "namespace",
              "declare": false,
              "global": false,
              "start": 117,
              "end": 172
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 110,
            "end": 172
          }
        ],
        "start": 104,
        "end": 174
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 92,
      "end": 174
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T",
        "optional": false,
        "typeAnnotation": null,
        "start": 187,
        "end": 188
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
                "start": 212,
                "end": 213
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
                      "start": 224,
                      "end": 225
                    },
                    "typeAnnotation": null,
                    "accessibility": null,
                    "static": false,
                    "start": 224,
                    "end": 226
                  }
                ],
                "start": 214,
                "end": 232
              },
              "declare": false,
              "start": 202,
              "end": 232
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 195,
            "end": 232
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
                "start": 254,
                "end": 255
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
                                "start": 272,
                                "end": 273
                              },
                              "typeArguments": null,
                              "start": 272,
                              "end": 273
                            },
                            "start": 271,
                            "end": 273
                          },
                          "start": 270,
                          "end": 273
                        },
                        "init": {
                          "type": "Literal",
                          "value": 3,
                          "raw": "3",
                          "start": 274,
                          "end": 275
                        },
                        "definite": false,
                        "start": 270,
                        "end": 275
                      }
                    ],
                    "declare": false,
                    "start": 266,
                    "end": 276
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
                        "start": 302,
                        "end": 304
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
                              "start": 319,
                              "end": 320
                            },
                            "typeAnnotation": null,
                            "accessibility": null,
                            "static": false,
                            "start": 319,
                            "end": 321
                          }
                        ],
                        "start": 305,
                        "end": 331
                      },
                      "declare": false,
                      "start": 292,
                      "end": 331
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "type",
                    "attributes": [],
                    "start": 285,
                    "end": 331
                  }
                ],
                "start": 256,
                "end": 337
              },
              "kind": "namespace",
              "declare": false,
              "global": false,
              "start": 244,
              "end": 337
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 237,
            "end": 337
          }
        ],
        "start": 189,
        "end": 339
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 177,
      "end": 339
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Peer",
        "optional": false,
        "typeAnnotation": null,
        "start": 351,
        "end": 355
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
                "start": 379,
                "end": 381
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
                                    "start": 398,
                                    "end": 399
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "U",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 400,
                                    "end": 401
                                  },
                                  "start": 398,
                                  "end": 401
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "I2",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 402,
                                  "end": 404
                                },
                                "start": 398,
                                "end": 404
                              },
                              "typeArguments": null,
                              "start": 398,
                              "end": 404
                            },
                            "start": 397,
                            "end": 404
                          },
                          "start": 396,
                          "end": 404
                        },
                        "init": {
                          "type": "Literal",
                          "value": 3,
                          "raw": "3",
                          "start": 405,
                          "end": 406
                        },
                        "definite": false,
                        "start": 396,
                        "end": 406
                      }
                    ],
                    "declare": false,
                    "start": 392,
                    "end": 407
                  }
                ],
                "start": 382,
                "end": 413
              },
              "kind": "namespace",
              "declare": false,
              "global": false,
              "start": 369,
              "end": 413
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 362,
            "end": 413
          }
        ],
        "start": 356,
        "end": 415
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 341,
      "end": 415
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Everest",
        "optional": false,
        "typeAnnotation": null,
        "start": 427,
        "end": 434
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
                "start": 458,
                "end": 460
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
                        "start": 488,
                        "end": 490
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
                              "start": 505,
                              "end": 509
                            },
                            "typeAnnotation": null,
                            "accessibility": null,
                            "static": false,
                            "start": 505,
                            "end": 510
                          }
                        ],
                        "start": 491,
                        "end": 520
                      },
                      "declare": false,
                      "start": 478,
                      "end": 520
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "type",
                    "attributes": [],
                    "start": 471,
                    "end": 520
                  }
                ],
                "start": 461,
                "end": 526
              },
              "kind": "namespace",
              "declare": false,
              "global": false,
              "start": 448,
              "end": 526
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 441,
            "end": 526
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
                "start": 548,
                "end": 550
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
                        "start": 578,
                        "end": 580
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
                              "start": 595,
                              "end": 596
                            },
                            "typeAnnotation": null,
                            "accessibility": null,
                            "static": false,
                            "start": 595,
                            "end": 597
                          }
                        ],
                        "start": 581,
                        "end": 607
                      },
                      "declare": false,
                      "start": 568,
                      "end": 607
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "type",
                    "attributes": [],
                    "start": 561,
                    "end": 607
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
                                "start": 623,
                                "end": 625
                              },
                              "typeArguments": null,
                              "start": 623,
                              "end": 625
                            },
                            "start": 622,
                            "end": 625
                          },
                          "start": 620,
                          "end": 625
                        },
                        "init": null,
                        "definite": false,
                        "start": 620,
                        "end": 625
                      }
                    ],
                    "declare": false,
                    "start": 616,
                    "end": 626
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
                                  "start": 642,
                                  "end": 644
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "I3",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 645,
                                  "end": 647
                                },
                                "start": 642,
                                "end": 647
                              },
                              "typeArguments": null,
                              "start": 642,
                              "end": 647
                            },
                            "start": 641,
                            "end": 647
                          },
                          "start": 639,
                          "end": 647
                        },
                        "init": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "v1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 648,
                          "end": 650
                        },
                        "definite": false,
                        "start": 639,
                        "end": 650
                      }
                    ],
                    "declare": false,
                    "start": 635,
                    "end": 651
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
                                    "start": 667,
                                    "end": 669
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "I3",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 670,
                                    "end": 672
                                  },
                                  "start": 667,
                                  "end": 672
                                },
                                "typeArguments": null,
                                "start": 667,
                                "end": 672
                              },
                              "start": 667,
                              "end": 674
                            },
                            "start": 666,
                            "end": 674
                          },
                          "start": 664,
                          "end": 674
                        },
                        "init": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "v1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 675,
                          "end": 677
                        },
                        "definite": false,
                        "start": 664,
                        "end": 677
                      }
                    ],
                    "declare": false,
                    "start": 660,
                    "end": 678
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
                                      "start": 698,
                                      "end": 700
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "I3",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 701,
                                      "end": 703
                                    },
                                    "start": 698,
                                    "end": 703
                                  },
                                  "typeArguments": null,
                                  "start": 698,
                                  "end": 703
                                },
                                "start": 696,
                                "end": 703
                              },
                              "start": 694,
                              "end": 703
                            },
                            "start": 693,
                            "end": 703
                          },
                          "start": 691,
                          "end": 703
                        },
                        "init": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "v1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 704,
                          "end": 706
                        },
                        "definite": false,
                        "start": 691,
                        "end": 706
                      }
                    ],
                    "declare": false,
                    "start": 687,
                    "end": 707
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
                                          "start": 726,
                                          "end": 728
                                        },
                                        "right": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "I3",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 729,
                                          "end": 731
                                        },
                                        "start": 726,
                                        "end": 731
                                      },
                                      "typeArguments": null,
                                      "start": 726,
                                      "end": 731
                                    },
                                    "start": 725,
                                    "end": 731
                                  },
                                  "start": 724,
                                  "end": 731
                                }
                              ],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSVoidKeyword",
                                  "start": 734,
                                  "end": 738
                                },
                                "start": 732,
                                "end": 738
                              },
                              "start": 723,
                              "end": 738
                            },
                            "start": 722,
                            "end": 738
                          },
                          "start": 720,
                          "end": 738
                        },
                        "init": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "v1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 739,
                          "end": 741
                        },
                        "definite": false,
                        "start": 720,
                        "end": 741
                      }
                    ],
                    "declare": false,
                    "start": 716,
                    "end": 742
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
                                    "start": 759,
                                    "end": 760
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
                                          "start": 761,
                                          "end": 763
                                        },
                                        "right": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "I3",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 764,
                                          "end": 766
                                        },
                                        "start": 761,
                                        "end": 766
                                      },
                                      "typeArguments": null,
                                      "start": 761,
                                      "end": 766
                                    },
                                    "start": 760,
                                    "end": 766
                                  },
                                  "accessibility": null,
                                  "static": false,
                                  "start": 759,
                                  "end": 767
                                }
                              ],
                              "start": 758,
                              "end": 768
                            },
                            "start": 757,
                            "end": 768
                          },
                          "start": 755,
                          "end": 768
                        },
                        "init": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "v1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 769,
                          "end": 771
                        },
                        "definite": false,
                        "start": 755,
                        "end": 771
                      }
                    ],
                    "declare": false,
                    "start": 751,
                    "end": 772
                  }
                ],
                "start": 551,
                "end": 778
              },
              "kind": "namespace",
              "declare": false,
              "global": false,
              "start": 538,
              "end": 778
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 531,
            "end": 778
          }
        ],
        "start": 435,
        "end": 780
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 417,
      "end": 780
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 792,
        "end": 793
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
              "start": 800,
              "end": 801
            },
            "typeAnnotation": null,
            "accessibility": null,
            "static": false,
            "start": 800,
            "end": 802
          }
        ],
        "start": 794,
        "end": 804
      },
      "declare": false,
      "start": 782,
      "end": 804
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
                  "start": 812,
                  "end": 813
                },
                "typeArguments": null,
                "start": 812,
                "end": 813
              },
              "start": 811,
              "end": 813
            },
            "start": 810,
            "end": 813
          },
          "init": null,
          "definite": false,
          "start": 810,
          "end": 813
        }
      ],
      "declare": false,
      "start": 806,
      "end": 814
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
                    "start": 821,
                    "end": 822
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "I",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 823,
                    "end": 824
                  },
                  "start": 821,
                  "end": 824
                },
                "typeArguments": null,
                "start": 821,
                "end": 824
              },
              "start": 820,
              "end": 824
            },
            "start": 819,
            "end": 824
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 825,
            "end": 826
          },
          "definite": false,
          "start": 819,
          "end": 826
        }
      ],
      "declare": false,
      "start": 815,
      "end": 827
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 828
}
```
