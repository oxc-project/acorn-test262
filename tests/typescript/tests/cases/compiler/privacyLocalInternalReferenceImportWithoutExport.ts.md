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
              "type": "TSImportEqualsDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "im_private_c_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 967,
                "end": 987
              },
              "moduleReference": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 990,
                  "end": 999
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1000,
                  "end": 1009
                },
                "start": 990,
                "end": 1009
              },
              "importKind": "value",
              "start": 960,
              "end": 1010
            },
            {
              "type": "TSImportEqualsDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "im_private_e_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 1022,
                "end": 1042
              },
              "moduleReference": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1045,
                  "end": 1054
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "e_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1055,
                  "end": 1064
                },
                "start": 1045,
                "end": 1064
              },
              "importKind": "value",
              "start": 1015,
              "end": 1065
            },
            {
              "type": "TSImportEqualsDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "im_private_f_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 1077,
                "end": 1097
              },
              "moduleReference": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1100,
                  "end": 1109
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1110,
                  "end": 1119
                },
                "start": 1100,
                "end": 1119
              },
              "importKind": "value",
              "start": 1070,
              "end": 1120
            },
            {
              "type": "TSImportEqualsDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "im_private_v_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 1132,
                "end": 1152
              },
              "moduleReference": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1155,
                  "end": 1164
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1165,
                  "end": 1174
                },
                "start": 1155,
                "end": 1174
              },
              "importKind": "value",
              "start": 1125,
              "end": 1175
            },
            {
              "type": "TSImportEqualsDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "im_private_i_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 1187,
                "end": 1207
              },
              "moduleReference": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1210,
                  "end": 1219
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "i_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1220,
                  "end": 1229
                },
                "start": 1210,
                "end": 1229
              },
              "importKind": "value",
              "start": 1180,
              "end": 1230
            },
            {
              "type": "TSImportEqualsDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "im_private_mi_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 1242,
                "end": 1263
              },
              "moduleReference": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1266,
                  "end": 1275
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "mi_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1276,
                  "end": 1286
                },
                "start": 1266,
                "end": 1286
              },
              "importKind": "value",
              "start": 1235,
              "end": 1287
            },
            {
              "type": "TSImportEqualsDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "im_private_mu_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 1299,
                "end": 1320
              },
              "moduleReference": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1323,
                  "end": 1332
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "mu_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1333,
                  "end": 1343
                },
                "start": 1323,
                "end": 1343
              },
              "importKind": "value",
              "start": 1292,
              "end": 1344
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
                    "start": 1382,
                    "end": 1413
                  },
                  "init": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "im_private_c_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1420,
                      "end": 1440
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 1416,
                    "end": 1442
                  },
                  "definite": false,
                  "start": 1382,
                  "end": 1442
                }
              ],
              "declare": false,
              "start": 1378,
              "end": 1443
            },
            {
              "type": "ExportNamedDeclaration",
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
                      "start": 1459,
                      "end": 1489
                    },
                    "init": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "im_private_c_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1496,
                        "end": 1516
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 1492,
                      "end": 1518
                    },
                    "definite": false,
                    "start": 1459,
                    "end": 1518
                  }
                ],
                "declare": false,
                "start": 1455,
                "end": 1519
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 1448,
              "end": 1519
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
                    "start": 1528,
                    "end": 1559
                  },
                  "init": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "im_private_e_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1562,
                      "end": 1582
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Happy",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1583,
                      "end": 1588
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1562,
                    "end": 1588
                  },
                  "definite": false,
                  "start": 1528,
                  "end": 1588
                }
              ],
              "declare": false,
              "start": 1524,
              "end": 1589
            },
            {
              "type": "ExportNamedDeclaration",
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
                      "start": 1605,
                      "end": 1635
                    },
                    "init": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "im_private_e_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1638,
                        "end": 1658
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Grumpy",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1659,
                        "end": 1665
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1638,
                      "end": 1665
                    },
                    "definite": false,
                    "start": 1605,
                    "end": 1665
                  }
                ],
                "declare": false,
                "start": 1601,
                "end": 1666
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 1594,
              "end": 1666
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
                    "start": 1675,
                    "end": 1706
                  },
                  "init": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "im_private_f_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1709,
                      "end": 1729
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 1709,
                    "end": 1731
                  },
                  "definite": false,
                  "start": 1675,
                  "end": 1731
                }
              ],
              "declare": false,
              "start": 1671,
              "end": 1732
            },
            {
              "type": "ExportNamedDeclaration",
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
                      "start": 1748,
                      "end": 1778
                    },
                    "init": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "im_private_f_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1781,
                        "end": 1801
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 1781,
                      "end": 1803
                    },
                    "definite": false,
                    "start": 1748,
                    "end": 1803
                  }
                ],
                "declare": false,
                "start": 1744,
                "end": 1804
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 1737,
              "end": 1804
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
                    "start": 1813,
                    "end": 1844
                  },
                  "init": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "im_private_v_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1847,
                    "end": 1867
                  },
                  "definite": false,
                  "start": 1813,
                  "end": 1867
                }
              ],
              "declare": false,
              "start": 1809,
              "end": 1868
            },
            {
              "type": "ExportNamedDeclaration",
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
                      "start": 1884,
                      "end": 1914
                    },
                    "init": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "im_private_v_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1917,
                      "end": 1937
                    },
                    "definite": false,
                    "start": 1884,
                    "end": 1937
                  }
                ],
                "declare": false,
                "start": 1880,
                "end": 1938
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 1873,
              "end": 1938
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
                          "start": 1980,
                          "end": 2000
                        },
                        "typeArguments": null,
                        "start": 1980,
                        "end": 2000
                      },
                      "start": 1978,
                      "end": 2000
                    },
                    "start": 1947,
                    "end": 2000
                  },
                  "init": null,
                  "definite": false,
                  "start": 1947,
                  "end": 2000
                }
              ],
              "declare": false,
              "start": 1943,
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
                            "start": 2049,
                            "end": 2069
                          },
                          "typeArguments": null,
                          "start": 2049,
                          "end": 2069
                        },
                        "start": 2047,
                        "end": 2069
                      },
                      "start": 2017,
                      "end": 2069
                    },
                    "init": null,
                    "definite": false,
                    "start": 2017,
                    "end": 2069
                  }
                ],
                "declare": false,
                "start": 2013,
                "end": 2070
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 2006,
              "end": 2070
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
                    "start": 2079,
                    "end": 2111
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
                        "start": 2118,
                        "end": 2139
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2140,
                        "end": 2141
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2118,
                      "end": 2141
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 2114,
                    "end": 2143
                  },
                  "definite": false,
                  "start": 2079,
                  "end": 2143
                }
              ],
              "declare": false,
              "start": 2075,
              "end": 2144
            },
            {
              "type": "ExportNamedDeclaration",
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
                      "start": 2160,
                      "end": 2191
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
                          "start": 2198,
                          "end": 2219
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2220,
                          "end": 2221
                        },
                        "optional": false,
                        "computed": false,
                        "start": 2198,
                        "end": 2221
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 2194,
                      "end": 2223
                    },
                    "definite": false,
                    "start": 2160,
                    "end": 2223
                  }
                ],
                "declare": false,
                "start": 2156,
                "end": 2224
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 2149,
              "end": 2224
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
                            "start": 2267,
                            "end": 2288
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "i",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2289,
                            "end": 2290
                          },
                          "start": 2267,
                          "end": 2290
                        },
                        "typeArguments": null,
                        "start": 2267,
                        "end": 2290
                      },
                      "start": 2265,
                      "end": 2290
                    },
                    "start": 2233,
                    "end": 2290
                  },
                  "init": null,
                  "definite": false,
                  "start": 2233,
                  "end": 2290
                }
              ],
              "declare": false,
              "start": 2229,
              "end": 2291
            },
            {
              "type": "ExportNamedDeclaration",
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
                              "start": 2340,
                              "end": 2361
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "i",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2362,
                              "end": 2363
                            },
                            "start": 2340,
                            "end": 2363
                          },
                          "typeArguments": null,
                          "start": 2340,
                          "end": 2363
                        },
                        "start": 2338,
                        "end": 2363
                      },
                      "start": 2307,
                      "end": 2363
                    },
                    "init": null,
                    "definite": false,
                    "start": 2307,
                    "end": 2363
                  }
                ],
                "declare": false,
                "start": 2303,
                "end": 2364
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 2296,
              "end": 2364
            },
            {
              "type": "TSImportEqualsDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "im_private_c_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 2431,
                "end": 2450
              },
              "moduleReference": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2453,
                  "end": 2461
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2462,
                  "end": 2470
                },
                "start": 2453,
                "end": 2470
              },
              "importKind": "value",
              "start": 2424,
              "end": 2471
            },
            {
              "type": "TSImportEqualsDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "im_private_e_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 2483,
                "end": 2502
              },
              "moduleReference": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2505,
                  "end": 2513
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "e_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2514,
                  "end": 2522
                },
                "start": 2505,
                "end": 2522
              },
              "importKind": "value",
              "start": 2476,
              "end": 2523
            },
            {
              "type": "TSImportEqualsDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "im_private_f_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 2535,
                "end": 2554
              },
              "moduleReference": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2557,
                  "end": 2565
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2566,
                  "end": 2574
                },
                "start": 2557,
                "end": 2574
              },
              "importKind": "value",
              "start": 2528,
              "end": 2575
            },
            {
              "type": "TSImportEqualsDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "im_private_v_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 2587,
                "end": 2606
              },
              "moduleReference": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2609,
                  "end": 2617
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2618,
                  "end": 2626
                },
                "start": 2609,
                "end": 2626
              },
              "importKind": "value",
              "start": 2580,
              "end": 2627
            },
            {
              "type": "TSImportEqualsDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "im_private_i_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 2639,
                "end": 2658
              },
              "moduleReference": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2661,
                  "end": 2669
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "i_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2670,
                  "end": 2678
                },
                "start": 2661,
                "end": 2678
              },
              "importKind": "value",
              "start": 2632,
              "end": 2679
            },
            {
              "type": "TSImportEqualsDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "im_private_mi_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 2691,
                "end": 2711
              },
              "moduleReference": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2714,
                  "end": 2722
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "mi_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2723,
                  "end": 2732
                },
                "start": 2714,
                "end": 2732
              },
              "importKind": "value",
              "start": 2684,
              "end": 2733
            },
            {
              "type": "TSImportEqualsDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "im_private_mu_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 2745,
                "end": 2765
              },
              "moduleReference": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2768,
                  "end": 2776
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "mu_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2777,
                  "end": 2786
                },
                "start": 2768,
                "end": 2786
              },
              "importKind": "value",
              "start": 2738,
              "end": 2787
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
                    "start": 2825,
                    "end": 2855
                  },
                  "init": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "im_private_c_public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2862,
                      "end": 2881
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 2858,
                    "end": 2883
                  },
                  "definite": false,
                  "start": 2825,
                  "end": 2883
                }
              ],
              "declare": false,
              "start": 2821,
              "end": 2884
            },
            {
              "type": "ExportNamedDeclaration",
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
                      "start": 2900,
                      "end": 2929
                    },
                    "init": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "im_private_c_public",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2936,
                        "end": 2955
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 2932,
                      "end": 2957
                    },
                    "definite": false,
                    "start": 2900,
                    "end": 2957
                  }
                ],
                "declare": false,
                "start": 2896,
                "end": 2958
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 2889,
              "end": 2958
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
                    "start": 2967,
                    "end": 2997
                  },
                  "init": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "im_private_e_public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3000,
                      "end": 3019
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Happy",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3020,
                      "end": 3025
                    },
                    "optional": false,
                    "computed": false,
                    "start": 3000,
                    "end": 3025
                  },
                  "definite": false,
                  "start": 2967,
                  "end": 3025
                }
              ],
              "declare": false,
              "start": 2963,
              "end": 3026
            },
            {
              "type": "ExportNamedDeclaration",
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
                      "start": 3042,
                      "end": 3071
                    },
                    "init": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "im_private_e_public",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3074,
                        "end": 3093
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Grumpy",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3094,
                        "end": 3100
                      },
                      "optional": false,
                      "computed": false,
                      "start": 3074,
                      "end": 3100
                    },
                    "definite": false,
                    "start": 3042,
                    "end": 3100
                  }
                ],
                "declare": false,
                "start": 3038,
                "end": 3101
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 3031,
              "end": 3101
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
                    "start": 3110,
                    "end": 3140
                  },
                  "init": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "im_private_f_public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3143,
                      "end": 3162
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 3143,
                    "end": 3164
                  },
                  "definite": false,
                  "start": 3110,
                  "end": 3164
                }
              ],
              "declare": false,
              "start": 3106,
              "end": 3165
            },
            {
              "type": "ExportNamedDeclaration",
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
                      "start": 3181,
                      "end": 3210
                    },
                    "init": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "im_private_f_public",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3213,
                        "end": 3232
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 3213,
                      "end": 3234
                    },
                    "definite": false,
                    "start": 3181,
                    "end": 3234
                  }
                ],
                "declare": false,
                "start": 3177,
                "end": 3235
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 3170,
              "end": 3235
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
                    "start": 3244,
                    "end": 3274
                  },
                  "init": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "im_private_v_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3277,
                    "end": 3296
                  },
                  "definite": false,
                  "start": 3244,
                  "end": 3296
                }
              ],
              "declare": false,
              "start": 3240,
              "end": 3297
            },
            {
              "type": "ExportNamedDeclaration",
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
                      "start": 3313,
                      "end": 3342
                    },
                    "init": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "im_private_v_public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3345,
                      "end": 3364
                    },
                    "definite": false,
                    "start": 3313,
                    "end": 3364
                  }
                ],
                "declare": false,
                "start": 3309,
                "end": 3365
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 3302,
              "end": 3365
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
                          "start": 3406,
                          "end": 3425
                        },
                        "typeArguments": null,
                        "start": 3406,
                        "end": 3425
                      },
                      "start": 3404,
                      "end": 3425
                    },
                    "start": 3374,
                    "end": 3425
                  },
                  "init": null,
                  "definite": false,
                  "start": 3374,
                  "end": 3425
                }
              ],
              "declare": false,
              "start": 3370,
              "end": 3426
            },
            {
              "type": "ExportNamedDeclaration",
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
                            "start": 3473,
                            "end": 3492
                          },
                          "typeArguments": null,
                          "start": 3473,
                          "end": 3492
                        },
                        "start": 3471,
                        "end": 3492
                      },
                      "start": 3442,
                      "end": 3492
                    },
                    "init": null,
                    "definite": false,
                    "start": 3442,
                    "end": 3492
                  }
                ],
                "declare": false,
                "start": 3438,
                "end": 3493
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 3431,
              "end": 3493
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
                    "start": 3502,
                    "end": 3533
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
                        "start": 3540,
                        "end": 3560
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3561,
                        "end": 3562
                      },
                      "optional": false,
                      "computed": false,
                      "start": 3540,
                      "end": 3562
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 3536,
                    "end": 3564
                  },
                  "definite": false,
                  "start": 3502,
                  "end": 3564
                }
              ],
              "declare": false,
              "start": 3498,
              "end": 3565
            },
            {
              "type": "ExportNamedDeclaration",
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
                      "start": 3581,
                      "end": 3611
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
                          "start": 3618,
                          "end": 3638
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3639,
                          "end": 3640
                        },
                        "optional": false,
                        "computed": false,
                        "start": 3618,
                        "end": 3640
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 3614,
                      "end": 3642
                    },
                    "definite": false,
                    "start": 3581,
                    "end": 3642
                  }
                ],
                "declare": false,
                "start": 3577,
                "end": 3643
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 3570,
              "end": 3643
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
                            "start": 3685,
                            "end": 3705
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "i",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3706,
                            "end": 3707
                          },
                          "start": 3685,
                          "end": 3707
                        },
                        "typeArguments": null,
                        "start": 3685,
                        "end": 3707
                      },
                      "start": 3683,
                      "end": 3707
                    },
                    "start": 3652,
                    "end": 3707
                  },
                  "init": null,
                  "definite": false,
                  "start": 3652,
                  "end": 3707
                }
              ],
              "declare": false,
              "start": 3648,
              "end": 3708
            },
            {
              "type": "ExportNamedDeclaration",
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
                              "start": 3756,
                              "end": 3776
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "i",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3777,
                              "end": 3778
                            },
                            "start": 3756,
                            "end": 3778
                          },
                          "typeArguments": null,
                          "start": 3756,
                          "end": 3778
                        },
                        "start": 3754,
                        "end": 3778
                      },
                      "start": 3724,
                      "end": 3778
                    },
                    "init": null,
                    "definite": false,
                    "start": 3724,
                    "end": 3778
                  }
                ],
                "declare": false,
                "start": 3720,
                "end": 3779
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 3713,
              "end": 3779
            }
          ],
          "start": 900,
          "end": 3781
        },
        "kind": "module",
        "declare": false,
        "global": false,
        "start": 879,
        "end": 3781
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 872,
      "end": 3781
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "import_private",
        "optional": false,
        "typeAnnotation": null,
        "start": 3790,
        "end": 3804
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "im_private_c_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 3872,
              "end": 3892
            },
            "moduleReference": {
              "type": "TSQualifiedName",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "m_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 3895,
                "end": 3904
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "c_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 3905,
                "end": 3914
              },
              "start": 3895,
              "end": 3914
            },
            "importKind": "value",
            "start": 3865,
            "end": 3915
          },
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "im_private_e_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 3927,
              "end": 3947
            },
            "moduleReference": {
              "type": "TSQualifiedName",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "m_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 3950,
                "end": 3959
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "e_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 3960,
                "end": 3969
              },
              "start": 3950,
              "end": 3969
            },
            "importKind": "value",
            "start": 3920,
            "end": 3970
          },
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "im_private_f_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 3982,
              "end": 4002
            },
            "moduleReference": {
              "type": "TSQualifiedName",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "m_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 4005,
                "end": 4014
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "f_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 4015,
                "end": 4024
              },
              "start": 4005,
              "end": 4024
            },
            "importKind": "value",
            "start": 3975,
            "end": 4025
          },
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "im_private_v_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 4037,
              "end": 4057
            },
            "moduleReference": {
              "type": "TSQualifiedName",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "m_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 4060,
                "end": 4069
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "v_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 4070,
                "end": 4079
              },
              "start": 4060,
              "end": 4079
            },
            "importKind": "value",
            "start": 4030,
            "end": 4080
          },
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "im_private_i_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 4092,
              "end": 4112
            },
            "moduleReference": {
              "type": "TSQualifiedName",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "m_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 4115,
                "end": 4124
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "i_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 4125,
                "end": 4134
              },
              "start": 4115,
              "end": 4134
            },
            "importKind": "value",
            "start": 4085,
            "end": 4135
          },
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "im_private_mi_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 4147,
              "end": 4168
            },
            "moduleReference": {
              "type": "TSQualifiedName",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "m_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 4171,
                "end": 4180
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "mi_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 4181,
                "end": 4191
              },
              "start": 4171,
              "end": 4191
            },
            "importKind": "value",
            "start": 4140,
            "end": 4192
          },
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "im_private_mu_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 4204,
              "end": 4225
            },
            "moduleReference": {
              "type": "TSQualifiedName",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "m_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 4228,
                "end": 4237
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "mu_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 4238,
                "end": 4248
              },
              "start": 4228,
              "end": 4248
            },
            "importKind": "value",
            "start": 4197,
            "end": 4249
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
                  "start": 4287,
                  "end": 4318
                },
                "init": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "im_private_c_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4325,
                    "end": 4345
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "start": 4321,
                  "end": 4347
                },
                "definite": false,
                "start": 4287,
                "end": 4347
              }
            ],
            "declare": false,
            "start": 4283,
            "end": 4348
          },
          {
            "type": "ExportNamedDeclaration",
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
                    "start": 4364,
                    "end": 4394
                  },
                  "init": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "im_private_c_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4401,
                      "end": 4421
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 4397,
                    "end": 4423
                  },
                  "definite": false,
                  "start": 4364,
                  "end": 4423
                }
              ],
              "declare": false,
              "start": 4360,
              "end": 4424
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 4353,
            "end": 4424
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
                  "start": 4433,
                  "end": 4464
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "im_private_e_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4467,
                    "end": 4487
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Happy",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4488,
                    "end": 4493
                  },
                  "optional": false,
                  "computed": false,
                  "start": 4467,
                  "end": 4493
                },
                "definite": false,
                "start": 4433,
                "end": 4493
              }
            ],
            "declare": false,
            "start": 4429,
            "end": 4494
          },
          {
            "type": "ExportNamedDeclaration",
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
                    "start": 4510,
                    "end": 4540
                  },
                  "init": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "im_private_e_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4543,
                      "end": 4563
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Grumpy",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4564,
                      "end": 4570
                    },
                    "optional": false,
                    "computed": false,
                    "start": 4543,
                    "end": 4570
                  },
                  "definite": false,
                  "start": 4510,
                  "end": 4570
                }
              ],
              "declare": false,
              "start": 4506,
              "end": 4571
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 4499,
            "end": 4571
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
                  "start": 4580,
                  "end": 4611
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "im_private_f_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4614,
                    "end": 4634
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 4614,
                  "end": 4636
                },
                "definite": false,
                "start": 4580,
                "end": 4636
              }
            ],
            "declare": false,
            "start": 4576,
            "end": 4637
          },
          {
            "type": "ExportNamedDeclaration",
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
                    "start": 4653,
                    "end": 4683
                  },
                  "init": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "im_private_f_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4686,
                      "end": 4706
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 4686,
                    "end": 4708
                  },
                  "definite": false,
                  "start": 4653,
                  "end": 4708
                }
              ],
              "declare": false,
              "start": 4649,
              "end": 4709
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 4642,
            "end": 4709
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
                  "start": 4718,
                  "end": 4749
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "im_private_v_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4752,
                  "end": 4772
                },
                "definite": false,
                "start": 4718,
                "end": 4772
              }
            ],
            "declare": false,
            "start": 4714,
            "end": 4773
          },
          {
            "type": "ExportNamedDeclaration",
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
                    "start": 4789,
                    "end": 4819
                  },
                  "init": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "im_private_v_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4822,
                    "end": 4842
                  },
                  "definite": false,
                  "start": 4789,
                  "end": 4842
                }
              ],
              "declare": false,
              "start": 4785,
              "end": 4843
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 4778,
            "end": 4843
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
                        "start": 4885,
                        "end": 4905
                      },
                      "typeArguments": null,
                      "start": 4885,
                      "end": 4905
                    },
                    "start": 4883,
                    "end": 4905
                  },
                  "start": 4852,
                  "end": 4905
                },
                "init": null,
                "definite": false,
                "start": 4852,
                "end": 4905
              }
            ],
            "declare": false,
            "start": 4848,
            "end": 4906
          },
          {
            "type": "ExportNamedDeclaration",
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
                          "start": 4954,
                          "end": 4974
                        },
                        "typeArguments": null,
                        "start": 4954,
                        "end": 4974
                      },
                      "start": 4952,
                      "end": 4974
                    },
                    "start": 4922,
                    "end": 4974
                  },
                  "init": null,
                  "definite": false,
                  "start": 4922,
                  "end": 4974
                }
              ],
              "declare": false,
              "start": 4918,
              "end": 4975
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 4911,
            "end": 4975
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
                  "start": 4984,
                  "end": 5016
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
                      "start": 5023,
                      "end": 5044
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5045,
                      "end": 5046
                    },
                    "optional": false,
                    "computed": false,
                    "start": 5023,
                    "end": 5046
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "start": 5019,
                  "end": 5048
                },
                "definite": false,
                "start": 4984,
                "end": 5048
              }
            ],
            "declare": false,
            "start": 4980,
            "end": 5049
          },
          {
            "type": "ExportNamedDeclaration",
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
                    "start": 5065,
                    "end": 5096
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
                        "start": 5103,
                        "end": 5124
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5125,
                        "end": 5126
                      },
                      "optional": false,
                      "computed": false,
                      "start": 5103,
                      "end": 5126
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 5099,
                    "end": 5128
                  },
                  "definite": false,
                  "start": 5065,
                  "end": 5128
                }
              ],
              "declare": false,
              "start": 5061,
              "end": 5129
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 5054,
            "end": 5129
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
                          "start": 5172,
                          "end": 5193
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "i",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5194,
                          "end": 5195
                        },
                        "start": 5172,
                        "end": 5195
                      },
                      "typeArguments": null,
                      "start": 5172,
                      "end": 5195
                    },
                    "start": 5170,
                    "end": 5195
                  },
                  "start": 5138,
                  "end": 5195
                },
                "init": null,
                "definite": false,
                "start": 5138,
                "end": 5195
              }
            ],
            "declare": false,
            "start": 5134,
            "end": 5196
          },
          {
            "type": "ExportNamedDeclaration",
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
                            "start": 5245,
                            "end": 5266
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "i",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 5267,
                            "end": 5268
                          },
                          "start": 5245,
                          "end": 5268
                        },
                        "typeArguments": null,
                        "start": 5245,
                        "end": 5268
                      },
                      "start": 5243,
                      "end": 5268
                    },
                    "start": 5212,
                    "end": 5268
                  },
                  "init": null,
                  "definite": false,
                  "start": 5212,
                  "end": 5268
                }
              ],
              "declare": false,
              "start": 5208,
              "end": 5269
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 5201,
            "end": 5269
          },
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "im_private_c_public",
              "optional": false,
              "typeAnnotation": null,
              "start": 5334,
              "end": 5353
            },
            "moduleReference": {
              "type": "TSQualifiedName",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "m_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 5356,
                "end": 5364
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "c_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 5365,
                "end": 5373
              },
              "start": 5356,
              "end": 5373
            },
            "importKind": "value",
            "start": 5327,
            "end": 5374
          },
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "im_private_e_public",
              "optional": false,
              "typeAnnotation": null,
              "start": 5386,
              "end": 5405
            },
            "moduleReference": {
              "type": "TSQualifiedName",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "m_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 5408,
                "end": 5416
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "e_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 5417,
                "end": 5425
              },
              "start": 5408,
              "end": 5425
            },
            "importKind": "value",
            "start": 5379,
            "end": 5426
          },
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "im_private_f_public",
              "optional": false,
              "typeAnnotation": null,
              "start": 5438,
              "end": 5457
            },
            "moduleReference": {
              "type": "TSQualifiedName",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "m_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 5460,
                "end": 5468
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "f_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 5469,
                "end": 5477
              },
              "start": 5460,
              "end": 5477
            },
            "importKind": "value",
            "start": 5431,
            "end": 5478
          },
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "im_private_v_public",
              "optional": false,
              "typeAnnotation": null,
              "start": 5490,
              "end": 5509
            },
            "moduleReference": {
              "type": "TSQualifiedName",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "m_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 5512,
                "end": 5520
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "v_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 5521,
                "end": 5529
              },
              "start": 5512,
              "end": 5529
            },
            "importKind": "value",
            "start": 5483,
            "end": 5530
          },
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "im_private_i_public",
              "optional": false,
              "typeAnnotation": null,
              "start": 5542,
              "end": 5561
            },
            "moduleReference": {
              "type": "TSQualifiedName",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "m_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 5564,
                "end": 5572
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "i_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 5573,
                "end": 5581
              },
              "start": 5564,
              "end": 5581
            },
            "importKind": "value",
            "start": 5535,
            "end": 5582
          },
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "im_private_mi_public",
              "optional": false,
              "typeAnnotation": null,
              "start": 5594,
              "end": 5614
            },
            "moduleReference": {
              "type": "TSQualifiedName",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "m_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 5617,
                "end": 5625
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "mi_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 5626,
                "end": 5635
              },
              "start": 5617,
              "end": 5635
            },
            "importKind": "value",
            "start": 5587,
            "end": 5636
          },
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "im_private_mu_public",
              "optional": false,
              "typeAnnotation": null,
              "start": 5648,
              "end": 5668
            },
            "moduleReference": {
              "type": "TSQualifiedName",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "m_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 5671,
                "end": 5679
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "mu_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 5680,
                "end": 5689
              },
              "start": 5671,
              "end": 5689
            },
            "importKind": "value",
            "start": 5641,
            "end": 5690
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
                  "start": 5728,
                  "end": 5758
                },
                "init": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "im_private_c_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5765,
                    "end": 5784
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "start": 5761,
                  "end": 5786
                },
                "definite": false,
                "start": 5728,
                "end": 5786
              }
            ],
            "declare": false,
            "start": 5724,
            "end": 5787
          },
          {
            "type": "ExportNamedDeclaration",
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
                    "start": 5803,
                    "end": 5832
                  },
                  "init": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "im_private_c_public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5839,
                      "end": 5858
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 5835,
                    "end": 5860
                  },
                  "definite": false,
                  "start": 5803,
                  "end": 5860
                }
              ],
              "declare": false,
              "start": 5799,
              "end": 5861
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 5792,
            "end": 5861
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
                  "start": 5870,
                  "end": 5900
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "im_private_e_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5903,
                    "end": 5922
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Happy",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5923,
                    "end": 5928
                  },
                  "optional": false,
                  "computed": false,
                  "start": 5903,
                  "end": 5928
                },
                "definite": false,
                "start": 5870,
                "end": 5928
              }
            ],
            "declare": false,
            "start": 5866,
            "end": 5929
          },
          {
            "type": "ExportNamedDeclaration",
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
                    "start": 5945,
                    "end": 5974
                  },
                  "init": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "im_private_e_public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5977,
                      "end": 5996
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Grumpy",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5997,
                      "end": 6003
                    },
                    "optional": false,
                    "computed": false,
                    "start": 5977,
                    "end": 6003
                  },
                  "definite": false,
                  "start": 5945,
                  "end": 6003
                }
              ],
              "declare": false,
              "start": 5941,
              "end": 6004
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 5934,
            "end": 6004
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
                  "start": 6013,
                  "end": 6043
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "im_private_f_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6046,
                    "end": 6065
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 6046,
                  "end": 6067
                },
                "definite": false,
                "start": 6013,
                "end": 6067
              }
            ],
            "declare": false,
            "start": 6009,
            "end": 6068
          },
          {
            "type": "ExportNamedDeclaration",
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
                    "start": 6084,
                    "end": 6113
                  },
                  "init": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "im_private_f_public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6116,
                      "end": 6135
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 6116,
                    "end": 6137
                  },
                  "definite": false,
                  "start": 6084,
                  "end": 6137
                }
              ],
              "declare": false,
              "start": 6080,
              "end": 6138
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 6073,
            "end": 6138
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
                  "start": 6147,
                  "end": 6177
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "im_private_v_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6180,
                  "end": 6199
                },
                "definite": false,
                "start": 6147,
                "end": 6199
              }
            ],
            "declare": false,
            "start": 6143,
            "end": 6200
          },
          {
            "type": "ExportNamedDeclaration",
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
                    "start": 6216,
                    "end": 6245
                  },
                  "init": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "im_private_v_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6248,
                    "end": 6267
                  },
                  "definite": false,
                  "start": 6216,
                  "end": 6267
                }
              ],
              "declare": false,
              "start": 6212,
              "end": 6268
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 6205,
            "end": 6268
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
                        "start": 6309,
                        "end": 6328
                      },
                      "typeArguments": null,
                      "start": 6309,
                      "end": 6328
                    },
                    "start": 6307,
                    "end": 6328
                  },
                  "start": 6277,
                  "end": 6328
                },
                "init": null,
                "definite": false,
                "start": 6277,
                "end": 6328
              }
            ],
            "declare": false,
            "start": 6273,
            "end": 6329
          },
          {
            "type": "ExportNamedDeclaration",
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
                          "start": 6376,
                          "end": 6395
                        },
                        "typeArguments": null,
                        "start": 6376,
                        "end": 6395
                      },
                      "start": 6374,
                      "end": 6395
                    },
                    "start": 6345,
                    "end": 6395
                  },
                  "init": null,
                  "definite": false,
                  "start": 6345,
                  "end": 6395
                }
              ],
              "declare": false,
              "start": 6341,
              "end": 6396
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 6334,
            "end": 6396
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
                  "start": 6405,
                  "end": 6436
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
                      "start": 6443,
                      "end": 6463
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6464,
                      "end": 6465
                    },
                    "optional": false,
                    "computed": false,
                    "start": 6443,
                    "end": 6465
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "start": 6439,
                  "end": 6467
                },
                "definite": false,
                "start": 6405,
                "end": 6467
              }
            ],
            "declare": false,
            "start": 6401,
            "end": 6468
          },
          {
            "type": "ExportNamedDeclaration",
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
                    "start": 6484,
                    "end": 6514
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
                        "start": 6521,
                        "end": 6541
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 6542,
                        "end": 6543
                      },
                      "optional": false,
                      "computed": false,
                      "start": 6521,
                      "end": 6543
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 6517,
                    "end": 6545
                  },
                  "definite": false,
                  "start": 6484,
                  "end": 6545
                }
              ],
              "declare": false,
              "start": 6480,
              "end": 6546
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 6473,
            "end": 6546
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
                          "start": 6588,
                          "end": 6608
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "i",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 6609,
                          "end": 6610
                        },
                        "start": 6588,
                        "end": 6610
                      },
                      "typeArguments": null,
                      "start": 6588,
                      "end": 6610
                    },
                    "start": 6586,
                    "end": 6610
                  },
                  "start": 6555,
                  "end": 6610
                },
                "init": null,
                "definite": false,
                "start": 6555,
                "end": 6610
              }
            ],
            "declare": false,
            "start": 6551,
            "end": 6611
          },
          {
            "type": "ExportNamedDeclaration",
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
                            "start": 6659,
                            "end": 6679
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "i",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 6680,
                            "end": 6681
                          },
                          "start": 6659,
                          "end": 6681
                        },
                        "typeArguments": null,
                        "start": 6659,
                        "end": 6681
                      },
                      "start": 6657,
                      "end": 6681
                    },
                    "start": 6627,
                    "end": 6681
                  },
                  "init": null,
                  "definite": false,
                  "start": 6627,
                  "end": 6681
                }
              ],
              "declare": false,
              "start": 6623,
              "end": 6682
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 6616,
            "end": 6682
          }
        ],
        "start": 3805,
        "end": 6684
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 3783,
      "end": 6684
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 20,
  "end": 6684
}
```
