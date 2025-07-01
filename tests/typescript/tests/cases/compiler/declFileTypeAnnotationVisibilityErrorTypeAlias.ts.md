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
        "start": 47,
        "end": 48
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
              "start": 60,
              "end": 61
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
                    "start": 64,
                    "end": 70
                  },
                  "typeArguments": null,
                  "start": 64,
                  "end": 70
                },
                {
                  "type": "TSStringKeyword",
                  "start": 73,
                  "end": 79
                }
              ],
              "start": 64,
              "end": 79
            },
            "declare": false,
            "start": 55,
            "end": 80
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
                "start": 99,
                "end": 100
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
                        "start": 124,
                        "end": 130
                      },
                      "typeParameters": null,
                      "superClass": null,
                      "superTypeArguments": null,
                      "implements": [],
                      "body": {
                        "type": "ClassBody",
                        "body": [],
                        "start": 131,
                        "end": 134
                      },
                      "abstract": false,
                      "declare": false,
                      "start": 118,
                      "end": 134
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 111,
                    "end": 134
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
                                  "start": 157,
                                  "end": 158
                                },
                                "typeArguments": null,
                                "start": 157,
                                "end": 158
                              },
                              "start": 155,
                              "end": 158
                            },
                            "start": 154,
                            "end": 158
                          },
                          "init": null,
                          "definite": false,
                          "start": 154,
                          "end": 158
                        }
                      ],
                      "declare": false,
                      "start": 150,
                      "end": 159
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 143,
                    "end": 159
                  }
                ],
                "start": 101,
                "end": 206
              },
              "kind": "module",
              "declare": false,
              "global": false,
              "start": 92,
              "end": 206
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 85,
            "end": 206
          }
        ],
        "start": 49,
        "end": 208
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 40,
      "end": 208
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M1",
        "optional": false,
        "typeAnnotation": null,
        "start": 217,
        "end": 219
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
                "start": 238,
                "end": 239
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
                      "start": 242,
                      "end": 248
                    },
                    "typeArguments": null,
                    "start": 242,
                    "end": 248
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 251,
                    "end": 257
                  }
                ],
                "start": 242,
                "end": 257
              },
              "declare": false,
              "start": 233,
              "end": 258
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 226,
            "end": 258
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
                "start": 277,
                "end": 278
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
                        "start": 302,
                        "end": 308
                      },
                      "typeParameters": null,
                      "superClass": null,
                      "superTypeArguments": null,
                      "implements": [],
                      "body": {
                        "type": "ClassBody",
                        "body": [],
                        "start": 309,
                        "end": 312
                      },
                      "abstract": false,
                      "declare": false,
                      "start": 296,
                      "end": 312
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 289,
                    "end": 312
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
                                  "start": 335,
                                  "end": 336
                                },
                                "typeArguments": null,
                                "start": 335,
                                "end": 336
                              },
                              "start": 333,
                              "end": 336
                            },
                            "start": 332,
                            "end": 336
                          },
                          "init": null,
                          "definite": false,
                          "start": 332,
                          "end": 336
                        }
                      ],
                      "declare": false,
                      "start": 328,
                      "end": 337
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 321,
                    "end": 337
                  }
                ],
                "start": 279,
                "end": 355
              },
              "kind": "module",
              "declare": false,
              "global": false,
              "start": 270,
              "end": 355
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 263,
            "end": 355
          }
        ],
        "start": 220,
        "end": 357
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 210,
      "end": 357
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M2",
        "optional": false,
        "typeAnnotation": null,
        "start": 366,
        "end": 368
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
              "start": 381,
              "end": 389
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 390,
              "end": 397
            },
            "abstract": false,
            "declare": false,
            "start": 375,
            "end": 397
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
              "start": 408,
              "end": 415
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 416,
              "end": 423
            },
            "abstract": false,
            "declare": false,
            "start": 402,
            "end": 423
          },
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m3",
              "optional": false,
              "typeAnnotation": null,
              "start": 435,
              "end": 437
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
                      "start": 461,
                      "end": 468
                    },
                    "typeParameters": null,
                    "superClass": null,
                    "superTypeArguments": null,
                    "implements": [],
                    "body": {
                      "type": "ClassBody",
                      "body": [],
                      "start": 469,
                      "end": 480
                    },
                    "abstract": false,
                    "declare": false,
                    "start": 455,
                    "end": 480
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": [],
                  "start": 448,
                  "end": 480
                }
              ],
              "start": 438,
              "end": 486
            },
            "kind": "module",
            "declare": false,
            "global": false,
            "start": 428,
            "end": 486
          },
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null,
              "start": 497,
              "end": 499
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
                "start": 502,
                "end": 510
              },
              "typeArguments": null,
              "start": 502,
              "end": 510
            },
            "declare": false,
            "start": 492,
            "end": 511
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
                "start": 528,
                "end": 530
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
                  "start": 533,
                  "end": 541
                },
                "typeArguments": null,
                "start": 533,
                "end": 541
              },
              "declare": false,
              "start": 523,
              "end": 542
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 516,
            "end": 542
          },
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "t11",
              "optional": false,
              "typeAnnotation": null,
              "start": 562,
              "end": 565
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
                "start": 568,
                "end": 575
              },
              "typeArguments": null,
              "start": 568,
              "end": 575
            },
            "declare": false,
            "start": 557,
            "end": 576
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
                "start": 593,
                "end": 596
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
                  "start": 599,
                  "end": 606
                },
                "typeArguments": null,
                "start": 599,
                "end": 606
              },
              "declare": false,
              "start": 588,
              "end": 607
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 581,
            "end": 607
          },
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "t111",
              "optional": false,
              "typeAnnotation": null,
              "start": 618,
              "end": 622
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
                  "start": 625,
                  "end": 627
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "public1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 628,
                  "end": 635
                },
                "start": 625,
                "end": 635
              },
              "typeArguments": null,
              "start": 625,
              "end": 635
            },
            "declare": false,
            "start": 613,
            "end": 636
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
                "start": 653,
                "end": 657
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
                    "start": 660,
                    "end": 662
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "public1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 663,
                    "end": 670
                  },
                  "start": 660,
                  "end": 670
                },
                "typeArguments": null,
                "start": 660,
                "end": 670
              },
              "declare": false,
              "start": 648,
              "end": 671
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 641,
            "end": 671
          }
        ],
        "start": 369,
        "end": 682
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 359,
      "end": 682
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 682
}
```
