__ESTREE_TEST__:PASS:
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
