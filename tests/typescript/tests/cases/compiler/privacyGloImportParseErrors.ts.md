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
