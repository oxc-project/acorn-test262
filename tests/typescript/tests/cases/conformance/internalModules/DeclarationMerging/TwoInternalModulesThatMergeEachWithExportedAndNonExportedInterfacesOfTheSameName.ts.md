__ESTREE_TEST__:AST:
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
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 0,
    "end": 9,
    "range": [
      0,
      9
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 10,
    "end": 11,
    "range": [
      10,
      11
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 12,
    "end": 13,
    "range": [
      12,
      13
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 18,
    "end": 24,
    "range": [
      18,
      24
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 25,
    "end": 34,
    "range": [
      25,
      34
    ]
  },
  {
    "type": "Identifier",
    "value": "Point",
    "start": 35,
    "end": 40,
    "range": [
      35,
      40
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 41,
    "end": 42,
    "range": [
      41,
      42
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 51,
    "end": 52,
    "range": [
      51,
      52
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 52,
    "end": 53,
    "range": [
      52,
      53
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 54,
    "end": 60,
    "range": [
      54,
      60
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 60,
    "end": 61,
    "range": [
      60,
      61
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 70,
    "end": 71,
    "range": [
      70,
      71
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 71,
    "end": 72,
    "range": [
      71,
      72
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 73,
    "end": 79,
    "range": [
      73,
      79
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 79,
    "end": 80,
    "range": [
      79,
      80
    ]
  },
  {
    "type": "Identifier",
    "value": "toCarth",
    "start": 89,
    "end": 96,
    "range": [
      89,
      96
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 96,
    "end": 97,
    "range": [
      96,
      97
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 97,
    "end": 98,
    "range": [
      97,
      98
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 98,
    "end": 99,
    "range": [
      98,
      99
    ]
  },
  {
    "type": "Identifier",
    "value": "Point",
    "start": 100,
    "end": 105,
    "range": [
      100,
      105
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 105,
    "end": 106,
    "range": [
      105,
      106
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 111,
    "end": 112,
    "range": [
      111,
      112
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 113,
    "end": 114,
    "range": [
      113,
      114
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 116,
    "end": 125,
    "range": [
      116,
      125
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 126,
    "end": 127,
    "range": [
      126,
      127
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 128,
    "end": 129,
    "range": [
      128,
      129
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 134,
    "end": 143,
    "range": [
      134,
      143
    ]
  },
  {
    "type": "Identifier",
    "value": "Point",
    "start": 144,
    "end": 149,
    "range": [
      144,
      149
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 150,
    "end": 151,
    "range": [
      150,
      151
    ]
  },
  {
    "type": "Identifier",
    "value": "fromCarth",
    "start": 160,
    "end": 169,
    "range": [
      160,
      169
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 169,
    "end": 170,
    "range": [
      169,
      170
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 170,
    "end": 171,
    "range": [
      170,
      171
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 171,
    "end": 172,
    "range": [
      171,
      172
    ]
  },
  {
    "type": "Identifier",
    "value": "Point",
    "start": 173,
    "end": 178,
    "range": [
      173,
      178
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 178,
    "end": 179,
    "range": [
      178,
      179
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 184,
    "end": 185,
    "range": [
      184,
      185
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 186,
    "end": 187,
    "range": [
      186,
      187
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 218,
    "end": 221,
    "range": [
      218,
      221
    ]
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 222,
    "end": 223,
    "range": [
      222,
      223
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 223,
    "end": 224,
    "range": [
      223,
      224
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 225,
    "end": 226,
    "range": [
      225,
      226
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 227,
    "end": 228,
    "range": [
      227,
      228
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 228,
    "end": 229,
    "range": [
      228,
      229
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 230,
    "end": 236,
    "range": [
      230,
      236
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 236,
    "end": 237,
    "range": [
      236,
      237
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 238,
    "end": 239,
    "range": [
      238,
      239
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 239,
    "end": 240,
    "range": [
      239,
      240
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 241,
    "end": 247,
    "range": [
      241,
      247
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 247,
    "end": 248,
    "range": [
      247,
      248
    ]
  },
  {
    "type": "Identifier",
    "value": "toCarth",
    "start": 249,
    "end": 256,
    "range": [
      249,
      256
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 256,
    "end": 257,
    "range": [
      256,
      257
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 257,
    "end": 258,
    "range": [
      257,
      258
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 258,
    "end": 259,
    "range": [
      258,
      259
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 260,
    "end": 261,
    "range": [
      260,
      261
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 261,
    "end": 262,
    "range": [
      261,
      262
    ]
  },
  {
    "type": "Identifier",
    "value": "Point",
    "start": 262,
    "end": 267,
    "range": [
      262,
      267
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 267,
    "end": 268,
    "range": [
      267,
      268
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 269,
    "end": 270,
    "range": [
      269,
      270
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 270,
    "end": 271,
    "range": [
      270,
      271
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 272,
    "end": 275,
    "range": [
      272,
      275
    ]
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 276,
    "end": 277,
    "range": [
      276,
      277
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 277,
    "end": 278,
    "range": [
      277,
      278
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 279,
    "end": 280,
    "range": [
      279,
      280
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 280,
    "end": 281,
    "range": [
      280,
      281
    ]
  },
  {
    "type": "Identifier",
    "value": "Point",
    "start": 281,
    "end": 286,
    "range": [
      281,
      286
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 286,
    "end": 287,
    "range": [
      286,
      287
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 289,
    "end": 298,
    "range": [
      289,
      298
    ]
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 299,
    "end": 300,
    "range": [
      299,
      300
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 300,
    "end": 301,
    "range": [
      300,
      301
    ]
  },
  {
    "type": "Identifier",
    "value": "Y",
    "start": 301,
    "end": 302,
    "range": [
      301,
      302
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 302,
    "end": 303,
    "range": [
      302,
      303
    ]
  },
  {
    "type": "Identifier",
    "value": "Z",
    "start": 303,
    "end": 304,
    "range": [
      303,
      304
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 305,
    "end": 306,
    "range": [
      305,
      306
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 311,
    "end": 317,
    "range": [
      311,
      317
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 318,
    "end": 327,
    "range": [
      318,
      327
    ]
  },
  {
    "type": "Identifier",
    "value": "Line",
    "start": 328,
    "end": 332,
    "range": [
      328,
      332
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 333,
    "end": 334,
    "range": [
      333,
      334
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 343,
    "end": 346,
    "range": [
      343,
      346
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 347,
    "end": 348,
    "range": [
      347,
      348
    ]
  },
  {
    "type": "Identifier",
    "value": "start",
    "start": 348,
    "end": 353,
    "range": [
      348,
      353
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 353,
    "end": 354,
    "range": [
      353,
      354
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 355,
    "end": 356,
    "range": [
      355,
      356
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 356,
    "end": 357,
    "range": [
      356,
      357
    ]
  },
  {
    "type": "Identifier",
    "value": "Point",
    "start": 357,
    "end": 362,
    "range": [
      357,
      362
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 362,
    "end": 363,
    "range": [
      362,
      363
    ]
  },
  {
    "type": "Identifier",
    "value": "end",
    "start": 364,
    "end": 367,
    "range": [
      364,
      367
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 367,
    "end": 368,
    "range": [
      367,
      368
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 369,
    "end": 370,
    "range": [
      369,
      370
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 370,
    "end": 371,
    "range": [
      370,
      371
    ]
  },
  {
    "type": "Identifier",
    "value": "Point",
    "start": 371,
    "end": 376,
    "range": [
      371,
      376
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 376,
    "end": 377,
    "range": [
      376,
      377
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 377,
    "end": 378,
    "range": [
      377,
      378
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 383,
    "end": 384,
    "range": [
      383,
      384
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 385,
    "end": 386,
    "range": [
      385,
      386
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 388,
    "end": 397,
    "range": [
      388,
      397
    ]
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 398,
    "end": 399,
    "range": [
      398,
      399
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 400,
    "end": 401,
    "range": [
      400,
      401
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 406,
    "end": 412,
    "range": [
      406,
      412
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 413,
    "end": 422,
    "range": [
      413,
      422
    ]
  },
  {
    "type": "Identifier",
    "value": "Y",
    "start": 423,
    "end": 424,
    "range": [
      423,
      424
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 424,
    "end": 425,
    "range": [
      424,
      425
    ]
  },
  {
    "type": "Identifier",
    "value": "Z",
    "start": 425,
    "end": 426,
    "range": [
      425,
      426
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 427,
    "end": 428,
    "range": [
      427,
      428
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 437,
    "end": 446,
    "range": [
      437,
      446
    ]
  },
  {
    "type": "Identifier",
    "value": "Line",
    "start": 447,
    "end": 451,
    "range": [
      447,
      451
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 452,
    "end": 453,
    "range": [
      452,
      453
    ]
  },
  {
    "type": "Identifier",
    "value": "start",
    "start": 466,
    "end": 471,
    "range": [
      466,
      471
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 471,
    "end": 472,
    "range": [
      471,
      472
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 473,
    "end": 474,
    "range": [
      473,
      474
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 474,
    "end": 475,
    "range": [
      474,
      475
    ]
  },
  {
    "type": "Identifier",
    "value": "Point",
    "start": 475,
    "end": 480,
    "range": [
      475,
      480
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 480,
    "end": 481,
    "range": [
      480,
      481
    ]
  },
  {
    "type": "Identifier",
    "value": "end",
    "start": 494,
    "end": 497,
    "range": [
      494,
      497
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 497,
    "end": 498,
    "range": [
      497,
      498
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 499,
    "end": 500,
    "range": [
      499,
      500
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 500,
    "end": 501,
    "range": [
      500,
      501
    ]
  },
  {
    "type": "Identifier",
    "value": "Point",
    "start": 501,
    "end": 506,
    "range": [
      501,
      506
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 506,
    "end": 507,
    "range": [
      506,
      507
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 516,
    "end": 517,
    "range": [
      516,
      517
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 522,
    "end": 523,
    "range": [
      522,
      523
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 524,
    "end": 525,
    "range": [
      524,
      525
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 556,
    "end": 559,
    "range": [
      556,
      559
    ]
  },
  {
    "type": "Identifier",
    "value": "l",
    "start": 560,
    "end": 561,
    "range": [
      560,
      561
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 561,
    "end": 562,
    "range": [
      561,
      562
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 563,
    "end": 564,
    "range": [
      563,
      564
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 565,
    "end": 568,
    "range": [
      565,
      568
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 569,
    "end": 570,
    "range": [
      569,
      570
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 570,
    "end": 571,
    "range": [
      570,
      571
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 571,
    "end": 572,
    "range": [
      571,
      572
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 573,
    "end": 574,
    "range": [
      573,
      574
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 574,
    "end": 575,
    "range": [
      574,
      575
    ]
  },
  {
    "type": "Identifier",
    "value": "Point",
    "start": 575,
    "end": 580,
    "range": [
      575,
      580
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 580,
    "end": 581,
    "range": [
      580,
      581
    ]
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 582,
    "end": 583,
    "range": [
      582,
      583
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 583,
    "end": 584,
    "range": [
      583,
      584
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 585,
    "end": 586,
    "range": [
      585,
      586
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 586,
    "end": 587,
    "range": [
      586,
      587
    ]
  },
  {
    "type": "Identifier",
    "value": "Point",
    "start": 587,
    "end": 592,
    "range": [
      587,
      592
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 592,
    "end": 593,
    "range": [
      592,
      593
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 593,
    "end": 594,
    "range": [
      593,
      594
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 595,
    "end": 596,
    "range": [
      595,
      596
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 597,
    "end": 600,
    "range": [
      597,
      600
    ]
  },
  {
    "type": "Identifier",
    "value": "l",
    "start": 601,
    "end": 602,
    "range": [
      601,
      602
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 602,
    "end": 603,
    "range": [
      602,
      603
    ]
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 604,
    "end": 605,
    "range": [
      604,
      605
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 605,
    "end": 606,
    "range": [
      605,
      606
    ]
  },
  {
    "type": "Identifier",
    "value": "Y",
    "start": 606,
    "end": 607,
    "range": [
      606,
      607
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 607,
    "end": 608,
    "range": [
      607,
      608
    ]
  },
  {
    "type": "Identifier",
    "value": "Z",
    "start": 608,
    "end": 609,
    "range": [
      608,
      609
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 609,
    "end": 610,
    "range": [
      609,
      610
    ]
  },
  {
    "type": "Identifier",
    "value": "Line",
    "start": 610,
    "end": 614,
    "range": [
      610,
      614
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 614,
    "end": 615,
    "range": [
      614,
      615
    ]
  }
]
```
