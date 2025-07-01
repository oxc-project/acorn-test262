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
          "start": 14,
          "end": 16
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
                  "start": 37,
                  "end": 49
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
                          "start": 73,
                          "end": 75
                        },
                        "typeParameters": null,
                        "superClass": null,
                        "superTypeArguments": null,
                        "implements": [],
                        "body": {
                          "type": "ClassBody",
                          "body": [],
                          "start": 76,
                          "end": 87
                        },
                        "abstract": false,
                        "declare": false,
                        "start": 67,
                        "end": 87
                      },
                      "specifiers": [],
                      "source": null,
                      "exportKind": "value",
                      "attributes": [],
                      "start": 60,
                      "end": 87
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
                          "start": 112,
                          "end": 114
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
                                  "start": 142,
                                  "end": 144
                                },
                                "typeArguments": null,
                                "arguments": [],
                                "start": 138,
                                "end": 144
                              },
                              "start": 131,
                              "end": 145
                            }
                          ],
                          "start": 117,
                          "end": 155
                        },
                        "expression": false,
                        "start": 103,
                        "end": 155
                      },
                      "specifiers": [],
                      "source": null,
                      "exportKind": "value",
                      "attributes": [],
                      "start": 96,
                      "end": 155
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
                              "start": 175,
                              "end": 177
                            },
                            "init": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "c1",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 180,
                              "end": 182
                            },
                            "definite": false,
                            "start": 175,
                            "end": 182
                          }
                        ],
                        "declare": false,
                        "start": 171,
                        "end": 183
                      },
                      "specifiers": [],
                      "source": null,
                      "exportKind": "value",
                      "attributes": [],
                      "start": 164,
                      "end": 183
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
                                    "start": 207,
                                    "end": 209
                                  },
                                  "typeArguments": null,
                                  "start": 207,
                                  "end": 209
                                },
                                "start": 205,
                                "end": 209
                              },
                              "start": 203,
                              "end": 209
                            },
                            "init": null,
                            "definite": false,
                            "start": 203,
                            "end": 209
                          }
                        ],
                        "declare": false,
                        "start": 199,
                        "end": 210
                      },
                      "specifiers": [],
                      "source": null,
                      "exportKind": "value",
                      "attributes": [],
                      "start": 192,
                      "end": 210
                    }
                  ],
                  "start": 50,
                  "end": 216
                },
                "kind": "module",
                "declare": false,
                "global": false,
                "start": 30,
                "end": 216
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 23,
              "end": 216
            },
            {
              "type": "TSModuleDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "m1_M2_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 229,
                "end": 242
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
                        "start": 266,
                        "end": 268
                      },
                      "typeParameters": null,
                      "superClass": null,
                      "superTypeArguments": null,
                      "implements": [],
                      "body": {
                        "type": "ClassBody",
                        "body": [],
                        "start": 269,
                        "end": 280
                      },
                      "abstract": false,
                      "declare": false,
                      "start": 260,
                      "end": 280
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 253,
                    "end": 280
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
                        "start": 305,
                        "end": 307
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
                                "start": 335,
                                "end": 337
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 331,
                              "end": 337
                            },
                            "start": 324,
                            "end": 338
                          }
                        ],
                        "start": 310,
                        "end": 348
                      },
                      "expression": false,
                      "start": 296,
                      "end": 348
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 289,
                    "end": 348
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
                            "start": 368,
                            "end": 370
                          },
                          "init": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "c1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 373,
                            "end": 375
                          },
                          "definite": false,
                          "start": 368,
                          "end": 375
                        }
                      ],
                      "declare": false,
                      "start": 364,
                      "end": 376
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 357,
                    "end": 376
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
                                  "start": 400,
                                  "end": 402
                                },
                                "typeArguments": null,
                                "start": 400,
                                "end": 402
                              },
                              "start": 398,
                              "end": 402
                            },
                            "start": 396,
                            "end": 402
                          },
                          "init": null,
                          "definite": false,
                          "start": 396,
                          "end": 402
                        }
                      ],
                      "declare": false,
                      "start": 392,
                      "end": 403
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 385,
                    "end": 403
                  }
                ],
                "start": 243,
                "end": 409
              },
              "kind": "module",
              "declare": false,
              "global": false,
              "start": 222,
              "end": 409
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "TSModuleDeclaration",
                "id": {
                  "type": "Literal",
                  "value": "m1_M3_public",
                  "raw": "\"m1_M3_public\"",
                  "start": 437,
                  "end": 451
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
                          "start": 478,
                          "end": 480
                        },
                        "generator": false,
                        "async": false,
                        "declare": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": null,
                        "expression": false,
                        "start": 469,
                        "end": 483
                      },
                      "specifiers": [],
                      "source": null,
                      "exportKind": "value",
                      "attributes": [],
                      "start": 462,
                      "end": 483
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
                          "start": 505,
                          "end": 507
                        },
                        "typeParameters": null,
                        "superClass": null,
                        "superTypeArguments": null,
                        "implements": [],
                        "body": {
                          "type": "ClassBody",
                          "body": [],
                          "start": 508,
                          "end": 519
                        },
                        "abstract": false,
                        "declare": false,
                        "start": 499,
                        "end": 519
                      },
                      "specifiers": [],
                      "source": null,
                      "exportKind": "value",
                      "attributes": [],
                      "start": 492,
                      "end": 519
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
                                            "start": 553,
                                            "end": 555
                                          },
                                          "typeArguments": null,
                                          "start": 553,
                                          "end": 555
                                        },
                                        "start": 551,
                                        "end": 555
                                      },
                                      "start": 545,
                                      "end": 556
                                    }
                                  ],
                                  "start": 543,
                                  "end": 558
                                },
                                "start": 541,
                                "end": 558
                              },
                              "start": 539,
                              "end": 558
                            },
                            "init": null,
                            "definite": false,
                            "start": 539,
                            "end": 558
                          }
                        ],
                        "declare": false,
                        "start": 535,
                        "end": 559
                      },
                      "specifiers": [],
                      "source": null,
                      "exportKind": "value",
                      "attributes": [],
                      "start": 528,
                      "end": 559
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
                                    "start": 583,
                                    "end": 585
                                  },
                                  "typeArguments": null,
                                  "start": 583,
                                  "end": 585
                                },
                                "start": 581,
                                "end": 585
                              },
                              "start": 579,
                              "end": 585
                            },
                            "init": null,
                            "definite": false,
                            "start": 579,
                            "end": 585
                          }
                        ],
                        "declare": false,
                        "start": 575,
                        "end": 586
                      },
                      "specifiers": [],
                      "source": null,
                      "exportKind": "value",
                      "attributes": [],
                      "start": 568,
                      "end": 586
                    }
                  ],
                  "start": 452,
                  "end": 592
                },
                "kind": "module",
                "declare": true,
                "global": false,
                "start": 422,
                "end": 592
              },
              "specifiers": [],
              "source": null,
              "exportKind": "type",
              "attributes": [],
              "start": 415,
              "end": 592
            },
            {
              "type": "TSModuleDeclaration",
              "id": {
                "type": "Literal",
                "value": "m1_M4_private",
                "raw": "\"m1_M4_private\"",
                "start": 613,
                "end": 628
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
                        "start": 655,
                        "end": 657
                      },
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": null,
                      "expression": false,
                      "start": 646,
                      "end": 660
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 639,
                    "end": 660
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
                        "start": 682,
                        "end": 684
                      },
                      "typeParameters": null,
                      "superClass": null,
                      "superTypeArguments": null,
                      "implements": [],
                      "body": {
                        "type": "ClassBody",
                        "body": [],
                        "start": 685,
                        "end": 696
                      },
                      "abstract": false,
                      "declare": false,
                      "start": 676,
                      "end": 696
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 669,
                    "end": 696
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
                                          "start": 730,
                                          "end": 732
                                        },
                                        "typeArguments": null,
                                        "start": 730,
                                        "end": 732
                                      },
                                      "start": 728,
                                      "end": 732
                                    },
                                    "start": 722,
                                    "end": 733
                                  }
                                ],
                                "start": 720,
                                "end": 735
                              },
                              "start": 718,
                              "end": 735
                            },
                            "start": 716,
                            "end": 735
                          },
                          "init": null,
                          "definite": false,
                          "start": 716,
                          "end": 735
                        }
                      ],
                      "declare": false,
                      "start": 712,
                      "end": 736
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 705,
                    "end": 736
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
                                  "start": 760,
                                  "end": 762
                                },
                                "typeArguments": null,
                                "start": 760,
                                "end": 762
                              },
                              "start": 758,
                              "end": 762
                            },
                            "start": 756,
                            "end": 762
                          },
                          "init": null,
                          "definite": false,
                          "start": 756,
                          "end": 762
                        }
                      ],
                      "declare": false,
                      "start": 752,
                      "end": 763
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 745,
                    "end": 763
                  }
                ],
                "start": 629,
                "end": 769
              },
              "kind": "module",
              "declare": true,
              "global": false,
              "start": 598,
              "end": 769
            },
            {
              "type": "TSImportEqualsDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "m1_im1_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 782,
                "end": 796
              },
              "moduleReference": {
                "type": "Identifier",
                "decorators": [],
                "name": "m1_M1_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 799,
                "end": 811
              },
              "importKind": "value",
              "start": 775,
              "end": 812
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
                      "start": 828,
                      "end": 852
                    },
                    "init": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "m1_im1_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 855,
                        "end": 869
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 870,
                        "end": 872
                      },
                      "optional": false,
                      "computed": false,
                      "start": 855,
                      "end": 872
                    },
                    "definite": false,
                    "start": 828,
                    "end": 872
                  }
                ],
                "declare": false,
                "start": 824,
                "end": 873
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 817,
              "end": 873
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
                      "start": 889,
                      "end": 913
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
                          "start": 920,
                          "end": 934
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 935,
                          "end": 937
                        },
                        "optional": false,
                        "computed": false,
                        "start": 920,
                        "end": 937
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 916,
                      "end": 939
                    },
                    "definite": false,
                    "start": 889,
                    "end": 939
                  }
                ],
                "declare": false,
                "start": 885,
                "end": 940
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 878,
              "end": 940
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
                      "start": 956,
                      "end": 980
                    },
                    "init": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "m1_im1_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 983,
                        "end": 997
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "f1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 998,
                        "end": 1000
                      },
                      "optional": false,
                      "computed": false,
                      "start": 983,
                      "end": 1000
                    },
                    "definite": false,
                    "start": 956,
                    "end": 1000
                  }
                ],
                "declare": false,
                "start": 952,
                "end": 1001
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 945,
              "end": 1001
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
                      "start": 1017,
                      "end": 1041
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
                          "start": 1044,
                          "end": 1058
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "f1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1059,
                          "end": 1061
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1044,
                        "end": 1061
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 1044,
                      "end": 1063
                    },
                    "definite": false,
                    "start": 1017,
                    "end": 1063
                  }
                ],
                "declare": false,
                "start": 1013,
                "end": 1064
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 1006,
              "end": 1064
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
                    "start": 1073,
                    "end": 1098
                  },
                  "init": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m1_im1_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1101,
                      "end": 1115
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1116,
                      "end": 1118
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1101,
                    "end": 1118
                  },
                  "definite": false,
                  "start": 1073,
                  "end": 1118
                }
              ],
              "declare": false,
              "start": 1069,
              "end": 1119
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
                    "start": 1128,
                    "end": 1153
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
                        "start": 1160,
                        "end": 1174
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1175,
                        "end": 1177
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1160,
                      "end": 1177
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 1156,
                    "end": 1179
                  },
                  "definite": false,
                  "start": 1128,
                  "end": 1179
                }
              ],
              "declare": false,
              "start": 1124,
              "end": 1180
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
                    "start": 1189,
                    "end": 1214
                  },
                  "init": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m1_im1_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1217,
                      "end": 1231
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1232,
                      "end": 1234
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1217,
                    "end": 1234
                  },
                  "definite": false,
                  "start": 1189,
                  "end": 1234
                }
              ],
              "declare": false,
              "start": 1185,
              "end": 1235
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
                    "start": 1244,
                    "end": 1269
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
                        "start": 1272,
                        "end": 1286
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "f1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1287,
                        "end": 1289
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1272,
                      "end": 1289
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 1272,
                    "end": 1291
                  },
                  "definite": false,
                  "start": 1244,
                  "end": 1291
                }
              ],
              "declare": false,
              "start": 1240,
              "end": 1292
            },
            {
              "type": "TSImportEqualsDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "m1_im2_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 1306,
                "end": 1320
              },
              "moduleReference": {
                "type": "Identifier",
                "decorators": [],
                "name": "m1_M2_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 1323,
                "end": 1336
              },
              "importKind": "value",
              "start": 1299,
              "end": 1337
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
                      "start": 1353,
                      "end": 1377
                    },
                    "init": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "m1_im2_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1380,
                        "end": 1394
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1395,
                        "end": 1397
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1380,
                      "end": 1397
                    },
                    "definite": false,
                    "start": 1353,
                    "end": 1397
                  }
                ],
                "declare": false,
                "start": 1349,
                "end": 1398
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 1342,
              "end": 1398
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
                      "start": 1414,
                      "end": 1438
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
                          "start": 1445,
                          "end": 1459
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1460,
                          "end": 1462
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1445,
                        "end": 1462
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 1441,
                      "end": 1464
                    },
                    "definite": false,
                    "start": 1414,
                    "end": 1464
                  }
                ],
                "declare": false,
                "start": 1410,
                "end": 1465
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 1403,
              "end": 1465
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
                      "start": 1481,
                      "end": 1505
                    },
                    "init": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "m1_im2_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1508,
                        "end": 1522
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "f1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1523,
                        "end": 1525
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1508,
                      "end": 1525
                    },
                    "definite": false,
                    "start": 1481,
                    "end": 1525
                  }
                ],
                "declare": false,
                "start": 1477,
                "end": 1526
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 1470,
              "end": 1526
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
                      "start": 1542,
                      "end": 1566
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
                          "start": 1569,
                          "end": 1583
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "f1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1584,
                          "end": 1586
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1569,
                        "end": 1586
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 1569,
                      "end": 1588
                    },
                    "definite": false,
                    "start": 1542,
                    "end": 1588
                  }
                ],
                "declare": false,
                "start": 1538,
                "end": 1589
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 1531,
              "end": 1589
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
                    "start": 1598,
                    "end": 1623
                  },
                  "init": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m1_im2_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1626,
                      "end": 1640
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1641,
                      "end": 1643
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1626,
                    "end": 1643
                  },
                  "definite": false,
                  "start": 1598,
                  "end": 1643
                }
              ],
              "declare": false,
              "start": 1594,
              "end": 1644
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
                    "start": 1653,
                    "end": 1678
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
                        "start": 1685,
                        "end": 1699
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1700,
                        "end": 1702
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1685,
                      "end": 1702
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 1681,
                    "end": 1704
                  },
                  "definite": false,
                  "start": 1653,
                  "end": 1704
                }
              ],
              "declare": false,
              "start": 1649,
              "end": 1705
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
                    "start": 1714,
                    "end": 1739
                  },
                  "init": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m1_im2_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1742,
                      "end": 1756
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1757,
                      "end": 1759
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1742,
                    "end": 1759
                  },
                  "definite": false,
                  "start": 1714,
                  "end": 1759
                }
              ],
              "declare": false,
              "start": 1710,
              "end": 1760
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
                    "start": 1769,
                    "end": 1794
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
                        "start": 1797,
                        "end": 1811
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "f1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1812,
                        "end": 1814
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1797,
                      "end": 1814
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 1797,
                    "end": 1816
                  },
                  "definite": false,
                  "start": 1769,
                  "end": 1816
                }
              ],
              "declare": false,
              "start": 1765,
              "end": 1817
            },
            {
              "type": "TSImportEqualsDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "m1_im3_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 1830,
                "end": 1844
              },
              "moduleReference": {
                "type": "TSExternalModuleReference",
                "expression": {
                  "type": "Literal",
                  "value": "m1_M3_public",
                  "raw": "\"m1_M3_public\"",
                  "start": 1855,
                  "end": 1869
                },
                "start": 1847,
                "end": 1870
              },
              "importKind": "value",
              "start": 1823,
              "end": 1871
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
                      "start": 1887,
                      "end": 1911
                    },
                    "init": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "m1_im3_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1914,
                        "end": 1928
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1929,
                        "end": 1931
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1914,
                      "end": 1931
                    },
                    "definite": false,
                    "start": 1887,
                    "end": 1931
                  }
                ],
                "declare": false,
                "start": 1883,
                "end": 1932
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 1876,
              "end": 1932
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
                      "start": 1948,
                      "end": 1972
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
                          "start": 1979,
                          "end": 1993
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1994,
                          "end": 1996
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1979,
                        "end": 1996
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 1975,
                      "end": 1998
                    },
                    "definite": false,
                    "start": 1948,
                    "end": 1998
                  }
                ],
                "declare": false,
                "start": 1944,
                "end": 1999
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 1937,
              "end": 1999
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
                      "start": 2015,
                      "end": 2039
                    },
                    "init": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "m1_im3_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2042,
                        "end": 2056
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "f1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2057,
                        "end": 2059
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2042,
                      "end": 2059
                    },
                    "definite": false,
                    "start": 2015,
                    "end": 2059
                  }
                ],
                "declare": false,
                "start": 2011,
                "end": 2060
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 2004,
              "end": 2060
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
                      "start": 2076,
                      "end": 2100
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
                          "start": 2103,
                          "end": 2117
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "f1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2118,
                          "end": 2120
                        },
                        "optional": false,
                        "computed": false,
                        "start": 2103,
                        "end": 2120
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 2103,
                      "end": 2122
                    },
                    "definite": false,
                    "start": 2076,
                    "end": 2122
                  }
                ],
                "declare": false,
                "start": 2072,
                "end": 2123
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 2065,
              "end": 2123
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
                    "start": 2132,
                    "end": 2157
                  },
                  "init": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m1_im3_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2160,
                      "end": 2174
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2175,
                      "end": 2177
                    },
                    "optional": false,
                    "computed": false,
                    "start": 2160,
                    "end": 2177
                  },
                  "definite": false,
                  "start": 2132,
                  "end": 2177
                }
              ],
              "declare": false,
              "start": 2128,
              "end": 2178
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
                    "start": 2187,
                    "end": 2212
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
                        "start": 2219,
                        "end": 2233
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2234,
                        "end": 2236
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2219,
                      "end": 2236
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 2215,
                    "end": 2238
                  },
                  "definite": false,
                  "start": 2187,
                  "end": 2238
                }
              ],
              "declare": false,
              "start": 2183,
              "end": 2239
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
                    "start": 2248,
                    "end": 2273
                  },
                  "init": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m1_im3_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2276,
                      "end": 2290
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2291,
                      "end": 2293
                    },
                    "optional": false,
                    "computed": false,
                    "start": 2276,
                    "end": 2293
                  },
                  "definite": false,
                  "start": 2248,
                  "end": 2293
                }
              ],
              "declare": false,
              "start": 2244,
              "end": 2294
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
                    "start": 2303,
                    "end": 2328
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
                        "start": 2331,
                        "end": 2345
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "f1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2346,
                        "end": 2348
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2331,
                      "end": 2348
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 2331,
                    "end": 2350
                  },
                  "definite": false,
                  "start": 2303,
                  "end": 2350
                }
              ],
              "declare": false,
              "start": 2299,
              "end": 2351
            },
            {
              "type": "TSImportEqualsDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "m1_im4_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 2364,
                "end": 2378
              },
              "moduleReference": {
                "type": "TSExternalModuleReference",
                "expression": {
                  "type": "Literal",
                  "value": "m1_M4_private",
                  "raw": "\"m1_M4_private\"",
                  "start": 2389,
                  "end": 2404
                },
                "start": 2381,
                "end": 2405
              },
              "importKind": "value",
              "start": 2357,
              "end": 2406
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
                      "start": 2422,
                      "end": 2446
                    },
                    "init": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "m1_im4_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2449,
                        "end": 2463
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2464,
                        "end": 2466
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2449,
                      "end": 2466
                    },
                    "definite": false,
                    "start": 2422,
                    "end": 2466
                  }
                ],
                "declare": false,
                "start": 2418,
                "end": 2467
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 2411,
              "end": 2467
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
                      "start": 2483,
                      "end": 2507
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
                          "start": 2514,
                          "end": 2528
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2529,
                          "end": 2531
                        },
                        "optional": false,
                        "computed": false,
                        "start": 2514,
                        "end": 2531
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 2510,
                      "end": 2533
                    },
                    "definite": false,
                    "start": 2483,
                    "end": 2533
                  }
                ],
                "declare": false,
                "start": 2479,
                "end": 2534
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 2472,
              "end": 2534
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
                      "start": 2550,
                      "end": 2574
                    },
                    "init": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "m1_im4_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2577,
                        "end": 2591
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "f1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2592,
                        "end": 2594
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2577,
                      "end": 2594
                    },
                    "definite": false,
                    "start": 2550,
                    "end": 2594
                  }
                ],
                "declare": false,
                "start": 2546,
                "end": 2595
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 2539,
              "end": 2595
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
                      "start": 2611,
                      "end": 2635
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
                          "start": 2638,
                          "end": 2652
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "f1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2653,
                          "end": 2655
                        },
                        "optional": false,
                        "computed": false,
                        "start": 2638,
                        "end": 2655
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 2638,
                      "end": 2657
                    },
                    "definite": false,
                    "start": 2611,
                    "end": 2657
                  }
                ],
                "declare": false,
                "start": 2607,
                "end": 2658
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 2600,
              "end": 2658
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
                    "start": 2667,
                    "end": 2692
                  },
                  "init": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m1_im4_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2695,
                      "end": 2709
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2710,
                      "end": 2712
                    },
                    "optional": false,
                    "computed": false,
                    "start": 2695,
                    "end": 2712
                  },
                  "definite": false,
                  "start": 2667,
                  "end": 2712
                }
              ],
              "declare": false,
              "start": 2663,
              "end": 2713
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
                    "start": 2722,
                    "end": 2747
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
                        "start": 2754,
                        "end": 2768
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2769,
                        "end": 2771
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2754,
                      "end": 2771
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 2750,
                    "end": 2773
                  },
                  "definite": false,
                  "start": 2722,
                  "end": 2773
                }
              ],
              "declare": false,
              "start": 2718,
              "end": 2774
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
                    "start": 2783,
                    "end": 2808
                  },
                  "init": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m1_im4_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2811,
                      "end": 2825
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2826,
                      "end": 2828
                    },
                    "optional": false,
                    "computed": false,
                    "start": 2811,
                    "end": 2828
                  },
                  "definite": false,
                  "start": 2783,
                  "end": 2828
                }
              ],
              "declare": false,
              "start": 2779,
              "end": 2829
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
                    "start": 2838,
                    "end": 2863
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
                        "start": 2866,
                        "end": 2880
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "f1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2881,
                        "end": 2883
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2866,
                      "end": 2883
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 2866,
                    "end": 2885
                  },
                  "definite": false,
                  "start": 2838,
                  "end": 2885
                }
              ],
              "declare": false,
              "start": 2834,
              "end": 2886
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
                  "start": 2906,
                  "end": 2919
                },
                "moduleReference": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m1_M1_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2922,
                  "end": 2934
                },
                "importKind": "value",
                "start": 2899,
                "end": 2935
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 2892,
              "end": 2935
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
                  "start": 2954,
                  "end": 2967
                },
                "moduleReference": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m1_M2_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2970,
                  "end": 2983
                },
                "importKind": "value",
                "start": 2947,
                "end": 2984
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 2940,
              "end": 2984
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
                  "start": 3003,
                  "end": 3016
                },
                "moduleReference": {
                  "type": "TSExternalModuleReference",
                  "expression": {
                    "type": "Literal",
                    "value": "m1_M3_public",
                    "raw": "\"m1_M3_public\"",
                    "start": 3027,
                    "end": 3041
                  },
                  "start": 3019,
                  "end": 3042
                },
                "importKind": "value",
                "start": 2996,
                "end": 3043
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 2989,
              "end": 3043
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
                  "start": 3062,
                  "end": 3075
                },
                "moduleReference": {
                  "type": "TSExternalModuleReference",
                  "expression": {
                    "type": "Literal",
                    "value": "m1_M4_private",
                    "raw": "\"m1_M4_private\"",
                    "start": 3086,
                    "end": 3101
                  },
                  "start": 3078,
                  "end": 3102
                },
                "importKind": "value",
                "start": 3055,
                "end": 3103
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 3048,
              "end": 3103
            }
          ],
          "start": 17,
          "end": 3105
        },
        "kind": "module",
        "declare": false,
        "global": false,
        "start": 7,
        "end": 3105
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 3105
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m2",
        "optional": false,
        "typeAnnotation": null,
        "start": 3114,
        "end": 3116
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
                "start": 3137,
                "end": 3149
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
                        "start": 3173,
                        "end": 3175
                      },
                      "typeParameters": null,
                      "superClass": null,
                      "superTypeArguments": null,
                      "implements": [],
                      "body": {
                        "type": "ClassBody",
                        "body": [],
                        "start": 3176,
                        "end": 3187
                      },
                      "abstract": false,
                      "declare": false,
                      "start": 3167,
                      "end": 3187
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 3160,
                    "end": 3187
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
                        "start": 3212,
                        "end": 3214
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
                                "start": 3242,
                                "end": 3244
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 3238,
                              "end": 3244
                            },
                            "start": 3231,
                            "end": 3245
                          }
                        ],
                        "start": 3217,
                        "end": 3255
                      },
                      "expression": false,
                      "start": 3203,
                      "end": 3255
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 3196,
                    "end": 3255
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
                            "start": 3275,
                            "end": 3277
                          },
                          "init": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "c1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3280,
                            "end": 3282
                          },
                          "definite": false,
                          "start": 3275,
                          "end": 3282
                        }
                      ],
                      "declare": false,
                      "start": 3271,
                      "end": 3283
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 3264,
                    "end": 3283
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
                                  "start": 3307,
                                  "end": 3309
                                },
                                "typeArguments": null,
                                "start": 3307,
                                "end": 3309
                              },
                              "start": 3305,
                              "end": 3309
                            },
                            "start": 3303,
                            "end": 3309
                          },
                          "init": null,
                          "definite": false,
                          "start": 3303,
                          "end": 3309
                        }
                      ],
                      "declare": false,
                      "start": 3299,
                      "end": 3310
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 3292,
                    "end": 3310
                  }
                ],
                "start": 3150,
                "end": 3316
              },
              "kind": "module",
              "declare": false,
              "global": false,
              "start": 3130,
              "end": 3316
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 3123,
            "end": 3316
          },
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m2_M2_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 3329,
              "end": 3342
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
                      "start": 3366,
                      "end": 3368
                    },
                    "typeParameters": null,
                    "superClass": null,
                    "superTypeArguments": null,
                    "implements": [],
                    "body": {
                      "type": "ClassBody",
                      "body": [],
                      "start": 3369,
                      "end": 3380
                    },
                    "abstract": false,
                    "declare": false,
                    "start": 3360,
                    "end": 3380
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": [],
                  "start": 3353,
                  "end": 3380
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
                      "start": 3405,
                      "end": 3407
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
                              "start": 3435,
                              "end": 3437
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "start": 3431,
                            "end": 3437
                          },
                          "start": 3424,
                          "end": 3438
                        }
                      ],
                      "start": 3410,
                      "end": 3448
                    },
                    "expression": false,
                    "start": 3396,
                    "end": 3448
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": [],
                  "start": 3389,
                  "end": 3448
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
                          "start": 3468,
                          "end": 3470
                        },
                        "init": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3473,
                          "end": 3475
                        },
                        "definite": false,
                        "start": 3468,
                        "end": 3475
                      }
                    ],
                    "declare": false,
                    "start": 3464,
                    "end": 3476
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": [],
                  "start": 3457,
                  "end": 3476
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
                                "start": 3500,
                                "end": 3502
                              },
                              "typeArguments": null,
                              "start": 3500,
                              "end": 3502
                            },
                            "start": 3498,
                            "end": 3502
                          },
                          "start": 3496,
                          "end": 3502
                        },
                        "init": null,
                        "definite": false,
                        "start": 3496,
                        "end": 3502
                      }
                    ],
                    "declare": false,
                    "start": 3492,
                    "end": 3503
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": [],
                  "start": 3485,
                  "end": 3503
                }
              ],
              "start": 3343,
              "end": 3509
            },
            "kind": "module",
            "declare": false,
            "global": false,
            "start": 3322,
            "end": 3509
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSModuleDeclaration",
              "id": {
                "type": "Literal",
                "value": "m2_M3_public",
                "raw": "\"m2_M3_public\"",
                "start": 3537,
                "end": 3551
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
                        "start": 3578,
                        "end": 3580
                      },
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": null,
                      "expression": false,
                      "start": 3569,
                      "end": 3583
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 3562,
                    "end": 3583
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
                        "start": 3605,
                        "end": 3607
                      },
                      "typeParameters": null,
                      "superClass": null,
                      "superTypeArguments": null,
                      "implements": [],
                      "body": {
                        "type": "ClassBody",
                        "body": [],
                        "start": 3608,
                        "end": 3619
                      },
                      "abstract": false,
                      "declare": false,
                      "start": 3599,
                      "end": 3619
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 3592,
                    "end": 3619
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
                                          "start": 3653,
                                          "end": 3655
                                        },
                                        "typeArguments": null,
                                        "start": 3653,
                                        "end": 3655
                                      },
                                      "start": 3651,
                                      "end": 3655
                                    },
                                    "start": 3645,
                                    "end": 3656
                                  }
                                ],
                                "start": 3643,
                                "end": 3658
                              },
                              "start": 3641,
                              "end": 3658
                            },
                            "start": 3639,
                            "end": 3658
                          },
                          "init": null,
                          "definite": false,
                          "start": 3639,
                          "end": 3658
                        }
                      ],
                      "declare": false,
                      "start": 3635,
                      "end": 3659
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 3628,
                    "end": 3659
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
                                  "start": 3683,
                                  "end": 3685
                                },
                                "typeArguments": null,
                                "start": 3683,
                                "end": 3685
                              },
                              "start": 3681,
                              "end": 3685
                            },
                            "start": 3679,
                            "end": 3685
                          },
                          "init": null,
                          "definite": false,
                          "start": 3679,
                          "end": 3685
                        }
                      ],
                      "declare": false,
                      "start": 3675,
                      "end": 3686
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 3668,
                    "end": 3686
                  }
                ],
                "start": 3552,
                "end": 3692
              },
              "kind": "module",
              "declare": true,
              "global": false,
              "start": 3522,
              "end": 3692
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 3515,
            "end": 3692
          },
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Literal",
              "value": "m2_M4_private",
              "raw": "\"m2_M4_private\"",
              "start": 3713,
              "end": 3728
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
                      "start": 3755,
                      "end": 3757
                    },
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": null,
                    "expression": false,
                    "start": 3746,
                    "end": 3760
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": [],
                  "start": 3739,
                  "end": 3760
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
                      "start": 3782,
                      "end": 3784
                    },
                    "typeParameters": null,
                    "superClass": null,
                    "superTypeArguments": null,
                    "implements": [],
                    "body": {
                      "type": "ClassBody",
                      "body": [],
                      "start": 3785,
                      "end": 3796
                    },
                    "abstract": false,
                    "declare": false,
                    "start": 3776,
                    "end": 3796
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": [],
                  "start": 3769,
                  "end": 3796
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
                                        "start": 3830,
                                        "end": 3832
                                      },
                                      "typeArguments": null,
                                      "start": 3830,
                                      "end": 3832
                                    },
                                    "start": 3828,
                                    "end": 3832
                                  },
                                  "start": 3822,
                                  "end": 3833
                                }
                              ],
                              "start": 3820,
                              "end": 3835
                            },
                            "start": 3818,
                            "end": 3835
                          },
                          "start": 3816,
                          "end": 3835
                        },
                        "init": null,
                        "definite": false,
                        "start": 3816,
                        "end": 3835
                      }
                    ],
                    "declare": false,
                    "start": 3812,
                    "end": 3836
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": [],
                  "start": 3805,
                  "end": 3836
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
                                "start": 3860,
                                "end": 3862
                              },
                              "typeArguments": null,
                              "start": 3860,
                              "end": 3862
                            },
                            "start": 3858,
                            "end": 3862
                          },
                          "start": 3856,
                          "end": 3862
                        },
                        "init": null,
                        "definite": false,
                        "start": 3856,
                        "end": 3862
                      }
                    ],
                    "declare": false,
                    "start": 3852,
                    "end": 3863
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": [],
                  "start": 3845,
                  "end": 3863
                }
              ],
              "start": 3729,
              "end": 3869
            },
            "kind": "module",
            "declare": true,
            "global": false,
            "start": 3698,
            "end": 3869
          },
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m1_im1_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 3882,
              "end": 3896
            },
            "moduleReference": {
              "type": "Identifier",
              "decorators": [],
              "name": "m2_M1_public",
              "optional": false,
              "typeAnnotation": null,
              "start": 3899,
              "end": 3911
            },
            "importKind": "value",
            "start": 3875,
            "end": 3912
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
                    "start": 3928,
                    "end": 3952
                  },
                  "init": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m1_im1_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3955,
                      "end": 3969
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3970,
                      "end": 3972
                    },
                    "optional": false,
                    "computed": false,
                    "start": 3955,
                    "end": 3972
                  },
                  "definite": false,
                  "start": 3928,
                  "end": 3972
                }
              ],
              "declare": false,
              "start": 3924,
              "end": 3973
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 3917,
            "end": 3973
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
                    "start": 3989,
                    "end": 4013
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
                        "start": 4020,
                        "end": 4034
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4035,
                        "end": 4037
                      },
                      "optional": false,
                      "computed": false,
                      "start": 4020,
                      "end": 4037
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 4016,
                    "end": 4039
                  },
                  "definite": false,
                  "start": 3989,
                  "end": 4039
                }
              ],
              "declare": false,
              "start": 3985,
              "end": 4040
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 3978,
            "end": 4040
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
                    "start": 4056,
                    "end": 4080
                  },
                  "init": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m1_im1_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4083,
                      "end": 4097
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4098,
                      "end": 4100
                    },
                    "optional": false,
                    "computed": false,
                    "start": 4083,
                    "end": 4100
                  },
                  "definite": false,
                  "start": 4056,
                  "end": 4100
                }
              ],
              "declare": false,
              "start": 4052,
              "end": 4101
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 4045,
            "end": 4101
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
                    "start": 4117,
                    "end": 4141
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
                        "start": 4144,
                        "end": 4158
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "f1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4159,
                        "end": 4161
                      },
                      "optional": false,
                      "computed": false,
                      "start": 4144,
                      "end": 4161
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 4144,
                    "end": 4163
                  },
                  "definite": false,
                  "start": 4117,
                  "end": 4163
                }
              ],
              "declare": false,
              "start": 4113,
              "end": 4164
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 4106,
            "end": 4164
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
                  "start": 4173,
                  "end": 4198
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m1_im1_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4201,
                    "end": 4215
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4216,
                    "end": 4218
                  },
                  "optional": false,
                  "computed": false,
                  "start": 4201,
                  "end": 4218
                },
                "definite": false,
                "start": 4173,
                "end": 4218
              }
            ],
            "declare": false,
            "start": 4169,
            "end": 4219
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
                  "start": 4228,
                  "end": 4253
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
                      "start": 4260,
                      "end": 4274
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4275,
                      "end": 4277
                    },
                    "optional": false,
                    "computed": false,
                    "start": 4260,
                    "end": 4277
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "start": 4256,
                  "end": 4279
                },
                "definite": false,
                "start": 4228,
                "end": 4279
              }
            ],
            "declare": false,
            "start": 4224,
            "end": 4280
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
                  "start": 4289,
                  "end": 4314
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m1_im1_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4317,
                    "end": 4331
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4332,
                    "end": 4334
                  },
                  "optional": false,
                  "computed": false,
                  "start": 4317,
                  "end": 4334
                },
                "definite": false,
                "start": 4289,
                "end": 4334
              }
            ],
            "declare": false,
            "start": 4285,
            "end": 4335
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
                  "start": 4344,
                  "end": 4369
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
                      "start": 4372,
                      "end": 4386
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4387,
                      "end": 4389
                    },
                    "optional": false,
                    "computed": false,
                    "start": 4372,
                    "end": 4389
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 4372,
                  "end": 4391
                },
                "definite": false,
                "start": 4344,
                "end": 4391
              }
            ],
            "declare": false,
            "start": 4340,
            "end": 4392
          },
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m1_im2_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 4406,
              "end": 4420
            },
            "moduleReference": {
              "type": "Identifier",
              "decorators": [],
              "name": "m2_M2_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 4423,
              "end": 4436
            },
            "importKind": "value",
            "start": 4399,
            "end": 4437
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
                    "start": 4453,
                    "end": 4477
                  },
                  "init": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m1_im2_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4480,
                      "end": 4494
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4495,
                      "end": 4497
                    },
                    "optional": false,
                    "computed": false,
                    "start": 4480,
                    "end": 4497
                  },
                  "definite": false,
                  "start": 4453,
                  "end": 4497
                }
              ],
              "declare": false,
              "start": 4449,
              "end": 4498
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 4442,
            "end": 4498
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
                    "start": 4514,
                    "end": 4538
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
                        "start": 4545,
                        "end": 4559
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4560,
                        "end": 4562
                      },
                      "optional": false,
                      "computed": false,
                      "start": 4545,
                      "end": 4562
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 4541,
                    "end": 4564
                  },
                  "definite": false,
                  "start": 4514,
                  "end": 4564
                }
              ],
              "declare": false,
              "start": 4510,
              "end": 4565
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 4503,
            "end": 4565
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
                    "start": 4581,
                    "end": 4605
                  },
                  "init": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m1_im2_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4608,
                      "end": 4622
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4623,
                      "end": 4625
                    },
                    "optional": false,
                    "computed": false,
                    "start": 4608,
                    "end": 4625
                  },
                  "definite": false,
                  "start": 4581,
                  "end": 4625
                }
              ],
              "declare": false,
              "start": 4577,
              "end": 4626
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 4570,
            "end": 4626
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
                    "start": 4642,
                    "end": 4666
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
                        "start": 4669,
                        "end": 4683
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "f1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4684,
                        "end": 4686
                      },
                      "optional": false,
                      "computed": false,
                      "start": 4669,
                      "end": 4686
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 4669,
                    "end": 4688
                  },
                  "definite": false,
                  "start": 4642,
                  "end": 4688
                }
              ],
              "declare": false,
              "start": 4638,
              "end": 4689
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 4631,
            "end": 4689
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
                  "start": 4698,
                  "end": 4723
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m1_im2_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4726,
                    "end": 4740
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4741,
                    "end": 4743
                  },
                  "optional": false,
                  "computed": false,
                  "start": 4726,
                  "end": 4743
                },
                "definite": false,
                "start": 4698,
                "end": 4743
              }
            ],
            "declare": false,
            "start": 4694,
            "end": 4744
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
                  "start": 4753,
                  "end": 4778
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
                      "start": 4785,
                      "end": 4799
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4800,
                      "end": 4802
                    },
                    "optional": false,
                    "computed": false,
                    "start": 4785,
                    "end": 4802
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "start": 4781,
                  "end": 4804
                },
                "definite": false,
                "start": 4753,
                "end": 4804
              }
            ],
            "declare": false,
            "start": 4749,
            "end": 4805
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
                  "start": 4814,
                  "end": 4839
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m1_im2_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4842,
                    "end": 4856
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4857,
                    "end": 4859
                  },
                  "optional": false,
                  "computed": false,
                  "start": 4842,
                  "end": 4859
                },
                "definite": false,
                "start": 4814,
                "end": 4859
              }
            ],
            "declare": false,
            "start": 4810,
            "end": 4860
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
                  "start": 4869,
                  "end": 4894
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
                      "start": 4897,
                      "end": 4911
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4912,
                      "end": 4914
                    },
                    "optional": false,
                    "computed": false,
                    "start": 4897,
                    "end": 4914
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 4897,
                  "end": 4916
                },
                "definite": false,
                "start": 4869,
                "end": 4916
              }
            ],
            "declare": false,
            "start": 4865,
            "end": 4917
          },
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m1_im3_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 4930,
              "end": 4944
            },
            "moduleReference": {
              "type": "TSExternalModuleReference",
              "expression": {
                "type": "Literal",
                "value": "m2_M3_public",
                "raw": "\"m2_M3_public\"",
                "start": 4955,
                "end": 4969
              },
              "start": 4947,
              "end": 4970
            },
            "importKind": "value",
            "start": 4923,
            "end": 4971
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
                    "start": 4987,
                    "end": 5011
                  },
                  "init": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m1_im3_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5014,
                      "end": 5028
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5029,
                      "end": 5031
                    },
                    "optional": false,
                    "computed": false,
                    "start": 5014,
                    "end": 5031
                  },
                  "definite": false,
                  "start": 4987,
                  "end": 5031
                }
              ],
              "declare": false,
              "start": 4983,
              "end": 5032
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 4976,
            "end": 5032
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
                    "start": 5048,
                    "end": 5072
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
                        "start": 5079,
                        "end": 5093
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5094,
                        "end": 5096
                      },
                      "optional": false,
                      "computed": false,
                      "start": 5079,
                      "end": 5096
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 5075,
                    "end": 5098
                  },
                  "definite": false,
                  "start": 5048,
                  "end": 5098
                }
              ],
              "declare": false,
              "start": 5044,
              "end": 5099
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 5037,
            "end": 5099
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
                    "start": 5115,
                    "end": 5139
                  },
                  "init": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m1_im3_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5142,
                      "end": 5156
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5157,
                      "end": 5159
                    },
                    "optional": false,
                    "computed": false,
                    "start": 5142,
                    "end": 5159
                  },
                  "definite": false,
                  "start": 5115,
                  "end": 5159
                }
              ],
              "declare": false,
              "start": 5111,
              "end": 5160
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 5104,
            "end": 5160
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
                    "start": 5176,
                    "end": 5200
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
                        "start": 5203,
                        "end": 5217
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "f1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5218,
                        "end": 5220
                      },
                      "optional": false,
                      "computed": false,
                      "start": 5203,
                      "end": 5220
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 5203,
                    "end": 5222
                  },
                  "definite": false,
                  "start": 5176,
                  "end": 5222
                }
              ],
              "declare": false,
              "start": 5172,
              "end": 5223
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 5165,
            "end": 5223
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
                  "start": 5232,
                  "end": 5257
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m1_im3_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5260,
                    "end": 5274
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5275,
                    "end": 5277
                  },
                  "optional": false,
                  "computed": false,
                  "start": 5260,
                  "end": 5277
                },
                "definite": false,
                "start": 5232,
                "end": 5277
              }
            ],
            "declare": false,
            "start": 5228,
            "end": 5278
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
                  "start": 5287,
                  "end": 5312
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
                      "start": 5319,
                      "end": 5333
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5334,
                      "end": 5336
                    },
                    "optional": false,
                    "computed": false,
                    "start": 5319,
                    "end": 5336
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "start": 5315,
                  "end": 5338
                },
                "definite": false,
                "start": 5287,
                "end": 5338
              }
            ],
            "declare": false,
            "start": 5283,
            "end": 5339
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
                  "start": 5348,
                  "end": 5373
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m1_im3_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5376,
                    "end": 5390
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5391,
                    "end": 5393
                  },
                  "optional": false,
                  "computed": false,
                  "start": 5376,
                  "end": 5393
                },
                "definite": false,
                "start": 5348,
                "end": 5393
              }
            ],
            "declare": false,
            "start": 5344,
            "end": 5394
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
                  "start": 5403,
                  "end": 5428
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
                      "start": 5431,
                      "end": 5445
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5446,
                      "end": 5448
                    },
                    "optional": false,
                    "computed": false,
                    "start": 5431,
                    "end": 5448
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 5431,
                  "end": 5450
                },
                "definite": false,
                "start": 5403,
                "end": 5450
              }
            ],
            "declare": false,
            "start": 5399,
            "end": 5451
          },
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m1_im4_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 5464,
              "end": 5478
            },
            "moduleReference": {
              "type": "TSExternalModuleReference",
              "expression": {
                "type": "Literal",
                "value": "m2_M4_private",
                "raw": "\"m2_M4_private\"",
                "start": 5489,
                "end": 5504
              },
              "start": 5481,
              "end": 5505
            },
            "importKind": "value",
            "start": 5457,
            "end": 5506
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
                    "start": 5522,
                    "end": 5546
                  },
                  "init": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m1_im4_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5549,
                      "end": 5563
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5564,
                      "end": 5566
                    },
                    "optional": false,
                    "computed": false,
                    "start": 5549,
                    "end": 5566
                  },
                  "definite": false,
                  "start": 5522,
                  "end": 5566
                }
              ],
              "declare": false,
              "start": 5518,
              "end": 5567
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 5511,
            "end": 5567
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
                    "start": 5583,
                    "end": 5607
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
                        "start": 5614,
                        "end": 5628
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5629,
                        "end": 5631
                      },
                      "optional": false,
                      "computed": false,
                      "start": 5614,
                      "end": 5631
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 5610,
                    "end": 5633
                  },
                  "definite": false,
                  "start": 5583,
                  "end": 5633
                }
              ],
              "declare": false,
              "start": 5579,
              "end": 5634
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 5572,
            "end": 5634
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
                    "start": 5650,
                    "end": 5674
                  },
                  "init": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m1_im4_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5677,
                      "end": 5691
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5692,
                      "end": 5694
                    },
                    "optional": false,
                    "computed": false,
                    "start": 5677,
                    "end": 5694
                  },
                  "definite": false,
                  "start": 5650,
                  "end": 5694
                }
              ],
              "declare": false,
              "start": 5646,
              "end": 5695
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 5639,
            "end": 5695
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
                    "start": 5711,
                    "end": 5735
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
                        "start": 5738,
                        "end": 5752
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "f1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5753,
                        "end": 5755
                      },
                      "optional": false,
                      "computed": false,
                      "start": 5738,
                      "end": 5755
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 5738,
                    "end": 5757
                  },
                  "definite": false,
                  "start": 5711,
                  "end": 5757
                }
              ],
              "declare": false,
              "start": 5707,
              "end": 5758
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 5700,
            "end": 5758
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
                  "start": 5767,
                  "end": 5792
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m1_im4_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5795,
                    "end": 5809
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5810,
                    "end": 5812
                  },
                  "optional": false,
                  "computed": false,
                  "start": 5795,
                  "end": 5812
                },
                "definite": false,
                "start": 5767,
                "end": 5812
              }
            ],
            "declare": false,
            "start": 5763,
            "end": 5813
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
                  "start": 5822,
                  "end": 5847
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
                      "start": 5854,
                      "end": 5868
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5869,
                      "end": 5871
                    },
                    "optional": false,
                    "computed": false,
                    "start": 5854,
                    "end": 5871
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "start": 5850,
                  "end": 5873
                },
                "definite": false,
                "start": 5822,
                "end": 5873
              }
            ],
            "declare": false,
            "start": 5818,
            "end": 5874
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
                  "start": 5883,
                  "end": 5908
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m1_im4_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5911,
                    "end": 5925
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5926,
                    "end": 5928
                  },
                  "optional": false,
                  "computed": false,
                  "start": 5911,
                  "end": 5928
                },
                "definite": false,
                "start": 5883,
                "end": 5928
              }
            ],
            "declare": false,
            "start": 5879,
            "end": 5929
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
                  "start": 5938,
                  "end": 5963
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
                      "start": 5966,
                      "end": 5980
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5981,
                      "end": 5983
                    },
                    "optional": false,
                    "computed": false,
                    "start": 5966,
                    "end": 5983
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 5966,
                  "end": 5985
                },
                "definite": false,
                "start": 5938,
                "end": 5985
              }
            ],
            "declare": false,
            "start": 5934,
            "end": 5986
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
                "start": 6042,
                "end": 6055
              },
              "moduleReference": {
                "type": "Identifier",
                "decorators": [],
                "name": "m2_M1_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 6058,
                "end": 6070
              },
              "importKind": "value",
              "start": 6035,
              "end": 6071
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 6028,
            "end": 6071
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
                "start": 6090,
                "end": 6103
              },
              "moduleReference": {
                "type": "Identifier",
                "decorators": [],
                "name": "m2_M2_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 6106,
                "end": 6119
              },
              "importKind": "value",
              "start": 6083,
              "end": 6120
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 6076,
            "end": 6120
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
                "start": 6139,
                "end": 6152
              },
              "moduleReference": {
                "type": "TSExternalModuleReference",
                "expression": {
                  "type": "Literal",
                  "value": "m2_M3_public",
                  "raw": "\"m2_M3_public\"",
                  "start": 6163,
                  "end": 6177
                },
                "start": 6155,
                "end": 6178
              },
              "importKind": "value",
              "start": 6132,
              "end": 6179
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 6125,
            "end": 6179
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
                "start": 6198,
                "end": 6211
              },
              "moduleReference": {
                "type": "TSExternalModuleReference",
                "expression": {
                  "type": "Literal",
                  "value": "m2_M4_private",
                  "raw": "\"m2_M4_private\"",
                  "start": 6222,
                  "end": 6237
                },
                "start": 6214,
                "end": 6238
              },
              "importKind": "value",
              "start": 6191,
              "end": 6239
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 6184,
            "end": 6239
          }
        ],
        "start": 3117,
        "end": 6241
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 3107,
      "end": 6241
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
          "start": 6257,
          "end": 6270
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
                  "start": 6290,
                  "end": 6292
                },
                "typeParameters": null,
                "superClass": null,
                "superTypeArguments": null,
                "implements": [],
                "body": {
                  "type": "ClassBody",
                  "body": [],
                  "start": 6293,
                  "end": 6300
                },
                "abstract": false,
                "declare": false,
                "start": 6284,
                "end": 6300
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 6277,
              "end": 6300
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
                  "start": 6321,
                  "end": 6323
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
                          "start": 6347,
                          "end": 6349
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "start": 6343,
                        "end": 6349
                      },
                      "start": 6336,
                      "end": 6350
                    }
                  ],
                  "start": 6326,
                  "end": 6356
                },
                "expression": false,
                "start": 6312,
                "end": 6356
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 6305,
              "end": 6356
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
                      "start": 6372,
                      "end": 6374
                    },
                    "init": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6377,
                      "end": 6379
                    },
                    "definite": false,
                    "start": 6372,
                    "end": 6379
                  }
                ],
                "declare": false,
                "start": 6368,
                "end": 6380
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 6361,
              "end": 6380
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
                            "start": 6400,
                            "end": 6402
                          },
                          "typeArguments": null,
                          "start": 6400,
                          "end": 6402
                        },
                        "start": 6398,
                        "end": 6402
                      },
                      "start": 6396,
                      "end": 6402
                    },
                    "init": null,
                    "definite": false,
                    "start": 6396,
                    "end": 6402
                  }
                ],
                "declare": false,
                "start": 6392,
                "end": 6403
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 6385,
              "end": 6403
            }
          ],
          "start": 6271,
          "end": 6405
        },
        "kind": "module",
        "declare": false,
        "global": false,
        "start": 6250,
        "end": 6405
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 6243,
      "end": 6405
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSModuleDeclaration",
        "id": {
          "type": "Literal",
          "value": "glo_M2_public",
          "raw": "\"glo_M2_public\"",
          "start": 6429,
          "end": 6444
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
                  "start": 6467,
                  "end": 6469
                },
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": null,
                "expression": false,
                "start": 6458,
                "end": 6472
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 6451,
              "end": 6472
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
                  "start": 6490,
                  "end": 6492
                },
                "typeParameters": null,
                "superClass": null,
                "superTypeArguments": null,
                "implements": [],
                "body": {
                  "type": "ClassBody",
                  "body": [],
                  "start": 6493,
                  "end": 6500
                },
                "abstract": false,
                "declare": false,
                "start": 6484,
                "end": 6500
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 6477,
              "end": 6500
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
                                    "start": 6530,
                                    "end": 6532
                                  },
                                  "typeArguments": null,
                                  "start": 6530,
                                  "end": 6532
                                },
                                "start": 6528,
                                "end": 6532
                              },
                              "start": 6522,
                              "end": 6533
                            }
                          ],
                          "start": 6520,
                          "end": 6535
                        },
                        "start": 6518,
                        "end": 6535
                      },
                      "start": 6516,
                      "end": 6535
                    },
                    "init": null,
                    "definite": false,
                    "start": 6516,
                    "end": 6535
                  }
                ],
                "declare": false,
                "start": 6512,
                "end": 6536
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 6505,
              "end": 6536
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
                            "start": 6556,
                            "end": 6558
                          },
                          "typeArguments": null,
                          "start": 6556,
                          "end": 6558
                        },
                        "start": 6554,
                        "end": 6558
                      },
                      "start": 6552,
                      "end": 6558
                    },
                    "init": null,
                    "definite": false,
                    "start": 6552,
                    "end": 6558
                  }
                ],
                "declare": false,
                "start": 6548,
                "end": 6559
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 6541,
              "end": 6559
            }
          ],
          "start": 6445,
          "end": 6561
        },
        "kind": "module",
        "declare": true,
        "global": false,
        "start": 6414,
        "end": 6561
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 6407,
      "end": 6561
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
          "start": 6577,
          "end": 6591
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
                  "start": 6611,
                  "end": 6613
                },
                "typeParameters": null,
                "superClass": null,
                "superTypeArguments": null,
                "implements": [],
                "body": {
                  "type": "ClassBody",
                  "body": [],
                  "start": 6614,
                  "end": 6621
                },
                "abstract": false,
                "declare": false,
                "start": 6605,
                "end": 6621
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 6598,
              "end": 6621
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
                  "start": 6642,
                  "end": 6644
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
                          "start": 6668,
                          "end": 6670
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "start": 6664,
                        "end": 6670
                      },
                      "start": 6657,
                      "end": 6671
                    }
                  ],
                  "start": 6647,
                  "end": 6677
                },
                "expression": false,
                "start": 6633,
                "end": 6677
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 6626,
              "end": 6677
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
                      "start": 6693,
                      "end": 6695
                    },
                    "init": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6698,
                      "end": 6700
                    },
                    "definite": false,
                    "start": 6693,
                    "end": 6700
                  }
                ],
                "declare": false,
                "start": 6689,
                "end": 6701
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 6682,
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
                            "start": 6721,
                            "end": 6723
                          },
                          "typeArguments": null,
                          "start": 6721,
                          "end": 6723
                        },
                        "start": 6719,
                        "end": 6723
                      },
                      "start": 6717,
                      "end": 6723
                    },
                    "init": null,
                    "definite": false,
                    "start": 6717,
                    "end": 6723
                  }
                ],
                "declare": false,
                "start": 6713,
                "end": 6724
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 6706,
              "end": 6724
            }
          ],
          "start": 6592,
          "end": 6726
        },
        "kind": "module",
        "declare": false,
        "global": false,
        "start": 6570,
        "end": 6726
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 6563,
      "end": 6726
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSModuleDeclaration",
        "id": {
          "type": "Literal",
          "value": "glo_M4_private",
          "raw": "\"glo_M4_private\"",
          "start": 6750,
          "end": 6766
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
                  "start": 6789,
                  "end": 6791
                },
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": null,
                "expression": false,
                "start": 6780,
                "end": 6794
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 6773,
              "end": 6794
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
                  "start": 6812,
                  "end": 6814
                },
                "typeParameters": null,
                "superClass": null,
                "superTypeArguments": null,
                "implements": [],
                "body": {
                  "type": "ClassBody",
                  "body": [],
                  "start": 6815,
                  "end": 6822
                },
                "abstract": false,
                "declare": false,
                "start": 6806,
                "end": 6822
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 6799,
              "end": 6822
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
                                    "start": 6852,
                                    "end": 6854
                                  },
                                  "typeArguments": null,
                                  "start": 6852,
                                  "end": 6854
                                },
                                "start": 6850,
                                "end": 6854
                              },
                              "start": 6844,
                              "end": 6855
                            }
                          ],
                          "start": 6842,
                          "end": 6857
                        },
                        "start": 6840,
                        "end": 6857
                      },
                      "start": 6838,
                      "end": 6857
                    },
                    "init": null,
                    "definite": false,
                    "start": 6838,
                    "end": 6857
                  }
                ],
                "declare": false,
                "start": 6834,
                "end": 6858
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 6827,
              "end": 6858
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
                            "start": 6878,
                            "end": 6880
                          },
                          "typeArguments": null,
                          "start": 6878,
                          "end": 6880
                        },
                        "start": 6876,
                        "end": 6880
                      },
                      "start": 6874,
                      "end": 6880
                    },
                    "init": null,
                    "definite": false,
                    "start": 6874,
                    "end": 6880
                  }
                ],
                "declare": false,
                "start": 6870,
                "end": 6881
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 6863,
              "end": 6881
            }
          ],
          "start": 6767,
          "end": 6883
        },
        "kind": "module",
        "declare": true,
        "global": false,
        "start": 6735,
        "end": 6883
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 6728,
      "end": 6883
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "glo_im1_private",
        "optional": false,
        "typeAnnotation": null,
        "start": 6893,
        "end": 6908
      },
      "moduleReference": {
        "type": "Identifier",
        "decorators": [],
        "name": "glo_M1_public",
        "optional": false,
        "typeAnnotation": null,
        "start": 6911,
        "end": 6924
      },
      "importKind": "value",
      "start": 6886,
      "end": 6925
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
              "start": 6937,
              "end": 6962
            },
            "init": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "glo_im1_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 6965,
                "end": 6980
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "c1",
                "optional": false,
                "typeAnnotation": null,
                "start": 6981,
                "end": 6983
              },
              "optional": false,
              "computed": false,
              "start": 6965,
              "end": 6983
            },
            "definite": false,
            "start": 6937,
            "end": 6983
          }
        ],
        "declare": false,
        "start": 6933,
        "end": 6984
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 6926,
      "end": 6984
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
              "start": 6996,
              "end": 7021
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
                  "start": 7028,
                  "end": 7043
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7044,
                  "end": 7046
                },
                "optional": false,
                "computed": false,
                "start": 7028,
                "end": 7046
              },
              "typeArguments": null,
              "arguments": [],
              "start": 7024,
              "end": 7048
            },
            "definite": false,
            "start": 6996,
            "end": 7048
          }
        ],
        "declare": false,
        "start": 6992,
        "end": 7049
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 6985,
      "end": 7049
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
              "start": 7061,
              "end": 7086
            },
            "init": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "glo_im1_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 7089,
                "end": 7104
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "f1",
                "optional": false,
                "typeAnnotation": null,
                "start": 7105,
                "end": 7107
              },
              "optional": false,
              "computed": false,
              "start": 7089,
              "end": 7107
            },
            "definite": false,
            "start": 7061,
            "end": 7107
          }
        ],
        "declare": false,
        "start": 7057,
        "end": 7108
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 7050,
      "end": 7108
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
              "start": 7120,
              "end": 7145
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
                  "start": 7148,
                  "end": 7163
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7164,
                  "end": 7166
                },
                "optional": false,
                "computed": false,
                "start": 7148,
                "end": 7166
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 7148,
              "end": 7168
            },
            "definite": false,
            "start": 7120,
            "end": 7168
          }
        ],
        "declare": false,
        "start": 7116,
        "end": 7169
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 7109,
      "end": 7169
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
            "start": 7174,
            "end": 7200
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "glo_im1_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 7203,
              "end": 7218
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "c1",
              "optional": false,
              "typeAnnotation": null,
              "start": 7219,
              "end": 7221
            },
            "optional": false,
            "computed": false,
            "start": 7203,
            "end": 7221
          },
          "definite": false,
          "start": 7174,
          "end": 7221
        }
      ],
      "declare": false,
      "start": 7170,
      "end": 7222
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
            "start": 7227,
            "end": 7253
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
                "start": 7260,
                "end": 7275
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "c1",
                "optional": false,
                "typeAnnotation": null,
                "start": 7276,
                "end": 7278
              },
              "optional": false,
              "computed": false,
              "start": 7260,
              "end": 7278
            },
            "typeArguments": null,
            "arguments": [],
            "start": 7256,
            "end": 7280
          },
          "definite": false,
          "start": 7227,
          "end": 7280
        }
      ],
      "declare": false,
      "start": 7223,
      "end": 7281
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
            "start": 7286,
            "end": 7312
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "glo_im1_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 7315,
              "end": 7330
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "f1",
              "optional": false,
              "typeAnnotation": null,
              "start": 7331,
              "end": 7333
            },
            "optional": false,
            "computed": false,
            "start": 7315,
            "end": 7333
          },
          "definite": false,
          "start": 7286,
          "end": 7333
        }
      ],
      "declare": false,
      "start": 7282,
      "end": 7334
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
            "start": 7339,
            "end": 7365
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
                "start": 7368,
                "end": 7383
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "f1",
                "optional": false,
                "typeAnnotation": null,
                "start": 7384,
                "end": 7386
              },
              "optional": false,
              "computed": false,
              "start": 7368,
              "end": 7386
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 7368,
            "end": 7388
          },
          "definite": false,
          "start": 7339,
          "end": 7388
        }
      ],
      "declare": false,
      "start": 7335,
      "end": 7389
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "glo_im2_private",
        "optional": false,
        "typeAnnotation": null,
        "start": 7399,
        "end": 7414
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "glo_M2_public",
          "raw": "\"glo_M2_public\"",
          "start": 7425,
          "end": 7440
        },
        "start": 7417,
        "end": 7441
      },
      "importKind": "value",
      "start": 7392,
      "end": 7442
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
              "start": 7454,
              "end": 7479
            },
            "init": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "glo_im2_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 7482,
                "end": 7497
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "c1",
                "optional": false,
                "typeAnnotation": null,
                "start": 7498,
                "end": 7500
              },
              "optional": false,
              "computed": false,
              "start": 7482,
              "end": 7500
            },
            "definite": false,
            "start": 7454,
            "end": 7500
          }
        ],
        "declare": false,
        "start": 7450,
        "end": 7501
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 7443,
      "end": 7501
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
              "start": 7513,
              "end": 7538
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
                  "start": 7545,
                  "end": 7560
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7561,
                  "end": 7563
                },
                "optional": false,
                "computed": false,
                "start": 7545,
                "end": 7563
              },
              "typeArguments": null,
              "arguments": [],
              "start": 7541,
              "end": 7565
            },
            "definite": false,
            "start": 7513,
            "end": 7565
          }
        ],
        "declare": false,
        "start": 7509,
        "end": 7566
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 7502,
      "end": 7566
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
              "start": 7578,
              "end": 7603
            },
            "init": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "glo_im2_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 7606,
                "end": 7621
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "f1",
                "optional": false,
                "typeAnnotation": null,
                "start": 7622,
                "end": 7624
              },
              "optional": false,
              "computed": false,
              "start": 7606,
              "end": 7624
            },
            "definite": false,
            "start": 7578,
            "end": 7624
          }
        ],
        "declare": false,
        "start": 7574,
        "end": 7625
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 7567,
      "end": 7625
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
              "start": 7637,
              "end": 7662
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
                  "start": 7665,
                  "end": 7680
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7681,
                  "end": 7683
                },
                "optional": false,
                "computed": false,
                "start": 7665,
                "end": 7683
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 7665,
              "end": 7685
            },
            "definite": false,
            "start": 7637,
            "end": 7685
          }
        ],
        "declare": false,
        "start": 7633,
        "end": 7686
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 7626,
      "end": 7686
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
            "start": 7691,
            "end": 7717
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "glo_im2_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 7720,
              "end": 7735
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "c1",
              "optional": false,
              "typeAnnotation": null,
              "start": 7736,
              "end": 7738
            },
            "optional": false,
            "computed": false,
            "start": 7720,
            "end": 7738
          },
          "definite": false,
          "start": 7691,
          "end": 7738
        }
      ],
      "declare": false,
      "start": 7687,
      "end": 7739
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
            "start": 7744,
            "end": 7770
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
                "start": 7777,
                "end": 7792
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "c1",
                "optional": false,
                "typeAnnotation": null,
                "start": 7793,
                "end": 7795
              },
              "optional": false,
              "computed": false,
              "start": 7777,
              "end": 7795
            },
            "typeArguments": null,
            "arguments": [],
            "start": 7773,
            "end": 7797
          },
          "definite": false,
          "start": 7744,
          "end": 7797
        }
      ],
      "declare": false,
      "start": 7740,
      "end": 7798
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
            "start": 7803,
            "end": 7829
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "glo_im2_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 7832,
              "end": 7847
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "f1",
              "optional": false,
              "typeAnnotation": null,
              "start": 7848,
              "end": 7850
            },
            "optional": false,
            "computed": false,
            "start": 7832,
            "end": 7850
          },
          "definite": false,
          "start": 7803,
          "end": 7850
        }
      ],
      "declare": false,
      "start": 7799,
      "end": 7851
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
            "start": 7856,
            "end": 7882
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
                "start": 7885,
                "end": 7900
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "f1",
                "optional": false,
                "typeAnnotation": null,
                "start": 7901,
                "end": 7903
              },
              "optional": false,
              "computed": false,
              "start": 7885,
              "end": 7903
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 7885,
            "end": 7905
          },
          "definite": false,
          "start": 7856,
          "end": 7905
        }
      ],
      "declare": false,
      "start": 7852,
      "end": 7906
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "glo_im3_private",
        "optional": false,
        "typeAnnotation": null,
        "start": 7915,
        "end": 7930
      },
      "moduleReference": {
        "type": "Identifier",
        "decorators": [],
        "name": "glo_M3_private",
        "optional": false,
        "typeAnnotation": null,
        "start": 7933,
        "end": 7947
      },
      "importKind": "value",
      "start": 7908,
      "end": 7948
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
              "start": 7960,
              "end": 7985
            },
            "init": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "glo_im3_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 7988,
                "end": 8003
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "c1",
                "optional": false,
                "typeAnnotation": null,
                "start": 8004,
                "end": 8006
              },
              "optional": false,
              "computed": false,
              "start": 7988,
              "end": 8006
            },
            "definite": false,
            "start": 7960,
            "end": 8006
          }
        ],
        "declare": false,
        "start": 7956,
        "end": 8007
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 7949,
      "end": 8007
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
              "start": 8019,
              "end": 8044
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
                  "start": 8051,
                  "end": 8066
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 8067,
                  "end": 8069
                },
                "optional": false,
                "computed": false,
                "start": 8051,
                "end": 8069
              },
              "typeArguments": null,
              "arguments": [],
              "start": 8047,
              "end": 8071
            },
            "definite": false,
            "start": 8019,
            "end": 8071
          }
        ],
        "declare": false,
        "start": 8015,
        "end": 8072
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 8008,
      "end": 8072
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
              "start": 8084,
              "end": 8109
            },
            "init": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "glo_im3_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 8112,
                "end": 8127
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "f1",
                "optional": false,
                "typeAnnotation": null,
                "start": 8128,
                "end": 8130
              },
              "optional": false,
              "computed": false,
              "start": 8112,
              "end": 8130
            },
            "definite": false,
            "start": 8084,
            "end": 8130
          }
        ],
        "declare": false,
        "start": 8080,
        "end": 8131
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 8073,
      "end": 8131
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
              "start": 8143,
              "end": 8168
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
                  "start": 8171,
                  "end": 8186
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 8187,
                  "end": 8189
                },
                "optional": false,
                "computed": false,
                "start": 8171,
                "end": 8189
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 8171,
              "end": 8191
            },
            "definite": false,
            "start": 8143,
            "end": 8191
          }
        ],
        "declare": false,
        "start": 8139,
        "end": 8192
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 8132,
      "end": 8192
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
            "start": 8197,
            "end": 8223
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "glo_im3_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 8226,
              "end": 8241
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "c1",
              "optional": false,
              "typeAnnotation": null,
              "start": 8242,
              "end": 8244
            },
            "optional": false,
            "computed": false,
            "start": 8226,
            "end": 8244
          },
          "definite": false,
          "start": 8197,
          "end": 8244
        }
      ],
      "declare": false,
      "start": 8193,
      "end": 8245
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
            "start": 8250,
            "end": 8276
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
                "start": 8283,
                "end": 8298
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "c1",
                "optional": false,
                "typeAnnotation": null,
                "start": 8299,
                "end": 8301
              },
              "optional": false,
              "computed": false,
              "start": 8283,
              "end": 8301
            },
            "typeArguments": null,
            "arguments": [],
            "start": 8279,
            "end": 8303
          },
          "definite": false,
          "start": 8250,
          "end": 8303
        }
      ],
      "declare": false,
      "start": 8246,
      "end": 8304
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
            "start": 8309,
            "end": 8335
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "glo_im3_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 8338,
              "end": 8353
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "f1",
              "optional": false,
              "typeAnnotation": null,
              "start": 8354,
              "end": 8356
            },
            "optional": false,
            "computed": false,
            "start": 8338,
            "end": 8356
          },
          "definite": false,
          "start": 8309,
          "end": 8356
        }
      ],
      "declare": false,
      "start": 8305,
      "end": 8357
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
            "start": 8362,
            "end": 8388
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
                "start": 8391,
                "end": 8406
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "f1",
                "optional": false,
                "typeAnnotation": null,
                "start": 8407,
                "end": 8409
              },
              "optional": false,
              "computed": false,
              "start": 8391,
              "end": 8409
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 8391,
            "end": 8411
          },
          "definite": false,
          "start": 8362,
          "end": 8411
        }
      ],
      "declare": false,
      "start": 8358,
      "end": 8412
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "glo_im4_private",
        "optional": false,
        "typeAnnotation": null,
        "start": 8421,
        "end": 8436
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "glo_M4_private",
          "raw": "\"glo_M4_private\"",
          "start": 8447,
          "end": 8463
        },
        "start": 8439,
        "end": 8464
      },
      "importKind": "value",
      "start": 8414,
      "end": 8465
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
              "start": 8477,
              "end": 8502
            },
            "init": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "glo_im4_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 8505,
                "end": 8520
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "c1",
                "optional": false,
                "typeAnnotation": null,
                "start": 8521,
                "end": 8523
              },
              "optional": false,
              "computed": false,
              "start": 8505,
              "end": 8523
            },
            "definite": false,
            "start": 8477,
            "end": 8523
          }
        ],
        "declare": false,
        "start": 8473,
        "end": 8524
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 8466,
      "end": 8524
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
              "start": 8536,
              "end": 8561
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
                  "start": 8568,
                  "end": 8583
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 8584,
                  "end": 8586
                },
                "optional": false,
                "computed": false,
                "start": 8568,
                "end": 8586
              },
              "typeArguments": null,
              "arguments": [],
              "start": 8564,
              "end": 8588
            },
            "definite": false,
            "start": 8536,
            "end": 8588
          }
        ],
        "declare": false,
        "start": 8532,
        "end": 8589
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 8525,
      "end": 8589
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
              "start": 8601,
              "end": 8626
            },
            "init": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "glo_im4_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 8629,
                "end": 8644
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "f1",
                "optional": false,
                "typeAnnotation": null,
                "start": 8645,
                "end": 8647
              },
              "optional": false,
              "computed": false,
              "start": 8629,
              "end": 8647
            },
            "definite": false,
            "start": 8601,
            "end": 8647
          }
        ],
        "declare": false,
        "start": 8597,
        "end": 8648
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 8590,
      "end": 8648
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
              "start": 8660,
              "end": 8685
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
                  "start": 8688,
                  "end": 8703
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 8704,
                  "end": 8706
                },
                "optional": false,
                "computed": false,
                "start": 8688,
                "end": 8706
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 8688,
              "end": 8708
            },
            "definite": false,
            "start": 8660,
            "end": 8708
          }
        ],
        "declare": false,
        "start": 8656,
        "end": 8709
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 8649,
      "end": 8709
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
            "start": 8714,
            "end": 8740
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "glo_im4_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 8743,
              "end": 8758
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "c1",
              "optional": false,
              "typeAnnotation": null,
              "start": 8759,
              "end": 8761
            },
            "optional": false,
            "computed": false,
            "start": 8743,
            "end": 8761
          },
          "definite": false,
          "start": 8714,
          "end": 8761
        }
      ],
      "declare": false,
      "start": 8710,
      "end": 8762
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
            "start": 8767,
            "end": 8793
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
                "start": 8800,
                "end": 8815
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "c1",
                "optional": false,
                "typeAnnotation": null,
                "start": 8816,
                "end": 8818
              },
              "optional": false,
              "computed": false,
              "start": 8800,
              "end": 8818
            },
            "typeArguments": null,
            "arguments": [],
            "start": 8796,
            "end": 8820
          },
          "definite": false,
          "start": 8767,
          "end": 8820
        }
      ],
      "declare": false,
      "start": 8763,
      "end": 8821
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
            "start": 8826,
            "end": 8852
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "glo_im4_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 8855,
              "end": 8870
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "f1",
              "optional": false,
              "typeAnnotation": null,
              "start": 8871,
              "end": 8873
            },
            "optional": false,
            "computed": false,
            "start": 8855,
            "end": 8873
          },
          "definite": false,
          "start": 8826,
          "end": 8873
        }
      ],
      "declare": false,
      "start": 8822,
      "end": 8874
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
            "start": 8879,
            "end": 8905
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
                "start": 8908,
                "end": 8923
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "f1",
                "optional": false,
                "typeAnnotation": null,
                "start": 8924,
                "end": 8926
              },
              "optional": false,
              "computed": false,
              "start": 8908,
              "end": 8926
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 8908,
            "end": 8928
          },
          "definite": false,
          "start": 8879,
          "end": 8928
        }
      ],
      "declare": false,
      "start": 8875,
      "end": 8929
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
          "start": 8977,
          "end": 8991
        },
        "moduleReference": {
          "type": "Identifier",
          "decorators": [],
          "name": "glo_M1_public",
          "optional": false,
          "typeAnnotation": null,
          "start": 8994,
          "end": 9007
        },
        "importKind": "value",
        "start": 8970,
        "end": 9008
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 8963,
      "end": 9008
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
          "start": 9023,
          "end": 9037
        },
        "moduleReference": {
          "type": "Identifier",
          "decorators": [],
          "name": "glo_M3_private",
          "optional": false,
          "typeAnnotation": null,
          "start": 9040,
          "end": 9054
        },
        "importKind": "value",
        "start": 9016,
        "end": 9055
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 9009,
      "end": 9055
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
          "start": 9070,
          "end": 9084
        },
        "moduleReference": {
          "type": "TSExternalModuleReference",
          "expression": {
            "type": "Literal",
            "value": "glo_M2_public",
            "raw": "\"glo_M2_public\"",
            "start": 9095,
            "end": 9110
          },
          "start": 9087,
          "end": 9111
        },
        "importKind": "value",
        "start": 9063,
        "end": 9112
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 9056,
      "end": 9112
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
          "start": 9127,
          "end": 9141
        },
        "moduleReference": {
          "type": "TSExternalModuleReference",
          "expression": {
            "type": "Literal",
            "value": "glo_M4_private",
            "raw": "\"glo_M4_private\"",
            "start": 9152,
            "end": 9168
          },
          "start": 9144,
          "end": 9169
        },
        "importKind": "value",
        "start": 9120,
        "end": 9170
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 9113,
      "end": 9170
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSModuleDeclaration",
        "id": {
          "type": "Literal",
          "value": "use_glo_M1_public",
          "raw": "\"use_glo_M1_public\"",
          "start": 9195,
          "end": 9214
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
                "start": 9228,
                "end": 9245
              },
              "moduleReference": {
                "type": "Identifier",
                "decorators": [],
                "name": "glo_M1_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 9248,
                "end": 9261
              },
              "importKind": "value",
              "start": 9221,
              "end": 9262
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
                                      "start": 9317,
                                      "end": 9334
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "c1",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 9335,
                                      "end": 9337
                                    },
                                    "start": 9317,
                                    "end": 9337
                                  },
                                  "typeArguments": null,
                                  "start": 9317,
                                  "end": 9337
                                },
                                "start": 9315,
                                "end": 9337
                              },
                              "start": 9309,
                              "end": 9338
                            }
                          ],
                          "start": 9307,
                          "end": 9340
                        },
                        "start": 9305,
                        "end": 9340
                      },
                      "start": 9278,
                      "end": 9340
                    },
                    "init": null,
                    "definite": false,
                    "start": 9278,
                    "end": 9340
                  }
                ],
                "declare": false,
                "start": 9274,
                "end": 9341
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 9267,
              "end": 9341
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
                            "start": 9386,
                            "end": 9403
                          },
                          "typeArguments": null,
                          "start": 9386,
                          "end": 9403
                        },
                        "start": 9384,
                        "end": 9403
                      },
                      "start": 9357,
                      "end": 9403
                    },
                    "init": null,
                    "definite": false,
                    "start": 9357,
                    "end": 9403
                  }
                ],
                "declare": false,
                "start": 9353,
                "end": 9404
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 9346,
              "end": 9404
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
                                  "start": 9455,
                                  "end": 9472
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "c1",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 9473,
                                  "end": 9475
                                },
                                "start": 9455,
                                "end": 9475
                              },
                              "typeArguments": null,
                              "start": 9455,
                              "end": 9475
                            },
                            "start": 9452,
                            "end": 9475
                          },
                          "start": 9449,
                          "end": 9475
                        },
                        "start": 9447,
                        "end": 9475
                      },
                      "start": 9420,
                      "end": 9475
                    },
                    "init": null,
                    "definite": false,
                    "start": 9420,
                    "end": 9475
                  }
                ],
                "declare": false,
                "start": 9416,
                "end": 9476
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 9409,
              "end": 9476
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
                                    "start": 9525,
                                    "end": 9542
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "c1",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 9543,
                                    "end": 9545
                                  },
                                  "start": 9525,
                                  "end": 9545
                                },
                                "typeArguments": null,
                                "start": 9525,
                                "end": 9545
                              },
                              "start": 9523,
                              "end": 9545
                            },
                            "start": 9517,
                            "end": 9546
                          }
                        ],
                        "start": 9515,
                        "end": 9548
                      },
                      "start": 9513,
                      "end": 9548
                    },
                    "start": 9485,
                    "end": 9548
                  },
                  "init": null,
                  "definite": false,
                  "start": 9485,
                  "end": 9548
                }
              ],
              "declare": false,
              "start": 9481,
              "end": 9549
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
                          "start": 9588,
                          "end": 9605
                        },
                        "typeArguments": null,
                        "start": 9588,
                        "end": 9605
                      },
                      "start": 9586,
                      "end": 9605
                    },
                    "start": 9558,
                    "end": 9605
                  },
                  "init": null,
                  "definite": false,
                  "start": 9558,
                  "end": 9605
                }
              ],
              "declare": false,
              "start": 9554,
              "end": 9606
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
                                "start": 9651,
                                "end": 9668
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "c1",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 9669,
                                "end": 9671
                              },
                              "start": 9651,
                              "end": 9671
                            },
                            "typeArguments": null,
                            "start": 9651,
                            "end": 9671
                          },
                          "start": 9648,
                          "end": 9671
                        },
                        "start": 9645,
                        "end": 9671
                      },
                      "start": 9643,
                      "end": 9671
                    },
                    "start": 9615,
                    "end": 9671
                  },
                  "init": null,
                  "definite": false,
                  "start": 9615,
                  "end": 9671
                }
              ],
              "declare": false,
              "start": 9611,
              "end": 9672
            },
            {
              "type": "TSImportEqualsDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "use_glo_M2_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 9685,
                "end": 9702
              },
              "moduleReference": {
                "type": "TSExternalModuleReference",
                "expression": {
                  "type": "Literal",
                  "value": "glo_M2_public",
                  "raw": "\"glo_M2_public\"",
                  "start": 9713,
                  "end": 9728
                },
                "start": 9705,
                "end": 9729
              },
              "importKind": "value",
              "start": 9678,
              "end": 9730
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
                                      "start": 9785,
                                      "end": 9802
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "c1",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 9803,
                                      "end": 9805
                                    },
                                    "start": 9785,
                                    "end": 9805
                                  },
                                  "typeArguments": null,
                                  "start": 9785,
                                  "end": 9805
                                },
                                "start": 9783,
                                "end": 9805
                              },
                              "start": 9777,
                              "end": 9806
                            }
                          ],
                          "start": 9775,
                          "end": 9808
                        },
                        "start": 9773,
                        "end": 9808
                      },
                      "start": 9746,
                      "end": 9808
                    },
                    "init": null,
                    "definite": false,
                    "start": 9746,
                    "end": 9808
                  }
                ],
                "declare": false,
                "start": 9742,
                "end": 9809
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 9735,
              "end": 9809
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
                            "start": 9854,
                            "end": 9871
                          },
                          "typeArguments": null,
                          "start": 9854,
                          "end": 9871
                        },
                        "start": 9852,
                        "end": 9871
                      },
                      "start": 9825,
                      "end": 9871
                    },
                    "init": null,
                    "definite": false,
                    "start": 9825,
                    "end": 9871
                  }
                ],
                "declare": false,
                "start": 9821,
                "end": 9872
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 9814,
              "end": 9872
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
                                  "start": 9923,
                                  "end": 9940
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "c1",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 9941,
                                  "end": 9943
                                },
                                "start": 9923,
                                "end": 9943
                              },
                              "typeArguments": null,
                              "start": 9923,
                              "end": 9943
                            },
                            "start": 9920,
                            "end": 9943
                          },
                          "start": 9917,
                          "end": 9943
                        },
                        "start": 9915,
                        "end": 9943
                      },
                      "start": 9888,
                      "end": 9943
                    },
                    "init": null,
                    "definite": false,
                    "start": 9888,
                    "end": 9943
                  }
                ],
                "declare": false,
                "start": 9884,
                "end": 9944
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 9877,
              "end": 9944
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
                                    "start": 9993,
                                    "end": 10010
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "c1",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 10011,
                                    "end": 10013
                                  },
                                  "start": 9993,
                                  "end": 10013
                                },
                                "typeArguments": null,
                                "start": 9993,
                                "end": 10013
                              },
                              "start": 9991,
                              "end": 10013
                            },
                            "start": 9985,
                            "end": 10014
                          }
                        ],
                        "start": 9983,
                        "end": 10016
                      },
                      "start": 9981,
                      "end": 10016
                    },
                    "start": 9953,
                    "end": 10016
                  },
                  "init": null,
                  "definite": false,
                  "start": 9953,
                  "end": 10016
                }
              ],
              "declare": false,
              "start": 9949,
              "end": 10017
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
                          "start": 10056,
                          "end": 10073
                        },
                        "typeArguments": null,
                        "start": 10056,
                        "end": 10073
                      },
                      "start": 10054,
                      "end": 10073
                    },
                    "start": 10026,
                    "end": 10073
                  },
                  "init": null,
                  "definite": false,
                  "start": 10026,
                  "end": 10073
                }
              ],
              "declare": false,
              "start": 10022,
              "end": 10074
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
                                "start": 10119,
                                "end": 10136
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "c1",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 10137,
                                "end": 10139
                              },
                              "start": 10119,
                              "end": 10139
                            },
                            "typeArguments": null,
                            "start": 10119,
                            "end": 10139
                          },
                          "start": 10116,
                          "end": 10139
                        },
                        "start": 10113,
                        "end": 10139
                      },
                      "start": 10111,
                      "end": 10139
                    },
                    "start": 10083,
                    "end": 10139
                  },
                  "init": null,
                  "definite": false,
                  "start": 10083,
                  "end": 10139
                }
              ],
              "declare": false,
              "start": 10079,
              "end": 10140
            },
            {
              "type": "TSModuleDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "m2",
                "optional": false,
                "typeAnnotation": null,
                "start": 10153,
                "end": 10155
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
                      "start": 10173,
                      "end": 10184
                    },
                    "moduleReference": {
                      "type": "TSExternalModuleReference",
                      "expression": {
                        "type": "Literal",
                        "value": "glo_M2_public",
                        "raw": "\"glo_M2_public\"",
                        "start": 10195,
                        "end": 10210
                      },
                      "start": 10187,
                      "end": 10211
                    },
                    "importKind": "value",
                    "start": 10166,
                    "end": 10212
                  },
                  {
                    "type": "TSImportEqualsDeclaration",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "nonerrorImport",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 10228,
                      "end": 10242
                    },
                    "moduleReference": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "glo_M1_public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 10245,
                      "end": 10258
                    },
                    "importKind": "value",
                    "start": 10221,
                    "end": 10259
                  },
                  {
                    "type": "TSModuleDeclaration",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m5",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 10276,
                      "end": 10278
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
                            "start": 10300,
                            "end": 10314
                          },
                          "moduleReference": {
                            "type": "TSExternalModuleReference",
                            "expression": {
                              "type": "Literal",
                              "value": "glo_M2_public",
                              "raw": "\"glo_M2_public\"",
                              "start": 10325,
                              "end": 10340
                            },
                            "start": 10317,
                            "end": 10341
                          },
                          "importKind": "value",
                          "start": 10293,
                          "end": 10342
                        },
                        {
                          "type": "TSImportEqualsDeclaration",
                          "id": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "m5_nonerrorImport",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 10362,
                            "end": 10379
                          },
                          "moduleReference": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "glo_M1_public",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 10382,
                            "end": 10395
                          },
                          "importKind": "value",
                          "start": 10355,
                          "end": 10396
                        }
                      ],
                      "start": 10279,
                      "end": 10406
                    },
                    "kind": "module",
                    "declare": false,
                    "global": false,
                    "start": 10269,
                    "end": 10406
                  }
                ],
                "start": 10156,
                "end": 10412
              },
              "kind": "module",
              "declare": false,
              "global": false,
              "start": 10146,
              "end": 10412
            }
          ],
          "start": 9215,
          "end": 10414
        },
        "kind": "module",
        "declare": true,
        "global": false,
        "start": 9180,
        "end": 10414
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 9173,
      "end": 10414
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "use_glo_M3_private",
        "raw": "\"use_glo_M3_private\"",
        "start": 10432,
        "end": 10452
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
              "start": 10466,
              "end": 10484
            },
            "moduleReference": {
              "type": "Identifier",
              "decorators": [],
              "name": "glo_M3_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 10487,
              "end": 10501
            },
            "importKind": "value",
            "start": 10459,
            "end": 10502
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
                                    "start": 10558,
                                    "end": 10576
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "c1",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 10577,
                                    "end": 10579
                                  },
                                  "start": 10558,
                                  "end": 10579
                                },
                                "typeArguments": null,
                                "start": 10558,
                                "end": 10579
                              },
                              "start": 10556,
                              "end": 10579
                            },
                            "start": 10550,
                            "end": 10580
                          }
                        ],
                        "start": 10548,
                        "end": 10582
                      },
                      "start": 10546,
                      "end": 10582
                    },
                    "start": 10518,
                    "end": 10582
                  },
                  "init": null,
                  "definite": false,
                  "start": 10518,
                  "end": 10582
                }
              ],
              "declare": false,
              "start": 10514,
              "end": 10583
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 10507,
            "end": 10583
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
                          "start": 10629,
                          "end": 10647
                        },
                        "typeArguments": null,
                        "start": 10629,
                        "end": 10647
                      },
                      "start": 10627,
                      "end": 10647
                    },
                    "start": 10599,
                    "end": 10647
                  },
                  "init": null,
                  "definite": false,
                  "start": 10599,
                  "end": 10647
                }
              ],
              "declare": false,
              "start": 10595,
              "end": 10648
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 10588,
            "end": 10648
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
                                "start": 10700,
                                "end": 10718
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "c1",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 10719,
                                "end": 10721
                              },
                              "start": 10700,
                              "end": 10721
                            },
                            "typeArguments": null,
                            "start": 10700,
                            "end": 10721
                          },
                          "start": 10697,
                          "end": 10721
                        },
                        "start": 10694,
                        "end": 10721
                      },
                      "start": 10692,
                      "end": 10721
                    },
                    "start": 10664,
                    "end": 10721
                  },
                  "init": null,
                  "definite": false,
                  "start": 10664,
                  "end": 10721
                }
              ],
              "declare": false,
              "start": 10660,
              "end": 10722
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 10653,
            "end": 10722
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
                                  "start": 10772,
                                  "end": 10790
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "c1",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 10791,
                                  "end": 10793
                                },
                                "start": 10772,
                                "end": 10793
                              },
                              "typeArguments": null,
                              "start": 10772,
                              "end": 10793
                            },
                            "start": 10770,
                            "end": 10793
                          },
                          "start": 10764,
                          "end": 10794
                        }
                      ],
                      "start": 10762,
                      "end": 10796
                    },
                    "start": 10760,
                    "end": 10796
                  },
                  "start": 10731,
                  "end": 10796
                },
                "init": null,
                "definite": false,
                "start": 10731,
                "end": 10796
              }
            ],
            "declare": false,
            "start": 10727,
            "end": 10797
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
                        "start": 10837,
                        "end": 10855
                      },
                      "typeArguments": null,
                      "start": 10837,
                      "end": 10855
                    },
                    "start": 10835,
                    "end": 10855
                  },
                  "start": 10806,
                  "end": 10855
                },
                "init": null,
                "definite": false,
                "start": 10806,
                "end": 10855
              }
            ],
            "declare": false,
            "start": 10802,
            "end": 10856
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
                              "start": 10902,
                              "end": 10920
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "c1",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 10921,
                              "end": 10923
                            },
                            "start": 10902,
                            "end": 10923
                          },
                          "typeArguments": null,
                          "start": 10902,
                          "end": 10923
                        },
                        "start": 10899,
                        "end": 10923
                      },
                      "start": 10896,
                      "end": 10923
                    },
                    "start": 10894,
                    "end": 10923
                  },
                  "start": 10865,
                  "end": 10923
                },
                "init": null,
                "definite": false,
                "start": 10865,
                "end": 10923
              }
            ],
            "declare": false,
            "start": 10861,
            "end": 10924
          },
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "use_glo_M4_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 10937,
              "end": 10955
            },
            "moduleReference": {
              "type": "TSExternalModuleReference",
              "expression": {
                "type": "Literal",
                "value": "glo_M4_private",
                "raw": "\"glo_M4_private\"",
                "start": 10966,
                "end": 10982
              },
              "start": 10958,
              "end": 10983
            },
            "importKind": "value",
            "start": 10930,
            "end": 10984
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
                                    "start": 11040,
                                    "end": 11058
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "c1",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 11059,
                                    "end": 11061
                                  },
                                  "start": 11040,
                                  "end": 11061
                                },
                                "typeArguments": null,
                                "start": 11040,
                                "end": 11061
                              },
                              "start": 11038,
                              "end": 11061
                            },
                            "start": 11032,
                            "end": 11062
                          }
                        ],
                        "start": 11030,
                        "end": 11064
                      },
                      "start": 11028,
                      "end": 11064
                    },
                    "start": 11000,
                    "end": 11064
                  },
                  "init": null,
                  "definite": false,
                  "start": 11000,
                  "end": 11064
                }
              ],
              "declare": false,
              "start": 10996,
              "end": 11065
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 10989,
            "end": 11065
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
                          "start": 11111,
                          "end": 11129
                        },
                        "typeArguments": null,
                        "start": 11111,
                        "end": 11129
                      },
                      "start": 11109,
                      "end": 11129
                    },
                    "start": 11081,
                    "end": 11129
                  },
                  "init": null,
                  "definite": false,
                  "start": 11081,
                  "end": 11129
                }
              ],
              "declare": false,
              "start": 11077,
              "end": 11130
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 11070,
            "end": 11130
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
                                "start": 11182,
                                "end": 11200
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "c1",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 11201,
                                "end": 11203
                              },
                              "start": 11182,
                              "end": 11203
                            },
                            "typeArguments": null,
                            "start": 11182,
                            "end": 11203
                          },
                          "start": 11179,
                          "end": 11203
                        },
                        "start": 11176,
                        "end": 11203
                      },
                      "start": 11174,
                      "end": 11203
                    },
                    "start": 11146,
                    "end": 11203
                  },
                  "init": null,
                  "definite": false,
                  "start": 11146,
                  "end": 11203
                }
              ],
              "declare": false,
              "start": 11142,
              "end": 11204
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 11135,
            "end": 11204
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
                                  "start": 11254,
                                  "end": 11272
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "c1",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 11273,
                                  "end": 11275
                                },
                                "start": 11254,
                                "end": 11275
                              },
                              "typeArguments": null,
                              "start": 11254,
                              "end": 11275
                            },
                            "start": 11252,
                            "end": 11275
                          },
                          "start": 11246,
                          "end": 11276
                        }
                      ],
                      "start": 11244,
                      "end": 11278
                    },
                    "start": 11242,
                    "end": 11278
                  },
                  "start": 11213,
                  "end": 11278
                },
                "init": null,
                "definite": false,
                "start": 11213,
                "end": 11278
              }
            ],
            "declare": false,
            "start": 11209,
            "end": 11279
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
                        "start": 11319,
                        "end": 11337
                      },
                      "typeArguments": null,
                      "start": 11319,
                      "end": 11337
                    },
                    "start": 11317,
                    "end": 11337
                  },
                  "start": 11288,
                  "end": 11337
                },
                "init": null,
                "definite": false,
                "start": 11288,
                "end": 11337
              }
            ],
            "declare": false,
            "start": 11284,
            "end": 11338
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
                              "start": 11384,
                              "end": 11402
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "c1",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 11403,
                              "end": 11405
                            },
                            "start": 11384,
                            "end": 11405
                          },
                          "typeArguments": null,
                          "start": 11384,
                          "end": 11405
                        },
                        "start": 11381,
                        "end": 11405
                      },
                      "start": 11378,
                      "end": 11405
                    },
                    "start": 11376,
                    "end": 11405
                  },
                  "start": 11347,
                  "end": 11405
                },
                "init": null,
                "definite": false,
                "start": 11347,
                "end": 11405
              }
            ],
            "declare": false,
            "start": 11343,
            "end": 11406
          },
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m2",
              "optional": false,
              "typeAnnotation": null,
              "start": 11419,
              "end": 11421
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
                    "start": 11439,
                    "end": 11450
                  },
                  "moduleReference": {
                    "type": "TSExternalModuleReference",
                    "expression": {
                      "type": "Literal",
                      "value": "glo_M4_private",
                      "raw": "\"glo_M4_private\"",
                      "start": 11461,
                      "end": 11477
                    },
                    "start": 11453,
                    "end": 11478
                  },
                  "importKind": "value",
                  "start": 11432,
                  "end": 11479
                },
                {
                  "type": "TSImportEqualsDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nonerrorImport",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 11495,
                    "end": 11509
                  },
                  "moduleReference": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "glo_M3_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 11512,
                    "end": 11526
                  },
                  "importKind": "value",
                  "start": 11488,
                  "end": 11527
                },
                {
                  "type": "TSModuleDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m5",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 11544,
                    "end": 11546
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
                          "start": 11568,
                          "end": 11582
                        },
                        "moduleReference": {
                          "type": "TSExternalModuleReference",
                          "expression": {
                            "type": "Literal",
                            "value": "glo_M4_private",
                            "raw": "\"glo_M4_private\"",
                            "start": 11593,
                            "end": 11609
                          },
                          "start": 11585,
                          "end": 11610
                        },
                        "importKind": "value",
                        "start": 11561,
                        "end": 11611
                      },
                      {
                        "type": "TSImportEqualsDeclaration",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "m5_nonerrorImport",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 11631,
                          "end": 11648
                        },
                        "moduleReference": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "glo_M3_private",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 11651,
                          "end": 11665
                        },
                        "importKind": "value",
                        "start": 11624,
                        "end": 11666
                      }
                    ],
                    "start": 11547,
                    "end": 11676
                  },
                  "kind": "module",
                  "declare": false,
                  "global": false,
                  "start": 11537,
                  "end": 11676
                }
              ],
              "start": 11422,
              "end": 11682
            },
            "kind": "module",
            "declare": false,
            "global": false,
            "start": 11412,
            "end": 11682
          }
        ],
        "start": 10453,
        "end": 11684
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 10417,
      "end": 11684
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "anotherParseError",
        "raw": "\"anotherParseError\"",
        "start": 11701,
        "end": 11720
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
              "start": 11734,
              "end": 11736
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
                    "start": 11762,
                    "end": 11767
                  },
                  "body": {
                    "type": "TSModuleBlock",
                    "body": [],
                    "start": 11768,
                    "end": 11779
                  },
                  "kind": "module",
                  "declare": true,
                  "global": false,
                  "start": 11747,
                  "end": 11779
                }
              ],
              "start": 11737,
              "end": 11785
            },
            "kind": "module",
            "declare": false,
            "global": false,
            "start": 11727,
            "end": 11785
          },
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m2",
              "optional": false,
              "typeAnnotation": null,
              "start": 11798,
              "end": 11800
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
                    "start": 11818,
                    "end": 11824
                  },
                  "body": {
                    "type": "TSModuleBlock",
                    "body": [],
                    "start": 11825,
                    "end": 11836
                  },
                  "kind": "module",
                  "declare": false,
                  "global": false,
                  "start": 11811,
                  "end": 11836
                }
              ],
              "start": 11801,
              "end": 11842
            },
            "kind": "module",
            "declare": false,
            "global": false,
            "start": 11791,
            "end": 11842
          },
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Literal",
              "value": "abc3",
              "raw": "\"abc3\"",
              "start": 11854,
              "end": 11860
            },
            "body": {
              "type": "TSModuleBlock",
              "body": [],
              "start": 11861,
              "end": 11868
            },
            "kind": "module",
            "declare": false,
            "global": false,
            "start": 11847,
            "end": 11868
          }
        ],
        "start": 11721,
        "end": 11870
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 11686,
      "end": 11870
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "anotherParseError2",
        "raw": "\"anotherParseError2\"",
        "start": 11894,
        "end": 11914
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
              "start": 11928,
              "end": 11930
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
                    "start": 11956,
                    "end": 11961
                  },
                  "body": {
                    "type": "TSModuleBlock",
                    "body": [],
                    "start": 11962,
                    "end": 11973
                  },
                  "kind": "module",
                  "declare": true,
                  "global": false,
                  "start": 11941,
                  "end": 11973
                }
              ],
              "start": 11931,
              "end": 11979
            },
            "kind": "module",
            "declare": false,
            "global": false,
            "start": 11921,
            "end": 11979
          },
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m2",
              "optional": false,
              "typeAnnotation": null,
              "start": 11992,
              "end": 11994
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
                    "start": 12012,
                    "end": 12018
                  },
                  "body": {
                    "type": "TSModuleBlock",
                    "body": [],
                    "start": 12019,
                    "end": 12030
                  },
                  "kind": "module",
                  "declare": false,
                  "global": false,
                  "start": 12005,
                  "end": 12030
                }
              ],
              "start": 11995,
              "end": 12036
            },
            "kind": "module",
            "declare": false,
            "global": false,
            "start": 11985,
            "end": 12036
          },
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Literal",
              "value": "abc3",
              "raw": "\"abc3\"",
              "start": 12048,
              "end": 12054
            },
            "body": {
              "type": "TSModuleBlock",
              "body": [],
              "start": 12055,
              "end": 12062
            },
            "kind": "module",
            "declare": false,
            "global": false,
            "start": 12041,
            "end": 12062
          }
        ],
        "start": 11915,
        "end": 12064
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 11872,
      "end": 12064
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m2",
        "optional": false,
        "typeAnnotation": null,
        "start": 12073,
        "end": 12075
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
              "start": 12089,
              "end": 12091
            },
            "moduleReference": {
              "type": "TSExternalModuleReference",
              "expression": {
                "type": "Literal",
                "value": "use_glo_M1_public",
                "raw": "\"use_glo_M1_public\"",
                "start": 12102,
                "end": 12121
              },
              "start": 12094,
              "end": 12122
            },
            "importKind": "value",
            "start": 12082,
            "end": 12123
          },
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m4",
              "optional": false,
              "typeAnnotation": null,
              "start": 12135,
              "end": 12137
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
                        "start": 12152,
                        "end": 12153
                      },
                      "init": {
                        "type": "Literal",
                        "value": 10,
                        "raw": "10",
                        "start": 12156,
                        "end": 12158
                      },
                      "definite": false,
                      "start": 12152,
                      "end": 12158
                    }
                  ],
                  "declare": false,
                  "start": 12148,
                  "end": 12159
                },
                {
                  "type": "TSImportEqualsDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 12175,
                    "end": 12177
                  },
                  "moduleReference": {
                    "type": "TSExternalModuleReference",
                    "expression": {
                      "type": "Literal",
                      "value": "use_glo_M1_public",
                      "raw": "\"use_glo_M1_public\"",
                      "start": 12188,
                      "end": 12207
                    },
                    "start": 12180,
                    "end": 12208
                  },
                  "importKind": "value",
                  "start": 12168,
                  "end": 12209
                }
              ],
              "start": 12138,
              "end": 12215
            },
            "kind": "module",
            "declare": false,
            "global": false,
            "start": 12128,
            "end": 12215
          }
        ],
        "start": 12076,
        "end": 12218
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 12066,
      "end": 12218
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
          "start": 12234,
          "end": 12236
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
                "start": 12250,
                "end": 12252
              },
              "moduleReference": {
                "type": "TSExternalModuleReference",
                "expression": {
                  "type": "Literal",
                  "value": "use_glo_M1_public",
                  "raw": "\"use_glo_M1_public\"",
                  "start": 12263,
                  "end": 12282
                },
                "start": 12255,
                "end": 12283
              },
              "importKind": "value",
              "start": 12243,
              "end": 12284
            },
            {
              "type": "TSModuleDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "m4",
                "optional": false,
                "typeAnnotation": null,
                "start": 12296,
                "end": 12298
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
                          "start": 12313,
                          "end": 12314
                        },
                        "init": {
                          "type": "Literal",
                          "value": 10,
                          "raw": "10",
                          "start": 12317,
                          "end": 12319
                        },
                        "definite": false,
                        "start": 12313,
                        "end": 12319
                      }
                    ],
                    "declare": false,
                    "start": 12309,
                    "end": 12320
                  },
                  {
                    "type": "TSImportEqualsDeclaration",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 12336,
                      "end": 12338
                    },
                    "moduleReference": {
                      "type": "TSExternalModuleReference",
                      "expression": {
                        "type": "Literal",
                        "value": "use_glo_M1_public",
                        "raw": "\"use_glo_M1_public\"",
                        "start": 12349,
                        "end": 12368
                      },
                      "start": 12341,
                      "end": 12369
                    },
                    "importKind": "value",
                    "start": 12329,
                    "end": 12370
                  }
                ],
                "start": 12299,
                "end": 12376
              },
              "kind": "module",
              "declare": false,
              "global": false,
              "start": 12289,
              "end": 12376
            }
          ],
          "start": 12237,
          "end": 12379
        },
        "kind": "module",
        "declare": false,
        "global": false,
        "start": 12227,
        "end": 12379
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 12220,
      "end": 12379
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 12379
}
```
