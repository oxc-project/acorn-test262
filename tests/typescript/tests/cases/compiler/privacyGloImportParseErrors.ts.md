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
        "start": 7,
        "end": 9
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
                "start": 30,
                "end": 42
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
                        "start": 66,
                        "end": 68
                      },
                      "typeParameters": null,
                      "superClass": null,
                      "superTypeArguments": null,
                      "implements": [],
                      "body": {
                        "type": "ClassBody",
                        "body": [],
                        "start": 69,
                        "end": 80
                      },
                      "abstract": false,
                      "declare": false,
                      "start": 60,
                      "end": 80
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 53,
                    "end": 80
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
                        "start": 105,
                        "end": 107
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
                                "start": 135,
                                "end": 137
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 131,
                              "end": 137
                            },
                            "start": 124,
                            "end": 138
                          }
                        ],
                        "start": 110,
                        "end": 148
                      },
                      "expression": false,
                      "start": 96,
                      "end": 148
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 89,
                    "end": 148
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
                            "start": 168,
                            "end": 170
                          },
                          "init": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "c1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 173,
                            "end": 175
                          },
                          "definite": false,
                          "start": 168,
                          "end": 175
                        }
                      ],
                      "declare": false,
                      "start": 164,
                      "end": 176
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 157,
                    "end": 176
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
                                  "start": 200,
                                  "end": 202
                                },
                                "typeArguments": null,
                                "start": 200,
                                "end": 202
                              },
                              "start": 198,
                              "end": 202
                            },
                            "start": 196,
                            "end": 202
                          },
                          "init": null,
                          "definite": false,
                          "start": 196,
                          "end": 202
                        }
                      ],
                      "declare": false,
                      "start": 192,
                      "end": 203
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 185,
                    "end": 203
                  }
                ],
                "start": 43,
                "end": 209
              },
              "kind": "module",
              "declare": false,
              "global": false,
              "start": 23,
              "end": 209
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 16,
            "end": 209
          },
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m1_M2_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 222,
              "end": 235
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
                      "start": 259,
                      "end": 261
                    },
                    "typeParameters": null,
                    "superClass": null,
                    "superTypeArguments": null,
                    "implements": [],
                    "body": {
                      "type": "ClassBody",
                      "body": [],
                      "start": 262,
                      "end": 273
                    },
                    "abstract": false,
                    "declare": false,
                    "start": 253,
                    "end": 273
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": [],
                  "start": 246,
                  "end": 273
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
                      "start": 298,
                      "end": 300
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
                              "start": 328,
                              "end": 330
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "start": 324,
                            "end": 330
                          },
                          "start": 317,
                          "end": 331
                        }
                      ],
                      "start": 303,
                      "end": 341
                    },
                    "expression": false,
                    "start": 289,
                    "end": 341
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": [],
                  "start": 282,
                  "end": 341
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
                          "start": 361,
                          "end": 363
                        },
                        "init": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 366,
                          "end": 368
                        },
                        "definite": false,
                        "start": 361,
                        "end": 368
                      }
                    ],
                    "declare": false,
                    "start": 357,
                    "end": 369
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": [],
                  "start": 350,
                  "end": 369
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
                                "start": 393,
                                "end": 395
                              },
                              "typeArguments": null,
                              "start": 393,
                              "end": 395
                            },
                            "start": 391,
                            "end": 395
                          },
                          "start": 389,
                          "end": 395
                        },
                        "init": null,
                        "definite": false,
                        "start": 389,
                        "end": 395
                      }
                    ],
                    "declare": false,
                    "start": 385,
                    "end": 396
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": [],
                  "start": 378,
                  "end": 396
                }
              ],
              "start": 236,
              "end": 402
            },
            "kind": "module",
            "declare": false,
            "global": false,
            "start": 215,
            "end": 402
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSModuleDeclaration",
              "id": {
                "type": "Literal",
                "value": "m1_M3_public",
                "raw": "\"m1_M3_public\"",
                "start": 430,
                "end": 444
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
                        "start": 471,
                        "end": 473
                      },
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": null,
                      "expression": false,
                      "start": 462,
                      "end": 476
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 455,
                    "end": 476
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
                        "start": 498,
                        "end": 500
                      },
                      "typeParameters": null,
                      "superClass": null,
                      "superTypeArguments": null,
                      "implements": [],
                      "body": {
                        "type": "ClassBody",
                        "body": [],
                        "start": 501,
                        "end": 512
                      },
                      "abstract": false,
                      "declare": false,
                      "start": 492,
                      "end": 512
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 485,
                    "end": 512
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
                                          "start": 546,
                                          "end": 548
                                        },
                                        "typeArguments": null,
                                        "start": 546,
                                        "end": 548
                                      },
                                      "start": 544,
                                      "end": 548
                                    },
                                    "start": 538,
                                    "end": 549
                                  }
                                ],
                                "start": 536,
                                "end": 551
                              },
                              "start": 534,
                              "end": 551
                            },
                            "start": 532,
                            "end": 551
                          },
                          "init": null,
                          "definite": false,
                          "start": 532,
                          "end": 551
                        }
                      ],
                      "declare": false,
                      "start": 528,
                      "end": 552
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 521,
                    "end": 552
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
                                  "start": 576,
                                  "end": 578
                                },
                                "typeArguments": null,
                                "start": 576,
                                "end": 578
                              },
                              "start": 574,
                              "end": 578
                            },
                            "start": 572,
                            "end": 578
                          },
                          "init": null,
                          "definite": false,
                          "start": 572,
                          "end": 578
                        }
                      ],
                      "declare": false,
                      "start": 568,
                      "end": 579
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 561,
                    "end": 579
                  }
                ],
                "start": 445,
                "end": 585
              },
              "kind": "module",
              "declare": true,
              "global": false,
              "start": 415,
              "end": 585
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 408,
            "end": 585
          },
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Literal",
              "value": "m1_M4_private",
              "raw": "\"m1_M4_private\"",
              "start": 606,
              "end": 621
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
                      "start": 648,
                      "end": 650
                    },
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": null,
                    "expression": false,
                    "start": 639,
                    "end": 653
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": [],
                  "start": 632,
                  "end": 653
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
                      "start": 675,
                      "end": 677
                    },
                    "typeParameters": null,
                    "superClass": null,
                    "superTypeArguments": null,
                    "implements": [],
                    "body": {
                      "type": "ClassBody",
                      "body": [],
                      "start": 678,
                      "end": 689
                    },
                    "abstract": false,
                    "declare": false,
                    "start": 669,
                    "end": 689
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": [],
                  "start": 662,
                  "end": 689
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
                                        "start": 723,
                                        "end": 725
                                      },
                                      "typeArguments": null,
                                      "start": 723,
                                      "end": 725
                                    },
                                    "start": 721,
                                    "end": 725
                                  },
                                  "start": 715,
                                  "end": 726
                                }
                              ],
                              "start": 713,
                              "end": 728
                            },
                            "start": 711,
                            "end": 728
                          },
                          "start": 709,
                          "end": 728
                        },
                        "init": null,
                        "definite": false,
                        "start": 709,
                        "end": 728
                      }
                    ],
                    "declare": false,
                    "start": 705,
                    "end": 729
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": [],
                  "start": 698,
                  "end": 729
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
                                "start": 753,
                                "end": 755
                              },
                              "typeArguments": null,
                              "start": 753,
                              "end": 755
                            },
                            "start": 751,
                            "end": 755
                          },
                          "start": 749,
                          "end": 755
                        },
                        "init": null,
                        "definite": false,
                        "start": 749,
                        "end": 755
                      }
                    ],
                    "declare": false,
                    "start": 745,
                    "end": 756
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": [],
                  "start": 738,
                  "end": 756
                }
              ],
              "start": 622,
              "end": 762
            },
            "kind": "module",
            "declare": true,
            "global": false,
            "start": 591,
            "end": 762
          },
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m1_im1_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 775,
              "end": 789
            },
            "moduleReference": {
              "type": "Identifier",
              "decorators": [],
              "name": "m1_M1_public",
              "optional": false,
              "typeAnnotation": null,
              "start": 792,
              "end": 804
            },
            "importKind": "value",
            "start": 768,
            "end": 805
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
                    "start": 821,
                    "end": 845
                  },
                  "init": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m1_im1_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 848,
                      "end": 862
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 863,
                      "end": 865
                    },
                    "optional": false,
                    "computed": false,
                    "start": 848,
                    "end": 865
                  },
                  "definite": false,
                  "start": 821,
                  "end": 865
                }
              ],
              "declare": false,
              "start": 817,
              "end": 866
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 810,
            "end": 866
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
                    "start": 882,
                    "end": 906
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
                        "start": 913,
                        "end": 927
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 928,
                        "end": 930
                      },
                      "optional": false,
                      "computed": false,
                      "start": 913,
                      "end": 930
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 909,
                    "end": 932
                  },
                  "definite": false,
                  "start": 882,
                  "end": 932
                }
              ],
              "declare": false,
              "start": 878,
              "end": 933
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 871,
            "end": 933
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
                    "start": 949,
                    "end": 973
                  },
                  "init": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m1_im1_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 976,
                      "end": 990
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 991,
                      "end": 993
                    },
                    "optional": false,
                    "computed": false,
                    "start": 976,
                    "end": 993
                  },
                  "definite": false,
                  "start": 949,
                  "end": 993
                }
              ],
              "declare": false,
              "start": 945,
              "end": 994
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 938,
            "end": 994
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
                    "start": 1010,
                    "end": 1034
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
                        "start": 1037,
                        "end": 1051
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "f1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1052,
                        "end": 1054
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1037,
                      "end": 1054
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 1037,
                    "end": 1056
                  },
                  "definite": false,
                  "start": 1010,
                  "end": 1056
                }
              ],
              "declare": false,
              "start": 1006,
              "end": 1057
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 999,
            "end": 1057
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
                  "start": 1066,
                  "end": 1091
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m1_im1_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1094,
                    "end": 1108
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1109,
                    "end": 1111
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1094,
                  "end": 1111
                },
                "definite": false,
                "start": 1066,
                "end": 1111
              }
            ],
            "declare": false,
            "start": 1062,
            "end": 1112
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
                  "start": 1121,
                  "end": 1146
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
                      "start": 1153,
                      "end": 1167
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1168,
                      "end": 1170
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1153,
                    "end": 1170
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "start": 1149,
                  "end": 1172
                },
                "definite": false,
                "start": 1121,
                "end": 1172
              }
            ],
            "declare": false,
            "start": 1117,
            "end": 1173
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
                  "start": 1182,
                  "end": 1207
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m1_im1_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1210,
                    "end": 1224
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1225,
                    "end": 1227
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1210,
                  "end": 1227
                },
                "definite": false,
                "start": 1182,
                "end": 1227
              }
            ],
            "declare": false,
            "start": 1178,
            "end": 1228
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
                  "start": 1237,
                  "end": 1262
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
                      "start": 1265,
                      "end": 1279
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1280,
                      "end": 1282
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1265,
                    "end": 1282
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 1265,
                  "end": 1284
                },
                "definite": false,
                "start": 1237,
                "end": 1284
              }
            ],
            "declare": false,
            "start": 1233,
            "end": 1285
          },
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m1_im2_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 1299,
              "end": 1313
            },
            "moduleReference": {
              "type": "Identifier",
              "decorators": [],
              "name": "m1_M2_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 1316,
              "end": 1329
            },
            "importKind": "value",
            "start": 1292,
            "end": 1330
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
                    "start": 1346,
                    "end": 1370
                  },
                  "init": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m1_im2_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1373,
                      "end": 1387
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1388,
                      "end": 1390
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1373,
                    "end": 1390
                  },
                  "definite": false,
                  "start": 1346,
                  "end": 1390
                }
              ],
              "declare": false,
              "start": 1342,
              "end": 1391
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1335,
            "end": 1391
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
                    "start": 1407,
                    "end": 1431
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
                        "start": 1438,
                        "end": 1452
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1453,
                        "end": 1455
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1438,
                      "end": 1455
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 1434,
                    "end": 1457
                  },
                  "definite": false,
                  "start": 1407,
                  "end": 1457
                }
              ],
              "declare": false,
              "start": 1403,
              "end": 1458
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1396,
            "end": 1458
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
                    "start": 1474,
                    "end": 1498
                  },
                  "init": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m1_im2_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1501,
                      "end": 1515
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1516,
                      "end": 1518
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1501,
                    "end": 1518
                  },
                  "definite": false,
                  "start": 1474,
                  "end": 1518
                }
              ],
              "declare": false,
              "start": 1470,
              "end": 1519
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1463,
            "end": 1519
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
                    "start": 1535,
                    "end": 1559
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
                        "start": 1562,
                        "end": 1576
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "f1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1577,
                        "end": 1579
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1562,
                      "end": 1579
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 1562,
                    "end": 1581
                  },
                  "definite": false,
                  "start": 1535,
                  "end": 1581
                }
              ],
              "declare": false,
              "start": 1531,
              "end": 1582
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1524,
            "end": 1582
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
                  "start": 1591,
                  "end": 1616
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m1_im2_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1619,
                    "end": 1633
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1634,
                    "end": 1636
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1619,
                  "end": 1636
                },
                "definite": false,
                "start": 1591,
                "end": 1636
              }
            ],
            "declare": false,
            "start": 1587,
            "end": 1637
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
                  "start": 1646,
                  "end": 1671
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
                      "start": 1678,
                      "end": 1692
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1693,
                      "end": 1695
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1678,
                    "end": 1695
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "start": 1674,
                  "end": 1697
                },
                "definite": false,
                "start": 1646,
                "end": 1697
              }
            ],
            "declare": false,
            "start": 1642,
            "end": 1698
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
                  "start": 1707,
                  "end": 1732
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m1_im2_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1735,
                    "end": 1749
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1750,
                    "end": 1752
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1735,
                  "end": 1752
                },
                "definite": false,
                "start": 1707,
                "end": 1752
              }
            ],
            "declare": false,
            "start": 1703,
            "end": 1753
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
                  "start": 1762,
                  "end": 1787
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
                      "start": 1790,
                      "end": 1804
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1805,
                      "end": 1807
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1790,
                    "end": 1807
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 1790,
                  "end": 1809
                },
                "definite": false,
                "start": 1762,
                "end": 1809
              }
            ],
            "declare": false,
            "start": 1758,
            "end": 1810
          },
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m1_im3_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 1823,
              "end": 1837
            },
            "moduleReference": {
              "type": "TSExternalModuleReference",
              "expression": {
                "type": "Literal",
                "value": "m1_M3_public",
                "raw": "\"m1_M3_public\"",
                "start": 1848,
                "end": 1862
              },
              "start": 1840,
              "end": 1863
            },
            "importKind": "value",
            "start": 1816,
            "end": 1864
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
                    "start": 1880,
                    "end": 1904
                  },
                  "init": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m1_im3_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1907,
                      "end": 1921
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1922,
                      "end": 1924
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1907,
                    "end": 1924
                  },
                  "definite": false,
                  "start": 1880,
                  "end": 1924
                }
              ],
              "declare": false,
              "start": 1876,
              "end": 1925
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1869,
            "end": 1925
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
                    "start": 1941,
                    "end": 1965
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
                        "start": 1972,
                        "end": 1986
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1987,
                        "end": 1989
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1972,
                      "end": 1989
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 1968,
                    "end": 1991
                  },
                  "definite": false,
                  "start": 1941,
                  "end": 1991
                }
              ],
              "declare": false,
              "start": 1937,
              "end": 1992
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1930,
            "end": 1992
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
                    "start": 2008,
                    "end": 2032
                  },
                  "init": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m1_im3_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2035,
                      "end": 2049
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2050,
                      "end": 2052
                    },
                    "optional": false,
                    "computed": false,
                    "start": 2035,
                    "end": 2052
                  },
                  "definite": false,
                  "start": 2008,
                  "end": 2052
                }
              ],
              "declare": false,
              "start": 2004,
              "end": 2053
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1997,
            "end": 2053
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
                    "start": 2069,
                    "end": 2093
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
                        "start": 2096,
                        "end": 2110
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "f1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2111,
                        "end": 2113
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2096,
                      "end": 2113
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 2096,
                    "end": 2115
                  },
                  "definite": false,
                  "start": 2069,
                  "end": 2115
                }
              ],
              "declare": false,
              "start": 2065,
              "end": 2116
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 2058,
            "end": 2116
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
                  "start": 2125,
                  "end": 2150
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m1_im3_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2153,
                    "end": 2167
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2168,
                    "end": 2170
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2153,
                  "end": 2170
                },
                "definite": false,
                "start": 2125,
                "end": 2170
              }
            ],
            "declare": false,
            "start": 2121,
            "end": 2171
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
                  "start": 2180,
                  "end": 2205
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
                      "start": 2212,
                      "end": 2226
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2227,
                      "end": 2229
                    },
                    "optional": false,
                    "computed": false,
                    "start": 2212,
                    "end": 2229
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "start": 2208,
                  "end": 2231
                },
                "definite": false,
                "start": 2180,
                "end": 2231
              }
            ],
            "declare": false,
            "start": 2176,
            "end": 2232
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
                  "start": 2241,
                  "end": 2266
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m1_im3_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2269,
                    "end": 2283
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2284,
                    "end": 2286
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2269,
                  "end": 2286
                },
                "definite": false,
                "start": 2241,
                "end": 2286
              }
            ],
            "declare": false,
            "start": 2237,
            "end": 2287
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
                  "start": 2296,
                  "end": 2321
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
                      "start": 2324,
                      "end": 2338
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2339,
                      "end": 2341
                    },
                    "optional": false,
                    "computed": false,
                    "start": 2324,
                    "end": 2341
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 2324,
                  "end": 2343
                },
                "definite": false,
                "start": 2296,
                "end": 2343
              }
            ],
            "declare": false,
            "start": 2292,
            "end": 2344
          },
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m1_im4_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 2357,
              "end": 2371
            },
            "moduleReference": {
              "type": "TSExternalModuleReference",
              "expression": {
                "type": "Literal",
                "value": "m1_M4_private",
                "raw": "\"m1_M4_private\"",
                "start": 2382,
                "end": 2397
              },
              "start": 2374,
              "end": 2398
            },
            "importKind": "value",
            "start": 2350,
            "end": 2399
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
                    "start": 2415,
                    "end": 2439
                  },
                  "init": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m1_im4_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2442,
                      "end": 2456
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2457,
                      "end": 2459
                    },
                    "optional": false,
                    "computed": false,
                    "start": 2442,
                    "end": 2459
                  },
                  "definite": false,
                  "start": 2415,
                  "end": 2459
                }
              ],
              "declare": false,
              "start": 2411,
              "end": 2460
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 2404,
            "end": 2460
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
                    "start": 2476,
                    "end": 2500
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
                        "start": 2507,
                        "end": 2521
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2522,
                        "end": 2524
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2507,
                      "end": 2524
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 2503,
                    "end": 2526
                  },
                  "definite": false,
                  "start": 2476,
                  "end": 2526
                }
              ],
              "declare": false,
              "start": 2472,
              "end": 2527
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 2465,
            "end": 2527
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
                    "start": 2543,
                    "end": 2567
                  },
                  "init": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m1_im4_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2570,
                      "end": 2584
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2585,
                      "end": 2587
                    },
                    "optional": false,
                    "computed": false,
                    "start": 2570,
                    "end": 2587
                  },
                  "definite": false,
                  "start": 2543,
                  "end": 2587
                }
              ],
              "declare": false,
              "start": 2539,
              "end": 2588
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 2532,
            "end": 2588
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
                    "start": 2604,
                    "end": 2628
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
                        "start": 2631,
                        "end": 2645
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "f1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2646,
                        "end": 2648
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2631,
                      "end": 2648
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 2631,
                    "end": 2650
                  },
                  "definite": false,
                  "start": 2604,
                  "end": 2650
                }
              ],
              "declare": false,
              "start": 2600,
              "end": 2651
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 2593,
            "end": 2651
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
                  "start": 2660,
                  "end": 2685
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m1_im4_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2688,
                    "end": 2702
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2703,
                    "end": 2705
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2688,
                  "end": 2705
                },
                "definite": false,
                "start": 2660,
                "end": 2705
              }
            ],
            "declare": false,
            "start": 2656,
            "end": 2706
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
                  "start": 2715,
                  "end": 2740
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
                      "start": 2747,
                      "end": 2761
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2762,
                      "end": 2764
                    },
                    "optional": false,
                    "computed": false,
                    "start": 2747,
                    "end": 2764
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "start": 2743,
                  "end": 2766
                },
                "definite": false,
                "start": 2715,
                "end": 2766
              }
            ],
            "declare": false,
            "start": 2711,
            "end": 2767
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
                  "start": 2776,
                  "end": 2801
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m1_im4_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2804,
                    "end": 2818
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2819,
                    "end": 2821
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2804,
                  "end": 2821
                },
                "definite": false,
                "start": 2776,
                "end": 2821
              }
            ],
            "declare": false,
            "start": 2772,
            "end": 2822
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
                  "start": 2831,
                  "end": 2856
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
                      "start": 2859,
                      "end": 2873
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2874,
                      "end": 2876
                    },
                    "optional": false,
                    "computed": false,
                    "start": 2859,
                    "end": 2876
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 2859,
                  "end": 2878
                },
                "definite": false,
                "start": 2831,
                "end": 2878
              }
            ],
            "declare": false,
            "start": 2827,
            "end": 2879
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
                "start": 2899,
                "end": 2912
              },
              "moduleReference": {
                "type": "Identifier",
                "decorators": [],
                "name": "m1_M1_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 2915,
                "end": 2927
              },
              "importKind": "value",
              "start": 2892,
              "end": 2928
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 2885,
            "end": 2928
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
                "start": 2947,
                "end": 2960
              },
              "moduleReference": {
                "type": "Identifier",
                "decorators": [],
                "name": "m1_M2_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 2963,
                "end": 2976
              },
              "importKind": "value",
              "start": 2940,
              "end": 2977
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 2933,
            "end": 2977
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
                "start": 2996,
                "end": 3009
              },
              "moduleReference": {
                "type": "TSExternalModuleReference",
                "expression": {
                  "type": "Literal",
                  "value": "m1_M3_public",
                  "raw": "\"m1_M3_public\"",
                  "start": 3020,
                  "end": 3034
                },
                "start": 3012,
                "end": 3035
              },
              "importKind": "value",
              "start": 2989,
              "end": 3036
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 2982,
            "end": 3036
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
                "start": 3055,
                "end": 3068
              },
              "moduleReference": {
                "type": "TSExternalModuleReference",
                "expression": {
                  "type": "Literal",
                  "value": "m1_M4_private",
                  "raw": "\"m1_M4_private\"",
                  "start": 3079,
                  "end": 3094
                },
                "start": 3071,
                "end": 3095
              },
              "importKind": "value",
              "start": 3048,
              "end": 3096
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 3041,
            "end": 3096
          }
        ],
        "start": 10,
        "end": 3098
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 3098
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "glo_M1_public",
        "optional": false,
        "typeAnnotation": null,
        "start": 3107,
        "end": 3120
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
                "start": 3140,
                "end": 3142
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 3143,
                "end": 3150
              },
              "abstract": false,
              "declare": false,
              "start": 3134,
              "end": 3150
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 3127,
            "end": 3150
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
                "start": 3171,
                "end": 3173
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
                        "start": 3197,
                        "end": 3199
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 3193,
                      "end": 3199
                    },
                    "start": 3186,
                    "end": 3200
                  }
                ],
                "start": 3176,
                "end": 3206
              },
              "expression": false,
              "start": 3162,
              "end": 3206
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 3155,
            "end": 3206
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
                    "start": 3222,
                    "end": 3224
                  },
                  "init": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3227,
                    "end": 3229
                  },
                  "definite": false,
                  "start": 3222,
                  "end": 3229
                }
              ],
              "declare": false,
              "start": 3218,
              "end": 3230
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 3211,
            "end": 3230
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
                          "start": 3250,
                          "end": 3252
                        },
                        "typeArguments": null,
                        "start": 3250,
                        "end": 3252
                      },
                      "start": 3248,
                      "end": 3252
                    },
                    "start": 3246,
                    "end": 3252
                  },
                  "init": null,
                  "definite": false,
                  "start": 3246,
                  "end": 3252
                }
              ],
              "declare": false,
              "start": 3242,
              "end": 3253
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 3235,
            "end": 3253
          }
        ],
        "start": 3121,
        "end": 3255
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 3100,
      "end": 3255
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "glo_M2_public",
        "raw": "\"glo_M2_public\"",
        "start": 3272,
        "end": 3287
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
                "start": 3310,
                "end": 3312
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 3301,
              "end": 3315
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 3294,
            "end": 3315
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
                "start": 3333,
                "end": 3335
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 3336,
                "end": 3343
              },
              "abstract": false,
              "declare": false,
              "start": 3327,
              "end": 3343
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 3320,
            "end": 3343
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
                                  "start": 3373,
                                  "end": 3375
                                },
                                "typeArguments": null,
                                "start": 3373,
                                "end": 3375
                              },
                              "start": 3371,
                              "end": 3375
                            },
                            "start": 3365,
                            "end": 3376
                          }
                        ],
                        "start": 3363,
                        "end": 3378
                      },
                      "start": 3361,
                      "end": 3378
                    },
                    "start": 3359,
                    "end": 3378
                  },
                  "init": null,
                  "definite": false,
                  "start": 3359,
                  "end": 3378
                }
              ],
              "declare": false,
              "start": 3355,
              "end": 3379
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 3348,
            "end": 3379
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
                          "start": 3399,
                          "end": 3401
                        },
                        "typeArguments": null,
                        "start": 3399,
                        "end": 3401
                      },
                      "start": 3397,
                      "end": 3401
                    },
                    "start": 3395,
                    "end": 3401
                  },
                  "init": null,
                  "definite": false,
                  "start": 3395,
                  "end": 3401
                }
              ],
              "declare": false,
              "start": 3391,
              "end": 3402
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 3384,
            "end": 3402
          }
        ],
        "start": 3288,
        "end": 3404
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 3257,
      "end": 3404
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "use_glo_M1_public",
        "raw": "\"use_glo_M1_public\"",
        "start": 3421,
        "end": 3440
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
              "start": 3454,
              "end": 3471
            },
            "moduleReference": {
              "type": "Identifier",
              "decorators": [],
              "name": "glo_M1_public",
              "optional": false,
              "typeAnnotation": null,
              "start": 3474,
              "end": 3487
            },
            "importKind": "value",
            "start": 3447,
            "end": 3488
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
                                    "start": 3543,
                                    "end": 3560
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "c1",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3561,
                                    "end": 3563
                                  },
                                  "start": 3543,
                                  "end": 3563
                                },
                                "typeArguments": null,
                                "start": 3543,
                                "end": 3563
                              },
                              "start": 3541,
                              "end": 3563
                            },
                            "start": 3535,
                            "end": 3564
                          }
                        ],
                        "start": 3533,
                        "end": 3566
                      },
                      "start": 3531,
                      "end": 3566
                    },
                    "start": 3504,
                    "end": 3566
                  },
                  "init": null,
                  "definite": false,
                  "start": 3504,
                  "end": 3566
                }
              ],
              "declare": false,
              "start": 3500,
              "end": 3567
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 3493,
            "end": 3567
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
                          "start": 3619,
                          "end": 3636
                        },
                        "typeArguments": null,
                        "start": 3612,
                        "end": 3636
                      },
                      "start": 3610,
                      "end": 3636
                    },
                    "start": 3583,
                    "end": 3636
                  },
                  "init": null,
                  "definite": false,
                  "start": 3583,
                  "end": 3636
                }
              ],
              "declare": false,
              "start": 3579,
              "end": 3637
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 3572,
            "end": 3637
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
                                "start": 3687,
                                "end": 3704
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "c1",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3705,
                                "end": 3707
                              },
                              "start": 3687,
                              "end": 3707
                            },
                            "typeArguments": null,
                            "start": 3687,
                            "end": 3707
                          },
                          "start": 3684,
                          "end": 3707
                        },
                        "start": 3682,
                        "end": 3707
                      },
                      "start": 3680,
                      "end": 3707
                    },
                    "start": 3653,
                    "end": 3707
                  },
                  "init": null,
                  "definite": false,
                  "start": 3653,
                  "end": 3707
                }
              ],
              "declare": false,
              "start": 3649,
              "end": 3708
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 3642,
            "end": 3708
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
                                  "start": 3757,
                                  "end": 3774
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "c1",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3775,
                                  "end": 3777
                                },
                                "start": 3757,
                                "end": 3777
                              },
                              "typeArguments": null,
                              "start": 3757,
                              "end": 3777
                            },
                            "start": 3755,
                            "end": 3777
                          },
                          "start": 3749,
                          "end": 3778
                        }
                      ],
                      "start": 3747,
                      "end": 3780
                    },
                    "start": 3745,
                    "end": 3780
                  },
                  "start": 3717,
                  "end": 3780
                },
                "init": null,
                "definite": false,
                "start": 3717,
                "end": 3780
              }
            ],
            "declare": false,
            "start": 3713,
            "end": 3781
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
                        "start": 3827,
                        "end": 3844
                      },
                      "typeArguments": null,
                      "start": 3820,
                      "end": 3844
                    },
                    "start": 3818,
                    "end": 3844
                  },
                  "start": 3790,
                  "end": 3844
                },
                "init": null,
                "definite": false,
                "start": 3790,
                "end": 3844
              }
            ],
            "declare": false,
            "start": 3786,
            "end": 3845
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
                              "start": 3890,
                              "end": 3907
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "c1",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3908,
                              "end": 3910
                            },
                            "start": 3890,
                            "end": 3910
                          },
                          "typeArguments": null,
                          "start": 3890,
                          "end": 3910
                        },
                        "start": 3887,
                        "end": 3910
                      },
                      "start": 3884,
                      "end": 3910
                    },
                    "start": 3882,
                    "end": 3910
                  },
                  "start": 3854,
                  "end": 3910
                },
                "init": null,
                "definite": false,
                "start": 3854,
                "end": 3910
              }
            ],
            "declare": false,
            "start": 3850,
            "end": 3911
          },
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "use_glo_M2_public",
              "optional": false,
              "typeAnnotation": null,
              "start": 3924,
              "end": 3941
            },
            "moduleReference": {
              "type": "TSExternalModuleReference",
              "expression": {
                "type": "Literal",
                "value": "glo_M2_public",
                "raw": "\"glo_M2_public\"",
                "start": 3952,
                "end": 3967
              },
              "start": 3944,
              "end": 3968
            },
            "importKind": "value",
            "start": 3917,
            "end": 3969
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
                                    "start": 4024,
                                    "end": 4041
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "c1",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 4042,
                                    "end": 4044
                                  },
                                  "start": 4024,
                                  "end": 4044
                                },
                                "typeArguments": null,
                                "start": 4024,
                                "end": 4044
                              },
                              "start": 4022,
                              "end": 4044
                            },
                            "start": 4016,
                            "end": 4045
                          }
                        ],
                        "start": 4014,
                        "end": 4047
                      },
                      "start": 4012,
                      "end": 4047
                    },
                    "start": 3985,
                    "end": 4047
                  },
                  "init": null,
                  "definite": false,
                  "start": 3985,
                  "end": 4047
                }
              ],
              "declare": false,
              "start": 3981,
              "end": 4048
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 3974,
            "end": 4048
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
                          "start": 4100,
                          "end": 4117
                        },
                        "typeArguments": null,
                        "start": 4093,
                        "end": 4117
                      },
                      "start": 4091,
                      "end": 4117
                    },
                    "start": 4064,
                    "end": 4117
                  },
                  "init": null,
                  "definite": false,
                  "start": 4064,
                  "end": 4117
                }
              ],
              "declare": false,
              "start": 4060,
              "end": 4118
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 4053,
            "end": 4118
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
                                "start": 4169,
                                "end": 4186
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "c1",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4187,
                                "end": 4189
                              },
                              "start": 4169,
                              "end": 4189
                            },
                            "typeArguments": null,
                            "start": 4169,
                            "end": 4189
                          },
                          "start": 4166,
                          "end": 4189
                        },
                        "start": 4163,
                        "end": 4189
                      },
                      "start": 4161,
                      "end": 4189
                    },
                    "start": 4134,
                    "end": 4189
                  },
                  "init": null,
                  "definite": false,
                  "start": 4134,
                  "end": 4189
                }
              ],
              "declare": false,
              "start": 4130,
              "end": 4190
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 4123,
            "end": 4190
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
                                  "start": 4239,
                                  "end": 4256
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "c1",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 4257,
                                  "end": 4259
                                },
                                "start": 4239,
                                "end": 4259
                              },
                              "typeArguments": null,
                              "start": 4239,
                              "end": 4259
                            },
                            "start": 4237,
                            "end": 4259
                          },
                          "start": 4231,
                          "end": 4260
                        }
                      ],
                      "start": 4229,
                      "end": 4262
                    },
                    "start": 4227,
                    "end": 4262
                  },
                  "start": 4199,
                  "end": 4262
                },
                "init": null,
                "definite": false,
                "start": 4199,
                "end": 4262
              }
            ],
            "declare": false,
            "start": 4195,
            "end": 4263
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
                        "start": 4309,
                        "end": 4326
                      },
                      "typeArguments": null,
                      "start": 4302,
                      "end": 4326
                    },
                    "start": 4300,
                    "end": 4326
                  },
                  "start": 4272,
                  "end": 4326
                },
                "init": null,
                "definite": false,
                "start": 4272,
                "end": 4326
              }
            ],
            "declare": false,
            "start": 4268,
            "end": 4327
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
                              "start": 4372,
                              "end": 4389
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "c1",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4390,
                              "end": 4392
                            },
                            "start": 4372,
                            "end": 4392
                          },
                          "typeArguments": null,
                          "start": 4372,
                          "end": 4392
                        },
                        "start": 4369,
                        "end": 4392
                      },
                      "start": 4366,
                      "end": 4392
                    },
                    "start": 4364,
                    "end": 4392
                  },
                  "start": 4336,
                  "end": 4392
                },
                "init": null,
                "definite": false,
                "start": 4336,
                "end": 4392
              }
            ],
            "declare": false,
            "start": 4332,
            "end": 4393
          },
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m2",
              "optional": false,
              "typeAnnotation": null,
              "start": 4406,
              "end": 4408
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
                    "start": 4426,
                    "end": 4437
                  },
                  "moduleReference": {
                    "type": "TSExternalModuleReference",
                    "expression": {
                      "type": "Literal",
                      "value": "glo_M2_public",
                      "raw": "\"glo_M2_public\"",
                      "start": 4448,
                      "end": 4463
                    },
                    "start": 4440,
                    "end": 4464
                  },
                  "importKind": "value",
                  "start": 4419,
                  "end": 4465
                },
                {
                  "type": "TSImportEqualsDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nonerrorImport",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4481,
                    "end": 4495
                  },
                  "moduleReference": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "glo_M1_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4498,
                    "end": 4511
                  },
                  "importKind": "value",
                  "start": 4474,
                  "end": 4512
                },
                {
                  "type": "TSModuleDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m5",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4529,
                    "end": 4531
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
                          "start": 4553,
                          "end": 4567
                        },
                        "moduleReference": {
                          "type": "TSExternalModuleReference",
                          "expression": {
                            "type": "Literal",
                            "value": "glo_M2_public",
                            "raw": "\"glo_M2_public\"",
                            "start": 4578,
                            "end": 4593
                          },
                          "start": 4570,
                          "end": 4594
                        },
                        "importKind": "value",
                        "start": 4546,
                        "end": 4595
                      },
                      {
                        "type": "TSImportEqualsDeclaration",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "m5_nonerrorImport",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4615,
                          "end": 4632
                        },
                        "moduleReference": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "glo_M1_public",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4635,
                          "end": 4648
                        },
                        "importKind": "value",
                        "start": 4608,
                        "end": 4649
                      }
                    ],
                    "start": 4532,
                    "end": 4659
                  },
                  "kind": "module",
                  "declare": false,
                  "global": false,
                  "start": 4522,
                  "end": 4659
                }
              ],
              "start": 4409,
              "end": 4665
            },
            "kind": "module",
            "declare": false,
            "global": false,
            "start": 4399,
            "end": 4665
          }
        ],
        "start": 3441,
        "end": 4667
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 3406,
      "end": 4667
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "anotherParseError",
        "raw": "\"anotherParseError\"",
        "start": 4684,
        "end": 4703
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
              "start": 4717,
              "end": 4719
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
                    "start": 4745,
                    "end": 4750
                  },
                  "body": {
                    "type": "TSModuleBlock",
                    "body": [],
                    "start": 4751,
                    "end": 4762
                  },
                  "kind": "module",
                  "declare": true,
                  "global": false,
                  "start": 4730,
                  "end": 4762
                }
              ],
              "start": 4720,
              "end": 4768
            },
            "kind": "module",
            "declare": false,
            "global": false,
            "start": 4710,
            "end": 4768
          },
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m2",
              "optional": false,
              "typeAnnotation": null,
              "start": 4781,
              "end": 4783
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
                    "start": 4801,
                    "end": 4807
                  },
                  "body": {
                    "type": "TSModuleBlock",
                    "body": [],
                    "start": 4808,
                    "end": 4819
                  },
                  "kind": "module",
                  "declare": false,
                  "global": false,
                  "start": 4794,
                  "end": 4819
                }
              ],
              "start": 4784,
              "end": 4825
            },
            "kind": "module",
            "declare": false,
            "global": false,
            "start": 4774,
            "end": 4825
          },
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Literal",
              "value": "abc3",
              "raw": "\"abc3\"",
              "start": 4837,
              "end": 4843
            },
            "body": {
              "type": "TSModuleBlock",
              "body": [],
              "start": 4844,
              "end": 4851
            },
            "kind": "module",
            "declare": false,
            "global": false,
            "start": 4830,
            "end": 4851
          }
        ],
        "start": 4704,
        "end": 4853
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 4669,
      "end": 4853
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m2",
        "optional": false,
        "typeAnnotation": null,
        "start": 4862,
        "end": 4864
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
              "start": 4878,
              "end": 4880
            },
            "moduleReference": {
              "type": "TSExternalModuleReference",
              "expression": {
                "type": "Literal",
                "value": "use_glo_M1_public",
                "raw": "\"use_glo_M1_public\"",
                "start": 4891,
                "end": 4910
              },
              "start": 4883,
              "end": 4911
            },
            "importKind": "value",
            "start": 4871,
            "end": 4912
          },
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m4",
              "optional": false,
              "typeAnnotation": null,
              "start": 4924,
              "end": 4926
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
                        "start": 4941,
                        "end": 4942
                      },
                      "init": {
                        "type": "Literal",
                        "value": 10,
                        "raw": "10",
                        "start": 4945,
                        "end": 4947
                      },
                      "definite": false,
                      "start": 4941,
                      "end": 4947
                    }
                  ],
                  "declare": false,
                  "start": 4937,
                  "end": 4948
                },
                {
                  "type": "TSImportEqualsDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4964,
                    "end": 4966
                  },
                  "moduleReference": {
                    "type": "TSExternalModuleReference",
                    "expression": {
                      "type": "Literal",
                      "value": "use_glo_M1_public",
                      "raw": "\"use_glo_M1_public\"",
                      "start": 4977,
                      "end": 4996
                    },
                    "start": 4969,
                    "end": 4997
                  },
                  "importKind": "value",
                  "start": 4957,
                  "end": 4998
                }
              ],
              "start": 4927,
              "end": 5004
            },
            "kind": "module",
            "declare": false,
            "global": false,
            "start": 4917,
            "end": 5004
          }
        ],
        "start": 4865,
        "end": 5007
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 4855,
      "end": 5007
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 5007
}
```
