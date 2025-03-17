__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 683,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 38,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 16,
        "name": "Window",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 17,
        "end": 38,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 23,
            "end": 36,
            "key": {
              "type": "Identifier",
              "start": 23,
              "end": 33,
              "name": "someMethod",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 40,
      "end": 208,
      "id": {
        "type": "Identifier",
        "start": 47,
        "end": 48,
        "name": "M",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 49,
        "end": 208,
        "body": [
          {
            "type": "TSTypeAliasDeclaration",
            "start": 55,
            "end": 80,
            "id": {
              "type": "Identifier",
              "start": 60,
              "end": 61,
              "name": "W",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeParameters": null,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 64,
              "end": 79,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 64,
                  "end": 70,
                  "typeName": {
                    "type": "Identifier",
                    "start": 64,
                    "end": 70,
                    "name": "Window",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSStringKeyword",
                  "start": 73,
                  "end": 79
                }
              ]
            },
            "declare": false
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 85,
            "end": 206,
            "declaration": {
              "type": "TSModuleDeclaration",
              "start": 92,
              "end": 206,
              "id": {
                "type": "Identifier",
                "start": 99,
                "end": 100,
                "name": "N",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "body": {
                "type": "TSModuleBlock",
                "start": 101,
                "end": 206,
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 111,
                    "end": 134,
                    "declaration": {
                      "type": "ClassDeclaration",
                      "start": 118,
                      "end": 134,
                      "id": {
                        "type": "Identifier",
                        "start": 124,
                        "end": 130,
                        "name": "Window",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "superClass": null,
                      "body": {
                        "type": "ClassBody",
                        "start": 131,
                        "end": 134,
                        "body": []
                      },
                      "decorators": [],
                      "typeParameters": null,
                      "implements": [],
                      "abstract": false,
                      "declare": false,
                      "superTypeArguments": null
                    },
                    "specifiers": [],
                    "source": null,
                    "attributes": [],
                    "exportKind": "value"
                  },
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 143,
                    "end": 159,
                    "declaration": {
                      "type": "VariableDeclaration",
                      "start": 150,
                      "end": 159,
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 154,
                          "end": 158,
                          "id": {
                            "type": "Identifier",
                            "start": 154,
                            "end": 158,
                            "name": "p",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 155,
                              "end": 158,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 157,
                                "end": 158,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 157,
                                  "end": 158,
                                  "name": "W",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
                              }
                            },
                            "decorators": [],
                            "optional": false
                          },
                          "init": null,
                          "definite": false
                        }
                      ],
                      "kind": "var",
                      "declare": false
                    },
                    "specifiers": [],
                    "source": null,
                    "attributes": [],
                    "exportKind": "value"
                  }
                ]
              },
              "kind": "module",
              "declare": false,
              "global": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 210,
      "end": 357,
      "id": {
        "type": "Identifier",
        "start": 217,
        "end": 219,
        "name": "M1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 220,
        "end": 357,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 226,
            "end": 258,
            "declaration": {
              "type": "TSTypeAliasDeclaration",
              "start": 233,
              "end": 258,
              "id": {
                "type": "Identifier",
                "start": 238,
                "end": 239,
                "name": "W",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeParameters": null,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 242,
                "end": 257,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 242,
                    "end": 248,
                    "typeName": {
                      "type": "Identifier",
                      "start": 242,
                      "end": 248,
                      "name": "Window",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 251,
                    "end": 257
                  }
                ]
              },
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "type"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 263,
            "end": 355,
            "declaration": {
              "type": "TSModuleDeclaration",
              "start": 270,
              "end": 355,
              "id": {
                "type": "Identifier",
                "start": 277,
                "end": 278,
                "name": "N",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "body": {
                "type": "TSModuleBlock",
                "start": 279,
                "end": 355,
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 289,
                    "end": 312,
                    "declaration": {
                      "type": "ClassDeclaration",
                      "start": 296,
                      "end": 312,
                      "id": {
                        "type": "Identifier",
                        "start": 302,
                        "end": 308,
                        "name": "Window",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "superClass": null,
                      "body": {
                        "type": "ClassBody",
                        "start": 309,
                        "end": 312,
                        "body": []
                      },
                      "decorators": [],
                      "typeParameters": null,
                      "implements": [],
                      "abstract": false,
                      "declare": false,
                      "superTypeArguments": null
                    },
                    "specifiers": [],
                    "source": null,
                    "attributes": [],
                    "exportKind": "value"
                  },
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 321,
                    "end": 337,
                    "declaration": {
                      "type": "VariableDeclaration",
                      "start": 328,
                      "end": 337,
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 332,
                          "end": 336,
                          "id": {
                            "type": "Identifier",
                            "start": 332,
                            "end": 336,
                            "name": "p",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 333,
                              "end": 336,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 335,
                                "end": 336,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 335,
                                  "end": 336,
                                  "name": "W",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
                              }
                            },
                            "decorators": [],
                            "optional": false
                          },
                          "init": null,
                          "definite": false
                        }
                      ],
                      "kind": "var",
                      "declare": false
                    },
                    "specifiers": [],
                    "source": null,
                    "attributes": [],
                    "exportKind": "value"
                  }
                ]
              },
              "kind": "module",
              "declare": false,
              "global": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 359,
      "end": 682,
      "id": {
        "type": "Identifier",
        "start": 366,
        "end": 368,
        "name": "M2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 369,
        "end": 682,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 375,
            "end": 397,
            "id": {
              "type": "Identifier",
              "start": 381,
              "end": 389,
              "name": "private1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 390,
              "end": 397,
              "body": []
            },
            "decorators": [],
            "typeParameters": null,
            "implements": [],
            "abstract": false,
            "declare": false,
            "superTypeArguments": null
          },
          {
            "type": "ClassDeclaration",
            "start": 402,
            "end": 423,
            "id": {
              "type": "Identifier",
              "start": 408,
              "end": 415,
              "name": "public1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 416,
              "end": 423,
              "body": []
            },
            "decorators": [],
            "typeParameters": null,
            "implements": [],
            "abstract": false,
            "declare": false,
            "superTypeArguments": null
          },
          {
            "type": "TSModuleDeclaration",
            "start": 428,
            "end": 486,
            "id": {
              "type": "Identifier",
              "start": 435,
              "end": 437,
              "name": "m3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "body": {
              "type": "TSModuleBlock",
              "start": 438,
              "end": 486,
              "body": [
                {
                  "type": "ExportNamedDeclaration",
                  "start": 448,
                  "end": 480,
                  "declaration": {
                    "type": "ClassDeclaration",
                    "start": 455,
                    "end": 480,
                    "id": {
                      "type": "Identifier",
                      "start": 461,
                      "end": 468,
                      "name": "public1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "superClass": null,
                    "body": {
                      "type": "ClassBody",
                      "start": 469,
                      "end": 480,
                      "body": []
                    },
                    "decorators": [],
                    "typeParameters": null,
                    "implements": [],
                    "abstract": false,
                    "declare": false,
                    "superTypeArguments": null
                  },
                  "specifiers": [],
                  "source": null,
                  "attributes": [],
                  "exportKind": "value"
                }
              ]
            },
            "kind": "module",
            "declare": false,
            "global": false
          },
          {
            "type": "TSTypeAliasDeclaration",
            "start": 492,
            "end": 511,
            "id": {
              "type": "Identifier",
              "start": 497,
              "end": 499,
              "name": "t1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeParameters": null,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 502,
              "end": 510,
              "typeName": {
                "type": "Identifier",
                "start": 502,
                "end": 510,
                "name": "private1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "declare": false
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 516,
            "end": 542,
            "declaration": {
              "type": "TSTypeAliasDeclaration",
              "start": 523,
              "end": 542,
              "id": {
                "type": "Identifier",
                "start": 528,
                "end": 530,
                "name": "t2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeParameters": null,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 533,
                "end": 541,
                "typeName": {
                  "type": "Identifier",
                  "start": 533,
                  "end": 541,
                  "name": "private1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "type"
          },
          {
            "type": "TSTypeAliasDeclaration",
            "start": 557,
            "end": 576,
            "id": {
              "type": "Identifier",
              "start": 562,
              "end": 565,
              "name": "t11",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeParameters": null,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 568,
              "end": 575,
              "typeName": {
                "type": "Identifier",
                "start": 568,
                "end": 575,
                "name": "public1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "declare": false
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 581,
            "end": 607,
            "declaration": {
              "type": "TSTypeAliasDeclaration",
              "start": 588,
              "end": 607,
              "id": {
                "type": "Identifier",
                "start": 593,
                "end": 596,
                "name": "t12",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeParameters": null,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 599,
                "end": 606,
                "typeName": {
                  "type": "Identifier",
                  "start": 599,
                  "end": 606,
                  "name": "public1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "type"
          },
          {
            "type": "TSTypeAliasDeclaration",
            "start": 613,
            "end": 636,
            "id": {
              "type": "Identifier",
              "start": 618,
              "end": 622,
              "name": "t111",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeParameters": null,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 625,
              "end": 635,
              "typeName": {
                "type": "TSQualifiedName",
                "start": 625,
                "end": 635,
                "left": {
                  "type": "Identifier",
                  "start": 625,
                  "end": 627,
                  "name": "m3",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "right": {
                  "type": "Identifier",
                  "start": 628,
                  "end": 635,
                  "name": "public1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "typeArguments": null
            },
            "declare": false
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 641,
            "end": 671,
            "declaration": {
              "type": "TSTypeAliasDeclaration",
              "start": 648,
              "end": 671,
              "id": {
                "type": "Identifier",
                "start": 653,
                "end": 657,
                "name": "t112",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeParameters": null,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 660,
                "end": 670,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 660,
                  "end": 670,
                  "left": {
                    "type": "Identifier",
                    "start": 660,
                    "end": 662,
                    "name": "m3",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 663,
                    "end": 670,
                    "name": "public1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "typeArguments": null
              },
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "type"
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
