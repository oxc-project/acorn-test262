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
        "name": "m1",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 12
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
                "name": "m1_M1_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 36,
                "end": 48
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
                        "name": "c1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 72,
                        "end": 74
                      },
                      "typeParameters": null,
                      "superClass": null,
                      "superTypeArguments": null,
                      "implements": [],
                      "body": {
                        "type": "ClassBody",
                        "body": [],
                        "start": 75,
                        "end": 86
                      },
                      "abstract": false,
                      "declare": false,
                      "start": 66,
                      "end": 86
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 59,
                    "end": 86
                  },
                  {
                    "type": "ExportNamedDeclaration",
                    "declaration": {
                      "type": "FunctionDeclaration",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "f1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 111,
                        "end": 113
                      },
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "NewExpression",
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "c1",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 141,
                                "end": 143
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 137,
                              "end": 143
                            },
                            "start": 130,
                            "end": 144
                          }
                        ],
                        "start": 116,
                        "end": 154
                      },
                      "expression": false,
                      "start": 102,
                      "end": 154
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 95,
                    "end": 154
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
                            "name": "v1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 174,
                            "end": 176
                          },
                          "init": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "c1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 179,
                            "end": 181
                          },
                          "definite": false,
                          "start": 174,
                          "end": 181
                        }
                      ],
                      "declare": false,
                      "start": 170,
                      "end": 182
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 163,
                    "end": 182
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
                            "name": "v2",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "c1",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 206,
                                  "end": 208
                                },
                                "typeArguments": null,
                                "start": 206,
                                "end": 208
                              },
                              "start": 204,
                              "end": 208
                            },
                            "start": 202,
                            "end": 208
                          },
                          "init": null,
                          "definite": false,
                          "start": 202,
                          "end": 208
                        }
                      ],
                      "declare": false,
                      "start": 198,
                      "end": 209
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 191,
                    "end": 209
                  }
                ],
                "start": 49,
                "end": 215
              },
              "kind": "namespace",
              "declare": false,
              "global": false,
              "start": 26,
              "end": 215
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 19,
            "end": 215
          },
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m1_M2_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 231,
              "end": 244
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
                      "name": "c1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 268,
                      "end": 270
                    },
                    "typeParameters": null,
                    "superClass": null,
                    "superTypeArguments": null,
                    "implements": [],
                    "body": {
                      "type": "ClassBody",
                      "body": [],
                      "start": 271,
                      "end": 282
                    },
                    "abstract": false,
                    "declare": false,
                    "start": 262,
                    "end": 282
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": [],
                  "start": 255,
                  "end": 282
                },
                {
                  "type": "ExportNamedDeclaration",
                  "declaration": {
                    "type": "FunctionDeclaration",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 307,
                      "end": 309
                    },
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "NewExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "c1",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 337,
                              "end": 339
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "start": 333,
                            "end": 339
                          },
                          "start": 326,
                          "end": 340
                        }
                      ],
                      "start": 312,
                      "end": 350
                    },
                    "expression": false,
                    "start": 298,
                    "end": 350
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": [],
                  "start": 291,
                  "end": 350
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
                          "name": "v1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 370,
                          "end": 372
                        },
                        "init": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 375,
                          "end": 377
                        },
                        "definite": false,
                        "start": 370,
                        "end": 377
                      }
                    ],
                    "declare": false,
                    "start": 366,
                    "end": 378
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": [],
                  "start": 359,
                  "end": 378
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
                          "name": "v2",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "c1",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 402,
                                "end": 404
                              },
                              "typeArguments": null,
                              "start": 402,
                              "end": 404
                            },
                            "start": 400,
                            "end": 404
                          },
                          "start": 398,
                          "end": 404
                        },
                        "init": null,
                        "definite": false,
                        "start": 398,
                        "end": 404
                      }
                    ],
                    "declare": false,
                    "start": 394,
                    "end": 405
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": [],
                  "start": 387,
                  "end": 405
                }
              ],
              "start": 245,
              "end": 411
            },
            "kind": "namespace",
            "declare": false,
            "global": false,
            "start": 221,
            "end": 411
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSModuleDeclaration",
              "id": {
                "type": "Literal",
                "value": "m1_M3_public",
                "raw": "\"m1_M3_public\"",
                "start": 439,
                "end": 453
              },
              "body": {
                "type": "TSModuleBlock",
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "declaration": {
                      "type": "TSDeclareFunction",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "f1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 480,
                        "end": 482
                      },
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": null,
                      "expression": false,
                      "start": 471,
                      "end": 485
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 464,
                    "end": 485
                  },
                  {
                    "type": "ExportNamedDeclaration",
                    "declaration": {
                      "type": "ClassDeclaration",
                      "decorators": [],
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 507,
                        "end": 509
                      },
                      "typeParameters": null,
                      "superClass": null,
                      "superTypeArguments": null,
                      "implements": [],
                      "body": {
                        "type": "ClassBody",
                        "body": [],
                        "start": 510,
                        "end": 521
                      },
                      "abstract": false,
                      "declare": false,
                      "start": 501,
                      "end": 521
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 494,
                    "end": 521
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
                            "name": "v1",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeLiteral",
                                "members": [
                                  {
                                    "type": "TSConstructSignatureDeclaration",
                                    "typeParameters": null,
                                    "params": [],
                                    "returnType": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "c1",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 555,
                                          "end": 557
                                        },
                                        "typeArguments": null,
                                        "start": 555,
                                        "end": 557
                                      },
                                      "start": 553,
                                      "end": 557
                                    },
                                    "start": 547,
                                    "end": 558
                                  }
                                ],
                                "start": 545,
                                "end": 560
                              },
                              "start": 543,
                              "end": 560
                            },
                            "start": 541,
                            "end": 560
                          },
                          "init": null,
                          "definite": false,
                          "start": 541,
                          "end": 560
                        }
                      ],
                      "declare": false,
                      "start": 537,
                      "end": 561
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 530,
                    "end": 561
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
                            "name": "v2",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "c1",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 585,
                                  "end": 587
                                },
                                "typeArguments": null,
                                "start": 585,
                                "end": 587
                              },
                              "start": 583,
                              "end": 587
                            },
                            "start": 581,
                            "end": 587
                          },
                          "init": null,
                          "definite": false,
                          "start": 581,
                          "end": 587
                        }
                      ],
                      "declare": false,
                      "start": 577,
                      "end": 588
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 570,
                    "end": 588
                  }
                ],
                "start": 454,
                "end": 594
              },
              "kind": "module",
              "declare": true,
              "global": false,
              "start": 424,
              "end": 594
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 417,
            "end": 594
          },
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Literal",
              "value": "m1_M4_private",
              "raw": "\"m1_M4_private\"",
              "start": 615,
              "end": 630
            },
            "body": {
              "type": "TSModuleBlock",
              "body": [
                {
                  "type": "ExportNamedDeclaration",
                  "declaration": {
                    "type": "TSDeclareFunction",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 657,
                      "end": 659
                    },
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": null,
                    "expression": false,
                    "start": 648,
                    "end": 662
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": [],
                  "start": 641,
                  "end": 662
                },
                {
                  "type": "ExportNamedDeclaration",
                  "declaration": {
                    "type": "ClassDeclaration",
                    "decorators": [],
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 684,
                      "end": 686
                    },
                    "typeParameters": null,
                    "superClass": null,
                    "superTypeArguments": null,
                    "implements": [],
                    "body": {
                      "type": "ClassBody",
                      "body": [],
                      "start": 687,
                      "end": 698
                    },
                    "abstract": false,
                    "declare": false,
                    "start": 678,
                    "end": 698
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": [],
                  "start": 671,
                  "end": 698
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
                          "name": "v1",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeLiteral",
                              "members": [
                                {
                                  "type": "TSConstructSignatureDeclaration",
                                  "typeParameters": null,
                                  "params": [],
                                  "returnType": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "c1",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 732,
                                        "end": 734
                                      },
                                      "typeArguments": null,
                                      "start": 732,
                                      "end": 734
                                    },
                                    "start": 730,
                                    "end": 734
                                  },
                                  "start": 724,
                                  "end": 735
                                }
                              ],
                              "start": 722,
                              "end": 737
                            },
                            "start": 720,
                            "end": 737
                          },
                          "start": 718,
                          "end": 737
                        },
                        "init": null,
                        "definite": false,
                        "start": 718,
                        "end": 737
                      }
                    ],
                    "declare": false,
                    "start": 714,
                    "end": 738
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": [],
                  "start": 707,
                  "end": 738
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
                          "name": "v2",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "c1",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 762,
                                "end": 764
                              },
                              "typeArguments": null,
                              "start": 762,
                              "end": 764
                            },
                            "start": 760,
                            "end": 764
                          },
                          "start": 758,
                          "end": 764
                        },
                        "init": null,
                        "definite": false,
                        "start": 758,
                        "end": 764
                      }
                    ],
                    "declare": false,
                    "start": 754,
                    "end": 765
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": [],
                  "start": 747,
                  "end": 765
                }
              ],
              "start": 631,
              "end": 771
            },
            "kind": "module",
            "declare": true,
            "global": false,
            "start": 600,
            "end": 771
          },
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m1_im1_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 784,
              "end": 798
            },
            "moduleReference": {
              "type": "Identifier",
              "decorators": [],
              "name": "m1_M1_public",
              "optional": false,
              "typeAnnotation": null,
              "start": 801,
              "end": 813
            },
            "importKind": "value",
            "start": 777,
            "end": 814
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
                    "name": "m1_im1_private_v1_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 830,
                    "end": 854
                  },
                  "init": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m1_im1_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 857,
                      "end": 871
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 872,
                      "end": 874
                    },
                    "optional": false,
                    "computed": false,
                    "start": 857,
                    "end": 874
                  },
                  "definite": false,
                  "start": 830,
                  "end": 874
                }
              ],
              "declare": false,
              "start": 826,
              "end": 875
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 819,
            "end": 875
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
                    "name": "m1_im1_private_v2_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 891,
                    "end": 915
                  },
                  "init": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "m1_im1_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 922,
                        "end": 936
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 937,
                        "end": 939
                      },
                      "optional": false,
                      "computed": false,
                      "start": 922,
                      "end": 939
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 918,
                    "end": 941
                  },
                  "definite": false,
                  "start": 891,
                  "end": 941
                }
              ],
              "declare": false,
              "start": 887,
              "end": 942
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 880,
            "end": 942
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
                    "name": "m1_im1_private_v3_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 958,
                    "end": 982
                  },
                  "init": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m1_im1_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 985,
                      "end": 999
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1000,
                      "end": 1002
                    },
                    "optional": false,
                    "computed": false,
                    "start": 985,
                    "end": 1002
                  },
                  "definite": false,
                  "start": 958,
                  "end": 1002
                }
              ],
              "declare": false,
              "start": 954,
              "end": 1003
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 947,
            "end": 1003
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
                    "name": "m1_im1_private_v4_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1019,
                    "end": 1043
                  },
                  "init": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "m1_im1_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1046,
                        "end": 1060
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "f1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1061,
                        "end": 1063
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1046,
                      "end": 1063
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 1046,
                    "end": 1065
                  },
                  "definite": false,
                  "start": 1019,
                  "end": 1065
                }
              ],
              "declare": false,
              "start": 1015,
              "end": 1066
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1008,
            "end": 1066
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
                  "name": "m1_im1_private_v1_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1075,
                  "end": 1100
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m1_im1_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1103,
                    "end": 1117
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1118,
                    "end": 1120
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1103,
                  "end": 1120
                },
                "definite": false,
                "start": 1075,
                "end": 1120
              }
            ],
            "declare": false,
            "start": 1071,
            "end": 1121
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
                  "name": "m1_im1_private_v2_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1130,
                  "end": 1155
                },
                "init": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m1_im1_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1162,
                      "end": 1176
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1177,
                      "end": 1179
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1162,
                    "end": 1179
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "start": 1158,
                  "end": 1181
                },
                "definite": false,
                "start": 1130,
                "end": 1181
              }
            ],
            "declare": false,
            "start": 1126,
            "end": 1182
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
                  "name": "m1_im1_private_v3_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1191,
                  "end": 1216
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m1_im1_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1219,
                    "end": 1233
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1234,
                    "end": 1236
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1219,
                  "end": 1236
                },
                "definite": false,
                "start": 1191,
                "end": 1236
              }
            ],
            "declare": false,
            "start": 1187,
            "end": 1237
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
                  "name": "m1_im1_private_v4_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1246,
                  "end": 1271
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m1_im1_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1274,
                      "end": 1288
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1289,
                      "end": 1291
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1274,
                    "end": 1291
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 1274,
                  "end": 1293
                },
                "definite": false,
                "start": 1246,
                "end": 1293
              }
            ],
            "declare": false,
            "start": 1242,
            "end": 1294
          },
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m1_im2_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 1308,
              "end": 1322
            },
            "moduleReference": {
              "type": "Identifier",
              "decorators": [],
              "name": "m1_M2_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 1325,
              "end": 1338
            },
            "importKind": "value",
            "start": 1301,
            "end": 1339
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
                    "name": "m1_im2_private_v1_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1355,
                    "end": 1379
                  },
                  "init": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m1_im2_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1382,
                      "end": 1396
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1397,
                      "end": 1399
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1382,
                    "end": 1399
                  },
                  "definite": false,
                  "start": 1355,
                  "end": 1399
                }
              ],
              "declare": false,
              "start": 1351,
              "end": 1400
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1344,
            "end": 1400
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
                    "name": "m1_im2_private_v2_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1416,
                    "end": 1440
                  },
                  "init": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "m1_im2_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1447,
                        "end": 1461
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1462,
                        "end": 1464
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1447,
                      "end": 1464
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 1443,
                    "end": 1466
                  },
                  "definite": false,
                  "start": 1416,
                  "end": 1466
                }
              ],
              "declare": false,
              "start": 1412,
              "end": 1467
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1405,
            "end": 1467
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
                    "name": "m1_im2_private_v3_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1483,
                    "end": 1507
                  },
                  "init": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m1_im2_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1510,
                      "end": 1524
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1525,
                      "end": 1527
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1510,
                    "end": 1527
                  },
                  "definite": false,
                  "start": 1483,
                  "end": 1527
                }
              ],
              "declare": false,
              "start": 1479,
              "end": 1528
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1472,
            "end": 1528
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
                    "name": "m1_im2_private_v4_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1544,
                    "end": 1568
                  },
                  "init": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "m1_im2_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1571,
                        "end": 1585
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "f1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1586,
                        "end": 1588
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1571,
                      "end": 1588
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 1571,
                    "end": 1590
                  },
                  "definite": false,
                  "start": 1544,
                  "end": 1590
                }
              ],
              "declare": false,
              "start": 1540,
              "end": 1591
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1533,
            "end": 1591
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
                  "name": "m1_im2_private_v1_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1600,
                  "end": 1625
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m1_im2_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1628,
                    "end": 1642
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1643,
                    "end": 1645
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1628,
                  "end": 1645
                },
                "definite": false,
                "start": 1600,
                "end": 1645
              }
            ],
            "declare": false,
            "start": 1596,
            "end": 1646
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
                  "name": "m1_im2_private_v2_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1655,
                  "end": 1680
                },
                "init": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m1_im2_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1687,
                      "end": 1701
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1702,
                      "end": 1704
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1687,
                    "end": 1704
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "start": 1683,
                  "end": 1706
                },
                "definite": false,
                "start": 1655,
                "end": 1706
              }
            ],
            "declare": false,
            "start": 1651,
            "end": 1707
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
                  "name": "m1_im2_private_v3_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1716,
                  "end": 1741
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m1_im2_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1744,
                    "end": 1758
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1759,
                    "end": 1761
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1744,
                  "end": 1761
                },
                "definite": false,
                "start": 1716,
                "end": 1761
              }
            ],
            "declare": false,
            "start": 1712,
            "end": 1762
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
                  "name": "m1_im2_private_v4_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1771,
                  "end": 1796
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m1_im2_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1799,
                      "end": 1813
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1814,
                      "end": 1816
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1799,
                    "end": 1816
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 1799,
                  "end": 1818
                },
                "definite": false,
                "start": 1771,
                "end": 1818
              }
            ],
            "declare": false,
            "start": 1767,
            "end": 1819
          },
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m1_im3_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 1832,
              "end": 1846
            },
            "moduleReference": {
              "type": "TSExternalModuleReference",
              "expression": {
                "type": "Literal",
                "value": "m1_M3_public",
                "raw": "\"m1_M3_public\"",
                "start": 1857,
                "end": 1871
              },
              "start": 1849,
              "end": 1872
            },
            "importKind": "value",
            "start": 1825,
            "end": 1873
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
                    "name": "m1_im3_private_v1_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1889,
                    "end": 1913
                  },
                  "init": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m1_im3_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1916,
                      "end": 1930
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1931,
                      "end": 1933
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1916,
                    "end": 1933
                  },
                  "definite": false,
                  "start": 1889,
                  "end": 1933
                }
              ],
              "declare": false,
              "start": 1885,
              "end": 1934
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1878,
            "end": 1934
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
                    "name": "m1_im3_private_v2_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1950,
                    "end": 1974
                  },
                  "init": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "m1_im3_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1981,
                        "end": 1995
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1996,
                        "end": 1998
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1981,
                      "end": 1998
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 1977,
                    "end": 2000
                  },
                  "definite": false,
                  "start": 1950,
                  "end": 2000
                }
              ],
              "declare": false,
              "start": 1946,
              "end": 2001
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1939,
            "end": 2001
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
                    "name": "m1_im3_private_v3_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2017,
                    "end": 2041
                  },
                  "init": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m1_im3_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2044,
                      "end": 2058
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2059,
                      "end": 2061
                    },
                    "optional": false,
                    "computed": false,
                    "start": 2044,
                    "end": 2061
                  },
                  "definite": false,
                  "start": 2017,
                  "end": 2061
                }
              ],
              "declare": false,
              "start": 2013,
              "end": 2062
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 2006,
            "end": 2062
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
                    "name": "m1_im3_private_v4_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2078,
                    "end": 2102
                  },
                  "init": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "m1_im3_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2105,
                        "end": 2119
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "f1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2120,
                        "end": 2122
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2105,
                      "end": 2122
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 2105,
                    "end": 2124
                  },
                  "definite": false,
                  "start": 2078,
                  "end": 2124
                }
              ],
              "declare": false,
              "start": 2074,
              "end": 2125
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 2067,
            "end": 2125
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
                  "name": "m1_im3_private_v1_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2134,
                  "end": 2159
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m1_im3_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2162,
                    "end": 2176
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2177,
                    "end": 2179
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2162,
                  "end": 2179
                },
                "definite": false,
                "start": 2134,
                "end": 2179
              }
            ],
            "declare": false,
            "start": 2130,
            "end": 2180
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
                  "name": "m1_im3_private_v2_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2189,
                  "end": 2214
                },
                "init": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m1_im3_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2221,
                      "end": 2235
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2236,
                      "end": 2238
                    },
                    "optional": false,
                    "computed": false,
                    "start": 2221,
                    "end": 2238
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "start": 2217,
                  "end": 2240
                },
                "definite": false,
                "start": 2189,
                "end": 2240
              }
            ],
            "declare": false,
            "start": 2185,
            "end": 2241
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
                  "name": "m1_im3_private_v3_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2250,
                  "end": 2275
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m1_im3_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2278,
                    "end": 2292
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2293,
                    "end": 2295
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2278,
                  "end": 2295
                },
                "definite": false,
                "start": 2250,
                "end": 2295
              }
            ],
            "declare": false,
            "start": 2246,
            "end": 2296
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
                  "name": "m1_im3_private_v4_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2305,
                  "end": 2330
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m1_im3_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2333,
                      "end": 2347
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2348,
                      "end": 2350
                    },
                    "optional": false,
                    "computed": false,
                    "start": 2333,
                    "end": 2350
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 2333,
                  "end": 2352
                },
                "definite": false,
                "start": 2305,
                "end": 2352
              }
            ],
            "declare": false,
            "start": 2301,
            "end": 2353
          },
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m1_im4_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 2366,
              "end": 2380
            },
            "moduleReference": {
              "type": "TSExternalModuleReference",
              "expression": {
                "type": "Literal",
                "value": "m1_M4_private",
                "raw": "\"m1_M4_private\"",
                "start": 2391,
                "end": 2406
              },
              "start": 2383,
              "end": 2407
            },
            "importKind": "value",
            "start": 2359,
            "end": 2408
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
                    "name": "m1_im4_private_v1_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2424,
                    "end": 2448
                  },
                  "init": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m1_im4_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2451,
                      "end": 2465
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2466,
                      "end": 2468
                    },
                    "optional": false,
                    "computed": false,
                    "start": 2451,
                    "end": 2468
                  },
                  "definite": false,
                  "start": 2424,
                  "end": 2468
                }
              ],
              "declare": false,
              "start": 2420,
              "end": 2469
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 2413,
            "end": 2469
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
                    "name": "m1_im4_private_v2_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2485,
                    "end": 2509
                  },
                  "init": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "m1_im4_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2516,
                        "end": 2530
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2531,
                        "end": 2533
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2516,
                      "end": 2533
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 2512,
                    "end": 2535
                  },
                  "definite": false,
                  "start": 2485,
                  "end": 2535
                }
              ],
              "declare": false,
              "start": 2481,
              "end": 2536
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 2474,
            "end": 2536
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
                    "name": "m1_im4_private_v3_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2552,
                    "end": 2576
                  },
                  "init": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m1_im4_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2579,
                      "end": 2593
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2594,
                      "end": 2596
                    },
                    "optional": false,
                    "computed": false,
                    "start": 2579,
                    "end": 2596
                  },
                  "definite": false,
                  "start": 2552,
                  "end": 2596
                }
              ],
              "declare": false,
              "start": 2548,
              "end": 2597
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 2541,
            "end": 2597
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
                    "name": "m1_im4_private_v4_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2613,
                    "end": 2637
                  },
                  "init": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "m1_im4_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2640,
                        "end": 2654
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "f1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2655,
                        "end": 2657
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2640,
                      "end": 2657
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 2640,
                    "end": 2659
                  },
                  "definite": false,
                  "start": 2613,
                  "end": 2659
                }
              ],
              "declare": false,
              "start": 2609,
              "end": 2660
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 2602,
            "end": 2660
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
                  "name": "m1_im4_private_v1_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2669,
                  "end": 2694
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m1_im4_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2697,
                    "end": 2711
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2712,
                    "end": 2714
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2697,
                  "end": 2714
                },
                "definite": false,
                "start": 2669,
                "end": 2714
              }
            ],
            "declare": false,
            "start": 2665,
            "end": 2715
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
                  "name": "m1_im4_private_v2_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2724,
                  "end": 2749
                },
                "init": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m1_im4_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2756,
                      "end": 2770
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2771,
                      "end": 2773
                    },
                    "optional": false,
                    "computed": false,
                    "start": 2756,
                    "end": 2773
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "start": 2752,
                  "end": 2775
                },
                "definite": false,
                "start": 2724,
                "end": 2775
              }
            ],
            "declare": false,
            "start": 2720,
            "end": 2776
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
                  "name": "m1_im4_private_v3_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2785,
                  "end": 2810
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m1_im4_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2813,
                    "end": 2827
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2828,
                    "end": 2830
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2813,
                  "end": 2830
                },
                "definite": false,
                "start": 2785,
                "end": 2830
              }
            ],
            "declare": false,
            "start": 2781,
            "end": 2831
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
                  "name": "m1_im4_private_v4_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2840,
                  "end": 2865
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m1_im4_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2868,
                      "end": 2882
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2883,
                      "end": 2885
                    },
                    "optional": false,
                    "computed": false,
                    "start": 2868,
                    "end": 2885
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 2868,
                  "end": 2887
                },
                "definite": false,
                "start": 2840,
                "end": 2887
              }
            ],
            "declare": false,
            "start": 2836,
            "end": 2888
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSImportEqualsDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "m1_im1_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 2908,
                "end": 2921
              },
              "moduleReference": {
                "type": "Identifier",
                "decorators": [],
                "name": "m1_M1_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 2924,
                "end": 2936
              },
              "importKind": "value",
              "start": 2901,
              "end": 2937
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 2894,
            "end": 2937
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSImportEqualsDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "m1_im2_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 2956,
                "end": 2969
              },
              "moduleReference": {
                "type": "Identifier",
                "decorators": [],
                "name": "m1_M2_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 2972,
                "end": 2985
              },
              "importKind": "value",
              "start": 2949,
              "end": 2986
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 2942,
            "end": 2986
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSImportEqualsDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "m1_im3_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 3005,
                "end": 3018
              },
              "moduleReference": {
                "type": "TSExternalModuleReference",
                "expression": {
                  "type": "Literal",
                  "value": "m1_M3_public",
                  "raw": "\"m1_M3_public\"",
                  "start": 3029,
                  "end": 3043
                },
                "start": 3021,
                "end": 3044
              },
              "importKind": "value",
              "start": 2998,
              "end": 3045
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 2991,
            "end": 3045
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSImportEqualsDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "m1_im4_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 3064,
                "end": 3077
              },
              "moduleReference": {
                "type": "TSExternalModuleReference",
                "expression": {
                  "type": "Literal",
                  "value": "m1_M4_private",
                  "raw": "\"m1_M4_private\"",
                  "start": 3088,
                  "end": 3103
                },
                "start": 3080,
                "end": 3104
              },
              "importKind": "value",
              "start": 3057,
              "end": 3105
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 3050,
            "end": 3105
          }
        ],
        "start": 13,
        "end": 3107
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 3107
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "glo_M1_public",
        "optional": false,
        "typeAnnotation": null,
        "start": 3119,
        "end": 3132
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
                "name": "c1",
                "optional": false,
                "typeAnnotation": null,
                "start": 3152,
                "end": 3154
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 3155,
                "end": 3162
              },
              "abstract": false,
              "declare": false,
              "start": 3146,
              "end": 3162
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 3139,
            "end": 3162
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "f1",
                "optional": false,
                "typeAnnotation": null,
                "start": 3183,
                "end": 3185
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3209,
                        "end": 3211
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 3205,
                      "end": 3211
                    },
                    "start": 3198,
                    "end": 3212
                  }
                ],
                "start": 3188,
                "end": 3218
              },
              "expression": false,
              "start": 3174,
              "end": 3218
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 3167,
            "end": 3218
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
                    "name": "v1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3234,
                    "end": 3236
                  },
                  "init": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3239,
                    "end": 3241
                  },
                  "definite": false,
                  "start": 3234,
                  "end": 3241
                }
              ],
              "declare": false,
              "start": 3230,
              "end": 3242
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 3223,
            "end": 3242
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
                    "name": "v2",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3262,
                          "end": 3264
                        },
                        "typeArguments": null,
                        "start": 3262,
                        "end": 3264
                      },
                      "start": 3260,
                      "end": 3264
                    },
                    "start": 3258,
                    "end": 3264
                  },
                  "init": null,
                  "definite": false,
                  "start": 3258,
                  "end": 3264
                }
              ],
              "declare": false,
              "start": 3254,
              "end": 3265
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 3247,
            "end": 3265
          }
        ],
        "start": 3133,
        "end": 3267
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 3109,
      "end": 3267
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "glo_M2_public",
        "raw": "\"glo_M2_public\"",
        "start": 3284,
        "end": 3299
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSDeclareFunction",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "f1",
                "optional": false,
                "typeAnnotation": null,
                "start": 3322,
                "end": 3324
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 3313,
              "end": 3327
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 3306,
            "end": 3327
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "c1",
                "optional": false,
                "typeAnnotation": null,
                "start": 3345,
                "end": 3347
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 3348,
                "end": 3355
              },
              "abstract": false,
              "declare": false,
              "start": 3339,
              "end": 3355
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 3332,
            "end": 3355
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
                    "name": "v1",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "members": [
                          {
                            "type": "TSConstructSignatureDeclaration",
                            "typeParameters": null,
                            "params": [],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "c1",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3385,
                                  "end": 3387
                                },
                                "typeArguments": null,
                                "start": 3385,
                                "end": 3387
                              },
                              "start": 3383,
                              "end": 3387
                            },
                            "start": 3377,
                            "end": 3388
                          }
                        ],
                        "start": 3375,
                        "end": 3390
                      },
                      "start": 3373,
                      "end": 3390
                    },
                    "start": 3371,
                    "end": 3390
                  },
                  "init": null,
                  "definite": false,
                  "start": 3371,
                  "end": 3390
                }
              ],
              "declare": false,
              "start": 3367,
              "end": 3391
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 3360,
            "end": 3391
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
                    "name": "v2",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3411,
                          "end": 3413
                        },
                        "typeArguments": null,
                        "start": 3411,
                        "end": 3413
                      },
                      "start": 3409,
                      "end": 3413
                    },
                    "start": 3407,
                    "end": 3413
                  },
                  "init": null,
                  "definite": false,
                  "start": 3407,
                  "end": 3413
                }
              ],
              "declare": false,
              "start": 3403,
              "end": 3414
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 3396,
            "end": 3414
          }
        ],
        "start": 3300,
        "end": 3416
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 3269,
      "end": 3416
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "use_glo_M1_public",
        "raw": "\"use_glo_M1_public\"",
        "start": 3433,
        "end": 3452
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "use_glo_M1_public",
              "optional": false,
              "typeAnnotation": null,
              "start": 3466,
              "end": 3483
            },
            "moduleReference": {
              "type": "Identifier",
              "decorators": [],
              "name": "glo_M1_public",
              "optional": false,
              "typeAnnotation": null,
              "start": 3486,
              "end": 3499
            },
            "importKind": "value",
            "start": 3459,
            "end": 3500
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
                    "name": "use_glo_M1_public_v1_public",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "members": [
                          {
                            "type": "TSConstructSignatureDeclaration",
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
                                    "name": "use_glo_M1_public",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3555,
                                    "end": 3572
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "c1",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3573,
                                    "end": 3575
                                  },
                                  "start": 3555,
                                  "end": 3575
                                },
                                "typeArguments": null,
                                "start": 3555,
                                "end": 3575
                              },
                              "start": 3553,
                              "end": 3575
                            },
                            "start": 3547,
                            "end": 3576
                          }
                        ],
                        "start": 3545,
                        "end": 3578
                      },
                      "start": 3543,
                      "end": 3578
                    },
                    "start": 3516,
                    "end": 3578
                  },
                  "init": null,
                  "definite": false,
                  "start": 3516,
                  "end": 3578
                }
              ],
              "declare": false,
              "start": 3512,
              "end": 3579
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 3505,
            "end": 3579
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
                    "name": "use_glo_M1_public_v2_public",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "use_glo_M1_public",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3631,
                          "end": 3648
                        },
                        "typeArguments": null,
                        "start": 3624,
                        "end": 3648
                      },
                      "start": 3622,
                      "end": 3648
                    },
                    "start": 3595,
                    "end": 3648
                  },
                  "init": null,
                  "definite": false,
                  "start": 3595,
                  "end": 3648
                }
              ],
              "declare": false,
              "start": 3591,
              "end": 3649
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 3584,
            "end": 3649
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
                    "name": "use_glo_M1_public_v3_public",
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
                                "name": "use_glo_M1_public",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3699,
                                "end": 3716
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "c1",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3717,
                                "end": 3719
                              },
                              "start": 3699,
                              "end": 3719
                            },
                            "typeArguments": null,
                            "start": 3699,
                            "end": 3719
                          },
                          "start": 3696,
                          "end": 3719
                        },
                        "start": 3694,
                        "end": 3719
                      },
                      "start": 3692,
                      "end": 3719
                    },
                    "start": 3665,
                    "end": 3719
                  },
                  "init": null,
                  "definite": false,
                  "start": 3665,
                  "end": 3719
                }
              ],
              "declare": false,
              "start": 3661,
              "end": 3720
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 3654,
            "end": 3720
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
                  "name": "use_glo_M1_public_v1_private",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "members": [
                        {
                          "type": "TSConstructSignatureDeclaration",
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
                                  "name": "use_glo_M1_public",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3769,
                                  "end": 3786
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "c1",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3787,
                                  "end": 3789
                                },
                                "start": 3769,
                                "end": 3789
                              },
                              "typeArguments": null,
                              "start": 3769,
                              "end": 3789
                            },
                            "start": 3767,
                            "end": 3789
                          },
                          "start": 3761,
                          "end": 3790
                        }
                      ],
                      "start": 3759,
                      "end": 3792
                    },
                    "start": 3757,
                    "end": 3792
                  },
                  "start": 3729,
                  "end": 3792
                },
                "init": null,
                "definite": false,
                "start": 3729,
                "end": 3792
              }
            ],
            "declare": false,
            "start": 3725,
            "end": 3793
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
                  "name": "use_glo_M1_public_v2_private",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "use_glo_M1_public",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3839,
                        "end": 3856
                      },
                      "typeArguments": null,
                      "start": 3832,
                      "end": 3856
                    },
                    "start": 3830,
                    "end": 3856
                  },
                  "start": 3802,
                  "end": 3856
                },
                "init": null,
                "definite": false,
                "start": 3802,
                "end": 3856
              }
            ],
            "declare": false,
            "start": 3798,
            "end": 3857
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
                  "name": "use_glo_M1_public_v3_private",
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
                              "name": "use_glo_M1_public",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3902,
                              "end": 3919
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "c1",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3920,
                              "end": 3922
                            },
                            "start": 3902,
                            "end": 3922
                          },
                          "typeArguments": null,
                          "start": 3902,
                          "end": 3922
                        },
                        "start": 3899,
                        "end": 3922
                      },
                      "start": 3896,
                      "end": 3922
                    },
                    "start": 3894,
                    "end": 3922
                  },
                  "start": 3866,
                  "end": 3922
                },
                "init": null,
                "definite": false,
                "start": 3866,
                "end": 3922
              }
            ],
            "declare": false,
            "start": 3862,
            "end": 3923
          },
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "use_glo_M2_public",
              "optional": false,
              "typeAnnotation": null,
              "start": 3936,
              "end": 3953
            },
            "moduleReference": {
              "type": "TSExternalModuleReference",
              "expression": {
                "type": "Literal",
                "value": "glo_M2_public",
                "raw": "\"glo_M2_public\"",
                "start": 3964,
                "end": 3979
              },
              "start": 3956,
              "end": 3980
            },
            "importKind": "value",
            "start": 3929,
            "end": 3981
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
                    "name": "use_glo_M2_public_v1_public",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "members": [
                          {
                            "type": "TSConstructSignatureDeclaration",
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
                                    "name": "use_glo_M2_public",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 4036,
                                    "end": 4053
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "c1",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 4054,
                                    "end": 4056
                                  },
                                  "start": 4036,
                                  "end": 4056
                                },
                                "typeArguments": null,
                                "start": 4036,
                                "end": 4056
                              },
                              "start": 4034,
                              "end": 4056
                            },
                            "start": 4028,
                            "end": 4057
                          }
                        ],
                        "start": 4026,
                        "end": 4059
                      },
                      "start": 4024,
                      "end": 4059
                    },
                    "start": 3997,
                    "end": 4059
                  },
                  "init": null,
                  "definite": false,
                  "start": 3997,
                  "end": 4059
                }
              ],
              "declare": false,
              "start": 3993,
              "end": 4060
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 3986,
            "end": 4060
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
                    "name": "use_glo_M2_public_v2_public",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "use_glo_M2_public",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4112,
                          "end": 4129
                        },
                        "typeArguments": null,
                        "start": 4105,
                        "end": 4129
                      },
                      "start": 4103,
                      "end": 4129
                    },
                    "start": 4076,
                    "end": 4129
                  },
                  "init": null,
                  "definite": false,
                  "start": 4076,
                  "end": 4129
                }
              ],
              "declare": false,
              "start": 4072,
              "end": 4130
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 4065,
            "end": 4130
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
                    "name": "use_glo_M2_public_v3_public",
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
                                "name": "use_glo_M2_public",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4181,
                                "end": 4198
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "c1",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4199,
                                "end": 4201
                              },
                              "start": 4181,
                              "end": 4201
                            },
                            "typeArguments": null,
                            "start": 4181,
                            "end": 4201
                          },
                          "start": 4178,
                          "end": 4201
                        },
                        "start": 4175,
                        "end": 4201
                      },
                      "start": 4173,
                      "end": 4201
                    },
                    "start": 4146,
                    "end": 4201
                  },
                  "init": null,
                  "definite": false,
                  "start": 4146,
                  "end": 4201
                }
              ],
              "declare": false,
              "start": 4142,
              "end": 4202
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 4135,
            "end": 4202
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
                  "name": "use_glo_M2_public_v1_private",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "members": [
                        {
                          "type": "TSConstructSignatureDeclaration",
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
                                  "name": "use_glo_M2_public",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 4251,
                                  "end": 4268
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "c1",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 4269,
                                  "end": 4271
                                },
                                "start": 4251,
                                "end": 4271
                              },
                              "typeArguments": null,
                              "start": 4251,
                              "end": 4271
                            },
                            "start": 4249,
                            "end": 4271
                          },
                          "start": 4243,
                          "end": 4272
                        }
                      ],
                      "start": 4241,
                      "end": 4274
                    },
                    "start": 4239,
                    "end": 4274
                  },
                  "start": 4211,
                  "end": 4274
                },
                "init": null,
                "definite": false,
                "start": 4211,
                "end": 4274
              }
            ],
            "declare": false,
            "start": 4207,
            "end": 4275
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
                  "name": "use_glo_M2_public_v2_private",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "use_glo_M2_public",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4321,
                        "end": 4338
                      },
                      "typeArguments": null,
                      "start": 4314,
                      "end": 4338
                    },
                    "start": 4312,
                    "end": 4338
                  },
                  "start": 4284,
                  "end": 4338
                },
                "init": null,
                "definite": false,
                "start": 4284,
                "end": 4338
              }
            ],
            "declare": false,
            "start": 4280,
            "end": 4339
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
                  "name": "use_glo_M2_public_v3_private",
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
                              "name": "use_glo_M2_public",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4384,
                              "end": 4401
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "c1",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4402,
                              "end": 4404
                            },
                            "start": 4384,
                            "end": 4404
                          },
                          "typeArguments": null,
                          "start": 4384,
                          "end": 4404
                        },
                        "start": 4381,
                        "end": 4404
                      },
                      "start": 4378,
                      "end": 4404
                    },
                    "start": 4376,
                    "end": 4404
                  },
                  "start": 4348,
                  "end": 4404
                },
                "init": null,
                "definite": false,
                "start": 4348,
                "end": 4404
              }
            ],
            "declare": false,
            "start": 4344,
            "end": 4405
          },
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m2",
              "optional": false,
              "typeAnnotation": null,
              "start": 4421,
              "end": 4423
            },
            "body": {
              "type": "TSModuleBlock",
              "body": [
                {
                  "type": "TSImportEqualsDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "errorImport",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4441,
                    "end": 4452
                  },
                  "moduleReference": {
                    "type": "TSExternalModuleReference",
                    "expression": {
                      "type": "Literal",
                      "value": "glo_M2_public",
                      "raw": "\"glo_M2_public\"",
                      "start": 4463,
                      "end": 4478
                    },
                    "start": 4455,
                    "end": 4479
                  },
                  "importKind": "value",
                  "start": 4434,
                  "end": 4480
                },
                {
                  "type": "TSImportEqualsDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nonerrorImport",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4496,
                    "end": 4510
                  },
                  "moduleReference": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "glo_M1_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4513,
                    "end": 4526
                  },
                  "importKind": "value",
                  "start": 4489,
                  "end": 4527
                },
                {
                  "type": "TSModuleDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m5",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4547,
                    "end": 4549
                  },
                  "body": {
                    "type": "TSModuleBlock",
                    "body": [
                      {
                        "type": "TSImportEqualsDeclaration",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "m5_errorImport",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4571,
                          "end": 4585
                        },
                        "moduleReference": {
                          "type": "TSExternalModuleReference",
                          "expression": {
                            "type": "Literal",
                            "value": "glo_M2_public",
                            "raw": "\"glo_M2_public\"",
                            "start": 4596,
                            "end": 4611
                          },
                          "start": 4588,
                          "end": 4612
                        },
                        "importKind": "value",
                        "start": 4564,
                        "end": 4613
                      },
                      {
                        "type": "TSImportEqualsDeclaration",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "m5_nonerrorImport",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4633,
                          "end": 4650
                        },
                        "moduleReference": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "glo_M1_public",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4653,
                          "end": 4666
                        },
                        "importKind": "value",
                        "start": 4626,
                        "end": 4667
                      }
                    ],
                    "start": 4550,
                    "end": 4677
                  },
                  "kind": "namespace",
                  "declare": false,
                  "global": false,
                  "start": 4537,
                  "end": 4677
                }
              ],
              "start": 4424,
              "end": 4683
            },
            "kind": "namespace",
            "declare": false,
            "global": false,
            "start": 4411,
            "end": 4683
          }
        ],
        "start": 3453,
        "end": 4685
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 3418,
      "end": 4685
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "anotherParseError",
        "raw": "\"anotherParseError\"",
        "start": 4702,
        "end": 4721
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m2",
              "optional": false,
              "typeAnnotation": null,
              "start": 4738,
              "end": 4740
            },
            "body": {
              "type": "TSModuleBlock",
              "body": [
                {
                  "type": "TSModuleDeclaration",
                  "id": {
                    "type": "Literal",
                    "value": "abc",
                    "raw": "\"abc\"",
                    "start": 4766,
                    "end": 4771
                  },
                  "body": {
                    "type": "TSModuleBlock",
                    "body": [],
                    "start": 4772,
                    "end": 4783
                  },
                  "kind": "module",
                  "declare": true,
                  "global": false,
                  "start": 4751,
                  "end": 4783
                }
              ],
              "start": 4741,
              "end": 4789
            },
            "kind": "namespace",
            "declare": false,
            "global": false,
            "start": 4728,
            "end": 4789
          },
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m2",
              "optional": false,
              "typeAnnotation": null,
              "start": 4805,
              "end": 4807
            },
            "body": {
              "type": "TSModuleBlock",
              "body": [
                {
                  "type": "TSModuleDeclaration",
                  "id": {
                    "type": "Literal",
                    "value": "abc2",
                    "raw": "\"abc2\"",
                    "start": 4825,
                    "end": 4831
                  },
                  "body": {
                    "type": "TSModuleBlock",
                    "body": [],
                    "start": 4832,
                    "end": 4843
                  },
                  "kind": "module",
                  "declare": false,
                  "global": false,
                  "start": 4818,
                  "end": 4843
                }
              ],
              "start": 4808,
              "end": 4849
            },
            "kind": "namespace",
            "declare": false,
            "global": false,
            "start": 4795,
            "end": 4849
          },
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Literal",
              "value": "abc3",
              "raw": "\"abc3\"",
              "start": 4861,
              "end": 4867
            },
            "body": {
              "type": "TSModuleBlock",
              "body": [],
              "start": 4868,
              "end": 4875
            },
            "kind": "module",
            "declare": false,
            "global": false,
            "start": 4854,
            "end": 4875
          }
        ],
        "start": 4722,
        "end": 4877
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 4687,
      "end": 4877
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m2",
        "optional": false,
        "typeAnnotation": null,
        "start": 4889,
        "end": 4891
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m3",
              "optional": false,
              "typeAnnotation": null,
              "start": 4905,
              "end": 4907
            },
            "moduleReference": {
              "type": "TSExternalModuleReference",
              "expression": {
                "type": "Literal",
                "value": "use_glo_M1_public",
                "raw": "\"use_glo_M1_public\"",
                "start": 4918,
                "end": 4937
              },
              "start": 4910,
              "end": 4938
            },
            "importKind": "value",
            "start": 4898,
            "end": 4939
          },
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m4",
              "optional": false,
              "typeAnnotation": null,
              "start": 4954,
              "end": 4956
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
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4971,
                        "end": 4972
                      },
                      "init": {
                        "type": "Literal",
                        "value": 10,
                        "raw": "10",
                        "start": 4975,
                        "end": 4977
                      },
                      "definite": false,
                      "start": 4971,
                      "end": 4977
                    }
                  ],
                  "declare": false,
                  "start": 4967,
                  "end": 4978
                },
                {
                  "type": "TSImportEqualsDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4994,
                    "end": 4996
                  },
                  "moduleReference": {
                    "type": "TSExternalModuleReference",
                    "expression": {
                      "type": "Literal",
                      "value": "use_glo_M1_public",
                      "raw": "\"use_glo_M1_public\"",
                      "start": 5007,
                      "end": 5026
                    },
                    "start": 4999,
                    "end": 5027
                  },
                  "importKind": "value",
                  "start": 4987,
                  "end": 5028
                }
              ],
              "start": 4957,
              "end": 5034
            },
            "kind": "namespace",
            "declare": false,
            "global": false,
            "start": 4944,
            "end": 5034
          }
        ],
        "start": 4892,
        "end": 5037
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 4879,
      "end": 5037
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 5037
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
    "value": "m1",
    "start": 10,
    "end": 12,
    "range": [
      10,
      12
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 13,
    "end": 14,
    "range": [
      13,
      14
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 19,
    "end": 25,
    "range": [
      19,
      25
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 26,
    "end": 35,
    "range": [
      26,
      35
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_M1_public",
    "start": 36,
    "end": 48,
    "range": [
      36,
      48
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 49,
    "end": 50,
    "range": [
      49,
      50
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 59,
    "end": 65,
    "range": [
      59,
      65
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 66,
    "end": 71,
    "range": [
      66,
      71
    ]
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 72,
    "end": 74,
    "range": [
      72,
      74
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 75,
    "end": 76,
    "range": [
      75,
      76
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 85,
    "end": 86,
    "range": [
      85,
      86
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 95,
    "end": 101,
    "range": [
      95,
      101
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 102,
    "end": 110,
    "range": [
      102,
      110
    ]
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 111,
    "end": 113,
    "range": [
      111,
      113
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 113,
    "end": 114,
    "range": [
      113,
      114
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 114,
    "end": 115,
    "range": [
      114,
      115
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 116,
    "end": 117,
    "range": [
      116,
      117
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 130,
    "end": 136,
    "range": [
      130,
      136
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 137,
    "end": 140,
    "range": [
      137,
      140
    ]
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 141,
    "end": 143,
    "range": [
      141,
      143
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 143,
    "end": 144,
    "range": [
      143,
      144
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 153,
    "end": 154,
    "range": [
      153,
      154
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 163,
    "end": 169,
    "range": [
      163,
      169
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 170,
    "end": 173,
    "range": [
      170,
      173
    ]
  },
  {
    "type": "Identifier",
    "value": "v1",
    "start": 174,
    "end": 176,
    "range": [
      174,
      176
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 177,
    "end": 178,
    "range": [
      177,
      178
    ]
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 179,
    "end": 181,
    "range": [
      179,
      181
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 181,
    "end": 182,
    "range": [
      181,
      182
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 191,
    "end": 197,
    "range": [
      191,
      197
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 198,
    "end": 201,
    "range": [
      198,
      201
    ]
  },
  {
    "type": "Identifier",
    "value": "v2",
    "start": 202,
    "end": 204,
    "range": [
      202,
      204
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 204,
    "end": 205,
    "range": [
      204,
      205
    ]
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 206,
    "end": 208,
    "range": [
      206,
      208
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 208,
    "end": 209,
    "range": [
      208,
      209
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 214,
    "end": 215,
    "range": [
      214,
      215
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 221,
    "end": 230,
    "range": [
      221,
      230
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_M2_private",
    "start": 231,
    "end": 244,
    "range": [
      231,
      244
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 245,
    "end": 246,
    "range": [
      245,
      246
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 255,
    "end": 261,
    "range": [
      255,
      261
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 262,
    "end": 267,
    "range": [
      262,
      267
    ]
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 268,
    "end": 270,
    "range": [
      268,
      270
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 271,
    "end": 272,
    "range": [
      271,
      272
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 281,
    "end": 282,
    "range": [
      281,
      282
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 291,
    "end": 297,
    "range": [
      291,
      297
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 298,
    "end": 306,
    "range": [
      298,
      306
    ]
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 307,
    "end": 309,
    "range": [
      307,
      309
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 309,
    "end": 310,
    "range": [
      309,
      310
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 310,
    "end": 311,
    "range": [
      310,
      311
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 312,
    "end": 313,
    "range": [
      312,
      313
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 326,
    "end": 332,
    "range": [
      326,
      332
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 333,
    "end": 336,
    "range": [
      333,
      336
    ]
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 337,
    "end": 339,
    "range": [
      337,
      339
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 339,
    "end": 340,
    "range": [
      339,
      340
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 349,
    "end": 350,
    "range": [
      349,
      350
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 359,
    "end": 365,
    "range": [
      359,
      365
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 366,
    "end": 369,
    "range": [
      366,
      369
    ]
  },
  {
    "type": "Identifier",
    "value": "v1",
    "start": 370,
    "end": 372,
    "range": [
      370,
      372
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 373,
    "end": 374,
    "range": [
      373,
      374
    ]
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 375,
    "end": 377,
    "range": [
      375,
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
    "type": "Keyword",
    "value": "export",
    "start": 387,
    "end": 393,
    "range": [
      387,
      393
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 394,
    "end": 397,
    "range": [
      394,
      397
    ]
  },
  {
    "type": "Identifier",
    "value": "v2",
    "start": 398,
    "end": 400,
    "range": [
      398,
      400
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 400,
    "end": 401,
    "range": [
      400,
      401
    ]
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 402,
    "end": 404,
    "range": [
      402,
      404
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 404,
    "end": 405,
    "range": [
      404,
      405
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 410,
    "end": 411,
    "range": [
      410,
      411
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 417,
    "end": 423,
    "range": [
      417,
      423
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 424,
    "end": 431,
    "range": [
      424,
      431
    ]
  },
  {
    "type": "Identifier",
    "value": "module",
    "start": 432,
    "end": 438,
    "range": [
      432,
      438
    ]
  },
  {
    "type": "String",
    "value": "\"m1_M3_public\"",
    "start": 439,
    "end": 453,
    "range": [
      439,
      453
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 454,
    "end": 455,
    "range": [
      454,
      455
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 464,
    "end": 470,
    "range": [
      464,
      470
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 471,
    "end": 479,
    "range": [
      471,
      479
    ]
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 480,
    "end": 482,
    "range": [
      480,
      482
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 482,
    "end": 483,
    "range": [
      482,
      483
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 483,
    "end": 484,
    "range": [
      483,
      484
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 484,
    "end": 485,
    "range": [
      484,
      485
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 494,
    "end": 500,
    "range": [
      494,
      500
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 501,
    "end": 506,
    "range": [
      501,
      506
    ]
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 507,
    "end": 509,
    "range": [
      507,
      509
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 510,
    "end": 511,
    "range": [
      510,
      511
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 520,
    "end": 521,
    "range": [
      520,
      521
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 530,
    "end": 536,
    "range": [
      530,
      536
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 537,
    "end": 540,
    "range": [
      537,
      540
    ]
  },
  {
    "type": "Identifier",
    "value": "v1",
    "start": 541,
    "end": 543,
    "range": [
      541,
      543
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 543,
    "end": 544,
    "range": [
      543,
      544
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 545,
    "end": 546,
    "range": [
      545,
      546
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 547,
    "end": 550,
    "range": [
      547,
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
    "type": "Punctuator",
    "value": ")",
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
    "value": "c1",
    "start": 555,
    "end": 557,
    "range": [
      555,
      557
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 557,
    "end": 558,
    "range": [
      557,
      558
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 559,
    "end": 560,
    "range": [
      559,
      560
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 560,
    "end": 561,
    "range": [
      560,
      561
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 570,
    "end": 576,
    "range": [
      570,
      576
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 577,
    "end": 580,
    "range": [
      577,
      580
    ]
  },
  {
    "type": "Identifier",
    "value": "v2",
    "start": 581,
    "end": 583,
    "range": [
      581,
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
    "value": "c1",
    "start": 585,
    "end": 587,
    "range": [
      585,
      587
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 587,
    "end": 588,
    "range": [
      587,
      588
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 593,
    "end": 594,
    "range": [
      593,
      594
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 600,
    "end": 607,
    "range": [
      600,
      607
    ]
  },
  {
    "type": "Identifier",
    "value": "module",
    "start": 608,
    "end": 614,
    "range": [
      608,
      614
    ]
  },
  {
    "type": "String",
    "value": "\"m1_M4_private\"",
    "start": 615,
    "end": 630,
    "range": [
      615,
      630
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 631,
    "end": 632,
    "range": [
      631,
      632
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 641,
    "end": 647,
    "range": [
      641,
      647
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 648,
    "end": 656,
    "range": [
      648,
      656
    ]
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 657,
    "end": 659,
    "range": [
      657,
      659
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 659,
    "end": 660,
    "range": [
      659,
      660
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 660,
    "end": 661,
    "range": [
      660,
      661
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 661,
    "end": 662,
    "range": [
      661,
      662
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 671,
    "end": 677,
    "range": [
      671,
      677
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 678,
    "end": 683,
    "range": [
      678,
      683
    ]
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 684,
    "end": 686,
    "range": [
      684,
      686
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 687,
    "end": 688,
    "range": [
      687,
      688
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 697,
    "end": 698,
    "range": [
      697,
      698
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 707,
    "end": 713,
    "range": [
      707,
      713
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 714,
    "end": 717,
    "range": [
      714,
      717
    ]
  },
  {
    "type": "Identifier",
    "value": "v1",
    "start": 718,
    "end": 720,
    "range": [
      718,
      720
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 720,
    "end": 721,
    "range": [
      720,
      721
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 722,
    "end": 723,
    "range": [
      722,
      723
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 724,
    "end": 727,
    "range": [
      724,
      727
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 728,
    "end": 729,
    "range": [
      728,
      729
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 729,
    "end": 730,
    "range": [
      729,
      730
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 730,
    "end": 731,
    "range": [
      730,
      731
    ]
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 732,
    "end": 734,
    "range": [
      732,
      734
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 734,
    "end": 735,
    "range": [
      734,
      735
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 736,
    "end": 737,
    "range": [
      736,
      737
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 737,
    "end": 738,
    "range": [
      737,
      738
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 747,
    "end": 753,
    "range": [
      747,
      753
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 754,
    "end": 757,
    "range": [
      754,
      757
    ]
  },
  {
    "type": "Identifier",
    "value": "v2",
    "start": 758,
    "end": 760,
    "range": [
      758,
      760
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 760,
    "end": 761,
    "range": [
      760,
      761
    ]
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 762,
    "end": 764,
    "range": [
      762,
      764
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 764,
    "end": 765,
    "range": [
      764,
      765
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 770,
    "end": 771,
    "range": [
      770,
      771
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 777,
    "end": 783,
    "range": [
      777,
      783
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_im1_private",
    "start": 784,
    "end": 798,
    "range": [
      784,
      798
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 799,
    "end": 800,
    "range": [
      799,
      800
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_M1_public",
    "start": 801,
    "end": 813,
    "range": [
      801,
      813
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 813,
    "end": 814,
    "range": [
      813,
      814
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 819,
    "end": 825,
    "range": [
      819,
      825
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 826,
    "end": 829,
    "range": [
      826,
      829
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_im1_private_v1_public",
    "start": 830,
    "end": 854,
    "range": [
      830,
      854
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 855,
    "end": 856,
    "range": [
      855,
      856
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_im1_private",
    "start": 857,
    "end": 871,
    "range": [
      857,
      871
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 871,
    "end": 872,
    "range": [
      871,
      872
    ]
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 872,
    "end": 874,
    "range": [
      872,
      874
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 874,
    "end": 875,
    "range": [
      874,
      875
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 880,
    "end": 886,
    "range": [
      880,
      886
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 887,
    "end": 890,
    "range": [
      887,
      890
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_im1_private_v2_public",
    "start": 891,
    "end": 915,
    "range": [
      891,
      915
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 916,
    "end": 917,
    "range": [
      916,
      917
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 918,
    "end": 921,
    "range": [
      918,
      921
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_im1_private",
    "start": 922,
    "end": 936,
    "range": [
      922,
      936
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 936,
    "end": 937,
    "range": [
      936,
      937
    ]
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 937,
    "end": 939,
    "range": [
      937,
      939
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 939,
    "end": 940,
    "range": [
      939,
      940
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 940,
    "end": 941,
    "range": [
      940,
      941
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 941,
    "end": 942,
    "range": [
      941,
      942
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 947,
    "end": 953,
    "range": [
      947,
      953
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 954,
    "end": 957,
    "range": [
      954,
      957
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_im1_private_v3_public",
    "start": 958,
    "end": 982,
    "range": [
      958,
      982
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 983,
    "end": 984,
    "range": [
      983,
      984
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_im1_private",
    "start": 985,
    "end": 999,
    "range": [
      985,
      999
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 999,
    "end": 1000,
    "range": [
      999,
      1000
    ]
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 1000,
    "end": 1002,
    "range": [
      1000,
      1002
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1002,
    "end": 1003,
    "range": [
      1002,
      1003
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1008,
    "end": 1014,
    "range": [
      1008,
      1014
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1015,
    "end": 1018,
    "range": [
      1015,
      1018
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_im1_private_v4_public",
    "start": 1019,
    "end": 1043,
    "range": [
      1019,
      1043
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1044,
    "end": 1045,
    "range": [
      1044,
      1045
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_im1_private",
    "start": 1046,
    "end": 1060,
    "range": [
      1046,
      1060
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1060,
    "end": 1061,
    "range": [
      1060,
      1061
    ]
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 1061,
    "end": 1063,
    "range": [
      1061,
      1063
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1063,
    "end": 1064,
    "range": [
      1063,
      1064
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1064,
    "end": 1065,
    "range": [
      1064,
      1065
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1065,
    "end": 1066,
    "range": [
      1065,
      1066
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1071,
    "end": 1074,
    "range": [
      1071,
      1074
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_im1_private_v1_private",
    "start": 1075,
    "end": 1100,
    "range": [
      1075,
      1100
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1101,
    "end": 1102,
    "range": [
      1101,
      1102
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_im1_private",
    "start": 1103,
    "end": 1117,
    "range": [
      1103,
      1117
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1117,
    "end": 1118,
    "range": [
      1117,
      1118
    ]
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 1118,
    "end": 1120,
    "range": [
      1118,
      1120
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1120,
    "end": 1121,
    "range": [
      1120,
      1121
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1126,
    "end": 1129,
    "range": [
      1126,
      1129
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_im1_private_v2_private",
    "start": 1130,
    "end": 1155,
    "range": [
      1130,
      1155
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1156,
    "end": 1157,
    "range": [
      1156,
      1157
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1158,
    "end": 1161,
    "range": [
      1158,
      1161
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_im1_private",
    "start": 1162,
    "end": 1176,
    "range": [
      1162,
      1176
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1176,
    "end": 1177,
    "range": [
      1176,
      1177
    ]
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 1177,
    "end": 1179,
    "range": [
      1177,
      1179
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1179,
    "end": 1180,
    "range": [
      1179,
      1180
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1180,
    "end": 1181,
    "range": [
      1180,
      1181
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1181,
    "end": 1182,
    "range": [
      1181,
      1182
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1187,
    "end": 1190,
    "range": [
      1187,
      1190
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_im1_private_v3_private",
    "start": 1191,
    "end": 1216,
    "range": [
      1191,
      1216
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1217,
    "end": 1218,
    "range": [
      1217,
      1218
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_im1_private",
    "start": 1219,
    "end": 1233,
    "range": [
      1219,
      1233
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1233,
    "end": 1234,
    "range": [
      1233,
      1234
    ]
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 1234,
    "end": 1236,
    "range": [
      1234,
      1236
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1236,
    "end": 1237,
    "range": [
      1236,
      1237
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1242,
    "end": 1245,
    "range": [
      1242,
      1245
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_im1_private_v4_private",
    "start": 1246,
    "end": 1271,
    "range": [
      1246,
      1271
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1272,
    "end": 1273,
    "range": [
      1272,
      1273
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_im1_private",
    "start": 1274,
    "end": 1288,
    "range": [
      1274,
      1288
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1288,
    "end": 1289,
    "range": [
      1288,
      1289
    ]
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 1289,
    "end": 1291,
    "range": [
      1289,
      1291
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1291,
    "end": 1292,
    "range": [
      1291,
      1292
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1292,
    "end": 1293,
    "range": [
      1292,
      1293
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1293,
    "end": 1294,
    "range": [
      1293,
      1294
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 1301,
    "end": 1307,
    "range": [
      1301,
      1307
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_im2_private",
    "start": 1308,
    "end": 1322,
    "range": [
      1308,
      1322
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1323,
    "end": 1324,
    "range": [
      1323,
      1324
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_M2_private",
    "start": 1325,
    "end": 1338,
    "range": [
      1325,
      1338
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1338,
    "end": 1339,
    "range": [
      1338,
      1339
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1344,
    "end": 1350,
    "range": [
      1344,
      1350
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1351,
    "end": 1354,
    "range": [
      1351,
      1354
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_im2_private_v1_public",
    "start": 1355,
    "end": 1379,
    "range": [
      1355,
      1379
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1380,
    "end": 1381,
    "range": [
      1380,
      1381
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_im2_private",
    "start": 1382,
    "end": 1396,
    "range": [
      1382,
      1396
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1396,
    "end": 1397,
    "range": [
      1396,
      1397
    ]
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 1397,
    "end": 1399,
    "range": [
      1397,
      1399
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1399,
    "end": 1400,
    "range": [
      1399,
      1400
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1405,
    "end": 1411,
    "range": [
      1405,
      1411
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1412,
    "end": 1415,
    "range": [
      1412,
      1415
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_im2_private_v2_public",
    "start": 1416,
    "end": 1440,
    "range": [
      1416,
      1440
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1441,
    "end": 1442,
    "range": [
      1441,
      1442
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1443,
    "end": 1446,
    "range": [
      1443,
      1446
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_im2_private",
    "start": 1447,
    "end": 1461,
    "range": [
      1447,
      1461
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1461,
    "end": 1462,
    "range": [
      1461,
      1462
    ]
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 1462,
    "end": 1464,
    "range": [
      1462,
      1464
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1464,
    "end": 1465,
    "range": [
      1464,
      1465
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1465,
    "end": 1466,
    "range": [
      1465,
      1466
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1466,
    "end": 1467,
    "range": [
      1466,
      1467
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1472,
    "end": 1478,
    "range": [
      1472,
      1478
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1479,
    "end": 1482,
    "range": [
      1479,
      1482
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_im2_private_v3_public",
    "start": 1483,
    "end": 1507,
    "range": [
      1483,
      1507
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1508,
    "end": 1509,
    "range": [
      1508,
      1509
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_im2_private",
    "start": 1510,
    "end": 1524,
    "range": [
      1510,
      1524
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1524,
    "end": 1525,
    "range": [
      1524,
      1525
    ]
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 1525,
    "end": 1527,
    "range": [
      1525,
      1527
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1527,
    "end": 1528,
    "range": [
      1527,
      1528
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1533,
    "end": 1539,
    "range": [
      1533,
      1539
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1540,
    "end": 1543,
    "range": [
      1540,
      1543
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_im2_private_v4_public",
    "start": 1544,
    "end": 1568,
    "range": [
      1544,
      1568
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1569,
    "end": 1570,
    "range": [
      1569,
      1570
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_im2_private",
    "start": 1571,
    "end": 1585,
    "range": [
      1571,
      1585
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1585,
    "end": 1586,
    "range": [
      1585,
      1586
    ]
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 1586,
    "end": 1588,
    "range": [
      1586,
      1588
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1588,
    "end": 1589,
    "range": [
      1588,
      1589
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1589,
    "end": 1590,
    "range": [
      1589,
      1590
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1590,
    "end": 1591,
    "range": [
      1590,
      1591
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1596,
    "end": 1599,
    "range": [
      1596,
      1599
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_im2_private_v1_private",
    "start": 1600,
    "end": 1625,
    "range": [
      1600,
      1625
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1626,
    "end": 1627,
    "range": [
      1626,
      1627
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_im2_private",
    "start": 1628,
    "end": 1642,
    "range": [
      1628,
      1642
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1642,
    "end": 1643,
    "range": [
      1642,
      1643
    ]
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 1643,
    "end": 1645,
    "range": [
      1643,
      1645
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1645,
    "end": 1646,
    "range": [
      1645,
      1646
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1651,
    "end": 1654,
    "range": [
      1651,
      1654
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_im2_private_v2_private",
    "start": 1655,
    "end": 1680,
    "range": [
      1655,
      1680
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1681,
    "end": 1682,
    "range": [
      1681,
      1682
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1683,
    "end": 1686,
    "range": [
      1683,
      1686
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_im2_private",
    "start": 1687,
    "end": 1701,
    "range": [
      1687,
      1701
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1701,
    "end": 1702,
    "range": [
      1701,
      1702
    ]
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 1702,
    "end": 1704,
    "range": [
      1702,
      1704
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1704,
    "end": 1705,
    "range": [
      1704,
      1705
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1705,
    "end": 1706,
    "range": [
      1705,
      1706
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1706,
    "end": 1707,
    "range": [
      1706,
      1707
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1712,
    "end": 1715,
    "range": [
      1712,
      1715
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_im2_private_v3_private",
    "start": 1716,
    "end": 1741,
    "range": [
      1716,
      1741
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1742,
    "end": 1743,
    "range": [
      1742,
      1743
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_im2_private",
    "start": 1744,
    "end": 1758,
    "range": [
      1744,
      1758
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1758,
    "end": 1759,
    "range": [
      1758,
      1759
    ]
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 1759,
    "end": 1761,
    "range": [
      1759,
      1761
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1761,
    "end": 1762,
    "range": [
      1761,
      1762
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1767,
    "end": 1770,
    "range": [
      1767,
      1770
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_im2_private_v4_private",
    "start": 1771,
    "end": 1796,
    "range": [
      1771,
      1796
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1797,
    "end": 1798,
    "range": [
      1797,
      1798
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_im2_private",
    "start": 1799,
    "end": 1813,
    "range": [
      1799,
      1813
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1813,
    "end": 1814,
    "range": [
      1813,
      1814
    ]
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 1814,
    "end": 1816,
    "range": [
      1814,
      1816
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1816,
    "end": 1817,
    "range": [
      1816,
      1817
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1817,
    "end": 1818,
    "range": [
      1817,
      1818
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1818,
    "end": 1819,
    "range": [
      1818,
      1819
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 1825,
    "end": 1831,
    "range": [
      1825,
      1831
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_im3_private",
    "start": 1832,
    "end": 1846,
    "range": [
      1832,
      1846
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1847,
    "end": 1848,
    "range": [
      1847,
      1848
    ]
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 1849,
    "end": 1856,
    "range": [
      1849,
      1856
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1856,
    "end": 1857,
    "range": [
      1856,
      1857
    ]
  },
  {
    "type": "String",
    "value": "\"m1_M3_public\"",
    "start": 1857,
    "end": 1871,
    "range": [
      1857,
      1871
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1871,
    "end": 1872,
    "range": [
      1871,
      1872
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1872,
    "end": 1873,
    "range": [
      1872,
      1873
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1878,
    "end": 1884,
    "range": [
      1878,
      1884
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1885,
    "end": 1888,
    "range": [
      1885,
      1888
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_im3_private_v1_public",
    "start": 1889,
    "end": 1913,
    "range": [
      1889,
      1913
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1914,
    "end": 1915,
    "range": [
      1914,
      1915
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_im3_private",
    "start": 1916,
    "end": 1930,
    "range": [
      1916,
      1930
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1930,
    "end": 1931,
    "range": [
      1930,
      1931
    ]
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 1931,
    "end": 1933,
    "range": [
      1931,
      1933
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1933,
    "end": 1934,
    "range": [
      1933,
      1934
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1939,
    "end": 1945,
    "range": [
      1939,
      1945
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1946,
    "end": 1949,
    "range": [
      1946,
      1949
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_im3_private_v2_public",
    "start": 1950,
    "end": 1974,
    "range": [
      1950,
      1974
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1975,
    "end": 1976,
    "range": [
      1975,
      1976
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1977,
    "end": 1980,
    "range": [
      1977,
      1980
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_im3_private",
    "start": 1981,
    "end": 1995,
    "range": [
      1981,
      1995
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1995,
    "end": 1996,
    "range": [
      1995,
      1996
    ]
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 1996,
    "end": 1998,
    "range": [
      1996,
      1998
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1998,
    "end": 1999,
    "range": [
      1998,
      1999
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1999,
    "end": 2000,
    "range": [
      1999,
      2000
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2000,
    "end": 2001,
    "range": [
      2000,
      2001
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2006,
    "end": 2012,
    "range": [
      2006,
      2012
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2013,
    "end": 2016,
    "range": [
      2013,
      2016
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_im3_private_v3_public",
    "start": 2017,
    "end": 2041,
    "range": [
      2017,
      2041
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2042,
    "end": 2043,
    "range": [
      2042,
      2043
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_im3_private",
    "start": 2044,
    "end": 2058,
    "range": [
      2044,
      2058
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2058,
    "end": 2059,
    "range": [
      2058,
      2059
    ]
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 2059,
    "end": 2061,
    "range": [
      2059,
      2061
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2061,
    "end": 2062,
    "range": [
      2061,
      2062
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2067,
    "end": 2073,
    "range": [
      2067,
      2073
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2074,
    "end": 2077,
    "range": [
      2074,
      2077
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_im3_private_v4_public",
    "start": 2078,
    "end": 2102,
    "range": [
      2078,
      2102
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2103,
    "end": 2104,
    "range": [
      2103,
      2104
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_im3_private",
    "start": 2105,
    "end": 2119,
    "range": [
      2105,
      2119
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2119,
    "end": 2120,
    "range": [
      2119,
      2120
    ]
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 2120,
    "end": 2122,
    "range": [
      2120,
      2122
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2122,
    "end": 2123,
    "range": [
      2122,
      2123
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2123,
    "end": 2124,
    "range": [
      2123,
      2124
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2124,
    "end": 2125,
    "range": [
      2124,
      2125
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2130,
    "end": 2133,
    "range": [
      2130,
      2133
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_im3_private_v1_private",
    "start": 2134,
    "end": 2159,
    "range": [
      2134,
      2159
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2160,
    "end": 2161,
    "range": [
      2160,
      2161
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_im3_private",
    "start": 2162,
    "end": 2176,
    "range": [
      2162,
      2176
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2176,
    "end": 2177,
    "range": [
      2176,
      2177
    ]
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 2177,
    "end": 2179,
    "range": [
      2177,
      2179
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2179,
    "end": 2180,
    "range": [
      2179,
      2180
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2185,
    "end": 2188,
    "range": [
      2185,
      2188
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_im3_private_v2_private",
    "start": 2189,
    "end": 2214,
    "range": [
      2189,
      2214
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2215,
    "end": 2216,
    "range": [
      2215,
      2216
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2217,
    "end": 2220,
    "range": [
      2217,
      2220
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_im3_private",
    "start": 2221,
    "end": 2235,
    "range": [
      2221,
      2235
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2235,
    "end": 2236,
    "range": [
      2235,
      2236
    ]
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 2236,
    "end": 2238,
    "range": [
      2236,
      2238
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2238,
    "end": 2239,
    "range": [
      2238,
      2239
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2239,
    "end": 2240,
    "range": [
      2239,
      2240
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2240,
    "end": 2241,
    "range": [
      2240,
      2241
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2246,
    "end": 2249,
    "range": [
      2246,
      2249
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_im3_private_v3_private",
    "start": 2250,
    "end": 2275,
    "range": [
      2250,
      2275
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2276,
    "end": 2277,
    "range": [
      2276,
      2277
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_im3_private",
    "start": 2278,
    "end": 2292,
    "range": [
      2278,
      2292
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2292,
    "end": 2293,
    "range": [
      2292,
      2293
    ]
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 2293,
    "end": 2295,
    "range": [
      2293,
      2295
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2295,
    "end": 2296,
    "range": [
      2295,
      2296
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2301,
    "end": 2304,
    "range": [
      2301,
      2304
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_im3_private_v4_private",
    "start": 2305,
    "end": 2330,
    "range": [
      2305,
      2330
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2331,
    "end": 2332,
    "range": [
      2331,
      2332
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_im3_private",
    "start": 2333,
    "end": 2347,
    "range": [
      2333,
      2347
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2347,
    "end": 2348,
    "range": [
      2347,
      2348
    ]
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 2348,
    "end": 2350,
    "range": [
      2348,
      2350
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2350,
    "end": 2351,
    "range": [
      2350,
      2351
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2351,
    "end": 2352,
    "range": [
      2351,
      2352
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2352,
    "end": 2353,
    "range": [
      2352,
      2353
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 2359,
    "end": 2365,
    "range": [
      2359,
      2365
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_im4_private",
    "start": 2366,
    "end": 2380,
    "range": [
      2366,
      2380
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2381,
    "end": 2382,
    "range": [
      2381,
      2382
    ]
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 2383,
    "end": 2390,
    "range": [
      2383,
      2390
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2390,
    "end": 2391,
    "range": [
      2390,
      2391
    ]
  },
  {
    "type": "String",
    "value": "\"m1_M4_private\"",
    "start": 2391,
    "end": 2406,
    "range": [
      2391,
      2406
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2406,
    "end": 2407,
    "range": [
      2406,
      2407
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2407,
    "end": 2408,
    "range": [
      2407,
      2408
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2413,
    "end": 2419,
    "range": [
      2413,
      2419
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2420,
    "end": 2423,
    "range": [
      2420,
      2423
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_im4_private_v1_public",
    "start": 2424,
    "end": 2448,
    "range": [
      2424,
      2448
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2449,
    "end": 2450,
    "range": [
      2449,
      2450
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_im4_private",
    "start": 2451,
    "end": 2465,
    "range": [
      2451,
      2465
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2465,
    "end": 2466,
    "range": [
      2465,
      2466
    ]
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 2466,
    "end": 2468,
    "range": [
      2466,
      2468
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2468,
    "end": 2469,
    "range": [
      2468,
      2469
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2474,
    "end": 2480,
    "range": [
      2474,
      2480
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2481,
    "end": 2484,
    "range": [
      2481,
      2484
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_im4_private_v2_public",
    "start": 2485,
    "end": 2509,
    "range": [
      2485,
      2509
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2510,
    "end": 2511,
    "range": [
      2510,
      2511
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2512,
    "end": 2515,
    "range": [
      2512,
      2515
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_im4_private",
    "start": 2516,
    "end": 2530,
    "range": [
      2516,
      2530
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2530,
    "end": 2531,
    "range": [
      2530,
      2531
    ]
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 2531,
    "end": 2533,
    "range": [
      2531,
      2533
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2533,
    "end": 2534,
    "range": [
      2533,
      2534
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2534,
    "end": 2535,
    "range": [
      2534,
      2535
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2535,
    "end": 2536,
    "range": [
      2535,
      2536
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2541,
    "end": 2547,
    "range": [
      2541,
      2547
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2548,
    "end": 2551,
    "range": [
      2548,
      2551
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_im4_private_v3_public",
    "start": 2552,
    "end": 2576,
    "range": [
      2552,
      2576
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2577,
    "end": 2578,
    "range": [
      2577,
      2578
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_im4_private",
    "start": 2579,
    "end": 2593,
    "range": [
      2579,
      2593
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2593,
    "end": 2594,
    "range": [
      2593,
      2594
    ]
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 2594,
    "end": 2596,
    "range": [
      2594,
      2596
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2596,
    "end": 2597,
    "range": [
      2596,
      2597
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2602,
    "end": 2608,
    "range": [
      2602,
      2608
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2609,
    "end": 2612,
    "range": [
      2609,
      2612
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_im4_private_v4_public",
    "start": 2613,
    "end": 2637,
    "range": [
      2613,
      2637
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2638,
    "end": 2639,
    "range": [
      2638,
      2639
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_im4_private",
    "start": 2640,
    "end": 2654,
    "range": [
      2640,
      2654
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2654,
    "end": 2655,
    "range": [
      2654,
      2655
    ]
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 2655,
    "end": 2657,
    "range": [
      2655,
      2657
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2657,
    "end": 2658,
    "range": [
      2657,
      2658
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2658,
    "end": 2659,
    "range": [
      2658,
      2659
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2659,
    "end": 2660,
    "range": [
      2659,
      2660
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2665,
    "end": 2668,
    "range": [
      2665,
      2668
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_im4_private_v1_private",
    "start": 2669,
    "end": 2694,
    "range": [
      2669,
      2694
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2695,
    "end": 2696,
    "range": [
      2695,
      2696
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_im4_private",
    "start": 2697,
    "end": 2711,
    "range": [
      2697,
      2711
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2711,
    "end": 2712,
    "range": [
      2711,
      2712
    ]
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 2712,
    "end": 2714,
    "range": [
      2712,
      2714
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2714,
    "end": 2715,
    "range": [
      2714,
      2715
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2720,
    "end": 2723,
    "range": [
      2720,
      2723
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_im4_private_v2_private",
    "start": 2724,
    "end": 2749,
    "range": [
      2724,
      2749
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2750,
    "end": 2751,
    "range": [
      2750,
      2751
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2752,
    "end": 2755,
    "range": [
      2752,
      2755
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_im4_private",
    "start": 2756,
    "end": 2770,
    "range": [
      2756,
      2770
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2770,
    "end": 2771,
    "range": [
      2770,
      2771
    ]
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 2771,
    "end": 2773,
    "range": [
      2771,
      2773
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2773,
    "end": 2774,
    "range": [
      2773,
      2774
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2774,
    "end": 2775,
    "range": [
      2774,
      2775
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2775,
    "end": 2776,
    "range": [
      2775,
      2776
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2781,
    "end": 2784,
    "range": [
      2781,
      2784
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_im4_private_v3_private",
    "start": 2785,
    "end": 2810,
    "range": [
      2785,
      2810
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2811,
    "end": 2812,
    "range": [
      2811,
      2812
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_im4_private",
    "start": 2813,
    "end": 2827,
    "range": [
      2813,
      2827
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2827,
    "end": 2828,
    "range": [
      2827,
      2828
    ]
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 2828,
    "end": 2830,
    "range": [
      2828,
      2830
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2830,
    "end": 2831,
    "range": [
      2830,
      2831
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2836,
    "end": 2839,
    "range": [
      2836,
      2839
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_im4_private_v4_private",
    "start": 2840,
    "end": 2865,
    "range": [
      2840,
      2865
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2866,
    "end": 2867,
    "range": [
      2866,
      2867
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_im4_private",
    "start": 2868,
    "end": 2882,
    "range": [
      2868,
      2882
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2882,
    "end": 2883,
    "range": [
      2882,
      2883
    ]
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 2883,
    "end": 2885,
    "range": [
      2883,
      2885
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2885,
    "end": 2886,
    "range": [
      2885,
      2886
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2886,
    "end": 2887,
    "range": [
      2886,
      2887
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2887,
    "end": 2888,
    "range": [
      2887,
      2888
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2894,
    "end": 2900,
    "range": [
      2894,
      2900
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 2901,
    "end": 2907,
    "range": [
      2901,
      2907
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_im1_public",
    "start": 2908,
    "end": 2921,
    "range": [
      2908,
      2921
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2922,
    "end": 2923,
    "range": [
      2922,
      2923
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_M1_public",
    "start": 2924,
    "end": 2936,
    "range": [
      2924,
      2936
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2936,
    "end": 2937,
    "range": [
      2936,
      2937
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2942,
    "end": 2948,
    "range": [
      2942,
      2948
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 2949,
    "end": 2955,
    "range": [
      2949,
      2955
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_im2_public",
    "start": 2956,
    "end": 2969,
    "range": [
      2956,
      2969
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2970,
    "end": 2971,
    "range": [
      2970,
      2971
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_M2_private",
    "start": 2972,
    "end": 2985,
    "range": [
      2972,
      2985
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2985,
    "end": 2986,
    "range": [
      2985,
      2986
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2991,
    "end": 2997,
    "range": [
      2991,
      2997
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 2998,
    "end": 3004,
    "range": [
      2998,
      3004
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_im3_public",
    "start": 3005,
    "end": 3018,
    "range": [
      3005,
      3018
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3019,
    "end": 3020,
    "range": [
      3019,
      3020
    ]
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 3021,
    "end": 3028,
    "range": [
      3021,
      3028
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3028,
    "end": 3029,
    "range": [
      3028,
      3029
    ]
  },
  {
    "type": "String",
    "value": "\"m1_M3_public\"",
    "start": 3029,
    "end": 3043,
    "range": [
      3029,
      3043
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3043,
    "end": 3044,
    "range": [
      3043,
      3044
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3044,
    "end": 3045,
    "range": [
      3044,
      3045
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 3050,
    "end": 3056,
    "range": [
      3050,
      3056
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 3057,
    "end": 3063,
    "range": [
      3057,
      3063
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_im4_public",
    "start": 3064,
    "end": 3077,
    "range": [
      3064,
      3077
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3078,
    "end": 3079,
    "range": [
      3078,
      3079
    ]
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 3080,
    "end": 3087,
    "range": [
      3080,
      3087
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3087,
    "end": 3088,
    "range": [
      3087,
      3088
    ]
  },
  {
    "type": "String",
    "value": "\"m1_M4_private\"",
    "start": 3088,
    "end": 3103,
    "range": [
      3088,
      3103
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3103,
    "end": 3104,
    "range": [
      3103,
      3104
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3104,
    "end": 3105,
    "range": [
      3104,
      3105
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3106,
    "end": 3107,
    "range": [
      3106,
      3107
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 3109,
    "end": 3118,
    "range": [
      3109,
      3118
    ]
  },
  {
    "type": "Identifier",
    "value": "glo_M1_public",
    "start": 3119,
    "end": 3132,
    "range": [
      3119,
      3132
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3133,
    "end": 3134,
    "range": [
      3133,
      3134
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 3139,
    "end": 3145,
    "range": [
      3139,
      3145
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 3146,
    "end": 3151,
    "range": [
      3146,
      3151
    ]
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 3152,
    "end": 3154,
    "range": [
      3152,
      3154
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3155,
    "end": 3156,
    "range": [
      3155,
      3156
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3161,
    "end": 3162,
    "range": [
      3161,
      3162
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 3167,
    "end": 3173,
    "range": [
      3167,
      3173
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3174,
    "end": 3182,
    "range": [
      3174,
      3182
    ]
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 3183,
    "end": 3185,
    "range": [
      3183,
      3185
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3185,
    "end": 3186,
    "range": [
      3185,
      3186
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3186,
    "end": 3187,
    "range": [
      3186,
      3187
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3188,
    "end": 3189,
    "range": [
      3188,
      3189
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3198,
    "end": 3204,
    "range": [
      3198,
      3204
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3205,
    "end": 3208,
    "range": [
      3205,
      3208
    ]
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 3209,
    "end": 3211,
    "range": [
      3209,
      3211
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3211,
    "end": 3212,
    "range": [
      3211,
      3212
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3217,
    "end": 3218,
    "range": [
      3217,
      3218
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 3223,
    "end": 3229,
    "range": [
      3223,
      3229
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3230,
    "end": 3233,
    "range": [
      3230,
      3233
    ]
  },
  {
    "type": "Identifier",
    "value": "v1",
    "start": 3234,
    "end": 3236,
    "range": [
      3234,
      3236
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3237,
    "end": 3238,
    "range": [
      3237,
      3238
    ]
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 3239,
    "end": 3241,
    "range": [
      3239,
      3241
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3241,
    "end": 3242,
    "range": [
      3241,
      3242
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 3247,
    "end": 3253,
    "range": [
      3247,
      3253
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3254,
    "end": 3257,
    "range": [
      3254,
      3257
    ]
  },
  {
    "type": "Identifier",
    "value": "v2",
    "start": 3258,
    "end": 3260,
    "range": [
      3258,
      3260
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3260,
    "end": 3261,
    "range": [
      3260,
      3261
    ]
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 3262,
    "end": 3264,
    "range": [
      3262,
      3264
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3264,
    "end": 3265,
    "range": [
      3264,
      3265
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3266,
    "end": 3267,
    "range": [
      3266,
      3267
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 3269,
    "end": 3276,
    "range": [
      3269,
      3276
    ]
  },
  {
    "type": "Identifier",
    "value": "module",
    "start": 3277,
    "end": 3283,
    "range": [
      3277,
      3283
    ]
  },
  {
    "type": "String",
    "value": "\"glo_M2_public\"",
    "start": 3284,
    "end": 3299,
    "range": [
      3284,
      3299
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3300,
    "end": 3301,
    "range": [
      3300,
      3301
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 3306,
    "end": 3312,
    "range": [
      3306,
      3312
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3313,
    "end": 3321,
    "range": [
      3313,
      3321
    ]
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 3322,
    "end": 3324,
    "range": [
      3322,
      3324
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3324,
    "end": 3325,
    "range": [
      3324,
      3325
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3325,
    "end": 3326,
    "range": [
      3325,
      3326
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3326,
    "end": 3327,
    "range": [
      3326,
      3327
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 3332,
    "end": 3338,
    "range": [
      3332,
      3338
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 3339,
    "end": 3344,
    "range": [
      3339,
      3344
    ]
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 3345,
    "end": 3347,
    "range": [
      3345,
      3347
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3348,
    "end": 3349,
    "range": [
      3348,
      3349
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3354,
    "end": 3355,
    "range": [
      3354,
      3355
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 3360,
    "end": 3366,
    "range": [
      3360,
      3366
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3367,
    "end": 3370,
    "range": [
      3367,
      3370
    ]
  },
  {
    "type": "Identifier",
    "value": "v1",
    "start": 3371,
    "end": 3373,
    "range": [
      3371,
      3373
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3373,
    "end": 3374,
    "range": [
      3373,
      3374
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3375,
    "end": 3376,
    "range": [
      3375,
      3376
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3377,
    "end": 3380,
    "range": [
      3377,
      3380
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3381,
    "end": 3382,
    "range": [
      3381,
      3382
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3382,
    "end": 3383,
    "range": [
      3382,
      3383
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3383,
    "end": 3384,
    "range": [
      3383,
      3384
    ]
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 3385,
    "end": 3387,
    "range": [
      3385,
      3387
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3387,
    "end": 3388,
    "range": [
      3387,
      3388
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3389,
    "end": 3390,
    "range": [
      3389,
      3390
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3390,
    "end": 3391,
    "range": [
      3390,
      3391
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 3396,
    "end": 3402,
    "range": [
      3396,
      3402
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3403,
    "end": 3406,
    "range": [
      3403,
      3406
    ]
  },
  {
    "type": "Identifier",
    "value": "v2",
    "start": 3407,
    "end": 3409,
    "range": [
      3407,
      3409
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3409,
    "end": 3410,
    "range": [
      3409,
      3410
    ]
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 3411,
    "end": 3413,
    "range": [
      3411,
      3413
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3413,
    "end": 3414,
    "range": [
      3413,
      3414
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3415,
    "end": 3416,
    "range": [
      3415,
      3416
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 3418,
    "end": 3425,
    "range": [
      3418,
      3425
    ]
  },
  {
    "type": "Identifier",
    "value": "module",
    "start": 3426,
    "end": 3432,
    "range": [
      3426,
      3432
    ]
  },
  {
    "type": "String",
    "value": "\"use_glo_M1_public\"",
    "start": 3433,
    "end": 3452,
    "range": [
      3433,
      3452
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3453,
    "end": 3454,
    "range": [
      3453,
      3454
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 3459,
    "end": 3465,
    "range": [
      3459,
      3465
    ]
  },
  {
    "type": "Identifier",
    "value": "use_glo_M1_public",
    "start": 3466,
    "end": 3483,
    "range": [
      3466,
      3483
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3484,
    "end": 3485,
    "range": [
      3484,
      3485
    ]
  },
  {
    "type": "Identifier",
    "value": "glo_M1_public",
    "start": 3486,
    "end": 3499,
    "range": [
      3486,
      3499
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3499,
    "end": 3500,
    "range": [
      3499,
      3500
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 3505,
    "end": 3511,
    "range": [
      3505,
      3511
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3512,
    "end": 3515,
    "range": [
      3512,
      3515
    ]
  },
  {
    "type": "Identifier",
    "value": "use_glo_M1_public_v1_public",
    "start": 3516,
    "end": 3543,
    "range": [
      3516,
      3543
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3543,
    "end": 3544,
    "range": [
      3543,
      3544
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3545,
    "end": 3546,
    "range": [
      3545,
      3546
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3547,
    "end": 3550,
    "range": [
      3547,
      3550
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3551,
    "end": 3552,
    "range": [
      3551,
      3552
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3552,
    "end": 3553,
    "range": [
      3552,
      3553
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3553,
    "end": 3554,
    "range": [
      3553,
      3554
    ]
  },
  {
    "type": "Identifier",
    "value": "use_glo_M1_public",
    "start": 3555,
    "end": 3572,
    "range": [
      3555,
      3572
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3572,
    "end": 3573,
    "range": [
      3572,
      3573
    ]
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 3573,
    "end": 3575,
    "range": [
      3573,
      3575
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3575,
    "end": 3576,
    "range": [
      3575,
      3576
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3577,
    "end": 3578,
    "range": [
      3577,
      3578
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3578,
    "end": 3579,
    "range": [
      3578,
      3579
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 3584,
    "end": 3590,
    "range": [
      3584,
      3590
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3591,
    "end": 3594,
    "range": [
      3591,
      3594
    ]
  },
  {
    "type": "Identifier",
    "value": "use_glo_M1_public_v2_public",
    "start": 3595,
    "end": 3622,
    "range": [
      3595,
      3622
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3622,
    "end": 3623,
    "range": [
      3622,
      3623
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 3624,
    "end": 3630,
    "range": [
      3624,
      3630
    ]
  },
  {
    "type": "Identifier",
    "value": "use_glo_M1_public",
    "start": 3631,
    "end": 3648,
    "range": [
      3631,
      3648
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3648,
    "end": 3649,
    "range": [
      3648,
      3649
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 3654,
    "end": 3660,
    "range": [
      3654,
      3660
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3661,
    "end": 3664,
    "range": [
      3661,
      3664
    ]
  },
  {
    "type": "Identifier",
    "value": "use_glo_M1_public_v3_public",
    "start": 3665,
    "end": 3692,
    "range": [
      3665,
      3692
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3692,
    "end": 3693,
    "range": [
      3692,
      3693
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3694,
    "end": 3695,
    "range": [
      3694,
      3695
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3695,
    "end": 3696,
    "range": [
      3695,
      3696
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3696,
    "end": 3698,
    "range": [
      3696,
      3698
    ]
  },
  {
    "type": "Identifier",
    "value": "use_glo_M1_public",
    "start": 3699,
    "end": 3716,
    "range": [
      3699,
      3716
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3716,
    "end": 3717,
    "range": [
      3716,
      3717
    ]
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 3717,
    "end": 3719,
    "range": [
      3717,
      3719
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3719,
    "end": 3720,
    "range": [
      3719,
      3720
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3725,
    "end": 3728,
    "range": [
      3725,
      3728
    ]
  },
  {
    "type": "Identifier",
    "value": "use_glo_M1_public_v1_private",
    "start": 3729,
    "end": 3757,
    "range": [
      3729,
      3757
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3757,
    "end": 3758,
    "range": [
      3757,
      3758
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3759,
    "end": 3760,
    "range": [
      3759,
      3760
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3761,
    "end": 3764,
    "range": [
      3761,
      3764
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3765,
    "end": 3766,
    "range": [
      3765,
      3766
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3766,
    "end": 3767,
    "range": [
      3766,
      3767
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3767,
    "end": 3768,
    "range": [
      3767,
      3768
    ]
  },
  {
    "type": "Identifier",
    "value": "use_glo_M1_public",
    "start": 3769,
    "end": 3786,
    "range": [
      3769,
      3786
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3786,
    "end": 3787,
    "range": [
      3786,
      3787
    ]
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 3787,
    "end": 3789,
    "range": [
      3787,
      3789
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3789,
    "end": 3790,
    "range": [
      3789,
      3790
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3791,
    "end": 3792,
    "range": [
      3791,
      3792
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3792,
    "end": 3793,
    "range": [
      3792,
      3793
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3798,
    "end": 3801,
    "range": [
      3798,
      3801
    ]
  },
  {
    "type": "Identifier",
    "value": "use_glo_M1_public_v2_private",
    "start": 3802,
    "end": 3830,
    "range": [
      3802,
      3830
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3830,
    "end": 3831,
    "range": [
      3830,
      3831
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 3832,
    "end": 3838,
    "range": [
      3832,
      3838
    ]
  },
  {
    "type": "Identifier",
    "value": "use_glo_M1_public",
    "start": 3839,
    "end": 3856,
    "range": [
      3839,
      3856
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3856,
    "end": 3857,
    "range": [
      3856,
      3857
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3862,
    "end": 3865,
    "range": [
      3862,
      3865
    ]
  },
  {
    "type": "Identifier",
    "value": "use_glo_M1_public_v3_private",
    "start": 3866,
    "end": 3894,
    "range": [
      3866,
      3894
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3894,
    "end": 3895,
    "range": [
      3894,
      3895
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3896,
    "end": 3897,
    "range": [
      3896,
      3897
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3897,
    "end": 3898,
    "range": [
      3897,
      3898
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3899,
    "end": 3901,
    "range": [
      3899,
      3901
    ]
  },
  {
    "type": "Identifier",
    "value": "use_glo_M1_public",
    "start": 3902,
    "end": 3919,
    "range": [
      3902,
      3919
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3919,
    "end": 3920,
    "range": [
      3919,
      3920
    ]
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 3920,
    "end": 3922,
    "range": [
      3920,
      3922
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3922,
    "end": 3923,
    "range": [
      3922,
      3923
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 3929,
    "end": 3935,
    "range": [
      3929,
      3935
    ]
  },
  {
    "type": "Identifier",
    "value": "use_glo_M2_public",
    "start": 3936,
    "end": 3953,
    "range": [
      3936,
      3953
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3954,
    "end": 3955,
    "range": [
      3954,
      3955
    ]
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 3956,
    "end": 3963,
    "range": [
      3956,
      3963
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3963,
    "end": 3964,
    "range": [
      3963,
      3964
    ]
  },
  {
    "type": "String",
    "value": "\"glo_M2_public\"",
    "start": 3964,
    "end": 3979,
    "range": [
      3964,
      3979
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3979,
    "end": 3980,
    "range": [
      3979,
      3980
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3980,
    "end": 3981,
    "range": [
      3980,
      3981
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 3986,
    "end": 3992,
    "range": [
      3986,
      3992
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3993,
    "end": 3996,
    "range": [
      3993,
      3996
    ]
  },
  {
    "type": "Identifier",
    "value": "use_glo_M2_public_v1_public",
    "start": 3997,
    "end": 4024,
    "range": [
      3997,
      4024
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4024,
    "end": 4025,
    "range": [
      4024,
      4025
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4026,
    "end": 4027,
    "range": [
      4026,
      4027
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 4028,
    "end": 4031,
    "range": [
      4028,
      4031
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4032,
    "end": 4033,
    "range": [
      4032,
      4033
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4033,
    "end": 4034,
    "range": [
      4033,
      4034
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4034,
    "end": 4035,
    "range": [
      4034,
      4035
    ]
  },
  {
    "type": "Identifier",
    "value": "use_glo_M2_public",
    "start": 4036,
    "end": 4053,
    "range": [
      4036,
      4053
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4053,
    "end": 4054,
    "range": [
      4053,
      4054
    ]
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 4054,
    "end": 4056,
    "range": [
      4054,
      4056
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4056,
    "end": 4057,
    "range": [
      4056,
      4057
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4058,
    "end": 4059,
    "range": [
      4058,
      4059
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4059,
    "end": 4060,
    "range": [
      4059,
      4060
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 4065,
    "end": 4071,
    "range": [
      4065,
      4071
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4072,
    "end": 4075,
    "range": [
      4072,
      4075
    ]
  },
  {
    "type": "Identifier",
    "value": "use_glo_M2_public_v2_public",
    "start": 4076,
    "end": 4103,
    "range": [
      4076,
      4103
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4103,
    "end": 4104,
    "range": [
      4103,
      4104
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 4105,
    "end": 4111,
    "range": [
      4105,
      4111
    ]
  },
  {
    "type": "Identifier",
    "value": "use_glo_M2_public",
    "start": 4112,
    "end": 4129,
    "range": [
      4112,
      4129
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4129,
    "end": 4130,
    "range": [
      4129,
      4130
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 4135,
    "end": 4141,
    "range": [
      4135,
      4141
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4142,
    "end": 4145,
    "range": [
      4142,
      4145
    ]
  },
  {
    "type": "Identifier",
    "value": "use_glo_M2_public_v3_public",
    "start": 4146,
    "end": 4173,
    "range": [
      4146,
      4173
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4173,
    "end": 4174,
    "range": [
      4173,
      4174
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4175,
    "end": 4176,
    "range": [
      4175,
      4176
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4176,
    "end": 4177,
    "range": [
      4176,
      4177
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4178,
    "end": 4180,
    "range": [
      4178,
      4180
    ]
  },
  {
    "type": "Identifier",
    "value": "use_glo_M2_public",
    "start": 4181,
    "end": 4198,
    "range": [
      4181,
      4198
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4198,
    "end": 4199,
    "range": [
      4198,
      4199
    ]
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 4199,
    "end": 4201,
    "range": [
      4199,
      4201
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4201,
    "end": 4202,
    "range": [
      4201,
      4202
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4207,
    "end": 4210,
    "range": [
      4207,
      4210
    ]
  },
  {
    "type": "Identifier",
    "value": "use_glo_M2_public_v1_private",
    "start": 4211,
    "end": 4239,
    "range": [
      4211,
      4239
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4239,
    "end": 4240,
    "range": [
      4239,
      4240
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4241,
    "end": 4242,
    "range": [
      4241,
      4242
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 4243,
    "end": 4246,
    "range": [
      4243,
      4246
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4247,
    "end": 4248,
    "range": [
      4247,
      4248
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4248,
    "end": 4249,
    "range": [
      4248,
      4249
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4249,
    "end": 4250,
    "range": [
      4249,
      4250
    ]
  },
  {
    "type": "Identifier",
    "value": "use_glo_M2_public",
    "start": 4251,
    "end": 4268,
    "range": [
      4251,
      4268
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4268,
    "end": 4269,
    "range": [
      4268,
      4269
    ]
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 4269,
    "end": 4271,
    "range": [
      4269,
      4271
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4271,
    "end": 4272,
    "range": [
      4271,
      4272
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4273,
    "end": 4274,
    "range": [
      4273,
      4274
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4274,
    "end": 4275,
    "range": [
      4274,
      4275
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4280,
    "end": 4283,
    "range": [
      4280,
      4283
    ]
  },
  {
    "type": "Identifier",
    "value": "use_glo_M2_public_v2_private",
    "start": 4284,
    "end": 4312,
    "range": [
      4284,
      4312
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4312,
    "end": 4313,
    "range": [
      4312,
      4313
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 4314,
    "end": 4320,
    "range": [
      4314,
      4320
    ]
  },
  {
    "type": "Identifier",
    "value": "use_glo_M2_public",
    "start": 4321,
    "end": 4338,
    "range": [
      4321,
      4338
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4338,
    "end": 4339,
    "range": [
      4338,
      4339
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4344,
    "end": 4347,
    "range": [
      4344,
      4347
    ]
  },
  {
    "type": "Identifier",
    "value": "use_glo_M2_public_v3_private",
    "start": 4348,
    "end": 4376,
    "range": [
      4348,
      4376
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4376,
    "end": 4377,
    "range": [
      4376,
      4377
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4378,
    "end": 4379,
    "range": [
      4378,
      4379
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4379,
    "end": 4380,
    "range": [
      4379,
      4380
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4381,
    "end": 4383,
    "range": [
      4381,
      4383
    ]
  },
  {
    "type": "Identifier",
    "value": "use_glo_M2_public",
    "start": 4384,
    "end": 4401,
    "range": [
      4384,
      4401
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4401,
    "end": 4402,
    "range": [
      4401,
      4402
    ]
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 4402,
    "end": 4404,
    "range": [
      4402,
      4404
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4404,
    "end": 4405,
    "range": [
      4404,
      4405
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 4411,
    "end": 4420,
    "range": [
      4411,
      4420
    ]
  },
  {
    "type": "Identifier",
    "value": "m2",
    "start": 4421,
    "end": 4423,
    "range": [
      4421,
      4423
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4424,
    "end": 4425,
    "range": [
      4424,
      4425
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 4434,
    "end": 4440,
    "range": [
      4434,
      4440
    ]
  },
  {
    "type": "Identifier",
    "value": "errorImport",
    "start": 4441,
    "end": 4452,
    "range": [
      4441,
      4452
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4453,
    "end": 4454,
    "range": [
      4453,
      4454
    ]
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 4455,
    "end": 4462,
    "range": [
      4455,
      4462
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4462,
    "end": 4463,
    "range": [
      4462,
      4463
    ]
  },
  {
    "type": "String",
    "value": "\"glo_M2_public\"",
    "start": 4463,
    "end": 4478,
    "range": [
      4463,
      4478
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4478,
    "end": 4479,
    "range": [
      4478,
      4479
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4479,
    "end": 4480,
    "range": [
      4479,
      4480
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 4489,
    "end": 4495,
    "range": [
      4489,
      4495
    ]
  },
  {
    "type": "Identifier",
    "value": "nonerrorImport",
    "start": 4496,
    "end": 4510,
    "range": [
      4496,
      4510
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4511,
    "end": 4512,
    "range": [
      4511,
      4512
    ]
  },
  {
    "type": "Identifier",
    "value": "glo_M1_public",
    "start": 4513,
    "end": 4526,
    "range": [
      4513,
      4526
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4526,
    "end": 4527,
    "range": [
      4526,
      4527
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 4537,
    "end": 4546,
    "range": [
      4537,
      4546
    ]
  },
  {
    "type": "Identifier",
    "value": "m5",
    "start": 4547,
    "end": 4549,
    "range": [
      4547,
      4549
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4550,
    "end": 4551,
    "range": [
      4550,
      4551
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 4564,
    "end": 4570,
    "range": [
      4564,
      4570
    ]
  },
  {
    "type": "Identifier",
    "value": "m5_errorImport",
    "start": 4571,
    "end": 4585,
    "range": [
      4571,
      4585
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4586,
    "end": 4587,
    "range": [
      4586,
      4587
    ]
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 4588,
    "end": 4595,
    "range": [
      4588,
      4595
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4595,
    "end": 4596,
    "range": [
      4595,
      4596
    ]
  },
  {
    "type": "String",
    "value": "\"glo_M2_public\"",
    "start": 4596,
    "end": 4611,
    "range": [
      4596,
      4611
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4611,
    "end": 4612,
    "range": [
      4611,
      4612
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4612,
    "end": 4613,
    "range": [
      4612,
      4613
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 4626,
    "end": 4632,
    "range": [
      4626,
      4632
    ]
  },
  {
    "type": "Identifier",
    "value": "m5_nonerrorImport",
    "start": 4633,
    "end": 4650,
    "range": [
      4633,
      4650
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4651,
    "end": 4652,
    "range": [
      4651,
      4652
    ]
  },
  {
    "type": "Identifier",
    "value": "glo_M1_public",
    "start": 4653,
    "end": 4666,
    "range": [
      4653,
      4666
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4666,
    "end": 4667,
    "range": [
      4666,
      4667
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4676,
    "end": 4677,
    "range": [
      4676,
      4677
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4682,
    "end": 4683,
    "range": [
      4682,
      4683
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4684,
    "end": 4685,
    "range": [
      4684,
      4685
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 4687,
    "end": 4694,
    "range": [
      4687,
      4694
    ]
  },
  {
    "type": "Identifier",
    "value": "module",
    "start": 4695,
    "end": 4701,
    "range": [
      4695,
      4701
    ]
  },
  {
    "type": "String",
    "value": "\"anotherParseError\"",
    "start": 4702,
    "end": 4721,
    "range": [
      4702,
      4721
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4722,
    "end": 4723,
    "range": [
      4722,
      4723
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 4728,
    "end": 4737,
    "range": [
      4728,
      4737
    ]
  },
  {
    "type": "Identifier",
    "value": "m2",
    "start": 4738,
    "end": 4740,
    "range": [
      4738,
      4740
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4741,
    "end": 4742,
    "range": [
      4741,
      4742
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 4751,
    "end": 4758,
    "range": [
      4751,
      4758
    ]
  },
  {
    "type": "Identifier",
    "value": "module",
    "start": 4759,
    "end": 4765,
    "range": [
      4759,
      4765
    ]
  },
  {
    "type": "String",
    "value": "\"abc\"",
    "start": 4766,
    "end": 4771,
    "range": [
      4766,
      4771
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4772,
    "end": 4773,
    "range": [
      4772,
      4773
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4782,
    "end": 4783,
    "range": [
      4782,
      4783
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4788,
    "end": 4789,
    "range": [
      4788,
      4789
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 4795,
    "end": 4804,
    "range": [
      4795,
      4804
    ]
  },
  {
    "type": "Identifier",
    "value": "m2",
    "start": 4805,
    "end": 4807,
    "range": [
      4805,
      4807
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4808,
    "end": 4809,
    "range": [
      4808,
      4809
    ]
  },
  {
    "type": "Identifier",
    "value": "module",
    "start": 4818,
    "end": 4824,
    "range": [
      4818,
      4824
    ]
  },
  {
    "type": "String",
    "value": "\"abc2\"",
    "start": 4825,
    "end": 4831,
    "range": [
      4825,
      4831
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4832,
    "end": 4833,
    "range": [
      4832,
      4833
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4842,
    "end": 4843,
    "range": [
      4842,
      4843
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4848,
    "end": 4849,
    "range": [
      4848,
      4849
    ]
  },
  {
    "type": "Identifier",
    "value": "module",
    "start": 4854,
    "end": 4860,
    "range": [
      4854,
      4860
    ]
  },
  {
    "type": "String",
    "value": "\"abc3\"",
    "start": 4861,
    "end": 4867,
    "range": [
      4861,
      4867
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4868,
    "end": 4869,
    "range": [
      4868,
      4869
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4874,
    "end": 4875,
    "range": [
      4874,
      4875
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4876,
    "end": 4877,
    "range": [
      4876,
      4877
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 4879,
    "end": 4888,
    "range": [
      4879,
      4888
    ]
  },
  {
    "type": "Identifier",
    "value": "m2",
    "start": 4889,
    "end": 4891,
    "range": [
      4889,
      4891
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4892,
    "end": 4893,
    "range": [
      4892,
      4893
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 4898,
    "end": 4904,
    "range": [
      4898,
      4904
    ]
  },
  {
    "type": "Identifier",
    "value": "m3",
    "start": 4905,
    "end": 4907,
    "range": [
      4905,
      4907
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4908,
    "end": 4909,
    "range": [
      4908,
      4909
    ]
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 4910,
    "end": 4917,
    "range": [
      4910,
      4917
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4917,
    "end": 4918,
    "range": [
      4917,
      4918
    ]
  },
  {
    "type": "String",
    "value": "\"use_glo_M1_public\"",
    "start": 4918,
    "end": 4937,
    "range": [
      4918,
      4937
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4937,
    "end": 4938,
    "range": [
      4937,
      4938
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4938,
    "end": 4939,
    "range": [
      4938,
      4939
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 4944,
    "end": 4953,
    "range": [
      4944,
      4953
    ]
  },
  {
    "type": "Identifier",
    "value": "m4",
    "start": 4954,
    "end": 4956,
    "range": [
      4954,
      4956
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4957,
    "end": 4958,
    "range": [
      4957,
      4958
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4967,
    "end": 4970,
    "range": [
      4967,
      4970
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 4971,
    "end": 4972,
    "range": [
      4971,
      4972
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4973,
    "end": 4974,
    "range": [
      4973,
      4974
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 4975,
    "end": 4977,
    "range": [
      4975,
      4977
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4977,
    "end": 4978,
    "range": [
      4977,
      4978
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 4987,
    "end": 4993,
    "range": [
      4987,
      4993
    ]
  },
  {
    "type": "Identifier",
    "value": "m2",
    "start": 4994,
    "end": 4996,
    "range": [
      4994,
      4996
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4997,
    "end": 4998,
    "range": [
      4997,
      4998
    ]
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 4999,
    "end": 5006,
    "range": [
      4999,
      5006
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5006,
    "end": 5007,
    "range": [
      5006,
      5007
    ]
  },
  {
    "type": "String",
    "value": "\"use_glo_M1_public\"",
    "start": 5007,
    "end": 5026,
    "range": [
      5007,
      5026
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5026,
    "end": 5027,
    "range": [
      5026,
      5027
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5027,
    "end": 5028,
    "range": [
      5027,
      5028
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5033,
    "end": 5034,
    "range": [
      5033,
      5034
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5036,
    "end": 5037,
    "range": [
      5036,
      5037
    ]
  }
]
```
