__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 20,
  "end": 6824,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 20,
      "end": 442,
      "id": {
        "type": "Identifier",
        "start": 27,
        "end": 36,
        "decorators": [],
        "name": "m_private",
        "optional": false,
        "typeAnnotation": null
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
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 56,
                "end": 65,
                "decorators": [],
                "name": "c_private",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "start": 66,
                "end": 73,
                "body": []
              },
              "abstract": false,
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
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
                "decorators": [],
                "name": "e_private",
                "optional": false,
                "typeAnnotation": null
              },
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
                      "decorators": [],
                      "name": "Happy",
                      "optional": false,
                      "typeAnnotation": null
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
                      "decorators": [],
                      "name": "Grumpy",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "initializer": null,
                    "computed": false
                  }
                ]
              },
              "const": false,
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
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
                "decorators": [],
                "name": "f_private",
                "optional": false,
                "typeAnnotation": null
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
                        "decorators": [],
                        "name": "c_private",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": []
                    }
                  }
                ]
              },
              "expression": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 214,
            "end": 253,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 221,
              "end": 253,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 225,
                  "end": 252,
                  "id": {
                    "type": "Identifier",
                    "start": 225,
                    "end": 234,
                    "decorators": [],
                    "name": "v_private",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "NewExpression",
                    "start": 237,
                    "end": 252,
                    "callee": {
                      "type": "Identifier",
                      "start": 241,
                      "end": 250,
                      "decorators": [],
                      "name": "c_private",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null,
                    "arguments": []
                  },
                  "definite": false
                }
              ],
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
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
                "decorators": [],
                "name": "i_private",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "extends": [],
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
            "exportKind": "type",
            "attributes": []
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
                "decorators": [],
                "name": "mi_private",
                "optional": false,
                "typeAnnotation": null
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
                      "decorators": [],
                      "id": {
                        "type": "Identifier",
                        "start": 345,
                        "end": 346,
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeParameters": null,
                      "superClass": null,
                      "superTypeArguments": null,
                      "implements": [],
                      "body": {
                        "type": "ClassBody",
                        "start": 347,
                        "end": 358,
                        "body": []
                      },
                      "abstract": false,
                      "declare": false
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": []
                  }
                ]
              },
              "kind": "module",
              "declare": false,
              "global": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
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
                "decorators": [],
                "name": "mu_private",
                "optional": false,
                "typeAnnotation": null
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
                        "decorators": [],
                        "name": "i",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeParameters": null,
                      "extends": [],
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
                    "exportKind": "type",
                    "attributes": []
                  }
                ]
              },
              "kind": "module",
              "declare": false,
              "global": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
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
          "decorators": [],
          "name": "m_public",
          "optional": false,
          "typeAnnotation": null
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
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "start": 505,
                  "end": 513,
                  "decorators": [],
                  "name": "c_public",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeParameters": null,
                "superClass": null,
                "superTypeArguments": null,
                "implements": [],
                "body": {
                  "type": "ClassBody",
                  "start": 514,
                  "end": 521,
                  "body": []
                },
                "abstract": false,
                "declare": false
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": []
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
                  "decorators": [],
                  "name": "e_public",
                  "optional": false,
                  "typeAnnotation": null
                },
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
                        "decorators": [],
                        "name": "Happy",
                        "optional": false,
                        "typeAnnotation": null
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
                        "decorators": [],
                        "name": "Grumpy",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "initializer": null,
                      "computed": false
                    }
                  ]
                },
                "const": false,
                "declare": false
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": []
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
                  "decorators": [],
                  "name": "f_public",
                  "optional": false,
                  "typeAnnotation": null
                },
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
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
                          "decorators": [],
                          "name": "c_public",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null,
                        "arguments": []
                      }
                    }
                  ]
                },
                "expression": false
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": []
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 659,
              "end": 684,
              "declaration": {
                "type": "VariableDeclaration",
                "start": 666,
                "end": 684,
                "kind": "var",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 670,
                    "end": 683,
                    "id": {
                      "type": "Identifier",
                      "start": 670,
                      "end": 678,
                      "decorators": [],
                      "name": "v_public",
                      "optional": false,
                      "typeAnnotation": null
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
                "declare": false
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": []
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
                  "decorators": [],
                  "name": "i_public",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeParameters": null,
                "extends": [],
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
              "exportKind": "type",
              "attributes": []
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
                  "decorators": [],
                  "name": "mi_public",
                  "optional": false,
                  "typeAnnotation": null
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
                        "decorators": [],
                        "id": {
                          "type": "Identifier",
                          "start": 774,
                          "end": 775,
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeParameters": null,
                        "superClass": null,
                        "superTypeArguments": null,
                        "implements": [],
                        "body": {
                          "type": "ClassBody",
                          "start": 776,
                          "end": 787,
                          "body": []
                        },
                        "abstract": false,
                        "declare": false
                      },
                      "specifiers": [],
                      "source": null,
                      "exportKind": "value",
                      "attributes": []
                    }
                  ]
                },
                "kind": "module",
                "declare": false,
                "global": false
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": []
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
                  "decorators": [],
                  "name": "mu_public",
                  "optional": false,
                  "typeAnnotation": null
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
                          "decorators": [],
                          "name": "i",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeParameters": null,
                        "extends": [],
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
                      "exportKind": "type",
                      "attributes": []
                    }
                  ]
                },
                "kind": "module",
                "declare": false,
                "global": false
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": []
            }
          ]
        },
        "kind": "module",
        "declare": false,
        "global": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 872,
      "end": 3810,
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 879,
        "end": 3810,
        "id": {
          "type": "Identifier",
          "start": 886,
          "end": 899,
          "decorators": [],
          "name": "import_public",
          "optional": false,
          "typeAnnotation": null
        },
        "body": {
          "type": "TSModuleBlock",
          "start": 900,
          "end": 3810,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 957,
              "end": 1013,
              "declaration": {
                "type": "TSImportEqualsDeclaration",
                "start": 964,
                "end": 1013,
                "id": {
                  "type": "Identifier",
                  "start": 971,
                  "end": 990,
                  "decorators": [],
                  "name": "im_public_c_private",
                  "optional": false,
                  "typeAnnotation": null
                },
                "moduleReference": {
                  "type": "TSQualifiedName",
                  "start": 993,
                  "end": 1012,
                  "left": {
                    "type": "Identifier",
                    "start": 993,
                    "end": 1002,
                    "decorators": [],
                    "name": "m_private",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 1003,
                    "end": 1012,
                    "decorators": [],
                    "name": "c_private",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "importKind": "value"
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": []
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 1018,
              "end": 1074,
              "declaration": {
                "type": "TSImportEqualsDeclaration",
                "start": 1025,
                "end": 1074,
                "id": {
                  "type": "Identifier",
                  "start": 1032,
                  "end": 1051,
                  "decorators": [],
                  "name": "im_public_e_private",
                  "optional": false,
                  "typeAnnotation": null
                },
                "moduleReference": {
                  "type": "TSQualifiedName",
                  "start": 1054,
                  "end": 1073,
                  "left": {
                    "type": "Identifier",
                    "start": 1054,
                    "end": 1063,
                    "decorators": [],
                    "name": "m_private",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 1064,
                    "end": 1073,
                    "decorators": [],
                    "name": "e_private",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "importKind": "value"
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": []
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 1079,
              "end": 1135,
              "declaration": {
                "type": "TSImportEqualsDeclaration",
                "start": 1086,
                "end": 1135,
                "id": {
                  "type": "Identifier",
                  "start": 1093,
                  "end": 1112,
                  "decorators": [],
                  "name": "im_public_f_private",
                  "optional": false,
                  "typeAnnotation": null
                },
                "moduleReference": {
                  "type": "TSQualifiedName",
                  "start": 1115,
                  "end": 1134,
                  "left": {
                    "type": "Identifier",
                    "start": 1115,
                    "end": 1124,
                    "decorators": [],
                    "name": "m_private",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 1125,
                    "end": 1134,
                    "decorators": [],
                    "name": "f_private",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "importKind": "value"
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": []
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 1140,
              "end": 1196,
              "declaration": {
                "type": "TSImportEqualsDeclaration",
                "start": 1147,
                "end": 1196,
                "id": {
                  "type": "Identifier",
                  "start": 1154,
                  "end": 1173,
                  "decorators": [],
                  "name": "im_public_v_private",
                  "optional": false,
                  "typeAnnotation": null
                },
                "moduleReference": {
                  "type": "TSQualifiedName",
                  "start": 1176,
                  "end": 1195,
                  "left": {
                    "type": "Identifier",
                    "start": 1176,
                    "end": 1185,
                    "decorators": [],
                    "name": "m_private",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 1186,
                    "end": 1195,
                    "decorators": [],
                    "name": "v_private",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "importKind": "value"
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": []
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 1201,
              "end": 1257,
              "declaration": {
                "type": "TSImportEqualsDeclaration",
                "start": 1208,
                "end": 1257,
                "id": {
                  "type": "Identifier",
                  "start": 1215,
                  "end": 1234,
                  "decorators": [],
                  "name": "im_public_i_private",
                  "optional": false,
                  "typeAnnotation": null
                },
                "moduleReference": {
                  "type": "TSQualifiedName",
                  "start": 1237,
                  "end": 1256,
                  "left": {
                    "type": "Identifier",
                    "start": 1237,
                    "end": 1246,
                    "decorators": [],
                    "name": "m_private",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 1247,
                    "end": 1256,
                    "decorators": [],
                    "name": "i_private",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "importKind": "value"
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": []
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 1262,
              "end": 1320,
              "declaration": {
                "type": "TSImportEqualsDeclaration",
                "start": 1269,
                "end": 1320,
                "id": {
                  "type": "Identifier",
                  "start": 1276,
                  "end": 1296,
                  "decorators": [],
                  "name": "im_public_mi_private",
                  "optional": false,
                  "typeAnnotation": null
                },
                "moduleReference": {
                  "type": "TSQualifiedName",
                  "start": 1299,
                  "end": 1319,
                  "left": {
                    "type": "Identifier",
                    "start": 1299,
                    "end": 1308,
                    "decorators": [],
                    "name": "m_private",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 1309,
                    "end": 1319,
                    "decorators": [],
                    "name": "mi_private",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "importKind": "value"
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": []
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 1325,
              "end": 1383,
              "declaration": {
                "type": "TSImportEqualsDeclaration",
                "start": 1332,
                "end": 1383,
                "id": {
                  "type": "Identifier",
                  "start": 1339,
                  "end": 1359,
                  "decorators": [],
                  "name": "im_public_mu_private",
                  "optional": false,
                  "typeAnnotation": null
                },
                "moduleReference": {
                  "type": "TSQualifiedName",
                  "start": 1362,
                  "end": 1382,
                  "left": {
                    "type": "Identifier",
                    "start": 1362,
                    "end": 1371,
                    "decorators": [],
                    "name": "m_private",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 1372,
                    "end": 1382,
                    "decorators": [],
                    "name": "mu_private",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "importKind": "value"
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": []
            },
            {
              "type": "VariableDeclaration",
              "start": 1427,
              "end": 1490,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 1431,
                  "end": 1489,
                  "id": {
                    "type": "Identifier",
                    "start": 1431,
                    "end": 1461,
                    "decorators": [],
                    "name": "privateUse_im_public_c_private",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "NewExpression",
                    "start": 1464,
                    "end": 1489,
                    "callee": {
                      "type": "Identifier",
                      "start": 1468,
                      "end": 1487,
                      "decorators": [],
                      "name": "im_public_c_private",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null,
                    "arguments": []
                  },
                  "definite": false
                }
              ],
              "declare": false
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 1495,
              "end": 1564,
              "declaration": {
                "type": "VariableDeclaration",
                "start": 1502,
                "end": 1564,
                "kind": "var",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 1506,
                    "end": 1563,
                    "id": {
                      "type": "Identifier",
                      "start": 1506,
                      "end": 1535,
                      "decorators": [],
                      "name": "publicUse_im_public_c_private",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "init": {
                      "type": "NewExpression",
                      "start": 1538,
                      "end": 1563,
                      "callee": {
                        "type": "Identifier",
                        "start": 1542,
                        "end": 1561,
                        "decorators": [],
                        "name": "im_public_c_private",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": []
                    },
                    "definite": false
                  }
                ],
                "declare": false
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": []
            },
            {
              "type": "VariableDeclaration",
              "start": 1569,
              "end": 1632,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 1573,
                  "end": 1631,
                  "id": {
                    "type": "Identifier",
                    "start": 1573,
                    "end": 1603,
                    "decorators": [],
                    "name": "privateUse_im_public_e_private",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "MemberExpression",
                    "start": 1606,
                    "end": 1631,
                    "object": {
                      "type": "Identifier",
                      "start": 1606,
                      "end": 1625,
                      "decorators": [],
                      "name": "im_public_e_private",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 1626,
                      "end": 1631,
                      "decorators": [],
                      "name": "Happy",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "definite": false
                }
              ],
              "declare": false
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 1637,
              "end": 1707,
              "declaration": {
                "type": "VariableDeclaration",
                "start": 1644,
                "end": 1707,
                "kind": "var",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 1648,
                    "end": 1706,
                    "id": {
                      "type": "Identifier",
                      "start": 1648,
                      "end": 1677,
                      "decorators": [],
                      "name": "publicUse_im_public_e_private",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "init": {
                      "type": "MemberExpression",
                      "start": 1680,
                      "end": 1706,
                      "object": {
                        "type": "Identifier",
                        "start": 1680,
                        "end": 1699,
                        "decorators": [],
                        "name": "im_public_e_private",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 1700,
                        "end": 1706,
                        "decorators": [],
                        "name": "Grumpy",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "definite": false
                  }
                ],
                "declare": false
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": []
            },
            {
              "type": "VariableDeclaration",
              "start": 1712,
              "end": 1771,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 1716,
                  "end": 1770,
                  "id": {
                    "type": "Identifier",
                    "start": 1716,
                    "end": 1746,
                    "decorators": [],
                    "name": "privateUse_im_public_f_private",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "CallExpression",
                    "start": 1749,
                    "end": 1770,
                    "callee": {
                      "type": "Identifier",
                      "start": 1749,
                      "end": 1768,
                      "decorators": [],
                      "name": "im_public_f_private",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false
                  },
                  "definite": false
                }
              ],
              "declare": false
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 1776,
              "end": 1841,
              "declaration": {
                "type": "VariableDeclaration",
                "start": 1783,
                "end": 1841,
                "kind": "var",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 1787,
                    "end": 1840,
                    "id": {
                      "type": "Identifier",
                      "start": 1787,
                      "end": 1816,
                      "decorators": [],
                      "name": "publicUse_im_public_f_private",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "init": {
                      "type": "CallExpression",
                      "start": 1819,
                      "end": 1840,
                      "callee": {
                        "type": "Identifier",
                        "start": 1819,
                        "end": 1838,
                        "decorators": [],
                        "name": "im_public_f_private",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
                    },
                    "definite": false
                  }
                ],
                "declare": false
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": []
            },
            {
              "type": "VariableDeclaration",
              "start": 1846,
              "end": 1903,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 1850,
                  "end": 1902,
                  "id": {
                    "type": "Identifier",
                    "start": 1850,
                    "end": 1880,
                    "decorators": [],
                    "name": "privateUse_im_public_v_private",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "Identifier",
                    "start": 1883,
                    "end": 1902,
                    "decorators": [],
                    "name": "im_public_v_private",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "definite": false
                }
              ],
              "declare": false
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 1908,
              "end": 1971,
              "declaration": {
                "type": "VariableDeclaration",
                "start": 1915,
                "end": 1971,
                "kind": "var",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 1919,
                    "end": 1970,
                    "id": {
                      "type": "Identifier",
                      "start": 1919,
                      "end": 1948,
                      "decorators": [],
                      "name": "publicUse_im_public_v_private",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "init": {
                      "type": "Identifier",
                      "start": 1951,
                      "end": 1970,
                      "decorators": [],
                      "name": "im_public_v_private",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "definite": false
                  }
                ],
                "declare": false
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": []
            },
            {
              "type": "VariableDeclaration",
              "start": 1976,
              "end": 2032,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 1980,
                  "end": 2031,
                  "id": {
                    "type": "Identifier",
                    "start": 1980,
                    "end": 2031,
                    "decorators": [],
                    "name": "privateUse_im_public_i_private",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2010,
                      "end": 2031,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 2012,
                        "end": 2031,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2012,
                          "end": 2031,
                          "decorators": [],
                          "name": "im_public_i_private",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "declare": false
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 2037,
              "end": 2099,
              "declaration": {
                "type": "VariableDeclaration",
                "start": 2044,
                "end": 2099,
                "kind": "var",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 2048,
                    "end": 2098,
                    "id": {
                      "type": "Identifier",
                      "start": 2048,
                      "end": 2098,
                      "decorators": [],
                      "name": "publicUse_im_public_i_private",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 2077,
                        "end": 2098,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 2079,
                          "end": 2098,
                          "typeName": {
                            "type": "Identifier",
                            "start": 2079,
                            "end": 2098,
                            "decorators": [],
                            "name": "im_public_i_private",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      }
                    },
                    "init": null,
                    "definite": false
                  }
                ],
                "declare": false
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": []
            },
            {
              "type": "VariableDeclaration",
              "start": 2104,
              "end": 2171,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 2108,
                  "end": 2170,
                  "id": {
                    "type": "Identifier",
                    "start": 2108,
                    "end": 2139,
                    "decorators": [],
                    "name": "privateUse_im_public_mi_private",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "NewExpression",
                    "start": 2142,
                    "end": 2170,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 2146,
                      "end": 2168,
                      "object": {
                        "type": "Identifier",
                        "start": 2146,
                        "end": 2166,
                        "decorators": [],
                        "name": "im_public_mi_private",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 2167,
                        "end": 2168,
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "typeArguments": null,
                    "arguments": []
                  },
                  "definite": false
                }
              ],
              "declare": false
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 2176,
              "end": 2249,
              "declaration": {
                "type": "VariableDeclaration",
                "start": 2183,
                "end": 2249,
                "kind": "var",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 2187,
                    "end": 2248,
                    "id": {
                      "type": "Identifier",
                      "start": 2187,
                      "end": 2217,
                      "decorators": [],
                      "name": "publicUse_im_public_mi_private",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "init": {
                      "type": "NewExpression",
                      "start": 2220,
                      "end": 2248,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 2224,
                        "end": 2246,
                        "object": {
                          "type": "Identifier",
                          "start": 2224,
                          "end": 2244,
                          "decorators": [],
                          "name": "im_public_mi_private",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 2245,
                          "end": 2246,
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": []
                    },
                    "definite": false
                  }
                ],
                "declare": false
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": []
            },
            {
              "type": "VariableDeclaration",
              "start": 2254,
              "end": 2314,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 2258,
                  "end": 2313,
                  "id": {
                    "type": "Identifier",
                    "start": 2258,
                    "end": 2313,
                    "decorators": [],
                    "name": "privateUse_im_public_mu_private",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2289,
                      "end": 2313,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 2291,
                        "end": 2313,
                        "typeName": {
                          "type": "TSQualifiedName",
                          "start": 2291,
                          "end": 2313,
                          "left": {
                            "type": "Identifier",
                            "start": 2291,
                            "end": 2311,
                            "decorators": [],
                            "name": "im_public_mu_private",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 2312,
                            "end": 2313,
                            "decorators": [],
                            "name": "i",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "declare": false
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 2319,
              "end": 2385,
              "declaration": {
                "type": "VariableDeclaration",
                "start": 2326,
                "end": 2385,
                "kind": "var",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 2330,
                    "end": 2384,
                    "id": {
                      "type": "Identifier",
                      "start": 2330,
                      "end": 2384,
                      "decorators": [],
                      "name": "publicUse_im_public_mu_private",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 2360,
                        "end": 2384,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 2362,
                          "end": 2384,
                          "typeName": {
                            "type": "TSQualifiedName",
                            "start": 2362,
                            "end": 2384,
                            "left": {
                              "type": "Identifier",
                              "start": 2362,
                              "end": 2382,
                              "decorators": [],
                              "name": "im_public_mu_private",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 2383,
                              "end": 2384,
                              "decorators": [],
                              "name": "i",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "typeArguments": null
                        }
                      }
                    },
                    "init": null,
                    "definite": false
                  }
                ],
                "declare": false
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": []
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 2445,
              "end": 2498,
              "declaration": {
                "type": "TSImportEqualsDeclaration",
                "start": 2452,
                "end": 2498,
                "id": {
                  "type": "Identifier",
                  "start": 2459,
                  "end": 2477,
                  "decorators": [],
                  "name": "im_public_c_public",
                  "optional": false,
                  "typeAnnotation": null
                },
                "moduleReference": {
                  "type": "TSQualifiedName",
                  "start": 2480,
                  "end": 2497,
                  "left": {
                    "type": "Identifier",
                    "start": 2480,
                    "end": 2488,
                    "decorators": [],
                    "name": "m_public",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 2489,
                    "end": 2497,
                    "decorators": [],
                    "name": "c_public",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "importKind": "value"
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": []
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 2503,
              "end": 2556,
              "declaration": {
                "type": "TSImportEqualsDeclaration",
                "start": 2510,
                "end": 2556,
                "id": {
                  "type": "Identifier",
                  "start": 2517,
                  "end": 2535,
                  "decorators": [],
                  "name": "im_public_e_public",
                  "optional": false,
                  "typeAnnotation": null
                },
                "moduleReference": {
                  "type": "TSQualifiedName",
                  "start": 2538,
                  "end": 2555,
                  "left": {
                    "type": "Identifier",
                    "start": 2538,
                    "end": 2546,
                    "decorators": [],
                    "name": "m_public",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 2547,
                    "end": 2555,
                    "decorators": [],
                    "name": "e_public",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "importKind": "value"
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": []
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 2561,
              "end": 2614,
              "declaration": {
                "type": "TSImportEqualsDeclaration",
                "start": 2568,
                "end": 2614,
                "id": {
                  "type": "Identifier",
                  "start": 2575,
                  "end": 2593,
                  "decorators": [],
                  "name": "im_public_f_public",
                  "optional": false,
                  "typeAnnotation": null
                },
                "moduleReference": {
                  "type": "TSQualifiedName",
                  "start": 2596,
                  "end": 2613,
                  "left": {
                    "type": "Identifier",
                    "start": 2596,
                    "end": 2604,
                    "decorators": [],
                    "name": "m_public",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 2605,
                    "end": 2613,
                    "decorators": [],
                    "name": "f_public",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "importKind": "value"
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": []
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 2619,
              "end": 2672,
              "declaration": {
                "type": "TSImportEqualsDeclaration",
                "start": 2626,
                "end": 2672,
                "id": {
                  "type": "Identifier",
                  "start": 2633,
                  "end": 2651,
                  "decorators": [],
                  "name": "im_public_v_public",
                  "optional": false,
                  "typeAnnotation": null
                },
                "moduleReference": {
                  "type": "TSQualifiedName",
                  "start": 2654,
                  "end": 2671,
                  "left": {
                    "type": "Identifier",
                    "start": 2654,
                    "end": 2662,
                    "decorators": [],
                    "name": "m_public",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 2663,
                    "end": 2671,
                    "decorators": [],
                    "name": "v_public",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "importKind": "value"
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": []
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 2677,
              "end": 2730,
              "declaration": {
                "type": "TSImportEqualsDeclaration",
                "start": 2684,
                "end": 2730,
                "id": {
                  "type": "Identifier",
                  "start": 2691,
                  "end": 2709,
                  "decorators": [],
                  "name": "im_public_i_public",
                  "optional": false,
                  "typeAnnotation": null
                },
                "moduleReference": {
                  "type": "TSQualifiedName",
                  "start": 2712,
                  "end": 2729,
                  "left": {
                    "type": "Identifier",
                    "start": 2712,
                    "end": 2720,
                    "decorators": [],
                    "name": "m_public",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 2721,
                    "end": 2729,
                    "decorators": [],
                    "name": "i_public",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "importKind": "value"
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": []
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 2735,
              "end": 2790,
              "declaration": {
                "type": "TSImportEqualsDeclaration",
                "start": 2742,
                "end": 2790,
                "id": {
                  "type": "Identifier",
                  "start": 2749,
                  "end": 2768,
                  "decorators": [],
                  "name": "im_public_mi_public",
                  "optional": false,
                  "typeAnnotation": null
                },
                "moduleReference": {
                  "type": "TSQualifiedName",
                  "start": 2771,
                  "end": 2789,
                  "left": {
                    "type": "Identifier",
                    "start": 2771,
                    "end": 2779,
                    "decorators": [],
                    "name": "m_public",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 2780,
                    "end": 2789,
                    "decorators": [],
                    "name": "mi_public",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "importKind": "value"
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": []
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 2795,
              "end": 2850,
              "declaration": {
                "type": "TSImportEqualsDeclaration",
                "start": 2802,
                "end": 2850,
                "id": {
                  "type": "Identifier",
                  "start": 2809,
                  "end": 2828,
                  "decorators": [],
                  "name": "im_public_mu_public",
                  "optional": false,
                  "typeAnnotation": null
                },
                "moduleReference": {
                  "type": "TSQualifiedName",
                  "start": 2831,
                  "end": 2849,
                  "left": {
                    "type": "Identifier",
                    "start": 2831,
                    "end": 2839,
                    "decorators": [],
                    "name": "m_public",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 2840,
                    "end": 2849,
                    "decorators": [],
                    "name": "mu_public",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "importKind": "value"
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": []
            },
            {
              "type": "VariableDeclaration",
              "start": 2878,
              "end": 2939,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 2882,
                  "end": 2938,
                  "id": {
                    "type": "Identifier",
                    "start": 2882,
                    "end": 2911,
                    "decorators": [],
                    "name": "privateUse_im_public_c_public",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "NewExpression",
                    "start": 2914,
                    "end": 2938,
                    "callee": {
                      "type": "Identifier",
                      "start": 2918,
                      "end": 2936,
                      "decorators": [],
                      "name": "im_public_c_public",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null,
                    "arguments": []
                  },
                  "definite": false
                }
              ],
              "declare": false
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 2944,
              "end": 3011,
              "declaration": {
                "type": "VariableDeclaration",
                "start": 2951,
                "end": 3011,
                "kind": "var",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 2955,
                    "end": 3010,
                    "id": {
                      "type": "Identifier",
                      "start": 2955,
                      "end": 2983,
                      "decorators": [],
                      "name": "publicUse_im_public_c_public",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "init": {
                      "type": "NewExpression",
                      "start": 2986,
                      "end": 3010,
                      "callee": {
                        "type": "Identifier",
                        "start": 2990,
                        "end": 3008,
                        "decorators": [],
                        "name": "im_public_c_public",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": []
                    },
                    "definite": false
                  }
                ],
                "declare": false
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": []
            },
            {
              "type": "VariableDeclaration",
              "start": 3016,
              "end": 3077,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 3020,
                  "end": 3076,
                  "id": {
                    "type": "Identifier",
                    "start": 3020,
                    "end": 3049,
                    "decorators": [],
                    "name": "privateUse_im_public_e_public",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "MemberExpression",
                    "start": 3052,
                    "end": 3076,
                    "object": {
                      "type": "Identifier",
                      "start": 3052,
                      "end": 3070,
                      "decorators": [],
                      "name": "im_public_e_public",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 3071,
                      "end": 3076,
                      "decorators": [],
                      "name": "Happy",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "definite": false
                }
              ],
              "declare": false
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 3082,
              "end": 3150,
              "declaration": {
                "type": "VariableDeclaration",
                "start": 3089,
                "end": 3150,
                "kind": "var",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 3093,
                    "end": 3149,
                    "id": {
                      "type": "Identifier",
                      "start": 3093,
                      "end": 3121,
                      "decorators": [],
                      "name": "publicUse_im_public_e_public",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "init": {
                      "type": "MemberExpression",
                      "start": 3124,
                      "end": 3149,
                      "object": {
                        "type": "Identifier",
                        "start": 3124,
                        "end": 3142,
                        "decorators": [],
                        "name": "im_public_e_public",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 3143,
                        "end": 3149,
                        "decorators": [],
                        "name": "Grumpy",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "definite": false
                  }
                ],
                "declare": false
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": []
            },
            {
              "type": "VariableDeclaration",
              "start": 3155,
              "end": 3212,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 3159,
                  "end": 3211,
                  "id": {
                    "type": "Identifier",
                    "start": 3159,
                    "end": 3188,
                    "decorators": [],
                    "name": "privateUse_im_public_f_public",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "CallExpression",
                    "start": 3191,
                    "end": 3211,
                    "callee": {
                      "type": "Identifier",
                      "start": 3191,
                      "end": 3209,
                      "decorators": [],
                      "name": "im_public_f_public",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false
                  },
                  "definite": false
                }
              ],
              "declare": false
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 3217,
              "end": 3280,
              "declaration": {
                "type": "VariableDeclaration",
                "start": 3224,
                "end": 3280,
                "kind": "var",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 3228,
                    "end": 3279,
                    "id": {
                      "type": "Identifier",
                      "start": 3228,
                      "end": 3256,
                      "decorators": [],
                      "name": "publicUse_im_public_f_public",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "init": {
                      "type": "CallExpression",
                      "start": 3259,
                      "end": 3279,
                      "callee": {
                        "type": "Identifier",
                        "start": 3259,
                        "end": 3277,
                        "decorators": [],
                        "name": "im_public_f_public",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
                    },
                    "definite": false
                  }
                ],
                "declare": false
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": []
            },
            {
              "type": "VariableDeclaration",
              "start": 3285,
              "end": 3340,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 3289,
                  "end": 3339,
                  "id": {
                    "type": "Identifier",
                    "start": 3289,
                    "end": 3318,
                    "decorators": [],
                    "name": "privateUse_im_public_v_public",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "Identifier",
                    "start": 3321,
                    "end": 3339,
                    "decorators": [],
                    "name": "im_public_v_public",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "definite": false
                }
              ],
              "declare": false
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 3345,
              "end": 3406,
              "declaration": {
                "type": "VariableDeclaration",
                "start": 3352,
                "end": 3406,
                "kind": "var",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 3356,
                    "end": 3405,
                    "id": {
                      "type": "Identifier",
                      "start": 3356,
                      "end": 3384,
                      "decorators": [],
                      "name": "publicUse_im_public_v_public",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "init": {
                      "type": "Identifier",
                      "start": 3387,
                      "end": 3405,
                      "decorators": [],
                      "name": "im_public_v_public",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "definite": false
                  }
                ],
                "declare": false
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": []
            },
            {
              "type": "VariableDeclaration",
              "start": 3411,
              "end": 3465,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 3415,
                  "end": 3464,
                  "id": {
                    "type": "Identifier",
                    "start": 3415,
                    "end": 3464,
                    "decorators": [],
                    "name": "privateUse_im_public_i_public",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 3444,
                      "end": 3464,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 3446,
                        "end": 3464,
                        "typeName": {
                          "type": "Identifier",
                          "start": 3446,
                          "end": 3464,
                          "decorators": [],
                          "name": "im_public_i_public",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "declare": false
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 3470,
              "end": 3530,
              "declaration": {
                "type": "VariableDeclaration",
                "start": 3477,
                "end": 3530,
                "kind": "var",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 3481,
                    "end": 3529,
                    "id": {
                      "type": "Identifier",
                      "start": 3481,
                      "end": 3529,
                      "decorators": [],
                      "name": "publicUse_im_public_i_public",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 3509,
                        "end": 3529,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 3511,
                          "end": 3529,
                          "typeName": {
                            "type": "Identifier",
                            "start": 3511,
                            "end": 3529,
                            "decorators": [],
                            "name": "im_public_i_public",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      }
                    },
                    "init": null,
                    "definite": false
                  }
                ],
                "declare": false
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": []
            },
            {
              "type": "VariableDeclaration",
              "start": 3535,
              "end": 3600,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 3539,
                  "end": 3599,
                  "id": {
                    "type": "Identifier",
                    "start": 3539,
                    "end": 3569,
                    "decorators": [],
                    "name": "privateUse_im_public_mi_public",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "NewExpression",
                    "start": 3572,
                    "end": 3599,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 3576,
                      "end": 3597,
                      "object": {
                        "type": "Identifier",
                        "start": 3576,
                        "end": 3595,
                        "decorators": [],
                        "name": "im_public_mi_public",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 3596,
                        "end": 3597,
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "typeArguments": null,
                    "arguments": []
                  },
                  "definite": false
                }
              ],
              "declare": false
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 3605,
              "end": 3676,
              "declaration": {
                "type": "VariableDeclaration",
                "start": 3612,
                "end": 3676,
                "kind": "var",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 3616,
                    "end": 3675,
                    "id": {
                      "type": "Identifier",
                      "start": 3616,
                      "end": 3645,
                      "decorators": [],
                      "name": "publicUse_im_public_mi_public",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "init": {
                      "type": "NewExpression",
                      "start": 3648,
                      "end": 3675,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 3652,
                        "end": 3673,
                        "object": {
                          "type": "Identifier",
                          "start": 3652,
                          "end": 3671,
                          "decorators": [],
                          "name": "im_public_mi_public",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 3672,
                          "end": 3673,
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": []
                    },
                    "definite": false
                  }
                ],
                "declare": false
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": []
            },
            {
              "type": "VariableDeclaration",
              "start": 3681,
              "end": 3739,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 3685,
                  "end": 3738,
                  "id": {
                    "type": "Identifier",
                    "start": 3685,
                    "end": 3738,
                    "decorators": [],
                    "name": "privateUse_im_public_mu_public",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 3715,
                      "end": 3738,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 3717,
                        "end": 3738,
                        "typeName": {
                          "type": "TSQualifiedName",
                          "start": 3717,
                          "end": 3738,
                          "left": {
                            "type": "Identifier",
                            "start": 3717,
                            "end": 3736,
                            "decorators": [],
                            "name": "im_public_mu_public",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 3737,
                            "end": 3738,
                            "decorators": [],
                            "name": "i",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "declare": false
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 3744,
              "end": 3808,
              "declaration": {
                "type": "VariableDeclaration",
                "start": 3751,
                "end": 3808,
                "kind": "var",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 3755,
                    "end": 3807,
                    "id": {
                      "type": "Identifier",
                      "start": 3755,
                      "end": 3807,
                      "decorators": [],
                      "name": "publicUse_im_public_mu_public",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 3784,
                        "end": 3807,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 3786,
                          "end": 3807,
                          "typeName": {
                            "type": "TSQualifiedName",
                            "start": 3786,
                            "end": 3807,
                            "left": {
                              "type": "Identifier",
                              "start": 3786,
                              "end": 3805,
                              "decorators": [],
                              "name": "im_public_mu_public",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 3806,
                              "end": 3807,
                              "decorators": [],
                              "name": "i",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "typeArguments": null
                        }
                      }
                    },
                    "init": null,
                    "definite": false
                  }
                ],
                "declare": false
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": []
            }
          ]
        },
        "kind": "module",
        "declare": false,
        "global": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "TSModuleDeclaration",
      "start": 3812,
      "end": 6824,
      "id": {
        "type": "Identifier",
        "start": 3819,
        "end": 3833,
        "decorators": [],
        "name": "import_private",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 3834,
        "end": 6824,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 3894,
            "end": 3951,
            "declaration": {
              "type": "TSImportEqualsDeclaration",
              "start": 3901,
              "end": 3951,
              "id": {
                "type": "Identifier",
                "start": 3908,
                "end": 3928,
                "decorators": [],
                "name": "im_private_c_private",
                "optional": false,
                "typeAnnotation": null
              },
              "moduleReference": {
                "type": "TSQualifiedName",
                "start": 3931,
                "end": 3950,
                "left": {
                  "type": "Identifier",
                  "start": 3931,
                  "end": 3940,
                  "decorators": [],
                  "name": "m_private",
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "Identifier",
                  "start": 3941,
                  "end": 3950,
                  "decorators": [],
                  "name": "c_private",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "importKind": "value"
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 3956,
            "end": 4013,
            "declaration": {
              "type": "TSImportEqualsDeclaration",
              "start": 3963,
              "end": 4013,
              "id": {
                "type": "Identifier",
                "start": 3970,
                "end": 3990,
                "decorators": [],
                "name": "im_private_e_private",
                "optional": false,
                "typeAnnotation": null
              },
              "moduleReference": {
                "type": "TSQualifiedName",
                "start": 3993,
                "end": 4012,
                "left": {
                  "type": "Identifier",
                  "start": 3993,
                  "end": 4002,
                  "decorators": [],
                  "name": "m_private",
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "Identifier",
                  "start": 4003,
                  "end": 4012,
                  "decorators": [],
                  "name": "e_private",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "importKind": "value"
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 4018,
            "end": 4075,
            "declaration": {
              "type": "TSImportEqualsDeclaration",
              "start": 4025,
              "end": 4075,
              "id": {
                "type": "Identifier",
                "start": 4032,
                "end": 4052,
                "decorators": [],
                "name": "im_private_f_private",
                "optional": false,
                "typeAnnotation": null
              },
              "moduleReference": {
                "type": "TSQualifiedName",
                "start": 4055,
                "end": 4074,
                "left": {
                  "type": "Identifier",
                  "start": 4055,
                  "end": 4064,
                  "decorators": [],
                  "name": "m_private",
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "Identifier",
                  "start": 4065,
                  "end": 4074,
                  "decorators": [],
                  "name": "f_private",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "importKind": "value"
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 4080,
            "end": 4137,
            "declaration": {
              "type": "TSImportEqualsDeclaration",
              "start": 4087,
              "end": 4137,
              "id": {
                "type": "Identifier",
                "start": 4094,
                "end": 4114,
                "decorators": [],
                "name": "im_private_v_private",
                "optional": false,
                "typeAnnotation": null
              },
              "moduleReference": {
                "type": "TSQualifiedName",
                "start": 4117,
                "end": 4136,
                "left": {
                  "type": "Identifier",
                  "start": 4117,
                  "end": 4126,
                  "decorators": [],
                  "name": "m_private",
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "Identifier",
                  "start": 4127,
                  "end": 4136,
                  "decorators": [],
                  "name": "v_private",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "importKind": "value"
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 4142,
            "end": 4199,
            "declaration": {
              "type": "TSImportEqualsDeclaration",
              "start": 4149,
              "end": 4199,
              "id": {
                "type": "Identifier",
                "start": 4156,
                "end": 4176,
                "decorators": [],
                "name": "im_private_i_private",
                "optional": false,
                "typeAnnotation": null
              },
              "moduleReference": {
                "type": "TSQualifiedName",
                "start": 4179,
                "end": 4198,
                "left": {
                  "type": "Identifier",
                  "start": 4179,
                  "end": 4188,
                  "decorators": [],
                  "name": "m_private",
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "Identifier",
                  "start": 4189,
                  "end": 4198,
                  "decorators": [],
                  "name": "i_private",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "importKind": "value"
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 4204,
            "end": 4263,
            "declaration": {
              "type": "TSImportEqualsDeclaration",
              "start": 4211,
              "end": 4263,
              "id": {
                "type": "Identifier",
                "start": 4218,
                "end": 4239,
                "decorators": [],
                "name": "im_private_mi_private",
                "optional": false,
                "typeAnnotation": null
              },
              "moduleReference": {
                "type": "TSQualifiedName",
                "start": 4242,
                "end": 4262,
                "left": {
                  "type": "Identifier",
                  "start": 4242,
                  "end": 4251,
                  "decorators": [],
                  "name": "m_private",
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "Identifier",
                  "start": 4252,
                  "end": 4262,
                  "decorators": [],
                  "name": "mi_private",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "importKind": "value"
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 4268,
            "end": 4327,
            "declaration": {
              "type": "TSImportEqualsDeclaration",
              "start": 4275,
              "end": 4327,
              "id": {
                "type": "Identifier",
                "start": 4282,
                "end": 4303,
                "decorators": [],
                "name": "im_private_mu_private",
                "optional": false,
                "typeAnnotation": null
              },
              "moduleReference": {
                "type": "TSQualifiedName",
                "start": 4306,
                "end": 4326,
                "left": {
                  "type": "Identifier",
                  "start": 4306,
                  "end": 4315,
                  "decorators": [],
                  "name": "m_private",
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "Identifier",
                  "start": 4316,
                  "end": 4326,
                  "decorators": [],
                  "name": "mu_private",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "importKind": "value"
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "VariableDeclaration",
            "start": 4361,
            "end": 4426,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 4365,
                "end": 4425,
                "id": {
                  "type": "Identifier",
                  "start": 4365,
                  "end": 4396,
                  "decorators": [],
                  "name": "privateUse_im_private_c_private",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "NewExpression",
                  "start": 4399,
                  "end": 4425,
                  "callee": {
                    "type": "Identifier",
                    "start": 4403,
                    "end": 4423,
                    "decorators": [],
                    "name": "im_private_c_private",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": []
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 4431,
            "end": 4502,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 4438,
              "end": 4502,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 4442,
                  "end": 4501,
                  "id": {
                    "type": "Identifier",
                    "start": 4442,
                    "end": 4472,
                    "decorators": [],
                    "name": "publicUse_im_private_c_private",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "NewExpression",
                    "start": 4475,
                    "end": 4501,
                    "callee": {
                      "type": "Identifier",
                      "start": 4479,
                      "end": 4499,
                      "decorators": [],
                      "name": "im_private_c_private",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null,
                    "arguments": []
                  },
                  "definite": false
                }
              ],
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "VariableDeclaration",
            "start": 4507,
            "end": 4572,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 4511,
                "end": 4571,
                "id": {
                  "type": "Identifier",
                  "start": 4511,
                  "end": 4542,
                  "decorators": [],
                  "name": "privateUse_im_private_e_private",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 4545,
                  "end": 4571,
                  "object": {
                    "type": "Identifier",
                    "start": 4545,
                    "end": 4565,
                    "decorators": [],
                    "name": "im_private_e_private",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 4566,
                    "end": 4571,
                    "decorators": [],
                    "name": "Happy",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 4577,
            "end": 4649,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 4584,
              "end": 4649,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 4588,
                  "end": 4648,
                  "id": {
                    "type": "Identifier",
                    "start": 4588,
                    "end": 4618,
                    "decorators": [],
                    "name": "publicUse_im_private_e_private",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "MemberExpression",
                    "start": 4621,
                    "end": 4648,
                    "object": {
                      "type": "Identifier",
                      "start": 4621,
                      "end": 4641,
                      "decorators": [],
                      "name": "im_private_e_private",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 4642,
                      "end": 4648,
                      "decorators": [],
                      "name": "Grumpy",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "definite": false
                }
              ],
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "VariableDeclaration",
            "start": 4654,
            "end": 4715,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 4658,
                "end": 4714,
                "id": {
                  "type": "Identifier",
                  "start": 4658,
                  "end": 4689,
                  "decorators": [],
                  "name": "privateUse_im_private_f_private",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 4692,
                  "end": 4714,
                  "callee": {
                    "type": "Identifier",
                    "start": 4692,
                    "end": 4712,
                    "decorators": [],
                    "name": "im_private_f_private",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 4720,
            "end": 4787,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 4727,
              "end": 4787,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 4731,
                  "end": 4786,
                  "id": {
                    "type": "Identifier",
                    "start": 4731,
                    "end": 4761,
                    "decorators": [],
                    "name": "publicUse_im_private_f_private",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "CallExpression",
                    "start": 4764,
                    "end": 4786,
                    "callee": {
                      "type": "Identifier",
                      "start": 4764,
                      "end": 4784,
                      "decorators": [],
                      "name": "im_private_f_private",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false
                  },
                  "definite": false
                }
              ],
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "VariableDeclaration",
            "start": 4792,
            "end": 4851,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 4796,
                "end": 4850,
                "id": {
                  "type": "Identifier",
                  "start": 4796,
                  "end": 4827,
                  "decorators": [],
                  "name": "privateUse_im_private_v_private",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 4830,
                  "end": 4850,
                  "decorators": [],
                  "name": "im_private_v_private",
                  "optional": false,
                  "typeAnnotation": null
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 4856,
            "end": 4921,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 4863,
              "end": 4921,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 4867,
                  "end": 4920,
                  "id": {
                    "type": "Identifier",
                    "start": 4867,
                    "end": 4897,
                    "decorators": [],
                    "name": "publicUse_im_private_v_private",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "Identifier",
                    "start": 4900,
                    "end": 4920,
                    "decorators": [],
                    "name": "im_private_v_private",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "definite": false
                }
              ],
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "VariableDeclaration",
            "start": 4926,
            "end": 4984,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 4930,
                "end": 4983,
                "id": {
                  "type": "Identifier",
                  "start": 4930,
                  "end": 4983,
                  "decorators": [],
                  "name": "privateUse_im_private_i_private",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 4961,
                    "end": 4983,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 4963,
                      "end": 4983,
                      "typeName": {
                        "type": "Identifier",
                        "start": 4963,
                        "end": 4983,
                        "decorators": [],
                        "name": "im_private_i_private",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                },
                "init": null,
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 4989,
            "end": 5053,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 4996,
              "end": 5053,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 5000,
                  "end": 5052,
                  "id": {
                    "type": "Identifier",
                    "start": 5000,
                    "end": 5052,
                    "decorators": [],
                    "name": "publicUse_im_private_i_private",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 5030,
                      "end": 5052,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 5032,
                        "end": 5052,
                        "typeName": {
                          "type": "Identifier",
                          "start": 5032,
                          "end": 5052,
                          "decorators": [],
                          "name": "im_private_i_private",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "VariableDeclaration",
            "start": 5058,
            "end": 5127,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 5062,
                "end": 5126,
                "id": {
                  "type": "Identifier",
                  "start": 5062,
                  "end": 5094,
                  "decorators": [],
                  "name": "privateUse_im_private_mi_private",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "NewExpression",
                  "start": 5097,
                  "end": 5126,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 5101,
                    "end": 5124,
                    "object": {
                      "type": "Identifier",
                      "start": 5101,
                      "end": 5122,
                      "decorators": [],
                      "name": "im_private_mi_private",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 5123,
                      "end": 5124,
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "typeArguments": null,
                  "arguments": []
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 5132,
            "end": 5207,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 5139,
              "end": 5207,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 5143,
                  "end": 5206,
                  "id": {
                    "type": "Identifier",
                    "start": 5143,
                    "end": 5174,
                    "decorators": [],
                    "name": "publicUse_im_private_mi_private",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "NewExpression",
                    "start": 5177,
                    "end": 5206,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 5181,
                      "end": 5204,
                      "object": {
                        "type": "Identifier",
                        "start": 5181,
                        "end": 5202,
                        "decorators": [],
                        "name": "im_private_mi_private",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 5203,
                        "end": 5204,
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "typeArguments": null,
                    "arguments": []
                  },
                  "definite": false
                }
              ],
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "VariableDeclaration",
            "start": 5212,
            "end": 5274,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 5216,
                "end": 5273,
                "id": {
                  "type": "Identifier",
                  "start": 5216,
                  "end": 5273,
                  "decorators": [],
                  "name": "privateUse_im_private_mu_private",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 5248,
                    "end": 5273,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 5250,
                      "end": 5273,
                      "typeName": {
                        "type": "TSQualifiedName",
                        "start": 5250,
                        "end": 5273,
                        "left": {
                          "type": "Identifier",
                          "start": 5250,
                          "end": 5271,
                          "decorators": [],
                          "name": "im_private_mu_private",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 5272,
                          "end": 5273,
                          "decorators": [],
                          "name": "i",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "typeArguments": null
                    }
                  }
                },
                "init": null,
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 5279,
            "end": 5347,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 5286,
              "end": 5347,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 5290,
                  "end": 5346,
                  "id": {
                    "type": "Identifier",
                    "start": 5290,
                    "end": 5346,
                    "decorators": [],
                    "name": "publicUse_im_private_mu_private",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 5321,
                      "end": 5346,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 5323,
                        "end": 5346,
                        "typeName": {
                          "type": "TSQualifiedName",
                          "start": 5323,
                          "end": 5346,
                          "left": {
                            "type": "Identifier",
                            "start": 5323,
                            "end": 5344,
                            "decorators": [],
                            "name": "im_private_mu_private",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 5345,
                            "end": 5346,
                            "decorators": [],
                            "name": "i",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 5405,
            "end": 5459,
            "declaration": {
              "type": "TSImportEqualsDeclaration",
              "start": 5412,
              "end": 5459,
              "id": {
                "type": "Identifier",
                "start": 5419,
                "end": 5438,
                "decorators": [],
                "name": "im_private_c_public",
                "optional": false,
                "typeAnnotation": null
              },
              "moduleReference": {
                "type": "TSQualifiedName",
                "start": 5441,
                "end": 5458,
                "left": {
                  "type": "Identifier",
                  "start": 5441,
                  "end": 5449,
                  "decorators": [],
                  "name": "m_public",
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "Identifier",
                  "start": 5450,
                  "end": 5458,
                  "decorators": [],
                  "name": "c_public",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "importKind": "value"
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 5464,
            "end": 5518,
            "declaration": {
              "type": "TSImportEqualsDeclaration",
              "start": 5471,
              "end": 5518,
              "id": {
                "type": "Identifier",
                "start": 5478,
                "end": 5497,
                "decorators": [],
                "name": "im_private_e_public",
                "optional": false,
                "typeAnnotation": null
              },
              "moduleReference": {
                "type": "TSQualifiedName",
                "start": 5500,
                "end": 5517,
                "left": {
                  "type": "Identifier",
                  "start": 5500,
                  "end": 5508,
                  "decorators": [],
                  "name": "m_public",
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "Identifier",
                  "start": 5509,
                  "end": 5517,
                  "decorators": [],
                  "name": "e_public",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "importKind": "value"
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 5523,
            "end": 5577,
            "declaration": {
              "type": "TSImportEqualsDeclaration",
              "start": 5530,
              "end": 5577,
              "id": {
                "type": "Identifier",
                "start": 5537,
                "end": 5556,
                "decorators": [],
                "name": "im_private_f_public",
                "optional": false,
                "typeAnnotation": null
              },
              "moduleReference": {
                "type": "TSQualifiedName",
                "start": 5559,
                "end": 5576,
                "left": {
                  "type": "Identifier",
                  "start": 5559,
                  "end": 5567,
                  "decorators": [],
                  "name": "m_public",
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "Identifier",
                  "start": 5568,
                  "end": 5576,
                  "decorators": [],
                  "name": "f_public",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "importKind": "value"
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 5582,
            "end": 5636,
            "declaration": {
              "type": "TSImportEqualsDeclaration",
              "start": 5589,
              "end": 5636,
              "id": {
                "type": "Identifier",
                "start": 5596,
                "end": 5615,
                "decorators": [],
                "name": "im_private_v_public",
                "optional": false,
                "typeAnnotation": null
              },
              "moduleReference": {
                "type": "TSQualifiedName",
                "start": 5618,
                "end": 5635,
                "left": {
                  "type": "Identifier",
                  "start": 5618,
                  "end": 5626,
                  "decorators": [],
                  "name": "m_public",
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "Identifier",
                  "start": 5627,
                  "end": 5635,
                  "decorators": [],
                  "name": "v_public",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "importKind": "value"
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 5641,
            "end": 5695,
            "declaration": {
              "type": "TSImportEqualsDeclaration",
              "start": 5648,
              "end": 5695,
              "id": {
                "type": "Identifier",
                "start": 5655,
                "end": 5674,
                "decorators": [],
                "name": "im_private_i_public",
                "optional": false,
                "typeAnnotation": null
              },
              "moduleReference": {
                "type": "TSQualifiedName",
                "start": 5677,
                "end": 5694,
                "left": {
                  "type": "Identifier",
                  "start": 5677,
                  "end": 5685,
                  "decorators": [],
                  "name": "m_public",
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "Identifier",
                  "start": 5686,
                  "end": 5694,
                  "decorators": [],
                  "name": "i_public",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "importKind": "value"
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 5700,
            "end": 5756,
            "declaration": {
              "type": "TSImportEqualsDeclaration",
              "start": 5707,
              "end": 5756,
              "id": {
                "type": "Identifier",
                "start": 5714,
                "end": 5734,
                "decorators": [],
                "name": "im_private_mi_public",
                "optional": false,
                "typeAnnotation": null
              },
              "moduleReference": {
                "type": "TSQualifiedName",
                "start": 5737,
                "end": 5755,
                "left": {
                  "type": "Identifier",
                  "start": 5737,
                  "end": 5745,
                  "decorators": [],
                  "name": "m_public",
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "Identifier",
                  "start": 5746,
                  "end": 5755,
                  "decorators": [],
                  "name": "mi_public",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "importKind": "value"
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 5761,
            "end": 5817,
            "declaration": {
              "type": "TSImportEqualsDeclaration",
              "start": 5768,
              "end": 5817,
              "id": {
                "type": "Identifier",
                "start": 5775,
                "end": 5795,
                "decorators": [],
                "name": "im_private_mu_public",
                "optional": false,
                "typeAnnotation": null
              },
              "moduleReference": {
                "type": "TSQualifiedName",
                "start": 5798,
                "end": 5816,
                "left": {
                  "type": "Identifier",
                  "start": 5798,
                  "end": 5806,
                  "decorators": [],
                  "name": "m_public",
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "Identifier",
                  "start": 5807,
                  "end": 5816,
                  "decorators": [],
                  "name": "mu_public",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "importKind": "value"
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "VariableDeclaration",
            "start": 5864,
            "end": 5927,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 5868,
                "end": 5926,
                "id": {
                  "type": "Identifier",
                  "start": 5868,
                  "end": 5898,
                  "decorators": [],
                  "name": "privateUse_im_private_c_public",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "NewExpression",
                  "start": 5901,
                  "end": 5926,
                  "callee": {
                    "type": "Identifier",
                    "start": 5905,
                    "end": 5924,
                    "decorators": [],
                    "name": "im_private_c_public",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": []
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 5932,
            "end": 6001,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 5939,
              "end": 6001,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 5943,
                  "end": 6000,
                  "id": {
                    "type": "Identifier",
                    "start": 5943,
                    "end": 5972,
                    "decorators": [],
                    "name": "publicUse_im_private_c_public",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "NewExpression",
                    "start": 5975,
                    "end": 6000,
                    "callee": {
                      "type": "Identifier",
                      "start": 5979,
                      "end": 5998,
                      "decorators": [],
                      "name": "im_private_c_public",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null,
                    "arguments": []
                  },
                  "definite": false
                }
              ],
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "VariableDeclaration",
            "start": 6006,
            "end": 6069,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 6010,
                "end": 6068,
                "id": {
                  "type": "Identifier",
                  "start": 6010,
                  "end": 6040,
                  "decorators": [],
                  "name": "privateUse_im_private_e_public",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 6043,
                  "end": 6068,
                  "object": {
                    "type": "Identifier",
                    "start": 6043,
                    "end": 6062,
                    "decorators": [],
                    "name": "im_private_e_public",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 6063,
                    "end": 6068,
                    "decorators": [],
                    "name": "Happy",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 6074,
            "end": 6144,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 6081,
              "end": 6144,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 6085,
                  "end": 6143,
                  "id": {
                    "type": "Identifier",
                    "start": 6085,
                    "end": 6114,
                    "decorators": [],
                    "name": "publicUse_im_private_e_public",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "MemberExpression",
                    "start": 6117,
                    "end": 6143,
                    "object": {
                      "type": "Identifier",
                      "start": 6117,
                      "end": 6136,
                      "decorators": [],
                      "name": "im_private_e_public",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 6137,
                      "end": 6143,
                      "decorators": [],
                      "name": "Grumpy",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "definite": false
                }
              ],
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "VariableDeclaration",
            "start": 6149,
            "end": 6208,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 6153,
                "end": 6207,
                "id": {
                  "type": "Identifier",
                  "start": 6153,
                  "end": 6183,
                  "decorators": [],
                  "name": "privateUse_im_private_f_public",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 6186,
                  "end": 6207,
                  "callee": {
                    "type": "Identifier",
                    "start": 6186,
                    "end": 6205,
                    "decorators": [],
                    "name": "im_private_f_public",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 6213,
            "end": 6278,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 6220,
              "end": 6278,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 6224,
                  "end": 6277,
                  "id": {
                    "type": "Identifier",
                    "start": 6224,
                    "end": 6253,
                    "decorators": [],
                    "name": "publicUse_im_private_f_public",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "CallExpression",
                    "start": 6256,
                    "end": 6277,
                    "callee": {
                      "type": "Identifier",
                      "start": 6256,
                      "end": 6275,
                      "decorators": [],
                      "name": "im_private_f_public",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false
                  },
                  "definite": false
                }
              ],
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "VariableDeclaration",
            "start": 6283,
            "end": 6340,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 6287,
                "end": 6339,
                "id": {
                  "type": "Identifier",
                  "start": 6287,
                  "end": 6317,
                  "decorators": [],
                  "name": "privateUse_im_private_v_public",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 6320,
                  "end": 6339,
                  "decorators": [],
                  "name": "im_private_v_public",
                  "optional": false,
                  "typeAnnotation": null
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 6345,
            "end": 6408,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 6352,
              "end": 6408,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 6356,
                  "end": 6407,
                  "id": {
                    "type": "Identifier",
                    "start": 6356,
                    "end": 6385,
                    "decorators": [],
                    "name": "publicUse_im_private_v_public",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "Identifier",
                    "start": 6388,
                    "end": 6407,
                    "decorators": [],
                    "name": "im_private_v_public",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "definite": false
                }
              ],
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "VariableDeclaration",
            "start": 6413,
            "end": 6469,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 6417,
                "end": 6468,
                "id": {
                  "type": "Identifier",
                  "start": 6417,
                  "end": 6468,
                  "decorators": [],
                  "name": "privateUse_im_private_i_public",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 6447,
                    "end": 6468,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 6449,
                      "end": 6468,
                      "typeName": {
                        "type": "Identifier",
                        "start": 6449,
                        "end": 6468,
                        "decorators": [],
                        "name": "im_private_i_public",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                },
                "init": null,
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 6474,
            "end": 6536,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 6481,
              "end": 6536,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 6485,
                  "end": 6535,
                  "id": {
                    "type": "Identifier",
                    "start": 6485,
                    "end": 6535,
                    "decorators": [],
                    "name": "publicUse_im_private_i_public",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 6514,
                      "end": 6535,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 6516,
                        "end": 6535,
                        "typeName": {
                          "type": "Identifier",
                          "start": 6516,
                          "end": 6535,
                          "decorators": [],
                          "name": "im_private_i_public",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "VariableDeclaration",
            "start": 6541,
            "end": 6608,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 6545,
                "end": 6607,
                "id": {
                  "type": "Identifier",
                  "start": 6545,
                  "end": 6576,
                  "decorators": [],
                  "name": "privateUse_im_private_mi_public",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "NewExpression",
                  "start": 6579,
                  "end": 6607,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 6583,
                    "end": 6605,
                    "object": {
                      "type": "Identifier",
                      "start": 6583,
                      "end": 6603,
                      "decorators": [],
                      "name": "im_private_mi_public",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 6604,
                      "end": 6605,
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "typeArguments": null,
                  "arguments": []
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 6613,
            "end": 6686,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 6620,
              "end": 6686,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 6624,
                  "end": 6685,
                  "id": {
                    "type": "Identifier",
                    "start": 6624,
                    "end": 6654,
                    "decorators": [],
                    "name": "publicUse_im_private_mi_public",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "NewExpression",
                    "start": 6657,
                    "end": 6685,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 6661,
                      "end": 6683,
                      "object": {
                        "type": "Identifier",
                        "start": 6661,
                        "end": 6681,
                        "decorators": [],
                        "name": "im_private_mi_public",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 6682,
                        "end": 6683,
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "typeArguments": null,
                    "arguments": []
                  },
                  "definite": false
                }
              ],
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "VariableDeclaration",
            "start": 6691,
            "end": 6751,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 6695,
                "end": 6750,
                "id": {
                  "type": "Identifier",
                  "start": 6695,
                  "end": 6750,
                  "decorators": [],
                  "name": "privateUse_im_private_mu_public",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 6726,
                    "end": 6750,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 6728,
                      "end": 6750,
                      "typeName": {
                        "type": "TSQualifiedName",
                        "start": 6728,
                        "end": 6750,
                        "left": {
                          "type": "Identifier",
                          "start": 6728,
                          "end": 6748,
                          "decorators": [],
                          "name": "im_private_mu_public",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 6749,
                          "end": 6750,
                          "decorators": [],
                          "name": "i",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "typeArguments": null
                    }
                  }
                },
                "init": null,
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 6756,
            "end": 6822,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 6763,
              "end": 6822,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 6767,
                  "end": 6821,
                  "id": {
                    "type": "Identifier",
                    "start": 6767,
                    "end": 6821,
                    "decorators": [],
                    "name": "publicUse_im_private_mu_public",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 6797,
                      "end": 6821,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 6799,
                        "end": 6821,
                        "typeName": {
                          "type": "TSQualifiedName",
                          "start": 6799,
                          "end": 6821,
                          "left": {
                            "type": "Identifier",
                            "start": 6799,
                            "end": 6819,
                            "decorators": [],
                            "name": "im_private_mu_public",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 6820,
                            "end": 6821,
                            "decorators": [],
                            "name": "i",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
