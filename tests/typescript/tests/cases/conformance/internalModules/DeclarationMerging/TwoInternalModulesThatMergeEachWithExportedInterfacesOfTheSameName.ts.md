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
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Point",
                "optional": false,
                "typeAnnotation": null,
                "start": 151,
                "end": 156
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
                      "start": 167,
                      "end": 176
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
                          "start": 180,
                          "end": 185
                        },
                        "typeArguments": null,
                        "start": 180,
                        "end": 185
                      },
                      "start": 178,
                      "end": 185
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 167,
                    "end": 186
                  }
                ],
                "start": 157,
                "end": 192
              },
              "declare": false,
              "start": 141,
              "end": 192
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 134,
            "end": 192
          }
        ],
        "start": 128,
        "end": 194
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 116,
      "end": 194
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
                      "start": 234,
                      "end": 235
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 237,
                        "end": 243
                      },
                      "start": 235,
                      "end": 243
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 234,
                    "end": 244
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
                      "start": 245,
                      "end": 246
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 248,
                        "end": 254
                      },
                      "start": 246,
                      "end": 254
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 245,
                    "end": 255
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "toCarth",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 256,
                      "end": 263
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
                            "start": 267,
                            "end": 268
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Point",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 269,
                            "end": 274
                          },
                          "start": 267,
                          "end": 274
                        },
                        "typeArguments": null,
                        "start": 267,
                        "end": 274
                      },
                      "start": 265,
                      "end": 274
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 256,
                    "end": 275
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "fromCarth",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 276,
                      "end": 285
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
                            "start": 289,
                            "end": 290
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Point",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 291,
                            "end": 296
                          },
                          "start": 289,
                          "end": 296
                        },
                        "typeArguments": null,
                        "start": 289,
                        "end": 296
                      },
                      "start": 287,
                      "end": 296
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 276,
                    "end": 297
                  }
                ],
                "start": 232,
                "end": 299
              },
              "start": 230,
              "end": 299
            },
            "start": 229,
            "end": 299
          },
          "init": null,
          "definite": false,
          "start": 229,
          "end": 299
        }
      ],
      "declare": false,
      "start": 225,
      "end": 300
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
                    "start": 308,
                    "end": 309
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Point",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 310,
                    "end": 315
                  },
                  "start": 308,
                  "end": 315
                },
                "typeArguments": null,
                "start": 308,
                "end": 315
              },
              "start": 306,
              "end": 315
            },
            "start": 305,
            "end": 315
          },
          "init": null,
          "definite": false,
          "start": 305,
          "end": 315
        }
      ],
      "declare": false,
      "start": 301,
      "end": 316
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
            "start": 328,
            "end": 329
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "Y",
            "optional": false,
            "typeAnnotation": null,
            "start": 330,
            "end": 331
          },
          "start": 328,
          "end": 331
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "Z",
          "optional": false,
          "typeAnnotation": null,
          "start": 332,
          "end": 333
        },
        "start": 328,
        "end": 333
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
                "start": 357,
                "end": 361
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
                                "start": 384,
                                "end": 385
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Point",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 386,
                                "end": 391
                              },
                              "start": 384,
                              "end": 391
                            },
                            "typeArguments": null,
                            "start": 384,
                            "end": 391
                          },
                          "start": 382,
                          "end": 391
                        },
                        "start": 377,
                        "end": 391
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
                                "start": 398,
                                "end": 399
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Point",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 400,
                                "end": 405
                              },
                              "start": 398,
                              "end": 405
                            },
                            "typeArguments": null,
                            "start": 398,
                            "end": 405
                          },
                          "start": 396,
                          "end": 405
                        },
                        "start": 393,
                        "end": 405
                      }
                    ],
                    "returnType": null,
                    "start": 372,
                    "end": 407
                  }
                ],
                "start": 362,
                "end": 413
              },
              "declare": false,
              "start": 347,
              "end": 413
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 340,
            "end": 413
          }
        ],
        "start": 334,
        "end": 415
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 318,
      "end": 415
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X",
        "optional": false,
        "typeAnnotation": null,
        "start": 427,
        "end": 428
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
                  "start": 452,
                  "end": 453
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Z",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 454,
                  "end": 455
                },
                "start": 452,
                "end": 455
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
                        "start": 483,
                        "end": 487
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
                              "start": 502,
                              "end": 507
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
                                    "start": 509,
                                    "end": 510
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Point",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 511,
                                    "end": 516
                                  },
                                  "start": 509,
                                  "end": 516
                                },
                                "typeArguments": null,
                                "start": 509,
                                "end": 516
                              },
                              "start": 507,
                              "end": 516
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 502,
                            "end": 517
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
                              "start": 530,
                              "end": 533
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
                                    "start": 535,
                                    "end": 536
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Point",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 537,
                                    "end": 542
                                  },
                                  "start": 535,
                                  "end": 542
                                },
                                "typeArguments": null,
                                "start": 535,
                                "end": 542
                              },
                              "start": 533,
                              "end": 542
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 530,
                            "end": 543
                          }
                        ],
                        "start": 488,
                        "end": 553
                      },
                      "declare": false,
                      "start": 473,
                      "end": 553
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "type",
                    "attributes": [],
                    "start": 466,
                    "end": 553
                  }
                ],
                "start": 456,
                "end": 559
              },
              "kind": "namespace",
              "declare": false,
              "global": false,
              "start": 442,
              "end": 559
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 435,
            "end": 559
          }
        ],
        "start": 429,
        "end": 561
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 417,
      "end": 561
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
                      "start": 601,
                      "end": 606
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
                            "start": 608,
                            "end": 609
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Point",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 610,
                            "end": 615
                          },
                          "start": 608,
                          "end": 615
                        },
                        "typeArguments": null,
                        "start": 608,
                        "end": 615
                      },
                      "start": 606,
                      "end": 615
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 601,
                    "end": 616
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
                      "start": 617,
                      "end": 620
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
                            "start": 622,
                            "end": 623
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Point",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 624,
                            "end": 629
                          },
                          "start": 622,
                          "end": 629
                        },
                        "typeArguments": null,
                        "start": 622,
                        "end": 629
                      },
                      "start": 620,
                      "end": 629
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 617,
                    "end": 630
                  },
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
                                "start": 639,
                                "end": 640
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Point",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 641,
                                "end": 646
                              },
                              "start": 639,
                              "end": 646
                            },
                            "typeArguments": null,
                            "start": 639,
                            "end": 646
                          },
                          "start": 637,
                          "end": 646
                        },
                        "start": 636,
                        "end": 646
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
                                "start": 651,
                                "end": 652
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Point",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 653,
                                "end": 658
                              },
                              "start": 651,
                              "end": 658
                            },
                            "typeArguments": null,
                            "start": 651,
                            "end": 658
                          },
                          "start": 649,
                          "end": 658
                        },
                        "start": 648,
                        "end": 658
                      }
                    ],
                    "returnType": null,
                    "start": 631,
                    "end": 660
                  }
                ],
                "start": 599,
                "end": 662
              },
              "start": 597,
              "end": 662
            },
            "start": 596,
            "end": 662
          },
          "init": null,
          "definite": false,
          "start": 596,
          "end": 662
        }
      ],
      "declare": false,
      "start": 592,
      "end": 662
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
                        "start": 670,
                        "end": 671
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 672,
                        "end": 673
                      },
                      "start": 670,
                      "end": 673
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Z",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 674,
                      "end": 675
                    },
                    "start": 670,
                    "end": 675
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Line",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 676,
                    "end": 680
                  },
                  "start": 670,
                  "end": 680
                },
                "typeArguments": null,
                "start": 670,
                "end": 680
              },
              "start": 668,
              "end": 680
            },
            "start": 667,
            "end": 680
          },
          "init": null,
          "definite": false,
          "start": 667,
          "end": 680
        }
      ],
      "declare": false,
      "start": 663,
      "end": 681
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 681
}
```
