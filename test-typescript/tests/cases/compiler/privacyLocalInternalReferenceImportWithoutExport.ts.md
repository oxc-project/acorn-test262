__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 20,
  "end": 6684,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 20,
      "end": 442,
      "id": {
        "type": "Identifier",
        "start": 27,
        "end": 36,
        "name": "m_private",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 37,
        "end": 442,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 43,
            "end": 73,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 50,
              "end": 73,
              "id": {
                "type": "Identifier",
                "start": 56,
                "end": 65,
                "name": "c_private",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 66,
                "end": 73,
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
            "start": 78,
            "end": 137,
            "declaration": {
              "type": "TSEnumDeclaration",
              "start": 85,
              "end": 137,
              "id": {
                "type": "Identifier",
                "start": 90,
                "end": 99,
                "name": "e_private",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "members": [
                {
                  "type": "TSEnumMember",
                  "start": 110,
                  "end": 115,
                  "id": {
                    "type": "Identifier",
                    "start": 110,
                    "end": 115,
                    "name": "Happy",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": null,
                  "computed": false
                },
                {
                  "type": "TSEnumMember",
                  "start": 125,
                  "end": 131,
                  "id": {
                    "type": "Identifier",
                    "start": 125,
                    "end": 131,
                    "name": "Grumpy",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": null,
                  "computed": false
                }
              ],
              "const": false,
              "declare": false,
              "body": {
                "type": "TSEnumBody",
                "start": 100,
                "end": 137,
                "members": [
                  {
                    "type": "TSEnumMember",
                    "start": 110,
                    "end": 115,
                    "id": {
                      "type": "Identifier",
                      "start": 110,
                      "end": 115,
                      "name": "Happy",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": null,
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 125,
                    "end": 131,
                    "id": {
                      "type": "Identifier",
                      "start": 125,
                      "end": 131,
                      "name": "Grumpy",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": null,
                    "computed": false
                  }
                ]
              }
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 142,
            "end": 209,
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 149,
              "end": 209,
              "id": {
                "type": "Identifier",
                "start": 158,
                "end": 167,
                "name": "f_private",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 170,
                "end": 209,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 180,
                    "end": 203,
                    "argument": {
                      "type": "NewExpression",
                      "start": 187,
                      "end": 202,
                      "callee": {
                        "type": "Identifier",
                        "start": 191,
                        "end": 200,
                        "name": "c_private",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [],
                      "typeArguments": null
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 214,
            "end": 253,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 221,
              "end": 253,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 225,
                  "end": 252,
                  "id": {
                    "type": "Identifier",
                    "start": 225,
                    "end": 234,
                    "name": "v_private",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "NewExpression",
                    "start": 237,
                    "end": 252,
                    "callee": {
                      "type": "Identifier",
                      "start": 241,
                      "end": 250,
                      "name": "c_private",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [],
                    "typeArguments": null
                  },
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
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 258,
            "end": 292,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 265,
              "end": 292,
              "id": {
                "type": "Identifier",
                "start": 275,
                "end": 284,
                "name": "i_private",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "extends": [],
              "typeParameters": null,
              "body": {
                "type": "TSInterfaceBody",
                "start": 285,
                "end": 292,
                "body": []
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
            "start": 297,
            "end": 364,
            "declaration": {
              "type": "TSModuleDeclaration",
              "start": 304,
              "end": 364,
              "id": {
                "type": "Identifier",
                "start": 311,
                "end": 321,
                "name": "mi_private",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "body": {
                "type": "TSModuleBlock",
                "start": 322,
                "end": 364,
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 332,
                    "end": 358,
                    "declaration": {
                      "type": "ClassDeclaration",
                      "start": 339,
                      "end": 358,
                      "id": {
                        "type": "Identifier",
                        "start": 345,
                        "end": 346,
                        "name": "c",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "superClass": null,
                      "body": {
                        "type": "ClassBody",
                        "start": 347,
                        "end": 358,
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
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 369,
            "end": 440,
            "declaration": {
              "type": "TSModuleDeclaration",
              "start": 376,
              "end": 440,
              "id": {
                "type": "Identifier",
                "start": 383,
                "end": 393,
                "name": "mu_private",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "body": {
                "type": "TSModuleBlock",
                "start": 394,
                "end": 440,
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 404,
                    "end": 434,
                    "declaration": {
                      "type": "TSInterfaceDeclaration",
                      "start": 411,
                      "end": 434,
                      "id": {
                        "type": "Identifier",
                        "start": 421,
                        "end": 422,
                        "name": "i",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "extends": [],
                      "typeParameters": null,
                      "body": {
                        "type": "TSInterfaceBody",
                        "start": 423,
                        "end": 434,
                        "body": []
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
      "type": "ExportNamedDeclaration",
      "start": 463,
      "end": 870,
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 470,
        "end": 870,
        "id": {
          "type": "Identifier",
          "start": 477,
          "end": 485,
          "name": "m_public",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "body": {
          "type": "TSModuleBlock",
          "start": 486,
          "end": 870,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 492,
              "end": 521,
              "declaration": {
                "type": "ClassDeclaration",
                "start": 499,
                "end": 521,
                "id": {
                  "type": "Identifier",
                  "start": 505,
                  "end": 513,
                  "name": "c_public",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "superClass": null,
                "body": {
                  "type": "ClassBody",
                  "start": 514,
                  "end": 521,
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
              "start": 526,
              "end": 584,
              "declaration": {
                "type": "TSEnumDeclaration",
                "start": 533,
                "end": 584,
                "id": {
                  "type": "Identifier",
                  "start": 538,
                  "end": 546,
                  "name": "e_public",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "members": [
                  {
                    "type": "TSEnumMember",
                    "start": 557,
                    "end": 562,
                    "id": {
                      "type": "Identifier",
                      "start": 557,
                      "end": 562,
                      "name": "Happy",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": null,
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 572,
                    "end": 578,
                    "id": {
                      "type": "Identifier",
                      "start": 572,
                      "end": 578,
                      "name": "Grumpy",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": null,
                    "computed": false
                  }
                ],
                "const": false,
                "declare": false,
                "body": {
                  "type": "TSEnumBody",
                  "start": 547,
                  "end": 584,
                  "members": [
                    {
                      "type": "TSEnumMember",
                      "start": 557,
                      "end": 562,
                      "id": {
                        "type": "Identifier",
                        "start": 557,
                        "end": 562,
                        "name": "Happy",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "initializer": null,
                      "computed": false
                    },
                    {
                      "type": "TSEnumMember",
                      "start": 572,
                      "end": 578,
                      "id": {
                        "type": "Identifier",
                        "start": 572,
                        "end": 578,
                        "name": "Grumpy",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "initializer": null,
                      "computed": false
                    }
                  ]
                }
              },
              "specifiers": [],
              "source": null,
              "attributes": [],
              "exportKind": "value"
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 589,
              "end": 654,
              "declaration": {
                "type": "FunctionDeclaration",
                "start": 596,
                "end": 654,
                "id": {
                  "type": "Identifier",
                  "start": 605,
                  "end": 613,
                  "name": "f_public",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "BlockStatement",
                  "start": 616,
                  "end": 654,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 626,
                      "end": 648,
                      "argument": {
                        "type": "NewExpression",
                        "start": 633,
                        "end": 647,
                        "callee": {
                          "type": "Identifier",
                          "start": 637,
                          "end": 645,
                          "name": "c_public",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "arguments": [],
                        "typeArguments": null
                      }
                    }
                  ]
                },
                "declare": false,
                "typeParameters": null,
                "returnType": null
              },
              "specifiers": [],
              "source": null,
              "attributes": [],
              "exportKind": "value"
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 659,
              "end": 684,
              "declaration": {
                "type": "VariableDeclaration",
                "start": 666,
                "end": 684,
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 670,
                    "end": 683,
                    "id": {
                      "type": "Identifier",
                      "start": 670,
                      "end": 678,
                      "name": "v_public",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "init": {
                      "type": "Literal",
                      "start": 681,
                      "end": 683,
                      "value": 10,
                      "raw": "10"
                    },
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
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 689,
              "end": 722,
              "declaration": {
                "type": "TSInterfaceDeclaration",
                "start": 696,
                "end": 722,
                "id": {
                  "type": "Identifier",
                  "start": 706,
                  "end": 714,
                  "name": "i_public",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "extends": [],
                "typeParameters": null,
                "body": {
                  "type": "TSInterfaceBody",
                  "start": 715,
                  "end": 722,
                  "body": []
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
              "start": 727,
              "end": 793,
              "declaration": {
                "type": "TSModuleDeclaration",
                "start": 734,
                "end": 793,
                "id": {
                  "type": "Identifier",
                  "start": 741,
                  "end": 750,
                  "name": "mi_public",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "body": {
                  "type": "TSModuleBlock",
                  "start": 751,
                  "end": 793,
                  "body": [
                    {
                      "type": "ExportNamedDeclaration",
                      "start": 761,
                      "end": 787,
                      "declaration": {
                        "type": "ClassDeclaration",
                        "start": 768,
                        "end": 787,
                        "id": {
                          "type": "Identifier",
                          "start": 774,
                          "end": 775,
                          "name": "c",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "superClass": null,
                        "body": {
                          "type": "ClassBody",
                          "start": 776,
                          "end": 787,
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
              "specifiers": [],
              "source": null,
              "attributes": [],
              "exportKind": "value"
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 798,
              "end": 868,
              "declaration": {
                "type": "TSModuleDeclaration",
                "start": 805,
                "end": 868,
                "id": {
                  "type": "Identifier",
                  "start": 812,
                  "end": 821,
                  "name": "mu_public",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "body": {
                  "type": "TSModuleBlock",
                  "start": 822,
                  "end": 868,
                  "body": [
                    {
                      "type": "ExportNamedDeclaration",
                      "start": 832,
                      "end": 862,
                      "declaration": {
                        "type": "TSInterfaceDeclaration",
                        "start": 839,
                        "end": 862,
                        "id": {
                          "type": "Identifier",
                          "start": 849,
                          "end": 850,
                          "name": "i",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "extends": [],
                        "typeParameters": null,
                        "body": {
                          "type": "TSInterfaceBody",
                          "start": 851,
                          "end": 862,
                          "body": []
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
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 872,
      "end": 3781,
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 879,
        "end": 3781,
        "id": {
          "type": "Identifier",
          "start": 886,
          "end": 899,
          "name": "import_public",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "body": {
          "type": "TSModuleBlock",
          "start": 900,
          "end": 3781,
          "body": [
            {
              "type": "TSImportEqualsDeclaration",
              "start": 960,
              "end": 1010,
              "id": {
                "type": "Identifier",
                "start": 967,
                "end": 987,
                "name": "im_private_c_private",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "moduleReference": {
                "type": "TSQualifiedName",
                "start": 990,
                "end": 1009,
                "left": {
                  "type": "Identifier",
                  "start": 990,
                  "end": 999,
                  "name": "m_private",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "right": {
                  "type": "Identifier",
                  "start": 1000,
                  "end": 1009,
                  "name": "c_private",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "importKind": "value"
            },
            {
              "type": "TSImportEqualsDeclaration",
              "start": 1015,
              "end": 1065,
              "id": {
                "type": "Identifier",
                "start": 1022,
                "end": 1042,
                "name": "im_private_e_private",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "moduleReference": {
                "type": "TSQualifiedName",
                "start": 1045,
                "end": 1064,
                "left": {
                  "type": "Identifier",
                  "start": 1045,
                  "end": 1054,
                  "name": "m_private",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "right": {
                  "type": "Identifier",
                  "start": 1055,
                  "end": 1064,
                  "name": "e_private",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "importKind": "value"
            },
            {
              "type": "TSImportEqualsDeclaration",
              "start": 1070,
              "end": 1120,
              "id": {
                "type": "Identifier",
                "start": 1077,
                "end": 1097,
                "name": "im_private_f_private",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "moduleReference": {
                "type": "TSQualifiedName",
                "start": 1100,
                "end": 1119,
                "left": {
                  "type": "Identifier",
                  "start": 1100,
                  "end": 1109,
                  "name": "m_private",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "right": {
                  "type": "Identifier",
                  "start": 1110,
                  "end": 1119,
                  "name": "f_private",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "importKind": "value"
            },
            {
              "type": "TSImportEqualsDeclaration",
              "start": 1125,
              "end": 1175,
              "id": {
                "type": "Identifier",
                "start": 1132,
                "end": 1152,
                "name": "im_private_v_private",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "moduleReference": {
                "type": "TSQualifiedName",
                "start": 1155,
                "end": 1174,
                "left": {
                  "type": "Identifier",
                  "start": 1155,
                  "end": 1164,
                  "name": "m_private",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "right": {
                  "type": "Identifier",
                  "start": 1165,
                  "end": 1174,
                  "name": "v_private",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "importKind": "value"
            },
            {
              "type": "TSImportEqualsDeclaration",
              "start": 1180,
              "end": 1230,
              "id": {
                "type": "Identifier",
                "start": 1187,
                "end": 1207,
                "name": "im_private_i_private",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "moduleReference": {
                "type": "TSQualifiedName",
                "start": 1210,
                "end": 1229,
                "left": {
                  "type": "Identifier",
                  "start": 1210,
                  "end": 1219,
                  "name": "m_private",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "right": {
                  "type": "Identifier",
                  "start": 1220,
                  "end": 1229,
                  "name": "i_private",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "importKind": "value"
            },
            {
              "type": "TSImportEqualsDeclaration",
              "start": 1235,
              "end": 1287,
              "id": {
                "type": "Identifier",
                "start": 1242,
                "end": 1263,
                "name": "im_private_mi_private",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "moduleReference": {
                "type": "TSQualifiedName",
                "start": 1266,
                "end": 1286,
                "left": {
                  "type": "Identifier",
                  "start": 1266,
                  "end": 1275,
                  "name": "m_private",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "right": {
                  "type": "Identifier",
                  "start": 1276,
                  "end": 1286,
                  "name": "mi_private",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "importKind": "value"
            },
            {
              "type": "TSImportEqualsDeclaration",
              "start": 1292,
              "end": 1344,
              "id": {
                "type": "Identifier",
                "start": 1299,
                "end": 1320,
                "name": "im_private_mu_private",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "moduleReference": {
                "type": "TSQualifiedName",
                "start": 1323,
                "end": 1343,
                "left": {
                  "type": "Identifier",
                  "start": 1323,
                  "end": 1332,
                  "name": "m_private",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "right": {
                  "type": "Identifier",
                  "start": 1333,
                  "end": 1343,
                  "name": "mu_private",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "importKind": "value"
            },
            {
              "type": "VariableDeclaration",
              "start": 1378,
              "end": 1443,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 1382,
                  "end": 1442,
                  "id": {
                    "type": "Identifier",
                    "start": 1382,
                    "end": 1413,
                    "name": "privateUse_im_private_c_private",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "NewExpression",
                    "start": 1416,
                    "end": 1442,
                    "callee": {
                      "type": "Identifier",
                      "start": 1420,
                      "end": 1440,
                      "name": "im_private_c_private",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [],
                    "typeArguments": null
                  },
                  "definite": false
                }
              ],
              "kind": "var",
              "declare": false
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 1448,
              "end": 1519,
              "declaration": {
                "type": "VariableDeclaration",
                "start": 1455,
                "end": 1519,
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 1459,
                    "end": 1518,
                    "id": {
                      "type": "Identifier",
                      "start": 1459,
                      "end": 1489,
                      "name": "publicUse_im_private_c_private",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "init": {
                      "type": "NewExpression",
                      "start": 1492,
                      "end": 1518,
                      "callee": {
                        "type": "Identifier",
                        "start": 1496,
                        "end": 1516,
                        "name": "im_private_c_private",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [],
                      "typeArguments": null
                    },
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
            },
            {
              "type": "VariableDeclaration",
              "start": 1524,
              "end": 1589,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 1528,
                  "end": 1588,
                  "id": {
                    "type": "Identifier",
                    "start": 1528,
                    "end": 1559,
                    "name": "privateUse_im_private_e_private",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "MemberExpression",
                    "start": 1562,
                    "end": 1588,
                    "object": {
                      "type": "Identifier",
                      "start": 1562,
                      "end": 1582,
                      "name": "im_private_e_private",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 1583,
                      "end": 1588,
                      "name": "Happy",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "definite": false
                }
              ],
              "kind": "var",
              "declare": false
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 1594,
              "end": 1666,
              "declaration": {
                "type": "VariableDeclaration",
                "start": 1601,
                "end": 1666,
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 1605,
                    "end": 1665,
                    "id": {
                      "type": "Identifier",
                      "start": 1605,
                      "end": 1635,
                      "name": "publicUse_im_private_e_private",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "init": {
                      "type": "MemberExpression",
                      "start": 1638,
                      "end": 1665,
                      "object": {
                        "type": "Identifier",
                        "start": 1638,
                        "end": 1658,
                        "name": "im_private_e_private",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 1659,
                        "end": 1665,
                        "name": "Grumpy",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
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
            },
            {
              "type": "VariableDeclaration",
              "start": 1671,
              "end": 1732,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 1675,
                  "end": 1731,
                  "id": {
                    "type": "Identifier",
                    "start": 1675,
                    "end": 1706,
                    "name": "privateUse_im_private_f_private",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "CallExpression",
                    "start": 1709,
                    "end": 1731,
                    "callee": {
                      "type": "Identifier",
                      "start": 1709,
                      "end": 1729,
                      "name": "im_private_f_private",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [],
                    "optional": false,
                    "typeArguments": null
                  },
                  "definite": false
                }
              ],
              "kind": "var",
              "declare": false
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 1737,
              "end": 1804,
              "declaration": {
                "type": "VariableDeclaration",
                "start": 1744,
                "end": 1804,
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 1748,
                    "end": 1803,
                    "id": {
                      "type": "Identifier",
                      "start": 1748,
                      "end": 1778,
                      "name": "publicUse_im_private_f_private",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "init": {
                      "type": "CallExpression",
                      "start": 1781,
                      "end": 1803,
                      "callee": {
                        "type": "Identifier",
                        "start": 1781,
                        "end": 1801,
                        "name": "im_private_f_private",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [],
                      "optional": false,
                      "typeArguments": null
                    },
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
            },
            {
              "type": "VariableDeclaration",
              "start": 1809,
              "end": 1868,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 1813,
                  "end": 1867,
                  "id": {
                    "type": "Identifier",
                    "start": 1813,
                    "end": 1844,
                    "name": "privateUse_im_private_v_private",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "Identifier",
                    "start": 1847,
                    "end": 1867,
                    "name": "im_private_v_private",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "definite": false
                }
              ],
              "kind": "var",
              "declare": false
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 1873,
              "end": 1938,
              "declaration": {
                "type": "VariableDeclaration",
                "start": 1880,
                "end": 1938,
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 1884,
                    "end": 1937,
                    "id": {
                      "type": "Identifier",
                      "start": 1884,
                      "end": 1914,
                      "name": "publicUse_im_private_v_private",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "init": {
                      "type": "Identifier",
                      "start": 1917,
                      "end": 1937,
                      "name": "im_private_v_private",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
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
            },
            {
              "type": "VariableDeclaration",
              "start": 1943,
              "end": 2001,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 1947,
                  "end": 2000,
                  "id": {
                    "type": "Identifier",
                    "start": 1947,
                    "end": 2000,
                    "name": "privateUse_im_private_i_private",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1978,
                      "end": 2000,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1980,
                        "end": 2000,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1980,
                          "end": 2000,
                          "name": "im_private_i_private",
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
            {
              "type": "ExportNamedDeclaration",
              "start": 2006,
              "end": 2070,
              "declaration": {
                "type": "VariableDeclaration",
                "start": 2013,
                "end": 2070,
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 2017,
                    "end": 2069,
                    "id": {
                      "type": "Identifier",
                      "start": 2017,
                      "end": 2069,
                      "name": "publicUse_im_private_i_private",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 2047,
                        "end": 2069,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 2049,
                          "end": 2069,
                          "typeName": {
                            "type": "Identifier",
                            "start": 2049,
                            "end": 2069,
                            "name": "im_private_i_private",
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
            },
            {
              "type": "VariableDeclaration",
              "start": 2075,
              "end": 2144,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 2079,
                  "end": 2143,
                  "id": {
                    "type": "Identifier",
                    "start": 2079,
                    "end": 2111,
                    "name": "privateUse_im_private_mi_private",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "NewExpression",
                    "start": 2114,
                    "end": 2143,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 2118,
                      "end": 2141,
                      "object": {
                        "type": "Identifier",
                        "start": 2118,
                        "end": 2139,
                        "name": "im_private_mi_private",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 2140,
                        "end": 2141,
                        "name": "c",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "arguments": [],
                    "typeArguments": null
                  },
                  "definite": false
                }
              ],
              "kind": "var",
              "declare": false
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 2149,
              "end": 2224,
              "declaration": {
                "type": "VariableDeclaration",
                "start": 2156,
                "end": 2224,
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 2160,
                    "end": 2223,
                    "id": {
                      "type": "Identifier",
                      "start": 2160,
                      "end": 2191,
                      "name": "publicUse_im_private_mi_private",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "init": {
                      "type": "NewExpression",
                      "start": 2194,
                      "end": 2223,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 2198,
                        "end": 2221,
                        "object": {
                          "type": "Identifier",
                          "start": 2198,
                          "end": 2219,
                          "name": "im_private_mi_private",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 2220,
                          "end": 2221,
                          "name": "c",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [],
                      "typeArguments": null
                    },
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
            },
            {
              "type": "VariableDeclaration",
              "start": 2229,
              "end": 2291,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 2233,
                  "end": 2290,
                  "id": {
                    "type": "Identifier",
                    "start": 2233,
                    "end": 2290,
                    "name": "privateUse_im_private_mu_private",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2265,
                      "end": 2290,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 2267,
                        "end": 2290,
                        "typeName": {
                          "type": "TSQualifiedName",
                          "start": 2267,
                          "end": 2290,
                          "left": {
                            "type": "Identifier",
                            "start": 2267,
                            "end": 2288,
                            "name": "im_private_mu_private",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 2289,
                            "end": 2290,
                            "name": "i",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
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
            {
              "type": "ExportNamedDeclaration",
              "start": 2296,
              "end": 2364,
              "declaration": {
                "type": "VariableDeclaration",
                "start": 2303,
                "end": 2364,
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 2307,
                    "end": 2363,
                    "id": {
                      "type": "Identifier",
                      "start": 2307,
                      "end": 2363,
                      "name": "publicUse_im_private_mu_private",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 2338,
                        "end": 2363,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 2340,
                          "end": 2363,
                          "typeName": {
                            "type": "TSQualifiedName",
                            "start": 2340,
                            "end": 2363,
                            "left": {
                              "type": "Identifier",
                              "start": 2340,
                              "end": 2361,
                              "name": "im_private_mu_private",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 2362,
                              "end": 2363,
                              "name": "i",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
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
            },
            {
              "type": "TSImportEqualsDeclaration",
              "start": 2424,
              "end": 2471,
              "id": {
                "type": "Identifier",
                "start": 2431,
                "end": 2450,
                "name": "im_private_c_public",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "moduleReference": {
                "type": "TSQualifiedName",
                "start": 2453,
                "end": 2470,
                "left": {
                  "type": "Identifier",
                  "start": 2453,
                  "end": 2461,
                  "name": "m_public",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "right": {
                  "type": "Identifier",
                  "start": 2462,
                  "end": 2470,
                  "name": "c_public",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "importKind": "value"
            },
            {
              "type": "TSImportEqualsDeclaration",
              "start": 2476,
              "end": 2523,
              "id": {
                "type": "Identifier",
                "start": 2483,
                "end": 2502,
                "name": "im_private_e_public",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "moduleReference": {
                "type": "TSQualifiedName",
                "start": 2505,
                "end": 2522,
                "left": {
                  "type": "Identifier",
                  "start": 2505,
                  "end": 2513,
                  "name": "m_public",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "right": {
                  "type": "Identifier",
                  "start": 2514,
                  "end": 2522,
                  "name": "e_public",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "importKind": "value"
            },
            {
              "type": "TSImportEqualsDeclaration",
              "start": 2528,
              "end": 2575,
              "id": {
                "type": "Identifier",
                "start": 2535,
                "end": 2554,
                "name": "im_private_f_public",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "moduleReference": {
                "type": "TSQualifiedName",
                "start": 2557,
                "end": 2574,
                "left": {
                  "type": "Identifier",
                  "start": 2557,
                  "end": 2565,
                  "name": "m_public",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "right": {
                  "type": "Identifier",
                  "start": 2566,
                  "end": 2574,
                  "name": "f_public",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "importKind": "value"
            },
            {
              "type": "TSImportEqualsDeclaration",
              "start": 2580,
              "end": 2627,
              "id": {
                "type": "Identifier",
                "start": 2587,
                "end": 2606,
                "name": "im_private_v_public",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "moduleReference": {
                "type": "TSQualifiedName",
                "start": 2609,
                "end": 2626,
                "left": {
                  "type": "Identifier",
                  "start": 2609,
                  "end": 2617,
                  "name": "m_public",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "right": {
                  "type": "Identifier",
                  "start": 2618,
                  "end": 2626,
                  "name": "v_public",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "importKind": "value"
            },
            {
              "type": "TSImportEqualsDeclaration",
              "start": 2632,
              "end": 2679,
              "id": {
                "type": "Identifier",
                "start": 2639,
                "end": 2658,
                "name": "im_private_i_public",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "moduleReference": {
                "type": "TSQualifiedName",
                "start": 2661,
                "end": 2678,
                "left": {
                  "type": "Identifier",
                  "start": 2661,
                  "end": 2669,
                  "name": "m_public",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "right": {
                  "type": "Identifier",
                  "start": 2670,
                  "end": 2678,
                  "name": "i_public",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "importKind": "value"
            },
            {
              "type": "TSImportEqualsDeclaration",
              "start": 2684,
              "end": 2733,
              "id": {
                "type": "Identifier",
                "start": 2691,
                "end": 2711,
                "name": "im_private_mi_public",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "moduleReference": {
                "type": "TSQualifiedName",
                "start": 2714,
                "end": 2732,
                "left": {
                  "type": "Identifier",
                  "start": 2714,
                  "end": 2722,
                  "name": "m_public",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "right": {
                  "type": "Identifier",
                  "start": 2723,
                  "end": 2732,
                  "name": "mi_public",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "importKind": "value"
            },
            {
              "type": "TSImportEqualsDeclaration",
              "start": 2738,
              "end": 2787,
              "id": {
                "type": "Identifier",
                "start": 2745,
                "end": 2765,
                "name": "im_private_mu_public",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "moduleReference": {
                "type": "TSQualifiedName",
                "start": 2768,
                "end": 2786,
                "left": {
                  "type": "Identifier",
                  "start": 2768,
                  "end": 2776,
                  "name": "m_public",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "right": {
                  "type": "Identifier",
                  "start": 2777,
                  "end": 2786,
                  "name": "mu_public",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "importKind": "value"
            },
            {
              "type": "VariableDeclaration",
              "start": 2821,
              "end": 2884,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 2825,
                  "end": 2883,
                  "id": {
                    "type": "Identifier",
                    "start": 2825,
                    "end": 2855,
                    "name": "privateUse_im_private_c_public",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "NewExpression",
                    "start": 2858,
                    "end": 2883,
                    "callee": {
                      "type": "Identifier",
                      "start": 2862,
                      "end": 2881,
                      "name": "im_private_c_public",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [],
                    "typeArguments": null
                  },
                  "definite": false
                }
              ],
              "kind": "var",
              "declare": false
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 2889,
              "end": 2958,
              "declaration": {
                "type": "VariableDeclaration",
                "start": 2896,
                "end": 2958,
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 2900,
                    "end": 2957,
                    "id": {
                      "type": "Identifier",
                      "start": 2900,
                      "end": 2929,
                      "name": "publicUse_im_private_c_public",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "init": {
                      "type": "NewExpression",
                      "start": 2932,
                      "end": 2957,
                      "callee": {
                        "type": "Identifier",
                        "start": 2936,
                        "end": 2955,
                        "name": "im_private_c_public",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [],
                      "typeArguments": null
                    },
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
            },
            {
              "type": "VariableDeclaration",
              "start": 2963,
              "end": 3026,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 2967,
                  "end": 3025,
                  "id": {
                    "type": "Identifier",
                    "start": 2967,
                    "end": 2997,
                    "name": "privateUse_im_private_e_public",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "MemberExpression",
                    "start": 3000,
                    "end": 3025,
                    "object": {
                      "type": "Identifier",
                      "start": 3000,
                      "end": 3019,
                      "name": "im_private_e_public",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 3020,
                      "end": 3025,
                      "name": "Happy",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "definite": false
                }
              ],
              "kind": "var",
              "declare": false
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 3031,
              "end": 3101,
              "declaration": {
                "type": "VariableDeclaration",
                "start": 3038,
                "end": 3101,
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 3042,
                    "end": 3100,
                    "id": {
                      "type": "Identifier",
                      "start": 3042,
                      "end": 3071,
                      "name": "publicUse_im_private_e_public",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "init": {
                      "type": "MemberExpression",
                      "start": 3074,
                      "end": 3100,
                      "object": {
                        "type": "Identifier",
                        "start": 3074,
                        "end": 3093,
                        "name": "im_private_e_public",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 3094,
                        "end": 3100,
                        "name": "Grumpy",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
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
            },
            {
              "type": "VariableDeclaration",
              "start": 3106,
              "end": 3165,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 3110,
                  "end": 3164,
                  "id": {
                    "type": "Identifier",
                    "start": 3110,
                    "end": 3140,
                    "name": "privateUse_im_private_f_public",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "CallExpression",
                    "start": 3143,
                    "end": 3164,
                    "callee": {
                      "type": "Identifier",
                      "start": 3143,
                      "end": 3162,
                      "name": "im_private_f_public",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [],
                    "optional": false,
                    "typeArguments": null
                  },
                  "definite": false
                }
              ],
              "kind": "var",
              "declare": false
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 3170,
              "end": 3235,
              "declaration": {
                "type": "VariableDeclaration",
                "start": 3177,
                "end": 3235,
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 3181,
                    "end": 3234,
                    "id": {
                      "type": "Identifier",
                      "start": 3181,
                      "end": 3210,
                      "name": "publicUse_im_private_f_public",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "init": {
                      "type": "CallExpression",
                      "start": 3213,
                      "end": 3234,
                      "callee": {
                        "type": "Identifier",
                        "start": 3213,
                        "end": 3232,
                        "name": "im_private_f_public",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [],
                      "optional": false,
                      "typeArguments": null
                    },
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
            },
            {
              "type": "VariableDeclaration",
              "start": 3240,
              "end": 3297,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 3244,
                  "end": 3296,
                  "id": {
                    "type": "Identifier",
                    "start": 3244,
                    "end": 3274,
                    "name": "privateUse_im_private_v_public",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "Identifier",
                    "start": 3277,
                    "end": 3296,
                    "name": "im_private_v_public",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "definite": false
                }
              ],
              "kind": "var",
              "declare": false
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 3302,
              "end": 3365,
              "declaration": {
                "type": "VariableDeclaration",
                "start": 3309,
                "end": 3365,
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 3313,
                    "end": 3364,
                    "id": {
                      "type": "Identifier",
                      "start": 3313,
                      "end": 3342,
                      "name": "publicUse_im_private_v_public",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "init": {
                      "type": "Identifier",
                      "start": 3345,
                      "end": 3364,
                      "name": "im_private_v_public",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
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
            },
            {
              "type": "VariableDeclaration",
              "start": 3370,
              "end": 3426,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 3374,
                  "end": 3425,
                  "id": {
                    "type": "Identifier",
                    "start": 3374,
                    "end": 3425,
                    "name": "privateUse_im_private_i_public",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 3404,
                      "end": 3425,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 3406,
                        "end": 3425,
                        "typeName": {
                          "type": "Identifier",
                          "start": 3406,
                          "end": 3425,
                          "name": "im_private_i_public",
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
            {
              "type": "ExportNamedDeclaration",
              "start": 3431,
              "end": 3493,
              "declaration": {
                "type": "VariableDeclaration",
                "start": 3438,
                "end": 3493,
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 3442,
                    "end": 3492,
                    "id": {
                      "type": "Identifier",
                      "start": 3442,
                      "end": 3492,
                      "name": "publicUse_im_private_i_public",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 3471,
                        "end": 3492,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 3473,
                          "end": 3492,
                          "typeName": {
                            "type": "Identifier",
                            "start": 3473,
                            "end": 3492,
                            "name": "im_private_i_public",
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
            },
            {
              "type": "VariableDeclaration",
              "start": 3498,
              "end": 3565,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 3502,
                  "end": 3564,
                  "id": {
                    "type": "Identifier",
                    "start": 3502,
                    "end": 3533,
                    "name": "privateUse_im_private_mi_public",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "NewExpression",
                    "start": 3536,
                    "end": 3564,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 3540,
                      "end": 3562,
                      "object": {
                        "type": "Identifier",
                        "start": 3540,
                        "end": 3560,
                        "name": "im_private_mi_public",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 3561,
                        "end": 3562,
                        "name": "c",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "arguments": [],
                    "typeArguments": null
                  },
                  "definite": false
                }
              ],
              "kind": "var",
              "declare": false
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 3570,
              "end": 3643,
              "declaration": {
                "type": "VariableDeclaration",
                "start": 3577,
                "end": 3643,
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 3581,
                    "end": 3642,
                    "id": {
                      "type": "Identifier",
                      "start": 3581,
                      "end": 3611,
                      "name": "publicUse_im_private_mi_public",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "init": {
                      "type": "NewExpression",
                      "start": 3614,
                      "end": 3642,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 3618,
                        "end": 3640,
                        "object": {
                          "type": "Identifier",
                          "start": 3618,
                          "end": 3638,
                          "name": "im_private_mi_public",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 3639,
                          "end": 3640,
                          "name": "c",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [],
                      "typeArguments": null
                    },
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
            },
            {
              "type": "VariableDeclaration",
              "start": 3648,
              "end": 3708,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 3652,
                  "end": 3707,
                  "id": {
                    "type": "Identifier",
                    "start": 3652,
                    "end": 3707,
                    "name": "privateUse_im_private_mu_public",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 3683,
                      "end": 3707,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 3685,
                        "end": 3707,
                        "typeName": {
                          "type": "TSQualifiedName",
                          "start": 3685,
                          "end": 3707,
                          "left": {
                            "type": "Identifier",
                            "start": 3685,
                            "end": 3705,
                            "name": "im_private_mu_public",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 3706,
                            "end": 3707,
                            "name": "i",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
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
            {
              "type": "ExportNamedDeclaration",
              "start": 3713,
              "end": 3779,
              "declaration": {
                "type": "VariableDeclaration",
                "start": 3720,
                "end": 3779,
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 3724,
                    "end": 3778,
                    "id": {
                      "type": "Identifier",
                      "start": 3724,
                      "end": 3778,
                      "name": "publicUse_im_private_mu_public",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 3754,
                        "end": 3778,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 3756,
                          "end": 3778,
                          "typeName": {
                            "type": "TSQualifiedName",
                            "start": 3756,
                            "end": 3778,
                            "left": {
                              "type": "Identifier",
                              "start": 3756,
                              "end": 3776,
                              "name": "im_private_mu_public",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 3777,
                              "end": 3778,
                              "name": "i",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
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
    },
    {
      "type": "TSModuleDeclaration",
      "start": 3783,
      "end": 6684,
      "id": {
        "type": "Identifier",
        "start": 3790,
        "end": 3804,
        "name": "import_private",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 3805,
        "end": 6684,
        "body": [
          {
            "type": "TSImportEqualsDeclaration",
            "start": 3865,
            "end": 3915,
            "id": {
              "type": "Identifier",
              "start": 3872,
              "end": 3892,
              "name": "im_private_c_private",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "moduleReference": {
              "type": "TSQualifiedName",
              "start": 3895,
              "end": 3914,
              "left": {
                "type": "Identifier",
                "start": 3895,
                "end": 3904,
                "name": "m_private",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 3905,
                "end": 3914,
                "name": "c_private",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "importKind": "value"
          },
          {
            "type": "TSImportEqualsDeclaration",
            "start": 3920,
            "end": 3970,
            "id": {
              "type": "Identifier",
              "start": 3927,
              "end": 3947,
              "name": "im_private_e_private",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "moduleReference": {
              "type": "TSQualifiedName",
              "start": 3950,
              "end": 3969,
              "left": {
                "type": "Identifier",
                "start": 3950,
                "end": 3959,
                "name": "m_private",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 3960,
                "end": 3969,
                "name": "e_private",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "importKind": "value"
          },
          {
            "type": "TSImportEqualsDeclaration",
            "start": 3975,
            "end": 4025,
            "id": {
              "type": "Identifier",
              "start": 3982,
              "end": 4002,
              "name": "im_private_f_private",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "moduleReference": {
              "type": "TSQualifiedName",
              "start": 4005,
              "end": 4024,
              "left": {
                "type": "Identifier",
                "start": 4005,
                "end": 4014,
                "name": "m_private",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 4015,
                "end": 4024,
                "name": "f_private",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "importKind": "value"
          },
          {
            "type": "TSImportEqualsDeclaration",
            "start": 4030,
            "end": 4080,
            "id": {
              "type": "Identifier",
              "start": 4037,
              "end": 4057,
              "name": "im_private_v_private",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "moduleReference": {
              "type": "TSQualifiedName",
              "start": 4060,
              "end": 4079,
              "left": {
                "type": "Identifier",
                "start": 4060,
                "end": 4069,
                "name": "m_private",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 4070,
                "end": 4079,
                "name": "v_private",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "importKind": "value"
          },
          {
            "type": "TSImportEqualsDeclaration",
            "start": 4085,
            "end": 4135,
            "id": {
              "type": "Identifier",
              "start": 4092,
              "end": 4112,
              "name": "im_private_i_private",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "moduleReference": {
              "type": "TSQualifiedName",
              "start": 4115,
              "end": 4134,
              "left": {
                "type": "Identifier",
                "start": 4115,
                "end": 4124,
                "name": "m_private",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 4125,
                "end": 4134,
                "name": "i_private",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "importKind": "value"
          },
          {
            "type": "TSImportEqualsDeclaration",
            "start": 4140,
            "end": 4192,
            "id": {
              "type": "Identifier",
              "start": 4147,
              "end": 4168,
              "name": "im_private_mi_private",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "moduleReference": {
              "type": "TSQualifiedName",
              "start": 4171,
              "end": 4191,
              "left": {
                "type": "Identifier",
                "start": 4171,
                "end": 4180,
                "name": "m_private",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 4181,
                "end": 4191,
                "name": "mi_private",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "importKind": "value"
          },
          {
            "type": "TSImportEqualsDeclaration",
            "start": 4197,
            "end": 4249,
            "id": {
              "type": "Identifier",
              "start": 4204,
              "end": 4225,
              "name": "im_private_mu_private",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "moduleReference": {
              "type": "TSQualifiedName",
              "start": 4228,
              "end": 4248,
              "left": {
                "type": "Identifier",
                "start": 4228,
                "end": 4237,
                "name": "m_private",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 4238,
                "end": 4248,
                "name": "mu_private",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "importKind": "value"
          },
          {
            "type": "VariableDeclaration",
            "start": 4283,
            "end": 4348,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 4287,
                "end": 4347,
                "id": {
                  "type": "Identifier",
                  "start": 4287,
                  "end": 4318,
                  "name": "privateUse_im_private_c_private",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "NewExpression",
                  "start": 4321,
                  "end": 4347,
                  "callee": {
                    "type": "Identifier",
                    "start": 4325,
                    "end": 4345,
                    "name": "im_private_c_private",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [],
                  "typeArguments": null
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 4353,
            "end": 4424,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 4360,
              "end": 4424,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 4364,
                  "end": 4423,
                  "id": {
                    "type": "Identifier",
                    "start": 4364,
                    "end": 4394,
                    "name": "publicUse_im_private_c_private",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "NewExpression",
                    "start": 4397,
                    "end": 4423,
                    "callee": {
                      "type": "Identifier",
                      "start": 4401,
                      "end": 4421,
                      "name": "im_private_c_private",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [],
                    "typeArguments": null
                  },
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
          },
          {
            "type": "VariableDeclaration",
            "start": 4429,
            "end": 4494,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 4433,
                "end": 4493,
                "id": {
                  "type": "Identifier",
                  "start": 4433,
                  "end": 4464,
                  "name": "privateUse_im_private_e_private",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 4467,
                  "end": 4493,
                  "object": {
                    "type": "Identifier",
                    "start": 4467,
                    "end": 4487,
                    "name": "im_private_e_private",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 4488,
                    "end": 4493,
                    "name": "Happy",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 4499,
            "end": 4571,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 4506,
              "end": 4571,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 4510,
                  "end": 4570,
                  "id": {
                    "type": "Identifier",
                    "start": 4510,
                    "end": 4540,
                    "name": "publicUse_im_private_e_private",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "MemberExpression",
                    "start": 4543,
                    "end": 4570,
                    "object": {
                      "type": "Identifier",
                      "start": 4543,
                      "end": 4563,
                      "name": "im_private_e_private",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 4564,
                      "end": 4570,
                      "name": "Grumpy",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
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
          },
          {
            "type": "VariableDeclaration",
            "start": 4576,
            "end": 4637,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 4580,
                "end": 4636,
                "id": {
                  "type": "Identifier",
                  "start": 4580,
                  "end": 4611,
                  "name": "privateUse_im_private_f_private",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 4614,
                  "end": 4636,
                  "callee": {
                    "type": "Identifier",
                    "start": 4614,
                    "end": 4634,
                    "name": "im_private_f_private",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [],
                  "optional": false,
                  "typeArguments": null
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 4642,
            "end": 4709,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 4649,
              "end": 4709,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 4653,
                  "end": 4708,
                  "id": {
                    "type": "Identifier",
                    "start": 4653,
                    "end": 4683,
                    "name": "publicUse_im_private_f_private",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "CallExpression",
                    "start": 4686,
                    "end": 4708,
                    "callee": {
                      "type": "Identifier",
                      "start": 4686,
                      "end": 4706,
                      "name": "im_private_f_private",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [],
                    "optional": false,
                    "typeArguments": null
                  },
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
          },
          {
            "type": "VariableDeclaration",
            "start": 4714,
            "end": 4773,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 4718,
                "end": 4772,
                "id": {
                  "type": "Identifier",
                  "start": 4718,
                  "end": 4749,
                  "name": "privateUse_im_private_v_private",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 4752,
                  "end": 4772,
                  "name": "im_private_v_private",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 4778,
            "end": 4843,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 4785,
              "end": 4843,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 4789,
                  "end": 4842,
                  "id": {
                    "type": "Identifier",
                    "start": 4789,
                    "end": 4819,
                    "name": "publicUse_im_private_v_private",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "Identifier",
                    "start": 4822,
                    "end": 4842,
                    "name": "im_private_v_private",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
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
          },
          {
            "type": "VariableDeclaration",
            "start": 4848,
            "end": 4906,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 4852,
                "end": 4905,
                "id": {
                  "type": "Identifier",
                  "start": 4852,
                  "end": 4905,
                  "name": "privateUse_im_private_i_private",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 4883,
                    "end": 4905,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 4885,
                      "end": 4905,
                      "typeName": {
                        "type": "Identifier",
                        "start": 4885,
                        "end": 4905,
                        "name": "im_private_i_private",
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
          {
            "type": "ExportNamedDeclaration",
            "start": 4911,
            "end": 4975,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 4918,
              "end": 4975,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 4922,
                  "end": 4974,
                  "id": {
                    "type": "Identifier",
                    "start": 4922,
                    "end": 4974,
                    "name": "publicUse_im_private_i_private",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 4952,
                      "end": 4974,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 4954,
                        "end": 4974,
                        "typeName": {
                          "type": "Identifier",
                          "start": 4954,
                          "end": 4974,
                          "name": "im_private_i_private",
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
          },
          {
            "type": "VariableDeclaration",
            "start": 4980,
            "end": 5049,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 4984,
                "end": 5048,
                "id": {
                  "type": "Identifier",
                  "start": 4984,
                  "end": 5016,
                  "name": "privateUse_im_private_mi_private",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "NewExpression",
                  "start": 5019,
                  "end": 5048,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 5023,
                    "end": 5046,
                    "object": {
                      "type": "Identifier",
                      "start": 5023,
                      "end": 5044,
                      "name": "im_private_mi_private",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 5045,
                      "end": 5046,
                      "name": "c",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "arguments": [],
                  "typeArguments": null
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 5054,
            "end": 5129,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 5061,
              "end": 5129,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 5065,
                  "end": 5128,
                  "id": {
                    "type": "Identifier",
                    "start": 5065,
                    "end": 5096,
                    "name": "publicUse_im_private_mi_private",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "NewExpression",
                    "start": 5099,
                    "end": 5128,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 5103,
                      "end": 5126,
                      "object": {
                        "type": "Identifier",
                        "start": 5103,
                        "end": 5124,
                        "name": "im_private_mi_private",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 5125,
                        "end": 5126,
                        "name": "c",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "arguments": [],
                    "typeArguments": null
                  },
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
          },
          {
            "type": "VariableDeclaration",
            "start": 5134,
            "end": 5196,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 5138,
                "end": 5195,
                "id": {
                  "type": "Identifier",
                  "start": 5138,
                  "end": 5195,
                  "name": "privateUse_im_private_mu_private",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 5170,
                    "end": 5195,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 5172,
                      "end": 5195,
                      "typeName": {
                        "type": "TSQualifiedName",
                        "start": 5172,
                        "end": 5195,
                        "left": {
                          "type": "Identifier",
                          "start": 5172,
                          "end": 5193,
                          "name": "im_private_mu_private",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 5194,
                          "end": 5195,
                          "name": "i",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
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
          {
            "type": "ExportNamedDeclaration",
            "start": 5201,
            "end": 5269,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 5208,
              "end": 5269,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 5212,
                  "end": 5268,
                  "id": {
                    "type": "Identifier",
                    "start": 5212,
                    "end": 5268,
                    "name": "publicUse_im_private_mu_private",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 5243,
                      "end": 5268,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 5245,
                        "end": 5268,
                        "typeName": {
                          "type": "TSQualifiedName",
                          "start": 5245,
                          "end": 5268,
                          "left": {
                            "type": "Identifier",
                            "start": 5245,
                            "end": 5266,
                            "name": "im_private_mu_private",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 5267,
                            "end": 5268,
                            "name": "i",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
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
          },
          {
            "type": "TSImportEqualsDeclaration",
            "start": 5327,
            "end": 5374,
            "id": {
              "type": "Identifier",
              "start": 5334,
              "end": 5353,
              "name": "im_private_c_public",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "moduleReference": {
              "type": "TSQualifiedName",
              "start": 5356,
              "end": 5373,
              "left": {
                "type": "Identifier",
                "start": 5356,
                "end": 5364,
                "name": "m_public",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 5365,
                "end": 5373,
                "name": "c_public",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "importKind": "value"
          },
          {
            "type": "TSImportEqualsDeclaration",
            "start": 5379,
            "end": 5426,
            "id": {
              "type": "Identifier",
              "start": 5386,
              "end": 5405,
              "name": "im_private_e_public",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "moduleReference": {
              "type": "TSQualifiedName",
              "start": 5408,
              "end": 5425,
              "left": {
                "type": "Identifier",
                "start": 5408,
                "end": 5416,
                "name": "m_public",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 5417,
                "end": 5425,
                "name": "e_public",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "importKind": "value"
          },
          {
            "type": "TSImportEqualsDeclaration",
            "start": 5431,
            "end": 5478,
            "id": {
              "type": "Identifier",
              "start": 5438,
              "end": 5457,
              "name": "im_private_f_public",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "moduleReference": {
              "type": "TSQualifiedName",
              "start": 5460,
              "end": 5477,
              "left": {
                "type": "Identifier",
                "start": 5460,
                "end": 5468,
                "name": "m_public",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 5469,
                "end": 5477,
                "name": "f_public",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "importKind": "value"
          },
          {
            "type": "TSImportEqualsDeclaration",
            "start": 5483,
            "end": 5530,
            "id": {
              "type": "Identifier",
              "start": 5490,
              "end": 5509,
              "name": "im_private_v_public",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "moduleReference": {
              "type": "TSQualifiedName",
              "start": 5512,
              "end": 5529,
              "left": {
                "type": "Identifier",
                "start": 5512,
                "end": 5520,
                "name": "m_public",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 5521,
                "end": 5529,
                "name": "v_public",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "importKind": "value"
          },
          {
            "type": "TSImportEqualsDeclaration",
            "start": 5535,
            "end": 5582,
            "id": {
              "type": "Identifier",
              "start": 5542,
              "end": 5561,
              "name": "im_private_i_public",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "moduleReference": {
              "type": "TSQualifiedName",
              "start": 5564,
              "end": 5581,
              "left": {
                "type": "Identifier",
                "start": 5564,
                "end": 5572,
                "name": "m_public",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 5573,
                "end": 5581,
                "name": "i_public",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "importKind": "value"
          },
          {
            "type": "TSImportEqualsDeclaration",
            "start": 5587,
            "end": 5636,
            "id": {
              "type": "Identifier",
              "start": 5594,
              "end": 5614,
              "name": "im_private_mi_public",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "moduleReference": {
              "type": "TSQualifiedName",
              "start": 5617,
              "end": 5635,
              "left": {
                "type": "Identifier",
                "start": 5617,
                "end": 5625,
                "name": "m_public",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 5626,
                "end": 5635,
                "name": "mi_public",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "importKind": "value"
          },
          {
            "type": "TSImportEqualsDeclaration",
            "start": 5641,
            "end": 5690,
            "id": {
              "type": "Identifier",
              "start": 5648,
              "end": 5668,
              "name": "im_private_mu_public",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "moduleReference": {
              "type": "TSQualifiedName",
              "start": 5671,
              "end": 5689,
              "left": {
                "type": "Identifier",
                "start": 5671,
                "end": 5679,
                "name": "m_public",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 5680,
                "end": 5689,
                "name": "mu_public",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "importKind": "value"
          },
          {
            "type": "VariableDeclaration",
            "start": 5724,
            "end": 5787,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 5728,
                "end": 5786,
                "id": {
                  "type": "Identifier",
                  "start": 5728,
                  "end": 5758,
                  "name": "privateUse_im_private_c_public",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "NewExpression",
                  "start": 5761,
                  "end": 5786,
                  "callee": {
                    "type": "Identifier",
                    "start": 5765,
                    "end": 5784,
                    "name": "im_private_c_public",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [],
                  "typeArguments": null
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 5792,
            "end": 5861,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 5799,
              "end": 5861,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 5803,
                  "end": 5860,
                  "id": {
                    "type": "Identifier",
                    "start": 5803,
                    "end": 5832,
                    "name": "publicUse_im_private_c_public",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "NewExpression",
                    "start": 5835,
                    "end": 5860,
                    "callee": {
                      "type": "Identifier",
                      "start": 5839,
                      "end": 5858,
                      "name": "im_private_c_public",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [],
                    "typeArguments": null
                  },
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
          },
          {
            "type": "VariableDeclaration",
            "start": 5866,
            "end": 5929,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 5870,
                "end": 5928,
                "id": {
                  "type": "Identifier",
                  "start": 5870,
                  "end": 5900,
                  "name": "privateUse_im_private_e_public",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 5903,
                  "end": 5928,
                  "object": {
                    "type": "Identifier",
                    "start": 5903,
                    "end": 5922,
                    "name": "im_private_e_public",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 5923,
                    "end": 5928,
                    "name": "Happy",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 5934,
            "end": 6004,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 5941,
              "end": 6004,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 5945,
                  "end": 6003,
                  "id": {
                    "type": "Identifier",
                    "start": 5945,
                    "end": 5974,
                    "name": "publicUse_im_private_e_public",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "MemberExpression",
                    "start": 5977,
                    "end": 6003,
                    "object": {
                      "type": "Identifier",
                      "start": 5977,
                      "end": 5996,
                      "name": "im_private_e_public",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 5997,
                      "end": 6003,
                      "name": "Grumpy",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
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
          },
          {
            "type": "VariableDeclaration",
            "start": 6009,
            "end": 6068,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 6013,
                "end": 6067,
                "id": {
                  "type": "Identifier",
                  "start": 6013,
                  "end": 6043,
                  "name": "privateUse_im_private_f_public",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 6046,
                  "end": 6067,
                  "callee": {
                    "type": "Identifier",
                    "start": 6046,
                    "end": 6065,
                    "name": "im_private_f_public",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [],
                  "optional": false,
                  "typeArguments": null
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 6073,
            "end": 6138,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 6080,
              "end": 6138,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 6084,
                  "end": 6137,
                  "id": {
                    "type": "Identifier",
                    "start": 6084,
                    "end": 6113,
                    "name": "publicUse_im_private_f_public",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "CallExpression",
                    "start": 6116,
                    "end": 6137,
                    "callee": {
                      "type": "Identifier",
                      "start": 6116,
                      "end": 6135,
                      "name": "im_private_f_public",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [],
                    "optional": false,
                    "typeArguments": null
                  },
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
          },
          {
            "type": "VariableDeclaration",
            "start": 6143,
            "end": 6200,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 6147,
                "end": 6199,
                "id": {
                  "type": "Identifier",
                  "start": 6147,
                  "end": 6177,
                  "name": "privateUse_im_private_v_public",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 6180,
                  "end": 6199,
                  "name": "im_private_v_public",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 6205,
            "end": 6268,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 6212,
              "end": 6268,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 6216,
                  "end": 6267,
                  "id": {
                    "type": "Identifier",
                    "start": 6216,
                    "end": 6245,
                    "name": "publicUse_im_private_v_public",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "Identifier",
                    "start": 6248,
                    "end": 6267,
                    "name": "im_private_v_public",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
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
          },
          {
            "type": "VariableDeclaration",
            "start": 6273,
            "end": 6329,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 6277,
                "end": 6328,
                "id": {
                  "type": "Identifier",
                  "start": 6277,
                  "end": 6328,
                  "name": "privateUse_im_private_i_public",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 6307,
                    "end": 6328,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 6309,
                      "end": 6328,
                      "typeName": {
                        "type": "Identifier",
                        "start": 6309,
                        "end": 6328,
                        "name": "im_private_i_public",
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
          {
            "type": "ExportNamedDeclaration",
            "start": 6334,
            "end": 6396,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 6341,
              "end": 6396,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 6345,
                  "end": 6395,
                  "id": {
                    "type": "Identifier",
                    "start": 6345,
                    "end": 6395,
                    "name": "publicUse_im_private_i_public",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 6374,
                      "end": 6395,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 6376,
                        "end": 6395,
                        "typeName": {
                          "type": "Identifier",
                          "start": 6376,
                          "end": 6395,
                          "name": "im_private_i_public",
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
          },
          {
            "type": "VariableDeclaration",
            "start": 6401,
            "end": 6468,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 6405,
                "end": 6467,
                "id": {
                  "type": "Identifier",
                  "start": 6405,
                  "end": 6436,
                  "name": "privateUse_im_private_mi_public",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "NewExpression",
                  "start": 6439,
                  "end": 6467,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 6443,
                    "end": 6465,
                    "object": {
                      "type": "Identifier",
                      "start": 6443,
                      "end": 6463,
                      "name": "im_private_mi_public",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 6464,
                      "end": 6465,
                      "name": "c",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "arguments": [],
                  "typeArguments": null
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 6473,
            "end": 6546,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 6480,
              "end": 6546,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 6484,
                  "end": 6545,
                  "id": {
                    "type": "Identifier",
                    "start": 6484,
                    "end": 6514,
                    "name": "publicUse_im_private_mi_public",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "NewExpression",
                    "start": 6517,
                    "end": 6545,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 6521,
                      "end": 6543,
                      "object": {
                        "type": "Identifier",
                        "start": 6521,
                        "end": 6541,
                        "name": "im_private_mi_public",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 6542,
                        "end": 6543,
                        "name": "c",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "arguments": [],
                    "typeArguments": null
                  },
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
          },
          {
            "type": "VariableDeclaration",
            "start": 6551,
            "end": 6611,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 6555,
                "end": 6610,
                "id": {
                  "type": "Identifier",
                  "start": 6555,
                  "end": 6610,
                  "name": "privateUse_im_private_mu_public",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 6586,
                    "end": 6610,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 6588,
                      "end": 6610,
                      "typeName": {
                        "type": "TSQualifiedName",
                        "start": 6588,
                        "end": 6610,
                        "left": {
                          "type": "Identifier",
                          "start": 6588,
                          "end": 6608,
                          "name": "im_private_mu_public",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 6609,
                          "end": 6610,
                          "name": "i",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
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
          {
            "type": "ExportNamedDeclaration",
            "start": 6616,
            "end": 6682,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 6623,
              "end": 6682,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 6627,
                  "end": 6681,
                  "id": {
                    "type": "Identifier",
                    "start": 6627,
                    "end": 6681,
                    "name": "publicUse_im_private_mu_public",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 6657,
                      "end": 6681,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 6659,
                        "end": 6681,
                        "typeName": {
                          "type": "TSQualifiedName",
                          "start": 6659,
                          "end": 6681,
                          "left": {
                            "type": "Identifier",
                            "start": 6659,
                            "end": 6679,
                            "name": "im_private_mu_public",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 6680,
                            "end": 6681,
                            "name": "i",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
