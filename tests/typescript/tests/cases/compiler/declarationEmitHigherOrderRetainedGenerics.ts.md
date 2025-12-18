__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "TypeLambda",
          "optional": false,
          "typeAnnotation": null,
          "start": 17,
          "end": 27
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
              "readonly": true,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "In",
                "optional": false,
                "typeAnnotation": null,
                "start": 43,
                "end": 45
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSUnknownKeyword",
                  "start": 47,
                  "end": 54
                },
                "start": 45,
                "end": 54
              },
              "accessibility": null,
              "static": false,
              "start": 34,
              "end": 54
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": true,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "Out2",
                "optional": false,
                "typeAnnotation": null,
                "start": 68,
                "end": 72
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSUnknownKeyword",
                  "start": 74,
                  "end": 81
                },
                "start": 72,
                "end": 81
              },
              "accessibility": null,
              "static": false,
              "start": 59,
              "end": 81
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": true,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "Out1",
                "optional": false,
                "typeAnnotation": null,
                "start": 95,
                "end": 99
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSUnknownKeyword",
                  "start": 101,
                  "end": 108
                },
                "start": 99,
                "end": 108
              },
              "accessibility": null,
              "static": false,
              "start": 86,
              "end": 108
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": true,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "Target",
                "optional": false,
                "typeAnnotation": null,
                "start": 122,
                "end": 128
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSUnknownKeyword",
                  "start": 130,
                  "end": 137
                },
                "start": 128,
                "end": 137
              },
              "accessibility": null,
              "static": false,
              "start": 113,
              "end": 137
            }
          ],
          "start": 28,
          "end": 139
        },
        "declare": false,
        "start": 7,
        "end": 139
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 0,
      "end": 139
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSModuleDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Types",
          "optional": false,
          "typeAnnotation": null,
          "start": 157,
          "end": 162
        },
        "body": {
          "type": "TSModuleBlock",
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "TSTypeAliasDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Invariant",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 181,
                  "end": 190
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 191,
                        "end": 192
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 191,
                      "end": 192
                    }
                  ],
                  "start": 190,
                  "end": 193
                },
                "typeAnnotation": {
                  "type": "TSFunctionType",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "_",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "A",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 200,
                            "end": 201
                          },
                          "typeArguments": null,
                          "start": 200,
                          "end": 201
                        },
                        "start": 198,
                        "end": 201
                      },
                      "start": 197,
                      "end": 201
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 206,
                        "end": 207
                      },
                      "typeArguments": null,
                      "start": 206,
                      "end": 207
                    },
                    "start": 203,
                    "end": 207
                  },
                  "start": 196,
                  "end": 207
                },
                "declare": false,
                "start": 176,
                "end": 207
              },
              "specifiers": [],
              "source": null,
              "exportKind": "type",
              "attributes": [],
              "start": 169,
              "end": 207
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "TSTypeAliasDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Covariant",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 224,
                  "end": 233
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 234,
                        "end": 235
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 234,
                      "end": 235
                    }
                  ],
                  "start": 233,
                  "end": 236
                },
                "typeAnnotation": {
                  "type": "TSFunctionType",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "_",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNeverKeyword",
                          "start": 243,
                          "end": 248
                        },
                        "start": 241,
                        "end": 248
                      },
                      "start": 240,
                      "end": 248
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 253,
                        "end": 254
                      },
                      "typeArguments": null,
                      "start": 253,
                      "end": 254
                    },
                    "start": 250,
                    "end": 254
                  },
                  "start": 239,
                  "end": 254
                },
                "declare": false,
                "start": 219,
                "end": 254
              },
              "specifiers": [],
              "source": null,
              "exportKind": "type",
              "attributes": [],
              "start": 212,
              "end": 254
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "TSTypeAliasDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Contravariant",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 271,
                  "end": 284
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 285,
                        "end": 286
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 285,
                      "end": 286
                    }
                  ],
                  "start": 284,
                  "end": 287
                },
                "typeAnnotation": {
                  "type": "TSFunctionType",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "_",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "A",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 294,
                            "end": 295
                          },
                          "typeArguments": null,
                          "start": 294,
                          "end": 295
                        },
                        "start": 292,
                        "end": 295
                      },
                      "start": 291,
                      "end": 295
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 300,
                      "end": 304
                    },
                    "start": 297,
                    "end": 304
                  },
                  "start": 290,
                  "end": 304
                },
                "declare": false,
                "start": 266,
                "end": 304
              },
              "specifiers": [],
              "source": null,
              "exportKind": "type",
              "attributes": [],
              "start": 259,
              "end": 304
            }
          ],
          "start": 163,
          "end": 306
        },
        "kind": "namespace",
        "declare": false,
        "global": false,
        "start": 147,
        "end": 306
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 140,
      "end": 306
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "URI",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeOperator",
                  "operator": "unique",
                  "typeAnnotation": {
                    "type": "TSSymbolKeyword",
                    "start": 341,
                    "end": 347
                  },
                  "start": 334,
                  "end": 347
                },
                "start": 332,
                "end": 347
              },
              "start": 329,
              "end": 347
            },
            "init": null,
            "definite": false,
            "start": 329,
            "end": 347
          }
        ],
        "declare": true,
        "start": 315,
        "end": 348
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 308,
      "end": 348
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "TypeClass",
          "optional": false,
          "typeAnnotation": null,
          "start": 366,
          "end": 375
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "F",
                "optional": false,
                "typeAnnotation": null,
                "start": 376,
                "end": 377
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TypeLambda",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 386,
                  "end": 396
                },
                "typeArguments": null,
                "start": 386,
                "end": 396
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 376,
              "end": 396
            }
          ],
          "start": 375,
          "end": 397
        },
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [
            {
              "type": "TSPropertySignature",
              "computed": true,
              "optional": true,
              "readonly": true,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "URI",
                "optional": false,
                "typeAnnotation": null,
                "start": 414,
                "end": 417
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "F",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 421,
                    "end": 422
                  },
                  "typeArguments": null,
                  "start": 421,
                  "end": 422
                },
                "start": 419,
                "end": 422
              },
              "accessibility": null,
              "static": false,
              "start": 404,
              "end": 422
            }
          ],
          "start": 398,
          "end": 424
        },
        "declare": false,
        "start": 356,
        "end": 424
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 349,
      "end": 424
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Invariant",
          "optional": false,
          "typeAnnotation": null,
          "start": 443,
          "end": 452
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "F",
                "optional": false,
                "typeAnnotation": null,
                "start": 453,
                "end": 454
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TypeLambda",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 463,
                  "end": 473
                },
                "typeArguments": null,
                "start": 463,
                "end": 473
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 453,
              "end": 473
            }
          ],
          "start": 452,
          "end": 474
        },
        "extends": [
          {
            "type": "TSInterfaceHeritage",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "TypeClass",
              "optional": false,
              "typeAnnotation": null,
              "start": 483,
              "end": 492
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "F",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 493,
                    "end": 494
                  },
                  "typeArguments": null,
                  "start": 493,
                  "end": 494
                }
              ],
              "start": 492,
              "end": 495
            },
            "start": 483,
            "end": 495
          }
        ],
        "body": {
          "type": "TSInterfaceBody",
          "body": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": true,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "imap",
                "optional": false,
                "typeAnnotation": null,
                "start": 511,
                "end": 515
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
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
                              "name": "A",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 528,
                              "end": 529
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 528,
                            "end": 529
                          },
                          {
                            "type": "TSTypeParameter",
                            "name": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "B",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 531,
                              "end": 532
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 531,
                            "end": 532
                          }
                        ],
                        "start": 527,
                        "end": 533
                      },
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "to",
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
                                  "name": "a",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "A",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 555,
                                        "end": 556
                                      },
                                      "typeArguments": null,
                                      "start": 555,
                                      "end": 556
                                    },
                                    "start": 553,
                                    "end": 556
                                  },
                                  "start": 552,
                                  "end": 556
                                }
                              ],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "B",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 561,
                                    "end": 562
                                  },
                                  "typeArguments": null,
                                  "start": 561,
                                  "end": 562
                                },
                                "start": 558,
                                "end": 562
                              },
                              "start": 551,
                              "end": 562
                            },
                            "start": 549,
                            "end": 562
                          },
                          "start": 547,
                          "end": 562
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "from",
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
                                  "name": "b",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "B",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 586,
                                        "end": 587
                                      },
                                      "typeArguments": null,
                                      "start": 586,
                                      "end": 587
                                    },
                                    "start": 584,
                                    "end": 587
                                  },
                                  "start": 583,
                                  "end": 587
                                }
                              ],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "A",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 592,
                                    "end": 593
                                  },
                                  "typeArguments": null,
                                  "start": 592,
                                  "end": 593
                                },
                                "start": 589,
                                "end": 593
                              },
                              "start": 582,
                              "end": 593
                            },
                            "start": 580,
                            "end": 593
                          },
                          "start": 576,
                          "end": 593
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
                                  "name": "R",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 606,
                                  "end": 607
                                },
                                "constraint": null,
                                "default": null,
                                "in": false,
                                "out": false,
                                "const": false,
                                "start": 606,
                                "end": 607
                              },
                              {
                                "type": "TSTypeParameter",
                                "name": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "O",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 609,
                                  "end": 610
                                },
                                "constraint": null,
                                "default": null,
                                "in": false,
                                "out": false,
                                "const": false,
                                "start": 609,
                                "end": 610
                              },
                              {
                                "type": "TSTypeParameter",
                                "name": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "E",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 612,
                                  "end": 613
                                },
                                "constraint": null,
                                "default": null,
                                "in": false,
                                "out": false,
                                "const": false,
                                "start": 612,
                                "end": 613
                              }
                            ],
                            "start": 605,
                            "end": 614
                          },
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "self",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Kind",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 621,
                                    "end": 625
                                  },
                                  "typeArguments": {
                                    "type": "TSTypeParameterInstantiation",
                                    "params": [
                                      {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "F",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 626,
                                          "end": 627
                                        },
                                        "typeArguments": null,
                                        "start": 626,
                                        "end": 627
                                      },
                                      {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "R",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 629,
                                          "end": 630
                                        },
                                        "typeArguments": null,
                                        "start": 629,
                                        "end": 630
                                      },
                                      {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "O",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 632,
                                          "end": 633
                                        },
                                        "typeArguments": null,
                                        "start": 632,
                                        "end": 633
                                      },
                                      {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "E",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 635,
                                          "end": 636
                                        },
                                        "typeArguments": null,
                                        "start": 635,
                                        "end": 636
                                      },
                                      {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "A",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 638,
                                          "end": 639
                                        },
                                        "typeArguments": null,
                                        "start": 638,
                                        "end": 639
                                      }
                                    ],
                                    "start": 625,
                                    "end": 640
                                  },
                                  "start": 621,
                                  "end": 640
                                },
                                "start": 619,
                                "end": 640
                              },
                              "start": 615,
                              "end": 640
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Kind",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 645,
                                "end": 649
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "F",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 650,
                                      "end": 651
                                    },
                                    "typeArguments": null,
                                    "start": 650,
                                    "end": 651
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "R",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 653,
                                      "end": 654
                                    },
                                    "typeArguments": null,
                                    "start": 653,
                                    "end": 654
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "O",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 656,
                                      "end": 657
                                    },
                                    "typeArguments": null,
                                    "start": 656,
                                    "end": 657
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "E",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 659,
                                      "end": 660
                                    },
                                    "typeArguments": null,
                                    "start": 659,
                                    "end": 660
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "B",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 662,
                                      "end": 663
                                    },
                                    "typeArguments": null,
                                    "start": 662,
                                    "end": 663
                                  }
                                ],
                                "start": 649,
                                "end": 664
                              },
                              "start": 645,
                              "end": 664
                            },
                            "start": 642,
                            "end": 664
                          },
                          "start": 605,
                          "end": 664
                        },
                        "start": 603,
                        "end": 664
                      },
                      "start": 527,
                      "end": 664
                    },
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
                              "name": "R",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 674,
                              "end": 675
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 674,
                            "end": 675
                          },
                          {
                            "type": "TSTypeParameter",
                            "name": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "O",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 677,
                              "end": 678
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 677,
                            "end": 678
                          },
                          {
                            "type": "TSTypeParameter",
                            "name": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "E",
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
                          },
                          {
                            "type": "TSTypeParameter",
                            "name": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "A",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 683,
                              "end": 684
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 683,
                            "end": 684
                          },
                          {
                            "type": "TSTypeParameter",
                            "name": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "B",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 686,
                              "end": 687
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 686,
                            "end": 687
                          }
                        ],
                        "start": 673,
                        "end": 688
                      },
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "self",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Kind",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 708,
                                "end": 712
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "F",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 713,
                                      "end": 714
                                    },
                                    "typeArguments": null,
                                    "start": 713,
                                    "end": 714
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "R",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 716,
                                      "end": 717
                                    },
                                    "typeArguments": null,
                                    "start": 716,
                                    "end": 717
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "O",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 719,
                                      "end": 720
                                    },
                                    "typeArguments": null,
                                    "start": 719,
                                    "end": 720
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "E",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 722,
                                      "end": 723
                                    },
                                    "typeArguments": null,
                                    "start": 722,
                                    "end": 723
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "A",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 725,
                                      "end": 726
                                    },
                                    "typeArguments": null,
                                    "start": 725,
                                    "end": 726
                                  }
                                ],
                                "start": 712,
                                "end": 727
                              },
                              "start": 708,
                              "end": 727
                            },
                            "start": 706,
                            "end": 727
                          },
                          "start": 702,
                          "end": 727
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "to",
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
                                  "name": "a",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "A",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 749,
                                        "end": 750
                                      },
                                      "typeArguments": null,
                                      "start": 749,
                                      "end": 750
                                    },
                                    "start": 747,
                                    "end": 750
                                  },
                                  "start": 746,
                                  "end": 750
                                }
                              ],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "B",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 755,
                                    "end": 756
                                  },
                                  "typeArguments": null,
                                  "start": 755,
                                  "end": 756
                                },
                                "start": 752,
                                "end": 756
                              },
                              "start": 745,
                              "end": 756
                            },
                            "start": 743,
                            "end": 756
                          },
                          "start": 741,
                          "end": 756
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "from",
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
                                  "name": "b",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "B",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 780,
                                        "end": 781
                                      },
                                      "typeArguments": null,
                                      "start": 780,
                                      "end": 781
                                    },
                                    "start": 778,
                                    "end": 781
                                  },
                                  "start": 777,
                                  "end": 781
                                }
                              ],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "A",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 786,
                                    "end": 787
                                  },
                                  "typeArguments": null,
                                  "start": 786,
                                  "end": 787
                                },
                                "start": 783,
                                "end": 787
                              },
                              "start": 776,
                              "end": 787
                            },
                            "start": 774,
                            "end": 787
                          },
                          "start": 770,
                          "end": 787
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Kind",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 799,
                            "end": 803
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "F",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 804,
                                  "end": 805
                                },
                                "typeArguments": null,
                                "start": 804,
                                "end": 805
                              },
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "R",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 807,
                                  "end": 808
                                },
                                "typeArguments": null,
                                "start": 807,
                                "end": 808
                              },
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "O",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 810,
                                  "end": 811
                                },
                                "typeArguments": null,
                                "start": 810,
                                "end": 811
                              },
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "E",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 813,
                                  "end": 814
                                },
                                "typeArguments": null,
                                "start": 813,
                                "end": 814
                              },
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "B",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 816,
                                  "end": 817
                                },
                                "typeArguments": null,
                                "start": 816,
                                "end": 817
                              }
                            ],
                            "start": 803,
                            "end": 818
                          },
                          "start": 799,
                          "end": 818
                        },
                        "start": 797,
                        "end": 818
                      },
                      "start": 673,
                      "end": 818
                    }
                  ],
                  "start": 517,
                  "end": 824
                },
                "start": 515,
                "end": 824
              },
              "accessibility": null,
              "static": false,
              "start": 502,
              "end": 824
            }
          ],
          "start": 496,
          "end": 826
        },
        "declare": false,
        "start": 433,
        "end": 826
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 426,
      "end": 826
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Covariant",
          "optional": false,
          "typeAnnotation": null,
          "start": 845,
          "end": 854
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "F",
                "optional": false,
                "typeAnnotation": null,
                "start": 855,
                "end": 856
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TypeLambda",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 865,
                  "end": 875
                },
                "typeArguments": null,
                "start": 865,
                "end": 875
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 855,
              "end": 875
            }
          ],
          "start": 854,
          "end": 876
        },
        "extends": [
          {
            "type": "TSInterfaceHeritage",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "Invariant",
              "optional": false,
              "typeAnnotation": null,
              "start": 885,
              "end": 894
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "F",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 895,
                    "end": 896
                  },
                  "typeArguments": null,
                  "start": 895,
                  "end": 896
                }
              ],
              "start": 894,
              "end": 897
            },
            "start": 885,
            "end": 897
          }
        ],
        "body": {
          "type": "TSInterfaceBody",
          "body": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": true,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "map",
                "optional": false,
                "typeAnnotation": null,
                "start": 913,
                "end": 916
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
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
                              "name": "A",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 929,
                              "end": 930
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 929,
                            "end": 930
                          },
                          {
                            "type": "TSTypeParameter",
                            "name": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "B",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 932,
                              "end": 933
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 932,
                            "end": 933
                          }
                        ],
                        "start": 928,
                        "end": 934
                      },
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "f",
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
                                  "name": "a",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "A",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 942,
                                        "end": 943
                                      },
                                      "typeArguments": null,
                                      "start": 942,
                                      "end": 943
                                    },
                                    "start": 940,
                                    "end": 943
                                  },
                                  "start": 939,
                                  "end": 943
                                }
                              ],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "B",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 948,
                                    "end": 949
                                  },
                                  "typeArguments": null,
                                  "start": 948,
                                  "end": 949
                                },
                                "start": 945,
                                "end": 949
                              },
                              "start": 938,
                              "end": 949
                            },
                            "start": 936,
                            "end": 949
                          },
                          "start": 935,
                          "end": 949
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
                                  "name": "R",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 953,
                                  "end": 954
                                },
                                "constraint": null,
                                "default": null,
                                "in": false,
                                "out": false,
                                "const": false,
                                "start": 953,
                                "end": 954
                              },
                              {
                                "type": "TSTypeParameter",
                                "name": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "O",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 956,
                                  "end": 957
                                },
                                "constraint": null,
                                "default": null,
                                "in": false,
                                "out": false,
                                "const": false,
                                "start": 956,
                                "end": 957
                              },
                              {
                                "type": "TSTypeParameter",
                                "name": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "E",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 959,
                                  "end": 960
                                },
                                "constraint": null,
                                "default": null,
                                "in": false,
                                "out": false,
                                "const": false,
                                "start": 959,
                                "end": 960
                              }
                            ],
                            "start": 952,
                            "end": 961
                          },
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "self",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Kind",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 968,
                                    "end": 972
                                  },
                                  "typeArguments": {
                                    "type": "TSTypeParameterInstantiation",
                                    "params": [
                                      {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "F",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 973,
                                          "end": 974
                                        },
                                        "typeArguments": null,
                                        "start": 973,
                                        "end": 974
                                      },
                                      {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "R",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 976,
                                          "end": 977
                                        },
                                        "typeArguments": null,
                                        "start": 976,
                                        "end": 977
                                      },
                                      {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "O",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 979,
                                          "end": 980
                                        },
                                        "typeArguments": null,
                                        "start": 979,
                                        "end": 980
                                      },
                                      {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "E",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 982,
                                          "end": 983
                                        },
                                        "typeArguments": null,
                                        "start": 982,
                                        "end": 983
                                      },
                                      {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "A",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 985,
                                          "end": 986
                                        },
                                        "typeArguments": null,
                                        "start": 985,
                                        "end": 986
                                      }
                                    ],
                                    "start": 972,
                                    "end": 987
                                  },
                                  "start": 968,
                                  "end": 987
                                },
                                "start": 966,
                                "end": 987
                              },
                              "start": 962,
                              "end": 987
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Kind",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 992,
                                "end": 996
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "F",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 997,
                                      "end": 998
                                    },
                                    "typeArguments": null,
                                    "start": 997,
                                    "end": 998
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "R",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1000,
                                      "end": 1001
                                    },
                                    "typeArguments": null,
                                    "start": 1000,
                                    "end": 1001
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "O",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1003,
                                      "end": 1004
                                    },
                                    "typeArguments": null,
                                    "start": 1003,
                                    "end": 1004
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "E",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1006,
                                      "end": 1007
                                    },
                                    "typeArguments": null,
                                    "start": 1006,
                                    "end": 1007
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "B",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1009,
                                      "end": 1010
                                    },
                                    "typeArguments": null,
                                    "start": 1009,
                                    "end": 1010
                                  }
                                ],
                                "start": 996,
                                "end": 1011
                              },
                              "start": 992,
                              "end": 1011
                            },
                            "start": 989,
                            "end": 1011
                          },
                          "start": 952,
                          "end": 1011
                        },
                        "start": 950,
                        "end": 1011
                      },
                      "start": 928,
                      "end": 1011
                    },
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
                              "name": "R",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1021,
                              "end": 1022
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 1021,
                            "end": 1022
                          },
                          {
                            "type": "TSTypeParameter",
                            "name": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "O",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1024,
                              "end": 1025
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 1024,
                            "end": 1025
                          },
                          {
                            "type": "TSTypeParameter",
                            "name": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "E",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1027,
                              "end": 1028
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 1027,
                            "end": 1028
                          },
                          {
                            "type": "TSTypeParameter",
                            "name": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "A",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1030,
                              "end": 1031
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 1030,
                            "end": 1031
                          },
                          {
                            "type": "TSTypeParameter",
                            "name": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "B",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1033,
                              "end": 1034
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 1033,
                            "end": 1034
                          }
                        ],
                        "start": 1020,
                        "end": 1035
                      },
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "self",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Kind",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1042,
                                "end": 1046
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "F",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1047,
                                      "end": 1048
                                    },
                                    "typeArguments": null,
                                    "start": 1047,
                                    "end": 1048
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "R",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1050,
                                      "end": 1051
                                    },
                                    "typeArguments": null,
                                    "start": 1050,
                                    "end": 1051
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "O",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1053,
                                      "end": 1054
                                    },
                                    "typeArguments": null,
                                    "start": 1053,
                                    "end": 1054
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "E",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1056,
                                      "end": 1057
                                    },
                                    "typeArguments": null,
                                    "start": 1056,
                                    "end": 1057
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "A",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1059,
                                      "end": 1060
                                    },
                                    "typeArguments": null,
                                    "start": 1059,
                                    "end": 1060
                                  }
                                ],
                                "start": 1046,
                                "end": 1061
                              },
                              "start": 1042,
                              "end": 1061
                            },
                            "start": 1040,
                            "end": 1061
                          },
                          "start": 1036,
                          "end": 1061
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "f",
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
                                  "name": "a",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "A",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1070,
                                        "end": 1071
                                      },
                                      "typeArguments": null,
                                      "start": 1070,
                                      "end": 1071
                                    },
                                    "start": 1068,
                                    "end": 1071
                                  },
                                  "start": 1067,
                                  "end": 1071
                                }
                              ],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "B",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1076,
                                    "end": 1077
                                  },
                                  "typeArguments": null,
                                  "start": 1076,
                                  "end": 1077
                                },
                                "start": 1073,
                                "end": 1077
                              },
                              "start": 1066,
                              "end": 1077
                            },
                            "start": 1064,
                            "end": 1077
                          },
                          "start": 1063,
                          "end": 1077
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Kind",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1080,
                            "end": 1084
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "F",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1085,
                                  "end": 1086
                                },
                                "typeArguments": null,
                                "start": 1085,
                                "end": 1086
                              },
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "R",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1088,
                                  "end": 1089
                                },
                                "typeArguments": null,
                                "start": 1088,
                                "end": 1089
                              },
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "O",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1091,
                                  "end": 1092
                                },
                                "typeArguments": null,
                                "start": 1091,
                                "end": 1092
                              },
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "E",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1094,
                                  "end": 1095
                                },
                                "typeArguments": null,
                                "start": 1094,
                                "end": 1095
                              },
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "B",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1097,
                                  "end": 1098
                                },
                                "typeArguments": null,
                                "start": 1097,
                                "end": 1098
                              }
                            ],
                            "start": 1084,
                            "end": 1099
                          },
                          "start": 1080,
                          "end": 1099
                        },
                        "start": 1078,
                        "end": 1099
                      },
                      "start": 1020,
                      "end": 1099
                    }
                  ],
                  "start": 918,
                  "end": 1105
                },
                "start": 916,
                "end": 1105
              },
              "accessibility": null,
              "static": false,
              "start": 904,
              "end": 1105
            }
          ],
          "start": 898,
          "end": 1107
        },
        "declare": false,
        "start": 835,
        "end": 1107
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 828,
      "end": 1107
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Kind",
          "optional": false,
          "typeAnnotation": null,
          "start": 1122,
          "end": 1126
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "F",
                "optional": false,
                "typeAnnotation": null,
                "start": 1127,
                "end": 1128
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TypeLambda",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1137,
                  "end": 1147
                },
                "typeArguments": null,
                "start": 1137,
                "end": 1147
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 1127,
              "end": 1147
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "In",
                "optional": false,
                "typeAnnotation": null,
                "start": 1149,
                "end": 1151
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 1149,
              "end": 1151
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "Out2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1153,
                "end": 1157
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 1153,
              "end": 1157
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "Out1",
                "optional": false,
                "typeAnnotation": null,
                "start": 1159,
                "end": 1163
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 1159,
              "end": 1163
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "Target",
                "optional": false,
                "typeAnnotation": null,
                "start": 1165,
                "end": 1171
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 1165,
              "end": 1171
            }
          ],
          "start": 1126,
          "end": 1172
        },
        "typeAnnotation": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "F",
              "optional": false,
              "typeAnnotation": null,
              "start": 1175,
              "end": 1176
            },
            "typeArguments": null,
            "start": 1175,
            "end": 1176
          },
          "extendsType": {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": true,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "type",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1200,
                  "end": 1204
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUnknownKeyword",
                    "start": 1206,
                    "end": 1213
                  },
                  "start": 1204,
                  "end": 1213
                },
                "accessibility": null,
                "static": false,
                "start": 1191,
                "end": 1213
              }
            ],
            "start": 1185,
            "end": 1215
          },
          "trueType": {
            "type": "TSIndexedAccessType",
            "objectType": {
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "F",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1219,
                    "end": 1220
                  },
                  "typeArguments": null,
                  "start": 1219,
                  "end": 1220
                },
                {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": true,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "In",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1238,
                        "end": 1240
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "In",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1242,
                            "end": 1244
                          },
                          "typeArguments": null,
                          "start": 1242,
                          "end": 1244
                        },
                        "start": 1240,
                        "end": 1244
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 1229,
                      "end": 1244
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": true,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Out2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1258,
                        "end": 1262
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Out2",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1264,
                            "end": 1268
                          },
                          "typeArguments": null,
                          "start": 1264,
                          "end": 1268
                        },
                        "start": 1262,
                        "end": 1268
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 1249,
                      "end": 1268
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": true,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Out1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1282,
                        "end": 1286
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Out1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1288,
                            "end": 1292
                          },
                          "typeArguments": null,
                          "start": 1288,
                          "end": 1292
                        },
                        "start": 1286,
                        "end": 1292
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 1273,
                      "end": 1292
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": true,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Target",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1306,
                        "end": 1312
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Target",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1314,
                            "end": 1320
                          },
                          "typeArguments": null,
                          "start": 1314,
                          "end": 1320
                        },
                        "start": 1312,
                        "end": 1320
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 1297,
                      "end": 1320
                    }
                  ],
                  "start": 1223,
                  "end": 1322
                }
              ],
              "start": 1219,
              "end": 1322
            },
            "indexType": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "type",
                "raw": "\"type\"",
                "start": 1324,
                "end": 1330
              },
              "start": 1324,
              "end": 1330
            },
            "start": 1218,
            "end": 1331
          },
          "falseType": {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": true,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "F",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1357,
                  "end": 1358
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "F",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1360,
                      "end": 1361
                    },
                    "typeArguments": null,
                    "start": 1360,
                    "end": 1361
                  },
                  "start": 1358,
                  "end": 1361
                },
                "accessibility": null,
                "static": false,
                "start": 1348,
                "end": 1361
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": true,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "In",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1379,
                  "end": 1381
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
                        "name": "Types",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1383,
                        "end": 1388
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Contravariant",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1389,
                        "end": 1402
                      },
                      "start": 1383,
                      "end": 1402
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "In",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1403,
                            "end": 1405
                          },
                          "typeArguments": null,
                          "start": 1403,
                          "end": 1405
                        }
                      ],
                      "start": 1402,
                      "end": 1406
                    },
                    "start": 1383,
                    "end": 1406
                  },
                  "start": 1381,
                  "end": 1406
                },
                "accessibility": null,
                "static": false,
                "start": 1370,
                "end": 1406
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": true,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Out2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1424,
                  "end": 1428
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
                        "name": "Types",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1430,
                        "end": 1435
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Covariant",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1436,
                        "end": 1445
                      },
                      "start": 1430,
                      "end": 1445
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Out2",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1446,
                            "end": 1450
                          },
                          "typeArguments": null,
                          "start": 1446,
                          "end": 1450
                        }
                      ],
                      "start": 1445,
                      "end": 1451
                    },
                    "start": 1430,
                    "end": 1451
                  },
                  "start": 1428,
                  "end": 1451
                },
                "accessibility": null,
                "static": false,
                "start": 1415,
                "end": 1451
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": true,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Out1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1469,
                  "end": 1473
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
                        "name": "Types",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1475,
                        "end": 1480
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Covariant",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1481,
                        "end": 1490
                      },
                      "start": 1475,
                      "end": 1490
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Out1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1491,
                            "end": 1495
                          },
                          "typeArguments": null,
                          "start": 1491,
                          "end": 1495
                        }
                      ],
                      "start": 1490,
                      "end": 1496
                    },
                    "start": 1475,
                    "end": 1496
                  },
                  "start": 1473,
                  "end": 1496
                },
                "accessibility": null,
                "static": false,
                "start": 1460,
                "end": 1496
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": true,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Target",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1514,
                  "end": 1520
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
                        "name": "Types",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1522,
                        "end": 1527
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Invariant",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1528,
                        "end": 1537
                      },
                      "start": 1522,
                      "end": 1537
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Target",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1538,
                            "end": 1544
                          },
                          "typeArguments": null,
                          "start": 1538,
                          "end": 1544
                        }
                      ],
                      "start": 1537,
                      "end": 1545
                    },
                    "start": 1522,
                    "end": 1545
                  },
                  "start": 1520,
                  "end": 1545
                },
                "accessibility": null,
                "static": false,
                "start": 1505,
                "end": 1545
              }
            ],
            "start": 1338,
            "end": 1551
          },
          "start": 1175,
          "end": 1551
        },
        "declare": false,
        "start": 1117,
        "end": 1551
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 1110,
      "end": 1551
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "SemiProduct",
          "optional": false,
          "typeAnnotation": null,
          "start": 1570,
          "end": 1581
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "F",
                "optional": false,
                "typeAnnotation": null,
                "start": 1582,
                "end": 1583
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TypeLambda",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1592,
                  "end": 1602
                },
                "typeArguments": null,
                "start": 1592,
                "end": 1602
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 1582,
              "end": 1602
            }
          ],
          "start": 1581,
          "end": 1603
        },
        "extends": [
          {
            "type": "TSInterfaceHeritage",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "Invariant",
              "optional": false,
              "typeAnnotation": null,
              "start": 1612,
              "end": 1621
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "F",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1622,
                    "end": 1623
                  },
                  "typeArguments": null,
                  "start": 1622,
                  "end": 1623
                }
              ],
              "start": 1621,
              "end": 1624
            },
            "start": 1612,
            "end": 1624
          }
        ],
        "body": {
          "type": "TSInterfaceBody",
          "body": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": true,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "product",
                "optional": false,
                "typeAnnotation": null,
                "start": 1640,
                "end": 1647
              },
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
                          "name": "R1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1650,
                          "end": 1652
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 1650,
                        "end": 1652
                      },
                      {
                        "type": "TSTypeParameter",
                        "name": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "O1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1654,
                          "end": 1656
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 1654,
                        "end": 1656
                      },
                      {
                        "type": "TSTypeParameter",
                        "name": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "E1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1658,
                          "end": 1660
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 1658,
                        "end": 1660
                      },
                      {
                        "type": "TSTypeParameter",
                        "name": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1662,
                          "end": 1663
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 1662,
                        "end": 1663
                      },
                      {
                        "type": "TSTypeParameter",
                        "name": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "R2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1665,
                          "end": 1667
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 1665,
                        "end": 1667
                      },
                      {
                        "type": "TSTypeParameter",
                        "name": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "O2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1669,
                          "end": 1671
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 1669,
                        "end": 1671
                      },
                      {
                        "type": "TSTypeParameter",
                        "name": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "E2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1673,
                          "end": 1675
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 1673,
                        "end": 1675
                      },
                      {
                        "type": "TSTypeParameter",
                        "name": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "B",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1677,
                          "end": 1678
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 1677,
                        "end": 1678
                      }
                    ],
                    "start": 1649,
                    "end": 1679
                  },
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "self",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Kind",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1695,
                            "end": 1699
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "F",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1700,
                                  "end": 1701
                                },
                                "typeArguments": null,
                                "start": 1700,
                                "end": 1701
                              },
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "R1",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1703,
                                  "end": 1705
                                },
                                "typeArguments": null,
                                "start": 1703,
                                "end": 1705
                              },
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "O1",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1707,
                                  "end": 1709
                                },
                                "typeArguments": null,
                                "start": 1707,
                                "end": 1709
                              },
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "E1",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1711,
                                  "end": 1713
                                },
                                "typeArguments": null,
                                "start": 1711,
                                "end": 1713
                              },
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "A",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1715,
                                  "end": 1716
                                },
                                "typeArguments": null,
                                "start": 1715,
                                "end": 1716
                              }
                            ],
                            "start": 1699,
                            "end": 1717
                          },
                          "start": 1695,
                          "end": 1717
                        },
                        "start": 1693,
                        "end": 1717
                      },
                      "start": 1689,
                      "end": 1717
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "that",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Kind",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1733,
                            "end": 1737
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "F",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1738,
                                  "end": 1739
                                },
                                "typeArguments": null,
                                "start": 1738,
                                "end": 1739
                              },
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "R2",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1741,
                                  "end": 1743
                                },
                                "typeArguments": null,
                                "start": 1741,
                                "end": 1743
                              },
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "O2",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1745,
                                  "end": 1747
                                },
                                "typeArguments": null,
                                "start": 1745,
                                "end": 1747
                              },
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "E2",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1749,
                                  "end": 1751
                                },
                                "typeArguments": null,
                                "start": 1749,
                                "end": 1751
                              },
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "B",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1753,
                                  "end": 1754
                                },
                                "typeArguments": null,
                                "start": 1753,
                                "end": 1754
                              }
                            ],
                            "start": 1737,
                            "end": 1755
                          },
                          "start": 1733,
                          "end": 1755
                        },
                        "start": 1731,
                        "end": 1755
                      },
                      "start": 1727,
                      "end": 1755
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Kind",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1765,
                        "end": 1769
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "F",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1770,
                              "end": 1771
                            },
                            "typeArguments": null,
                            "start": 1770,
                            "end": 1771
                          },
                          {
                            "type": "TSIntersectionType",
                            "types": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "R1",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1773,
                                  "end": 1775
                                },
                                "typeArguments": null,
                                "start": 1773,
                                "end": 1775
                              },
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "R2",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1778,
                                  "end": 1780
                                },
                                "typeArguments": null,
                                "start": 1778,
                                "end": 1780
                              }
                            ],
                            "start": 1773,
                            "end": 1780
                          },
                          {
                            "type": "TSUnionType",
                            "types": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "O1",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1782,
                                  "end": 1784
                                },
                                "typeArguments": null,
                                "start": 1782,
                                "end": 1784
                              },
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "O2",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1787,
                                  "end": 1789
                                },
                                "typeArguments": null,
                                "start": 1787,
                                "end": 1789
                              }
                            ],
                            "start": 1782,
                            "end": 1789
                          },
                          {
                            "type": "TSUnionType",
                            "types": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "E1",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1791,
                                  "end": 1793
                                },
                                "typeArguments": null,
                                "start": 1791,
                                "end": 1793
                              },
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "E2",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1796,
                                  "end": 1798
                                },
                                "typeArguments": null,
                                "start": 1796,
                                "end": 1798
                              }
                            ],
                            "start": 1791,
                            "end": 1798
                          },
                          {
                            "type": "TSTupleType",
                            "elementTypes": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "A",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1801,
                                  "end": 1802
                                },
                                "typeArguments": null,
                                "start": 1801,
                                "end": 1802
                              },
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "B",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1804,
                                  "end": 1805
                                },
                                "typeArguments": null,
                                "start": 1804,
                                "end": 1805
                              }
                            ],
                            "start": 1800,
                            "end": 1806
                          }
                        ],
                        "start": 1769,
                        "end": 1807
                      },
                      "start": 1765,
                      "end": 1807
                    },
                    "start": 1762,
                    "end": 1807
                  },
                  "start": 1649,
                  "end": 1807
                },
                "start": 1647,
                "end": 1807
              },
              "accessibility": null,
              "static": false,
              "start": 1631,
              "end": 1807
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": true,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "productMany",
                "optional": false,
                "typeAnnotation": null,
                "start": 1822,
                "end": 1833
              },
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
                          "name": "R",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1836,
                          "end": 1837
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 1836,
                        "end": 1837
                      },
                      {
                        "type": "TSTypeParameter",
                        "name": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "O",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1839,
                          "end": 1840
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 1839,
                        "end": 1840
                      },
                      {
                        "type": "TSTypeParameter",
                        "name": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "E",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1842,
                          "end": 1843
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 1842,
                        "end": 1843
                      },
                      {
                        "type": "TSTypeParameter",
                        "name": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1845,
                          "end": 1846
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 1845,
                        "end": 1846
                      }
                    ],
                    "start": 1835,
                    "end": 1847
                  },
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "self",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Kind",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1863,
                            "end": 1867
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "F",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1868,
                                  "end": 1869
                                },
                                "typeArguments": null,
                                "start": 1868,
                                "end": 1869
                              },
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "R",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1871,
                                  "end": 1872
                                },
                                "typeArguments": null,
                                "start": 1871,
                                "end": 1872
                              },
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "O",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1874,
                                  "end": 1875
                                },
                                "typeArguments": null,
                                "start": 1874,
                                "end": 1875
                              },
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "E",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1877,
                                  "end": 1878
                                },
                                "typeArguments": null,
                                "start": 1877,
                                "end": 1878
                              },
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "A",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1880,
                                  "end": 1881
                                },
                                "typeArguments": null,
                                "start": 1880,
                                "end": 1881
                              }
                            ],
                            "start": 1867,
                            "end": 1882
                          },
                          "start": 1863,
                          "end": 1882
                        },
                        "start": 1861,
                        "end": 1882
                      },
                      "start": 1857,
                      "end": 1882
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "collection",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Iterable",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1904,
                            "end": 1912
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Kind",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1913,
                                  "end": 1917
                                },
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "params": [
                                    {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "F",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1918,
                                        "end": 1919
                                      },
                                      "typeArguments": null,
                                      "start": 1918,
                                      "end": 1919
                                    },
                                    {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "R",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1921,
                                        "end": 1922
                                      },
                                      "typeArguments": null,
                                      "start": 1921,
                                      "end": 1922
                                    },
                                    {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "O",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1924,
                                        "end": 1925
                                      },
                                      "typeArguments": null,
                                      "start": 1924,
                                      "end": 1925
                                    },
                                    {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "E",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1927,
                                        "end": 1928
                                      },
                                      "typeArguments": null,
                                      "start": 1927,
                                      "end": 1928
                                    },
                                    {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "A",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1930,
                                        "end": 1931
                                      },
                                      "typeArguments": null,
                                      "start": 1930,
                                      "end": 1931
                                    }
                                  ],
                                  "start": 1917,
                                  "end": 1932
                                },
                                "start": 1913,
                                "end": 1932
                              }
                            ],
                            "start": 1912,
                            "end": 1933
                          },
                          "start": 1904,
                          "end": 1933
                        },
                        "start": 1902,
                        "end": 1933
                      },
                      "start": 1892,
                      "end": 1933
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Kind",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1943,
                        "end": 1947
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "F",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1948,
                              "end": 1949
                            },
                            "typeArguments": null,
                            "start": 1948,
                            "end": 1949
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "R",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1951,
                              "end": 1952
                            },
                            "typeArguments": null,
                            "start": 1951,
                            "end": 1952
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "O",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1954,
                              "end": 1955
                            },
                            "typeArguments": null,
                            "start": 1954,
                            "end": 1955
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "E",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1957,
                              "end": 1958
                            },
                            "typeArguments": null,
                            "start": 1957,
                            "end": 1958
                          },
                          {
                            "type": "TSTupleType",
                            "elementTypes": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "A",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1961,
                                  "end": 1962
                                },
                                "typeArguments": null,
                                "start": 1961,
                                "end": 1962
                              },
                              {
                                "type": "TSRestType",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Array",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1967,
                                    "end": 1972
                                  },
                                  "typeArguments": {
                                    "type": "TSTypeParameterInstantiation",
                                    "params": [
                                      {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "A",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 1973,
                                          "end": 1974
                                        },
                                        "typeArguments": null,
                                        "start": 1973,
                                        "end": 1974
                                      }
                                    ],
                                    "start": 1972,
                                    "end": 1975
                                  },
                                  "start": 1967,
                                  "end": 1975
                                },
                                "start": 1964,
                                "end": 1975
                              }
                            ],
                            "start": 1960,
                            "end": 1976
                          }
                        ],
                        "start": 1947,
                        "end": 1977
                      },
                      "start": 1943,
                      "end": 1977
                    },
                    "start": 1940,
                    "end": 1977
                  },
                  "start": 1835,
                  "end": 1977
                },
                "start": 1833,
                "end": 1977
              },
              "accessibility": null,
              "static": false,
              "start": 1813,
              "end": 1977
            }
          ],
          "start": 1625,
          "end": 1979
        },
        "declare": false,
        "start": 1560,
        "end": 1979
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 1553,
      "end": 1979
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "SemiApplicative",
          "optional": false,
          "typeAnnotation": null,
          "start": 1997,
          "end": 2012
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "F",
                "optional": false,
                "typeAnnotation": null,
                "start": 2013,
                "end": 2014
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TypeLambda",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2023,
                  "end": 2033
                },
                "typeArguments": null,
                "start": 2023,
                "end": 2033
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 2013,
              "end": 2033
            }
          ],
          "start": 2012,
          "end": 2034
        },
        "extends": [
          {
            "type": "TSInterfaceHeritage",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "SemiProduct",
              "optional": false,
              "typeAnnotation": null,
              "start": 2043,
              "end": 2054
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "F",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2055,
                    "end": 2056
                  },
                  "typeArguments": null,
                  "start": 2055,
                  "end": 2056
                }
              ],
              "start": 2054,
              "end": 2057
            },
            "start": 2043,
            "end": 2057
          },
          {
            "type": "TSInterfaceHeritage",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "Covariant",
              "optional": false,
              "typeAnnotation": null,
              "start": 2059,
              "end": 2068
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "F",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2069,
                    "end": 2070
                  },
                  "typeArguments": null,
                  "start": 2069,
                  "end": 2070
                }
              ],
              "start": 2068,
              "end": 2071
            },
            "start": 2059,
            "end": 2071
          }
        ],
        "body": {
          "type": "TSInterfaceBody",
          "body": [],
          "start": 2072,
          "end": 2075
        },
        "declare": false,
        "start": 1987,
        "end": 2075
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 1980,
      "end": 2075
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "SK",
              "optional": false,
              "typeAnnotation": null,
              "start": 2091,
              "end": 2093
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2097,
                      "end": 2098
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 2097,
                    "end": 2098
                  },
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2100,
                      "end": 2101
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 2100,
                    "end": 2101
                  }
                ],
                "start": 2096,
                "end": 2102
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "_",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2106,
                        "end": 2107
                      },
                      "typeArguments": null,
                      "start": 2106,
                      "end": 2107
                    },
                    "start": 2104,
                    "end": 2107
                  },
                  "start": 2103,
                  "end": 2107
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "B",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2112,
                        "end": 2113
                      },
                      "typeArguments": null,
                      "start": 2112,
                      "end": 2113
                    },
                    "start": 2110,
                    "end": 2113
                  },
                  "start": 2109,
                  "end": 2113
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2116,
                    "end": 2117
                  },
                  "typeArguments": null,
                  "start": 2116,
                  "end": 2117
                },
                "start": 2114,
                "end": 2117
              },
              "body": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 2121,
                "end": 2122
              },
              "id": null,
              "generator": false,
              "start": 2096,
              "end": 2122
            },
            "definite": false,
            "start": 2091,
            "end": 2122
          }
        ],
        "declare": false,
        "start": 2085,
        "end": 2123
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 2078,
      "end": 2123
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "dual",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
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
                              "name": "DataLast",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2159,
                              "end": 2167
                            },
                            "constraint": {
                              "type": "TSFunctionType",
                              "typeParameters": null,
                              "params": [
                                {
                                  "type": "RestElement",
                                  "decorators": [],
                                  "argument": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "args",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2180,
                                    "end": 2184
                                  },
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "Array",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 2186,
                                        "end": 2191
                                      },
                                      "typeArguments": {
                                        "type": "TSTypeParameterInstantiation",
                                        "params": [
                                          {
                                            "type": "TSAnyKeyword",
                                            "start": 2192,
                                            "end": 2195
                                          }
                                        ],
                                        "start": 2191,
                                        "end": 2196
                                      },
                                      "start": 2186,
                                      "end": 2196
                                    },
                                    "start": 2184,
                                    "end": 2196
                                  },
                                  "value": null,
                                  "start": 2177,
                                  "end": 2196
                                }
                              ],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSAnyKeyword",
                                  "start": 2201,
                                  "end": 2204
                                },
                                "start": 2198,
                                "end": 2204
                              },
                              "start": 2176,
                              "end": 2204
                            },
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 2159,
                            "end": 2204
                          },
                          {
                            "type": "TSTypeParameter",
                            "name": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "DataFirst",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2206,
                              "end": 2215
                            },
                            "constraint": {
                              "type": "TSFunctionType",
                              "typeParameters": null,
                              "params": [
                                {
                                  "type": "RestElement",
                                  "decorators": [],
                                  "argument": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "args",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2228,
                                    "end": 2232
                                  },
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "Array",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 2234,
                                        "end": 2239
                                      },
                                      "typeArguments": {
                                        "type": "TSTypeParameterInstantiation",
                                        "params": [
                                          {
                                            "type": "TSAnyKeyword",
                                            "start": 2240,
                                            "end": 2243
                                          }
                                        ],
                                        "start": 2239,
                                        "end": 2244
                                      },
                                      "start": 2234,
                                      "end": 2244
                                    },
                                    "start": 2232,
                                    "end": 2244
                                  },
                                  "value": null,
                                  "start": 2225,
                                  "end": 2244
                                }
                              ],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSAnyKeyword",
                                  "start": 2249,
                                  "end": 2252
                                },
                                "start": 2246,
                                "end": 2252
                              },
                              "start": 2224,
                              "end": 2252
                            },
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 2206,
                            "end": 2252
                          }
                        ],
                        "start": 2158,
                        "end": 2253
                      },
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arity",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSIndexedAccessType",
                              "objectType": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Parameters",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2270,
                                  "end": 2280
                                },
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "params": [
                                    {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "DataFirst",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 2281,
                                        "end": 2290
                                      },
                                      "typeArguments": null,
                                      "start": 2281,
                                      "end": 2290
                                    }
                                  ],
                                  "start": 2280,
                                  "end": 2291
                                },
                                "start": 2270,
                                "end": 2291
                              },
                              "indexType": {
                                "type": "TSLiteralType",
                                "literal": {
                                  "type": "Literal",
                                  "value": "length",
                                  "raw": "\"length\"",
                                  "start": 2292,
                                  "end": 2300
                                },
                                "start": 2292,
                                "end": 2300
                              },
                              "start": 2270,
                              "end": 2301
                            },
                            "start": 2268,
                            "end": 2301
                          },
                          "start": 2263,
                          "end": 2301
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "body",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "DataFirst",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2317,
                                "end": 2326
                              },
                              "typeArguments": null,
                              "start": 2317,
                              "end": 2326
                            },
                            "start": 2315,
                            "end": 2326
                          },
                          "start": 2311,
                          "end": 2326
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSIntersectionType",
                          "types": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "DataLast",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2334,
                                "end": 2342
                              },
                              "typeArguments": null,
                              "start": 2334,
                              "end": 2342
                            },
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "DataFirst",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2345,
                                "end": 2354
                              },
                              "typeArguments": null,
                              "start": 2345,
                              "end": 2354
                            }
                          ],
                          "start": 2334,
                          "end": 2354
                        },
                        "start": 2332,
                        "end": 2354
                      },
                      "start": 2158,
                      "end": 2354
                    },
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
                              "name": "DataLast",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2360,
                              "end": 2368
                            },
                            "constraint": {
                              "type": "TSFunctionType",
                              "typeParameters": null,
                              "params": [
                                {
                                  "type": "RestElement",
                                  "decorators": [],
                                  "argument": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "args",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2381,
                                    "end": 2385
                                  },
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "Array",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 2387,
                                        "end": 2392
                                      },
                                      "typeArguments": {
                                        "type": "TSTypeParameterInstantiation",
                                        "params": [
                                          {
                                            "type": "TSAnyKeyword",
                                            "start": 2393,
                                            "end": 2396
                                          }
                                        ],
                                        "start": 2392,
                                        "end": 2397
                                      },
                                      "start": 2387,
                                      "end": 2397
                                    },
                                    "start": 2385,
                                    "end": 2397
                                  },
                                  "value": null,
                                  "start": 2378,
                                  "end": 2397
                                }
                              ],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSAnyKeyword",
                                  "start": 2402,
                                  "end": 2405
                                },
                                "start": 2399,
                                "end": 2405
                              },
                              "start": 2377,
                              "end": 2405
                            },
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 2360,
                            "end": 2405
                          },
                          {
                            "type": "TSTypeParameter",
                            "name": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "DataFirst",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2407,
                              "end": 2416
                            },
                            "constraint": {
                              "type": "TSFunctionType",
                              "typeParameters": null,
                              "params": [
                                {
                                  "type": "RestElement",
                                  "decorators": [],
                                  "argument": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "args",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2429,
                                    "end": 2433
                                  },
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "Array",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 2435,
                                        "end": 2440
                                      },
                                      "typeArguments": {
                                        "type": "TSTypeParameterInstantiation",
                                        "params": [
                                          {
                                            "type": "TSAnyKeyword",
                                            "start": 2441,
                                            "end": 2444
                                          }
                                        ],
                                        "start": 2440,
                                        "end": 2445
                                      },
                                      "start": 2435,
                                      "end": 2445
                                    },
                                    "start": 2433,
                                    "end": 2445
                                  },
                                  "value": null,
                                  "start": 2426,
                                  "end": 2445
                                }
                              ],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSAnyKeyword",
                                  "start": 2450,
                                  "end": 2453
                                },
                                "start": 2447,
                                "end": 2453
                              },
                              "start": 2425,
                              "end": 2453
                            },
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 2407,
                            "end": 2453
                          }
                        ],
                        "start": 2359,
                        "end": 2454
                      },
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "isDataFirst",
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
                                  "name": "args",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "IArguments",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 2484,
                                        "end": 2494
                                      },
                                      "typeArguments": null,
                                      "start": 2484,
                                      "end": 2494
                                    },
                                    "start": 2482,
                                    "end": 2494
                                  },
                                  "start": 2478,
                                  "end": 2494
                                }
                              ],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSBooleanKeyword",
                                  "start": 2499,
                                  "end": 2506
                                },
                                "start": 2496,
                                "end": 2506
                              },
                              "start": 2477,
                              "end": 2506
                            },
                            "start": 2475,
                            "end": 2506
                          },
                          "start": 2464,
                          "end": 2506
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "body",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "DataFirst",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2522,
                                "end": 2531
                              },
                              "typeArguments": null,
                              "start": 2522,
                              "end": 2531
                            },
                            "start": 2520,
                            "end": 2531
                          },
                          "start": 2516,
                          "end": 2531
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSIntersectionType",
                          "types": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "DataLast",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2539,
                                "end": 2547
                              },
                              "typeArguments": null,
                              "start": 2539,
                              "end": 2547
                            },
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "DataFirst",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2550,
                                "end": 2559
                              },
                              "typeArguments": null,
                              "start": 2550,
                              "end": 2559
                            }
                          ],
                          "start": 2539,
                          "end": 2559
                        },
                        "start": 2537,
                        "end": 2559
                      },
                      "start": 2359,
                      "end": 2559
                    }
                  ],
                  "start": 2152,
                  "end": 2561
                },
                "start": 2150,
                "end": 2561
              },
              "start": 2146,
              "end": 2561
            },
            "init": null,
            "definite": false,
            "start": 2146,
            "end": 2561
          }
        ],
        "declare": true,
        "start": 2132,
        "end": 2562
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 2125,
      "end": 2562
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "zipWith",
              "optional": false,
              "typeAnnotation": null,
              "start": 2577,
              "end": 2584
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "F",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2588,
                      "end": 2589
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TypeLambda",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2598,
                        "end": 2608
                      },
                      "typeArguments": null,
                      "start": 2598,
                      "end": 2608
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 2588,
                    "end": 2608
                  }
                ],
                "start": 2587,
                "end": 2609
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "F",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "SemiApplicative",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2613,
                        "end": 2628
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "F",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2629,
                              "end": 2630
                            },
                            "typeArguments": null,
                            "start": 2629,
                            "end": 2630
                          }
                        ],
                        "start": 2628,
                        "end": 2631
                      },
                      "start": 2613,
                      "end": 2631
                    },
                    "start": 2611,
                    "end": 2631
                  },
                  "start": 2610,
                  "end": 2631
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
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
                              "name": "R2",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2641,
                              "end": 2643
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 2641,
                            "end": 2643
                          },
                          {
                            "type": "TSTypeParameter",
                            "name": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "O2",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2645,
                              "end": 2647
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 2645,
                            "end": 2647
                          },
                          {
                            "type": "TSTypeParameter",
                            "name": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "E2",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2649,
                              "end": 2651
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 2649,
                            "end": 2651
                          },
                          {
                            "type": "TSTypeParameter",
                            "name": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "B",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2653,
                              "end": 2654
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 2653,
                            "end": 2654
                          },
                          {
                            "type": "TSTypeParameter",
                            "name": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "A",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2656,
                              "end": 2657
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 2656,
                            "end": 2657
                          },
                          {
                            "type": "TSTypeParameter",
                            "name": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "C",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2659,
                              "end": 2660
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 2659,
                            "end": 2660
                          }
                        ],
                        "start": 2640,
                        "end": 2661
                      },
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "that",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Kind",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2677,
                                "end": 2681
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "F",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2682,
                                      "end": 2683
                                    },
                                    "typeArguments": null,
                                    "start": 2682,
                                    "end": 2683
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "R2",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2685,
                                      "end": 2687
                                    },
                                    "typeArguments": null,
                                    "start": 2685,
                                    "end": 2687
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "O2",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2689,
                                      "end": 2691
                                    },
                                    "typeArguments": null,
                                    "start": 2689,
                                    "end": 2691
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "E2",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2693,
                                      "end": 2695
                                    },
                                    "typeArguments": null,
                                    "start": 2693,
                                    "end": 2695
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "B",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2697,
                                      "end": 2698
                                    },
                                    "typeArguments": null,
                                    "start": 2697,
                                    "end": 2698
                                  }
                                ],
                                "start": 2681,
                                "end": 2699
                              },
                              "start": 2677,
                              "end": 2699
                            },
                            "start": 2675,
                            "end": 2699
                          },
                          "start": 2671,
                          "end": 2699
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "f",
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
                                  "name": "a",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "A",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 2716,
                                        "end": 2717
                                      },
                                      "typeArguments": null,
                                      "start": 2716,
                                      "end": 2717
                                    },
                                    "start": 2714,
                                    "end": 2717
                                  },
                                  "start": 2713,
                                  "end": 2717
                                },
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "b",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "B",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 2722,
                                        "end": 2723
                                      },
                                      "typeArguments": null,
                                      "start": 2722,
                                      "end": 2723
                                    },
                                    "start": 2720,
                                    "end": 2723
                                  },
                                  "start": 2719,
                                  "end": 2723
                                }
                              ],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "C",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2728,
                                    "end": 2729
                                  },
                                  "typeArguments": null,
                                  "start": 2728,
                                  "end": 2729
                                },
                                "start": 2725,
                                "end": 2729
                              },
                              "start": 2712,
                              "end": 2729
                            },
                            "start": 2710,
                            "end": 2729
                          },
                          "start": 2709,
                          "end": 2729
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
                                  "name": "R1",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2738,
                                  "end": 2740
                                },
                                "constraint": null,
                                "default": null,
                                "in": false,
                                "out": false,
                                "const": false,
                                "start": 2738,
                                "end": 2740
                              },
                              {
                                "type": "TSTypeParameter",
                                "name": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "O1",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2742,
                                  "end": 2744
                                },
                                "constraint": null,
                                "default": null,
                                "in": false,
                                "out": false,
                                "const": false,
                                "start": 2742,
                                "end": 2744
                              },
                              {
                                "type": "TSTypeParameter",
                                "name": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "E1",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2746,
                                  "end": 2748
                                },
                                "constraint": null,
                                "default": null,
                                "in": false,
                                "out": false,
                                "const": false,
                                "start": 2746,
                                "end": 2748
                              }
                            ],
                            "start": 2737,
                            "end": 2749
                          },
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "self",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Kind",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2756,
                                    "end": 2760
                                  },
                                  "typeArguments": {
                                    "type": "TSTypeParameterInstantiation",
                                    "params": [
                                      {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "F",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 2761,
                                          "end": 2762
                                        },
                                        "typeArguments": null,
                                        "start": 2761,
                                        "end": 2762
                                      },
                                      {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "R1",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 2764,
                                          "end": 2766
                                        },
                                        "typeArguments": null,
                                        "start": 2764,
                                        "end": 2766
                                      },
                                      {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "O1",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 2768,
                                          "end": 2770
                                        },
                                        "typeArguments": null,
                                        "start": 2768,
                                        "end": 2770
                                      },
                                      {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "E1",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 2772,
                                          "end": 2774
                                        },
                                        "typeArguments": null,
                                        "start": 2772,
                                        "end": 2774
                                      },
                                      {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "A",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 2776,
                                          "end": 2777
                                        },
                                        "typeArguments": null,
                                        "start": 2776,
                                        "end": 2777
                                      }
                                    ],
                                    "start": 2760,
                                    "end": 2778
                                  },
                                  "start": 2756,
                                  "end": 2778
                                },
                                "start": 2754,
                                "end": 2778
                              },
                              "start": 2750,
                              "end": 2778
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Kind",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2783,
                                "end": 2787
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "F",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2788,
                                      "end": 2789
                                    },
                                    "typeArguments": null,
                                    "start": 2788,
                                    "end": 2789
                                  },
                                  {
                                    "type": "TSIntersectionType",
                                    "types": [
                                      {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "R1",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 2791,
                                          "end": 2793
                                        },
                                        "typeArguments": null,
                                        "start": 2791,
                                        "end": 2793
                                      },
                                      {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "R2",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 2796,
                                          "end": 2798
                                        },
                                        "typeArguments": null,
                                        "start": 2796,
                                        "end": 2798
                                      }
                                    ],
                                    "start": 2791,
                                    "end": 2798
                                  },
                                  {
                                    "type": "TSUnionType",
                                    "types": [
                                      {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "O2",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 2800,
                                          "end": 2802
                                        },
                                        "typeArguments": null,
                                        "start": 2800,
                                        "end": 2802
                                      },
                                      {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "O1",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 2805,
                                          "end": 2807
                                        },
                                        "typeArguments": null,
                                        "start": 2805,
                                        "end": 2807
                                      }
                                    ],
                                    "start": 2800,
                                    "end": 2807
                                  },
                                  {
                                    "type": "TSUnionType",
                                    "types": [
                                      {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "E2",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 2809,
                                          "end": 2811
                                        },
                                        "typeArguments": null,
                                        "start": 2809,
                                        "end": 2811
                                      },
                                      {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "E1",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 2814,
                                          "end": 2816
                                        },
                                        "typeArguments": null,
                                        "start": 2814,
                                        "end": 2816
                                      }
                                    ],
                                    "start": 2809,
                                    "end": 2816
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "C",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2818,
                                      "end": 2819
                                    },
                                    "typeArguments": null,
                                    "start": 2818,
                                    "end": 2819
                                  }
                                ],
                                "start": 2787,
                                "end": 2820
                              },
                              "start": 2783,
                              "end": 2820
                            },
                            "start": 2780,
                            "end": 2820
                          },
                          "start": 2737,
                          "end": 2820
                        },
                        "start": 2735,
                        "end": 2820
                      },
                      "start": 2640,
                      "end": 2820
                    },
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
                              "name": "R1",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2826,
                              "end": 2828
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 2826,
                            "end": 2828
                          },
                          {
                            "type": "TSTypeParameter",
                            "name": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "O1",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2830,
                              "end": 2832
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 2830,
                            "end": 2832
                          },
                          {
                            "type": "TSTypeParameter",
                            "name": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "E1",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2834,
                              "end": 2836
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 2834,
                            "end": 2836
                          },
                          {
                            "type": "TSTypeParameter",
                            "name": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "A",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2838,
                              "end": 2839
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 2838,
                            "end": 2839
                          },
                          {
                            "type": "TSTypeParameter",
                            "name": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "R2",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2841,
                              "end": 2843
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 2841,
                            "end": 2843
                          },
                          {
                            "type": "TSTypeParameter",
                            "name": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "O2",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2845,
                              "end": 2847
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 2845,
                            "end": 2847
                          },
                          {
                            "type": "TSTypeParameter",
                            "name": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "E2",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2849,
                              "end": 2851
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 2849,
                            "end": 2851
                          },
                          {
                            "type": "TSTypeParameter",
                            "name": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "B",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2853,
                              "end": 2854
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 2853,
                            "end": 2854
                          },
                          {
                            "type": "TSTypeParameter",
                            "name": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "C",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2856,
                              "end": 2857
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 2856,
                            "end": 2857
                          }
                        ],
                        "start": 2825,
                        "end": 2858
                      },
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "self",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Kind",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2874,
                                "end": 2878
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "F",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2879,
                                      "end": 2880
                                    },
                                    "typeArguments": null,
                                    "start": 2879,
                                    "end": 2880
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "R1",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2882,
                                      "end": 2884
                                    },
                                    "typeArguments": null,
                                    "start": 2882,
                                    "end": 2884
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "O1",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2886,
                                      "end": 2888
                                    },
                                    "typeArguments": null,
                                    "start": 2886,
                                    "end": 2888
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "E1",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2890,
                                      "end": 2892
                                    },
                                    "typeArguments": null,
                                    "start": 2890,
                                    "end": 2892
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "A",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2894,
                                      "end": 2895
                                    },
                                    "typeArguments": null,
                                    "start": 2894,
                                    "end": 2895
                                  }
                                ],
                                "start": 2878,
                                "end": 2896
                              },
                              "start": 2874,
                              "end": 2896
                            },
                            "start": 2872,
                            "end": 2896
                          },
                          "start": 2868,
                          "end": 2896
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "that",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Kind",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2912,
                                "end": 2916
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "F",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2917,
                                      "end": 2918
                                    },
                                    "typeArguments": null,
                                    "start": 2917,
                                    "end": 2918
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "R2",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2920,
                                      "end": 2922
                                    },
                                    "typeArguments": null,
                                    "start": 2920,
                                    "end": 2922
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "O2",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2924,
                                      "end": 2926
                                    },
                                    "typeArguments": null,
                                    "start": 2924,
                                    "end": 2926
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "E2",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2928,
                                      "end": 2930
                                    },
                                    "typeArguments": null,
                                    "start": 2928,
                                    "end": 2930
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "B",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2932,
                                      "end": 2933
                                    },
                                    "typeArguments": null,
                                    "start": 2932,
                                    "end": 2933
                                  }
                                ],
                                "start": 2916,
                                "end": 2934
                              },
                              "start": 2912,
                              "end": 2934
                            },
                            "start": 2910,
                            "end": 2934
                          },
                          "start": 2906,
                          "end": 2934
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "f",
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
                                  "name": "a",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "A",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 2951,
                                        "end": 2952
                                      },
                                      "typeArguments": null,
                                      "start": 2951,
                                      "end": 2952
                                    },
                                    "start": 2949,
                                    "end": 2952
                                  },
                                  "start": 2948,
                                  "end": 2952
                                },
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "b",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "B",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 2957,
                                        "end": 2958
                                      },
                                      "typeArguments": null,
                                      "start": 2957,
                                      "end": 2958
                                    },
                                    "start": 2955,
                                    "end": 2958
                                  },
                                  "start": 2954,
                                  "end": 2958
                                }
                              ],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "C",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2963,
                                    "end": 2964
                                  },
                                  "typeArguments": null,
                                  "start": 2963,
                                  "end": 2964
                                },
                                "start": 2960,
                                "end": 2964
                              },
                              "start": 2947,
                              "end": 2964
                            },
                            "start": 2945,
                            "end": 2964
                          },
                          "start": 2944,
                          "end": 2964
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Kind",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2972,
                            "end": 2976
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "F",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2977,
                                  "end": 2978
                                },
                                "typeArguments": null,
                                "start": 2977,
                                "end": 2978
                              },
                              {
                                "type": "TSIntersectionType",
                                "types": [
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "R1",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2980,
                                      "end": 2982
                                    },
                                    "typeArguments": null,
                                    "start": 2980,
                                    "end": 2982
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "R2",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2985,
                                      "end": 2987
                                    },
                                    "typeArguments": null,
                                    "start": 2985,
                                    "end": 2987
                                  }
                                ],
                                "start": 2980,
                                "end": 2987
                              },
                              {
                                "type": "TSUnionType",
                                "types": [
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "O1",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2989,
                                      "end": 2991
                                    },
                                    "typeArguments": null,
                                    "start": 2989,
                                    "end": 2991
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "O2",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2994,
                                      "end": 2996
                                    },
                                    "typeArguments": null,
                                    "start": 2994,
                                    "end": 2996
                                  }
                                ],
                                "start": 2989,
                                "end": 2996
                              },
                              {
                                "type": "TSUnionType",
                                "types": [
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "E1",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2998,
                                      "end": 3000
                                    },
                                    "typeArguments": null,
                                    "start": 2998,
                                    "end": 3000
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "E2",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 3003,
                                      "end": 3005
                                    },
                                    "typeArguments": null,
                                    "start": 3003,
                                    "end": 3005
                                  }
                                ],
                                "start": 2998,
                                "end": 3005
                              },
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "C",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3007,
                                  "end": 3008
                                },
                                "typeArguments": null,
                                "start": 3007,
                                "end": 3008
                              }
                            ],
                            "start": 2976,
                            "end": 3009
                          },
                          "start": 2972,
                          "end": 3009
                        },
                        "start": 2970,
                        "end": 3009
                      },
                      "start": 2825,
                      "end": 3009
                    }
                  ],
                  "start": 2634,
                  "end": 3011
                },
                "start": 2632,
                "end": 3011
              },
              "body": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "dual",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3019,
                  "end": 3023
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "value": 3,
                    "raw": "3",
                    "start": 3033,
                    "end": 3034
                  },
                  {
                    "type": "ArrowFunctionExpression",
                    "expression": true,
                    "async": false,
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "name": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "R1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3045,
                            "end": 3047
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 3045,
                          "end": 3047
                        },
                        {
                          "type": "TSTypeParameter",
                          "name": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "O1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3049,
                            "end": 3051
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 3049,
                          "end": 3051
                        },
                        {
                          "type": "TSTypeParameter",
                          "name": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "E1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3053,
                            "end": 3055
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 3053,
                          "end": 3055
                        },
                        {
                          "type": "TSTypeParameter",
                          "name": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "A",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3057,
                            "end": 3058
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 3057,
                          "end": 3058
                        },
                        {
                          "type": "TSTypeParameter",
                          "name": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "R2",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3060,
                            "end": 3062
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 3060,
                          "end": 3062
                        },
                        {
                          "type": "TSTypeParameter",
                          "name": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "O2",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3064,
                            "end": 3066
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 3064,
                          "end": 3066
                        },
                        {
                          "type": "TSTypeParameter",
                          "name": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "E2",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3068,
                            "end": 3070
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 3068,
                          "end": 3070
                        },
                        {
                          "type": "TSTypeParameter",
                          "name": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "B",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3072,
                            "end": 3073
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 3072,
                          "end": 3073
                        },
                        {
                          "type": "TSTypeParameter",
                          "name": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "C",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3075,
                            "end": 3076
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 3075,
                          "end": 3076
                        }
                      ],
                      "start": 3044,
                      "end": 3077
                    },
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "self",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Kind",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3097,
                              "end": 3101
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "F",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3102,
                                    "end": 3103
                                  },
                                  "typeArguments": null,
                                  "start": 3102,
                                  "end": 3103
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "R1",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3105,
                                    "end": 3107
                                  },
                                  "typeArguments": null,
                                  "start": 3105,
                                  "end": 3107
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "O1",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3109,
                                    "end": 3111
                                  },
                                  "typeArguments": null,
                                  "start": 3109,
                                  "end": 3111
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "E1",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3113,
                                    "end": 3115
                                  },
                                  "typeArguments": null,
                                  "start": 3113,
                                  "end": 3115
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "A",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3117,
                                    "end": 3118
                                  },
                                  "typeArguments": null,
                                  "start": 3117,
                                  "end": 3118
                                }
                              ],
                              "start": 3101,
                              "end": 3119
                            },
                            "start": 3097,
                            "end": 3119
                          },
                          "start": 3095,
                          "end": 3119
                        },
                        "start": 3091,
                        "end": 3119
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "that",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Kind",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3139,
                              "end": 3143
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "F",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3144,
                                    "end": 3145
                                  },
                                  "typeArguments": null,
                                  "start": 3144,
                                  "end": 3145
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "R2",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3147,
                                    "end": 3149
                                  },
                                  "typeArguments": null,
                                  "start": 3147,
                                  "end": 3149
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "O2",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3151,
                                    "end": 3153
                                  },
                                  "typeArguments": null,
                                  "start": 3151,
                                  "end": 3153
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "E2",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3155,
                                    "end": 3157
                                  },
                                  "typeArguments": null,
                                  "start": 3155,
                                  "end": 3157
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "B",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3159,
                                    "end": 3160
                                  },
                                  "typeArguments": null,
                                  "start": 3159,
                                  "end": 3160
                                }
                              ],
                              "start": 3143,
                              "end": 3161
                            },
                            "start": 3139,
                            "end": 3161
                          },
                          "start": 3137,
                          "end": 3161
                        },
                        "start": 3133,
                        "end": 3161
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "f",
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
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "A",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 3182,
                                      "end": 3183
                                    },
                                    "typeArguments": null,
                                    "start": 3182,
                                    "end": 3183
                                  },
                                  "start": 3180,
                                  "end": 3183
                                },
                                "start": 3179,
                                "end": 3183
                              },
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "b",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "B",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 3188,
                                      "end": 3189
                                    },
                                    "typeArguments": null,
                                    "start": 3188,
                                    "end": 3189
                                  },
                                  "start": 3186,
                                  "end": 3189
                                },
                                "start": 3185,
                                "end": 3189
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "C",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3194,
                                  "end": 3195
                                },
                                "typeArguments": null,
                                "start": 3194,
                                "end": 3195
                              },
                              "start": 3191,
                              "end": 3195
                            },
                            "start": 3178,
                            "end": 3195
                          },
                          "start": 3176,
                          "end": 3195
                        },
                        "start": 3175,
                        "end": 3195
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Kind",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3207,
                          "end": 3211
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "F",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3212,
                                "end": 3213
                              },
                              "typeArguments": null,
                              "start": 3212,
                              "end": 3213
                            },
                            {
                              "type": "TSIntersectionType",
                              "types": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "R1",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3215,
                                    "end": 3217
                                  },
                                  "typeArguments": null,
                                  "start": 3215,
                                  "end": 3217
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "R2",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3220,
                                    "end": 3222
                                  },
                                  "typeArguments": null,
                                  "start": 3220,
                                  "end": 3222
                                }
                              ],
                              "start": 3215,
                              "end": 3222
                            },
                            {
                              "type": "TSUnionType",
                              "types": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "O1",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3224,
                                    "end": 3226
                                  },
                                  "typeArguments": null,
                                  "start": 3224,
                                  "end": 3226
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "O2",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3229,
                                    "end": 3231
                                  },
                                  "typeArguments": null,
                                  "start": 3229,
                                  "end": 3231
                                }
                              ],
                              "start": 3224,
                              "end": 3231
                            },
                            {
                              "type": "TSUnionType",
                              "types": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "E1",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3233,
                                    "end": 3235
                                  },
                                  "typeArguments": null,
                                  "start": 3233,
                                  "end": 3235
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "E2",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3238,
                                    "end": 3240
                                  },
                                  "typeArguments": null,
                                  "start": 3238,
                                  "end": 3240
                                }
                              ],
                              "start": 3233,
                              "end": 3240
                            },
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "C",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3242,
                                "end": 3243
                              },
                              "typeArguments": null,
                              "start": 3242,
                              "end": 3243
                            }
                          ],
                          "start": 3211,
                          "end": 3244
                        },
                        "start": 3207,
                        "end": 3244
                      },
                      "start": 3205,
                      "end": 3244
                    },
                    "body": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "F",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3248,
                          "end": 3249
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "map",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3250,
                          "end": 3253
                        },
                        "optional": false,
                        "computed": false,
                        "start": 3248,
                        "end": 3253
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "F",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3254,
                              "end": 3255
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "product",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3256,
                              "end": 3263
                            },
                            "optional": false,
                            "computed": false,
                            "start": 3254,
                            "end": 3263
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "self",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3264,
                              "end": 3268
                            },
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "that",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3270,
                              "end": 3274
                            }
                          ],
                          "optional": false,
                          "start": 3254,
                          "end": 3275
                        },
                        {
                          "type": "ArrowFunctionExpression",
                          "expression": true,
                          "async": false,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "ArrayPattern",
                              "decorators": [],
                              "elements": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "a",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3279,
                                  "end": 3280
                                },
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "b",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3282,
                                  "end": 3283
                                }
                              ],
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3278,
                              "end": 3284
                            }
                          ],
                          "returnType": null,
                          "body": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "f",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3289,
                              "end": 3290
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3291,
                                "end": 3292
                              },
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "b",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3294,
                                "end": 3295
                              }
                            ],
                            "optional": false,
                            "start": 3289,
                            "end": 3296
                          },
                          "id": null,
                          "generator": false,
                          "start": 3277,
                          "end": 3296
                        }
                      ],
                      "optional": false,
                      "start": 3248,
                      "end": 3297
                    },
                    "id": null,
                    "generator": false,
                    "start": 3044,
                    "end": 3297
                  }
                ],
                "optional": false,
                "start": 3019,
                "end": 3303
              },
              "id": null,
              "generator": false,
              "start": 2587,
              "end": 3303
            },
            "definite": false,
            "start": 2577,
            "end": 3303
          }
        ],
        "declare": false,
        "start": 2571,
        "end": 3304
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 2564,
      "end": 3304
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "zipRight",
              "optional": false,
              "typeAnnotation": null,
              "start": 3320,
              "end": 3328
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "F",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3332,
                      "end": 3333
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TypeLambda",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3342,
                        "end": 3352
                      },
                      "typeArguments": null,
                      "start": 3342,
                      "end": 3352
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 3332,
                    "end": 3352
                  }
                ],
                "start": 3331,
                "end": 3353
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "F",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "SemiApplicative",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3357,
                        "end": 3372
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "F",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3373,
                              "end": 3374
                            },
                            "typeArguments": null,
                            "start": 3373,
                            "end": 3374
                          }
                        ],
                        "start": 3372,
                        "end": 3375
                      },
                      "start": 3357,
                      "end": 3375
                    },
                    "start": 3355,
                    "end": 3375
                  },
                  "start": 3354,
                  "end": 3375
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
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
                              "name": "R2",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3385,
                              "end": 3387
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 3385,
                            "end": 3387
                          },
                          {
                            "type": "TSTypeParameter",
                            "name": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "O2",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3389,
                              "end": 3391
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 3389,
                            "end": 3391
                          },
                          {
                            "type": "TSTypeParameter",
                            "name": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "E2",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3393,
                              "end": 3395
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 3393,
                            "end": 3395
                          },
                          {
                            "type": "TSTypeParameter",
                            "name": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "B",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3397,
                              "end": 3398
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 3397,
                            "end": 3398
                          }
                        ],
                        "start": 3384,
                        "end": 3399
                      },
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "that",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Kind",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3415,
                                "end": 3419
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "F",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 3420,
                                      "end": 3421
                                    },
                                    "typeArguments": null,
                                    "start": 3420,
                                    "end": 3421
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "R2",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 3423,
                                      "end": 3425
                                    },
                                    "typeArguments": null,
                                    "start": 3423,
                                    "end": 3425
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "O2",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 3427,
                                      "end": 3429
                                    },
                                    "typeArguments": null,
                                    "start": 3427,
                                    "end": 3429
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "E2",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 3431,
                                      "end": 3433
                                    },
                                    "typeArguments": null,
                                    "start": 3431,
                                    "end": 3433
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "B",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 3435,
                                      "end": 3436
                                    },
                                    "typeArguments": null,
                                    "start": 3435,
                                    "end": 3436
                                  }
                                ],
                                "start": 3419,
                                "end": 3437
                              },
                              "start": 3415,
                              "end": 3437
                            },
                            "start": 3413,
                            "end": 3437
                          },
                          "start": 3409,
                          "end": 3437
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
                                  "name": "R1",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3446,
                                  "end": 3448
                                },
                                "constraint": null,
                                "default": null,
                                "in": false,
                                "out": false,
                                "const": false,
                                "start": 3446,
                                "end": 3448
                              },
                              {
                                "type": "TSTypeParameter",
                                "name": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "O1",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3450,
                                  "end": 3452
                                },
                                "constraint": null,
                                "default": null,
                                "in": false,
                                "out": false,
                                "const": false,
                                "start": 3450,
                                "end": 3452
                              },
                              {
                                "type": "TSTypeParameter",
                                "name": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "E1",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3454,
                                  "end": 3456
                                },
                                "constraint": null,
                                "default": null,
                                "in": false,
                                "out": false,
                                "const": false,
                                "start": 3454,
                                "end": 3456
                              },
                              {
                                "type": "TSTypeParameter",
                                "name": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "_",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3458,
                                  "end": 3459
                                },
                                "constraint": null,
                                "default": null,
                                "in": false,
                                "out": false,
                                "const": false,
                                "start": 3458,
                                "end": 3459
                              }
                            ],
                            "start": 3445,
                            "end": 3460
                          },
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "self",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Kind",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3467,
                                    "end": 3471
                                  },
                                  "typeArguments": {
                                    "type": "TSTypeParameterInstantiation",
                                    "params": [
                                      {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "F",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 3472,
                                          "end": 3473
                                        },
                                        "typeArguments": null,
                                        "start": 3472,
                                        "end": 3473
                                      },
                                      {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "R1",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 3475,
                                          "end": 3477
                                        },
                                        "typeArguments": null,
                                        "start": 3475,
                                        "end": 3477
                                      },
                                      {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "O1",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 3479,
                                          "end": 3481
                                        },
                                        "typeArguments": null,
                                        "start": 3479,
                                        "end": 3481
                                      },
                                      {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "E1",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 3483,
                                          "end": 3485
                                        },
                                        "typeArguments": null,
                                        "start": 3483,
                                        "end": 3485
                                      },
                                      {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "_",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 3487,
                                          "end": 3488
                                        },
                                        "typeArguments": null,
                                        "start": 3487,
                                        "end": 3488
                                      }
                                    ],
                                    "start": 3471,
                                    "end": 3489
                                  },
                                  "start": 3467,
                                  "end": 3489
                                },
                                "start": 3465,
                                "end": 3489
                              },
                              "start": 3461,
                              "end": 3489
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Kind",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3494,
                                "end": 3498
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "F",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 3499,
                                      "end": 3500
                                    },
                                    "typeArguments": null,
                                    "start": 3499,
                                    "end": 3500
                                  },
                                  {
                                    "type": "TSIntersectionType",
                                    "types": [
                                      {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "R1",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 3502,
                                          "end": 3504
                                        },
                                        "typeArguments": null,
                                        "start": 3502,
                                        "end": 3504
                                      },
                                      {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "R2",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 3507,
                                          "end": 3509
                                        },
                                        "typeArguments": null,
                                        "start": 3507,
                                        "end": 3509
                                      }
                                    ],
                                    "start": 3502,
                                    "end": 3509
                                  },
                                  {
                                    "type": "TSUnionType",
                                    "types": [
                                      {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "O2",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 3511,
                                          "end": 3513
                                        },
                                        "typeArguments": null,
                                        "start": 3511,
                                        "end": 3513
                                      },
                                      {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "O1",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 3516,
                                          "end": 3518
                                        },
                                        "typeArguments": null,
                                        "start": 3516,
                                        "end": 3518
                                      }
                                    ],
                                    "start": 3511,
                                    "end": 3518
                                  },
                                  {
                                    "type": "TSUnionType",
                                    "types": [
                                      {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "E2",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 3520,
                                          "end": 3522
                                        },
                                        "typeArguments": null,
                                        "start": 3520,
                                        "end": 3522
                                      },
                                      {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "E1",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 3525,
                                          "end": 3527
                                        },
                                        "typeArguments": null,
                                        "start": 3525,
                                        "end": 3527
                                      }
                                    ],
                                    "start": 3520,
                                    "end": 3527
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "B",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 3529,
                                      "end": 3530
                                    },
                                    "typeArguments": null,
                                    "start": 3529,
                                    "end": 3530
                                  }
                                ],
                                "start": 3498,
                                "end": 3531
                              },
                              "start": 3494,
                              "end": 3531
                            },
                            "start": 3491,
                            "end": 3531
                          },
                          "start": 3445,
                          "end": 3531
                        },
                        "start": 3443,
                        "end": 3531
                      },
                      "start": 3384,
                      "end": 3531
                    },
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
                              "name": "R1",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3537,
                              "end": 3539
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 3537,
                            "end": 3539
                          },
                          {
                            "type": "TSTypeParameter",
                            "name": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "O1",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3541,
                              "end": 3543
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 3541,
                            "end": 3543
                          },
                          {
                            "type": "TSTypeParameter",
                            "name": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "E1",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3545,
                              "end": 3547
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 3545,
                            "end": 3547
                          },
                          {
                            "type": "TSTypeParameter",
                            "name": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "_",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3549,
                              "end": 3550
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 3549,
                            "end": 3550
                          },
                          {
                            "type": "TSTypeParameter",
                            "name": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "R2",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3552,
                              "end": 3554
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 3552,
                            "end": 3554
                          },
                          {
                            "type": "TSTypeParameter",
                            "name": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "O2",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3556,
                              "end": 3558
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 3556,
                            "end": 3558
                          },
                          {
                            "type": "TSTypeParameter",
                            "name": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "E2",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3560,
                              "end": 3562
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 3560,
                            "end": 3562
                          },
                          {
                            "type": "TSTypeParameter",
                            "name": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "B",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3564,
                              "end": 3565
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 3564,
                            "end": 3565
                          }
                        ],
                        "start": 3536,
                        "end": 3566
                      },
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "self",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Kind",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3582,
                                "end": 3586
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "F",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 3587,
                                      "end": 3588
                                    },
                                    "typeArguments": null,
                                    "start": 3587,
                                    "end": 3588
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "R1",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 3590,
                                      "end": 3592
                                    },
                                    "typeArguments": null,
                                    "start": 3590,
                                    "end": 3592
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "O1",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 3594,
                                      "end": 3596
                                    },
                                    "typeArguments": null,
                                    "start": 3594,
                                    "end": 3596
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "E1",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 3598,
                                      "end": 3600
                                    },
                                    "typeArguments": null,
                                    "start": 3598,
                                    "end": 3600
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "_",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 3602,
                                      "end": 3603
                                    },
                                    "typeArguments": null,
                                    "start": 3602,
                                    "end": 3603
                                  }
                                ],
                                "start": 3586,
                                "end": 3604
                              },
                              "start": 3582,
                              "end": 3604
                            },
                            "start": 3580,
                            "end": 3604
                          },
                          "start": 3576,
                          "end": 3604
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "that",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Kind",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3620,
                                "end": 3624
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "F",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 3625,
                                      "end": 3626
                                    },
                                    "typeArguments": null,
                                    "start": 3625,
                                    "end": 3626
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "R2",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 3628,
                                      "end": 3630
                                    },
                                    "typeArguments": null,
                                    "start": 3628,
                                    "end": 3630
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "O2",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 3632,
                                      "end": 3634
                                    },
                                    "typeArguments": null,
                                    "start": 3632,
                                    "end": 3634
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "E2",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 3636,
                                      "end": 3638
                                    },
                                    "typeArguments": null,
                                    "start": 3636,
                                    "end": 3638
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "B",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 3640,
                                      "end": 3641
                                    },
                                    "typeArguments": null,
                                    "start": 3640,
                                    "end": 3641
                                  }
                                ],
                                "start": 3624,
                                "end": 3642
                              },
                              "start": 3620,
                              "end": 3642
                            },
                            "start": 3618,
                            "end": 3642
                          },
                          "start": 3614,
                          "end": 3642
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Kind",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3650,
                            "end": 3654
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "F",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3655,
                                  "end": 3656
                                },
                                "typeArguments": null,
                                "start": 3655,
                                "end": 3656
                              },
                              {
                                "type": "TSIntersectionType",
                                "types": [
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "R1",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 3658,
                                      "end": 3660
                                    },
                                    "typeArguments": null,
                                    "start": 3658,
                                    "end": 3660
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "R2",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 3663,
                                      "end": 3665
                                    },
                                    "typeArguments": null,
                                    "start": 3663,
                                    "end": 3665
                                  }
                                ],
                                "start": 3658,
                                "end": 3665
                              },
                              {
                                "type": "TSUnionType",
                                "types": [
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "O1",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 3667,
                                      "end": 3669
                                    },
                                    "typeArguments": null,
                                    "start": 3667,
                                    "end": 3669
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "O2",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 3672,
                                      "end": 3674
                                    },
                                    "typeArguments": null,
                                    "start": 3672,
                                    "end": 3674
                                  }
                                ],
                                "start": 3667,
                                "end": 3674
                              },
                              {
                                "type": "TSUnionType",
                                "types": [
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "E1",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 3676,
                                      "end": 3678
                                    },
                                    "typeArguments": null,
                                    "start": 3676,
                                    "end": 3678
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "E2",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 3681,
                                      "end": 3683
                                    },
                                    "typeArguments": null,
                                    "start": 3681,
                                    "end": 3683
                                  }
                                ],
                                "start": 3676,
                                "end": 3683
                              },
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "B",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3685,
                                  "end": 3686
                                },
                                "typeArguments": null,
                                "start": 3685,
                                "end": 3686
                              }
                            ],
                            "start": 3654,
                            "end": 3687
                          },
                          "start": 3650,
                          "end": 3687
                        },
                        "start": 3648,
                        "end": 3687
                      },
                      "start": 3536,
                      "end": 3687
                    }
                  ],
                  "start": 3378,
                  "end": 3689
                },
                "start": 3376,
                "end": 3689
              },
              "body": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "dual",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3697,
                  "end": 3701
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 3702,
                    "end": 3703
                  },
                  {
                    "type": "ArrowFunctionExpression",
                    "expression": true,
                    "async": false,
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "name": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "R1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3706,
                            "end": 3708
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 3706,
                          "end": 3708
                        },
                        {
                          "type": "TSTypeParameter",
                          "name": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "O1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3710,
                            "end": 3712
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 3710,
                          "end": 3712
                        },
                        {
                          "type": "TSTypeParameter",
                          "name": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "E1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3714,
                            "end": 3716
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 3714,
                          "end": 3716
                        },
                        {
                          "type": "TSTypeParameter",
                          "name": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "_",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3718,
                            "end": 3719
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 3718,
                          "end": 3719
                        },
                        {
                          "type": "TSTypeParameter",
                          "name": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "R2",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3721,
                            "end": 3723
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 3721,
                          "end": 3723
                        },
                        {
                          "type": "TSTypeParameter",
                          "name": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "O2",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3725,
                            "end": 3727
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 3725,
                          "end": 3727
                        },
                        {
                          "type": "TSTypeParameter",
                          "name": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "E2",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3729,
                            "end": 3731
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 3729,
                          "end": 3731
                        },
                        {
                          "type": "TSTypeParameter",
                          "name": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "B",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3733,
                            "end": 3734
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 3733,
                          "end": 3734
                        }
                      ],
                      "start": 3705,
                      "end": 3735
                    },
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "self",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Kind",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3751,
                              "end": 3755
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "F",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3756,
                                    "end": 3757
                                  },
                                  "typeArguments": null,
                                  "start": 3756,
                                  "end": 3757
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "R1",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3759,
                                    "end": 3761
                                  },
                                  "typeArguments": null,
                                  "start": 3759,
                                  "end": 3761
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "O1",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3763,
                                    "end": 3765
                                  },
                                  "typeArguments": null,
                                  "start": 3763,
                                  "end": 3765
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "E1",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3767,
                                    "end": 3769
                                  },
                                  "typeArguments": null,
                                  "start": 3767,
                                  "end": 3769
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "_",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3771,
                                    "end": 3772
                                  },
                                  "typeArguments": null,
                                  "start": 3771,
                                  "end": 3772
                                }
                              ],
                              "start": 3755,
                              "end": 3773
                            },
                            "start": 3751,
                            "end": 3773
                          },
                          "start": 3749,
                          "end": 3773
                        },
                        "start": 3745,
                        "end": 3773
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "that",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Kind",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3789,
                              "end": 3793
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "F",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3794,
                                    "end": 3795
                                  },
                                  "typeArguments": null,
                                  "start": 3794,
                                  "end": 3795
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "R2",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3797,
                                    "end": 3799
                                  },
                                  "typeArguments": null,
                                  "start": 3797,
                                  "end": 3799
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "O2",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3801,
                                    "end": 3803
                                  },
                                  "typeArguments": null,
                                  "start": 3801,
                                  "end": 3803
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "E2",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3805,
                                    "end": 3807
                                  },
                                  "typeArguments": null,
                                  "start": 3805,
                                  "end": 3807
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "B",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3809,
                                    "end": 3810
                                  },
                                  "typeArguments": null,
                                  "start": 3809,
                                  "end": 3810
                                }
                              ],
                              "start": 3793,
                              "end": 3811
                            },
                            "start": 3789,
                            "end": 3811
                          },
                          "start": 3787,
                          "end": 3811
                        },
                        "start": 3783,
                        "end": 3811
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Kind",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3819,
                          "end": 3823
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "F",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3824,
                                "end": 3825
                              },
                              "typeArguments": null,
                              "start": 3824,
                              "end": 3825
                            },
                            {
                              "type": "TSIntersectionType",
                              "types": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "R1",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3827,
                                    "end": 3829
                                  },
                                  "typeArguments": null,
                                  "start": 3827,
                                  "end": 3829
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "R2",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3832,
                                    "end": 3834
                                  },
                                  "typeArguments": null,
                                  "start": 3832,
                                  "end": 3834
                                }
                              ],
                              "start": 3827,
                              "end": 3834
                            },
                            {
                              "type": "TSUnionType",
                              "types": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "O1",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3836,
                                    "end": 3838
                                  },
                                  "typeArguments": null,
                                  "start": 3836,
                                  "end": 3838
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "O2",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3841,
                                    "end": 3843
                                  },
                                  "typeArguments": null,
                                  "start": 3841,
                                  "end": 3843
                                }
                              ],
                              "start": 3836,
                              "end": 3843
                            },
                            {
                              "type": "TSUnionType",
                              "types": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "E1",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3845,
                                    "end": 3847
                                  },
                                  "typeArguments": null,
                                  "start": 3845,
                                  "end": 3847
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "E2",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3850,
                                    "end": 3852
                                  },
                                  "typeArguments": null,
                                  "start": 3850,
                                  "end": 3852
                                }
                              ],
                              "start": 3845,
                              "end": 3852
                            },
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "B",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3854,
                                "end": 3855
                              },
                              "typeArguments": null,
                              "start": 3854,
                              "end": 3855
                            }
                          ],
                          "start": 3823,
                          "end": 3856
                        },
                        "start": 3819,
                        "end": 3856
                      },
                      "start": 3817,
                      "end": 3856
                    },
                    "body": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "zipWith",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3860,
                          "end": 3867
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "F",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3868,
                            "end": 3869
                          }
                        ],
                        "optional": false,
                        "start": 3860,
                        "end": 3870
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "self",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3871,
                          "end": 3875
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "that",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3877,
                          "end": 3881
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "SK",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3883,
                          "end": 3885
                        }
                      ],
                      "optional": false,
                      "start": 3860,
                      "end": 3886
                    },
                    "id": null,
                    "generator": false,
                    "start": 3705,
                    "end": 3886
                  }
                ],
                "optional": false,
                "start": 3697,
                "end": 3887
              },
              "id": null,
              "generator": false,
              "start": 3331,
              "end": 3887
            },
            "definite": false,
            "start": 3320,
            "end": 3887
          }
        ],
        "declare": false,
        "start": 3314,
        "end": 3888
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 3307,
      "end": 3888
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 3888
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 0,
    "end": 6,
    "range": [
      0,
      6
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 7,
    "end": 16,
    "range": [
      7,
      16
    ]
  },
  {
    "type": "Identifier",
    "value": "TypeLambda",
    "start": 17,
    "end": 27,
    "range": [
      17,
      27
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 28,
    "end": 29,
    "range": [
      28,
      29
    ]
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 34,
    "end": 42,
    "range": [
      34,
      42
    ]
  },
  {
    "type": "Identifier",
    "value": "In",
    "start": 43,
    "end": 45,
    "range": [
      43,
      45
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 45,
    "end": 46,
    "range": [
      45,
      46
    ]
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 47,
    "end": 54,
    "range": [
      47,
      54
    ]
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 59,
    "end": 67,
    "range": [
      59,
      67
    ]
  },
  {
    "type": "Identifier",
    "value": "Out2",
    "start": 68,
    "end": 72,
    "range": [
      68,
      72
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 72,
    "end": 73,
    "range": [
      72,
      73
    ]
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 74,
    "end": 81,
    "range": [
      74,
      81
    ]
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 86,
    "end": 94,
    "range": [
      86,
      94
    ]
  },
  {
    "type": "Identifier",
    "value": "Out1",
    "start": 95,
    "end": 99,
    "range": [
      95,
      99
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 99,
    "end": 100,
    "range": [
      99,
      100
    ]
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 101,
    "end": 108,
    "range": [
      101,
      108
    ]
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 113,
    "end": 121,
    "range": [
      113,
      121
    ]
  },
  {
    "type": "Identifier",
    "value": "Target",
    "start": 122,
    "end": 128,
    "range": [
      122,
      128
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 128,
    "end": 129,
    "range": [
      128,
      129
    ]
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 130,
    "end": 137,
    "range": [
      130,
      137
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 138,
    "end": 139,
    "range": [
      138,
      139
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 140,
    "end": 146,
    "range": [
      140,
      146
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 147,
    "end": 156,
    "range": [
      147,
      156
    ]
  },
  {
    "type": "Identifier",
    "value": "Types",
    "start": 157,
    "end": 162,
    "range": [
      157,
      162
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 163,
    "end": 164,
    "range": [
      163,
      164
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 169,
    "end": 175,
    "range": [
      169,
      175
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 176,
    "end": 180,
    "range": [
      176,
      180
    ]
  },
  {
    "type": "Identifier",
    "value": "Invariant",
    "start": 181,
    "end": 190,
    "range": [
      181,
      190
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 190,
    "end": 191,
    "range": [
      190,
      191
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 191,
    "end": 192,
    "range": [
      191,
      192
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 192,
    "end": 193,
    "range": [
      192,
      193
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 194,
    "end": 195,
    "range": [
      194,
      195
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 196,
    "end": 197,
    "range": [
      196,
      197
    ]
  },
  {
    "type": "Identifier",
    "value": "_",
    "start": 197,
    "end": 198,
    "range": [
      197,
      198
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 198,
    "end": 199,
    "range": [
      198,
      199
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 200,
    "end": 201,
    "range": [
      200,
      201
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 201,
    "end": 202,
    "range": [
      201,
      202
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 203,
    "end": 205,
    "range": [
      203,
      205
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 206,
    "end": 207,
    "range": [
      206,
      207
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 212,
    "end": 218,
    "range": [
      212,
      218
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 219,
    "end": 223,
    "range": [
      219,
      223
    ]
  },
  {
    "type": "Identifier",
    "value": "Covariant",
    "start": 224,
    "end": 233,
    "range": [
      224,
      233
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 233,
    "end": 234,
    "range": [
      233,
      234
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 234,
    "end": 235,
    "range": [
      234,
      235
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 235,
    "end": 236,
    "range": [
      235,
      236
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 237,
    "end": 238,
    "range": [
      237,
      238
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 239,
    "end": 240,
    "range": [
      239,
      240
    ]
  },
  {
    "type": "Identifier",
    "value": "_",
    "start": 240,
    "end": 241,
    "range": [
      240,
      241
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 241,
    "end": 242,
    "range": [
      241,
      242
    ]
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 243,
    "end": 248,
    "range": [
      243,
      248
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 248,
    "end": 249,
    "range": [
      248,
      249
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 250,
    "end": 252,
    "range": [
      250,
      252
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 253,
    "end": 254,
    "range": [
      253,
      254
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 259,
    "end": 265,
    "range": [
      259,
      265
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 266,
    "end": 270,
    "range": [
      266,
      270
    ]
  },
  {
    "type": "Identifier",
    "value": "Contravariant",
    "start": 271,
    "end": 284,
    "range": [
      271,
      284
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 284,
    "end": 285,
    "range": [
      284,
      285
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 285,
    "end": 286,
    "range": [
      285,
      286
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 286,
    "end": 287,
    "range": [
      286,
      287
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 288,
    "end": 289,
    "range": [
      288,
      289
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 290,
    "end": 291,
    "range": [
      290,
      291
    ]
  },
  {
    "type": "Identifier",
    "value": "_",
    "start": 291,
    "end": 292,
    "range": [
      291,
      292
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 292,
    "end": 293,
    "range": [
      292,
      293
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 294,
    "end": 295,
    "range": [
      294,
      295
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 295,
    "end": 296,
    "range": [
      295,
      296
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 297,
    "end": 299,
    "range": [
      297,
      299
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 300,
    "end": 304,
    "range": [
      300,
      304
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "start": 308,
    "end": 314,
    "range": [
      308,
      314
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 315,
    "end": 322,
    "range": [
      315,
      322
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 323,
    "end": 328,
    "range": [
      323,
      328
    ]
  },
  {
    "type": "Identifier",
    "value": "URI",
    "start": 329,
    "end": 332,
    "range": [
      329,
      332
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 332,
    "end": 333,
    "range": [
      332,
      333
    ]
  },
  {
    "type": "Identifier",
    "value": "unique",
    "start": 334,
    "end": 340,
    "range": [
      334,
      340
    ]
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 341,
    "end": 347,
    "range": [
      341,
      347
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 347,
    "end": 348,
    "range": [
      347,
      348
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 349,
    "end": 355,
    "range": [
      349,
      355
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 356,
    "end": 365,
    "range": [
      356,
      365
    ]
  },
  {
    "type": "Identifier",
    "value": "TypeClass",
    "start": 366,
    "end": 375,
    "range": [
      366,
      375
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 375,
    "end": 376,
    "range": [
      375,
      376
    ]
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 376,
    "end": 377,
    "range": [
      376,
      377
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 378,
    "end": 385,
    "range": [
      378,
      385
    ]
  },
  {
    "type": "Identifier",
    "value": "TypeLambda",
    "start": 386,
    "end": 396,
    "range": [
      386,
      396
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 396,
    "end": 397,
    "range": [
      396,
      397
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 398,
    "end": 399,
    "range": [
      398,
      399
    ]
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 404,
    "end": 412,
    "range": [
      404,
      412
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 413,
    "end": 414,
    "range": [
      413,
      414
    ]
  },
  {
    "type": "Identifier",
    "value": "URI",
    "start": 414,
    "end": 417,
    "range": [
      414,
      417
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 417,
    "end": 418,
    "range": [
      417,
      418
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 418,
    "end": 419,
    "range": [
      418,
      419
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 419,
    "end": 420,
    "range": [
      419,
      420
    ]
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 421,
    "end": 422,
    "range": [
      421,
      422
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 423,
    "end": 424,
    "range": [
      423,
      424
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 426,
    "end": 432,
    "range": [
      426,
      432
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 433,
    "end": 442,
    "range": [
      433,
      442
    ]
  },
  {
    "type": "Identifier",
    "value": "Invariant",
    "start": 443,
    "end": 452,
    "range": [
      443,
      452
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 452,
    "end": 453,
    "range": [
      452,
      453
    ]
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 453,
    "end": 454,
    "range": [
      453,
      454
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 455,
    "end": 462,
    "range": [
      455,
      462
    ]
  },
  {
    "type": "Identifier",
    "value": "TypeLambda",
    "start": 463,
    "end": 473,
    "range": [
      463,
      473
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 473,
    "end": 474,
    "range": [
      473,
      474
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 475,
    "end": 482,
    "range": [
      475,
      482
    ]
  },
  {
    "type": "Identifier",
    "value": "TypeClass",
    "start": 483,
    "end": 492,
    "range": [
      483,
      492
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 492,
    "end": 493,
    "range": [
      492,
      493
    ]
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 493,
    "end": 494,
    "range": [
      493,
      494
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 494,
    "end": 495,
    "range": [
      494,
      495
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 496,
    "end": 497,
    "range": [
      496,
      497
    ]
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 502,
    "end": 510,
    "range": [
      502,
      510
    ]
  },
  {
    "type": "Identifier",
    "value": "imap",
    "start": 511,
    "end": 515,
    "range": [
      511,
      515
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 515,
    "end": 516,
    "range": [
      515,
      516
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 517,
    "end": 518,
    "range": [
      517,
      518
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 527,
    "end": 528,
    "range": [
      527,
      528
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 528,
    "end": 529,
    "range": [
      528,
      529
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 529,
    "end": 530,
    "range": [
      529,
      530
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 531,
    "end": 532,
    "range": [
      531,
      532
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 532,
    "end": 533,
    "range": [
      532,
      533
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 533,
    "end": 534,
    "range": [
      533,
      534
    ]
  },
  {
    "type": "Identifier",
    "value": "to",
    "start": 547,
    "end": 549,
    "range": [
      547,
      549
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 549,
    "end": 550,
    "range": [
      549,
      550
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 551,
    "end": 552,
    "range": [
      551,
      552
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 552,
    "end": 553,
    "range": [
      552,
      553
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 553,
    "end": 554,
    "range": [
      553,
      554
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 555,
    "end": 556,
    "range": [
      555,
      556
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 556,
    "end": 557,
    "range": [
      556,
      557
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 558,
    "end": 560,
    "range": [
      558,
      560
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 561,
    "end": 562,
    "range": [
      561,
      562
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 562,
    "end": 563,
    "range": [
      562,
      563
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 576,
    "end": 580,
    "range": [
      576,
      580
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 580,
    "end": 581,
    "range": [
      580,
      581
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 582,
    "end": 583,
    "range": [
      582,
      583
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 583,
    "end": 584,
    "range": [
      583,
      584
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 584,
    "end": 585,
    "range": [
      584,
      585
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 586,
    "end": 587,
    "range": [
      586,
      587
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 587,
    "end": 588,
    "range": [
      587,
      588
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 589,
    "end": 591,
    "range": [
      589,
      591
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 592,
    "end": 593,
    "range": [
      592,
      593
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 602,
    "end": 603,
    "range": [
      602,
      603
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 603,
    "end": 604,
    "range": [
      603,
      604
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 605,
    "end": 606,
    "range": [
      605,
      606
    ]
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 606,
    "end": 607,
    "range": [
      606,
      607
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 607,
    "end": 608,
    "range": [
      607,
      608
    ]
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 609,
    "end": 610,
    "range": [
      609,
      610
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 610,
    "end": 611,
    "range": [
      610,
      611
    ]
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 612,
    "end": 613,
    "range": [
      612,
      613
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 613,
    "end": 614,
    "range": [
      613,
      614
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 614,
    "end": 615,
    "range": [
      614,
      615
    ]
  },
  {
    "type": "Identifier",
    "value": "self",
    "start": 615,
    "end": 619,
    "range": [
      615,
      619
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 619,
    "end": 620,
    "range": [
      619,
      620
    ]
  },
  {
    "type": "Identifier",
    "value": "Kind",
    "start": 621,
    "end": 625,
    "range": [
      621,
      625
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 625,
    "end": 626,
    "range": [
      625,
      626
    ]
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 626,
    "end": 627,
    "range": [
      626,
      627
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 627,
    "end": 628,
    "range": [
      627,
      628
    ]
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 629,
    "end": 630,
    "range": [
      629,
      630
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 630,
    "end": 631,
    "range": [
      630,
      631
    ]
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 632,
    "end": 633,
    "range": [
      632,
      633
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 633,
    "end": 634,
    "range": [
      633,
      634
    ]
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 635,
    "end": 636,
    "range": [
      635,
      636
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 636,
    "end": 637,
    "range": [
      636,
      637
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 638,
    "end": 639,
    "range": [
      638,
      639
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 639,
    "end": 640,
    "range": [
      639,
      640
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 640,
    "end": 641,
    "range": [
      640,
      641
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 642,
    "end": 644,
    "range": [
      642,
      644
    ]
  },
  {
    "type": "Identifier",
    "value": "Kind",
    "start": 645,
    "end": 649,
    "range": [
      645,
      649
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 649,
    "end": 650,
    "range": [
      649,
      650
    ]
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 650,
    "end": 651,
    "range": [
      650,
      651
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 651,
    "end": 652,
    "range": [
      651,
      652
    ]
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 653,
    "end": 654,
    "range": [
      653,
      654
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 654,
    "end": 655,
    "range": [
      654,
      655
    ]
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 656,
    "end": 657,
    "range": [
      656,
      657
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 657,
    "end": 658,
    "range": [
      657,
      658
    ]
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 659,
    "end": 660,
    "range": [
      659,
      660
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 660,
    "end": 661,
    "range": [
      660,
      661
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 662,
    "end": 663,
    "range": [
      662,
      663
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 663,
    "end": 664,
    "range": [
      663,
      664
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 673,
    "end": 674,
    "range": [
      673,
      674
    ]
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 674,
    "end": 675,
    "range": [
      674,
      675
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 675,
    "end": 676,
    "range": [
      675,
      676
    ]
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 677,
    "end": 678,
    "range": [
      677,
      678
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 678,
    "end": 679,
    "range": [
      678,
      679
    ]
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 680,
    "end": 681,
    "range": [
      680,
      681
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 681,
    "end": 682,
    "range": [
      681,
      682
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 683,
    "end": 684,
    "range": [
      683,
      684
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 684,
    "end": 685,
    "range": [
      684,
      685
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 686,
    "end": 687,
    "range": [
      686,
      687
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 687,
    "end": 688,
    "range": [
      687,
      688
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 688,
    "end": 689,
    "range": [
      688,
      689
    ]
  },
  {
    "type": "Identifier",
    "value": "self",
    "start": 702,
    "end": 706,
    "range": [
      702,
      706
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 706,
    "end": 707,
    "range": [
      706,
      707
    ]
  },
  {
    "type": "Identifier",
    "value": "Kind",
    "start": 708,
    "end": 712,
    "range": [
      708,
      712
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 712,
    "end": 713,
    "range": [
      712,
      713
    ]
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 713,
    "end": 714,
    "range": [
      713,
      714
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 714,
    "end": 715,
    "range": [
      714,
      715
    ]
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 716,
    "end": 717,
    "range": [
      716,
      717
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 717,
    "end": 718,
    "range": [
      717,
      718
    ]
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 719,
    "end": 720,
    "range": [
      719,
      720
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 720,
    "end": 721,
    "range": [
      720,
      721
    ]
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 722,
    "end": 723,
    "range": [
      722,
      723
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 723,
    "end": 724,
    "range": [
      723,
      724
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 725,
    "end": 726,
    "range": [
      725,
      726
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 726,
    "end": 727,
    "range": [
      726,
      727
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 727,
    "end": 728,
    "range": [
      727,
      728
    ]
  },
  {
    "type": "Identifier",
    "value": "to",
    "start": 741,
    "end": 743,
    "range": [
      741,
      743
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 743,
    "end": 744,
    "range": [
      743,
      744
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 745,
    "end": 746,
    "range": [
      745,
      746
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 746,
    "end": 747,
    "range": [
      746,
      747
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 747,
    "end": 748,
    "range": [
      747,
      748
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 749,
    "end": 750,
    "range": [
      749,
      750
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 750,
    "end": 751,
    "range": [
      750,
      751
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 752,
    "end": 754,
    "range": [
      752,
      754
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 755,
    "end": 756,
    "range": [
      755,
      756
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 756,
    "end": 757,
    "range": [
      756,
      757
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 770,
    "end": 774,
    "range": [
      770,
      774
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 774,
    "end": 775,
    "range": [
      774,
      775
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 776,
    "end": 777,
    "range": [
      776,
      777
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 777,
    "end": 778,
    "range": [
      777,
      778
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 778,
    "end": 779,
    "range": [
      778,
      779
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 780,
    "end": 781,
    "range": [
      780,
      781
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 781,
    "end": 782,
    "range": [
      781,
      782
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 783,
    "end": 785,
    "range": [
      783,
      785
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 786,
    "end": 787,
    "range": [
      786,
      787
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 796,
    "end": 797,
    "range": [
      796,
      797
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 797,
    "end": 798,
    "range": [
      797,
      798
    ]
  },
  {
    "type": "Identifier",
    "value": "Kind",
    "start": 799,
    "end": 803,
    "range": [
      799,
      803
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 803,
    "end": 804,
    "range": [
      803,
      804
    ]
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 804,
    "end": 805,
    "range": [
      804,
      805
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 805,
    "end": 806,
    "range": [
      805,
      806
    ]
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 807,
    "end": 808,
    "range": [
      807,
      808
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 808,
    "end": 809,
    "range": [
      808,
      809
    ]
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 810,
    "end": 811,
    "range": [
      810,
      811
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 811,
    "end": 812,
    "range": [
      811,
      812
    ]
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 813,
    "end": 814,
    "range": [
      813,
      814
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 814,
    "end": 815,
    "range": [
      814,
      815
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 816,
    "end": 817,
    "range": [
      816,
      817
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 817,
    "end": 818,
    "range": [
      817,
      818
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 823,
    "end": 824,
    "range": [
      823,
      824
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 825,
    "end": 826,
    "range": [
      825,
      826
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 828,
    "end": 834,
    "range": [
      828,
      834
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 835,
    "end": 844,
    "range": [
      835,
      844
    ]
  },
  {
    "type": "Identifier",
    "value": "Covariant",
    "start": 845,
    "end": 854,
    "range": [
      845,
      854
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 854,
    "end": 855,
    "range": [
      854,
      855
    ]
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 855,
    "end": 856,
    "range": [
      855,
      856
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 857,
    "end": 864,
    "range": [
      857,
      864
    ]
  },
  {
    "type": "Identifier",
    "value": "TypeLambda",
    "start": 865,
    "end": 875,
    "range": [
      865,
      875
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 875,
    "end": 876,
    "range": [
      875,
      876
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 877,
    "end": 884,
    "range": [
      877,
      884
    ]
  },
  {
    "type": "Identifier",
    "value": "Invariant",
    "start": 885,
    "end": 894,
    "range": [
      885,
      894
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 894,
    "end": 895,
    "range": [
      894,
      895
    ]
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 895,
    "end": 896,
    "range": [
      895,
      896
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 896,
    "end": 897,
    "range": [
      896,
      897
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 898,
    "end": 899,
    "range": [
      898,
      899
    ]
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 904,
    "end": 912,
    "range": [
      904,
      912
    ]
  },
  {
    "type": "Identifier",
    "value": "map",
    "start": 913,
    "end": 916,
    "range": [
      913,
      916
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 916,
    "end": 917,
    "range": [
      916,
      917
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 918,
    "end": 919,
    "range": [
      918,
      919
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 928,
    "end": 929,
    "range": [
      928,
      929
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 929,
    "end": 930,
    "range": [
      929,
      930
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 930,
    "end": 931,
    "range": [
      930,
      931
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 932,
    "end": 933,
    "range": [
      932,
      933
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 933,
    "end": 934,
    "range": [
      933,
      934
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 934,
    "end": 935,
    "range": [
      934,
      935
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 935,
    "end": 936,
    "range": [
      935,
      936
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 936,
    "end": 937,
    "range": [
      936,
      937
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 938,
    "end": 939,
    "range": [
      938,
      939
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 939,
    "end": 940,
    "range": [
      939,
      940
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 940,
    "end": 941,
    "range": [
      940,
      941
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 942,
    "end": 943,
    "range": [
      942,
      943
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 943,
    "end": 944,
    "range": [
      943,
      944
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 945,
    "end": 947,
    "range": [
      945,
      947
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 948,
    "end": 949,
    "range": [
      948,
      949
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 949,
    "end": 950,
    "range": [
      949,
      950
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 950,
    "end": 951,
    "range": [
      950,
      951
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 952,
    "end": 953,
    "range": [
      952,
      953
    ]
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 953,
    "end": 954,
    "range": [
      953,
      954
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 954,
    "end": 955,
    "range": [
      954,
      955
    ]
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 956,
    "end": 957,
    "range": [
      956,
      957
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 957,
    "end": 958,
    "range": [
      957,
      958
    ]
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 959,
    "end": 960,
    "range": [
      959,
      960
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 960,
    "end": 961,
    "range": [
      960,
      961
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 961,
    "end": 962,
    "range": [
      961,
      962
    ]
  },
  {
    "type": "Identifier",
    "value": "self",
    "start": 962,
    "end": 966,
    "range": [
      962,
      966
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 966,
    "end": 967,
    "range": [
      966,
      967
    ]
  },
  {
    "type": "Identifier",
    "value": "Kind",
    "start": 968,
    "end": 972,
    "range": [
      968,
      972
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 972,
    "end": 973,
    "range": [
      972,
      973
    ]
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 973,
    "end": 974,
    "range": [
      973,
      974
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 974,
    "end": 975,
    "range": [
      974,
      975
    ]
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 976,
    "end": 977,
    "range": [
      976,
      977
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 977,
    "end": 978,
    "range": [
      977,
      978
    ]
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 979,
    "end": 980,
    "range": [
      979,
      980
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 980,
    "end": 981,
    "range": [
      980,
      981
    ]
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 982,
    "end": 983,
    "range": [
      982,
      983
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 983,
    "end": 984,
    "range": [
      983,
      984
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 985,
    "end": 986,
    "range": [
      985,
      986
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 986,
    "end": 987,
    "range": [
      986,
      987
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 987,
    "end": 988,
    "range": [
      987,
      988
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 989,
    "end": 991,
    "range": [
      989,
      991
    ]
  },
  {
    "type": "Identifier",
    "value": "Kind",
    "start": 992,
    "end": 996,
    "range": [
      992,
      996
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 996,
    "end": 997,
    "range": [
      996,
      997
    ]
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 997,
    "end": 998,
    "range": [
      997,
      998
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 998,
    "end": 999,
    "range": [
      998,
      999
    ]
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 1000,
    "end": 1001,
    "range": [
      1000,
      1001
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1001,
    "end": 1002,
    "range": [
      1001,
      1002
    ]
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 1003,
    "end": 1004,
    "range": [
      1003,
      1004
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1004,
    "end": 1005,
    "range": [
      1004,
      1005
    ]
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 1006,
    "end": 1007,
    "range": [
      1006,
      1007
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1007,
    "end": 1008,
    "range": [
      1007,
      1008
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1009,
    "end": 1010,
    "range": [
      1009,
      1010
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1010,
    "end": 1011,
    "range": [
      1010,
      1011
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1020,
    "end": 1021,
    "range": [
      1020,
      1021
    ]
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 1021,
    "end": 1022,
    "range": [
      1021,
      1022
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1022,
    "end": 1023,
    "range": [
      1022,
      1023
    ]
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 1024,
    "end": 1025,
    "range": [
      1024,
      1025
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1025,
    "end": 1026,
    "range": [
      1025,
      1026
    ]
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 1027,
    "end": 1028,
    "range": [
      1027,
      1028
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1028,
    "end": 1029,
    "range": [
      1028,
      1029
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1030,
    "end": 1031,
    "range": [
      1030,
      1031
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1031,
    "end": 1032,
    "range": [
      1031,
      1032
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1033,
    "end": 1034,
    "range": [
      1033,
      1034
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1034,
    "end": 1035,
    "range": [
      1034,
      1035
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1035,
    "end": 1036,
    "range": [
      1035,
      1036
    ]
  },
  {
    "type": "Identifier",
    "value": "self",
    "start": 1036,
    "end": 1040,
    "range": [
      1036,
      1040
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1040,
    "end": 1041,
    "range": [
      1040,
      1041
    ]
  },
  {
    "type": "Identifier",
    "value": "Kind",
    "start": 1042,
    "end": 1046,
    "range": [
      1042,
      1046
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1046,
    "end": 1047,
    "range": [
      1046,
      1047
    ]
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 1047,
    "end": 1048,
    "range": [
      1047,
      1048
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1048,
    "end": 1049,
    "range": [
      1048,
      1049
    ]
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 1050,
    "end": 1051,
    "range": [
      1050,
      1051
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1051,
    "end": 1052,
    "range": [
      1051,
      1052
    ]
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 1053,
    "end": 1054,
    "range": [
      1053,
      1054
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1054,
    "end": 1055,
    "range": [
      1054,
      1055
    ]
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 1056,
    "end": 1057,
    "range": [
      1056,
      1057
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1057,
    "end": 1058,
    "range": [
      1057,
      1058
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1059,
    "end": 1060,
    "range": [
      1059,
      1060
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1060,
    "end": 1061,
    "range": [
      1060,
      1061
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1061,
    "end": 1062,
    "range": [
      1061,
      1062
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 1063,
    "end": 1064,
    "range": [
      1063,
      1064
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1064,
    "end": 1065,
    "range": [
      1064,
      1065
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1066,
    "end": 1067,
    "range": [
      1066,
      1067
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1067,
    "end": 1068,
    "range": [
      1067,
      1068
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1068,
    "end": 1069,
    "range": [
      1068,
      1069
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1070,
    "end": 1071,
    "range": [
      1070,
      1071
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1071,
    "end": 1072,
    "range": [
      1071,
      1072
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1073,
    "end": 1075,
    "range": [
      1073,
      1075
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1076,
    "end": 1077,
    "range": [
      1076,
      1077
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1077,
    "end": 1078,
    "range": [
      1077,
      1078
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1078,
    "end": 1079,
    "range": [
      1078,
      1079
    ]
  },
  {
    "type": "Identifier",
    "value": "Kind",
    "start": 1080,
    "end": 1084,
    "range": [
      1080,
      1084
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1084,
    "end": 1085,
    "range": [
      1084,
      1085
    ]
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 1085,
    "end": 1086,
    "range": [
      1085,
      1086
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1086,
    "end": 1087,
    "range": [
      1086,
      1087
    ]
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 1088,
    "end": 1089,
    "range": [
      1088,
      1089
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1089,
    "end": 1090,
    "range": [
      1089,
      1090
    ]
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 1091,
    "end": 1092,
    "range": [
      1091,
      1092
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1092,
    "end": 1093,
    "range": [
      1092,
      1093
    ]
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 1094,
    "end": 1095,
    "range": [
      1094,
      1095
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1095,
    "end": 1096,
    "range": [
      1095,
      1096
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1097,
    "end": 1098,
    "range": [
      1097,
      1098
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1098,
    "end": 1099,
    "range": [
      1098,
      1099
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1104,
    "end": 1105,
    "range": [
      1104,
      1105
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1106,
    "end": 1107,
    "range": [
      1106,
      1107
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1110,
    "end": 1116,
    "range": [
      1110,
      1116
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1117,
    "end": 1121,
    "range": [
      1117,
      1121
    ]
  },
  {
    "type": "Identifier",
    "value": "Kind",
    "start": 1122,
    "end": 1126,
    "range": [
      1122,
      1126
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1126,
    "end": 1127,
    "range": [
      1126,
      1127
    ]
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 1127,
    "end": 1128,
    "range": [
      1127,
      1128
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1129,
    "end": 1136,
    "range": [
      1129,
      1136
    ]
  },
  {
    "type": "Identifier",
    "value": "TypeLambda",
    "start": 1137,
    "end": 1147,
    "range": [
      1137,
      1147
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1147,
    "end": 1148,
    "range": [
      1147,
      1148
    ]
  },
  {
    "type": "Identifier",
    "value": "In",
    "start": 1149,
    "end": 1151,
    "range": [
      1149,
      1151
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1151,
    "end": 1152,
    "range": [
      1151,
      1152
    ]
  },
  {
    "type": "Identifier",
    "value": "Out2",
    "start": 1153,
    "end": 1157,
    "range": [
      1153,
      1157
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1157,
    "end": 1158,
    "range": [
      1157,
      1158
    ]
  },
  {
    "type": "Identifier",
    "value": "Out1",
    "start": 1159,
    "end": 1163,
    "range": [
      1159,
      1163
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1163,
    "end": 1164,
    "range": [
      1163,
      1164
    ]
  },
  {
    "type": "Identifier",
    "value": "Target",
    "start": 1165,
    "end": 1171,
    "range": [
      1165,
      1171
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1171,
    "end": 1172,
    "range": [
      1171,
      1172
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1173,
    "end": 1174,
    "range": [
      1173,
      1174
    ]
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 1175,
    "end": 1176,
    "range": [
      1175,
      1176
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1177,
    "end": 1184,
    "range": [
      1177,
      1184
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1185,
    "end": 1186,
    "range": [
      1185,
      1186
    ]
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 1191,
    "end": 1199,
    "range": [
      1191,
      1199
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1200,
    "end": 1204,
    "range": [
      1200,
      1204
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1204,
    "end": 1205,
    "range": [
      1204,
      1205
    ]
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 1206,
    "end": 1213,
    "range": [
      1206,
      1213
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1214,
    "end": 1215,
    "range": [
      1214,
      1215
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1216,
    "end": 1217,
    "range": [
      1216,
      1217
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1218,
    "end": 1219,
    "range": [
      1218,
      1219
    ]
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 1219,
    "end": 1220,
    "range": [
      1219,
      1220
    ]
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 1221,
    "end": 1222,
    "range": [
      1221,
      1222
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1223,
    "end": 1224,
    "range": [
      1223,
      1224
    ]
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 1229,
    "end": 1237,
    "range": [
      1229,
      1237
    ]
  },
  {
    "type": "Identifier",
    "value": "In",
    "start": 1238,
    "end": 1240,
    "range": [
      1238,
      1240
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1240,
    "end": 1241,
    "range": [
      1240,
      1241
    ]
  },
  {
    "type": "Identifier",
    "value": "In",
    "start": 1242,
    "end": 1244,
    "range": [
      1242,
      1244
    ]
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 1249,
    "end": 1257,
    "range": [
      1249,
      1257
    ]
  },
  {
    "type": "Identifier",
    "value": "Out2",
    "start": 1258,
    "end": 1262,
    "range": [
      1258,
      1262
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1262,
    "end": 1263,
    "range": [
      1262,
      1263
    ]
  },
  {
    "type": "Identifier",
    "value": "Out2",
    "start": 1264,
    "end": 1268,
    "range": [
      1264,
      1268
    ]
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 1273,
    "end": 1281,
    "range": [
      1273,
      1281
    ]
  },
  {
    "type": "Identifier",
    "value": "Out1",
    "start": 1282,
    "end": 1286,
    "range": [
      1282,
      1286
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1286,
    "end": 1287,
    "range": [
      1286,
      1287
    ]
  },
  {
    "type": "Identifier",
    "value": "Out1",
    "start": 1288,
    "end": 1292,
    "range": [
      1288,
      1292
    ]
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 1297,
    "end": 1305,
    "range": [
      1297,
      1305
    ]
  },
  {
    "type": "Identifier",
    "value": "Target",
    "start": 1306,
    "end": 1312,
    "range": [
      1306,
      1312
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1312,
    "end": 1313,
    "range": [
      1312,
      1313
    ]
  },
  {
    "type": "Identifier",
    "value": "Target",
    "start": 1314,
    "end": 1320,
    "range": [
      1314,
      1320
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1321,
    "end": 1322,
    "range": [
      1321,
      1322
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1322,
    "end": 1323,
    "range": [
      1322,
      1323
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1323,
    "end": 1324,
    "range": [
      1323,
      1324
    ]
  },
  {
    "type": "String",
    "value": "\"type\"",
    "start": 1324,
    "end": 1330,
    "range": [
      1324,
      1330
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1330,
    "end": 1331,
    "range": [
      1330,
      1331
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1336,
    "end": 1337,
    "range": [
      1336,
      1337
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1338,
    "end": 1339,
    "range": [
      1338,
      1339
    ]
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 1348,
    "end": 1356,
    "range": [
      1348,
      1356
    ]
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 1357,
    "end": 1358,
    "range": [
      1357,
      1358
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1358,
    "end": 1359,
    "range": [
      1358,
      1359
    ]
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 1360,
    "end": 1361,
    "range": [
      1360,
      1361
    ]
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 1370,
    "end": 1378,
    "range": [
      1370,
      1378
    ]
  },
  {
    "type": "Identifier",
    "value": "In",
    "start": 1379,
    "end": 1381,
    "range": [
      1379,
      1381
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1381,
    "end": 1382,
    "range": [
      1381,
      1382
    ]
  },
  {
    "type": "Identifier",
    "value": "Types",
    "start": 1383,
    "end": 1388,
    "range": [
      1383,
      1388
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1388,
    "end": 1389,
    "range": [
      1388,
      1389
    ]
  },
  {
    "type": "Identifier",
    "value": "Contravariant",
    "start": 1389,
    "end": 1402,
    "range": [
      1389,
      1402
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1402,
    "end": 1403,
    "range": [
      1402,
      1403
    ]
  },
  {
    "type": "Identifier",
    "value": "In",
    "start": 1403,
    "end": 1405,
    "range": [
      1403,
      1405
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1405,
    "end": 1406,
    "range": [
      1405,
      1406
    ]
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 1415,
    "end": 1423,
    "range": [
      1415,
      1423
    ]
  },
  {
    "type": "Identifier",
    "value": "Out2",
    "start": 1424,
    "end": 1428,
    "range": [
      1424,
      1428
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1428,
    "end": 1429,
    "range": [
      1428,
      1429
    ]
  },
  {
    "type": "Identifier",
    "value": "Types",
    "start": 1430,
    "end": 1435,
    "range": [
      1430,
      1435
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1435,
    "end": 1436,
    "range": [
      1435,
      1436
    ]
  },
  {
    "type": "Identifier",
    "value": "Covariant",
    "start": 1436,
    "end": 1445,
    "range": [
      1436,
      1445
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1445,
    "end": 1446,
    "range": [
      1445,
      1446
    ]
  },
  {
    "type": "Identifier",
    "value": "Out2",
    "start": 1446,
    "end": 1450,
    "range": [
      1446,
      1450
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1450,
    "end": 1451,
    "range": [
      1450,
      1451
    ]
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 1460,
    "end": 1468,
    "range": [
      1460,
      1468
    ]
  },
  {
    "type": "Identifier",
    "value": "Out1",
    "start": 1469,
    "end": 1473,
    "range": [
      1469,
      1473
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1473,
    "end": 1474,
    "range": [
      1473,
      1474
    ]
  },
  {
    "type": "Identifier",
    "value": "Types",
    "start": 1475,
    "end": 1480,
    "range": [
      1475,
      1480
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1480,
    "end": 1481,
    "range": [
      1480,
      1481
    ]
  },
  {
    "type": "Identifier",
    "value": "Covariant",
    "start": 1481,
    "end": 1490,
    "range": [
      1481,
      1490
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1490,
    "end": 1491,
    "range": [
      1490,
      1491
    ]
  },
  {
    "type": "Identifier",
    "value": "Out1",
    "start": 1491,
    "end": 1495,
    "range": [
      1491,
      1495
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1495,
    "end": 1496,
    "range": [
      1495,
      1496
    ]
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 1505,
    "end": 1513,
    "range": [
      1505,
      1513
    ]
  },
  {
    "type": "Identifier",
    "value": "Target",
    "start": 1514,
    "end": 1520,
    "range": [
      1514,
      1520
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1520,
    "end": 1521,
    "range": [
      1520,
      1521
    ]
  },
  {
    "type": "Identifier",
    "value": "Types",
    "start": 1522,
    "end": 1527,
    "range": [
      1522,
      1527
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1527,
    "end": 1528,
    "range": [
      1527,
      1528
    ]
  },
  {
    "type": "Identifier",
    "value": "Invariant",
    "start": 1528,
    "end": 1537,
    "range": [
      1528,
      1537
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1537,
    "end": 1538,
    "range": [
      1537,
      1538
    ]
  },
  {
    "type": "Identifier",
    "value": "Target",
    "start": 1538,
    "end": 1544,
    "range": [
      1538,
      1544
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1544,
    "end": 1545,
    "range": [
      1544,
      1545
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1550,
    "end": 1551,
    "range": [
      1550,
      1551
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1553,
    "end": 1559,
    "range": [
      1553,
      1559
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1560,
    "end": 1569,
    "range": [
      1560,
      1569
    ]
  },
  {
    "type": "Identifier",
    "value": "SemiProduct",
    "start": 1570,
    "end": 1581,
    "range": [
      1570,
      1581
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1581,
    "end": 1582,
    "range": [
      1581,
      1582
    ]
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 1582,
    "end": 1583,
    "range": [
      1582,
      1583
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1584,
    "end": 1591,
    "range": [
      1584,
      1591
    ]
  },
  {
    "type": "Identifier",
    "value": "TypeLambda",
    "start": 1592,
    "end": 1602,
    "range": [
      1592,
      1602
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1602,
    "end": 1603,
    "range": [
      1602,
      1603
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1604,
    "end": 1611,
    "range": [
      1604,
      1611
    ]
  },
  {
    "type": "Identifier",
    "value": "Invariant",
    "start": 1612,
    "end": 1621,
    "range": [
      1612,
      1621
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1621,
    "end": 1622,
    "range": [
      1621,
      1622
    ]
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 1622,
    "end": 1623,
    "range": [
      1622,
      1623
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1623,
    "end": 1624,
    "range": [
      1623,
      1624
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1625,
    "end": 1626,
    "range": [
      1625,
      1626
    ]
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 1631,
    "end": 1639,
    "range": [
      1631,
      1639
    ]
  },
  {
    "type": "Identifier",
    "value": "product",
    "start": 1640,
    "end": 1647,
    "range": [
      1640,
      1647
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1647,
    "end": 1648,
    "range": [
      1647,
      1648
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1649,
    "end": 1650,
    "range": [
      1649,
      1650
    ]
  },
  {
    "type": "Identifier",
    "value": "R1",
    "start": 1650,
    "end": 1652,
    "range": [
      1650,
      1652
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1652,
    "end": 1653,
    "range": [
      1652,
      1653
    ]
  },
  {
    "type": "Identifier",
    "value": "O1",
    "start": 1654,
    "end": 1656,
    "range": [
      1654,
      1656
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1656,
    "end": 1657,
    "range": [
      1656,
      1657
    ]
  },
  {
    "type": "Identifier",
    "value": "E1",
    "start": 1658,
    "end": 1660,
    "range": [
      1658,
      1660
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1660,
    "end": 1661,
    "range": [
      1660,
      1661
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1662,
    "end": 1663,
    "range": [
      1662,
      1663
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1663,
    "end": 1664,
    "range": [
      1663,
      1664
    ]
  },
  {
    "type": "Identifier",
    "value": "R2",
    "start": 1665,
    "end": 1667,
    "range": [
      1665,
      1667
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1667,
    "end": 1668,
    "range": [
      1667,
      1668
    ]
  },
  {
    "type": "Identifier",
    "value": "O2",
    "start": 1669,
    "end": 1671,
    "range": [
      1669,
      1671
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1671,
    "end": 1672,
    "range": [
      1671,
      1672
    ]
  },
  {
    "type": "Identifier",
    "value": "E2",
    "start": 1673,
    "end": 1675,
    "range": [
      1673,
      1675
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1675,
    "end": 1676,
    "range": [
      1675,
      1676
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1677,
    "end": 1678,
    "range": [
      1677,
      1678
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1678,
    "end": 1679,
    "range": [
      1678,
      1679
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1679,
    "end": 1680,
    "range": [
      1679,
      1680
    ]
  },
  {
    "type": "Identifier",
    "value": "self",
    "start": 1689,
    "end": 1693,
    "range": [
      1689,
      1693
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1693,
    "end": 1694,
    "range": [
      1693,
      1694
    ]
  },
  {
    "type": "Identifier",
    "value": "Kind",
    "start": 1695,
    "end": 1699,
    "range": [
      1695,
      1699
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1699,
    "end": 1700,
    "range": [
      1699,
      1700
    ]
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 1700,
    "end": 1701,
    "range": [
      1700,
      1701
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1701,
    "end": 1702,
    "range": [
      1701,
      1702
    ]
  },
  {
    "type": "Identifier",
    "value": "R1",
    "start": 1703,
    "end": 1705,
    "range": [
      1703,
      1705
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1705,
    "end": 1706,
    "range": [
      1705,
      1706
    ]
  },
  {
    "type": "Identifier",
    "value": "O1",
    "start": 1707,
    "end": 1709,
    "range": [
      1707,
      1709
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1709,
    "end": 1710,
    "range": [
      1709,
      1710
    ]
  },
  {
    "type": "Identifier",
    "value": "E1",
    "start": 1711,
    "end": 1713,
    "range": [
      1711,
      1713
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1713,
    "end": 1714,
    "range": [
      1713,
      1714
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1715,
    "end": 1716,
    "range": [
      1715,
      1716
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1716,
    "end": 1717,
    "range": [
      1716,
      1717
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1717,
    "end": 1718,
    "range": [
      1717,
      1718
    ]
  },
  {
    "type": "Identifier",
    "value": "that",
    "start": 1727,
    "end": 1731,
    "range": [
      1727,
      1731
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1731,
    "end": 1732,
    "range": [
      1731,
      1732
    ]
  },
  {
    "type": "Identifier",
    "value": "Kind",
    "start": 1733,
    "end": 1737,
    "range": [
      1733,
      1737
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1737,
    "end": 1738,
    "range": [
      1737,
      1738
    ]
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 1738,
    "end": 1739,
    "range": [
      1738,
      1739
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1739,
    "end": 1740,
    "range": [
      1739,
      1740
    ]
  },
  {
    "type": "Identifier",
    "value": "R2",
    "start": 1741,
    "end": 1743,
    "range": [
      1741,
      1743
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1743,
    "end": 1744,
    "range": [
      1743,
      1744
    ]
  },
  {
    "type": "Identifier",
    "value": "O2",
    "start": 1745,
    "end": 1747,
    "range": [
      1745,
      1747
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1747,
    "end": 1748,
    "range": [
      1747,
      1748
    ]
  },
  {
    "type": "Identifier",
    "value": "E2",
    "start": 1749,
    "end": 1751,
    "range": [
      1749,
      1751
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1751,
    "end": 1752,
    "range": [
      1751,
      1752
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1753,
    "end": 1754,
    "range": [
      1753,
      1754
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1754,
    "end": 1755,
    "range": [
      1754,
      1755
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1760,
    "end": 1761,
    "range": [
      1760,
      1761
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1762,
    "end": 1764,
    "range": [
      1762,
      1764
    ]
  },
  {
    "type": "Identifier",
    "value": "Kind",
    "start": 1765,
    "end": 1769,
    "range": [
      1765,
      1769
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1769,
    "end": 1770,
    "range": [
      1769,
      1770
    ]
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 1770,
    "end": 1771,
    "range": [
      1770,
      1771
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1771,
    "end": 1772,
    "range": [
      1771,
      1772
    ]
  },
  {
    "type": "Identifier",
    "value": "R1",
    "start": 1773,
    "end": 1775,
    "range": [
      1773,
      1775
    ]
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 1776,
    "end": 1777,
    "range": [
      1776,
      1777
    ]
  },
  {
    "type": "Identifier",
    "value": "R2",
    "start": 1778,
    "end": 1780,
    "range": [
      1778,
      1780
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1780,
    "end": 1781,
    "range": [
      1780,
      1781
    ]
  },
  {
    "type": "Identifier",
    "value": "O1",
    "start": 1782,
    "end": 1784,
    "range": [
      1782,
      1784
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1785,
    "end": 1786,
    "range": [
      1785,
      1786
    ]
  },
  {
    "type": "Identifier",
    "value": "O2",
    "start": 1787,
    "end": 1789,
    "range": [
      1787,
      1789
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1789,
    "end": 1790,
    "range": [
      1789,
      1790
    ]
  },
  {
    "type": "Identifier",
    "value": "E1",
    "start": 1791,
    "end": 1793,
    "range": [
      1791,
      1793
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1794,
    "end": 1795,
    "range": [
      1794,
      1795
    ]
  },
  {
    "type": "Identifier",
    "value": "E2",
    "start": 1796,
    "end": 1798,
    "range": [
      1796,
      1798
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1798,
    "end": 1799,
    "range": [
      1798,
      1799
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1800,
    "end": 1801,
    "range": [
      1800,
      1801
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1801,
    "end": 1802,
    "range": [
      1801,
      1802
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1802,
    "end": 1803,
    "range": [
      1802,
      1803
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1804,
    "end": 1805,
    "range": [
      1804,
      1805
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1805,
    "end": 1806,
    "range": [
      1805,
      1806
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1806,
    "end": 1807,
    "range": [
      1806,
      1807
    ]
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 1813,
    "end": 1821,
    "range": [
      1813,
      1821
    ]
  },
  {
    "type": "Identifier",
    "value": "productMany",
    "start": 1822,
    "end": 1833,
    "range": [
      1822,
      1833
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1833,
    "end": 1834,
    "range": [
      1833,
      1834
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1835,
    "end": 1836,
    "range": [
      1835,
      1836
    ]
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 1836,
    "end": 1837,
    "range": [
      1836,
      1837
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1837,
    "end": 1838,
    "range": [
      1837,
      1838
    ]
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 1839,
    "end": 1840,
    "range": [
      1839,
      1840
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1840,
    "end": 1841,
    "range": [
      1840,
      1841
    ]
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 1842,
    "end": 1843,
    "range": [
      1842,
      1843
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1843,
    "end": 1844,
    "range": [
      1843,
      1844
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1845,
    "end": 1846,
    "range": [
      1845,
      1846
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1846,
    "end": 1847,
    "range": [
      1846,
      1847
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1847,
    "end": 1848,
    "range": [
      1847,
      1848
    ]
  },
  {
    "type": "Identifier",
    "value": "self",
    "start": 1857,
    "end": 1861,
    "range": [
      1857,
      1861
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1861,
    "end": 1862,
    "range": [
      1861,
      1862
    ]
  },
  {
    "type": "Identifier",
    "value": "Kind",
    "start": 1863,
    "end": 1867,
    "range": [
      1863,
      1867
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1867,
    "end": 1868,
    "range": [
      1867,
      1868
    ]
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 1868,
    "end": 1869,
    "range": [
      1868,
      1869
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1869,
    "end": 1870,
    "range": [
      1869,
      1870
    ]
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 1871,
    "end": 1872,
    "range": [
      1871,
      1872
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1872,
    "end": 1873,
    "range": [
      1872,
      1873
    ]
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 1874,
    "end": 1875,
    "range": [
      1874,
      1875
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1875,
    "end": 1876,
    "range": [
      1875,
      1876
    ]
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 1877,
    "end": 1878,
    "range": [
      1877,
      1878
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1878,
    "end": 1879,
    "range": [
      1878,
      1879
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1880,
    "end": 1881,
    "range": [
      1880,
      1881
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1881,
    "end": 1882,
    "range": [
      1881,
      1882
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1882,
    "end": 1883,
    "range": [
      1882,
      1883
    ]
  },
  {
    "type": "Identifier",
    "value": "collection",
    "start": 1892,
    "end": 1902,
    "range": [
      1892,
      1902
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1902,
    "end": 1903,
    "range": [
      1902,
      1903
    ]
  },
  {
    "type": "Identifier",
    "value": "Iterable",
    "start": 1904,
    "end": 1912,
    "range": [
      1904,
      1912
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1912,
    "end": 1913,
    "range": [
      1912,
      1913
    ]
  },
  {
    "type": "Identifier",
    "value": "Kind",
    "start": 1913,
    "end": 1917,
    "range": [
      1913,
      1917
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1917,
    "end": 1918,
    "range": [
      1917,
      1918
    ]
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 1918,
    "end": 1919,
    "range": [
      1918,
      1919
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1919,
    "end": 1920,
    "range": [
      1919,
      1920
    ]
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 1921,
    "end": 1922,
    "range": [
      1921,
      1922
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1922,
    "end": 1923,
    "range": [
      1922,
      1923
    ]
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 1924,
    "end": 1925,
    "range": [
      1924,
      1925
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1925,
    "end": 1926,
    "range": [
      1925,
      1926
    ]
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 1927,
    "end": 1928,
    "range": [
      1927,
      1928
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1928,
    "end": 1929,
    "range": [
      1928,
      1929
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1930,
    "end": 1931,
    "range": [
      1930,
      1931
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1931,
    "end": 1932,
    "range": [
      1931,
      1932
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1932,
    "end": 1933,
    "range": [
      1932,
      1933
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1938,
    "end": 1939,
    "range": [
      1938,
      1939
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1940,
    "end": 1942,
    "range": [
      1940,
      1942
    ]
  },
  {
    "type": "Identifier",
    "value": "Kind",
    "start": 1943,
    "end": 1947,
    "range": [
      1943,
      1947
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1947,
    "end": 1948,
    "range": [
      1947,
      1948
    ]
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 1948,
    "end": 1949,
    "range": [
      1948,
      1949
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1949,
    "end": 1950,
    "range": [
      1949,
      1950
    ]
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 1951,
    "end": 1952,
    "range": [
      1951,
      1952
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1952,
    "end": 1953,
    "range": [
      1952,
      1953
    ]
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 1954,
    "end": 1955,
    "range": [
      1954,
      1955
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1955,
    "end": 1956,
    "range": [
      1955,
      1956
    ]
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 1957,
    "end": 1958,
    "range": [
      1957,
      1958
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1958,
    "end": 1959,
    "range": [
      1958,
      1959
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1960,
    "end": 1961,
    "range": [
      1960,
      1961
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1961,
    "end": 1962,
    "range": [
      1961,
      1962
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1962,
    "end": 1963,
    "range": [
      1962,
      1963
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1964,
    "end": 1967,
    "range": [
      1964,
      1967
    ]
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 1967,
    "end": 1972,
    "range": [
      1967,
      1972
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1972,
    "end": 1973,
    "range": [
      1972,
      1973
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1973,
    "end": 1974,
    "range": [
      1973,
      1974
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1974,
    "end": 1975,
    "range": [
      1974,
      1975
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1975,
    "end": 1976,
    "range": [
      1975,
      1976
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1976,
    "end": 1977,
    "range": [
      1976,
      1977
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1978,
    "end": 1979,
    "range": [
      1978,
      1979
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1980,
    "end": 1986,
    "range": [
      1980,
      1986
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1987,
    "end": 1996,
    "range": [
      1987,
      1996
    ]
  },
  {
    "type": "Identifier",
    "value": "SemiApplicative",
    "start": 1997,
    "end": 2012,
    "range": [
      1997,
      2012
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2012,
    "end": 2013,
    "range": [
      2012,
      2013
    ]
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 2013,
    "end": 2014,
    "range": [
      2013,
      2014
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2015,
    "end": 2022,
    "range": [
      2015,
      2022
    ]
  },
  {
    "type": "Identifier",
    "value": "TypeLambda",
    "start": 2023,
    "end": 2033,
    "range": [
      2023,
      2033
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2033,
    "end": 2034,
    "range": [
      2033,
      2034
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2035,
    "end": 2042,
    "range": [
      2035,
      2042
    ]
  },
  {
    "type": "Identifier",
    "value": "SemiProduct",
    "start": 2043,
    "end": 2054,
    "range": [
      2043,
      2054
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2054,
    "end": 2055,
    "range": [
      2054,
      2055
    ]
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 2055,
    "end": 2056,
    "range": [
      2055,
      2056
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2056,
    "end": 2057,
    "range": [
      2056,
      2057
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2057,
    "end": 2058,
    "range": [
      2057,
      2058
    ]
  },
  {
    "type": "Identifier",
    "value": "Covariant",
    "start": 2059,
    "end": 2068,
    "range": [
      2059,
      2068
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2068,
    "end": 2069,
    "range": [
      2068,
      2069
    ]
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 2069,
    "end": 2070,
    "range": [
      2069,
      2070
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2070,
    "end": 2071,
    "range": [
      2070,
      2071
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2072,
    "end": 2073,
    "range": [
      2072,
      2073
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2074,
    "end": 2075,
    "range": [
      2074,
      2075
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2078,
    "end": 2084,
    "range": [
      2078,
      2084
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2085,
    "end": 2090,
    "range": [
      2085,
      2090
    ]
  },
  {
    "type": "Identifier",
    "value": "SK",
    "start": 2091,
    "end": 2093,
    "range": [
      2091,
      2093
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2094,
    "end": 2095,
    "range": [
      2094,
      2095
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2096,
    "end": 2097,
    "range": [
      2096,
      2097
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 2097,
    "end": 2098,
    "range": [
      2097,
      2098
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2098,
    "end": 2099,
    "range": [
      2098,
      2099
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 2100,
    "end": 2101,
    "range": [
      2100,
      2101
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2101,
    "end": 2102,
    "range": [
      2101,
      2102
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2102,
    "end": 2103,
    "range": [
      2102,
      2103
    ]
  },
  {
    "type": "Identifier",
    "value": "_",
    "start": 2103,
    "end": 2104,
    "range": [
      2103,
      2104
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2104,
    "end": 2105,
    "range": [
      2104,
      2105
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 2106,
    "end": 2107,
    "range": [
      2106,
      2107
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2107,
    "end": 2108,
    "range": [
      2107,
      2108
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2109,
    "end": 2110,
    "range": [
      2109,
      2110
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2110,
    "end": 2111,
    "range": [
      2110,
      2111
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 2112,
    "end": 2113,
    "range": [
      2112,
      2113
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2113,
    "end": 2114,
    "range": [
      2113,
      2114
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2114,
    "end": 2115,
    "range": [
      2114,
      2115
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 2116,
    "end": 2117,
    "range": [
      2116,
      2117
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2118,
    "end": 2120,
    "range": [
      2118,
      2120
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2121,
    "end": 2122,
    "range": [
      2121,
      2122
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2122,
    "end": 2123,
    "range": [
      2122,
      2123
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2125,
    "end": 2131,
    "range": [
      2125,
      2131
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2132,
    "end": 2139,
    "range": [
      2132,
      2139
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2140,
    "end": 2145,
    "range": [
      2140,
      2145
    ]
  },
  {
    "type": "Identifier",
    "value": "dual",
    "start": 2146,
    "end": 2150,
    "range": [
      2146,
      2150
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2150,
    "end": 2151,
    "range": [
      2150,
      2151
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2152,
    "end": 2153,
    "range": [
      2152,
      2153
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2158,
    "end": 2159,
    "range": [
      2158,
      2159
    ]
  },
  {
    "type": "Identifier",
    "value": "DataLast",
    "start": 2159,
    "end": 2167,
    "range": [
      2159,
      2167
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2168,
    "end": 2175,
    "range": [
      2168,
      2175
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2176,
    "end": 2177,
    "range": [
      2176,
      2177
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2177,
    "end": 2180,
    "range": [
      2177,
      2180
    ]
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 2180,
    "end": 2184,
    "range": [
      2180,
      2184
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2184,
    "end": 2185,
    "range": [
      2184,
      2185
    ]
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 2186,
    "end": 2191,
    "range": [
      2186,
      2191
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2191,
    "end": 2192,
    "range": [
      2191,
      2192
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2192,
    "end": 2195,
    "range": [
      2192,
      2195
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2195,
    "end": 2196,
    "range": [
      2195,
      2196
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2196,
    "end": 2197,
    "range": [
      2196,
      2197
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2198,
    "end": 2200,
    "range": [
      2198,
      2200
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2201,
    "end": 2204,
    "range": [
      2201,
      2204
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2204,
    "end": 2205,
    "range": [
      2204,
      2205
    ]
  },
  {
    "type": "Identifier",
    "value": "DataFirst",
    "start": 2206,
    "end": 2215,
    "range": [
      2206,
      2215
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2216,
    "end": 2223,
    "range": [
      2216,
      2223
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2224,
    "end": 2225,
    "range": [
      2224,
      2225
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2225,
    "end": 2228,
    "range": [
      2225,
      2228
    ]
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 2228,
    "end": 2232,
    "range": [
      2228,
      2232
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2232,
    "end": 2233,
    "range": [
      2232,
      2233
    ]
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 2234,
    "end": 2239,
    "range": [
      2234,
      2239
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2239,
    "end": 2240,
    "range": [
      2239,
      2240
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2240,
    "end": 2243,
    "range": [
      2240,
      2243
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2243,
    "end": 2244,
    "range": [
      2243,
      2244
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2244,
    "end": 2245,
    "range": [
      2244,
      2245
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2246,
    "end": 2248,
    "range": [
      2246,
      2248
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2249,
    "end": 2252,
    "range": [
      2249,
      2252
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2252,
    "end": 2253,
    "range": [
      2252,
      2253
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2253,
    "end": 2254,
    "range": [
      2253,
      2254
    ]
  },
  {
    "type": "Identifier",
    "value": "arity",
    "start": 2263,
    "end": 2268,
    "range": [
      2263,
      2268
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2268,
    "end": 2269,
    "range": [
      2268,
      2269
    ]
  },
  {
    "type": "Identifier",
    "value": "Parameters",
    "start": 2270,
    "end": 2280,
    "range": [
      2270,
      2280
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2280,
    "end": 2281,
    "range": [
      2280,
      2281
    ]
  },
  {
    "type": "Identifier",
    "value": "DataFirst",
    "start": 2281,
    "end": 2290,
    "range": [
      2281,
      2290
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2290,
    "end": 2291,
    "range": [
      2290,
      2291
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2291,
    "end": 2292,
    "range": [
      2291,
      2292
    ]
  },
  {
    "type": "String",
    "value": "\"length\"",
    "start": 2292,
    "end": 2300,
    "range": [
      2292,
      2300
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2300,
    "end": 2301,
    "range": [
      2300,
      2301
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2301,
    "end": 2302,
    "range": [
      2301,
      2302
    ]
  },
  {
    "type": "Identifier",
    "value": "body",
    "start": 2311,
    "end": 2315,
    "range": [
      2311,
      2315
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2315,
    "end": 2316,
    "range": [
      2315,
      2316
    ]
  },
  {
    "type": "Identifier",
    "value": "DataFirst",
    "start": 2317,
    "end": 2326,
    "range": [
      2317,
      2326
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2331,
    "end": 2332,
    "range": [
      2331,
      2332
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2332,
    "end": 2333,
    "range": [
      2332,
      2333
    ]
  },
  {
    "type": "Identifier",
    "value": "DataLast",
    "start": 2334,
    "end": 2342,
    "range": [
      2334,
      2342
    ]
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 2343,
    "end": 2344,
    "range": [
      2343,
      2344
    ]
  },
  {
    "type": "Identifier",
    "value": "DataFirst",
    "start": 2345,
    "end": 2354,
    "range": [
      2345,
      2354
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2359,
    "end": 2360,
    "range": [
      2359,
      2360
    ]
  },
  {
    "type": "Identifier",
    "value": "DataLast",
    "start": 2360,
    "end": 2368,
    "range": [
      2360,
      2368
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2369,
    "end": 2376,
    "range": [
      2369,
      2376
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2377,
    "end": 2378,
    "range": [
      2377,
      2378
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2378,
    "end": 2381,
    "range": [
      2378,
      2381
    ]
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 2381,
    "end": 2385,
    "range": [
      2381,
      2385
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2385,
    "end": 2386,
    "range": [
      2385,
      2386
    ]
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 2387,
    "end": 2392,
    "range": [
      2387,
      2392
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2392,
    "end": 2393,
    "range": [
      2392,
      2393
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2393,
    "end": 2396,
    "range": [
      2393,
      2396
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2396,
    "end": 2397,
    "range": [
      2396,
      2397
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2397,
    "end": 2398,
    "range": [
      2397,
      2398
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2399,
    "end": 2401,
    "range": [
      2399,
      2401
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2402,
    "end": 2405,
    "range": [
      2402,
      2405
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2405,
    "end": 2406,
    "range": [
      2405,
      2406
    ]
  },
  {
    "type": "Identifier",
    "value": "DataFirst",
    "start": 2407,
    "end": 2416,
    "range": [
      2407,
      2416
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2417,
    "end": 2424,
    "range": [
      2417,
      2424
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2425,
    "end": 2426,
    "range": [
      2425,
      2426
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2426,
    "end": 2429,
    "range": [
      2426,
      2429
    ]
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 2429,
    "end": 2433,
    "range": [
      2429,
      2433
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2433,
    "end": 2434,
    "range": [
      2433,
      2434
    ]
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 2435,
    "end": 2440,
    "range": [
      2435,
      2440
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2440,
    "end": 2441,
    "range": [
      2440,
      2441
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2441,
    "end": 2444,
    "range": [
      2441,
      2444
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2444,
    "end": 2445,
    "range": [
      2444,
      2445
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2445,
    "end": 2446,
    "range": [
      2445,
      2446
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2447,
    "end": 2449,
    "range": [
      2447,
      2449
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2450,
    "end": 2453,
    "range": [
      2450,
      2453
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2453,
    "end": 2454,
    "range": [
      2453,
      2454
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2454,
    "end": 2455,
    "range": [
      2454,
      2455
    ]
  },
  {
    "type": "Identifier",
    "value": "isDataFirst",
    "start": 2464,
    "end": 2475,
    "range": [
      2464,
      2475
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2475,
    "end": 2476,
    "range": [
      2475,
      2476
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2477,
    "end": 2478,
    "range": [
      2477,
      2478
    ]
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 2478,
    "end": 2482,
    "range": [
      2478,
      2482
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2482,
    "end": 2483,
    "range": [
      2482,
      2483
    ]
  },
  {
    "type": "Identifier",
    "value": "IArguments",
    "start": 2484,
    "end": 2494,
    "range": [
      2484,
      2494
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2494,
    "end": 2495,
    "range": [
      2494,
      2495
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2496,
    "end": 2498,
    "range": [
      2496,
      2498
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 2499,
    "end": 2506,
    "range": [
      2499,
      2506
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2506,
    "end": 2507,
    "range": [
      2506,
      2507
    ]
  },
  {
    "type": "Identifier",
    "value": "body",
    "start": 2516,
    "end": 2520,
    "range": [
      2516,
      2520
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2520,
    "end": 2521,
    "range": [
      2520,
      2521
    ]
  },
  {
    "type": "Identifier",
    "value": "DataFirst",
    "start": 2522,
    "end": 2531,
    "range": [
      2522,
      2531
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2536,
    "end": 2537,
    "range": [
      2536,
      2537
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2537,
    "end": 2538,
    "range": [
      2537,
      2538
    ]
  },
  {
    "type": "Identifier",
    "value": "DataLast",
    "start": 2539,
    "end": 2547,
    "range": [
      2539,
      2547
    ]
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 2548,
    "end": 2549,
    "range": [
      2548,
      2549
    ]
  },
  {
    "type": "Identifier",
    "value": "DataFirst",
    "start": 2550,
    "end": 2559,
    "range": [
      2550,
      2559
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2560,
    "end": 2561,
    "range": [
      2560,
      2561
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2561,
    "end": 2562,
    "range": [
      2561,
      2562
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2564,
    "end": 2570,
    "range": [
      2564,
      2570
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2571,
    "end": 2576,
    "range": [
      2571,
      2576
    ]
  },
  {
    "type": "Identifier",
    "value": "zipWith",
    "start": 2577,
    "end": 2584,
    "range": [
      2577,
      2584
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2585,
    "end": 2586,
    "range": [
      2585,
      2586
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2587,
    "end": 2588,
    "range": [
      2587,
      2588
    ]
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 2588,
    "end": 2589,
    "range": [
      2588,
      2589
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2590,
    "end": 2597,
    "range": [
      2590,
      2597
    ]
  },
  {
    "type": "Identifier",
    "value": "TypeLambda",
    "start": 2598,
    "end": 2608,
    "range": [
      2598,
      2608
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2608,
    "end": 2609,
    "range": [
      2608,
      2609
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2609,
    "end": 2610,
    "range": [
      2609,
      2610
    ]
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 2610,
    "end": 2611,
    "range": [
      2610,
      2611
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2611,
    "end": 2612,
    "range": [
      2611,
      2612
    ]
  },
  {
    "type": "Identifier",
    "value": "SemiApplicative",
    "start": 2613,
    "end": 2628,
    "range": [
      2613,
      2628
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2628,
    "end": 2629,
    "range": [
      2628,
      2629
    ]
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 2629,
    "end": 2630,
    "range": [
      2629,
      2630
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2630,
    "end": 2631,
    "range": [
      2630,
      2631
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2631,
    "end": 2632,
    "range": [
      2631,
      2632
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2632,
    "end": 2633,
    "range": [
      2632,
      2633
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2634,
    "end": 2635,
    "range": [
      2634,
      2635
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2640,
    "end": 2641,
    "range": [
      2640,
      2641
    ]
  },
  {
    "type": "Identifier",
    "value": "R2",
    "start": 2641,
    "end": 2643,
    "range": [
      2641,
      2643
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2643,
    "end": 2644,
    "range": [
      2643,
      2644
    ]
  },
  {
    "type": "Identifier",
    "value": "O2",
    "start": 2645,
    "end": 2647,
    "range": [
      2645,
      2647
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2647,
    "end": 2648,
    "range": [
      2647,
      2648
    ]
  },
  {
    "type": "Identifier",
    "value": "E2",
    "start": 2649,
    "end": 2651,
    "range": [
      2649,
      2651
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2651,
    "end": 2652,
    "range": [
      2651,
      2652
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 2653,
    "end": 2654,
    "range": [
      2653,
      2654
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2654,
    "end": 2655,
    "range": [
      2654,
      2655
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 2656,
    "end": 2657,
    "range": [
      2656,
      2657
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2657,
    "end": 2658,
    "range": [
      2657,
      2658
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 2659,
    "end": 2660,
    "range": [
      2659,
      2660
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2660,
    "end": 2661,
    "range": [
      2660,
      2661
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2661,
    "end": 2662,
    "range": [
      2661,
      2662
    ]
  },
  {
    "type": "Identifier",
    "value": "that",
    "start": 2671,
    "end": 2675,
    "range": [
      2671,
      2675
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2675,
    "end": 2676,
    "range": [
      2675,
      2676
    ]
  },
  {
    "type": "Identifier",
    "value": "Kind",
    "start": 2677,
    "end": 2681,
    "range": [
      2677,
      2681
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2681,
    "end": 2682,
    "range": [
      2681,
      2682
    ]
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 2682,
    "end": 2683,
    "range": [
      2682,
      2683
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2683,
    "end": 2684,
    "range": [
      2683,
      2684
    ]
  },
  {
    "type": "Identifier",
    "value": "R2",
    "start": 2685,
    "end": 2687,
    "range": [
      2685,
      2687
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2687,
    "end": 2688,
    "range": [
      2687,
      2688
    ]
  },
  {
    "type": "Identifier",
    "value": "O2",
    "start": 2689,
    "end": 2691,
    "range": [
      2689,
      2691
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2691,
    "end": 2692,
    "range": [
      2691,
      2692
    ]
  },
  {
    "type": "Identifier",
    "value": "E2",
    "start": 2693,
    "end": 2695,
    "range": [
      2693,
      2695
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2695,
    "end": 2696,
    "range": [
      2695,
      2696
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 2697,
    "end": 2698,
    "range": [
      2697,
      2698
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2698,
    "end": 2699,
    "range": [
      2698,
      2699
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2699,
    "end": 2700,
    "range": [
      2699,
      2700
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 2709,
    "end": 2710,
    "range": [
      2709,
      2710
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2710,
    "end": 2711,
    "range": [
      2710,
      2711
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2712,
    "end": 2713,
    "range": [
      2712,
      2713
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2713,
    "end": 2714,
    "range": [
      2713,
      2714
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2714,
    "end": 2715,
    "range": [
      2714,
      2715
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 2716,
    "end": 2717,
    "range": [
      2716,
      2717
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2717,
    "end": 2718,
    "range": [
      2717,
      2718
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2719,
    "end": 2720,
    "range": [
      2719,
      2720
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2720,
    "end": 2721,
    "range": [
      2720,
      2721
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 2722,
    "end": 2723,
    "range": [
      2722,
      2723
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2723,
    "end": 2724,
    "range": [
      2723,
      2724
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2725,
    "end": 2727,
    "range": [
      2725,
      2727
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 2728,
    "end": 2729,
    "range": [
      2728,
      2729
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2734,
    "end": 2735,
    "range": [
      2734,
      2735
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2735,
    "end": 2736,
    "range": [
      2735,
      2736
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2737,
    "end": 2738,
    "range": [
      2737,
      2738
    ]
  },
  {
    "type": "Identifier",
    "value": "R1",
    "start": 2738,
    "end": 2740,
    "range": [
      2738,
      2740
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2740,
    "end": 2741,
    "range": [
      2740,
      2741
    ]
  },
  {
    "type": "Identifier",
    "value": "O1",
    "start": 2742,
    "end": 2744,
    "range": [
      2742,
      2744
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2744,
    "end": 2745,
    "range": [
      2744,
      2745
    ]
  },
  {
    "type": "Identifier",
    "value": "E1",
    "start": 2746,
    "end": 2748,
    "range": [
      2746,
      2748
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2748,
    "end": 2749,
    "range": [
      2748,
      2749
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2749,
    "end": 2750,
    "range": [
      2749,
      2750
    ]
  },
  {
    "type": "Identifier",
    "value": "self",
    "start": 2750,
    "end": 2754,
    "range": [
      2750,
      2754
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2754,
    "end": 2755,
    "range": [
      2754,
      2755
    ]
  },
  {
    "type": "Identifier",
    "value": "Kind",
    "start": 2756,
    "end": 2760,
    "range": [
      2756,
      2760
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2760,
    "end": 2761,
    "range": [
      2760,
      2761
    ]
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 2761,
    "end": 2762,
    "range": [
      2761,
      2762
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2762,
    "end": 2763,
    "range": [
      2762,
      2763
    ]
  },
  {
    "type": "Identifier",
    "value": "R1",
    "start": 2764,
    "end": 2766,
    "range": [
      2764,
      2766
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2766,
    "end": 2767,
    "range": [
      2766,
      2767
    ]
  },
  {
    "type": "Identifier",
    "value": "O1",
    "start": 2768,
    "end": 2770,
    "range": [
      2768,
      2770
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2770,
    "end": 2771,
    "range": [
      2770,
      2771
    ]
  },
  {
    "type": "Identifier",
    "value": "E1",
    "start": 2772,
    "end": 2774,
    "range": [
      2772,
      2774
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2774,
    "end": 2775,
    "range": [
      2774,
      2775
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 2776,
    "end": 2777,
    "range": [
      2776,
      2777
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2777,
    "end": 2778,
    "range": [
      2777,
      2778
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2778,
    "end": 2779,
    "range": [
      2778,
      2779
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2780,
    "end": 2782,
    "range": [
      2780,
      2782
    ]
  },
  {
    "type": "Identifier",
    "value": "Kind",
    "start": 2783,
    "end": 2787,
    "range": [
      2783,
      2787
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2787,
    "end": 2788,
    "range": [
      2787,
      2788
    ]
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 2788,
    "end": 2789,
    "range": [
      2788,
      2789
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2789,
    "end": 2790,
    "range": [
      2789,
      2790
    ]
  },
  {
    "type": "Identifier",
    "value": "R1",
    "start": 2791,
    "end": 2793,
    "range": [
      2791,
      2793
    ]
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 2794,
    "end": 2795,
    "range": [
      2794,
      2795
    ]
  },
  {
    "type": "Identifier",
    "value": "R2",
    "start": 2796,
    "end": 2798,
    "range": [
      2796,
      2798
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2798,
    "end": 2799,
    "range": [
      2798,
      2799
    ]
  },
  {
    "type": "Identifier",
    "value": "O2",
    "start": 2800,
    "end": 2802,
    "range": [
      2800,
      2802
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2803,
    "end": 2804,
    "range": [
      2803,
      2804
    ]
  },
  {
    "type": "Identifier",
    "value": "O1",
    "start": 2805,
    "end": 2807,
    "range": [
      2805,
      2807
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2807,
    "end": 2808,
    "range": [
      2807,
      2808
    ]
  },
  {
    "type": "Identifier",
    "value": "E2",
    "start": 2809,
    "end": 2811,
    "range": [
      2809,
      2811
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2812,
    "end": 2813,
    "range": [
      2812,
      2813
    ]
  },
  {
    "type": "Identifier",
    "value": "E1",
    "start": 2814,
    "end": 2816,
    "range": [
      2814,
      2816
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2816,
    "end": 2817,
    "range": [
      2816,
      2817
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 2818,
    "end": 2819,
    "range": [
      2818,
      2819
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2819,
    "end": 2820,
    "range": [
      2819,
      2820
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2825,
    "end": 2826,
    "range": [
      2825,
      2826
    ]
  },
  {
    "type": "Identifier",
    "value": "R1",
    "start": 2826,
    "end": 2828,
    "range": [
      2826,
      2828
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2828,
    "end": 2829,
    "range": [
      2828,
      2829
    ]
  },
  {
    "type": "Identifier",
    "value": "O1",
    "start": 2830,
    "end": 2832,
    "range": [
      2830,
      2832
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2832,
    "end": 2833,
    "range": [
      2832,
      2833
    ]
  },
  {
    "type": "Identifier",
    "value": "E1",
    "start": 2834,
    "end": 2836,
    "range": [
      2834,
      2836
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2836,
    "end": 2837,
    "range": [
      2836,
      2837
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 2838,
    "end": 2839,
    "range": [
      2838,
      2839
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2839,
    "end": 2840,
    "range": [
      2839,
      2840
    ]
  },
  {
    "type": "Identifier",
    "value": "R2",
    "start": 2841,
    "end": 2843,
    "range": [
      2841,
      2843
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2843,
    "end": 2844,
    "range": [
      2843,
      2844
    ]
  },
  {
    "type": "Identifier",
    "value": "O2",
    "start": 2845,
    "end": 2847,
    "range": [
      2845,
      2847
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2847,
    "end": 2848,
    "range": [
      2847,
      2848
    ]
  },
  {
    "type": "Identifier",
    "value": "E2",
    "start": 2849,
    "end": 2851,
    "range": [
      2849,
      2851
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2851,
    "end": 2852,
    "range": [
      2851,
      2852
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 2853,
    "end": 2854,
    "range": [
      2853,
      2854
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2854,
    "end": 2855,
    "range": [
      2854,
      2855
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 2856,
    "end": 2857,
    "range": [
      2856,
      2857
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2857,
    "end": 2858,
    "range": [
      2857,
      2858
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2858,
    "end": 2859,
    "range": [
      2858,
      2859
    ]
  },
  {
    "type": "Identifier",
    "value": "self",
    "start": 2868,
    "end": 2872,
    "range": [
      2868,
      2872
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2872,
    "end": 2873,
    "range": [
      2872,
      2873
    ]
  },
  {
    "type": "Identifier",
    "value": "Kind",
    "start": 2874,
    "end": 2878,
    "range": [
      2874,
      2878
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2878,
    "end": 2879,
    "range": [
      2878,
      2879
    ]
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 2879,
    "end": 2880,
    "range": [
      2879,
      2880
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2880,
    "end": 2881,
    "range": [
      2880,
      2881
    ]
  },
  {
    "type": "Identifier",
    "value": "R1",
    "start": 2882,
    "end": 2884,
    "range": [
      2882,
      2884
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2884,
    "end": 2885,
    "range": [
      2884,
      2885
    ]
  },
  {
    "type": "Identifier",
    "value": "O1",
    "start": 2886,
    "end": 2888,
    "range": [
      2886,
      2888
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2888,
    "end": 2889,
    "range": [
      2888,
      2889
    ]
  },
  {
    "type": "Identifier",
    "value": "E1",
    "start": 2890,
    "end": 2892,
    "range": [
      2890,
      2892
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2892,
    "end": 2893,
    "range": [
      2892,
      2893
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 2894,
    "end": 2895,
    "range": [
      2894,
      2895
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2895,
    "end": 2896,
    "range": [
      2895,
      2896
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2896,
    "end": 2897,
    "range": [
      2896,
      2897
    ]
  },
  {
    "type": "Identifier",
    "value": "that",
    "start": 2906,
    "end": 2910,
    "range": [
      2906,
      2910
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2910,
    "end": 2911,
    "range": [
      2910,
      2911
    ]
  },
  {
    "type": "Identifier",
    "value": "Kind",
    "start": 2912,
    "end": 2916,
    "range": [
      2912,
      2916
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2916,
    "end": 2917,
    "range": [
      2916,
      2917
    ]
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 2917,
    "end": 2918,
    "range": [
      2917,
      2918
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2918,
    "end": 2919,
    "range": [
      2918,
      2919
    ]
  },
  {
    "type": "Identifier",
    "value": "R2",
    "start": 2920,
    "end": 2922,
    "range": [
      2920,
      2922
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2922,
    "end": 2923,
    "range": [
      2922,
      2923
    ]
  },
  {
    "type": "Identifier",
    "value": "O2",
    "start": 2924,
    "end": 2926,
    "range": [
      2924,
      2926
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2926,
    "end": 2927,
    "range": [
      2926,
      2927
    ]
  },
  {
    "type": "Identifier",
    "value": "E2",
    "start": 2928,
    "end": 2930,
    "range": [
      2928,
      2930
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2930,
    "end": 2931,
    "range": [
      2930,
      2931
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 2932,
    "end": 2933,
    "range": [
      2932,
      2933
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2933,
    "end": 2934,
    "range": [
      2933,
      2934
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2934,
    "end": 2935,
    "range": [
      2934,
      2935
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 2944,
    "end": 2945,
    "range": [
      2944,
      2945
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2945,
    "end": 2946,
    "range": [
      2945,
      2946
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2947,
    "end": 2948,
    "range": [
      2947,
      2948
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2948,
    "end": 2949,
    "range": [
      2948,
      2949
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2949,
    "end": 2950,
    "range": [
      2949,
      2950
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 2951,
    "end": 2952,
    "range": [
      2951,
      2952
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2952,
    "end": 2953,
    "range": [
      2952,
      2953
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2954,
    "end": 2955,
    "range": [
      2954,
      2955
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2955,
    "end": 2956,
    "range": [
      2955,
      2956
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 2957,
    "end": 2958,
    "range": [
      2957,
      2958
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2958,
    "end": 2959,
    "range": [
      2958,
      2959
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2960,
    "end": 2962,
    "range": [
      2960,
      2962
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 2963,
    "end": 2964,
    "range": [
      2963,
      2964
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2969,
    "end": 2970,
    "range": [
      2969,
      2970
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2970,
    "end": 2971,
    "range": [
      2970,
      2971
    ]
  },
  {
    "type": "Identifier",
    "value": "Kind",
    "start": 2972,
    "end": 2976,
    "range": [
      2972,
      2976
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2976,
    "end": 2977,
    "range": [
      2976,
      2977
    ]
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 2977,
    "end": 2978,
    "range": [
      2977,
      2978
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2978,
    "end": 2979,
    "range": [
      2978,
      2979
    ]
  },
  {
    "type": "Identifier",
    "value": "R1",
    "start": 2980,
    "end": 2982,
    "range": [
      2980,
      2982
    ]
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 2983,
    "end": 2984,
    "range": [
      2983,
      2984
    ]
  },
  {
    "type": "Identifier",
    "value": "R2",
    "start": 2985,
    "end": 2987,
    "range": [
      2985,
      2987
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2987,
    "end": 2988,
    "range": [
      2987,
      2988
    ]
  },
  {
    "type": "Identifier",
    "value": "O1",
    "start": 2989,
    "end": 2991,
    "range": [
      2989,
      2991
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2992,
    "end": 2993,
    "range": [
      2992,
      2993
    ]
  },
  {
    "type": "Identifier",
    "value": "O2",
    "start": 2994,
    "end": 2996,
    "range": [
      2994,
      2996
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2996,
    "end": 2997,
    "range": [
      2996,
      2997
    ]
  },
  {
    "type": "Identifier",
    "value": "E1",
    "start": 2998,
    "end": 3000,
    "range": [
      2998,
      3000
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3001,
    "end": 3002,
    "range": [
      3001,
      3002
    ]
  },
  {
    "type": "Identifier",
    "value": "E2",
    "start": 3003,
    "end": 3005,
    "range": [
      3003,
      3005
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3005,
    "end": 3006,
    "range": [
      3005,
      3006
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 3007,
    "end": 3008,
    "range": [
      3007,
      3008
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3008,
    "end": 3009,
    "range": [
      3008,
      3009
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3010,
    "end": 3011,
    "range": [
      3010,
      3011
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3012,
    "end": 3014,
    "range": [
      3012,
      3014
    ]
  },
  {
    "type": "Identifier",
    "value": "dual",
    "start": 3019,
    "end": 3023,
    "range": [
      3019,
      3023
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3023,
    "end": 3024,
    "range": [
      3023,
      3024
    ]
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 3033,
    "end": 3034,
    "range": [
      3033,
      3034
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3034,
    "end": 3035,
    "range": [
      3034,
      3035
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3044,
    "end": 3045,
    "range": [
      3044,
      3045
    ]
  },
  {
    "type": "Identifier",
    "value": "R1",
    "start": 3045,
    "end": 3047,
    "range": [
      3045,
      3047
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3047,
    "end": 3048,
    "range": [
      3047,
      3048
    ]
  },
  {
    "type": "Identifier",
    "value": "O1",
    "start": 3049,
    "end": 3051,
    "range": [
      3049,
      3051
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3051,
    "end": 3052,
    "range": [
      3051,
      3052
    ]
  },
  {
    "type": "Identifier",
    "value": "E1",
    "start": 3053,
    "end": 3055,
    "range": [
      3053,
      3055
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3055,
    "end": 3056,
    "range": [
      3055,
      3056
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 3057,
    "end": 3058,
    "range": [
      3057,
      3058
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3058,
    "end": 3059,
    "range": [
      3058,
      3059
    ]
  },
  {
    "type": "Identifier",
    "value": "R2",
    "start": 3060,
    "end": 3062,
    "range": [
      3060,
      3062
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3062,
    "end": 3063,
    "range": [
      3062,
      3063
    ]
  },
  {
    "type": "Identifier",
    "value": "O2",
    "start": 3064,
    "end": 3066,
    "range": [
      3064,
      3066
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3066,
    "end": 3067,
    "range": [
      3066,
      3067
    ]
  },
  {
    "type": "Identifier",
    "value": "E2",
    "start": 3068,
    "end": 3070,
    "range": [
      3068,
      3070
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3070,
    "end": 3071,
    "range": [
      3070,
      3071
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 3072,
    "end": 3073,
    "range": [
      3072,
      3073
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3073,
    "end": 3074,
    "range": [
      3073,
      3074
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 3075,
    "end": 3076,
    "range": [
      3075,
      3076
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3076,
    "end": 3077,
    "range": [
      3076,
      3077
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3077,
    "end": 3078,
    "range": [
      3077,
      3078
    ]
  },
  {
    "type": "Identifier",
    "value": "self",
    "start": 3091,
    "end": 3095,
    "range": [
      3091,
      3095
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3095,
    "end": 3096,
    "range": [
      3095,
      3096
    ]
  },
  {
    "type": "Identifier",
    "value": "Kind",
    "start": 3097,
    "end": 3101,
    "range": [
      3097,
      3101
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3101,
    "end": 3102,
    "range": [
      3101,
      3102
    ]
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 3102,
    "end": 3103,
    "range": [
      3102,
      3103
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3103,
    "end": 3104,
    "range": [
      3103,
      3104
    ]
  },
  {
    "type": "Identifier",
    "value": "R1",
    "start": 3105,
    "end": 3107,
    "range": [
      3105,
      3107
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3107,
    "end": 3108,
    "range": [
      3107,
      3108
    ]
  },
  {
    "type": "Identifier",
    "value": "O1",
    "start": 3109,
    "end": 3111,
    "range": [
      3109,
      3111
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3111,
    "end": 3112,
    "range": [
      3111,
      3112
    ]
  },
  {
    "type": "Identifier",
    "value": "E1",
    "start": 3113,
    "end": 3115,
    "range": [
      3113,
      3115
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3115,
    "end": 3116,
    "range": [
      3115,
      3116
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 3117,
    "end": 3118,
    "range": [
      3117,
      3118
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3118,
    "end": 3119,
    "range": [
      3118,
      3119
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3119,
    "end": 3120,
    "range": [
      3119,
      3120
    ]
  },
  {
    "type": "Identifier",
    "value": "that",
    "start": 3133,
    "end": 3137,
    "range": [
      3133,
      3137
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3137,
    "end": 3138,
    "range": [
      3137,
      3138
    ]
  },
  {
    "type": "Identifier",
    "value": "Kind",
    "start": 3139,
    "end": 3143,
    "range": [
      3139,
      3143
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3143,
    "end": 3144,
    "range": [
      3143,
      3144
    ]
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 3144,
    "end": 3145,
    "range": [
      3144,
      3145
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3145,
    "end": 3146,
    "range": [
      3145,
      3146
    ]
  },
  {
    "type": "Identifier",
    "value": "R2",
    "start": 3147,
    "end": 3149,
    "range": [
      3147,
      3149
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3149,
    "end": 3150,
    "range": [
      3149,
      3150
    ]
  },
  {
    "type": "Identifier",
    "value": "O2",
    "start": 3151,
    "end": 3153,
    "range": [
      3151,
      3153
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3153,
    "end": 3154,
    "range": [
      3153,
      3154
    ]
  },
  {
    "type": "Identifier",
    "value": "E2",
    "start": 3155,
    "end": 3157,
    "range": [
      3155,
      3157
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3157,
    "end": 3158,
    "range": [
      3157,
      3158
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 3159,
    "end": 3160,
    "range": [
      3159,
      3160
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3160,
    "end": 3161,
    "range": [
      3160,
      3161
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3161,
    "end": 3162,
    "range": [
      3161,
      3162
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 3175,
    "end": 3176,
    "range": [
      3175,
      3176
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3176,
    "end": 3177,
    "range": [
      3176,
      3177
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3178,
    "end": 3179,
    "range": [
      3178,
      3179
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3179,
    "end": 3180,
    "range": [
      3179,
      3180
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3180,
    "end": 3181,
    "range": [
      3180,
      3181
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 3182,
    "end": 3183,
    "range": [
      3182,
      3183
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3183,
    "end": 3184,
    "range": [
      3183,
      3184
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 3185,
    "end": 3186,
    "range": [
      3185,
      3186
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3186,
    "end": 3187,
    "range": [
      3186,
      3187
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 3188,
    "end": 3189,
    "range": [
      3188,
      3189
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3189,
    "end": 3190,
    "range": [
      3189,
      3190
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3191,
    "end": 3193,
    "range": [
      3191,
      3193
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 3194,
    "end": 3195,
    "range": [
      3194,
      3195
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3204,
    "end": 3205,
    "range": [
      3204,
      3205
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3205,
    "end": 3206,
    "range": [
      3205,
      3206
    ]
  },
  {
    "type": "Identifier",
    "value": "Kind",
    "start": 3207,
    "end": 3211,
    "range": [
      3207,
      3211
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3211,
    "end": 3212,
    "range": [
      3211,
      3212
    ]
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 3212,
    "end": 3213,
    "range": [
      3212,
      3213
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3213,
    "end": 3214,
    "range": [
      3213,
      3214
    ]
  },
  {
    "type": "Identifier",
    "value": "R1",
    "start": 3215,
    "end": 3217,
    "range": [
      3215,
      3217
    ]
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 3218,
    "end": 3219,
    "range": [
      3218,
      3219
    ]
  },
  {
    "type": "Identifier",
    "value": "R2",
    "start": 3220,
    "end": 3222,
    "range": [
      3220,
      3222
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3222,
    "end": 3223,
    "range": [
      3222,
      3223
    ]
  },
  {
    "type": "Identifier",
    "value": "O1",
    "start": 3224,
    "end": 3226,
    "range": [
      3224,
      3226
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3227,
    "end": 3228,
    "range": [
      3227,
      3228
    ]
  },
  {
    "type": "Identifier",
    "value": "O2",
    "start": 3229,
    "end": 3231,
    "range": [
      3229,
      3231
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3231,
    "end": 3232,
    "range": [
      3231,
      3232
    ]
  },
  {
    "type": "Identifier",
    "value": "E1",
    "start": 3233,
    "end": 3235,
    "range": [
      3233,
      3235
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3236,
    "end": 3237,
    "range": [
      3236,
      3237
    ]
  },
  {
    "type": "Identifier",
    "value": "E2",
    "start": 3238,
    "end": 3240,
    "range": [
      3238,
      3240
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3240,
    "end": 3241,
    "range": [
      3240,
      3241
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 3242,
    "end": 3243,
    "range": [
      3242,
      3243
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3243,
    "end": 3244,
    "range": [
      3243,
      3244
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3245,
    "end": 3247,
    "range": [
      3245,
      3247
    ]
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 3248,
    "end": 3249,
    "range": [
      3248,
      3249
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3249,
    "end": 3250,
    "range": [
      3249,
      3250
    ]
  },
  {
    "type": "Identifier",
    "value": "map",
    "start": 3250,
    "end": 3253,
    "range": [
      3250,
      3253
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3253,
    "end": 3254,
    "range": [
      3253,
      3254
    ]
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 3254,
    "end": 3255,
    "range": [
      3254,
      3255
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3255,
    "end": 3256,
    "range": [
      3255,
      3256
    ]
  },
  {
    "type": "Identifier",
    "value": "product",
    "start": 3256,
    "end": 3263,
    "range": [
      3256,
      3263
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3263,
    "end": 3264,
    "range": [
      3263,
      3264
    ]
  },
  {
    "type": "Identifier",
    "value": "self",
    "start": 3264,
    "end": 3268,
    "range": [
      3264,
      3268
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3268,
    "end": 3269,
    "range": [
      3268,
      3269
    ]
  },
  {
    "type": "Identifier",
    "value": "that",
    "start": 3270,
    "end": 3274,
    "range": [
      3270,
      3274
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3274,
    "end": 3275,
    "range": [
      3274,
      3275
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3275,
    "end": 3276,
    "range": [
      3275,
      3276
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3277,
    "end": 3278,
    "range": [
      3277,
      3278
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3278,
    "end": 3279,
    "range": [
      3278,
      3279
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3279,
    "end": 3280,
    "range": [
      3279,
      3280
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3280,
    "end": 3281,
    "range": [
      3280,
      3281
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 3282,
    "end": 3283,
    "range": [
      3282,
      3283
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3283,
    "end": 3284,
    "range": [
      3283,
      3284
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3284,
    "end": 3285,
    "range": [
      3284,
      3285
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3286,
    "end": 3288,
    "range": [
      3286,
      3288
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 3289,
    "end": 3290,
    "range": [
      3289,
      3290
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3290,
    "end": 3291,
    "range": [
      3290,
      3291
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3291,
    "end": 3292,
    "range": [
      3291,
      3292
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3292,
    "end": 3293,
    "range": [
      3292,
      3293
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 3294,
    "end": 3295,
    "range": [
      3294,
      3295
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3295,
    "end": 3296,
    "range": [
      3295,
      3296
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3296,
    "end": 3297,
    "range": [
      3296,
      3297
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3302,
    "end": 3303,
    "range": [
      3302,
      3303
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3303,
    "end": 3304,
    "range": [
      3303,
      3304
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 3307,
    "end": 3313,
    "range": [
      3307,
      3313
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3314,
    "end": 3319,
    "range": [
      3314,
      3319
    ]
  },
  {
    "type": "Identifier",
    "value": "zipRight",
    "start": 3320,
    "end": 3328,
    "range": [
      3320,
      3328
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3329,
    "end": 3330,
    "range": [
      3329,
      3330
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3331,
    "end": 3332,
    "range": [
      3331,
      3332
    ]
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 3332,
    "end": 3333,
    "range": [
      3332,
      3333
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3334,
    "end": 3341,
    "range": [
      3334,
      3341
    ]
  },
  {
    "type": "Identifier",
    "value": "TypeLambda",
    "start": 3342,
    "end": 3352,
    "range": [
      3342,
      3352
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3352,
    "end": 3353,
    "range": [
      3352,
      3353
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3353,
    "end": 3354,
    "range": [
      3353,
      3354
    ]
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 3354,
    "end": 3355,
    "range": [
      3354,
      3355
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3355,
    "end": 3356,
    "range": [
      3355,
      3356
    ]
  },
  {
    "type": "Identifier",
    "value": "SemiApplicative",
    "start": 3357,
    "end": 3372,
    "range": [
      3357,
      3372
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3372,
    "end": 3373,
    "range": [
      3372,
      3373
    ]
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 3373,
    "end": 3374,
    "range": [
      3373,
      3374
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3374,
    "end": 3375,
    "range": [
      3374,
      3375
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3375,
    "end": 3376,
    "range": [
      3375,
      3376
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3376,
    "end": 3377,
    "range": [
      3376,
      3377
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3378,
    "end": 3379,
    "range": [
      3378,
      3379
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3384,
    "end": 3385,
    "range": [
      3384,
      3385
    ]
  },
  {
    "type": "Identifier",
    "value": "R2",
    "start": 3385,
    "end": 3387,
    "range": [
      3385,
      3387
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3387,
    "end": 3388,
    "range": [
      3387,
      3388
    ]
  },
  {
    "type": "Identifier",
    "value": "O2",
    "start": 3389,
    "end": 3391,
    "range": [
      3389,
      3391
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3391,
    "end": 3392,
    "range": [
      3391,
      3392
    ]
  },
  {
    "type": "Identifier",
    "value": "E2",
    "start": 3393,
    "end": 3395,
    "range": [
      3393,
      3395
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3395,
    "end": 3396,
    "range": [
      3395,
      3396
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 3397,
    "end": 3398,
    "range": [
      3397,
      3398
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3398,
    "end": 3399,
    "range": [
      3398,
      3399
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3399,
    "end": 3400,
    "range": [
      3399,
      3400
    ]
  },
  {
    "type": "Identifier",
    "value": "that",
    "start": 3409,
    "end": 3413,
    "range": [
      3409,
      3413
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3413,
    "end": 3414,
    "range": [
      3413,
      3414
    ]
  },
  {
    "type": "Identifier",
    "value": "Kind",
    "start": 3415,
    "end": 3419,
    "range": [
      3415,
      3419
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3419,
    "end": 3420,
    "range": [
      3419,
      3420
    ]
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 3420,
    "end": 3421,
    "range": [
      3420,
      3421
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3421,
    "end": 3422,
    "range": [
      3421,
      3422
    ]
  },
  {
    "type": "Identifier",
    "value": "R2",
    "start": 3423,
    "end": 3425,
    "range": [
      3423,
      3425
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3425,
    "end": 3426,
    "range": [
      3425,
      3426
    ]
  },
  {
    "type": "Identifier",
    "value": "O2",
    "start": 3427,
    "end": 3429,
    "range": [
      3427,
      3429
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3429,
    "end": 3430,
    "range": [
      3429,
      3430
    ]
  },
  {
    "type": "Identifier",
    "value": "E2",
    "start": 3431,
    "end": 3433,
    "range": [
      3431,
      3433
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3433,
    "end": 3434,
    "range": [
      3433,
      3434
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 3435,
    "end": 3436,
    "range": [
      3435,
      3436
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3436,
    "end": 3437,
    "range": [
      3436,
      3437
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3442,
    "end": 3443,
    "range": [
      3442,
      3443
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3443,
    "end": 3444,
    "range": [
      3443,
      3444
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3445,
    "end": 3446,
    "range": [
      3445,
      3446
    ]
  },
  {
    "type": "Identifier",
    "value": "R1",
    "start": 3446,
    "end": 3448,
    "range": [
      3446,
      3448
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3448,
    "end": 3449,
    "range": [
      3448,
      3449
    ]
  },
  {
    "type": "Identifier",
    "value": "O1",
    "start": 3450,
    "end": 3452,
    "range": [
      3450,
      3452
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3452,
    "end": 3453,
    "range": [
      3452,
      3453
    ]
  },
  {
    "type": "Identifier",
    "value": "E1",
    "start": 3454,
    "end": 3456,
    "range": [
      3454,
      3456
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3456,
    "end": 3457,
    "range": [
      3456,
      3457
    ]
  },
  {
    "type": "Identifier",
    "value": "_",
    "start": 3458,
    "end": 3459,
    "range": [
      3458,
      3459
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3459,
    "end": 3460,
    "range": [
      3459,
      3460
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3460,
    "end": 3461,
    "range": [
      3460,
      3461
    ]
  },
  {
    "type": "Identifier",
    "value": "self",
    "start": 3461,
    "end": 3465,
    "range": [
      3461,
      3465
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3465,
    "end": 3466,
    "range": [
      3465,
      3466
    ]
  },
  {
    "type": "Identifier",
    "value": "Kind",
    "start": 3467,
    "end": 3471,
    "range": [
      3467,
      3471
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3471,
    "end": 3472,
    "range": [
      3471,
      3472
    ]
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 3472,
    "end": 3473,
    "range": [
      3472,
      3473
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3473,
    "end": 3474,
    "range": [
      3473,
      3474
    ]
  },
  {
    "type": "Identifier",
    "value": "R1",
    "start": 3475,
    "end": 3477,
    "range": [
      3475,
      3477
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3477,
    "end": 3478,
    "range": [
      3477,
      3478
    ]
  },
  {
    "type": "Identifier",
    "value": "O1",
    "start": 3479,
    "end": 3481,
    "range": [
      3479,
      3481
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3481,
    "end": 3482,
    "range": [
      3481,
      3482
    ]
  },
  {
    "type": "Identifier",
    "value": "E1",
    "start": 3483,
    "end": 3485,
    "range": [
      3483,
      3485
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3485,
    "end": 3486,
    "range": [
      3485,
      3486
    ]
  },
  {
    "type": "Identifier",
    "value": "_",
    "start": 3487,
    "end": 3488,
    "range": [
      3487,
      3488
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3488,
    "end": 3489,
    "range": [
      3488,
      3489
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3489,
    "end": 3490,
    "range": [
      3489,
      3490
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3491,
    "end": 3493,
    "range": [
      3491,
      3493
    ]
  },
  {
    "type": "Identifier",
    "value": "Kind",
    "start": 3494,
    "end": 3498,
    "range": [
      3494,
      3498
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3498,
    "end": 3499,
    "range": [
      3498,
      3499
    ]
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 3499,
    "end": 3500,
    "range": [
      3499,
      3500
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3500,
    "end": 3501,
    "range": [
      3500,
      3501
    ]
  },
  {
    "type": "Identifier",
    "value": "R1",
    "start": 3502,
    "end": 3504,
    "range": [
      3502,
      3504
    ]
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 3505,
    "end": 3506,
    "range": [
      3505,
      3506
    ]
  },
  {
    "type": "Identifier",
    "value": "R2",
    "start": 3507,
    "end": 3509,
    "range": [
      3507,
      3509
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3509,
    "end": 3510,
    "range": [
      3509,
      3510
    ]
  },
  {
    "type": "Identifier",
    "value": "O2",
    "start": 3511,
    "end": 3513,
    "range": [
      3511,
      3513
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3514,
    "end": 3515,
    "range": [
      3514,
      3515
    ]
  },
  {
    "type": "Identifier",
    "value": "O1",
    "start": 3516,
    "end": 3518,
    "range": [
      3516,
      3518
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3518,
    "end": 3519,
    "range": [
      3518,
      3519
    ]
  },
  {
    "type": "Identifier",
    "value": "E2",
    "start": 3520,
    "end": 3522,
    "range": [
      3520,
      3522
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3523,
    "end": 3524,
    "range": [
      3523,
      3524
    ]
  },
  {
    "type": "Identifier",
    "value": "E1",
    "start": 3525,
    "end": 3527,
    "range": [
      3525,
      3527
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3527,
    "end": 3528,
    "range": [
      3527,
      3528
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 3529,
    "end": 3530,
    "range": [
      3529,
      3530
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3530,
    "end": 3531,
    "range": [
      3530,
      3531
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3536,
    "end": 3537,
    "range": [
      3536,
      3537
    ]
  },
  {
    "type": "Identifier",
    "value": "R1",
    "start": 3537,
    "end": 3539,
    "range": [
      3537,
      3539
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3539,
    "end": 3540,
    "range": [
      3539,
      3540
    ]
  },
  {
    "type": "Identifier",
    "value": "O1",
    "start": 3541,
    "end": 3543,
    "range": [
      3541,
      3543
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3543,
    "end": 3544,
    "range": [
      3543,
      3544
    ]
  },
  {
    "type": "Identifier",
    "value": "E1",
    "start": 3545,
    "end": 3547,
    "range": [
      3545,
      3547
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3547,
    "end": 3548,
    "range": [
      3547,
      3548
    ]
  },
  {
    "type": "Identifier",
    "value": "_",
    "start": 3549,
    "end": 3550,
    "range": [
      3549,
      3550
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3550,
    "end": 3551,
    "range": [
      3550,
      3551
    ]
  },
  {
    "type": "Identifier",
    "value": "R2",
    "start": 3552,
    "end": 3554,
    "range": [
      3552,
      3554
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3554,
    "end": 3555,
    "range": [
      3554,
      3555
    ]
  },
  {
    "type": "Identifier",
    "value": "O2",
    "start": 3556,
    "end": 3558,
    "range": [
      3556,
      3558
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3558,
    "end": 3559,
    "range": [
      3558,
      3559
    ]
  },
  {
    "type": "Identifier",
    "value": "E2",
    "start": 3560,
    "end": 3562,
    "range": [
      3560,
      3562
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3562,
    "end": 3563,
    "range": [
      3562,
      3563
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 3564,
    "end": 3565,
    "range": [
      3564,
      3565
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3565,
    "end": 3566,
    "range": [
      3565,
      3566
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3566,
    "end": 3567,
    "range": [
      3566,
      3567
    ]
  },
  {
    "type": "Identifier",
    "value": "self",
    "start": 3576,
    "end": 3580,
    "range": [
      3576,
      3580
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3580,
    "end": 3581,
    "range": [
      3580,
      3581
    ]
  },
  {
    "type": "Identifier",
    "value": "Kind",
    "start": 3582,
    "end": 3586,
    "range": [
      3582,
      3586
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3586,
    "end": 3587,
    "range": [
      3586,
      3587
    ]
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 3587,
    "end": 3588,
    "range": [
      3587,
      3588
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3588,
    "end": 3589,
    "range": [
      3588,
      3589
    ]
  },
  {
    "type": "Identifier",
    "value": "R1",
    "start": 3590,
    "end": 3592,
    "range": [
      3590,
      3592
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3592,
    "end": 3593,
    "range": [
      3592,
      3593
    ]
  },
  {
    "type": "Identifier",
    "value": "O1",
    "start": 3594,
    "end": 3596,
    "range": [
      3594,
      3596
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3596,
    "end": 3597,
    "range": [
      3596,
      3597
    ]
  },
  {
    "type": "Identifier",
    "value": "E1",
    "start": 3598,
    "end": 3600,
    "range": [
      3598,
      3600
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3600,
    "end": 3601,
    "range": [
      3600,
      3601
    ]
  },
  {
    "type": "Identifier",
    "value": "_",
    "start": 3602,
    "end": 3603,
    "range": [
      3602,
      3603
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3603,
    "end": 3604,
    "range": [
      3603,
      3604
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3604,
    "end": 3605,
    "range": [
      3604,
      3605
    ]
  },
  {
    "type": "Identifier",
    "value": "that",
    "start": 3614,
    "end": 3618,
    "range": [
      3614,
      3618
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3618,
    "end": 3619,
    "range": [
      3618,
      3619
    ]
  },
  {
    "type": "Identifier",
    "value": "Kind",
    "start": 3620,
    "end": 3624,
    "range": [
      3620,
      3624
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3624,
    "end": 3625,
    "range": [
      3624,
      3625
    ]
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 3625,
    "end": 3626,
    "range": [
      3625,
      3626
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3626,
    "end": 3627,
    "range": [
      3626,
      3627
    ]
  },
  {
    "type": "Identifier",
    "value": "R2",
    "start": 3628,
    "end": 3630,
    "range": [
      3628,
      3630
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3630,
    "end": 3631,
    "range": [
      3630,
      3631
    ]
  },
  {
    "type": "Identifier",
    "value": "O2",
    "start": 3632,
    "end": 3634,
    "range": [
      3632,
      3634
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3634,
    "end": 3635,
    "range": [
      3634,
      3635
    ]
  },
  {
    "type": "Identifier",
    "value": "E2",
    "start": 3636,
    "end": 3638,
    "range": [
      3636,
      3638
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3638,
    "end": 3639,
    "range": [
      3638,
      3639
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 3640,
    "end": 3641,
    "range": [
      3640,
      3641
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3641,
    "end": 3642,
    "range": [
      3641,
      3642
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3647,
    "end": 3648,
    "range": [
      3647,
      3648
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3648,
    "end": 3649,
    "range": [
      3648,
      3649
    ]
  },
  {
    "type": "Identifier",
    "value": "Kind",
    "start": 3650,
    "end": 3654,
    "range": [
      3650,
      3654
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3654,
    "end": 3655,
    "range": [
      3654,
      3655
    ]
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 3655,
    "end": 3656,
    "range": [
      3655,
      3656
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3656,
    "end": 3657,
    "range": [
      3656,
      3657
    ]
  },
  {
    "type": "Identifier",
    "value": "R1",
    "start": 3658,
    "end": 3660,
    "range": [
      3658,
      3660
    ]
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 3661,
    "end": 3662,
    "range": [
      3661,
      3662
    ]
  },
  {
    "type": "Identifier",
    "value": "R2",
    "start": 3663,
    "end": 3665,
    "range": [
      3663,
      3665
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3665,
    "end": 3666,
    "range": [
      3665,
      3666
    ]
  },
  {
    "type": "Identifier",
    "value": "O1",
    "start": 3667,
    "end": 3669,
    "range": [
      3667,
      3669
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3670,
    "end": 3671,
    "range": [
      3670,
      3671
    ]
  },
  {
    "type": "Identifier",
    "value": "O2",
    "start": 3672,
    "end": 3674,
    "range": [
      3672,
      3674
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3674,
    "end": 3675,
    "range": [
      3674,
      3675
    ]
  },
  {
    "type": "Identifier",
    "value": "E1",
    "start": 3676,
    "end": 3678,
    "range": [
      3676,
      3678
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3679,
    "end": 3680,
    "range": [
      3679,
      3680
    ]
  },
  {
    "type": "Identifier",
    "value": "E2",
    "start": 3681,
    "end": 3683,
    "range": [
      3681,
      3683
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3683,
    "end": 3684,
    "range": [
      3683,
      3684
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 3685,
    "end": 3686,
    "range": [
      3685,
      3686
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3686,
    "end": 3687,
    "range": [
      3686,
      3687
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3688,
    "end": 3689,
    "range": [
      3688,
      3689
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3690,
    "end": 3692,
    "range": [
      3690,
      3692
    ]
  },
  {
    "type": "Identifier",
    "value": "dual",
    "start": 3697,
    "end": 3701,
    "range": [
      3697,
      3701
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3701,
    "end": 3702,
    "range": [
      3701,
      3702
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 3702,
    "end": 3703,
    "range": [
      3702,
      3703
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3703,
    "end": 3704,
    "range": [
      3703,
      3704
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3705,
    "end": 3706,
    "range": [
      3705,
      3706
    ]
  },
  {
    "type": "Identifier",
    "value": "R1",
    "start": 3706,
    "end": 3708,
    "range": [
      3706,
      3708
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3708,
    "end": 3709,
    "range": [
      3708,
      3709
    ]
  },
  {
    "type": "Identifier",
    "value": "O1",
    "start": 3710,
    "end": 3712,
    "range": [
      3710,
      3712
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3712,
    "end": 3713,
    "range": [
      3712,
      3713
    ]
  },
  {
    "type": "Identifier",
    "value": "E1",
    "start": 3714,
    "end": 3716,
    "range": [
      3714,
      3716
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3716,
    "end": 3717,
    "range": [
      3716,
      3717
    ]
  },
  {
    "type": "Identifier",
    "value": "_",
    "start": 3718,
    "end": 3719,
    "range": [
      3718,
      3719
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3719,
    "end": 3720,
    "range": [
      3719,
      3720
    ]
  },
  {
    "type": "Identifier",
    "value": "R2",
    "start": 3721,
    "end": 3723,
    "range": [
      3721,
      3723
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3723,
    "end": 3724,
    "range": [
      3723,
      3724
    ]
  },
  {
    "type": "Identifier",
    "value": "O2",
    "start": 3725,
    "end": 3727,
    "range": [
      3725,
      3727
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3727,
    "end": 3728,
    "range": [
      3727,
      3728
    ]
  },
  {
    "type": "Identifier",
    "value": "E2",
    "start": 3729,
    "end": 3731,
    "range": [
      3729,
      3731
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3731,
    "end": 3732,
    "range": [
      3731,
      3732
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 3733,
    "end": 3734,
    "range": [
      3733,
      3734
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3734,
    "end": 3735,
    "range": [
      3734,
      3735
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3735,
    "end": 3736,
    "range": [
      3735,
      3736
    ]
  },
  {
    "type": "Identifier",
    "value": "self",
    "start": 3745,
    "end": 3749,
    "range": [
      3745,
      3749
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3749,
    "end": 3750,
    "range": [
      3749,
      3750
    ]
  },
  {
    "type": "Identifier",
    "value": "Kind",
    "start": 3751,
    "end": 3755,
    "range": [
      3751,
      3755
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3755,
    "end": 3756,
    "range": [
      3755,
      3756
    ]
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 3756,
    "end": 3757,
    "range": [
      3756,
      3757
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3757,
    "end": 3758,
    "range": [
      3757,
      3758
    ]
  },
  {
    "type": "Identifier",
    "value": "R1",
    "start": 3759,
    "end": 3761,
    "range": [
      3759,
      3761
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3761,
    "end": 3762,
    "range": [
      3761,
      3762
    ]
  },
  {
    "type": "Identifier",
    "value": "O1",
    "start": 3763,
    "end": 3765,
    "range": [
      3763,
      3765
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3765,
    "end": 3766,
    "range": [
      3765,
      3766
    ]
  },
  {
    "type": "Identifier",
    "value": "E1",
    "start": 3767,
    "end": 3769,
    "range": [
      3767,
      3769
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3769,
    "end": 3770,
    "range": [
      3769,
      3770
    ]
  },
  {
    "type": "Identifier",
    "value": "_",
    "start": 3771,
    "end": 3772,
    "range": [
      3771,
      3772
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3772,
    "end": 3773,
    "range": [
      3772,
      3773
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3773,
    "end": 3774,
    "range": [
      3773,
      3774
    ]
  },
  {
    "type": "Identifier",
    "value": "that",
    "start": 3783,
    "end": 3787,
    "range": [
      3783,
      3787
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3787,
    "end": 3788,
    "range": [
      3787,
      3788
    ]
  },
  {
    "type": "Identifier",
    "value": "Kind",
    "start": 3789,
    "end": 3793,
    "range": [
      3789,
      3793
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3793,
    "end": 3794,
    "range": [
      3793,
      3794
    ]
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 3794,
    "end": 3795,
    "range": [
      3794,
      3795
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3795,
    "end": 3796,
    "range": [
      3795,
      3796
    ]
  },
  {
    "type": "Identifier",
    "value": "R2",
    "start": 3797,
    "end": 3799,
    "range": [
      3797,
      3799
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3799,
    "end": 3800,
    "range": [
      3799,
      3800
    ]
  },
  {
    "type": "Identifier",
    "value": "O2",
    "start": 3801,
    "end": 3803,
    "range": [
      3801,
      3803
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3803,
    "end": 3804,
    "range": [
      3803,
      3804
    ]
  },
  {
    "type": "Identifier",
    "value": "E2",
    "start": 3805,
    "end": 3807,
    "range": [
      3805,
      3807
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3807,
    "end": 3808,
    "range": [
      3807,
      3808
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 3809,
    "end": 3810,
    "range": [
      3809,
      3810
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3810,
    "end": 3811,
    "range": [
      3810,
      3811
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3816,
    "end": 3817,
    "range": [
      3816,
      3817
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3817,
    "end": 3818,
    "range": [
      3817,
      3818
    ]
  },
  {
    "type": "Identifier",
    "value": "Kind",
    "start": 3819,
    "end": 3823,
    "range": [
      3819,
      3823
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3823,
    "end": 3824,
    "range": [
      3823,
      3824
    ]
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 3824,
    "end": 3825,
    "range": [
      3824,
      3825
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3825,
    "end": 3826,
    "range": [
      3825,
      3826
    ]
  },
  {
    "type": "Identifier",
    "value": "R1",
    "start": 3827,
    "end": 3829,
    "range": [
      3827,
      3829
    ]
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 3830,
    "end": 3831,
    "range": [
      3830,
      3831
    ]
  },
  {
    "type": "Identifier",
    "value": "R2",
    "start": 3832,
    "end": 3834,
    "range": [
      3832,
      3834
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3834,
    "end": 3835,
    "range": [
      3834,
      3835
    ]
  },
  {
    "type": "Identifier",
    "value": "O1",
    "start": 3836,
    "end": 3838,
    "range": [
      3836,
      3838
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3839,
    "end": 3840,
    "range": [
      3839,
      3840
    ]
  },
  {
    "type": "Identifier",
    "value": "O2",
    "start": 3841,
    "end": 3843,
    "range": [
      3841,
      3843
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3843,
    "end": 3844,
    "range": [
      3843,
      3844
    ]
  },
  {
    "type": "Identifier",
    "value": "E1",
    "start": 3845,
    "end": 3847,
    "range": [
      3845,
      3847
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3848,
    "end": 3849,
    "range": [
      3848,
      3849
    ]
  },
  {
    "type": "Identifier",
    "value": "E2",
    "start": 3850,
    "end": 3852,
    "range": [
      3850,
      3852
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3852,
    "end": 3853,
    "range": [
      3852,
      3853
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 3854,
    "end": 3855,
    "range": [
      3854,
      3855
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3855,
    "end": 3856,
    "range": [
      3855,
      3856
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3857,
    "end": 3859,
    "range": [
      3857,
      3859
    ]
  },
  {
    "type": "Identifier",
    "value": "zipWith",
    "start": 3860,
    "end": 3867,
    "range": [
      3860,
      3867
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3867,
    "end": 3868,
    "range": [
      3867,
      3868
    ]
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 3868,
    "end": 3869,
    "range": [
      3868,
      3869
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3869,
    "end": 3870,
    "range": [
      3869,
      3870
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3870,
    "end": 3871,
    "range": [
      3870,
      3871
    ]
  },
  {
    "type": "Identifier",
    "value": "self",
    "start": 3871,
    "end": 3875,
    "range": [
      3871,
      3875
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3875,
    "end": 3876,
    "range": [
      3875,
      3876
    ]
  },
  {
    "type": "Identifier",
    "value": "that",
    "start": 3877,
    "end": 3881,
    "range": [
      3877,
      3881
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3881,
    "end": 3882,
    "range": [
      3881,
      3882
    ]
  },
  {
    "type": "Identifier",
    "value": "SK",
    "start": 3883,
    "end": 3885,
    "range": [
      3883,
      3885
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3885,
    "end": 3886,
    "range": [
      3885,
      3886
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3886,
    "end": 3887,
    "range": [
      3886,
      3887
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3887,
    "end": 3888,
    "range": [
      3887,
      3888
    ]
  }
]
```
