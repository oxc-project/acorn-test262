__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSModuleDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "m1",
          "optional": false,
          "typeAnnotation": null,
          "start": 17,
          "end": 19
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
                  "start": 43,
                  "end": 55
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
                          "start": 79,
                          "end": 81
                        },
                        "typeParameters": null,
                        "superClass": null,
                        "superTypeArguments": null,
                        "implements": [],
                        "body": {
                          "type": "ClassBody",
                          "body": [],
                          "start": 82,
                          "end": 93
                        },
                        "abstract": false,
                        "declare": false,
                        "start": 73,
                        "end": 93
                      },
                      "specifiers": [],
                      "source": null,
                      "exportKind": "value",
                      "attributes": [],
                      "start": 66,
                      "end": 93
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
                          "start": 118,
                          "end": 120
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
                                  "start": 148,
                                  "end": 150
                                },
                                "typeArguments": null,
                                "arguments": [],
                                "start": 144,
                                "end": 150
                              },
                              "start": 137,
                              "end": 151
                            }
                          ],
                          "start": 123,
                          "end": 161
                        },
                        "expression": false,
                        "start": 109,
                        "end": 161
                      },
                      "specifiers": [],
                      "source": null,
                      "exportKind": "value",
                      "attributes": [],
                      "start": 102,
                      "end": 161
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
                              "start": 181,
                              "end": 183
                            },
                            "init": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "c1",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 186,
                              "end": 188
                            },
                            "definite": false,
                            "start": 181,
                            "end": 188
                          }
                        ],
                        "declare": false,
                        "start": 177,
                        "end": 189
                      },
                      "specifiers": [],
                      "source": null,
                      "exportKind": "value",
                      "attributes": [],
                      "start": 170,
                      "end": 189
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
                                    "start": 213,
                                    "end": 215
                                  },
                                  "typeArguments": null,
                                  "start": 213,
                                  "end": 215
                                },
                                "start": 211,
                                "end": 215
                              },
                              "start": 209,
                              "end": 215
                            },
                            "init": null,
                            "definite": false,
                            "start": 209,
                            "end": 215
                          }
                        ],
                        "declare": false,
                        "start": 205,
                        "end": 216
                      },
                      "specifiers": [],
                      "source": null,
                      "exportKind": "value",
                      "attributes": [],
                      "start": 198,
                      "end": 216
                    }
                  ],
                  "start": 56,
                  "end": 222
                },
                "kind": "namespace",
                "declare": false,
                "global": false,
                "start": 33,
                "end": 222
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 26,
              "end": 222
            },
            {
              "type": "TSModuleDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "m1_M2_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 238,
                "end": 251
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
                        "start": 275,
                        "end": 277
                      },
                      "typeParameters": null,
                      "superClass": null,
                      "superTypeArguments": null,
                      "implements": [],
                      "body": {
                        "type": "ClassBody",
                        "body": [],
                        "start": 278,
                        "end": 289
                      },
                      "abstract": false,
                      "declare": false,
                      "start": 269,
                      "end": 289
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 262,
                    "end": 289
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
                        "start": 314,
                        "end": 316
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
                                "start": 344,
                                "end": 346
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 340,
                              "end": 346
                            },
                            "start": 333,
                            "end": 347
                          }
                        ],
                        "start": 319,
                        "end": 357
                      },
                      "expression": false,
                      "start": 305,
                      "end": 357
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 298,
                    "end": 357
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
                            "start": 377,
                            "end": 379
                          },
                          "init": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "c1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 382,
                            "end": 384
                          },
                          "definite": false,
                          "start": 377,
                          "end": 384
                        }
                      ],
                      "declare": false,
                      "start": 373,
                      "end": 385
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 366,
                    "end": 385
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
                                  "start": 409,
                                  "end": 411
                                },
                                "typeArguments": null,
                                "start": 409,
                                "end": 411
                              },
                              "start": 407,
                              "end": 411
                            },
                            "start": 405,
                            "end": 411
                          },
                          "init": null,
                          "definite": false,
                          "start": 405,
                          "end": 411
                        }
                      ],
                      "declare": false,
                      "start": 401,
                      "end": 412
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 394,
                    "end": 412
                  }
                ],
                "start": 252,
                "end": 418
              },
              "kind": "namespace",
              "declare": false,
              "global": false,
              "start": 228,
              "end": 418
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "TSModuleDeclaration",
                "id": {
                  "type": "Literal",
                  "value": "m1_M3_public",
                  "raw": "\"m1_M3_public\"",
                  "start": 446,
                  "end": 460
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
                          "start": 487,
                          "end": 489
                        },
                        "generator": false,
                        "async": false,
                        "declare": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": null,
                        "expression": false,
                        "start": 478,
                        "end": 492
                      },
                      "specifiers": [],
                      "source": null,
                      "exportKind": "value",
                      "attributes": [],
                      "start": 471,
                      "end": 492
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
                          "start": 514,
                          "end": 516
                        },
                        "typeParameters": null,
                        "superClass": null,
                        "superTypeArguments": null,
                        "implements": [],
                        "body": {
                          "type": "ClassBody",
                          "body": [],
                          "start": 517,
                          "end": 528
                        },
                        "abstract": false,
                        "declare": false,
                        "start": 508,
                        "end": 528
                      },
                      "specifiers": [],
                      "source": null,
                      "exportKind": "value",
                      "attributes": [],
                      "start": 501,
                      "end": 528
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
                                            "start": 562,
                                            "end": 564
                                          },
                                          "typeArguments": null,
                                          "start": 562,
                                          "end": 564
                                        },
                                        "start": 560,
                                        "end": 564
                                      },
                                      "start": 554,
                                      "end": 565
                                    }
                                  ],
                                  "start": 552,
                                  "end": 567
                                },
                                "start": 550,
                                "end": 567
                              },
                              "start": 548,
                              "end": 567
                            },
                            "init": null,
                            "definite": false,
                            "start": 548,
                            "end": 567
                          }
                        ],
                        "declare": false,
                        "start": 544,
                        "end": 568
                      },
                      "specifiers": [],
                      "source": null,
                      "exportKind": "value",
                      "attributes": [],
                      "start": 537,
                      "end": 568
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
                                    "start": 592,
                                    "end": 594
                                  },
                                  "typeArguments": null,
                                  "start": 592,
                                  "end": 594
                                },
                                "start": 590,
                                "end": 594
                              },
                              "start": 588,
                              "end": 594
                            },
                            "init": null,
                            "definite": false,
                            "start": 588,
                            "end": 594
                          }
                        ],
                        "declare": false,
                        "start": 584,
                        "end": 595
                      },
                      "specifiers": [],
                      "source": null,
                      "exportKind": "value",
                      "attributes": [],
                      "start": 577,
                      "end": 595
                    }
                  ],
                  "start": 461,
                  "end": 601
                },
                "kind": "module",
                "declare": true,
                "global": false,
                "start": 431,
                "end": 601
              },
              "specifiers": [],
              "source": null,
              "exportKind": "type",
              "attributes": [],
              "start": 424,
              "end": 601
            },
            {
              "type": "TSModuleDeclaration",
              "id": {
                "type": "Literal",
                "value": "m1_M4_private",
                "raw": "\"m1_M4_private\"",
                "start": 622,
                "end": 637
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
                        "start": 664,
                        "end": 666
                      },
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": null,
                      "expression": false,
                      "start": 655,
                      "end": 669
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 648,
                    "end": 669
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
                        "start": 691,
                        "end": 693
                      },
                      "typeParameters": null,
                      "superClass": null,
                      "superTypeArguments": null,
                      "implements": [],
                      "body": {
                        "type": "ClassBody",
                        "body": [],
                        "start": 694,
                        "end": 705
                      },
                      "abstract": false,
                      "declare": false,
                      "start": 685,
                      "end": 705
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 678,
                    "end": 705
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
                                          "start": 739,
                                          "end": 741
                                        },
                                        "typeArguments": null,
                                        "start": 739,
                                        "end": 741
                                      },
                                      "start": 737,
                                      "end": 741
                                    },
                                    "start": 731,
                                    "end": 742
                                  }
                                ],
                                "start": 729,
                                "end": 744
                              },
                              "start": 727,
                              "end": 744
                            },
                            "start": 725,
                            "end": 744
                          },
                          "init": null,
                          "definite": false,
                          "start": 725,
                          "end": 744
                        }
                      ],
                      "declare": false,
                      "start": 721,
                      "end": 745
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 714,
                    "end": 745
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
                                  "start": 769,
                                  "end": 771
                                },
                                "typeArguments": null,
                                "start": 769,
                                "end": 771
                              },
                              "start": 767,
                              "end": 771
                            },
                            "start": 765,
                            "end": 771
                          },
                          "init": null,
                          "definite": false,
                          "start": 765,
                          "end": 771
                        }
                      ],
                      "declare": false,
                      "start": 761,
                      "end": 772
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 754,
                    "end": 772
                  }
                ],
                "start": 638,
                "end": 778
              },
              "kind": "module",
              "declare": true,
              "global": false,
              "start": 607,
              "end": 778
            },
            {
              "type": "TSImportEqualsDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "m1_im1_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 791,
                "end": 805
              },
              "moduleReference": {
                "type": "Identifier",
                "decorators": [],
                "name": "m1_M1_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 808,
                "end": 820
              },
              "importKind": "value",
              "start": 784,
              "end": 821
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
                      "start": 837,
                      "end": 861
                    },
                    "init": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "m1_im1_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 864,
                        "end": 878
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 879,
                        "end": 881
                      },
                      "optional": false,
                      "computed": false,
                      "start": 864,
                      "end": 881
                    },
                    "definite": false,
                    "start": 837,
                    "end": 881
                  }
                ],
                "declare": false,
                "start": 833,
                "end": 882
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 826,
              "end": 882
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
                      "start": 898,
                      "end": 922
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
                          "start": 929,
                          "end": 943
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 944,
                          "end": 946
                        },
                        "optional": false,
                        "computed": false,
                        "start": 929,
                        "end": 946
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 925,
                      "end": 948
                    },
                    "definite": false,
                    "start": 898,
                    "end": 948
                  }
                ],
                "declare": false,
                "start": 894,
                "end": 949
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 887,
              "end": 949
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
                      "start": 965,
                      "end": 989
                    },
                    "init": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "m1_im1_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 992,
                        "end": 1006
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "f1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1007,
                        "end": 1009
                      },
                      "optional": false,
                      "computed": false,
                      "start": 992,
                      "end": 1009
                    },
                    "definite": false,
                    "start": 965,
                    "end": 1009
                  }
                ],
                "declare": false,
                "start": 961,
                "end": 1010
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 954,
              "end": 1010
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
                      "start": 1026,
                      "end": 1050
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
                          "start": 1053,
                          "end": 1067
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "f1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1068,
                          "end": 1070
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1053,
                        "end": 1070
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 1053,
                      "end": 1072
                    },
                    "definite": false,
                    "start": 1026,
                    "end": 1072
                  }
                ],
                "declare": false,
                "start": 1022,
                "end": 1073
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 1015,
              "end": 1073
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
                    "start": 1082,
                    "end": 1107
                  },
                  "init": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m1_im1_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1110,
                      "end": 1124
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1125,
                      "end": 1127
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1110,
                    "end": 1127
                  },
                  "definite": false,
                  "start": 1082,
                  "end": 1127
                }
              ],
              "declare": false,
              "start": 1078,
              "end": 1128
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
                    "start": 1137,
                    "end": 1162
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
                        "start": 1169,
                        "end": 1183
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1184,
                        "end": 1186
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1169,
                      "end": 1186
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 1165,
                    "end": 1188
                  },
                  "definite": false,
                  "start": 1137,
                  "end": 1188
                }
              ],
              "declare": false,
              "start": 1133,
              "end": 1189
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
                    "start": 1198,
                    "end": 1223
                  },
                  "init": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m1_im1_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1226,
                      "end": 1240
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1241,
                      "end": 1243
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1226,
                    "end": 1243
                  },
                  "definite": false,
                  "start": 1198,
                  "end": 1243
                }
              ],
              "declare": false,
              "start": 1194,
              "end": 1244
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
                    "start": 1253,
                    "end": 1278
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
                        "start": 1281,
                        "end": 1295
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "f1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1296,
                        "end": 1298
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1281,
                      "end": 1298
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 1281,
                    "end": 1300
                  },
                  "definite": false,
                  "start": 1253,
                  "end": 1300
                }
              ],
              "declare": false,
              "start": 1249,
              "end": 1301
            },
            {
              "type": "TSImportEqualsDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "m1_im2_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 1315,
                "end": 1329
              },
              "moduleReference": {
                "type": "Identifier",
                "decorators": [],
                "name": "m1_M2_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 1332,
                "end": 1345
              },
              "importKind": "value",
              "start": 1308,
              "end": 1346
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
                      "start": 1362,
                      "end": 1386
                    },
                    "init": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "m1_im2_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1389,
                        "end": 1403
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1404,
                        "end": 1406
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1389,
                      "end": 1406
                    },
                    "definite": false,
                    "start": 1362,
                    "end": 1406
                  }
                ],
                "declare": false,
                "start": 1358,
                "end": 1407
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 1351,
              "end": 1407
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
                      "start": 1423,
                      "end": 1447
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
                          "start": 1454,
                          "end": 1468
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1469,
                          "end": 1471
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1454,
                        "end": 1471
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 1450,
                      "end": 1473
                    },
                    "definite": false,
                    "start": 1423,
                    "end": 1473
                  }
                ],
                "declare": false,
                "start": 1419,
                "end": 1474
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 1412,
              "end": 1474
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
                      "start": 1490,
                      "end": 1514
                    },
                    "init": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "m1_im2_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1517,
                        "end": 1531
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "f1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1532,
                        "end": 1534
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1517,
                      "end": 1534
                    },
                    "definite": false,
                    "start": 1490,
                    "end": 1534
                  }
                ],
                "declare": false,
                "start": 1486,
                "end": 1535
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 1479,
              "end": 1535
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
                      "start": 1551,
                      "end": 1575
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
                          "start": 1578,
                          "end": 1592
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "f1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1593,
                          "end": 1595
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1578,
                        "end": 1595
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 1578,
                      "end": 1597
                    },
                    "definite": false,
                    "start": 1551,
                    "end": 1597
                  }
                ],
                "declare": false,
                "start": 1547,
                "end": 1598
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 1540,
              "end": 1598
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
                    "start": 1607,
                    "end": 1632
                  },
                  "init": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m1_im2_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1635,
                      "end": 1649
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1650,
                      "end": 1652
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1635,
                    "end": 1652
                  },
                  "definite": false,
                  "start": 1607,
                  "end": 1652
                }
              ],
              "declare": false,
              "start": 1603,
              "end": 1653
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
                    "start": 1662,
                    "end": 1687
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
                        "start": 1694,
                        "end": 1708
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1709,
                        "end": 1711
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1694,
                      "end": 1711
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 1690,
                    "end": 1713
                  },
                  "definite": false,
                  "start": 1662,
                  "end": 1713
                }
              ],
              "declare": false,
              "start": 1658,
              "end": 1714
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
                    "start": 1723,
                    "end": 1748
                  },
                  "init": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m1_im2_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1751,
                      "end": 1765
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1766,
                      "end": 1768
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1751,
                    "end": 1768
                  },
                  "definite": false,
                  "start": 1723,
                  "end": 1768
                }
              ],
              "declare": false,
              "start": 1719,
              "end": 1769
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
                    "start": 1778,
                    "end": 1803
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
                        "start": 1806,
                        "end": 1820
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "f1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1821,
                        "end": 1823
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1806,
                      "end": 1823
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 1806,
                    "end": 1825
                  },
                  "definite": false,
                  "start": 1778,
                  "end": 1825
                }
              ],
              "declare": false,
              "start": 1774,
              "end": 1826
            },
            {
              "type": "TSImportEqualsDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "m1_im3_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 1839,
                "end": 1853
              },
              "moduleReference": {
                "type": "TSExternalModuleReference",
                "expression": {
                  "type": "Literal",
                  "value": "m1_M3_public",
                  "raw": "\"m1_M3_public\"",
                  "start": 1864,
                  "end": 1878
                },
                "start": 1856,
                "end": 1879
              },
              "importKind": "value",
              "start": 1832,
              "end": 1880
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
                      "start": 1896,
                      "end": 1920
                    },
                    "init": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "m1_im3_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1923,
                        "end": 1937
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1938,
                        "end": 1940
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1923,
                      "end": 1940
                    },
                    "definite": false,
                    "start": 1896,
                    "end": 1940
                  }
                ],
                "declare": false,
                "start": 1892,
                "end": 1941
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 1885,
              "end": 1941
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
                      "start": 1957,
                      "end": 1981
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
                          "start": 1988,
                          "end": 2002
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2003,
                          "end": 2005
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1988,
                        "end": 2005
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 1984,
                      "end": 2007
                    },
                    "definite": false,
                    "start": 1957,
                    "end": 2007
                  }
                ],
                "declare": false,
                "start": 1953,
                "end": 2008
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 1946,
              "end": 2008
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
                      "start": 2024,
                      "end": 2048
                    },
                    "init": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "m1_im3_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2051,
                        "end": 2065
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "f1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2066,
                        "end": 2068
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2051,
                      "end": 2068
                    },
                    "definite": false,
                    "start": 2024,
                    "end": 2068
                  }
                ],
                "declare": false,
                "start": 2020,
                "end": 2069
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 2013,
              "end": 2069
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
                      "start": 2085,
                      "end": 2109
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
                          "start": 2112,
                          "end": 2126
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "f1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2127,
                          "end": 2129
                        },
                        "optional": false,
                        "computed": false,
                        "start": 2112,
                        "end": 2129
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 2112,
                      "end": 2131
                    },
                    "definite": false,
                    "start": 2085,
                    "end": 2131
                  }
                ],
                "declare": false,
                "start": 2081,
                "end": 2132
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 2074,
              "end": 2132
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
                    "start": 2141,
                    "end": 2166
                  },
                  "init": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m1_im3_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2169,
                      "end": 2183
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2184,
                      "end": 2186
                    },
                    "optional": false,
                    "computed": false,
                    "start": 2169,
                    "end": 2186
                  },
                  "definite": false,
                  "start": 2141,
                  "end": 2186
                }
              ],
              "declare": false,
              "start": 2137,
              "end": 2187
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
                    "start": 2196,
                    "end": 2221
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
                        "start": 2228,
                        "end": 2242
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2243,
                        "end": 2245
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2228,
                      "end": 2245
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 2224,
                    "end": 2247
                  },
                  "definite": false,
                  "start": 2196,
                  "end": 2247
                }
              ],
              "declare": false,
              "start": 2192,
              "end": 2248
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
                    "start": 2257,
                    "end": 2282
                  },
                  "init": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m1_im3_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2285,
                      "end": 2299
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2300,
                      "end": 2302
                    },
                    "optional": false,
                    "computed": false,
                    "start": 2285,
                    "end": 2302
                  },
                  "definite": false,
                  "start": 2257,
                  "end": 2302
                }
              ],
              "declare": false,
              "start": 2253,
              "end": 2303
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
                    "start": 2312,
                    "end": 2337
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
                        "start": 2340,
                        "end": 2354
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "f1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2355,
                        "end": 2357
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2340,
                      "end": 2357
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 2340,
                    "end": 2359
                  },
                  "definite": false,
                  "start": 2312,
                  "end": 2359
                }
              ],
              "declare": false,
              "start": 2308,
              "end": 2360
            },
            {
              "type": "TSImportEqualsDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "m1_im4_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 2373,
                "end": 2387
              },
              "moduleReference": {
                "type": "TSExternalModuleReference",
                "expression": {
                  "type": "Literal",
                  "value": "m1_M4_private",
                  "raw": "\"m1_M4_private\"",
                  "start": 2398,
                  "end": 2413
                },
                "start": 2390,
                "end": 2414
              },
              "importKind": "value",
              "start": 2366,
              "end": 2415
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
                      "start": 2431,
                      "end": 2455
                    },
                    "init": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "m1_im4_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2458,
                        "end": 2472
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2473,
                        "end": 2475
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2458,
                      "end": 2475
                    },
                    "definite": false,
                    "start": 2431,
                    "end": 2475
                  }
                ],
                "declare": false,
                "start": 2427,
                "end": 2476
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 2420,
              "end": 2476
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
                      "start": 2492,
                      "end": 2516
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
                          "start": 2523,
                          "end": 2537
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2538,
                          "end": 2540
                        },
                        "optional": false,
                        "computed": false,
                        "start": 2523,
                        "end": 2540
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 2519,
                      "end": 2542
                    },
                    "definite": false,
                    "start": 2492,
                    "end": 2542
                  }
                ],
                "declare": false,
                "start": 2488,
                "end": 2543
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 2481,
              "end": 2543
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
                      "start": 2559,
                      "end": 2583
                    },
                    "init": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "m1_im4_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2586,
                        "end": 2600
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "f1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2601,
                        "end": 2603
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2586,
                      "end": 2603
                    },
                    "definite": false,
                    "start": 2559,
                    "end": 2603
                  }
                ],
                "declare": false,
                "start": 2555,
                "end": 2604
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 2548,
              "end": 2604
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
                      "start": 2620,
                      "end": 2644
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
                          "start": 2647,
                          "end": 2661
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "f1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2662,
                          "end": 2664
                        },
                        "optional": false,
                        "computed": false,
                        "start": 2647,
                        "end": 2664
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 2647,
                      "end": 2666
                    },
                    "definite": false,
                    "start": 2620,
                    "end": 2666
                  }
                ],
                "declare": false,
                "start": 2616,
                "end": 2667
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 2609,
              "end": 2667
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
                    "start": 2676,
                    "end": 2701
                  },
                  "init": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m1_im4_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2704,
                      "end": 2718
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2719,
                      "end": 2721
                    },
                    "optional": false,
                    "computed": false,
                    "start": 2704,
                    "end": 2721
                  },
                  "definite": false,
                  "start": 2676,
                  "end": 2721
                }
              ],
              "declare": false,
              "start": 2672,
              "end": 2722
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
                    "start": 2731,
                    "end": 2756
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
                        "start": 2763,
                        "end": 2777
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2778,
                        "end": 2780
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2763,
                      "end": 2780
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 2759,
                    "end": 2782
                  },
                  "definite": false,
                  "start": 2731,
                  "end": 2782
                }
              ],
              "declare": false,
              "start": 2727,
              "end": 2783
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
                    "start": 2792,
                    "end": 2817
                  },
                  "init": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m1_im4_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2820,
                      "end": 2834
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2835,
                      "end": 2837
                    },
                    "optional": false,
                    "computed": false,
                    "start": 2820,
                    "end": 2837
                  },
                  "definite": false,
                  "start": 2792,
                  "end": 2837
                }
              ],
              "declare": false,
              "start": 2788,
              "end": 2838
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
                    "start": 2847,
                    "end": 2872
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
                        "start": 2875,
                        "end": 2889
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "f1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2890,
                        "end": 2892
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2875,
                      "end": 2892
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 2875,
                    "end": 2894
                  },
                  "definite": false,
                  "start": 2847,
                  "end": 2894
                }
              ],
              "declare": false,
              "start": 2843,
              "end": 2895
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
                  "start": 2915,
                  "end": 2928
                },
                "moduleReference": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m1_M1_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2931,
                  "end": 2943
                },
                "importKind": "value",
                "start": 2908,
                "end": 2944
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 2901,
              "end": 2944
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
                  "start": 2963,
                  "end": 2976
                },
                "moduleReference": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m1_M2_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2979,
                  "end": 2992
                },
                "importKind": "value",
                "start": 2956,
                "end": 2993
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 2949,
              "end": 2993
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
                  "start": 3012,
                  "end": 3025
                },
                "moduleReference": {
                  "type": "TSExternalModuleReference",
                  "expression": {
                    "type": "Literal",
                    "value": "m1_M3_public",
                    "raw": "\"m1_M3_public\"",
                    "start": 3036,
                    "end": 3050
                  },
                  "start": 3028,
                  "end": 3051
                },
                "importKind": "value",
                "start": 3005,
                "end": 3052
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 2998,
              "end": 3052
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
                  "start": 3071,
                  "end": 3084
                },
                "moduleReference": {
                  "type": "TSExternalModuleReference",
                  "expression": {
                    "type": "Literal",
                    "value": "m1_M4_private",
                    "raw": "\"m1_M4_private\"",
                    "start": 3095,
                    "end": 3110
                  },
                  "start": 3087,
                  "end": 3111
                },
                "importKind": "value",
                "start": 3064,
                "end": 3112
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 3057,
              "end": 3112
            }
          ],
          "start": 20,
          "end": 3114
        },
        "kind": "namespace",
        "declare": false,
        "global": false,
        "start": 7,
        "end": 3114
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 3114
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m2",
        "optional": false,
        "typeAnnotation": null,
        "start": 3126,
        "end": 3128
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
                "name": "m2_M1_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 3152,
                "end": 3164
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
                        "start": 3188,
                        "end": 3190
                      },
                      "typeParameters": null,
                      "superClass": null,
                      "superTypeArguments": null,
                      "implements": [],
                      "body": {
                        "type": "ClassBody",
                        "body": [],
                        "start": 3191,
                        "end": 3202
                      },
                      "abstract": false,
                      "declare": false,
                      "start": 3182,
                      "end": 3202
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 3175,
                    "end": 3202
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
                        "start": 3227,
                        "end": 3229
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
                                "start": 3257,
                                "end": 3259
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 3253,
                              "end": 3259
                            },
                            "start": 3246,
                            "end": 3260
                          }
                        ],
                        "start": 3232,
                        "end": 3270
                      },
                      "expression": false,
                      "start": 3218,
                      "end": 3270
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 3211,
                    "end": 3270
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
                            "start": 3290,
                            "end": 3292
                          },
                          "init": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "c1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3295,
                            "end": 3297
                          },
                          "definite": false,
                          "start": 3290,
                          "end": 3297
                        }
                      ],
                      "declare": false,
                      "start": 3286,
                      "end": 3298
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 3279,
                    "end": 3298
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
                                  "start": 3322,
                                  "end": 3324
                                },
                                "typeArguments": null,
                                "start": 3322,
                                "end": 3324
                              },
                              "start": 3320,
                              "end": 3324
                            },
                            "start": 3318,
                            "end": 3324
                          },
                          "init": null,
                          "definite": false,
                          "start": 3318,
                          "end": 3324
                        }
                      ],
                      "declare": false,
                      "start": 3314,
                      "end": 3325
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 3307,
                    "end": 3325
                  }
                ],
                "start": 3165,
                "end": 3331
              },
              "kind": "namespace",
              "declare": false,
              "global": false,
              "start": 3142,
              "end": 3331
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 3135,
            "end": 3331
          },
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m2_M2_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 3347,
              "end": 3360
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
                      "start": 3384,
                      "end": 3386
                    },
                    "typeParameters": null,
                    "superClass": null,
                    "superTypeArguments": null,
                    "implements": [],
                    "body": {
                      "type": "ClassBody",
                      "body": [],
                      "start": 3387,
                      "end": 3398
                    },
                    "abstract": false,
                    "declare": false,
                    "start": 3378,
                    "end": 3398
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": [],
                  "start": 3371,
                  "end": 3398
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
                      "start": 3423,
                      "end": 3425
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
                              "start": 3453,
                              "end": 3455
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "start": 3449,
                            "end": 3455
                          },
                          "start": 3442,
                          "end": 3456
                        }
                      ],
                      "start": 3428,
                      "end": 3466
                    },
                    "expression": false,
                    "start": 3414,
                    "end": 3466
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": [],
                  "start": 3407,
                  "end": 3466
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
                          "start": 3486,
                          "end": 3488
                        },
                        "init": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3491,
                          "end": 3493
                        },
                        "definite": false,
                        "start": 3486,
                        "end": 3493
                      }
                    ],
                    "declare": false,
                    "start": 3482,
                    "end": 3494
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": [],
                  "start": 3475,
                  "end": 3494
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
                                "start": 3518,
                                "end": 3520
                              },
                              "typeArguments": null,
                              "start": 3518,
                              "end": 3520
                            },
                            "start": 3516,
                            "end": 3520
                          },
                          "start": 3514,
                          "end": 3520
                        },
                        "init": null,
                        "definite": false,
                        "start": 3514,
                        "end": 3520
                      }
                    ],
                    "declare": false,
                    "start": 3510,
                    "end": 3521
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": [],
                  "start": 3503,
                  "end": 3521
                }
              ],
              "start": 3361,
              "end": 3527
            },
            "kind": "namespace",
            "declare": false,
            "global": false,
            "start": 3337,
            "end": 3527
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSModuleDeclaration",
              "id": {
                "type": "Literal",
                "value": "m2_M3_public",
                "raw": "\"m2_M3_public\"",
                "start": 3555,
                "end": 3569
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
                        "start": 3596,
                        "end": 3598
                      },
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": null,
                      "expression": false,
                      "start": 3587,
                      "end": 3601
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 3580,
                    "end": 3601
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
                        "start": 3623,
                        "end": 3625
                      },
                      "typeParameters": null,
                      "superClass": null,
                      "superTypeArguments": null,
                      "implements": [],
                      "body": {
                        "type": "ClassBody",
                        "body": [],
                        "start": 3626,
                        "end": 3637
                      },
                      "abstract": false,
                      "declare": false,
                      "start": 3617,
                      "end": 3637
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 3610,
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
                                          "start": 3671,
                                          "end": 3673
                                        },
                                        "typeArguments": null,
                                        "start": 3671,
                                        "end": 3673
                                      },
                                      "start": 3669,
                                      "end": 3673
                                    },
                                    "start": 3663,
                                    "end": 3674
                                  }
                                ],
                                "start": 3661,
                                "end": 3676
                              },
                              "start": 3659,
                              "end": 3676
                            },
                            "start": 3657,
                            "end": 3676
                          },
                          "init": null,
                          "definite": false,
                          "start": 3657,
                          "end": 3676
                        }
                      ],
                      "declare": false,
                      "start": 3653,
                      "end": 3677
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 3646,
                    "end": 3677
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
                                  "start": 3701,
                                  "end": 3703
                                },
                                "typeArguments": null,
                                "start": 3701,
                                "end": 3703
                              },
                              "start": 3699,
                              "end": 3703
                            },
                            "start": 3697,
                            "end": 3703
                          },
                          "init": null,
                          "definite": false,
                          "start": 3697,
                          "end": 3703
                        }
                      ],
                      "declare": false,
                      "start": 3693,
                      "end": 3704
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 3686,
                    "end": 3704
                  }
                ],
                "start": 3570,
                "end": 3710
              },
              "kind": "module",
              "declare": true,
              "global": false,
              "start": 3540,
              "end": 3710
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 3533,
            "end": 3710
          },
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Literal",
              "value": "m2_M4_private",
              "raw": "\"m2_M4_private\"",
              "start": 3731,
              "end": 3746
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
                      "start": 3773,
                      "end": 3775
                    },
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": null,
                    "expression": false,
                    "start": 3764,
                    "end": 3778
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": [],
                  "start": 3757,
                  "end": 3778
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
                      "start": 3800,
                      "end": 3802
                    },
                    "typeParameters": null,
                    "superClass": null,
                    "superTypeArguments": null,
                    "implements": [],
                    "body": {
                      "type": "ClassBody",
                      "body": [],
                      "start": 3803,
                      "end": 3814
                    },
                    "abstract": false,
                    "declare": false,
                    "start": 3794,
                    "end": 3814
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": [],
                  "start": 3787,
                  "end": 3814
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
                                        "start": 3848,
                                        "end": 3850
                                      },
                                      "typeArguments": null,
                                      "start": 3848,
                                      "end": 3850
                                    },
                                    "start": 3846,
                                    "end": 3850
                                  },
                                  "start": 3840,
                                  "end": 3851
                                }
                              ],
                              "start": 3838,
                              "end": 3853
                            },
                            "start": 3836,
                            "end": 3853
                          },
                          "start": 3834,
                          "end": 3853
                        },
                        "init": null,
                        "definite": false,
                        "start": 3834,
                        "end": 3853
                      }
                    ],
                    "declare": false,
                    "start": 3830,
                    "end": 3854
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": [],
                  "start": 3823,
                  "end": 3854
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
                                "start": 3878,
                                "end": 3880
                              },
                              "typeArguments": null,
                              "start": 3878,
                              "end": 3880
                            },
                            "start": 3876,
                            "end": 3880
                          },
                          "start": 3874,
                          "end": 3880
                        },
                        "init": null,
                        "definite": false,
                        "start": 3874,
                        "end": 3880
                      }
                    ],
                    "declare": false,
                    "start": 3870,
                    "end": 3881
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": [],
                  "start": 3863,
                  "end": 3881
                }
              ],
              "start": 3747,
              "end": 3887
            },
            "kind": "module",
            "declare": true,
            "global": false,
            "start": 3716,
            "end": 3887
          },
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m1_im1_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 3900,
              "end": 3914
            },
            "moduleReference": {
              "type": "Identifier",
              "decorators": [],
              "name": "m2_M1_public",
              "optional": false,
              "typeAnnotation": null,
              "start": 3917,
              "end": 3929
            },
            "importKind": "value",
            "start": 3893,
            "end": 3930
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
                    "start": 3946,
                    "end": 3970
                  },
                  "init": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m1_im1_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3973,
                      "end": 3987
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3988,
                      "end": 3990
                    },
                    "optional": false,
                    "computed": false,
                    "start": 3973,
                    "end": 3990
                  },
                  "definite": false,
                  "start": 3946,
                  "end": 3990
                }
              ],
              "declare": false,
              "start": 3942,
              "end": 3991
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 3935,
            "end": 3991
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
                    "start": 4007,
                    "end": 4031
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
                        "start": 4038,
                        "end": 4052
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4053,
                        "end": 4055
                      },
                      "optional": false,
                      "computed": false,
                      "start": 4038,
                      "end": 4055
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 4034,
                    "end": 4057
                  },
                  "definite": false,
                  "start": 4007,
                  "end": 4057
                }
              ],
              "declare": false,
              "start": 4003,
              "end": 4058
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 3996,
            "end": 4058
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
                    "start": 4074,
                    "end": 4098
                  },
                  "init": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m1_im1_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4101,
                      "end": 4115
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4116,
                      "end": 4118
                    },
                    "optional": false,
                    "computed": false,
                    "start": 4101,
                    "end": 4118
                  },
                  "definite": false,
                  "start": 4074,
                  "end": 4118
                }
              ],
              "declare": false,
              "start": 4070,
              "end": 4119
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 4063,
            "end": 4119
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
                    "start": 4135,
                    "end": 4159
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
                        "start": 4162,
                        "end": 4176
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "f1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4177,
                        "end": 4179
                      },
                      "optional": false,
                      "computed": false,
                      "start": 4162,
                      "end": 4179
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 4162,
                    "end": 4181
                  },
                  "definite": false,
                  "start": 4135,
                  "end": 4181
                }
              ],
              "declare": false,
              "start": 4131,
              "end": 4182
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 4124,
            "end": 4182
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
                  "start": 4191,
                  "end": 4216
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m1_im1_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4219,
                    "end": 4233
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4234,
                    "end": 4236
                  },
                  "optional": false,
                  "computed": false,
                  "start": 4219,
                  "end": 4236
                },
                "definite": false,
                "start": 4191,
                "end": 4236
              }
            ],
            "declare": false,
            "start": 4187,
            "end": 4237
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
                  "start": 4246,
                  "end": 4271
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
                      "start": 4278,
                      "end": 4292
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4293,
                      "end": 4295
                    },
                    "optional": false,
                    "computed": false,
                    "start": 4278,
                    "end": 4295
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "start": 4274,
                  "end": 4297
                },
                "definite": false,
                "start": 4246,
                "end": 4297
              }
            ],
            "declare": false,
            "start": 4242,
            "end": 4298
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
                  "start": 4307,
                  "end": 4332
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m1_im1_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4335,
                    "end": 4349
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4350,
                    "end": 4352
                  },
                  "optional": false,
                  "computed": false,
                  "start": 4335,
                  "end": 4352
                },
                "definite": false,
                "start": 4307,
                "end": 4352
              }
            ],
            "declare": false,
            "start": 4303,
            "end": 4353
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
                  "start": 4362,
                  "end": 4387
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
                      "start": 4390,
                      "end": 4404
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4405,
                      "end": 4407
                    },
                    "optional": false,
                    "computed": false,
                    "start": 4390,
                    "end": 4407
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 4390,
                  "end": 4409
                },
                "definite": false,
                "start": 4362,
                "end": 4409
              }
            ],
            "declare": false,
            "start": 4358,
            "end": 4410
          },
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m1_im2_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 4424,
              "end": 4438
            },
            "moduleReference": {
              "type": "Identifier",
              "decorators": [],
              "name": "m2_M2_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 4441,
              "end": 4454
            },
            "importKind": "value",
            "start": 4417,
            "end": 4455
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
                    "start": 4471,
                    "end": 4495
                  },
                  "init": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m1_im2_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4498,
                      "end": 4512
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4513,
                      "end": 4515
                    },
                    "optional": false,
                    "computed": false,
                    "start": 4498,
                    "end": 4515
                  },
                  "definite": false,
                  "start": 4471,
                  "end": 4515
                }
              ],
              "declare": false,
              "start": 4467,
              "end": 4516
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 4460,
            "end": 4516
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
                    "start": 4532,
                    "end": 4556
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
                        "start": 4563,
                        "end": 4577
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4578,
                        "end": 4580
                      },
                      "optional": false,
                      "computed": false,
                      "start": 4563,
                      "end": 4580
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 4559,
                    "end": 4582
                  },
                  "definite": false,
                  "start": 4532,
                  "end": 4582
                }
              ],
              "declare": false,
              "start": 4528,
              "end": 4583
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 4521,
            "end": 4583
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
                    "start": 4599,
                    "end": 4623
                  },
                  "init": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m1_im2_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4626,
                      "end": 4640
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4641,
                      "end": 4643
                    },
                    "optional": false,
                    "computed": false,
                    "start": 4626,
                    "end": 4643
                  },
                  "definite": false,
                  "start": 4599,
                  "end": 4643
                }
              ],
              "declare": false,
              "start": 4595,
              "end": 4644
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 4588,
            "end": 4644
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
                    "start": 4660,
                    "end": 4684
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
                        "start": 4687,
                        "end": 4701
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "f1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4702,
                        "end": 4704
                      },
                      "optional": false,
                      "computed": false,
                      "start": 4687,
                      "end": 4704
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 4687,
                    "end": 4706
                  },
                  "definite": false,
                  "start": 4660,
                  "end": 4706
                }
              ],
              "declare": false,
              "start": 4656,
              "end": 4707
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 4649,
            "end": 4707
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
                  "start": 4716,
                  "end": 4741
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m1_im2_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4744,
                    "end": 4758
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4759,
                    "end": 4761
                  },
                  "optional": false,
                  "computed": false,
                  "start": 4744,
                  "end": 4761
                },
                "definite": false,
                "start": 4716,
                "end": 4761
              }
            ],
            "declare": false,
            "start": 4712,
            "end": 4762
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
                  "start": 4771,
                  "end": 4796
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
                      "start": 4803,
                      "end": 4817
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4818,
                      "end": 4820
                    },
                    "optional": false,
                    "computed": false,
                    "start": 4803,
                    "end": 4820
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "start": 4799,
                  "end": 4822
                },
                "definite": false,
                "start": 4771,
                "end": 4822
              }
            ],
            "declare": false,
            "start": 4767,
            "end": 4823
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
                  "start": 4832,
                  "end": 4857
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m1_im2_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4860,
                    "end": 4874
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4875,
                    "end": 4877
                  },
                  "optional": false,
                  "computed": false,
                  "start": 4860,
                  "end": 4877
                },
                "definite": false,
                "start": 4832,
                "end": 4877
              }
            ],
            "declare": false,
            "start": 4828,
            "end": 4878
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
                  "start": 4887,
                  "end": 4912
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
                      "start": 4915,
                      "end": 4929
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4930,
                      "end": 4932
                    },
                    "optional": false,
                    "computed": false,
                    "start": 4915,
                    "end": 4932
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 4915,
                  "end": 4934
                },
                "definite": false,
                "start": 4887,
                "end": 4934
              }
            ],
            "declare": false,
            "start": 4883,
            "end": 4935
          },
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m1_im3_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 4948,
              "end": 4962
            },
            "moduleReference": {
              "type": "TSExternalModuleReference",
              "expression": {
                "type": "Literal",
                "value": "m2_M3_public",
                "raw": "\"m2_M3_public\"",
                "start": 4973,
                "end": 4987
              },
              "start": 4965,
              "end": 4988
            },
            "importKind": "value",
            "start": 4941,
            "end": 4989
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
                    "start": 5005,
                    "end": 5029
                  },
                  "init": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m1_im3_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5032,
                      "end": 5046
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5047,
                      "end": 5049
                    },
                    "optional": false,
                    "computed": false,
                    "start": 5032,
                    "end": 5049
                  },
                  "definite": false,
                  "start": 5005,
                  "end": 5049
                }
              ],
              "declare": false,
              "start": 5001,
              "end": 5050
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 4994,
            "end": 5050
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
                    "start": 5066,
                    "end": 5090
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
                        "start": 5097,
                        "end": 5111
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5112,
                        "end": 5114
                      },
                      "optional": false,
                      "computed": false,
                      "start": 5097,
                      "end": 5114
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 5093,
                    "end": 5116
                  },
                  "definite": false,
                  "start": 5066,
                  "end": 5116
                }
              ],
              "declare": false,
              "start": 5062,
              "end": 5117
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 5055,
            "end": 5117
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
                    "start": 5133,
                    "end": 5157
                  },
                  "init": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m1_im3_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5160,
                      "end": 5174
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5175,
                      "end": 5177
                    },
                    "optional": false,
                    "computed": false,
                    "start": 5160,
                    "end": 5177
                  },
                  "definite": false,
                  "start": 5133,
                  "end": 5177
                }
              ],
              "declare": false,
              "start": 5129,
              "end": 5178
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 5122,
            "end": 5178
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
                    "start": 5194,
                    "end": 5218
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
                        "start": 5221,
                        "end": 5235
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "f1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5236,
                        "end": 5238
                      },
                      "optional": false,
                      "computed": false,
                      "start": 5221,
                      "end": 5238
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 5221,
                    "end": 5240
                  },
                  "definite": false,
                  "start": 5194,
                  "end": 5240
                }
              ],
              "declare": false,
              "start": 5190,
              "end": 5241
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 5183,
            "end": 5241
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
                  "start": 5250,
                  "end": 5275
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m1_im3_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5278,
                    "end": 5292
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5293,
                    "end": 5295
                  },
                  "optional": false,
                  "computed": false,
                  "start": 5278,
                  "end": 5295
                },
                "definite": false,
                "start": 5250,
                "end": 5295
              }
            ],
            "declare": false,
            "start": 5246,
            "end": 5296
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
                  "start": 5305,
                  "end": 5330
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
                      "start": 5337,
                      "end": 5351
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5352,
                      "end": 5354
                    },
                    "optional": false,
                    "computed": false,
                    "start": 5337,
                    "end": 5354
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "start": 5333,
                  "end": 5356
                },
                "definite": false,
                "start": 5305,
                "end": 5356
              }
            ],
            "declare": false,
            "start": 5301,
            "end": 5357
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
                  "start": 5366,
                  "end": 5391
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m1_im3_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5394,
                    "end": 5408
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5409,
                    "end": 5411
                  },
                  "optional": false,
                  "computed": false,
                  "start": 5394,
                  "end": 5411
                },
                "definite": false,
                "start": 5366,
                "end": 5411
              }
            ],
            "declare": false,
            "start": 5362,
            "end": 5412
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
                  "start": 5421,
                  "end": 5446
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
                      "start": 5449,
                      "end": 5463
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5464,
                      "end": 5466
                    },
                    "optional": false,
                    "computed": false,
                    "start": 5449,
                    "end": 5466
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 5449,
                  "end": 5468
                },
                "definite": false,
                "start": 5421,
                "end": 5468
              }
            ],
            "declare": false,
            "start": 5417,
            "end": 5469
          },
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m1_im4_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 5482,
              "end": 5496
            },
            "moduleReference": {
              "type": "TSExternalModuleReference",
              "expression": {
                "type": "Literal",
                "value": "m2_M4_private",
                "raw": "\"m2_M4_private\"",
                "start": 5507,
                "end": 5522
              },
              "start": 5499,
              "end": 5523
            },
            "importKind": "value",
            "start": 5475,
            "end": 5524
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
                    "start": 5540,
                    "end": 5564
                  },
                  "init": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m1_im4_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5567,
                      "end": 5581
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5582,
                      "end": 5584
                    },
                    "optional": false,
                    "computed": false,
                    "start": 5567,
                    "end": 5584
                  },
                  "definite": false,
                  "start": 5540,
                  "end": 5584
                }
              ],
              "declare": false,
              "start": 5536,
              "end": 5585
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 5529,
            "end": 5585
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
                    "start": 5601,
                    "end": 5625
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
                        "start": 5632,
                        "end": 5646
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5647,
                        "end": 5649
                      },
                      "optional": false,
                      "computed": false,
                      "start": 5632,
                      "end": 5649
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 5628,
                    "end": 5651
                  },
                  "definite": false,
                  "start": 5601,
                  "end": 5651
                }
              ],
              "declare": false,
              "start": 5597,
              "end": 5652
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 5590,
            "end": 5652
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
                    "start": 5668,
                    "end": 5692
                  },
                  "init": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m1_im4_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5695,
                      "end": 5709
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5710,
                      "end": 5712
                    },
                    "optional": false,
                    "computed": false,
                    "start": 5695,
                    "end": 5712
                  },
                  "definite": false,
                  "start": 5668,
                  "end": 5712
                }
              ],
              "declare": false,
              "start": 5664,
              "end": 5713
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 5657,
            "end": 5713
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
                    "start": 5729,
                    "end": 5753
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
                        "start": 5756,
                        "end": 5770
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "f1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5771,
                        "end": 5773
                      },
                      "optional": false,
                      "computed": false,
                      "start": 5756,
                      "end": 5773
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 5756,
                    "end": 5775
                  },
                  "definite": false,
                  "start": 5729,
                  "end": 5775
                }
              ],
              "declare": false,
              "start": 5725,
              "end": 5776
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 5718,
            "end": 5776
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
                  "start": 5785,
                  "end": 5810
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m1_im4_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5813,
                    "end": 5827
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5828,
                    "end": 5830
                  },
                  "optional": false,
                  "computed": false,
                  "start": 5813,
                  "end": 5830
                },
                "definite": false,
                "start": 5785,
                "end": 5830
              }
            ],
            "declare": false,
            "start": 5781,
            "end": 5831
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
                  "start": 5840,
                  "end": 5865
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
                      "start": 5872,
                      "end": 5886
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5887,
                      "end": 5889
                    },
                    "optional": false,
                    "computed": false,
                    "start": 5872,
                    "end": 5889
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "start": 5868,
                  "end": 5891
                },
                "definite": false,
                "start": 5840,
                "end": 5891
              }
            ],
            "declare": false,
            "start": 5836,
            "end": 5892
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
                  "start": 5901,
                  "end": 5926
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m1_im4_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5929,
                    "end": 5943
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5944,
                    "end": 5946
                  },
                  "optional": false,
                  "computed": false,
                  "start": 5929,
                  "end": 5946
                },
                "definite": false,
                "start": 5901,
                "end": 5946
              }
            ],
            "declare": false,
            "start": 5897,
            "end": 5947
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
                  "start": 5956,
                  "end": 5981
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
                      "start": 5984,
                      "end": 5998
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5999,
                      "end": 6001
                    },
                    "optional": false,
                    "computed": false,
                    "start": 5984,
                    "end": 6001
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 5984,
                  "end": 6003
                },
                "definite": false,
                "start": 5956,
                "end": 6003
              }
            ],
            "declare": false,
            "start": 5952,
            "end": 6004
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
                "start": 6060,
                "end": 6073
              },
              "moduleReference": {
                "type": "Identifier",
                "decorators": [],
                "name": "m2_M1_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 6076,
                "end": 6088
              },
              "importKind": "value",
              "start": 6053,
              "end": 6089
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 6046,
            "end": 6089
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
                "start": 6108,
                "end": 6121
              },
              "moduleReference": {
                "type": "Identifier",
                "decorators": [],
                "name": "m2_M2_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 6124,
                "end": 6137
              },
              "importKind": "value",
              "start": 6101,
              "end": 6138
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 6094,
            "end": 6138
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
                "start": 6157,
                "end": 6170
              },
              "moduleReference": {
                "type": "TSExternalModuleReference",
                "expression": {
                  "type": "Literal",
                  "value": "m2_M3_public",
                  "raw": "\"m2_M3_public\"",
                  "start": 6181,
                  "end": 6195
                },
                "start": 6173,
                "end": 6196
              },
              "importKind": "value",
              "start": 6150,
              "end": 6197
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 6143,
            "end": 6197
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
                "start": 6216,
                "end": 6229
              },
              "moduleReference": {
                "type": "TSExternalModuleReference",
                "expression": {
                  "type": "Literal",
                  "value": "m2_M4_private",
                  "raw": "\"m2_M4_private\"",
                  "start": 6240,
                  "end": 6255
                },
                "start": 6232,
                "end": 6256
              },
              "importKind": "value",
              "start": 6209,
              "end": 6257
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 6202,
            "end": 6257
          }
        ],
        "start": 3129,
        "end": 6259
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 3116,
      "end": 6259
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSModuleDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "glo_M1_public",
          "optional": false,
          "typeAnnotation": null,
          "start": 6278,
          "end": 6291
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
                  "start": 6311,
                  "end": 6313
                },
                "typeParameters": null,
                "superClass": null,
                "superTypeArguments": null,
                "implements": [],
                "body": {
                  "type": "ClassBody",
                  "body": [],
                  "start": 6314,
                  "end": 6321
                },
                "abstract": false,
                "declare": false,
                "start": 6305,
                "end": 6321
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 6298,
              "end": 6321
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
                  "start": 6342,
                  "end": 6344
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
                          "start": 6368,
                          "end": 6370
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "start": 6364,
                        "end": 6370
                      },
                      "start": 6357,
                      "end": 6371
                    }
                  ],
                  "start": 6347,
                  "end": 6377
                },
                "expression": false,
                "start": 6333,
                "end": 6377
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 6326,
              "end": 6377
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
                      "start": 6393,
                      "end": 6395
                    },
                    "init": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6398,
                      "end": 6400
                    },
                    "definite": false,
                    "start": 6393,
                    "end": 6400
                  }
                ],
                "declare": false,
                "start": 6389,
                "end": 6401
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 6382,
              "end": 6401
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
                            "start": 6421,
                            "end": 6423
                          },
                          "typeArguments": null,
                          "start": 6421,
                          "end": 6423
                        },
                        "start": 6419,
                        "end": 6423
                      },
                      "start": 6417,
                      "end": 6423
                    },
                    "init": null,
                    "definite": false,
                    "start": 6417,
                    "end": 6423
                  }
                ],
                "declare": false,
                "start": 6413,
                "end": 6424
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 6406,
              "end": 6424
            }
          ],
          "start": 6292,
          "end": 6426
        },
        "kind": "namespace",
        "declare": false,
        "global": false,
        "start": 6268,
        "end": 6426
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 6261,
      "end": 6426
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSModuleDeclaration",
        "id": {
          "type": "Literal",
          "value": "glo_M2_public",
          "raw": "\"glo_M2_public\"",
          "start": 6450,
          "end": 6465
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
                  "start": 6488,
                  "end": 6490
                },
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": null,
                "expression": false,
                "start": 6479,
                "end": 6493
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 6472,
              "end": 6493
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
                  "start": 6511,
                  "end": 6513
                },
                "typeParameters": null,
                "superClass": null,
                "superTypeArguments": null,
                "implements": [],
                "body": {
                  "type": "ClassBody",
                  "body": [],
                  "start": 6514,
                  "end": 6521
                },
                "abstract": false,
                "declare": false,
                "start": 6505,
                "end": 6521
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 6498,
              "end": 6521
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
                                    "start": 6551,
                                    "end": 6553
                                  },
                                  "typeArguments": null,
                                  "start": 6551,
                                  "end": 6553
                                },
                                "start": 6549,
                                "end": 6553
                              },
                              "start": 6543,
                              "end": 6554
                            }
                          ],
                          "start": 6541,
                          "end": 6556
                        },
                        "start": 6539,
                        "end": 6556
                      },
                      "start": 6537,
                      "end": 6556
                    },
                    "init": null,
                    "definite": false,
                    "start": 6537,
                    "end": 6556
                  }
                ],
                "declare": false,
                "start": 6533,
                "end": 6557
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 6526,
              "end": 6557
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
                            "start": 6577,
                            "end": 6579
                          },
                          "typeArguments": null,
                          "start": 6577,
                          "end": 6579
                        },
                        "start": 6575,
                        "end": 6579
                      },
                      "start": 6573,
                      "end": 6579
                    },
                    "init": null,
                    "definite": false,
                    "start": 6573,
                    "end": 6579
                  }
                ],
                "declare": false,
                "start": 6569,
                "end": 6580
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 6562,
              "end": 6580
            }
          ],
          "start": 6466,
          "end": 6582
        },
        "kind": "module",
        "declare": true,
        "global": false,
        "start": 6435,
        "end": 6582
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 6428,
      "end": 6582
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSModuleDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "glo_M3_private",
          "optional": false,
          "typeAnnotation": null,
          "start": 6601,
          "end": 6615
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
                  "start": 6635,
                  "end": 6637
                },
                "typeParameters": null,
                "superClass": null,
                "superTypeArguments": null,
                "implements": [],
                "body": {
                  "type": "ClassBody",
                  "body": [],
                  "start": 6638,
                  "end": 6645
                },
                "abstract": false,
                "declare": false,
                "start": 6629,
                "end": 6645
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 6622,
              "end": 6645
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
                  "start": 6666,
                  "end": 6668
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
                          "start": 6692,
                          "end": 6694
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "start": 6688,
                        "end": 6694
                      },
                      "start": 6681,
                      "end": 6695
                    }
                  ],
                  "start": 6671,
                  "end": 6701
                },
                "expression": false,
                "start": 6657,
                "end": 6701
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 6650,
              "end": 6701
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
                      "start": 6717,
                      "end": 6719
                    },
                    "init": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6722,
                      "end": 6724
                    },
                    "definite": false,
                    "start": 6717,
                    "end": 6724
                  }
                ],
                "declare": false,
                "start": 6713,
                "end": 6725
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 6706,
              "end": 6725
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
                            "start": 6745,
                            "end": 6747
                          },
                          "typeArguments": null,
                          "start": 6745,
                          "end": 6747
                        },
                        "start": 6743,
                        "end": 6747
                      },
                      "start": 6741,
                      "end": 6747
                    },
                    "init": null,
                    "definite": false,
                    "start": 6741,
                    "end": 6747
                  }
                ],
                "declare": false,
                "start": 6737,
                "end": 6748
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 6730,
              "end": 6748
            }
          ],
          "start": 6616,
          "end": 6750
        },
        "kind": "namespace",
        "declare": false,
        "global": false,
        "start": 6591,
        "end": 6750
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 6584,
      "end": 6750
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSModuleDeclaration",
        "id": {
          "type": "Literal",
          "value": "glo_M4_private",
          "raw": "\"glo_M4_private\"",
          "start": 6774,
          "end": 6790
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
                  "start": 6813,
                  "end": 6815
                },
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": null,
                "expression": false,
                "start": 6804,
                "end": 6818
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 6797,
              "end": 6818
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
                  "start": 6836,
                  "end": 6838
                },
                "typeParameters": null,
                "superClass": null,
                "superTypeArguments": null,
                "implements": [],
                "body": {
                  "type": "ClassBody",
                  "body": [],
                  "start": 6839,
                  "end": 6846
                },
                "abstract": false,
                "declare": false,
                "start": 6830,
                "end": 6846
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 6823,
              "end": 6846
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
                                    "start": 6876,
                                    "end": 6878
                                  },
                                  "typeArguments": null,
                                  "start": 6876,
                                  "end": 6878
                                },
                                "start": 6874,
                                "end": 6878
                              },
                              "start": 6868,
                              "end": 6879
                            }
                          ],
                          "start": 6866,
                          "end": 6881
                        },
                        "start": 6864,
                        "end": 6881
                      },
                      "start": 6862,
                      "end": 6881
                    },
                    "init": null,
                    "definite": false,
                    "start": 6862,
                    "end": 6881
                  }
                ],
                "declare": false,
                "start": 6858,
                "end": 6882
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 6851,
              "end": 6882
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
                            "start": 6902,
                            "end": 6904
                          },
                          "typeArguments": null,
                          "start": 6902,
                          "end": 6904
                        },
                        "start": 6900,
                        "end": 6904
                      },
                      "start": 6898,
                      "end": 6904
                    },
                    "init": null,
                    "definite": false,
                    "start": 6898,
                    "end": 6904
                  }
                ],
                "declare": false,
                "start": 6894,
                "end": 6905
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 6887,
              "end": 6905
            }
          ],
          "start": 6791,
          "end": 6907
        },
        "kind": "module",
        "declare": true,
        "global": false,
        "start": 6759,
        "end": 6907
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 6752,
      "end": 6907
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "glo_im1_private",
        "optional": false,
        "typeAnnotation": null,
        "start": 6917,
        "end": 6932
      },
      "moduleReference": {
        "type": "Identifier",
        "decorators": [],
        "name": "glo_M1_public",
        "optional": false,
        "typeAnnotation": null,
        "start": 6935,
        "end": 6948
      },
      "importKind": "value",
      "start": 6910,
      "end": 6949
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
              "name": "glo_im1_private_v1_public",
              "optional": false,
              "typeAnnotation": null,
              "start": 6961,
              "end": 6986
            },
            "init": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "glo_im1_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 6989,
                "end": 7004
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "c1",
                "optional": false,
                "typeAnnotation": null,
                "start": 7005,
                "end": 7007
              },
              "optional": false,
              "computed": false,
              "start": 6989,
              "end": 7007
            },
            "definite": false,
            "start": 6961,
            "end": 7007
          }
        ],
        "declare": false,
        "start": 6957,
        "end": 7008
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 6950,
      "end": 7008
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
              "name": "glo_im1_private_v2_public",
              "optional": false,
              "typeAnnotation": null,
              "start": 7020,
              "end": 7045
            },
            "init": {
              "type": "NewExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "glo_im1_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7052,
                  "end": 7067
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7068,
                  "end": 7070
                },
                "optional": false,
                "computed": false,
                "start": 7052,
                "end": 7070
              },
              "typeArguments": null,
              "arguments": [],
              "start": 7048,
              "end": 7072
            },
            "definite": false,
            "start": 7020,
            "end": 7072
          }
        ],
        "declare": false,
        "start": 7016,
        "end": 7073
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 7009,
      "end": 7073
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
              "name": "glo_im1_private_v3_public",
              "optional": false,
              "typeAnnotation": null,
              "start": 7085,
              "end": 7110
            },
            "init": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "glo_im1_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 7113,
                "end": 7128
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "f1",
                "optional": false,
                "typeAnnotation": null,
                "start": 7129,
                "end": 7131
              },
              "optional": false,
              "computed": false,
              "start": 7113,
              "end": 7131
            },
            "definite": false,
            "start": 7085,
            "end": 7131
          }
        ],
        "declare": false,
        "start": 7081,
        "end": 7132
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 7074,
      "end": 7132
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
              "name": "glo_im1_private_v4_public",
              "optional": false,
              "typeAnnotation": null,
              "start": 7144,
              "end": 7169
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "glo_im1_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7172,
                  "end": 7187
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7188,
                  "end": 7190
                },
                "optional": false,
                "computed": false,
                "start": 7172,
                "end": 7190
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 7172,
              "end": 7192
            },
            "definite": false,
            "start": 7144,
            "end": 7192
          }
        ],
        "declare": false,
        "start": 7140,
        "end": 7193
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 7133,
      "end": 7193
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
            "name": "glo_im1_private_v1_private",
            "optional": false,
            "typeAnnotation": null,
            "start": 7198,
            "end": 7224
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "glo_im1_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 7227,
              "end": 7242
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "c1",
              "optional": false,
              "typeAnnotation": null,
              "start": 7243,
              "end": 7245
            },
            "optional": false,
            "computed": false,
            "start": 7227,
            "end": 7245
          },
          "definite": false,
          "start": 7198,
          "end": 7245
        }
      ],
      "declare": false,
      "start": 7194,
      "end": 7246
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
            "name": "glo_im1_private_v2_private",
            "optional": false,
            "typeAnnotation": null,
            "start": 7251,
            "end": 7277
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "glo_im1_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 7284,
                "end": 7299
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "c1",
                "optional": false,
                "typeAnnotation": null,
                "start": 7300,
                "end": 7302
              },
              "optional": false,
              "computed": false,
              "start": 7284,
              "end": 7302
            },
            "typeArguments": null,
            "arguments": [],
            "start": 7280,
            "end": 7304
          },
          "definite": false,
          "start": 7251,
          "end": 7304
        }
      ],
      "declare": false,
      "start": 7247,
      "end": 7305
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
            "name": "glo_im1_private_v3_private",
            "optional": false,
            "typeAnnotation": null,
            "start": 7310,
            "end": 7336
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "glo_im1_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 7339,
              "end": 7354
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "f1",
              "optional": false,
              "typeAnnotation": null,
              "start": 7355,
              "end": 7357
            },
            "optional": false,
            "computed": false,
            "start": 7339,
            "end": 7357
          },
          "definite": false,
          "start": 7310,
          "end": 7357
        }
      ],
      "declare": false,
      "start": 7306,
      "end": 7358
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
            "name": "glo_im1_private_v4_private",
            "optional": false,
            "typeAnnotation": null,
            "start": 7363,
            "end": 7389
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "glo_im1_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 7392,
                "end": 7407
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "f1",
                "optional": false,
                "typeAnnotation": null,
                "start": 7408,
                "end": 7410
              },
              "optional": false,
              "computed": false,
              "start": 7392,
              "end": 7410
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 7392,
            "end": 7412
          },
          "definite": false,
          "start": 7363,
          "end": 7412
        }
      ],
      "declare": false,
      "start": 7359,
      "end": 7413
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "glo_im2_private",
        "optional": false,
        "typeAnnotation": null,
        "start": 7423,
        "end": 7438
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "glo_M2_public",
          "raw": "\"glo_M2_public\"",
          "start": 7449,
          "end": 7464
        },
        "start": 7441,
        "end": 7465
      },
      "importKind": "value",
      "start": 7416,
      "end": 7466
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
              "name": "glo_im2_private_v1_public",
              "optional": false,
              "typeAnnotation": null,
              "start": 7478,
              "end": 7503
            },
            "init": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "glo_im2_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 7506,
                "end": 7521
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "c1",
                "optional": false,
                "typeAnnotation": null,
                "start": 7522,
                "end": 7524
              },
              "optional": false,
              "computed": false,
              "start": 7506,
              "end": 7524
            },
            "definite": false,
            "start": 7478,
            "end": 7524
          }
        ],
        "declare": false,
        "start": 7474,
        "end": 7525
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 7467,
      "end": 7525
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
              "name": "glo_im2_private_v2_public",
              "optional": false,
              "typeAnnotation": null,
              "start": 7537,
              "end": 7562
            },
            "init": {
              "type": "NewExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "glo_im2_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7569,
                  "end": 7584
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7585,
                  "end": 7587
                },
                "optional": false,
                "computed": false,
                "start": 7569,
                "end": 7587
              },
              "typeArguments": null,
              "arguments": [],
              "start": 7565,
              "end": 7589
            },
            "definite": false,
            "start": 7537,
            "end": 7589
          }
        ],
        "declare": false,
        "start": 7533,
        "end": 7590
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 7526,
      "end": 7590
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
              "name": "glo_im2_private_v3_public",
              "optional": false,
              "typeAnnotation": null,
              "start": 7602,
              "end": 7627
            },
            "init": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "glo_im2_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 7630,
                "end": 7645
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "f1",
                "optional": false,
                "typeAnnotation": null,
                "start": 7646,
                "end": 7648
              },
              "optional": false,
              "computed": false,
              "start": 7630,
              "end": 7648
            },
            "definite": false,
            "start": 7602,
            "end": 7648
          }
        ],
        "declare": false,
        "start": 7598,
        "end": 7649
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 7591,
      "end": 7649
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
              "name": "glo_im2_private_v4_public",
              "optional": false,
              "typeAnnotation": null,
              "start": 7661,
              "end": 7686
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "glo_im2_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7689,
                  "end": 7704
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7705,
                  "end": 7707
                },
                "optional": false,
                "computed": false,
                "start": 7689,
                "end": 7707
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 7689,
              "end": 7709
            },
            "definite": false,
            "start": 7661,
            "end": 7709
          }
        ],
        "declare": false,
        "start": 7657,
        "end": 7710
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 7650,
      "end": 7710
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
            "name": "glo_im2_private_v1_private",
            "optional": false,
            "typeAnnotation": null,
            "start": 7715,
            "end": 7741
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "glo_im2_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 7744,
              "end": 7759
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "c1",
              "optional": false,
              "typeAnnotation": null,
              "start": 7760,
              "end": 7762
            },
            "optional": false,
            "computed": false,
            "start": 7744,
            "end": 7762
          },
          "definite": false,
          "start": 7715,
          "end": 7762
        }
      ],
      "declare": false,
      "start": 7711,
      "end": 7763
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
            "name": "glo_im2_private_v2_private",
            "optional": false,
            "typeAnnotation": null,
            "start": 7768,
            "end": 7794
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "glo_im2_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 7801,
                "end": 7816
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "c1",
                "optional": false,
                "typeAnnotation": null,
                "start": 7817,
                "end": 7819
              },
              "optional": false,
              "computed": false,
              "start": 7801,
              "end": 7819
            },
            "typeArguments": null,
            "arguments": [],
            "start": 7797,
            "end": 7821
          },
          "definite": false,
          "start": 7768,
          "end": 7821
        }
      ],
      "declare": false,
      "start": 7764,
      "end": 7822
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
            "name": "glo_im2_private_v3_private",
            "optional": false,
            "typeAnnotation": null,
            "start": 7827,
            "end": 7853
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "glo_im2_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 7856,
              "end": 7871
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "f1",
              "optional": false,
              "typeAnnotation": null,
              "start": 7872,
              "end": 7874
            },
            "optional": false,
            "computed": false,
            "start": 7856,
            "end": 7874
          },
          "definite": false,
          "start": 7827,
          "end": 7874
        }
      ],
      "declare": false,
      "start": 7823,
      "end": 7875
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
            "name": "glo_im2_private_v4_private",
            "optional": false,
            "typeAnnotation": null,
            "start": 7880,
            "end": 7906
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "glo_im2_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 7909,
                "end": 7924
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "f1",
                "optional": false,
                "typeAnnotation": null,
                "start": 7925,
                "end": 7927
              },
              "optional": false,
              "computed": false,
              "start": 7909,
              "end": 7927
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 7909,
            "end": 7929
          },
          "definite": false,
          "start": 7880,
          "end": 7929
        }
      ],
      "declare": false,
      "start": 7876,
      "end": 7930
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "glo_im3_private",
        "optional": false,
        "typeAnnotation": null,
        "start": 7939,
        "end": 7954
      },
      "moduleReference": {
        "type": "Identifier",
        "decorators": [],
        "name": "glo_M3_private",
        "optional": false,
        "typeAnnotation": null,
        "start": 7957,
        "end": 7971
      },
      "importKind": "value",
      "start": 7932,
      "end": 7972
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
              "name": "glo_im3_private_v1_public",
              "optional": false,
              "typeAnnotation": null,
              "start": 7984,
              "end": 8009
            },
            "init": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "glo_im3_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 8012,
                "end": 8027
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "c1",
                "optional": false,
                "typeAnnotation": null,
                "start": 8028,
                "end": 8030
              },
              "optional": false,
              "computed": false,
              "start": 8012,
              "end": 8030
            },
            "definite": false,
            "start": 7984,
            "end": 8030
          }
        ],
        "declare": false,
        "start": 7980,
        "end": 8031
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 7973,
      "end": 8031
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
              "name": "glo_im3_private_v2_public",
              "optional": false,
              "typeAnnotation": null,
              "start": 8043,
              "end": 8068
            },
            "init": {
              "type": "NewExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "glo_im3_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 8075,
                  "end": 8090
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 8091,
                  "end": 8093
                },
                "optional": false,
                "computed": false,
                "start": 8075,
                "end": 8093
              },
              "typeArguments": null,
              "arguments": [],
              "start": 8071,
              "end": 8095
            },
            "definite": false,
            "start": 8043,
            "end": 8095
          }
        ],
        "declare": false,
        "start": 8039,
        "end": 8096
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 8032,
      "end": 8096
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
              "name": "glo_im3_private_v3_public",
              "optional": false,
              "typeAnnotation": null,
              "start": 8108,
              "end": 8133
            },
            "init": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "glo_im3_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 8136,
                "end": 8151
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "f1",
                "optional": false,
                "typeAnnotation": null,
                "start": 8152,
                "end": 8154
              },
              "optional": false,
              "computed": false,
              "start": 8136,
              "end": 8154
            },
            "definite": false,
            "start": 8108,
            "end": 8154
          }
        ],
        "declare": false,
        "start": 8104,
        "end": 8155
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 8097,
      "end": 8155
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
              "name": "glo_im3_private_v4_public",
              "optional": false,
              "typeAnnotation": null,
              "start": 8167,
              "end": 8192
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "glo_im3_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 8195,
                  "end": 8210
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 8211,
                  "end": 8213
                },
                "optional": false,
                "computed": false,
                "start": 8195,
                "end": 8213
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 8195,
              "end": 8215
            },
            "definite": false,
            "start": 8167,
            "end": 8215
          }
        ],
        "declare": false,
        "start": 8163,
        "end": 8216
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 8156,
      "end": 8216
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
            "name": "glo_im3_private_v1_private",
            "optional": false,
            "typeAnnotation": null,
            "start": 8221,
            "end": 8247
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "glo_im3_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 8250,
              "end": 8265
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "c1",
              "optional": false,
              "typeAnnotation": null,
              "start": 8266,
              "end": 8268
            },
            "optional": false,
            "computed": false,
            "start": 8250,
            "end": 8268
          },
          "definite": false,
          "start": 8221,
          "end": 8268
        }
      ],
      "declare": false,
      "start": 8217,
      "end": 8269
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
            "name": "glo_im3_private_v2_private",
            "optional": false,
            "typeAnnotation": null,
            "start": 8274,
            "end": 8300
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "glo_im3_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 8307,
                "end": 8322
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "c1",
                "optional": false,
                "typeAnnotation": null,
                "start": 8323,
                "end": 8325
              },
              "optional": false,
              "computed": false,
              "start": 8307,
              "end": 8325
            },
            "typeArguments": null,
            "arguments": [],
            "start": 8303,
            "end": 8327
          },
          "definite": false,
          "start": 8274,
          "end": 8327
        }
      ],
      "declare": false,
      "start": 8270,
      "end": 8328
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
            "name": "glo_im3_private_v3_private",
            "optional": false,
            "typeAnnotation": null,
            "start": 8333,
            "end": 8359
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "glo_im3_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 8362,
              "end": 8377
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "f1",
              "optional": false,
              "typeAnnotation": null,
              "start": 8378,
              "end": 8380
            },
            "optional": false,
            "computed": false,
            "start": 8362,
            "end": 8380
          },
          "definite": false,
          "start": 8333,
          "end": 8380
        }
      ],
      "declare": false,
      "start": 8329,
      "end": 8381
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
            "name": "glo_im3_private_v4_private",
            "optional": false,
            "typeAnnotation": null,
            "start": 8386,
            "end": 8412
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "glo_im3_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 8415,
                "end": 8430
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "f1",
                "optional": false,
                "typeAnnotation": null,
                "start": 8431,
                "end": 8433
              },
              "optional": false,
              "computed": false,
              "start": 8415,
              "end": 8433
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 8415,
            "end": 8435
          },
          "definite": false,
          "start": 8386,
          "end": 8435
        }
      ],
      "declare": false,
      "start": 8382,
      "end": 8436
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "glo_im4_private",
        "optional": false,
        "typeAnnotation": null,
        "start": 8445,
        "end": 8460
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "glo_M4_private",
          "raw": "\"glo_M4_private\"",
          "start": 8471,
          "end": 8487
        },
        "start": 8463,
        "end": 8488
      },
      "importKind": "value",
      "start": 8438,
      "end": 8489
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
              "name": "glo_im4_private_v1_public",
              "optional": false,
              "typeAnnotation": null,
              "start": 8501,
              "end": 8526
            },
            "init": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "glo_im4_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 8529,
                "end": 8544
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "c1",
                "optional": false,
                "typeAnnotation": null,
                "start": 8545,
                "end": 8547
              },
              "optional": false,
              "computed": false,
              "start": 8529,
              "end": 8547
            },
            "definite": false,
            "start": 8501,
            "end": 8547
          }
        ],
        "declare": false,
        "start": 8497,
        "end": 8548
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 8490,
      "end": 8548
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
              "name": "glo_im4_private_v2_public",
              "optional": false,
              "typeAnnotation": null,
              "start": 8560,
              "end": 8585
            },
            "init": {
              "type": "NewExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "glo_im4_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 8592,
                  "end": 8607
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 8608,
                  "end": 8610
                },
                "optional": false,
                "computed": false,
                "start": 8592,
                "end": 8610
              },
              "typeArguments": null,
              "arguments": [],
              "start": 8588,
              "end": 8612
            },
            "definite": false,
            "start": 8560,
            "end": 8612
          }
        ],
        "declare": false,
        "start": 8556,
        "end": 8613
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 8549,
      "end": 8613
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
              "name": "glo_im4_private_v3_public",
              "optional": false,
              "typeAnnotation": null,
              "start": 8625,
              "end": 8650
            },
            "init": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "glo_im4_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 8653,
                "end": 8668
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "f1",
                "optional": false,
                "typeAnnotation": null,
                "start": 8669,
                "end": 8671
              },
              "optional": false,
              "computed": false,
              "start": 8653,
              "end": 8671
            },
            "definite": false,
            "start": 8625,
            "end": 8671
          }
        ],
        "declare": false,
        "start": 8621,
        "end": 8672
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 8614,
      "end": 8672
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
              "name": "glo_im4_private_v4_public",
              "optional": false,
              "typeAnnotation": null,
              "start": 8684,
              "end": 8709
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "glo_im4_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 8712,
                  "end": 8727
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 8728,
                  "end": 8730
                },
                "optional": false,
                "computed": false,
                "start": 8712,
                "end": 8730
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 8712,
              "end": 8732
            },
            "definite": false,
            "start": 8684,
            "end": 8732
          }
        ],
        "declare": false,
        "start": 8680,
        "end": 8733
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 8673,
      "end": 8733
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
            "name": "glo_im4_private_v1_private",
            "optional": false,
            "typeAnnotation": null,
            "start": 8738,
            "end": 8764
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "glo_im4_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 8767,
              "end": 8782
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "c1",
              "optional": false,
              "typeAnnotation": null,
              "start": 8783,
              "end": 8785
            },
            "optional": false,
            "computed": false,
            "start": 8767,
            "end": 8785
          },
          "definite": false,
          "start": 8738,
          "end": 8785
        }
      ],
      "declare": false,
      "start": 8734,
      "end": 8786
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
            "name": "glo_im4_private_v2_private",
            "optional": false,
            "typeAnnotation": null,
            "start": 8791,
            "end": 8817
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "glo_im4_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 8824,
                "end": 8839
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "c1",
                "optional": false,
                "typeAnnotation": null,
                "start": 8840,
                "end": 8842
              },
              "optional": false,
              "computed": false,
              "start": 8824,
              "end": 8842
            },
            "typeArguments": null,
            "arguments": [],
            "start": 8820,
            "end": 8844
          },
          "definite": false,
          "start": 8791,
          "end": 8844
        }
      ],
      "declare": false,
      "start": 8787,
      "end": 8845
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
            "name": "glo_im4_private_v3_private",
            "optional": false,
            "typeAnnotation": null,
            "start": 8850,
            "end": 8876
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "glo_im4_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 8879,
              "end": 8894
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "f1",
              "optional": false,
              "typeAnnotation": null,
              "start": 8895,
              "end": 8897
            },
            "optional": false,
            "computed": false,
            "start": 8879,
            "end": 8897
          },
          "definite": false,
          "start": 8850,
          "end": 8897
        }
      ],
      "declare": false,
      "start": 8846,
      "end": 8898
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
            "name": "glo_im4_private_v4_private",
            "optional": false,
            "typeAnnotation": null,
            "start": 8903,
            "end": 8929
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "glo_im4_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 8932,
                "end": 8947
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "f1",
                "optional": false,
                "typeAnnotation": null,
                "start": 8948,
                "end": 8950
              },
              "optional": false,
              "computed": false,
              "start": 8932,
              "end": 8950
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 8932,
            "end": 8952
          },
          "definite": false,
          "start": 8903,
          "end": 8952
        }
      ],
      "declare": false,
      "start": 8899,
      "end": 8953
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSImportEqualsDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "glo_im1_public",
          "optional": false,
          "typeAnnotation": null,
          "start": 9001,
          "end": 9015
        },
        "moduleReference": {
          "type": "Identifier",
          "decorators": [],
          "name": "glo_M1_public",
          "optional": false,
          "typeAnnotation": null,
          "start": 9018,
          "end": 9031
        },
        "importKind": "value",
        "start": 8994,
        "end": 9032
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 8987,
      "end": 9032
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSImportEqualsDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "glo_im2_public",
          "optional": false,
          "typeAnnotation": null,
          "start": 9047,
          "end": 9061
        },
        "moduleReference": {
          "type": "Identifier",
          "decorators": [],
          "name": "glo_M3_private",
          "optional": false,
          "typeAnnotation": null,
          "start": 9064,
          "end": 9078
        },
        "importKind": "value",
        "start": 9040,
        "end": 9079
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 9033,
      "end": 9079
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSImportEqualsDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "glo_im3_public",
          "optional": false,
          "typeAnnotation": null,
          "start": 9094,
          "end": 9108
        },
        "moduleReference": {
          "type": "TSExternalModuleReference",
          "expression": {
            "type": "Literal",
            "value": "glo_M2_public",
            "raw": "\"glo_M2_public\"",
            "start": 9119,
            "end": 9134
          },
          "start": 9111,
          "end": 9135
        },
        "importKind": "value",
        "start": 9087,
        "end": 9136
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 9080,
      "end": 9136
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSImportEqualsDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "glo_im4_public",
          "optional": false,
          "typeAnnotation": null,
          "start": 9151,
          "end": 9165
        },
        "moduleReference": {
          "type": "TSExternalModuleReference",
          "expression": {
            "type": "Literal",
            "value": "glo_M4_private",
            "raw": "\"glo_M4_private\"",
            "start": 9176,
            "end": 9192
          },
          "start": 9168,
          "end": 9193
        },
        "importKind": "value",
        "start": 9144,
        "end": 9194
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 9137,
      "end": 9194
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSModuleDeclaration",
        "id": {
          "type": "Literal",
          "value": "use_glo_M1_public",
          "raw": "\"use_glo_M1_public\"",
          "start": 9219,
          "end": 9238
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
                "start": 9252,
                "end": 9269
              },
              "moduleReference": {
                "type": "Identifier",
                "decorators": [],
                "name": "glo_M1_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 9272,
                "end": 9285
              },
              "importKind": "value",
              "start": 9245,
              "end": 9286
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
                                      "start": 9341,
                                      "end": 9358
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "c1",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 9359,
                                      "end": 9361
                                    },
                                    "start": 9341,
                                    "end": 9361
                                  },
                                  "typeArguments": null,
                                  "start": 9341,
                                  "end": 9361
                                },
                                "start": 9339,
                                "end": 9361
                              },
                              "start": 9333,
                              "end": 9362
                            }
                          ],
                          "start": 9331,
                          "end": 9364
                        },
                        "start": 9329,
                        "end": 9364
                      },
                      "start": 9302,
                      "end": 9364
                    },
                    "init": null,
                    "definite": false,
                    "start": 9302,
                    "end": 9364
                  }
                ],
                "declare": false,
                "start": 9298,
                "end": 9365
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 9291,
              "end": 9365
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
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "use_glo_M1_public",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 9410,
                            "end": 9427
                          },
                          "typeArguments": null,
                          "start": 9410,
                          "end": 9427
                        },
                        "start": 9408,
                        "end": 9427
                      },
                      "start": 9381,
                      "end": 9427
                    },
                    "init": null,
                    "definite": false,
                    "start": 9381,
                    "end": 9427
                  }
                ],
                "declare": false,
                "start": 9377,
                "end": 9428
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 9370,
              "end": 9428
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
                                  "start": 9479,
                                  "end": 9496
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "c1",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 9497,
                                  "end": 9499
                                },
                                "start": 9479,
                                "end": 9499
                              },
                              "typeArguments": null,
                              "start": 9479,
                              "end": 9499
                            },
                            "start": 9476,
                            "end": 9499
                          },
                          "start": 9473,
                          "end": 9499
                        },
                        "start": 9471,
                        "end": 9499
                      },
                      "start": 9444,
                      "end": 9499
                    },
                    "init": null,
                    "definite": false,
                    "start": 9444,
                    "end": 9499
                  }
                ],
                "declare": false,
                "start": 9440,
                "end": 9500
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 9433,
              "end": 9500
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
                                    "start": 9549,
                                    "end": 9566
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "c1",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 9567,
                                    "end": 9569
                                  },
                                  "start": 9549,
                                  "end": 9569
                                },
                                "typeArguments": null,
                                "start": 9549,
                                "end": 9569
                              },
                              "start": 9547,
                              "end": 9569
                            },
                            "start": 9541,
                            "end": 9570
                          }
                        ],
                        "start": 9539,
                        "end": 9572
                      },
                      "start": 9537,
                      "end": 9572
                    },
                    "start": 9509,
                    "end": 9572
                  },
                  "init": null,
                  "definite": false,
                  "start": 9509,
                  "end": 9572
                }
              ],
              "declare": false,
              "start": 9505,
              "end": 9573
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
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "use_glo_M1_public",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 9612,
                          "end": 9629
                        },
                        "typeArguments": null,
                        "start": 9612,
                        "end": 9629
                      },
                      "start": 9610,
                      "end": 9629
                    },
                    "start": 9582,
                    "end": 9629
                  },
                  "init": null,
                  "definite": false,
                  "start": 9582,
                  "end": 9629
                }
              ],
              "declare": false,
              "start": 9578,
              "end": 9630
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
                                "start": 9675,
                                "end": 9692
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "c1",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 9693,
                                "end": 9695
                              },
                              "start": 9675,
                              "end": 9695
                            },
                            "typeArguments": null,
                            "start": 9675,
                            "end": 9695
                          },
                          "start": 9672,
                          "end": 9695
                        },
                        "start": 9669,
                        "end": 9695
                      },
                      "start": 9667,
                      "end": 9695
                    },
                    "start": 9639,
                    "end": 9695
                  },
                  "init": null,
                  "definite": false,
                  "start": 9639,
                  "end": 9695
                }
              ],
              "declare": false,
              "start": 9635,
              "end": 9696
            },
            {
              "type": "TSImportEqualsDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "use_glo_M2_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 9709,
                "end": 9726
              },
              "moduleReference": {
                "type": "TSExternalModuleReference",
                "expression": {
                  "type": "Literal",
                  "value": "glo_M2_public",
                  "raw": "\"glo_M2_public\"",
                  "start": 9737,
                  "end": 9752
                },
                "start": 9729,
                "end": 9753
              },
              "importKind": "value",
              "start": 9702,
              "end": 9754
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
                                      "start": 9809,
                                      "end": 9826
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "c1",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 9827,
                                      "end": 9829
                                    },
                                    "start": 9809,
                                    "end": 9829
                                  },
                                  "typeArguments": null,
                                  "start": 9809,
                                  "end": 9829
                                },
                                "start": 9807,
                                "end": 9829
                              },
                              "start": 9801,
                              "end": 9830
                            }
                          ],
                          "start": 9799,
                          "end": 9832
                        },
                        "start": 9797,
                        "end": 9832
                      },
                      "start": 9770,
                      "end": 9832
                    },
                    "init": null,
                    "definite": false,
                    "start": 9770,
                    "end": 9832
                  }
                ],
                "declare": false,
                "start": 9766,
                "end": 9833
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 9759,
              "end": 9833
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
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "use_glo_M2_public",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 9878,
                            "end": 9895
                          },
                          "typeArguments": null,
                          "start": 9878,
                          "end": 9895
                        },
                        "start": 9876,
                        "end": 9895
                      },
                      "start": 9849,
                      "end": 9895
                    },
                    "init": null,
                    "definite": false,
                    "start": 9849,
                    "end": 9895
                  }
                ],
                "declare": false,
                "start": 9845,
                "end": 9896
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 9838,
              "end": 9896
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
                                  "start": 9947,
                                  "end": 9964
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "c1",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 9965,
                                  "end": 9967
                                },
                                "start": 9947,
                                "end": 9967
                              },
                              "typeArguments": null,
                              "start": 9947,
                              "end": 9967
                            },
                            "start": 9944,
                            "end": 9967
                          },
                          "start": 9941,
                          "end": 9967
                        },
                        "start": 9939,
                        "end": 9967
                      },
                      "start": 9912,
                      "end": 9967
                    },
                    "init": null,
                    "definite": false,
                    "start": 9912,
                    "end": 9967
                  }
                ],
                "declare": false,
                "start": 9908,
                "end": 9968
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 9901,
              "end": 9968
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
                                    "start": 10017,
                                    "end": 10034
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "c1",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 10035,
                                    "end": 10037
                                  },
                                  "start": 10017,
                                  "end": 10037
                                },
                                "typeArguments": null,
                                "start": 10017,
                                "end": 10037
                              },
                              "start": 10015,
                              "end": 10037
                            },
                            "start": 10009,
                            "end": 10038
                          }
                        ],
                        "start": 10007,
                        "end": 10040
                      },
                      "start": 10005,
                      "end": 10040
                    },
                    "start": 9977,
                    "end": 10040
                  },
                  "init": null,
                  "definite": false,
                  "start": 9977,
                  "end": 10040
                }
              ],
              "declare": false,
              "start": 9973,
              "end": 10041
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
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "use_glo_M2_public",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 10080,
                          "end": 10097
                        },
                        "typeArguments": null,
                        "start": 10080,
                        "end": 10097
                      },
                      "start": 10078,
                      "end": 10097
                    },
                    "start": 10050,
                    "end": 10097
                  },
                  "init": null,
                  "definite": false,
                  "start": 10050,
                  "end": 10097
                }
              ],
              "declare": false,
              "start": 10046,
              "end": 10098
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
                                "start": 10143,
                                "end": 10160
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "c1",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 10161,
                                "end": 10163
                              },
                              "start": 10143,
                              "end": 10163
                            },
                            "typeArguments": null,
                            "start": 10143,
                            "end": 10163
                          },
                          "start": 10140,
                          "end": 10163
                        },
                        "start": 10137,
                        "end": 10163
                      },
                      "start": 10135,
                      "end": 10163
                    },
                    "start": 10107,
                    "end": 10163
                  },
                  "init": null,
                  "definite": false,
                  "start": 10107,
                  "end": 10163
                }
              ],
              "declare": false,
              "start": 10103,
              "end": 10164
            },
            {
              "type": "TSModuleDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "m2",
                "optional": false,
                "typeAnnotation": null,
                "start": 10180,
                "end": 10182
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
                      "start": 10200,
                      "end": 10211
                    },
                    "moduleReference": {
                      "type": "TSExternalModuleReference",
                      "expression": {
                        "type": "Literal",
                        "value": "glo_M2_public",
                        "raw": "\"glo_M2_public\"",
                        "start": 10222,
                        "end": 10237
                      },
                      "start": 10214,
                      "end": 10238
                    },
                    "importKind": "value",
                    "start": 10193,
                    "end": 10239
                  },
                  {
                    "type": "TSImportEqualsDeclaration",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "nonerrorImport",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 10255,
                      "end": 10269
                    },
                    "moduleReference": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "glo_M1_public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 10272,
                      "end": 10285
                    },
                    "importKind": "value",
                    "start": 10248,
                    "end": 10286
                  },
                  {
                    "type": "TSModuleDeclaration",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m5",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 10306,
                      "end": 10308
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
                            "start": 10330,
                            "end": 10344
                          },
                          "moduleReference": {
                            "type": "TSExternalModuleReference",
                            "expression": {
                              "type": "Literal",
                              "value": "glo_M2_public",
                              "raw": "\"glo_M2_public\"",
                              "start": 10355,
                              "end": 10370
                            },
                            "start": 10347,
                            "end": 10371
                          },
                          "importKind": "value",
                          "start": 10323,
                          "end": 10372
                        },
                        {
                          "type": "TSImportEqualsDeclaration",
                          "id": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "m5_nonerrorImport",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 10392,
                            "end": 10409
                          },
                          "moduleReference": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "glo_M1_public",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 10412,
                            "end": 10425
                          },
                          "importKind": "value",
                          "start": 10385,
                          "end": 10426
                        }
                      ],
                      "start": 10309,
                      "end": 10436
                    },
                    "kind": "namespace",
                    "declare": false,
                    "global": false,
                    "start": 10296,
                    "end": 10436
                  }
                ],
                "start": 10183,
                "end": 10442
              },
              "kind": "namespace",
              "declare": false,
              "global": false,
              "start": 10170,
              "end": 10442
            }
          ],
          "start": 9239,
          "end": 10444
        },
        "kind": "module",
        "declare": true,
        "global": false,
        "start": 9204,
        "end": 10444
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 9197,
      "end": 10444
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "use_glo_M3_private",
        "raw": "\"use_glo_M3_private\"",
        "start": 10462,
        "end": 10482
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "use_glo_M3_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 10496,
              "end": 10514
            },
            "moduleReference": {
              "type": "Identifier",
              "decorators": [],
              "name": "glo_M3_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 10517,
              "end": 10531
            },
            "importKind": "value",
            "start": 10489,
            "end": 10532
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
                    "name": "use_glo_M3_private_v1_public",
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
                                    "name": "use_glo_M3_private",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 10588,
                                    "end": 10606
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "c1",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 10607,
                                    "end": 10609
                                  },
                                  "start": 10588,
                                  "end": 10609
                                },
                                "typeArguments": null,
                                "start": 10588,
                                "end": 10609
                              },
                              "start": 10586,
                              "end": 10609
                            },
                            "start": 10580,
                            "end": 10610
                          }
                        ],
                        "start": 10578,
                        "end": 10612
                      },
                      "start": 10576,
                      "end": 10612
                    },
                    "start": 10548,
                    "end": 10612
                  },
                  "init": null,
                  "definite": false,
                  "start": 10548,
                  "end": 10612
                }
              ],
              "declare": false,
              "start": 10544,
              "end": 10613
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 10537,
            "end": 10613
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
                    "name": "use_glo_M3_private_v2_public",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "use_glo_M3_private",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 10659,
                          "end": 10677
                        },
                        "typeArguments": null,
                        "start": 10659,
                        "end": 10677
                      },
                      "start": 10657,
                      "end": 10677
                    },
                    "start": 10629,
                    "end": 10677
                  },
                  "init": null,
                  "definite": false,
                  "start": 10629,
                  "end": 10677
                }
              ],
              "declare": false,
              "start": 10625,
              "end": 10678
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 10618,
            "end": 10678
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
                    "name": "use_glo_M3_private_v3_public",
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
                                "name": "use_glo_M3_private",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 10730,
                                "end": 10748
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "c1",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 10749,
                                "end": 10751
                              },
                              "start": 10730,
                              "end": 10751
                            },
                            "typeArguments": null,
                            "start": 10730,
                            "end": 10751
                          },
                          "start": 10727,
                          "end": 10751
                        },
                        "start": 10724,
                        "end": 10751
                      },
                      "start": 10722,
                      "end": 10751
                    },
                    "start": 10694,
                    "end": 10751
                  },
                  "init": null,
                  "definite": false,
                  "start": 10694,
                  "end": 10751
                }
              ],
              "declare": false,
              "start": 10690,
              "end": 10752
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 10683,
            "end": 10752
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
                  "name": "use_glo_M3_private_v1_private",
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
                                  "name": "use_glo_M3_private",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 10802,
                                  "end": 10820
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "c1",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 10821,
                                  "end": 10823
                                },
                                "start": 10802,
                                "end": 10823
                              },
                              "typeArguments": null,
                              "start": 10802,
                              "end": 10823
                            },
                            "start": 10800,
                            "end": 10823
                          },
                          "start": 10794,
                          "end": 10824
                        }
                      ],
                      "start": 10792,
                      "end": 10826
                    },
                    "start": 10790,
                    "end": 10826
                  },
                  "start": 10761,
                  "end": 10826
                },
                "init": null,
                "definite": false,
                "start": 10761,
                "end": 10826
              }
            ],
            "declare": false,
            "start": 10757,
            "end": 10827
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
                  "name": "use_glo_M3_private_v2_private",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "use_glo_M3_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 10867,
                        "end": 10885
                      },
                      "typeArguments": null,
                      "start": 10867,
                      "end": 10885
                    },
                    "start": 10865,
                    "end": 10885
                  },
                  "start": 10836,
                  "end": 10885
                },
                "init": null,
                "definite": false,
                "start": 10836,
                "end": 10885
              }
            ],
            "declare": false,
            "start": 10832,
            "end": 10886
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
                  "name": "use_glo_M3_private_v3_private",
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
                              "name": "use_glo_M3_private",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 10932,
                              "end": 10950
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "c1",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 10951,
                              "end": 10953
                            },
                            "start": 10932,
                            "end": 10953
                          },
                          "typeArguments": null,
                          "start": 10932,
                          "end": 10953
                        },
                        "start": 10929,
                        "end": 10953
                      },
                      "start": 10926,
                      "end": 10953
                    },
                    "start": 10924,
                    "end": 10953
                  },
                  "start": 10895,
                  "end": 10953
                },
                "init": null,
                "definite": false,
                "start": 10895,
                "end": 10953
              }
            ],
            "declare": false,
            "start": 10891,
            "end": 10954
          },
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "use_glo_M4_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 10967,
              "end": 10985
            },
            "moduleReference": {
              "type": "TSExternalModuleReference",
              "expression": {
                "type": "Literal",
                "value": "glo_M4_private",
                "raw": "\"glo_M4_private\"",
                "start": 10996,
                "end": 11012
              },
              "start": 10988,
              "end": 11013
            },
            "importKind": "value",
            "start": 10960,
            "end": 11014
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
                    "name": "use_glo_M4_private_v1_public",
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
                                    "name": "use_glo_M4_private",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 11070,
                                    "end": 11088
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "c1",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 11089,
                                    "end": 11091
                                  },
                                  "start": 11070,
                                  "end": 11091
                                },
                                "typeArguments": null,
                                "start": 11070,
                                "end": 11091
                              },
                              "start": 11068,
                              "end": 11091
                            },
                            "start": 11062,
                            "end": 11092
                          }
                        ],
                        "start": 11060,
                        "end": 11094
                      },
                      "start": 11058,
                      "end": 11094
                    },
                    "start": 11030,
                    "end": 11094
                  },
                  "init": null,
                  "definite": false,
                  "start": 11030,
                  "end": 11094
                }
              ],
              "declare": false,
              "start": 11026,
              "end": 11095
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 11019,
            "end": 11095
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
                    "name": "use_glo_M4_private_v2_public",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "use_glo_M4_private",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 11141,
                          "end": 11159
                        },
                        "typeArguments": null,
                        "start": 11141,
                        "end": 11159
                      },
                      "start": 11139,
                      "end": 11159
                    },
                    "start": 11111,
                    "end": 11159
                  },
                  "init": null,
                  "definite": false,
                  "start": 11111,
                  "end": 11159
                }
              ],
              "declare": false,
              "start": 11107,
              "end": 11160
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 11100,
            "end": 11160
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
                    "name": "use_glo_M4_private_v3_public",
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
                                "name": "use_glo_M4_private",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 11212,
                                "end": 11230
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "c1",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 11231,
                                "end": 11233
                              },
                              "start": 11212,
                              "end": 11233
                            },
                            "typeArguments": null,
                            "start": 11212,
                            "end": 11233
                          },
                          "start": 11209,
                          "end": 11233
                        },
                        "start": 11206,
                        "end": 11233
                      },
                      "start": 11204,
                      "end": 11233
                    },
                    "start": 11176,
                    "end": 11233
                  },
                  "init": null,
                  "definite": false,
                  "start": 11176,
                  "end": 11233
                }
              ],
              "declare": false,
              "start": 11172,
              "end": 11234
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 11165,
            "end": 11234
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
                  "name": "use_glo_M4_private_v1_private",
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
                                  "name": "use_glo_M4_private",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 11284,
                                  "end": 11302
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "c1",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 11303,
                                  "end": 11305
                                },
                                "start": 11284,
                                "end": 11305
                              },
                              "typeArguments": null,
                              "start": 11284,
                              "end": 11305
                            },
                            "start": 11282,
                            "end": 11305
                          },
                          "start": 11276,
                          "end": 11306
                        }
                      ],
                      "start": 11274,
                      "end": 11308
                    },
                    "start": 11272,
                    "end": 11308
                  },
                  "start": 11243,
                  "end": 11308
                },
                "init": null,
                "definite": false,
                "start": 11243,
                "end": 11308
              }
            ],
            "declare": false,
            "start": 11239,
            "end": 11309
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
                  "name": "use_glo_M4_private_v2_private",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "use_glo_M4_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 11349,
                        "end": 11367
                      },
                      "typeArguments": null,
                      "start": 11349,
                      "end": 11367
                    },
                    "start": 11347,
                    "end": 11367
                  },
                  "start": 11318,
                  "end": 11367
                },
                "init": null,
                "definite": false,
                "start": 11318,
                "end": 11367
              }
            ],
            "declare": false,
            "start": 11314,
            "end": 11368
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
                  "name": "use_glo_M4_private_v3_private",
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
                              "name": "use_glo_M4_private",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 11414,
                              "end": 11432
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "c1",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 11433,
                              "end": 11435
                            },
                            "start": 11414,
                            "end": 11435
                          },
                          "typeArguments": null,
                          "start": 11414,
                          "end": 11435
                        },
                        "start": 11411,
                        "end": 11435
                      },
                      "start": 11408,
                      "end": 11435
                    },
                    "start": 11406,
                    "end": 11435
                  },
                  "start": 11377,
                  "end": 11435
                },
                "init": null,
                "definite": false,
                "start": 11377,
                "end": 11435
              }
            ],
            "declare": false,
            "start": 11373,
            "end": 11436
          },
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m2",
              "optional": false,
              "typeAnnotation": null,
              "start": 11452,
              "end": 11454
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
                    "start": 11472,
                    "end": 11483
                  },
                  "moduleReference": {
                    "type": "TSExternalModuleReference",
                    "expression": {
                      "type": "Literal",
                      "value": "glo_M4_private",
                      "raw": "\"glo_M4_private\"",
                      "start": 11494,
                      "end": 11510
                    },
                    "start": 11486,
                    "end": 11511
                  },
                  "importKind": "value",
                  "start": 11465,
                  "end": 11512
                },
                {
                  "type": "TSImportEqualsDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nonerrorImport",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 11528,
                    "end": 11542
                  },
                  "moduleReference": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "glo_M3_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 11545,
                    "end": 11559
                  },
                  "importKind": "value",
                  "start": 11521,
                  "end": 11560
                },
                {
                  "type": "TSModuleDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m5",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 11580,
                    "end": 11582
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
                          "start": 11604,
                          "end": 11618
                        },
                        "moduleReference": {
                          "type": "TSExternalModuleReference",
                          "expression": {
                            "type": "Literal",
                            "value": "glo_M4_private",
                            "raw": "\"glo_M4_private\"",
                            "start": 11629,
                            "end": 11645
                          },
                          "start": 11621,
                          "end": 11646
                        },
                        "importKind": "value",
                        "start": 11597,
                        "end": 11647
                      },
                      {
                        "type": "TSImportEqualsDeclaration",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "m5_nonerrorImport",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 11667,
                          "end": 11684
                        },
                        "moduleReference": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "glo_M3_private",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 11687,
                          "end": 11701
                        },
                        "importKind": "value",
                        "start": 11660,
                        "end": 11702
                      }
                    ],
                    "start": 11583,
                    "end": 11712
                  },
                  "kind": "namespace",
                  "declare": false,
                  "global": false,
                  "start": 11570,
                  "end": 11712
                }
              ],
              "start": 11455,
              "end": 11718
            },
            "kind": "namespace",
            "declare": false,
            "global": false,
            "start": 11442,
            "end": 11718
          }
        ],
        "start": 10483,
        "end": 11720
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 10447,
      "end": 11720
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "anotherParseError",
        "raw": "\"anotherParseError\"",
        "start": 11737,
        "end": 11756
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
              "start": 11773,
              "end": 11775
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
                    "start": 11801,
                    "end": 11806
                  },
                  "body": {
                    "type": "TSModuleBlock",
                    "body": [],
                    "start": 11807,
                    "end": 11818
                  },
                  "kind": "module",
                  "declare": true,
                  "global": false,
                  "start": 11786,
                  "end": 11818
                }
              ],
              "start": 11776,
              "end": 11824
            },
            "kind": "namespace",
            "declare": false,
            "global": false,
            "start": 11763,
            "end": 11824
          },
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m2",
              "optional": false,
              "typeAnnotation": null,
              "start": 11840,
              "end": 11842
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
                    "start": 11860,
                    "end": 11866
                  },
                  "body": {
                    "type": "TSModuleBlock",
                    "body": [],
                    "start": 11867,
                    "end": 11878
                  },
                  "kind": "module",
                  "declare": false,
                  "global": false,
                  "start": 11853,
                  "end": 11878
                }
              ],
              "start": 11843,
              "end": 11884
            },
            "kind": "namespace",
            "declare": false,
            "global": false,
            "start": 11830,
            "end": 11884
          },
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Literal",
              "value": "abc3",
              "raw": "\"abc3\"",
              "start": 11896,
              "end": 11902
            },
            "body": {
              "type": "TSModuleBlock",
              "body": [],
              "start": 11903,
              "end": 11910
            },
            "kind": "module",
            "declare": false,
            "global": false,
            "start": 11889,
            "end": 11910
          }
        ],
        "start": 11757,
        "end": 11912
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 11722,
      "end": 11912
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "anotherParseError2",
        "raw": "\"anotherParseError2\"",
        "start": 11936,
        "end": 11956
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
              "start": 11973,
              "end": 11975
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
                    "start": 12001,
                    "end": 12006
                  },
                  "body": {
                    "type": "TSModuleBlock",
                    "body": [],
                    "start": 12007,
                    "end": 12018
                  },
                  "kind": "module",
                  "declare": true,
                  "global": false,
                  "start": 11986,
                  "end": 12018
                }
              ],
              "start": 11976,
              "end": 12024
            },
            "kind": "namespace",
            "declare": false,
            "global": false,
            "start": 11963,
            "end": 12024
          },
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m2",
              "optional": false,
              "typeAnnotation": null,
              "start": 12040,
              "end": 12042
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
                    "start": 12060,
                    "end": 12066
                  },
                  "body": {
                    "type": "TSModuleBlock",
                    "body": [],
                    "start": 12067,
                    "end": 12078
                  },
                  "kind": "module",
                  "declare": false,
                  "global": false,
                  "start": 12053,
                  "end": 12078
                }
              ],
              "start": 12043,
              "end": 12084
            },
            "kind": "namespace",
            "declare": false,
            "global": false,
            "start": 12030,
            "end": 12084
          },
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Literal",
              "value": "abc3",
              "raw": "\"abc3\"",
              "start": 12096,
              "end": 12102
            },
            "body": {
              "type": "TSModuleBlock",
              "body": [],
              "start": 12103,
              "end": 12110
            },
            "kind": "module",
            "declare": false,
            "global": false,
            "start": 12089,
            "end": 12110
          }
        ],
        "start": 11957,
        "end": 12112
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 11914,
      "end": 12112
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m2",
        "optional": false,
        "typeAnnotation": null,
        "start": 12124,
        "end": 12126
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
              "start": 12140,
              "end": 12142
            },
            "moduleReference": {
              "type": "TSExternalModuleReference",
              "expression": {
                "type": "Literal",
                "value": "use_glo_M1_public",
                "raw": "\"use_glo_M1_public\"",
                "start": 12153,
                "end": 12172
              },
              "start": 12145,
              "end": 12173
            },
            "importKind": "value",
            "start": 12133,
            "end": 12174
          },
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m4",
              "optional": false,
              "typeAnnotation": null,
              "start": 12189,
              "end": 12191
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
                        "start": 12206,
                        "end": 12207
                      },
                      "init": {
                        "type": "Literal",
                        "value": 10,
                        "raw": "10",
                        "start": 12210,
                        "end": 12212
                      },
                      "definite": false,
                      "start": 12206,
                      "end": 12212
                    }
                  ],
                  "declare": false,
                  "start": 12202,
                  "end": 12213
                },
                {
                  "type": "TSImportEqualsDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 12229,
                    "end": 12231
                  },
                  "moduleReference": {
                    "type": "TSExternalModuleReference",
                    "expression": {
                      "type": "Literal",
                      "value": "use_glo_M1_public",
                      "raw": "\"use_glo_M1_public\"",
                      "start": 12242,
                      "end": 12261
                    },
                    "start": 12234,
                    "end": 12262
                  },
                  "importKind": "value",
                  "start": 12222,
                  "end": 12263
                }
              ],
              "start": 12192,
              "end": 12269
            },
            "kind": "namespace",
            "declare": false,
            "global": false,
            "start": 12179,
            "end": 12269
          }
        ],
        "start": 12127,
        "end": 12272
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 12114,
      "end": 12272
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSModuleDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "m3",
          "optional": false,
          "typeAnnotation": null,
          "start": 12291,
          "end": 12293
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
                "start": 12307,
                "end": 12309
              },
              "moduleReference": {
                "type": "TSExternalModuleReference",
                "expression": {
                  "type": "Literal",
                  "value": "use_glo_M1_public",
                  "raw": "\"use_glo_M1_public\"",
                  "start": 12320,
                  "end": 12339
                },
                "start": 12312,
                "end": 12340
              },
              "importKind": "value",
              "start": 12300,
              "end": 12341
            },
            {
              "type": "TSModuleDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "m4",
                "optional": false,
                "typeAnnotation": null,
                "start": 12356,
                "end": 12358
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
                          "start": 12373,
                          "end": 12374
                        },
                        "init": {
                          "type": "Literal",
                          "value": 10,
                          "raw": "10",
                          "start": 12377,
                          "end": 12379
                        },
                        "definite": false,
                        "start": 12373,
                        "end": 12379
                      }
                    ],
                    "declare": false,
                    "start": 12369,
                    "end": 12380
                  },
                  {
                    "type": "TSImportEqualsDeclaration",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 12396,
                      "end": 12398
                    },
                    "moduleReference": {
                      "type": "TSExternalModuleReference",
                      "expression": {
                        "type": "Literal",
                        "value": "use_glo_M1_public",
                        "raw": "\"use_glo_M1_public\"",
                        "start": 12409,
                        "end": 12428
                      },
                      "start": 12401,
                      "end": 12429
                    },
                    "importKind": "value",
                    "start": 12389,
                    "end": 12430
                  }
                ],
                "start": 12359,
                "end": 12436
              },
              "kind": "namespace",
              "declare": false,
              "global": false,
              "start": 12346,
              "end": 12436
            }
          ],
          "start": 12294,
          "end": 12439
        },
        "kind": "namespace",
        "declare": false,
        "global": false,
        "start": 12281,
        "end": 12439
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 12274,
      "end": 12439
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 12439
}
```
