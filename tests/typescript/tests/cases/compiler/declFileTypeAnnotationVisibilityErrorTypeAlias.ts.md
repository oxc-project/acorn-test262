__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Window",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 16
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
              "name": "someMethod",
              "optional": false,
              "typeAnnotation": null,
              "start": 23,
              "end": 33
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 23,
            "end": 36
          }
        ],
        "start": 17,
        "end": 38
      },
      "declare": false,
      "start": 0,
      "end": 38
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 50,
        "end": 51
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "W",
              "optional": false,
              "typeAnnotation": null,
              "start": 63,
              "end": 64
            },
            "typeParameters": null,
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Window",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 67,
                    "end": 73
                  },
                  "typeArguments": null,
                  "start": 67,
                  "end": 73
                },
                {
                  "type": "TSStringKeyword",
                  "start": 76,
                  "end": 82
                }
              ],
              "start": 67,
              "end": 82
            },
            "declare": false,
            "start": 58,
            "end": 83
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
                "start": 105,
                "end": 106
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
                        "name": "Window",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 130,
                        "end": 136
                      },
                      "typeParameters": null,
                      "superClass": null,
                      "superTypeArguments": null,
                      "implements": [],
                      "body": {
                        "type": "ClassBody",
                        "body": [],
                        "start": 137,
                        "end": 140
                      },
                      "abstract": false,
                      "declare": false,
                      "start": 124,
                      "end": 140
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 117,
                    "end": 140
                  },
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
                            "name": "p",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "W",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 163,
                                  "end": 164
                                },
                                "typeArguments": null,
                                "start": 163,
                                "end": 164
                              },
                              "start": 161,
                              "end": 164
                            },
                            "start": 160,
                            "end": 164
                          },
                          "init": null,
                          "definite": false,
                          "start": 160,
                          "end": 164
                        }
                      ],
                      "declare": false,
                      "start": 156,
                      "end": 165
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 149,
                    "end": 165
                  }
                ],
                "start": 107,
                "end": 212
              },
              "kind": "namespace",
              "declare": false,
              "global": false,
              "start": 95,
              "end": 212
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 88,
            "end": 212
          }
        ],
        "start": 52,
        "end": 214
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 40,
      "end": 214
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M1",
        "optional": false,
        "typeAnnotation": null,
        "start": 226,
        "end": 228
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
                "name": "W",
                "optional": false,
                "typeAnnotation": null,
                "start": 247,
                "end": 248
              },
              "typeParameters": null,
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Window",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 251,
                      "end": 257
                    },
                    "typeArguments": null,
                    "start": 251,
                    "end": 257
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 260,
                    "end": 266
                  }
                ],
                "start": 251,
                "end": 266
              },
              "declare": false,
              "start": 242,
              "end": 267
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 235,
            "end": 267
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
                "start": 289,
                "end": 290
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
                        "name": "Window",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 314,
                        "end": 320
                      },
                      "typeParameters": null,
                      "superClass": null,
                      "superTypeArguments": null,
                      "implements": [],
                      "body": {
                        "type": "ClassBody",
                        "body": [],
                        "start": 321,
                        "end": 324
                      },
                      "abstract": false,
                      "declare": false,
                      "start": 308,
                      "end": 324
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 301,
                    "end": 324
                  },
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
                            "name": "p",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "W",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 347,
                                  "end": 348
                                },
                                "typeArguments": null,
                                "start": 347,
                                "end": 348
                              },
                              "start": 345,
                              "end": 348
                            },
                            "start": 344,
                            "end": 348
                          },
                          "init": null,
                          "definite": false,
                          "start": 344,
                          "end": 348
                        }
                      ],
                      "declare": false,
                      "start": 340,
                      "end": 349
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 333,
                    "end": 349
                  }
                ],
                "start": 291,
                "end": 367
              },
              "kind": "namespace",
              "declare": false,
              "global": false,
              "start": 279,
              "end": 367
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 272,
            "end": 367
          }
        ],
        "start": 229,
        "end": 369
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 216,
      "end": 369
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M2",
        "optional": false,
        "typeAnnotation": null,
        "start": 381,
        "end": 383
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "private1",
              "optional": false,
              "typeAnnotation": null,
              "start": 396,
              "end": 404
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 405,
              "end": 412
            },
            "abstract": false,
            "declare": false,
            "start": 390,
            "end": 412
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "public1",
              "optional": false,
              "typeAnnotation": null,
              "start": 423,
              "end": 430
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 431,
              "end": 438
            },
            "abstract": false,
            "declare": false,
            "start": 417,
            "end": 438
          },
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m3",
              "optional": false,
              "typeAnnotation": null,
              "start": 453,
              "end": 455
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
                      "name": "public1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 479,
                      "end": 486
                    },
                    "typeParameters": null,
                    "superClass": null,
                    "superTypeArguments": null,
                    "implements": [],
                    "body": {
                      "type": "ClassBody",
                      "body": [],
                      "start": 487,
                      "end": 498
                    },
                    "abstract": false,
                    "declare": false,
                    "start": 473,
                    "end": 498
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": [],
                  "start": 466,
                  "end": 498
                }
              ],
              "start": 456,
              "end": 504
            },
            "kind": "namespace",
            "declare": false,
            "global": false,
            "start": 443,
            "end": 504
          },
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null,
              "start": 515,
              "end": 517
            },
            "typeParameters": null,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "private1",
                "optional": false,
                "typeAnnotation": null,
                "start": 520,
                "end": 528
              },
              "typeArguments": null,
              "start": 520,
              "end": 528
            },
            "declare": false,
            "start": 510,
            "end": 529
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSTypeAliasDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null,
                "start": 546,
                "end": 548
              },
              "typeParameters": null,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "private1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 551,
                  "end": 559
                },
                "typeArguments": null,
                "start": 551,
                "end": 559
              },
              "declare": false,
              "start": 541,
              "end": 560
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 534,
            "end": 560
          },
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "t11",
              "optional": false,
              "typeAnnotation": null,
              "start": 580,
              "end": 583
            },
            "typeParameters": null,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "public1",
                "optional": false,
                "typeAnnotation": null,
                "start": 586,
                "end": 593
              },
              "typeArguments": null,
              "start": 586,
              "end": 593
            },
            "declare": false,
            "start": 575,
            "end": 594
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSTypeAliasDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "t12",
                "optional": false,
                "typeAnnotation": null,
                "start": 611,
                "end": 614
              },
              "typeParameters": null,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "public1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 617,
                  "end": 624
                },
                "typeArguments": null,
                "start": 617,
                "end": 624
              },
              "declare": false,
              "start": 606,
              "end": 625
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 599,
            "end": 625
          },
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "t111",
              "optional": false,
              "typeAnnotation": null,
              "start": 636,
              "end": 640
            },
            "typeParameters": null,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 643,
                  "end": 645
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "public1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 646,
                  "end": 653
                },
                "start": 643,
                "end": 653
              },
              "typeArguments": null,
              "start": 643,
              "end": 653
            },
            "declare": false,
            "start": 631,
            "end": 654
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSTypeAliasDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "t112",
                "optional": false,
                "typeAnnotation": null,
                "start": 671,
                "end": 675
              },
              "typeParameters": null,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 678,
                    "end": 680
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "public1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 681,
                    "end": 688
                  },
                  "start": 678,
                  "end": 688
                },
                "typeArguments": null,
                "start": 678,
                "end": 688
              },
              "declare": false,
              "start": 666,
              "end": 689
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 659,
            "end": 689
          }
        ],
        "start": 384,
        "end": 700
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 371,
      "end": 700
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 700
}
```
