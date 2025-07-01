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
        "type": "TSImportEqualsDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "im_public_c_private",
          "optional": false,
          "typeAnnotation": null,
          "start": 933,
          "end": 952
        },
        "moduleReference": {
          "type": "TSQualifiedName",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "m_private",
            "optional": false,
            "typeAnnotation": null,
            "start": 955,
            "end": 964
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "c_private",
            "optional": false,
            "typeAnnotation": null,
            "start": 965,
            "end": 974
          },
          "start": 955,
          "end": 974
        },
        "importKind": "value",
        "start": 926,
        "end": 975
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 919,
      "end": 975
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
          "start": 990,
          "end": 1009
        },
        "moduleReference": {
          "type": "TSQualifiedName",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "m_private",
            "optional": false,
            "typeAnnotation": null,
            "start": 1012,
            "end": 1021
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "e_private",
            "optional": false,
            "typeAnnotation": null,
            "start": 1022,
            "end": 1031
          },
          "start": 1012,
          "end": 1031
        },
        "importKind": "value",
        "start": 983,
        "end": 1032
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 976,
      "end": 1032
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
          "start": 1047,
          "end": 1066
        },
        "moduleReference": {
          "type": "TSQualifiedName",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "m_private",
            "optional": false,
            "typeAnnotation": null,
            "start": 1069,
            "end": 1078
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "f_private",
            "optional": false,
            "typeAnnotation": null,
            "start": 1079,
            "end": 1088
          },
          "start": 1069,
          "end": 1088
        },
        "importKind": "value",
        "start": 1040,
        "end": 1089
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1033,
      "end": 1089
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
          "start": 1104,
          "end": 1123
        },
        "moduleReference": {
          "type": "TSQualifiedName",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "m_private",
            "optional": false,
            "typeAnnotation": null,
            "start": 1126,
            "end": 1135
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "v_private",
            "optional": false,
            "typeAnnotation": null,
            "start": 1136,
            "end": 1145
          },
          "start": 1126,
          "end": 1145
        },
        "importKind": "value",
        "start": 1097,
        "end": 1146
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1090,
      "end": 1146
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
          "start": 1161,
          "end": 1180
        },
        "moduleReference": {
          "type": "TSQualifiedName",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "m_private",
            "optional": false,
            "typeAnnotation": null,
            "start": 1183,
            "end": 1192
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "i_private",
            "optional": false,
            "typeAnnotation": null,
            "start": 1193,
            "end": 1202
          },
          "start": 1183,
          "end": 1202
        },
        "importKind": "value",
        "start": 1154,
        "end": 1203
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1147,
      "end": 1203
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
          "start": 1218,
          "end": 1238
        },
        "moduleReference": {
          "type": "TSQualifiedName",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "m_private",
            "optional": false,
            "typeAnnotation": null,
            "start": 1241,
            "end": 1250
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "mi_private",
            "optional": false,
            "typeAnnotation": null,
            "start": 1251,
            "end": 1261
          },
          "start": 1241,
          "end": 1261
        },
        "importKind": "value",
        "start": 1211,
        "end": 1262
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1204,
      "end": 1262
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
          "start": 1277,
          "end": 1297
        },
        "moduleReference": {
          "type": "TSQualifiedName",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "m_private",
            "optional": false,
            "typeAnnotation": null,
            "start": 1300,
            "end": 1309
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "mu_private",
            "optional": false,
            "typeAnnotation": null,
            "start": 1310,
            "end": 1320
          },
          "start": 1300,
          "end": 1320
        },
        "importKind": "value",
        "start": 1270,
        "end": 1321
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1263,
      "end": 1321
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
            "start": 1361,
            "end": 1391
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "im_public_c_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 1398,
              "end": 1417
            },
            "typeArguments": null,
            "arguments": [],
            "start": 1394,
            "end": 1419
          },
          "definite": false,
          "start": 1361,
          "end": 1419
        }
      ],
      "declare": false,
      "start": 1357,
      "end": 1420
    },
    {
      "type": "ExportNamedDeclaration",
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
              "start": 1432,
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
            "start": 1432,
            "end": 1489
          }
        ],
        "declare": false,
        "start": 1428,
        "end": 1490
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1421,
      "end": 1490
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
            "start": 1495,
            "end": 1525
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "im_public_e_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 1528,
              "end": 1547
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "Happy",
              "optional": false,
              "typeAnnotation": null,
              "start": 1548,
              "end": 1553
            },
            "optional": false,
            "computed": false,
            "start": 1528,
            "end": 1553
          },
          "definite": false,
          "start": 1495,
          "end": 1553
        }
      ],
      "declare": false,
      "start": 1491,
      "end": 1554
    },
    {
      "type": "ExportNamedDeclaration",
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
              "start": 1566,
              "end": 1595
            },
            "init": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "im_public_e_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 1598,
                "end": 1617
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "Grumpy",
                "optional": false,
                "typeAnnotation": null,
                "start": 1618,
                "end": 1624
              },
              "optional": false,
              "computed": false,
              "start": 1598,
              "end": 1624
            },
            "definite": false,
            "start": 1566,
            "end": 1624
          }
        ],
        "declare": false,
        "start": 1562,
        "end": 1625
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1555,
      "end": 1625
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
            "start": 1630,
            "end": 1660
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "im_public_f_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 1663,
              "end": 1682
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 1663,
            "end": 1684
          },
          "definite": false,
          "start": 1630,
          "end": 1684
        }
      ],
      "declare": false,
      "start": 1626,
      "end": 1685
    },
    {
      "type": "ExportNamedDeclaration",
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
              "start": 1697,
              "end": 1726
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "im_public_f_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 1729,
                "end": 1748
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 1729,
              "end": 1750
            },
            "definite": false,
            "start": 1697,
            "end": 1750
          }
        ],
        "declare": false,
        "start": 1693,
        "end": 1751
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1686,
      "end": 1751
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
            "start": 1756,
            "end": 1786
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "im_public_v_private",
            "optional": false,
            "typeAnnotation": null,
            "start": 1789,
            "end": 1808
          },
          "definite": false,
          "start": 1756,
          "end": 1808
        }
      ],
      "declare": false,
      "start": 1752,
      "end": 1809
    },
    {
      "type": "ExportNamedDeclaration",
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
              "start": 1821,
              "end": 1850
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "im_public_v_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 1853,
              "end": 1872
            },
            "definite": false,
            "start": 1821,
            "end": 1872
          }
        ],
        "declare": false,
        "start": 1817,
        "end": 1873
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1810,
      "end": 1873
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
                  "start": 1910,
                  "end": 1929
                },
                "typeArguments": null,
                "start": 1910,
                "end": 1929
              },
              "start": 1908,
              "end": 1929
            },
            "start": 1878,
            "end": 1929
          },
          "init": null,
          "definite": false,
          "start": 1878,
          "end": 1929
        }
      ],
      "declare": false,
      "start": 1874,
      "end": 1930
    },
    {
      "type": "ExportNamedDeclaration",
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
                    "start": 1973,
                    "end": 1992
                  },
                  "typeArguments": null,
                  "start": 1973,
                  "end": 1992
                },
                "start": 1971,
                "end": 1992
              },
              "start": 1942,
              "end": 1992
            },
            "init": null,
            "definite": false,
            "start": 1942,
            "end": 1992
          }
        ],
        "declare": false,
        "start": 1938,
        "end": 1993
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1931,
      "end": 1993
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
            "start": 1998,
            "end": 2029
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
                "start": 2036,
                "end": 2056
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 2057,
                "end": 2058
              },
              "optional": false,
              "computed": false,
              "start": 2036,
              "end": 2058
            },
            "typeArguments": null,
            "arguments": [],
            "start": 2032,
            "end": 2060
          },
          "definite": false,
          "start": 1998,
          "end": 2060
        }
      ],
      "declare": false,
      "start": 1994,
      "end": 2061
    },
    {
      "type": "ExportNamedDeclaration",
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
              "start": 2073,
              "end": 2103
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
                  "start": 2110,
                  "end": 2130
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2131,
                  "end": 2132
                },
                "optional": false,
                "computed": false,
                "start": 2110,
                "end": 2132
              },
              "typeArguments": null,
              "arguments": [],
              "start": 2106,
              "end": 2134
            },
            "definite": false,
            "start": 2073,
            "end": 2134
          }
        ],
        "declare": false,
        "start": 2069,
        "end": 2135
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 2062,
      "end": 2135
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
                    "start": 2173,
                    "end": 2193
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "i",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2194,
                    "end": 2195
                  },
                  "start": 2173,
                  "end": 2195
                },
                "typeArguments": null,
                "start": 2173,
                "end": 2195
              },
              "start": 2171,
              "end": 2195
            },
            "start": 2140,
            "end": 2195
          },
          "init": null,
          "definite": false,
          "start": 2140,
          "end": 2195
        }
      ],
      "declare": false,
      "start": 2136,
      "end": 2196
    },
    {
      "type": "ExportNamedDeclaration",
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
                      "start": 2240,
                      "end": 2260
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "i",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2261,
                      "end": 2262
                    },
                    "start": 2240,
                    "end": 2262
                  },
                  "typeArguments": null,
                  "start": 2240,
                  "end": 2262
                },
                "start": 2238,
                "end": 2262
              },
              "start": 2208,
              "end": 2262
            },
            "init": null,
            "definite": false,
            "start": 2208,
            "end": 2262
          }
        ],
        "declare": false,
        "start": 2204,
        "end": 2263
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 2197,
      "end": 2263
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
          "start": 2329,
          "end": 2347
        },
        "moduleReference": {
          "type": "TSQualifiedName",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "m_public",
            "optional": false,
            "typeAnnotation": null,
            "start": 2350,
            "end": 2358
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "c_public",
            "optional": false,
            "typeAnnotation": null,
            "start": 2359,
            "end": 2367
          },
          "start": 2350,
          "end": 2367
        },
        "importKind": "value",
        "start": 2322,
        "end": 2368
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 2315,
      "end": 2368
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
          "start": 2383,
          "end": 2401
        },
        "moduleReference": {
          "type": "TSQualifiedName",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "m_public",
            "optional": false,
            "typeAnnotation": null,
            "start": 2404,
            "end": 2412
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "e_public",
            "optional": false,
            "typeAnnotation": null,
            "start": 2413,
            "end": 2421
          },
          "start": 2404,
          "end": 2421
        },
        "importKind": "value",
        "start": 2376,
        "end": 2422
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 2369,
      "end": 2422
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
          "start": 2437,
          "end": 2455
        },
        "moduleReference": {
          "type": "TSQualifiedName",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "m_public",
            "optional": false,
            "typeAnnotation": null,
            "start": 2458,
            "end": 2466
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "f_public",
            "optional": false,
            "typeAnnotation": null,
            "start": 2467,
            "end": 2475
          },
          "start": 2458,
          "end": 2475
        },
        "importKind": "value",
        "start": 2430,
        "end": 2476
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 2423,
      "end": 2476
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
          "start": 2491,
          "end": 2509
        },
        "moduleReference": {
          "type": "TSQualifiedName",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "m_public",
            "optional": false,
            "typeAnnotation": null,
            "start": 2512,
            "end": 2520
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "v_public",
            "optional": false,
            "typeAnnotation": null,
            "start": 2521,
            "end": 2529
          },
          "start": 2512,
          "end": 2529
        },
        "importKind": "value",
        "start": 2484,
        "end": 2530
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 2477,
      "end": 2530
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
          "start": 2545,
          "end": 2563
        },
        "moduleReference": {
          "type": "TSQualifiedName",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "m_public",
            "optional": false,
            "typeAnnotation": null,
            "start": 2566,
            "end": 2574
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "i_public",
            "optional": false,
            "typeAnnotation": null,
            "start": 2575,
            "end": 2583
          },
          "start": 2566,
          "end": 2583
        },
        "importKind": "value",
        "start": 2538,
        "end": 2584
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 2531,
      "end": 2584
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
          "start": 2599,
          "end": 2618
        },
        "moduleReference": {
          "type": "TSQualifiedName",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "m_public",
            "optional": false,
            "typeAnnotation": null,
            "start": 2621,
            "end": 2629
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "mi_public",
            "optional": false,
            "typeAnnotation": null,
            "start": 2630,
            "end": 2639
          },
          "start": 2621,
          "end": 2639
        },
        "importKind": "value",
        "start": 2592,
        "end": 2640
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 2585,
      "end": 2640
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
          "start": 2655,
          "end": 2674
        },
        "moduleReference": {
          "type": "TSQualifiedName",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "m_public",
            "optional": false,
            "typeAnnotation": null,
            "start": 2677,
            "end": 2685
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "mu_public",
            "optional": false,
            "typeAnnotation": null,
            "start": 2686,
            "end": 2695
          },
          "start": 2677,
          "end": 2695
        },
        "importKind": "value",
        "start": 2648,
        "end": 2696
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 2641,
      "end": 2696
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
            "start": 2726,
            "end": 2755
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "im_public_c_public",
              "optional": false,
              "typeAnnotation": null,
              "start": 2762,
              "end": 2780
            },
            "typeArguments": null,
            "arguments": [],
            "start": 2758,
            "end": 2782
          },
          "definite": false,
          "start": 2726,
          "end": 2782
        }
      ],
      "declare": false,
      "start": 2722,
      "end": 2783
    },
    {
      "type": "ExportNamedDeclaration",
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
              "start": 2795,
              "end": 2823
            },
            "init": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "im_public_c_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 2830,
                "end": 2848
              },
              "typeArguments": null,
              "arguments": [],
              "start": 2826,
              "end": 2850
            },
            "definite": false,
            "start": 2795,
            "end": 2850
          }
        ],
        "declare": false,
        "start": 2791,
        "end": 2851
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 2784,
      "end": 2851
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
            "start": 2856,
            "end": 2885
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "im_public_e_public",
              "optional": false,
              "typeAnnotation": null,
              "start": 2888,
              "end": 2906
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "Happy",
              "optional": false,
              "typeAnnotation": null,
              "start": 2907,
              "end": 2912
            },
            "optional": false,
            "computed": false,
            "start": 2888,
            "end": 2912
          },
          "definite": false,
          "start": 2856,
          "end": 2912
        }
      ],
      "declare": false,
      "start": 2852,
      "end": 2913
    },
    {
      "type": "ExportNamedDeclaration",
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
              "start": 2925,
              "end": 2953
            },
            "init": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "im_public_e_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 2956,
                "end": 2974
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "Grumpy",
                "optional": false,
                "typeAnnotation": null,
                "start": 2975,
                "end": 2981
              },
              "optional": false,
              "computed": false,
              "start": 2956,
              "end": 2981
            },
            "definite": false,
            "start": 2925,
            "end": 2981
          }
        ],
        "declare": false,
        "start": 2921,
        "end": 2982
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 2914,
      "end": 2982
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
            "start": 2987,
            "end": 3016
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "im_public_f_public",
              "optional": false,
              "typeAnnotation": null,
              "start": 3019,
              "end": 3037
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 3019,
            "end": 3039
          },
          "definite": false,
          "start": 2987,
          "end": 3039
        }
      ],
      "declare": false,
      "start": 2983,
      "end": 3040
    },
    {
      "type": "ExportNamedDeclaration",
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
              "start": 3052,
              "end": 3080
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "im_public_f_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 3083,
                "end": 3101
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 3083,
              "end": 3103
            },
            "definite": false,
            "start": 3052,
            "end": 3103
          }
        ],
        "declare": false,
        "start": 3048,
        "end": 3104
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 3041,
      "end": 3104
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
            "start": 3109,
            "end": 3138
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "im_public_v_public",
            "optional": false,
            "typeAnnotation": null,
            "start": 3141,
            "end": 3159
          },
          "definite": false,
          "start": 3109,
          "end": 3159
        }
      ],
      "declare": false,
      "start": 3105,
      "end": 3160
    },
    {
      "type": "ExportNamedDeclaration",
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
              "start": 3172,
              "end": 3200
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "im_public_v_public",
              "optional": false,
              "typeAnnotation": null,
              "start": 3203,
              "end": 3221
            },
            "definite": false,
            "start": 3172,
            "end": 3221
          }
        ],
        "declare": false,
        "start": 3168,
        "end": 3222
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 3161,
      "end": 3222
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
                  "start": 3258,
                  "end": 3276
                },
                "typeArguments": null,
                "start": 3258,
                "end": 3276
              },
              "start": 3256,
              "end": 3276
            },
            "start": 3227,
            "end": 3276
          },
          "init": null,
          "definite": false,
          "start": 3227,
          "end": 3276
        }
      ],
      "declare": false,
      "start": 3223,
      "end": 3277
    },
    {
      "type": "ExportNamedDeclaration",
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
                    "start": 3319,
                    "end": 3337
                  },
                  "typeArguments": null,
                  "start": 3319,
                  "end": 3337
                },
                "start": 3317,
                "end": 3337
              },
              "start": 3289,
              "end": 3337
            },
            "init": null,
            "definite": false,
            "start": 3289,
            "end": 3337
          }
        ],
        "declare": false,
        "start": 3285,
        "end": 3338
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 3278,
      "end": 3338
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
            "start": 3343,
            "end": 3373
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
                "start": 3380,
                "end": 3399
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 3400,
                "end": 3401
              },
              "optional": false,
              "computed": false,
              "start": 3380,
              "end": 3401
            },
            "typeArguments": null,
            "arguments": [],
            "start": 3376,
            "end": 3403
          },
          "definite": false,
          "start": 3343,
          "end": 3403
        }
      ],
      "declare": false,
      "start": 3339,
      "end": 3404
    },
    {
      "type": "ExportNamedDeclaration",
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
              "start": 3416,
              "end": 3445
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
                  "start": 3452,
                  "end": 3471
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3472,
                  "end": 3473
                },
                "optional": false,
                "computed": false,
                "start": 3452,
                "end": 3473
              },
              "typeArguments": null,
              "arguments": [],
              "start": 3448,
              "end": 3475
            },
            "definite": false,
            "start": 3416,
            "end": 3475
          }
        ],
        "declare": false,
        "start": 3412,
        "end": 3476
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 3405,
      "end": 3476
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
                    "start": 3513,
                    "end": 3532
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "i",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3533,
                    "end": 3534
                  },
                  "start": 3513,
                  "end": 3534
                },
                "typeArguments": null,
                "start": 3513,
                "end": 3534
              },
              "start": 3511,
              "end": 3534
            },
            "start": 3481,
            "end": 3534
          },
          "init": null,
          "definite": false,
          "start": 3481,
          "end": 3534
        }
      ],
      "declare": false,
      "start": 3477,
      "end": 3535
    },
    {
      "type": "ExportNamedDeclaration",
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
                      "start": 3578,
                      "end": 3597
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "i",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3598,
                      "end": 3599
                    },
                    "start": 3578,
                    "end": 3599
                  },
                  "typeArguments": null,
                  "start": 3578,
                  "end": 3599
                },
                "start": 3576,
                "end": 3599
              },
              "start": 3547,
              "end": 3599
            },
            "init": null,
            "definite": false,
            "start": 3547,
            "end": 3599
          }
        ],
        "declare": false,
        "start": 3543,
        "end": 3600
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 3536,
      "end": 3600
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 20,
  "end": 3600
}
```
