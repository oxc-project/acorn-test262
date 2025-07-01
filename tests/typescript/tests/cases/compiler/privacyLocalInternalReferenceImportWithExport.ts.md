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
        "name": "m_private",
        "optional": false,
        "typeAnnotation": null,
        "start": 27,
        "end": 36
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
                "name": "c_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 56,
                "end": 65
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 66,
                "end": 73
              },
              "abstract": false,
              "declare": false,
              "start": 50,
              "end": 73
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 43,
            "end": 73
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSEnumDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "e_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 90,
                "end": 99
              },
              "body": {
                "type": "TSEnumBody",
                "members": [
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Happy",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 110,
                      "end": 115
                    },
                    "initializer": null,
                    "computed": false,
                    "start": 110,
                    "end": 115
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Grumpy",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 125,
                      "end": 131
                    },
                    "initializer": null,
                    "computed": false,
                    "start": 125,
                    "end": 131
                  }
                ],
                "start": 100,
                "end": 137
              },
              "const": false,
              "declare": false,
              "start": 85,
              "end": 137
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 78,
            "end": 137
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "f_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 158,
                "end": 167
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
                        "name": "c_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 191,
                        "end": 200
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 187,
                      "end": 202
                    },
                    "start": 180,
                    "end": 203
                  }
                ],
                "start": 170,
                "end": 209
              },
              "expression": false,
              "start": 149,
              "end": 209
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 142,
            "end": 209
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "v_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 225,
                    "end": 234
                  },
                  "init": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 241,
                      "end": 250
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 237,
                    "end": 252
                  },
                  "definite": false,
                  "start": 225,
                  "end": 252
                }
              ],
              "declare": false,
              "start": 221,
              "end": 253
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 214,
            "end": 253
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "i_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 275,
                "end": 284
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [],
                "start": 285,
                "end": 292
              },
              "declare": false,
              "start": 265,
              "end": 292
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 258,
            "end": 292
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSModuleDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "mi_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 311,
                "end": 321
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
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 345,
                        "end": 346
                      },
                      "typeParameters": null,
                      "superClass": null,
                      "superTypeArguments": null,
                      "implements": [],
                      "body": {
                        "type": "ClassBody",
                        "body": [],
                        "start": 347,
                        "end": 358
                      },
                      "abstract": false,
                      "declare": false,
                      "start": 339,
                      "end": 358
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 332,
                    "end": 358
                  }
                ],
                "start": 322,
                "end": 364
              },
              "kind": "module",
              "declare": false,
              "global": false,
              "start": 304,
              "end": 364
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 297,
            "end": 364
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSModuleDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "mu_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 383,
                "end": 393
              },
              "body": {
                "type": "TSModuleBlock",
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "declaration": {
                      "type": "TSInterfaceDeclaration",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "i",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 421,
                        "end": 422
                      },
                      "typeParameters": null,
                      "extends": [],
                      "body": {
                        "type": "TSInterfaceBody",
                        "body": [],
                        "start": 423,
                        "end": 434
                      },
                      "declare": false,
                      "start": 411,
                      "end": 434
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "type",
                    "attributes": [],
                    "start": 404,
                    "end": 434
                  }
                ],
                "start": 394,
                "end": 440
              },
              "kind": "module",
              "declare": false,
              "global": false,
              "start": 376,
              "end": 440
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 369,
            "end": 440
          }
        ],
        "start": 37,
        "end": 442
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 20,
      "end": 442
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSModuleDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "m_public",
          "optional": false,
          "typeAnnotation": null,
          "start": 477,
          "end": 485
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
                  "name": "c_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 505,
                  "end": 513
                },
                "typeParameters": null,
                "superClass": null,
                "superTypeArguments": null,
                "implements": [],
                "body": {
                  "type": "ClassBody",
                  "body": [],
                  "start": 514,
                  "end": 521
                },
                "abstract": false,
                "declare": false,
                "start": 499,
                "end": 521
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 492,
              "end": 521
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "TSEnumDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "e_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 538,
                  "end": 546
                },
                "body": {
                  "type": "TSEnumBody",
                  "members": [
                    {
                      "type": "TSEnumMember",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Happy",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 557,
                        "end": 562
                      },
                      "initializer": null,
                      "computed": false,
                      "start": 557,
                      "end": 562
                    },
                    {
                      "type": "TSEnumMember",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Grumpy",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 572,
                        "end": 578
                      },
                      "initializer": null,
                      "computed": false,
                      "start": 572,
                      "end": 578
                    }
                  ],
                  "start": 547,
                  "end": 584
                },
                "const": false,
                "declare": false,
                "start": 533,
                "end": 584
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 526,
              "end": 584
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "FunctionDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 605,
                  "end": 613
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
                          "name": "c_public",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 637,
                          "end": 645
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "start": 633,
                        "end": 647
                      },
                      "start": 626,
                      "end": 648
                    }
                  ],
                  "start": 616,
                  "end": 654
                },
                "expression": false,
                "start": 596,
                "end": 654
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 589,
              "end": 654
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "VariableDeclaration",
                "kind": "var",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "v_public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 670,
                      "end": 678
                    },
                    "init": {
                      "type": "Literal",
                      "value": 10,
                      "raw": "10",
                      "start": 681,
                      "end": 683
                    },
                    "definite": false,
                    "start": 670,
                    "end": 683
                  }
                ],
                "declare": false,
                "start": 666,
                "end": 684
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 659,
              "end": 684
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "TSInterfaceDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "i_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 706,
                  "end": 714
                },
                "typeParameters": null,
                "extends": [],
                "body": {
                  "type": "TSInterfaceBody",
                  "body": [],
                  "start": 715,
                  "end": 722
                },
                "declare": false,
                "start": 696,
                "end": 722
              },
              "specifiers": [],
              "source": null,
              "exportKind": "type",
              "attributes": [],
              "start": 689,
              "end": 722
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "TSModuleDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "mi_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 741,
                  "end": 750
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
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 774,
                          "end": 775
                        },
                        "typeParameters": null,
                        "superClass": null,
                        "superTypeArguments": null,
                        "implements": [],
                        "body": {
                          "type": "ClassBody",
                          "body": [],
                          "start": 776,
                          "end": 787
                        },
                        "abstract": false,
                        "declare": false,
                        "start": 768,
                        "end": 787
                      },
                      "specifiers": [],
                      "source": null,
                      "exportKind": "value",
                      "attributes": [],
                      "start": 761,
                      "end": 787
                    }
                  ],
                  "start": 751,
                  "end": 793
                },
                "kind": "module",
                "declare": false,
                "global": false,
                "start": 734,
                "end": 793
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 727,
              "end": 793
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "TSModuleDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "mu_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 812,
                  "end": 821
                },
                "body": {
                  "type": "TSModuleBlock",
                  "body": [
                    {
                      "type": "ExportNamedDeclaration",
                      "declaration": {
                        "type": "TSInterfaceDeclaration",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "i",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 849,
                          "end": 850
                        },
                        "typeParameters": null,
                        "extends": [],
                        "body": {
                          "type": "TSInterfaceBody",
                          "body": [],
                          "start": 851,
                          "end": 862
                        },
                        "declare": false,
                        "start": 839,
                        "end": 862
                      },
                      "specifiers": [],
                      "source": null,
                      "exportKind": "type",
                      "attributes": [],
                      "start": 832,
                      "end": 862
                    }
                  ],
                  "start": 822,
                  "end": 868
                },
                "kind": "module",
                "declare": false,
                "global": false,
                "start": 805,
                "end": 868
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 798,
              "end": 868
            }
          ],
          "start": 486,
          "end": 870
        },
        "kind": "module",
        "declare": false,
        "global": false,
        "start": 470,
        "end": 870
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 463,
      "end": 870
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSModuleDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "import_public",
          "optional": false,
          "typeAnnotation": null,
          "start": 886,
          "end": 899
        },
        "body": {
          "type": "TSModuleBlock",
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "TSImportEqualsDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "im_public_c_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 971,
                  "end": 990
                },
                "moduleReference": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 993,
                    "end": 1002
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1003,
                    "end": 1012
                  },
                  "start": 993,
                  "end": 1012
                },
                "importKind": "value",
                "start": 964,
                "end": 1013
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 957,
              "end": 1013
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "TSImportEqualsDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "im_public_e_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1032,
                  "end": 1051
                },
                "moduleReference": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1054,
                    "end": 1063
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "e_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1064,
                    "end": 1073
                  },
                  "start": 1054,
                  "end": 1073
                },
                "importKind": "value",
                "start": 1025,
                "end": 1074
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 1018,
              "end": 1074
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "TSImportEqualsDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "im_public_f_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1093,
                  "end": 1112
                },
                "moduleReference": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1115,
                    "end": 1124
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1125,
                    "end": 1134
                  },
                  "start": 1115,
                  "end": 1134
                },
                "importKind": "value",
                "start": 1086,
                "end": 1135
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 1079,
              "end": 1135
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "TSImportEqualsDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "im_public_v_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1154,
                  "end": 1173
                },
                "moduleReference": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1176,
                    "end": 1185
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "v_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1186,
                    "end": 1195
                  },
                  "start": 1176,
                  "end": 1195
                },
                "importKind": "value",
                "start": 1147,
                "end": 1196
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 1140,
              "end": 1196
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "TSImportEqualsDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "im_public_i_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1215,
                  "end": 1234
                },
                "moduleReference": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1237,
                    "end": 1246
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "i_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1247,
                    "end": 1256
                  },
                  "start": 1237,
                  "end": 1256
                },
                "importKind": "value",
                "start": 1208,
                "end": 1257
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 1201,
              "end": 1257
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "TSImportEqualsDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "im_public_mi_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1276,
                  "end": 1296
                },
                "moduleReference": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1299,
                    "end": 1308
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "mi_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1309,
                    "end": 1319
                  },
                  "start": 1299,
                  "end": 1319
                },
                "importKind": "value",
                "start": 1269,
                "end": 1320
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 1262,
              "end": 1320
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "TSImportEqualsDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "im_public_mu_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1339,
                  "end": 1359
                },
                "moduleReference": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1362,
                    "end": 1371
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "mu_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1372,
                    "end": 1382
                  },
                  "start": 1362,
                  "end": 1382
                },
                "importKind": "value",
                "start": 1332,
                "end": 1383
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 1325,
              "end": 1383
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
                    "name": "privateUse_im_public_c_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1431,
                    "end": 1461
                  },
                  "init": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "im_public_c_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1468,
                      "end": 1487
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 1464,
                    "end": 1489
                  },
                  "definite": false,
                  "start": 1431,
                  "end": 1489
                }
              ],
              "declare": false,
              "start": 1427,
              "end": 1490
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "VariableDeclaration",
                "kind": "var",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "publicUse_im_public_c_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1506,
                      "end": 1535
                    },
                    "init": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "im_public_c_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1542,
                        "end": 1561
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 1538,
                      "end": 1563
                    },
                    "definite": false,
                    "start": 1506,
                    "end": 1563
                  }
                ],
                "declare": false,
                "start": 1502,
                "end": 1564
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 1495,
              "end": 1564
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
                    "name": "privateUse_im_public_e_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1573,
                    "end": 1603
                  },
                  "init": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "im_public_e_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1606,
                      "end": 1625
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Happy",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1626,
                      "end": 1631
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1606,
                    "end": 1631
                  },
                  "definite": false,
                  "start": 1573,
                  "end": 1631
                }
              ],
              "declare": false,
              "start": 1569,
              "end": 1632
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "VariableDeclaration",
                "kind": "var",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "publicUse_im_public_e_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1648,
                      "end": 1677
                    },
                    "init": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "im_public_e_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1680,
                        "end": 1699
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Grumpy",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1700,
                        "end": 1706
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1680,
                      "end": 1706
                    },
                    "definite": false,
                    "start": 1648,
                    "end": 1706
                  }
                ],
                "declare": false,
                "start": 1644,
                "end": 1707
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 1637,
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
                    "name": "privateUse_im_public_f_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1716,
                    "end": 1746
                  },
                  "init": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "im_public_f_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1749,
                      "end": 1768
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 1749,
                    "end": 1770
                  },
                  "definite": false,
                  "start": 1716,
                  "end": 1770
                }
              ],
              "declare": false,
              "start": 1712,
              "end": 1771
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "VariableDeclaration",
                "kind": "var",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "publicUse_im_public_f_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1787,
                      "end": 1816
                    },
                    "init": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "im_public_f_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1819,
                        "end": 1838
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 1819,
                      "end": 1840
                    },
                    "definite": false,
                    "start": 1787,
                    "end": 1840
                  }
                ],
                "declare": false,
                "start": 1783,
                "end": 1841
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 1776,
              "end": 1841
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
                    "name": "privateUse_im_public_v_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1850,
                    "end": 1880
                  },
                  "init": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "im_public_v_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1883,
                    "end": 1902
                  },
                  "definite": false,
                  "start": 1850,
                  "end": 1902
                }
              ],
              "declare": false,
              "start": 1846,
              "end": 1903
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "VariableDeclaration",
                "kind": "var",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "publicUse_im_public_v_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1919,
                      "end": 1948
                    },
                    "init": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "im_public_v_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1951,
                      "end": 1970
                    },
                    "definite": false,
                    "start": 1919,
                    "end": 1970
                  }
                ],
                "declare": false,
                "start": 1915,
                "end": 1971
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 1908,
              "end": 1971
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
                    "name": "privateUse_im_public_i_private",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "im_public_i_private",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2012,
                          "end": 2031
                        },
                        "typeArguments": null,
                        "start": 2012,
                        "end": 2031
                      },
                      "start": 2010,
                      "end": 2031
                    },
                    "start": 1980,
                    "end": 2031
                  },
                  "init": null,
                  "definite": false,
                  "start": 1980,
                  "end": 2031
                }
              ],
              "declare": false,
              "start": 1976,
              "end": 2032
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "VariableDeclaration",
                "kind": "var",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "publicUse_im_public_i_private",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "im_public_i_private",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2079,
                            "end": 2098
                          },
                          "typeArguments": null,
                          "start": 2079,
                          "end": 2098
                        },
                        "start": 2077,
                        "end": 2098
                      },
                      "start": 2048,
                      "end": 2098
                    },
                    "init": null,
                    "definite": false,
                    "start": 2048,
                    "end": 2098
                  }
                ],
                "declare": false,
                "start": 2044,
                "end": 2099
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 2037,
              "end": 2099
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
                    "name": "privateUse_im_public_mi_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2108,
                    "end": 2139
                  },
                  "init": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "im_public_mi_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2146,
                        "end": 2166
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2167,
                        "end": 2168
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2146,
                      "end": 2168
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 2142,
                    "end": 2170
                  },
                  "definite": false,
                  "start": 2108,
                  "end": 2170
                }
              ],
              "declare": false,
              "start": 2104,
              "end": 2171
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "VariableDeclaration",
                "kind": "var",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "publicUse_im_public_mi_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2187,
                      "end": 2217
                    },
                    "init": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "im_public_mi_private",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2224,
                          "end": 2244
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2245,
                          "end": 2246
                        },
                        "optional": false,
                        "computed": false,
                        "start": 2224,
                        "end": 2246
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 2220,
                      "end": 2248
                    },
                    "definite": false,
                    "start": 2187,
                    "end": 2248
                  }
                ],
                "declare": false,
                "start": 2183,
                "end": 2249
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 2176,
              "end": 2249
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
                    "name": "privateUse_im_public_mu_private",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "TSQualifiedName",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "im_public_mu_private",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2291,
                            "end": 2311
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "i",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2312,
                            "end": 2313
                          },
                          "start": 2291,
                          "end": 2313
                        },
                        "typeArguments": null,
                        "start": 2291,
                        "end": 2313
                      },
                      "start": 2289,
                      "end": 2313
                    },
                    "start": 2258,
                    "end": 2313
                  },
                  "init": null,
                  "definite": false,
                  "start": 2258,
                  "end": 2313
                }
              ],
              "declare": false,
              "start": 2254,
              "end": 2314
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "VariableDeclaration",
                "kind": "var",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "publicUse_im_public_mu_private",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "TSQualifiedName",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "im_public_mu_private",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2362,
                              "end": 2382
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "i",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2383,
                              "end": 2384
                            },
                            "start": 2362,
                            "end": 2384
                          },
                          "typeArguments": null,
                          "start": 2362,
                          "end": 2384
                        },
                        "start": 2360,
                        "end": 2384
                      },
                      "start": 2330,
                      "end": 2384
                    },
                    "init": null,
                    "definite": false,
                    "start": 2330,
                    "end": 2384
                  }
                ],
                "declare": false,
                "start": 2326,
                "end": 2385
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 2319,
              "end": 2385
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "TSImportEqualsDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "im_public_c_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2459,
                  "end": 2477
                },
                "moduleReference": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2480,
                    "end": 2488
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2489,
                    "end": 2497
                  },
                  "start": 2480,
                  "end": 2497
                },
                "importKind": "value",
                "start": 2452,
                "end": 2498
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 2445,
              "end": 2498
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "TSImportEqualsDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "im_public_e_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2517,
                  "end": 2535
                },
                "moduleReference": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2538,
                    "end": 2546
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "e_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2547,
                    "end": 2555
                  },
                  "start": 2538,
                  "end": 2555
                },
                "importKind": "value",
                "start": 2510,
                "end": 2556
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 2503,
              "end": 2556
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "TSImportEqualsDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "im_public_f_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2575,
                  "end": 2593
                },
                "moduleReference": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2596,
                    "end": 2604
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2605,
                    "end": 2613
                  },
                  "start": 2596,
                  "end": 2613
                },
                "importKind": "value",
                "start": 2568,
                "end": 2614
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 2561,
              "end": 2614
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "TSImportEqualsDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "im_public_v_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2633,
                  "end": 2651
                },
                "moduleReference": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2654,
                    "end": 2662
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "v_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2663,
                    "end": 2671
                  },
                  "start": 2654,
                  "end": 2671
                },
                "importKind": "value",
                "start": 2626,
                "end": 2672
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 2619,
              "end": 2672
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "TSImportEqualsDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "im_public_i_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2691,
                  "end": 2709
                },
                "moduleReference": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2712,
                    "end": 2720
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "i_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2721,
                    "end": 2729
                  },
                  "start": 2712,
                  "end": 2729
                },
                "importKind": "value",
                "start": 2684,
                "end": 2730
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 2677,
              "end": 2730
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "TSImportEqualsDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "im_public_mi_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2749,
                  "end": 2768
                },
                "moduleReference": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2771,
                    "end": 2779
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "mi_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2780,
                    "end": 2789
                  },
                  "start": 2771,
                  "end": 2789
                },
                "importKind": "value",
                "start": 2742,
                "end": 2790
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 2735,
              "end": 2790
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "TSImportEqualsDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "im_public_mu_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2809,
                  "end": 2828
                },
                "moduleReference": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2831,
                    "end": 2839
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "mu_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2840,
                    "end": 2849
                  },
                  "start": 2831,
                  "end": 2849
                },
                "importKind": "value",
                "start": 2802,
                "end": 2850
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 2795,
              "end": 2850
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
                    "name": "privateUse_im_public_c_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2882,
                    "end": 2911
                  },
                  "init": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "im_public_c_public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2918,
                      "end": 2936
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 2914,
                    "end": 2938
                  },
                  "definite": false,
                  "start": 2882,
                  "end": 2938
                }
              ],
              "declare": false,
              "start": 2878,
              "end": 2939
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "VariableDeclaration",
                "kind": "var",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "publicUse_im_public_c_public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2955,
                      "end": 2983
                    },
                    "init": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "im_public_c_public",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2990,
                        "end": 3008
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 2986,
                      "end": 3010
                    },
                    "definite": false,
                    "start": 2955,
                    "end": 3010
                  }
                ],
                "declare": false,
                "start": 2951,
                "end": 3011
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 2944,
              "end": 3011
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
                    "name": "privateUse_im_public_e_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3020,
                    "end": 3049
                  },
                  "init": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "im_public_e_public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3052,
                      "end": 3070
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Happy",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3071,
                      "end": 3076
                    },
                    "optional": false,
                    "computed": false,
                    "start": 3052,
                    "end": 3076
                  },
                  "definite": false,
                  "start": 3020,
                  "end": 3076
                }
              ],
              "declare": false,
              "start": 3016,
              "end": 3077
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "VariableDeclaration",
                "kind": "var",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "publicUse_im_public_e_public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3093,
                      "end": 3121
                    },
                    "init": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "im_public_e_public",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3124,
                        "end": 3142
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Grumpy",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3143,
                        "end": 3149
                      },
                      "optional": false,
                      "computed": false,
                      "start": 3124,
                      "end": 3149
                    },
                    "definite": false,
                    "start": 3093,
                    "end": 3149
                  }
                ],
                "declare": false,
                "start": 3089,
                "end": 3150
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 3082,
              "end": 3150
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
                    "name": "privateUse_im_public_f_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3159,
                    "end": 3188
                  },
                  "init": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "im_public_f_public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3191,
                      "end": 3209
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 3191,
                    "end": 3211
                  },
                  "definite": false,
                  "start": 3159,
                  "end": 3211
                }
              ],
              "declare": false,
              "start": 3155,
              "end": 3212
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "VariableDeclaration",
                "kind": "var",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "publicUse_im_public_f_public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3228,
                      "end": 3256
                    },
                    "init": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "im_public_f_public",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3259,
                        "end": 3277
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 3259,
                      "end": 3279
                    },
                    "definite": false,
                    "start": 3228,
                    "end": 3279
                  }
                ],
                "declare": false,
                "start": 3224,
                "end": 3280
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 3217,
              "end": 3280
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
                    "name": "privateUse_im_public_v_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3289,
                    "end": 3318
                  },
                  "init": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "im_public_v_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3321,
                    "end": 3339
                  },
                  "definite": false,
                  "start": 3289,
                  "end": 3339
                }
              ],
              "declare": false,
              "start": 3285,
              "end": 3340
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "VariableDeclaration",
                "kind": "var",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "publicUse_im_public_v_public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3356,
                      "end": 3384
                    },
                    "init": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "im_public_v_public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3387,
                      "end": 3405
                    },
                    "definite": false,
                    "start": 3356,
                    "end": 3405
                  }
                ],
                "declare": false,
                "start": 3352,
                "end": 3406
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 3345,
              "end": 3406
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
                    "name": "privateUse_im_public_i_public",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "im_public_i_public",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3446,
                          "end": 3464
                        },
                        "typeArguments": null,
                        "start": 3446,
                        "end": 3464
                      },
                      "start": 3444,
                      "end": 3464
                    },
                    "start": 3415,
                    "end": 3464
                  },
                  "init": null,
                  "definite": false,
                  "start": 3415,
                  "end": 3464
                }
              ],
              "declare": false,
              "start": 3411,
              "end": 3465
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "VariableDeclaration",
                "kind": "var",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "publicUse_im_public_i_public",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "im_public_i_public",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3511,
                            "end": 3529
                          },
                          "typeArguments": null,
                          "start": 3511,
                          "end": 3529
                        },
                        "start": 3509,
                        "end": 3529
                      },
                      "start": 3481,
                      "end": 3529
                    },
                    "init": null,
                    "definite": false,
                    "start": 3481,
                    "end": 3529
                  }
                ],
                "declare": false,
                "start": 3477,
                "end": 3530
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 3470,
              "end": 3530
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
                    "name": "privateUse_im_public_mi_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3539,
                    "end": 3569
                  },
                  "init": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "im_public_mi_public",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3576,
                        "end": 3595
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3596,
                        "end": 3597
                      },
                      "optional": false,
                      "computed": false,
                      "start": 3576,
                      "end": 3597
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 3572,
                    "end": 3599
                  },
                  "definite": false,
                  "start": 3539,
                  "end": 3599
                }
              ],
              "declare": false,
              "start": 3535,
              "end": 3600
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "VariableDeclaration",
                "kind": "var",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "publicUse_im_public_mi_public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3616,
                      "end": 3645
                    },
                    "init": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "im_public_mi_public",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3652,
                          "end": 3671
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3672,
                          "end": 3673
                        },
                        "optional": false,
                        "computed": false,
                        "start": 3652,
                        "end": 3673
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 3648,
                      "end": 3675
                    },
                    "definite": false,
                    "start": 3616,
                    "end": 3675
                  }
                ],
                "declare": false,
                "start": 3612,
                "end": 3676
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 3605,
              "end": 3676
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
                    "name": "privateUse_im_public_mu_public",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "TSQualifiedName",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "im_public_mu_public",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3717,
                            "end": 3736
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "i",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3737,
                            "end": 3738
                          },
                          "start": 3717,
                          "end": 3738
                        },
                        "typeArguments": null,
                        "start": 3717,
                        "end": 3738
                      },
                      "start": 3715,
                      "end": 3738
                    },
                    "start": 3685,
                    "end": 3738
                  },
                  "init": null,
                  "definite": false,
                  "start": 3685,
                  "end": 3738
                }
              ],
              "declare": false,
              "start": 3681,
              "end": 3739
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "VariableDeclaration",
                "kind": "var",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "publicUse_im_public_mu_public",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "TSQualifiedName",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "im_public_mu_public",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3786,
                              "end": 3805
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "i",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3806,
                              "end": 3807
                            },
                            "start": 3786,
                            "end": 3807
                          },
                          "typeArguments": null,
                          "start": 3786,
                          "end": 3807
                        },
                        "start": 3784,
                        "end": 3807
                      },
                      "start": 3755,
                      "end": 3807
                    },
                    "init": null,
                    "definite": false,
                    "start": 3755,
                    "end": 3807
                  }
                ],
                "declare": false,
                "start": 3751,
                "end": 3808
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 3744,
              "end": 3808
            }
          ],
          "start": 900,
          "end": 3810
        },
        "kind": "module",
        "declare": false,
        "global": false,
        "start": 879,
        "end": 3810
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 872,
      "end": 3810
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "import_private",
        "optional": false,
        "typeAnnotation": null,
        "start": 3819,
        "end": 3833
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSImportEqualsDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "im_private_c_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 3908,
                "end": 3928
              },
              "moduleReference": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3931,
                  "end": 3940
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3941,
                  "end": 3950
                },
                "start": 3931,
                "end": 3950
              },
              "importKind": "value",
              "start": 3901,
              "end": 3951
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 3894,
            "end": 3951
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSImportEqualsDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "im_private_e_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 3970,
                "end": 3990
              },
              "moduleReference": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3993,
                  "end": 4002
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "e_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4003,
                  "end": 4012
                },
                "start": 3993,
                "end": 4012
              },
              "importKind": "value",
              "start": 3963,
              "end": 4013
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 3956,
            "end": 4013
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSImportEqualsDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "im_private_f_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 4032,
                "end": 4052
              },
              "moduleReference": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4055,
                  "end": 4064
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4065,
                  "end": 4074
                },
                "start": 4055,
                "end": 4074
              },
              "importKind": "value",
              "start": 4025,
              "end": 4075
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 4018,
            "end": 4075
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSImportEqualsDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "im_private_v_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 4094,
                "end": 4114
              },
              "moduleReference": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4117,
                  "end": 4126
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4127,
                  "end": 4136
                },
                "start": 4117,
                "end": 4136
              },
              "importKind": "value",
              "start": 4087,
              "end": 4137
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 4080,
            "end": 4137
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSImportEqualsDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "im_private_i_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 4156,
                "end": 4176
              },
              "moduleReference": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4179,
                  "end": 4188
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "i_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4189,
                  "end": 4198
                },
                "start": 4179,
                "end": 4198
              },
              "importKind": "value",
              "start": 4149,
              "end": 4199
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 4142,
            "end": 4199
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSImportEqualsDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "im_private_mi_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 4218,
                "end": 4239
              },
              "moduleReference": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4242,
                  "end": 4251
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "mi_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4252,
                  "end": 4262
                },
                "start": 4242,
                "end": 4262
              },
              "importKind": "value",
              "start": 4211,
              "end": 4263
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 4204,
            "end": 4263
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSImportEqualsDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "im_private_mu_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 4282,
                "end": 4303
              },
              "moduleReference": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4306,
                  "end": 4315
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "mu_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4316,
                  "end": 4326
                },
                "start": 4306,
                "end": 4326
              },
              "importKind": "value",
              "start": 4275,
              "end": 4327
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
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
                  "name": "privateUse_im_private_c_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4365,
                  "end": 4396
                },
                "init": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "im_private_c_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4403,
                    "end": 4423
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "start": 4399,
                  "end": 4425
                },
                "definite": false,
                "start": 4365,
                "end": 4425
              }
            ],
            "declare": false,
            "start": 4361,
            "end": 4426
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "publicUse_im_private_c_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4442,
                    "end": 4472
                  },
                  "init": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "im_private_c_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4479,
                      "end": 4499
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 4475,
                    "end": 4501
                  },
                  "definite": false,
                  "start": 4442,
                  "end": 4501
                }
              ],
              "declare": false,
              "start": 4438,
              "end": 4502
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 4431,
            "end": 4502
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
                  "name": "privateUse_im_private_e_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4511,
                  "end": 4542
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "im_private_e_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4545,
                    "end": 4565
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Happy",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4566,
                    "end": 4571
                  },
                  "optional": false,
                  "computed": false,
                  "start": 4545,
                  "end": 4571
                },
                "definite": false,
                "start": 4511,
                "end": 4571
              }
            ],
            "declare": false,
            "start": 4507,
            "end": 4572
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "publicUse_im_private_e_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4588,
                    "end": 4618
                  },
                  "init": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "im_private_e_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4621,
                      "end": 4641
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Grumpy",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4642,
                      "end": 4648
                    },
                    "optional": false,
                    "computed": false,
                    "start": 4621,
                    "end": 4648
                  },
                  "definite": false,
                  "start": 4588,
                  "end": 4648
                }
              ],
              "declare": false,
              "start": 4584,
              "end": 4649
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 4577,
            "end": 4649
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
                  "name": "privateUse_im_private_f_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4658,
                  "end": 4689
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "im_private_f_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4692,
                    "end": 4712
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 4692,
                  "end": 4714
                },
                "definite": false,
                "start": 4658,
                "end": 4714
              }
            ],
            "declare": false,
            "start": 4654,
            "end": 4715
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "publicUse_im_private_f_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4731,
                    "end": 4761
                  },
                  "init": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "im_private_f_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4764,
                      "end": 4784
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 4764,
                    "end": 4786
                  },
                  "definite": false,
                  "start": 4731,
                  "end": 4786
                }
              ],
              "declare": false,
              "start": 4727,
              "end": 4787
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 4720,
            "end": 4787
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
                  "name": "privateUse_im_private_v_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4796,
                  "end": 4827
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "im_private_v_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4830,
                  "end": 4850
                },
                "definite": false,
                "start": 4796,
                "end": 4850
              }
            ],
            "declare": false,
            "start": 4792,
            "end": 4851
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "publicUse_im_private_v_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4867,
                    "end": 4897
                  },
                  "init": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "im_private_v_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4900,
                    "end": 4920
                  },
                  "definite": false,
                  "start": 4867,
                  "end": 4920
                }
              ],
              "declare": false,
              "start": 4863,
              "end": 4921
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 4856,
            "end": 4921
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
                  "name": "privateUse_im_private_i_private",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "im_private_i_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4963,
                        "end": 4983
                      },
                      "typeArguments": null,
                      "start": 4963,
                      "end": 4983
                    },
                    "start": 4961,
                    "end": 4983
                  },
                  "start": 4930,
                  "end": 4983
                },
                "init": null,
                "definite": false,
                "start": 4930,
                "end": 4983
              }
            ],
            "declare": false,
            "start": 4926,
            "end": 4984
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "publicUse_im_private_i_private",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "im_private_i_private",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5032,
                          "end": 5052
                        },
                        "typeArguments": null,
                        "start": 5032,
                        "end": 5052
                      },
                      "start": 5030,
                      "end": 5052
                    },
                    "start": 5000,
                    "end": 5052
                  },
                  "init": null,
                  "definite": false,
                  "start": 5000,
                  "end": 5052
                }
              ],
              "declare": false,
              "start": 4996,
              "end": 5053
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 4989,
            "end": 5053
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
                  "name": "privateUse_im_private_mi_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5062,
                  "end": 5094
                },
                "init": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "im_private_mi_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5101,
                      "end": 5122
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5123,
                      "end": 5124
                    },
                    "optional": false,
                    "computed": false,
                    "start": 5101,
                    "end": 5124
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "start": 5097,
                  "end": 5126
                },
                "definite": false,
                "start": 5062,
                "end": 5126
              }
            ],
            "declare": false,
            "start": 5058,
            "end": 5127
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "publicUse_im_private_mi_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5143,
                    "end": 5174
                  },
                  "init": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "im_private_mi_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5181,
                        "end": 5202
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5203,
                        "end": 5204
                      },
                      "optional": false,
                      "computed": false,
                      "start": 5181,
                      "end": 5204
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 5177,
                    "end": 5206
                  },
                  "definite": false,
                  "start": 5143,
                  "end": 5206
                }
              ],
              "declare": false,
              "start": 5139,
              "end": 5207
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 5132,
            "end": 5207
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
                  "name": "privateUse_im_private_mu_private",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "TSQualifiedName",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "im_private_mu_private",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5250,
                          "end": 5271
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "i",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5272,
                          "end": 5273
                        },
                        "start": 5250,
                        "end": 5273
                      },
                      "typeArguments": null,
                      "start": 5250,
                      "end": 5273
                    },
                    "start": 5248,
                    "end": 5273
                  },
                  "start": 5216,
                  "end": 5273
                },
                "init": null,
                "definite": false,
                "start": 5216,
                "end": 5273
              }
            ],
            "declare": false,
            "start": 5212,
            "end": 5274
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "publicUse_im_private_mu_private",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "TSQualifiedName",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "im_private_mu_private",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 5323,
                            "end": 5344
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "i",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 5345,
                            "end": 5346
                          },
                          "start": 5323,
                          "end": 5346
                        },
                        "typeArguments": null,
                        "start": 5323,
                        "end": 5346
                      },
                      "start": 5321,
                      "end": 5346
                    },
                    "start": 5290,
                    "end": 5346
                  },
                  "init": null,
                  "definite": false,
                  "start": 5290,
                  "end": 5346
                }
              ],
              "declare": false,
              "start": 5286,
              "end": 5347
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 5279,
            "end": 5347
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSImportEqualsDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "im_private_c_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 5419,
                "end": 5438
              },
              "moduleReference": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5441,
                  "end": 5449
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5450,
                  "end": 5458
                },
                "start": 5441,
                "end": 5458
              },
              "importKind": "value",
              "start": 5412,
              "end": 5459
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 5405,
            "end": 5459
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSImportEqualsDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "im_private_e_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 5478,
                "end": 5497
              },
              "moduleReference": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5500,
                  "end": 5508
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "e_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5509,
                  "end": 5517
                },
                "start": 5500,
                "end": 5517
              },
              "importKind": "value",
              "start": 5471,
              "end": 5518
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 5464,
            "end": 5518
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSImportEqualsDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "im_private_f_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 5537,
                "end": 5556
              },
              "moduleReference": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5559,
                  "end": 5567
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5568,
                  "end": 5576
                },
                "start": 5559,
                "end": 5576
              },
              "importKind": "value",
              "start": 5530,
              "end": 5577
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 5523,
            "end": 5577
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSImportEqualsDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "im_private_v_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 5596,
                "end": 5615
              },
              "moduleReference": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5618,
                  "end": 5626
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5627,
                  "end": 5635
                },
                "start": 5618,
                "end": 5635
              },
              "importKind": "value",
              "start": 5589,
              "end": 5636
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 5582,
            "end": 5636
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSImportEqualsDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "im_private_i_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 5655,
                "end": 5674
              },
              "moduleReference": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5677,
                  "end": 5685
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "i_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5686,
                  "end": 5694
                },
                "start": 5677,
                "end": 5694
              },
              "importKind": "value",
              "start": 5648,
              "end": 5695
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 5641,
            "end": 5695
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSImportEqualsDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "im_private_mi_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 5714,
                "end": 5734
              },
              "moduleReference": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5737,
                  "end": 5745
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "mi_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5746,
                  "end": 5755
                },
                "start": 5737,
                "end": 5755
              },
              "importKind": "value",
              "start": 5707,
              "end": 5756
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 5700,
            "end": 5756
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSImportEqualsDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "im_private_mu_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 5775,
                "end": 5795
              },
              "moduleReference": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5798,
                  "end": 5806
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "mu_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5807,
                  "end": 5816
                },
                "start": 5798,
                "end": 5816
              },
              "importKind": "value",
              "start": 5768,
              "end": 5817
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 5761,
            "end": 5817
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
                  "name": "privateUse_im_private_c_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5868,
                  "end": 5898
                },
                "init": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "im_private_c_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5905,
                    "end": 5924
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "start": 5901,
                  "end": 5926
                },
                "definite": false,
                "start": 5868,
                "end": 5926
              }
            ],
            "declare": false,
            "start": 5864,
            "end": 5927
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "publicUse_im_private_c_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5943,
                    "end": 5972
                  },
                  "init": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "im_private_c_public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5979,
                      "end": 5998
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 5975,
                    "end": 6000
                  },
                  "definite": false,
                  "start": 5943,
                  "end": 6000
                }
              ],
              "declare": false,
              "start": 5939,
              "end": 6001
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 5932,
            "end": 6001
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
                  "name": "privateUse_im_private_e_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6010,
                  "end": 6040
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "im_private_e_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6043,
                    "end": 6062
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Happy",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6063,
                    "end": 6068
                  },
                  "optional": false,
                  "computed": false,
                  "start": 6043,
                  "end": 6068
                },
                "definite": false,
                "start": 6010,
                "end": 6068
              }
            ],
            "declare": false,
            "start": 6006,
            "end": 6069
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "publicUse_im_private_e_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6085,
                    "end": 6114
                  },
                  "init": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "im_private_e_public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6117,
                      "end": 6136
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Grumpy",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6137,
                      "end": 6143
                    },
                    "optional": false,
                    "computed": false,
                    "start": 6117,
                    "end": 6143
                  },
                  "definite": false,
                  "start": 6085,
                  "end": 6143
                }
              ],
              "declare": false,
              "start": 6081,
              "end": 6144
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 6074,
            "end": 6144
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
                  "name": "privateUse_im_private_f_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6153,
                  "end": 6183
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "im_private_f_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6186,
                    "end": 6205
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 6186,
                  "end": 6207
                },
                "definite": false,
                "start": 6153,
                "end": 6207
              }
            ],
            "declare": false,
            "start": 6149,
            "end": 6208
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "publicUse_im_private_f_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6224,
                    "end": 6253
                  },
                  "init": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "im_private_f_public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6256,
                      "end": 6275
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 6256,
                    "end": 6277
                  },
                  "definite": false,
                  "start": 6224,
                  "end": 6277
                }
              ],
              "declare": false,
              "start": 6220,
              "end": 6278
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 6213,
            "end": 6278
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
                  "name": "privateUse_im_private_v_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6287,
                  "end": 6317
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "im_private_v_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6320,
                  "end": 6339
                },
                "definite": false,
                "start": 6287,
                "end": 6339
              }
            ],
            "declare": false,
            "start": 6283,
            "end": 6340
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "publicUse_im_private_v_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6356,
                    "end": 6385
                  },
                  "init": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "im_private_v_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6388,
                    "end": 6407
                  },
                  "definite": false,
                  "start": 6356,
                  "end": 6407
                }
              ],
              "declare": false,
              "start": 6352,
              "end": 6408
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 6345,
            "end": 6408
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
                  "name": "privateUse_im_private_i_public",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "im_private_i_public",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 6449,
                        "end": 6468
                      },
                      "typeArguments": null,
                      "start": 6449,
                      "end": 6468
                    },
                    "start": 6447,
                    "end": 6468
                  },
                  "start": 6417,
                  "end": 6468
                },
                "init": null,
                "definite": false,
                "start": 6417,
                "end": 6468
              }
            ],
            "declare": false,
            "start": 6413,
            "end": 6469
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "publicUse_im_private_i_public",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "im_private_i_public",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 6516,
                          "end": 6535
                        },
                        "typeArguments": null,
                        "start": 6516,
                        "end": 6535
                      },
                      "start": 6514,
                      "end": 6535
                    },
                    "start": 6485,
                    "end": 6535
                  },
                  "init": null,
                  "definite": false,
                  "start": 6485,
                  "end": 6535
                }
              ],
              "declare": false,
              "start": 6481,
              "end": 6536
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 6474,
            "end": 6536
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
                  "name": "privateUse_im_private_mi_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6545,
                  "end": 6576
                },
                "init": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "im_private_mi_public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6583,
                      "end": 6603
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6604,
                      "end": 6605
                    },
                    "optional": false,
                    "computed": false,
                    "start": 6583,
                    "end": 6605
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "start": 6579,
                  "end": 6607
                },
                "definite": false,
                "start": 6545,
                "end": 6607
              }
            ],
            "declare": false,
            "start": 6541,
            "end": 6608
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "publicUse_im_private_mi_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6624,
                    "end": 6654
                  },
                  "init": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "im_private_mi_public",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 6661,
                        "end": 6681
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 6682,
                        "end": 6683
                      },
                      "optional": false,
                      "computed": false,
                      "start": 6661,
                      "end": 6683
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 6657,
                    "end": 6685
                  },
                  "definite": false,
                  "start": 6624,
                  "end": 6685
                }
              ],
              "declare": false,
              "start": 6620,
              "end": 6686
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 6613,
            "end": 6686
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
                  "name": "privateUse_im_private_mu_public",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "TSQualifiedName",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "im_private_mu_public",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 6728,
                          "end": 6748
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "i",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 6749,
                          "end": 6750
                        },
                        "start": 6728,
                        "end": 6750
                      },
                      "typeArguments": null,
                      "start": 6728,
                      "end": 6750
                    },
                    "start": 6726,
                    "end": 6750
                  },
                  "start": 6695,
                  "end": 6750
                },
                "init": null,
                "definite": false,
                "start": 6695,
                "end": 6750
              }
            ],
            "declare": false,
            "start": 6691,
            "end": 6751
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "publicUse_im_private_mu_public",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "TSQualifiedName",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "im_private_mu_public",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 6799,
                            "end": 6819
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "i",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 6820,
                            "end": 6821
                          },
                          "start": 6799,
                          "end": 6821
                        },
                        "typeArguments": null,
                        "start": 6799,
                        "end": 6821
                      },
                      "start": 6797,
                      "end": 6821
                    },
                    "start": 6767,
                    "end": 6821
                  },
                  "init": null,
                  "definite": false,
                  "start": 6767,
                  "end": 6821
                }
              ],
              "declare": false,
              "start": 6763,
              "end": 6822
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 6756,
            "end": 6822
          }
        ],
        "start": 3834,
        "end": 6824
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 3812,
      "end": 6824
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 20,
  "end": 6824
}
```
