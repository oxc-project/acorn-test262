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
        "name": "A",
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
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Point",
                "optional": false,
                "typeAnnotation": null,
                "start": 35,
                "end": 40
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
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 51,
                      "end": 52
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 54,
                        "end": 60
                      },
                      "start": 52,
                      "end": 60
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 51,
                    "end": 61
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 70,
                      "end": 71
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 73,
                        "end": 79
                      },
                      "start": 71,
                      "end": 79
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 70,
                    "end": 80
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "toCarth",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 89,
                      "end": 96
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Point",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 100,
                          "end": 105
                        },
                        "typeArguments": null,
                        "start": 100,
                        "end": 105
                      },
                      "start": 98,
                      "end": 105
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 89,
                    "end": 106
                  }
                ],
                "start": 41,
                "end": 112
              },
              "declare": false,
              "start": 25,
              "end": 112
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 18,
            "end": 112
          }
        ],
        "start": 12,
        "end": 114
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 114
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 126,
        "end": 127
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Point",
              "optional": false,
              "typeAnnotation": null,
              "start": 144,
              "end": 149
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "fromCarth",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 160,
                    "end": 169
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Point",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 173,
                        "end": 178
                      },
                      "typeArguments": null,
                      "start": 173,
                      "end": 178
                    },
                    "start": 171,
                    "end": 178
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 160,
                  "end": 179
                }
              ],
              "start": 150,
              "end": 185
            },
            "declare": false,
            "start": 134,
            "end": 185
          }
        ],
        "start": 128,
        "end": 187
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 116,
      "end": 187
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
            "name": "p",
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
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 227,
                      "end": 228
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 230,
                        "end": 236
                      },
                      "start": 228,
                      "end": 236
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 227,
                    "end": 237
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 238,
                      "end": 239
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 241,
                        "end": 247
                      },
                      "start": 239,
                      "end": 247
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 238,
                    "end": 248
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "toCarth",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 249,
                      "end": 256
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
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
                            "name": "A",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 260,
                            "end": 261
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Point",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 262,
                            "end": 267
                          },
                          "start": 260,
                          "end": 267
                        },
                        "typeArguments": null,
                        "start": 260,
                        "end": 267
                      },
                      "start": 258,
                      "end": 267
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 249,
                    "end": 268
                  }
                ],
                "start": 225,
                "end": 270
              },
              "start": 223,
              "end": 270
            },
            "start": 222,
            "end": 270
          },
          "init": null,
          "definite": false,
          "start": 222,
          "end": 270
        }
      ],
      "declare": false,
      "start": 218,
      "end": 271
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
            "name": "p",
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
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 279,
                    "end": 280
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Point",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 281,
                    "end": 286
                  },
                  "start": 279,
                  "end": 286
                },
                "typeArguments": null,
                "start": 279,
                "end": 286
              },
              "start": 277,
              "end": 286
            },
            "start": 276,
            "end": 286
          },
          "init": null,
          "definite": false,
          "start": 276,
          "end": 286
        }
      ],
      "declare": false,
      "start": 272,
      "end": 287
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "TSQualifiedName",
        "left": {
          "type": "TSQualifiedName",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "X",
            "optional": false,
            "typeAnnotation": null,
            "start": 299,
            "end": 300
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "Y",
            "optional": false,
            "typeAnnotation": null,
            "start": 301,
            "end": 302
          },
          "start": 299,
          "end": 302
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "Z",
          "optional": false,
          "typeAnnotation": null,
          "start": 303,
          "end": 304
        },
        "start": 299,
        "end": 304
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
                "name": "Line",
                "optional": false,
                "typeAnnotation": null,
                "start": 328,
                "end": 332
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "start",
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
                                "name": "A",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 355,
                                "end": 356
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Point",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 357,
                                "end": 362
                              },
                              "start": 355,
                              "end": 362
                            },
                            "typeArguments": null,
                            "start": 355,
                            "end": 362
                          },
                          "start": 353,
                          "end": 362
                        },
                        "start": 348,
                        "end": 362
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "end",
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
                                "name": "A",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 369,
                                "end": 370
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Point",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 371,
                                "end": 376
                              },
                              "start": 369,
                              "end": 376
                            },
                            "typeArguments": null,
                            "start": 369,
                            "end": 376
                          },
                          "start": 367,
                          "end": 376
                        },
                        "start": 364,
                        "end": 376
                      }
                    ],
                    "returnType": null,
                    "start": 343,
                    "end": 378
                  }
                ],
                "start": 333,
                "end": 384
              },
              "declare": false,
              "start": 318,
              "end": 384
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 311,
            "end": 384
          }
        ],
        "start": 305,
        "end": 386
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 289,
      "end": 386
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X",
        "optional": false,
        "typeAnnotation": null,
        "start": 398,
        "end": 399
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSModuleDeclaration",
              "id": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 423,
                  "end": 424
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Z",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 425,
                  "end": 426
                },
                "start": 423,
                "end": 426
              },
              "body": {
                "type": "TSModuleBlock",
                "body": [
                  {
                    "type": "TSInterfaceDeclaration",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Line",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 447,
                      "end": 451
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
                            "name": "start",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 466,
                            "end": 471
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
                                  "name": "A",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 473,
                                  "end": 474
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Point",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 475,
                                  "end": 480
                                },
                                "start": 473,
                                "end": 480
                              },
                              "typeArguments": null,
                              "start": 473,
                              "end": 480
                            },
                            "start": 471,
                            "end": 480
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 466,
                          "end": 481
                        },
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "end",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 494,
                            "end": 497
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
                                  "name": "A",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 499,
                                  "end": 500
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Point",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 501,
                                  "end": 506
                                },
                                "start": 499,
                                "end": 506
                              },
                              "typeArguments": null,
                              "start": 499,
                              "end": 506
                            },
                            "start": 497,
                            "end": 506
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 494,
                          "end": 507
                        }
                      ],
                      "start": 452,
                      "end": 517
                    },
                    "declare": false,
                    "start": 437,
                    "end": 517
                  }
                ],
                "start": 427,
                "end": 523
              },
              "kind": "namespace",
              "declare": false,
              "global": false,
              "start": 413,
              "end": 523
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 406,
            "end": 523
          }
        ],
        "start": 400,
        "end": 525
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 388,
      "end": 525
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
            "name": "l",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "s",
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
                                "name": "A",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 573,
                                "end": 574
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Point",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 575,
                                "end": 580
                              },
                              "start": 573,
                              "end": 580
                            },
                            "typeArguments": null,
                            "start": 573,
                            "end": 580
                          },
                          "start": 571,
                          "end": 580
                        },
                        "start": 570,
                        "end": 580
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "e",
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
                                "name": "A",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 585,
                                "end": 586
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Point",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 587,
                                "end": 592
                              },
                              "start": 585,
                              "end": 592
                            },
                            "typeArguments": null,
                            "start": 585,
                            "end": 592
                          },
                          "start": 583,
                          "end": 592
                        },
                        "start": 582,
                        "end": 592
                      }
                    ],
                    "returnType": null,
                    "start": 565,
                    "end": 594
                  }
                ],
                "start": 563,
                "end": 596
              },
              "start": 561,
              "end": 596
            },
            "start": 560,
            "end": 596
          },
          "init": null,
          "definite": false,
          "start": 560,
          "end": 596
        }
      ],
      "declare": false,
      "start": 556,
      "end": 596
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
            "name": "l",
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
                      "type": "TSQualifiedName",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "X",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 604,
                        "end": 605
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 606,
                        "end": 607
                      },
                      "start": 604,
                      "end": 607
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Z",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 608,
                      "end": 609
                    },
                    "start": 604,
                    "end": 609
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Line",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 610,
                    "end": 614
                  },
                  "start": 604,
                  "end": 614
                },
                "typeArguments": null,
                "start": 604,
                "end": 614
              },
              "start": 602,
              "end": 614
            },
            "start": 601,
            "end": 614
          },
          "init": null,
          "definite": false,
          "start": 601,
          "end": 614
        }
      ],
      "declare": false,
      "start": 597,
      "end": 615
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 615
}
```
