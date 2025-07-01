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
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "im_private_c_private",
        "optional": false,
        "typeAnnotation": null,
        "start": 929,
        "end": 949
      },
      "moduleReference": {
        "type": "TSQualifiedName",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "m_private",
          "optional": false,
          "typeAnnotation": null,
          "start": 952,
          "end": 961
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "c_private",
          "optional": false,
          "typeAnnotation": null,
          "start": 962,
          "end": 971
        },
        "start": 952,
        "end": 971
      },
      "importKind": "value",
      "start": 922,
      "end": 972
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "im_private_e_private",
        "optional": false,
        "typeAnnotation": null,
        "start": 980,
        "end": 1000
      },
      "moduleReference": {
        "type": "TSQualifiedName",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "m_private",
          "optional": false,
          "typeAnnotation": null,
          "start": 1003,
          "end": 1012
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "e_private",
          "optional": false,
          "typeAnnotation": null,
          "start": 1013,
          "end": 1022
        },
        "start": 1003,
        "end": 1022
      },
      "importKind": "value",
      "start": 973,
      "end": 1023
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "im_private_f_private",
        "optional": false,
        "typeAnnotation": null,
        "start": 1031,
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
          "name": "f_private",
          "optional": false,
          "typeAnnotation": null,
          "start": 1064,
          "end": 1073
        },
        "start": 1054,
        "end": 1073
      },
      "importKind": "value",
      "start": 1024,
      "end": 1074
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "im_private_v_private",
        "optional": false,
        "typeAnnotation": null,
        "start": 1082,
        "end": 1102
      },
      "moduleReference": {
        "type": "TSQualifiedName",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "m_private",
          "optional": false,
          "typeAnnotation": null,
          "start": 1105,
          "end": 1114
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "v_private",
          "optional": false,
          "typeAnnotation": null,
          "start": 1115,
          "end": 1124
        },
        "start": 1105,
        "end": 1124
      },
      "importKind": "value",
      "start": 1075,
      "end": 1125
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "im_private_i_private",
        "optional": false,
        "typeAnnotation": null,
        "start": 1133,
        "end": 1153
      },
      "moduleReference": {
        "type": "TSQualifiedName",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "m_private",
          "optional": false,
          "typeAnnotation": null,
          "start": 1156,
          "end": 1165
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "i_private",
          "optional": false,
          "typeAnnotation": null,
          "start": 1166,
          "end": 1175
        },
        "start": 1156,
        "end": 1175
      },
      "importKind": "value",
      "start": 1126,
      "end": 1176
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "im_private_mi_private",
        "optional": false,
        "typeAnnotation": null,
        "start": 1184,
        "end": 1205
      },
      "moduleReference": {
        "type": "TSQualifiedName",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "m_private",
          "optional": false,
          "typeAnnotation": null,
          "start": 1208,
          "end": 1217
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "mi_private",
          "optional": false,
          "typeAnnotation": null,
          "start": 1218,
          "end": 1228
        },
        "start": 1208,
        "end": 1228
      },
      "importKind": "value",
      "start": 1177,
      "end": 1229
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "im_private_mu_private",
        "optional": false,
        "typeAnnotation": null,
        "start": 1237,
        "end": 1258
      },
      "moduleReference": {
        "type": "TSQualifiedName",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "m_private",
          "optional": false,
          "typeAnnotation": null,
          "start": 1261,
          "end": 1270
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "mu_private",
          "optional": false,
          "typeAnnotation": null,
          "start": 1271,
          "end": 1281
        },
        "start": 1261,
        "end": 1281
      },
      "importKind": "value",
      "start": 1230,
      "end": 1282
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
            "start": 1312,
            "end": 1343
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "im_private_c_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 1350,
              "end": 1370
            },
            "typeArguments": null,
            "arguments": [],
            "start": 1346,
            "end": 1372
          },
          "definite": false,
          "start": 1312,
          "end": 1372
        }
      ],
      "declare": false,
      "start": 1308,
      "end": 1373
    },
    {
      "type": "ExportNamedDeclaration",
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
              "start": 1385,
              "end": 1415
            },
            "init": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "im_private_c_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 1422,
                "end": 1442
              },
              "typeArguments": null,
              "arguments": [],
              "start": 1418,
              "end": 1444
            },
            "definite": false,
            "start": 1385,
            "end": 1444
          }
        ],
        "declare": false,
        "start": 1381,
        "end": 1445
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1374,
      "end": 1445
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
            "start": 1450,
            "end": 1481
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "im_private_e_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 1484,
              "end": 1504
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "Happy",
              "optional": false,
              "typeAnnotation": null,
              "start": 1505,
              "end": 1510
            },
            "optional": false,
            "computed": false,
            "start": 1484,
            "end": 1510
          },
          "definite": false,
          "start": 1450,
          "end": 1510
        }
      ],
      "declare": false,
      "start": 1446,
      "end": 1511
    },
    {
      "type": "ExportNamedDeclaration",
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
              "start": 1523,
              "end": 1553
            },
            "init": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "im_private_e_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 1556,
                "end": 1576
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "Grumpy",
                "optional": false,
                "typeAnnotation": null,
                "start": 1577,
                "end": 1583
              },
              "optional": false,
              "computed": false,
              "start": 1556,
              "end": 1583
            },
            "definite": false,
            "start": 1523,
            "end": 1583
          }
        ],
        "declare": false,
        "start": 1519,
        "end": 1584
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1512,
      "end": 1584
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
            "start": 1589,
            "end": 1620
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "im_private_f_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 1623,
              "end": 1643
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 1623,
            "end": 1645
          },
          "definite": false,
          "start": 1589,
          "end": 1645
        }
      ],
      "declare": false,
      "start": 1585,
      "end": 1646
    },
    {
      "type": "ExportNamedDeclaration",
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
              "start": 1658,
              "end": 1688
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "im_private_f_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 1691,
                "end": 1711
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 1691,
              "end": 1713
            },
            "definite": false,
            "start": 1658,
            "end": 1713
          }
        ],
        "declare": false,
        "start": 1654,
        "end": 1714
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1647,
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
            "name": "privateUse_im_private_v_private",
            "optional": false,
            "typeAnnotation": null,
            "start": 1719,
            "end": 1750
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "im_private_v_private",
            "optional": false,
            "typeAnnotation": null,
            "start": 1753,
            "end": 1773
          },
          "definite": false,
          "start": 1719,
          "end": 1773
        }
      ],
      "declare": false,
      "start": 1715,
      "end": 1774
    },
    {
      "type": "ExportNamedDeclaration",
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
              "start": 1786,
              "end": 1816
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "im_private_v_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 1819,
              "end": 1839
            },
            "definite": false,
            "start": 1786,
            "end": 1839
          }
        ],
        "declare": false,
        "start": 1782,
        "end": 1840
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1775,
      "end": 1840
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
                  "start": 1878,
                  "end": 1898
                },
                "typeArguments": null,
                "start": 1878,
                "end": 1898
              },
              "start": 1876,
              "end": 1898
            },
            "start": 1845,
            "end": 1898
          },
          "init": null,
          "definite": false,
          "start": 1845,
          "end": 1898
        }
      ],
      "declare": false,
      "start": 1841,
      "end": 1899
    },
    {
      "type": "ExportNamedDeclaration",
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
                    "start": 1943,
                    "end": 1963
                  },
                  "typeArguments": null,
                  "start": 1943,
                  "end": 1963
                },
                "start": 1941,
                "end": 1963
              },
              "start": 1911,
              "end": 1963
            },
            "init": null,
            "definite": false,
            "start": 1911,
            "end": 1963
          }
        ],
        "declare": false,
        "start": 1907,
        "end": 1964
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1900,
      "end": 1964
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
            "start": 1969,
            "end": 2001
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
                "start": 2008,
                "end": 2029
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 2030,
                "end": 2031
              },
              "optional": false,
              "computed": false,
              "start": 2008,
              "end": 2031
            },
            "typeArguments": null,
            "arguments": [],
            "start": 2004,
            "end": 2033
          },
          "definite": false,
          "start": 1969,
          "end": 2033
        }
      ],
      "declare": false,
      "start": 1965,
      "end": 2034
    },
    {
      "type": "ExportNamedDeclaration",
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
              "start": 2046,
              "end": 2077
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
                  "start": 2084,
                  "end": 2105
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2106,
                  "end": 2107
                },
                "optional": false,
                "computed": false,
                "start": 2084,
                "end": 2107
              },
              "typeArguments": null,
              "arguments": [],
              "start": 2080,
              "end": 2109
            },
            "definite": false,
            "start": 2046,
            "end": 2109
          }
        ],
        "declare": false,
        "start": 2042,
        "end": 2110
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 2035,
      "end": 2110
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
                    "start": 2149,
                    "end": 2170
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "i",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2171,
                    "end": 2172
                  },
                  "start": 2149,
                  "end": 2172
                },
                "typeArguments": null,
                "start": 2149,
                "end": 2172
              },
              "start": 2147,
              "end": 2172
            },
            "start": 2115,
            "end": 2172
          },
          "init": null,
          "definite": false,
          "start": 2115,
          "end": 2172
        }
      ],
      "declare": false,
      "start": 2111,
      "end": 2173
    },
    {
      "type": "ExportNamedDeclaration",
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
                      "start": 2218,
                      "end": 2239
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "i",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2240,
                      "end": 2241
                    },
                    "start": 2218,
                    "end": 2241
                  },
                  "typeArguments": null,
                  "start": 2218,
                  "end": 2241
                },
                "start": 2216,
                "end": 2241
              },
              "start": 2185,
              "end": 2241
            },
            "init": null,
            "definite": false,
            "start": 2185,
            "end": 2241
          }
        ],
        "declare": false,
        "start": 2181,
        "end": 2242
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 2174,
      "end": 2242
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "im_private_c_public",
        "optional": false,
        "typeAnnotation": null,
        "start": 2301,
        "end": 2320
      },
      "moduleReference": {
        "type": "TSQualifiedName",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "m_public",
          "optional": false,
          "typeAnnotation": null,
          "start": 2323,
          "end": 2331
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "c_public",
          "optional": false,
          "typeAnnotation": null,
          "start": 2332,
          "end": 2340
        },
        "start": 2323,
        "end": 2340
      },
      "importKind": "value",
      "start": 2294,
      "end": 2341
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "im_private_e_public",
        "optional": false,
        "typeAnnotation": null,
        "start": 2349,
        "end": 2368
      },
      "moduleReference": {
        "type": "TSQualifiedName",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "m_public",
          "optional": false,
          "typeAnnotation": null,
          "start": 2371,
          "end": 2379
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "e_public",
          "optional": false,
          "typeAnnotation": null,
          "start": 2380,
          "end": 2388
        },
        "start": 2371,
        "end": 2388
      },
      "importKind": "value",
      "start": 2342,
      "end": 2389
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "im_private_f_public",
        "optional": false,
        "typeAnnotation": null,
        "start": 2397,
        "end": 2416
      },
      "moduleReference": {
        "type": "TSQualifiedName",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "m_public",
          "optional": false,
          "typeAnnotation": null,
          "start": 2419,
          "end": 2427
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "f_public",
          "optional": false,
          "typeAnnotation": null,
          "start": 2428,
          "end": 2436
        },
        "start": 2419,
        "end": 2436
      },
      "importKind": "value",
      "start": 2390,
      "end": 2437
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "im_private_v_public",
        "optional": false,
        "typeAnnotation": null,
        "start": 2445,
        "end": 2464
      },
      "moduleReference": {
        "type": "TSQualifiedName",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "m_public",
          "optional": false,
          "typeAnnotation": null,
          "start": 2467,
          "end": 2475
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "v_public",
          "optional": false,
          "typeAnnotation": null,
          "start": 2476,
          "end": 2484
        },
        "start": 2467,
        "end": 2484
      },
      "importKind": "value",
      "start": 2438,
      "end": 2485
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "im_private_i_public",
        "optional": false,
        "typeAnnotation": null,
        "start": 2493,
        "end": 2512
      },
      "moduleReference": {
        "type": "TSQualifiedName",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "m_public",
          "optional": false,
          "typeAnnotation": null,
          "start": 2515,
          "end": 2523
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "i_public",
          "optional": false,
          "typeAnnotation": null,
          "start": 2524,
          "end": 2532
        },
        "start": 2515,
        "end": 2532
      },
      "importKind": "value",
      "start": 2486,
      "end": 2533
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "im_private_mi_public",
        "optional": false,
        "typeAnnotation": null,
        "start": 2541,
        "end": 2561
      },
      "moduleReference": {
        "type": "TSQualifiedName",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "m_public",
          "optional": false,
          "typeAnnotation": null,
          "start": 2564,
          "end": 2572
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "mi_public",
          "optional": false,
          "typeAnnotation": null,
          "start": 2573,
          "end": 2582
        },
        "start": 2564,
        "end": 2582
      },
      "importKind": "value",
      "start": 2534,
      "end": 2583
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "im_private_mu_public",
        "optional": false,
        "typeAnnotation": null,
        "start": 2591,
        "end": 2611
      },
      "moduleReference": {
        "type": "TSQualifiedName",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "m_public",
          "optional": false,
          "typeAnnotation": null,
          "start": 2614,
          "end": 2622
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "mu_public",
          "optional": false,
          "typeAnnotation": null,
          "start": 2623,
          "end": 2632
        },
        "start": 2614,
        "end": 2632
      },
      "importKind": "value",
      "start": 2584,
      "end": 2633
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
            "start": 2663,
            "end": 2693
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "im_private_c_public",
              "optional": false,
              "typeAnnotation": null,
              "start": 2700,
              "end": 2719
            },
            "typeArguments": null,
            "arguments": [],
            "start": 2696,
            "end": 2721
          },
          "definite": false,
          "start": 2663,
          "end": 2721
        }
      ],
      "declare": false,
      "start": 2659,
      "end": 2722
    },
    {
      "type": "ExportNamedDeclaration",
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
              "start": 2734,
              "end": 2763
            },
            "init": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "im_private_c_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 2770,
                "end": 2789
              },
              "typeArguments": null,
              "arguments": [],
              "start": 2766,
              "end": 2791
            },
            "definite": false,
            "start": 2734,
            "end": 2791
          }
        ],
        "declare": false,
        "start": 2730,
        "end": 2792
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 2723,
      "end": 2792
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
            "start": 2797,
            "end": 2827
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "im_private_e_public",
              "optional": false,
              "typeAnnotation": null,
              "start": 2830,
              "end": 2849
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "Happy",
              "optional": false,
              "typeAnnotation": null,
              "start": 2850,
              "end": 2855
            },
            "optional": false,
            "computed": false,
            "start": 2830,
            "end": 2855
          },
          "definite": false,
          "start": 2797,
          "end": 2855
        }
      ],
      "declare": false,
      "start": 2793,
      "end": 2856
    },
    {
      "type": "ExportNamedDeclaration",
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
              "start": 2868,
              "end": 2897
            },
            "init": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "im_private_e_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 2900,
                "end": 2919
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "Grumpy",
                "optional": false,
                "typeAnnotation": null,
                "start": 2920,
                "end": 2926
              },
              "optional": false,
              "computed": false,
              "start": 2900,
              "end": 2926
            },
            "definite": false,
            "start": 2868,
            "end": 2926
          }
        ],
        "declare": false,
        "start": 2864,
        "end": 2927
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 2857,
      "end": 2927
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
            "start": 2932,
            "end": 2962
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "im_private_f_public",
              "optional": false,
              "typeAnnotation": null,
              "start": 2965,
              "end": 2984
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 2965,
            "end": 2986
          },
          "definite": false,
          "start": 2932,
          "end": 2986
        }
      ],
      "declare": false,
      "start": 2928,
      "end": 2987
    },
    {
      "type": "ExportNamedDeclaration",
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
              "start": 2999,
              "end": 3028
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "im_private_f_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 3031,
                "end": 3050
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 3031,
              "end": 3052
            },
            "definite": false,
            "start": 2999,
            "end": 3052
          }
        ],
        "declare": false,
        "start": 2995,
        "end": 3053
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 2988,
      "end": 3053
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
            "start": 3058,
            "end": 3088
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "im_private_v_public",
            "optional": false,
            "typeAnnotation": null,
            "start": 3091,
            "end": 3110
          },
          "definite": false,
          "start": 3058,
          "end": 3110
        }
      ],
      "declare": false,
      "start": 3054,
      "end": 3111
    },
    {
      "type": "ExportNamedDeclaration",
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
              "start": 3123,
              "end": 3152
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "im_private_v_public",
              "optional": false,
              "typeAnnotation": null,
              "start": 3155,
              "end": 3174
            },
            "definite": false,
            "start": 3123,
            "end": 3174
          }
        ],
        "declare": false,
        "start": 3119,
        "end": 3175
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 3112,
      "end": 3175
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
                  "start": 3212,
                  "end": 3231
                },
                "typeArguments": null,
                "start": 3212,
                "end": 3231
              },
              "start": 3210,
              "end": 3231
            },
            "start": 3180,
            "end": 3231
          },
          "init": null,
          "definite": false,
          "start": 3180,
          "end": 3231
        }
      ],
      "declare": false,
      "start": 3176,
      "end": 3232
    },
    {
      "type": "ExportNamedDeclaration",
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
                    "start": 3275,
                    "end": 3294
                  },
                  "typeArguments": null,
                  "start": 3275,
                  "end": 3294
                },
                "start": 3273,
                "end": 3294
              },
              "start": 3244,
              "end": 3294
            },
            "init": null,
            "definite": false,
            "start": 3244,
            "end": 3294
          }
        ],
        "declare": false,
        "start": 3240,
        "end": 3295
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 3233,
      "end": 3295
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
            "start": 3300,
            "end": 3331
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
                "start": 3338,
                "end": 3358
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 3359,
                "end": 3360
              },
              "optional": false,
              "computed": false,
              "start": 3338,
              "end": 3360
            },
            "typeArguments": null,
            "arguments": [],
            "start": 3334,
            "end": 3362
          },
          "definite": false,
          "start": 3300,
          "end": 3362
        }
      ],
      "declare": false,
      "start": 3296,
      "end": 3363
    },
    {
      "type": "ExportNamedDeclaration",
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
              "start": 3375,
              "end": 3405
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
                  "start": 3412,
                  "end": 3432
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3433,
                  "end": 3434
                },
                "optional": false,
                "computed": false,
                "start": 3412,
                "end": 3434
              },
              "typeArguments": null,
              "arguments": [],
              "start": 3408,
              "end": 3436
            },
            "definite": false,
            "start": 3375,
            "end": 3436
          }
        ],
        "declare": false,
        "start": 3371,
        "end": 3437
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 3364,
      "end": 3437
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
                    "start": 3475,
                    "end": 3495
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "i",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3496,
                    "end": 3497
                  },
                  "start": 3475,
                  "end": 3497
                },
                "typeArguments": null,
                "start": 3475,
                "end": 3497
              },
              "start": 3473,
              "end": 3497
            },
            "start": 3442,
            "end": 3497
          },
          "init": null,
          "definite": false,
          "start": 3442,
          "end": 3497
        }
      ],
      "declare": false,
      "start": 3438,
      "end": 3498
    },
    {
      "type": "ExportNamedDeclaration",
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
                      "start": 3542,
                      "end": 3562
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "i",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3563,
                      "end": 3564
                    },
                    "start": 3542,
                    "end": 3564
                  },
                  "typeArguments": null,
                  "start": 3542,
                  "end": 3564
                },
                "start": 3540,
                "end": 3564
              },
              "start": 3510,
              "end": 3564
            },
            "init": null,
            "definite": false,
            "start": 3510,
            "end": 3564
          }
        ],
        "declare": false,
        "start": 3506,
        "end": 3565
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 3499,
      "end": 3565
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 20,
  "end": 3565
}
```
