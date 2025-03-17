__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 20,
  "end": 3566,
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
      "type": "TSImportEqualsDeclaration",
      "start": 922,
      "end": 972,
      "id": {
        "type": "Identifier",
        "start": 929,
        "end": 949,
        "name": "im_private_c_private",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSQualifiedName",
        "start": 952,
        "end": 971,
        "left": {
          "type": "Identifier",
          "start": 952,
          "end": 961,
          "name": "m_private",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 962,
          "end": 971,
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
      "start": 973,
      "end": 1023,
      "id": {
        "type": "Identifier",
        "start": 980,
        "end": 1000,
        "name": "im_private_e_private",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSQualifiedName",
        "start": 1003,
        "end": 1022,
        "left": {
          "type": "Identifier",
          "start": 1003,
          "end": 1012,
          "name": "m_private",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 1013,
          "end": 1022,
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
      "start": 1024,
      "end": 1074,
      "id": {
        "type": "Identifier",
        "start": 1031,
        "end": 1051,
        "name": "im_private_f_private",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSQualifiedName",
        "start": 1054,
        "end": 1073,
        "left": {
          "type": "Identifier",
          "start": 1054,
          "end": 1063,
          "name": "m_private",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 1064,
          "end": 1073,
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
      "start": 1075,
      "end": 1125,
      "id": {
        "type": "Identifier",
        "start": 1082,
        "end": 1102,
        "name": "im_private_v_private",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSQualifiedName",
        "start": 1105,
        "end": 1124,
        "left": {
          "type": "Identifier",
          "start": 1105,
          "end": 1114,
          "name": "m_private",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 1115,
          "end": 1124,
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
      "start": 1126,
      "end": 1176,
      "id": {
        "type": "Identifier",
        "start": 1133,
        "end": 1153,
        "name": "im_private_i_private",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSQualifiedName",
        "start": 1156,
        "end": 1175,
        "left": {
          "type": "Identifier",
          "start": 1156,
          "end": 1165,
          "name": "m_private",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 1166,
          "end": 1175,
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
      "start": 1177,
      "end": 1229,
      "id": {
        "type": "Identifier",
        "start": 1184,
        "end": 1205,
        "name": "im_private_mi_private",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSQualifiedName",
        "start": 1208,
        "end": 1228,
        "left": {
          "type": "Identifier",
          "start": 1208,
          "end": 1217,
          "name": "m_private",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 1218,
          "end": 1228,
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
      "start": 1230,
      "end": 1282,
      "id": {
        "type": "Identifier",
        "start": 1237,
        "end": 1258,
        "name": "im_private_mu_private",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSQualifiedName",
        "start": 1261,
        "end": 1281,
        "left": {
          "type": "Identifier",
          "start": 1261,
          "end": 1270,
          "name": "m_private",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 1271,
          "end": 1281,
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
      "start": 1308,
      "end": 1373,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1312,
          "end": 1372,
          "id": {
            "type": "Identifier",
            "start": 1312,
            "end": 1343,
            "name": "privateUse_im_private_c_private",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 1346,
            "end": 1372,
            "callee": {
              "type": "Identifier",
              "start": 1350,
              "end": 1370,
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
      "start": 1374,
      "end": 1445,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 1381,
        "end": 1445,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1385,
            "end": 1444,
            "id": {
              "type": "Identifier",
              "start": 1385,
              "end": 1415,
              "name": "publicUse_im_private_c_private",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "NewExpression",
              "start": 1418,
              "end": 1444,
              "callee": {
                "type": "Identifier",
                "start": 1422,
                "end": 1442,
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
      "start": 1446,
      "end": 1511,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1450,
          "end": 1510,
          "id": {
            "type": "Identifier",
            "start": 1450,
            "end": 1481,
            "name": "privateUse_im_private_e_private",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 1484,
            "end": 1510,
            "object": {
              "type": "Identifier",
              "start": 1484,
              "end": 1504,
              "name": "im_private_e_private",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 1505,
              "end": 1510,
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
      "start": 1512,
      "end": 1584,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 1519,
        "end": 1584,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1523,
            "end": 1583,
            "id": {
              "type": "Identifier",
              "start": 1523,
              "end": 1553,
              "name": "publicUse_im_private_e_private",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "MemberExpression",
              "start": 1556,
              "end": 1583,
              "object": {
                "type": "Identifier",
                "start": 1556,
                "end": 1576,
                "name": "im_private_e_private",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1577,
                "end": 1583,
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
      "start": 1585,
      "end": 1646,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1589,
          "end": 1645,
          "id": {
            "type": "Identifier",
            "start": 1589,
            "end": 1620,
            "name": "privateUse_im_private_f_private",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1623,
            "end": 1645,
            "callee": {
              "type": "Identifier",
              "start": 1623,
              "end": 1643,
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
      "start": 1647,
      "end": 1714,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 1654,
        "end": 1714,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1658,
            "end": 1713,
            "id": {
              "type": "Identifier",
              "start": 1658,
              "end": 1688,
              "name": "publicUse_im_private_f_private",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "CallExpression",
              "start": 1691,
              "end": 1713,
              "callee": {
                "type": "Identifier",
                "start": 1691,
                "end": 1711,
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
      "start": 1715,
      "end": 1774,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1719,
          "end": 1773,
          "id": {
            "type": "Identifier",
            "start": 1719,
            "end": 1750,
            "name": "privateUse_im_private_v_private",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 1753,
            "end": 1773,
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
      "start": 1775,
      "end": 1840,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 1782,
        "end": 1840,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1786,
            "end": 1839,
            "id": {
              "type": "Identifier",
              "start": 1786,
              "end": 1816,
              "name": "publicUse_im_private_v_private",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Identifier",
              "start": 1819,
              "end": 1839,
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
      "start": 1841,
      "end": 1899,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1845,
          "end": 1898,
          "id": {
            "type": "Identifier",
            "start": 1845,
            "end": 1898,
            "name": "privateUse_im_private_i_private",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1876,
              "end": 1898,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1878,
                "end": 1898,
                "typeName": {
                  "type": "Identifier",
                  "start": 1878,
                  "end": 1898,
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
      "start": 1900,
      "end": 1964,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 1907,
        "end": 1964,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1911,
            "end": 1963,
            "id": {
              "type": "Identifier",
              "start": 1911,
              "end": 1963,
              "name": "publicUse_im_private_i_private",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 1941,
                "end": 1963,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 1943,
                  "end": 1963,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1943,
                    "end": 1963,
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
      "start": 1965,
      "end": 2034,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1969,
          "end": 2033,
          "id": {
            "type": "Identifier",
            "start": 1969,
            "end": 2001,
            "name": "privateUse_im_private_mi_private",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 2004,
            "end": 2033,
            "callee": {
              "type": "MemberExpression",
              "start": 2008,
              "end": 2031,
              "object": {
                "type": "Identifier",
                "start": 2008,
                "end": 2029,
                "name": "im_private_mi_private",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 2030,
                "end": 2031,
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
      "start": 2035,
      "end": 2110,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 2042,
        "end": 2110,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 2046,
            "end": 2109,
            "id": {
              "type": "Identifier",
              "start": 2046,
              "end": 2077,
              "name": "publicUse_im_private_mi_private",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "NewExpression",
              "start": 2080,
              "end": 2109,
              "callee": {
                "type": "MemberExpression",
                "start": 2084,
                "end": 2107,
                "object": {
                  "type": "Identifier",
                  "start": 2084,
                  "end": 2105,
                  "name": "im_private_mi_private",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 2106,
                  "end": 2107,
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
      "start": 2111,
      "end": 2173,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2115,
          "end": 2172,
          "id": {
            "type": "Identifier",
            "start": 2115,
            "end": 2172,
            "name": "privateUse_im_private_mu_private",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2147,
              "end": 2172,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2149,
                "end": 2172,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 2149,
                  "end": 2172,
                  "left": {
                    "type": "Identifier",
                    "start": 2149,
                    "end": 2170,
                    "name": "im_private_mu_private",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 2171,
                    "end": 2172,
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
      "start": 2174,
      "end": 2242,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 2181,
        "end": 2242,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 2185,
            "end": 2241,
            "id": {
              "type": "Identifier",
              "start": 2185,
              "end": 2241,
              "name": "publicUse_im_private_mu_private",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 2216,
                "end": 2241,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 2218,
                  "end": 2241,
                  "typeName": {
                    "type": "TSQualifiedName",
                    "start": 2218,
                    "end": 2241,
                    "left": {
                      "type": "Identifier",
                      "start": 2218,
                      "end": 2239,
                      "name": "im_private_mu_private",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 2240,
                      "end": 2241,
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
      "start": 2294,
      "end": 2341,
      "id": {
        "type": "Identifier",
        "start": 2301,
        "end": 2320,
        "name": "im_private_c_public",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSQualifiedName",
        "start": 2323,
        "end": 2340,
        "left": {
          "type": "Identifier",
          "start": 2323,
          "end": 2331,
          "name": "m_public",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 2332,
          "end": 2340,
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
      "start": 2342,
      "end": 2389,
      "id": {
        "type": "Identifier",
        "start": 2349,
        "end": 2368,
        "name": "im_private_e_public",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSQualifiedName",
        "start": 2371,
        "end": 2388,
        "left": {
          "type": "Identifier",
          "start": 2371,
          "end": 2379,
          "name": "m_public",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 2380,
          "end": 2388,
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
      "start": 2390,
      "end": 2437,
      "id": {
        "type": "Identifier",
        "start": 2397,
        "end": 2416,
        "name": "im_private_f_public",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSQualifiedName",
        "start": 2419,
        "end": 2436,
        "left": {
          "type": "Identifier",
          "start": 2419,
          "end": 2427,
          "name": "m_public",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 2428,
          "end": 2436,
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
      "start": 2438,
      "end": 2485,
      "id": {
        "type": "Identifier",
        "start": 2445,
        "end": 2464,
        "name": "im_private_v_public",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSQualifiedName",
        "start": 2467,
        "end": 2484,
        "left": {
          "type": "Identifier",
          "start": 2467,
          "end": 2475,
          "name": "m_public",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 2476,
          "end": 2484,
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
      "start": 2486,
      "end": 2533,
      "id": {
        "type": "Identifier",
        "start": 2493,
        "end": 2512,
        "name": "im_private_i_public",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSQualifiedName",
        "start": 2515,
        "end": 2532,
        "left": {
          "type": "Identifier",
          "start": 2515,
          "end": 2523,
          "name": "m_public",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 2524,
          "end": 2532,
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
      "start": 2534,
      "end": 2583,
      "id": {
        "type": "Identifier",
        "start": 2541,
        "end": 2561,
        "name": "im_private_mi_public",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSQualifiedName",
        "start": 2564,
        "end": 2582,
        "left": {
          "type": "Identifier",
          "start": 2564,
          "end": 2572,
          "name": "m_public",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 2573,
          "end": 2582,
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
      "start": 2584,
      "end": 2633,
      "id": {
        "type": "Identifier",
        "start": 2591,
        "end": 2611,
        "name": "im_private_mu_public",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSQualifiedName",
        "start": 2614,
        "end": 2632,
        "left": {
          "type": "Identifier",
          "start": 2614,
          "end": 2622,
          "name": "m_public",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 2623,
          "end": 2632,
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
      "start": 2659,
      "end": 2722,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2663,
          "end": 2721,
          "id": {
            "type": "Identifier",
            "start": 2663,
            "end": 2693,
            "name": "privateUse_im_private_c_public",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 2696,
            "end": 2721,
            "callee": {
              "type": "Identifier",
              "start": 2700,
              "end": 2719,
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
      "start": 2723,
      "end": 2792,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 2730,
        "end": 2792,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 2734,
            "end": 2791,
            "id": {
              "type": "Identifier",
              "start": 2734,
              "end": 2763,
              "name": "publicUse_im_private_c_public",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "NewExpression",
              "start": 2766,
              "end": 2791,
              "callee": {
                "type": "Identifier",
                "start": 2770,
                "end": 2789,
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
      "start": 2793,
      "end": 2856,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2797,
          "end": 2855,
          "id": {
            "type": "Identifier",
            "start": 2797,
            "end": 2827,
            "name": "privateUse_im_private_e_public",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 2830,
            "end": 2855,
            "object": {
              "type": "Identifier",
              "start": 2830,
              "end": 2849,
              "name": "im_private_e_public",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 2850,
              "end": 2855,
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
      "start": 2857,
      "end": 2927,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 2864,
        "end": 2927,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 2868,
            "end": 2926,
            "id": {
              "type": "Identifier",
              "start": 2868,
              "end": 2897,
              "name": "publicUse_im_private_e_public",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "MemberExpression",
              "start": 2900,
              "end": 2926,
              "object": {
                "type": "Identifier",
                "start": 2900,
                "end": 2919,
                "name": "im_private_e_public",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 2920,
                "end": 2926,
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
      "start": 2928,
      "end": 2987,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2932,
          "end": 2986,
          "id": {
            "type": "Identifier",
            "start": 2932,
            "end": 2962,
            "name": "privateUse_im_private_f_public",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 2965,
            "end": 2986,
            "callee": {
              "type": "Identifier",
              "start": 2965,
              "end": 2984,
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
      "start": 2988,
      "end": 3053,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 2995,
        "end": 3053,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 2999,
            "end": 3052,
            "id": {
              "type": "Identifier",
              "start": 2999,
              "end": 3028,
              "name": "publicUse_im_private_f_public",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "CallExpression",
              "start": 3031,
              "end": 3052,
              "callee": {
                "type": "Identifier",
                "start": 3031,
                "end": 3050,
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
      "start": 3054,
      "end": 3111,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3058,
          "end": 3110,
          "id": {
            "type": "Identifier",
            "start": 3058,
            "end": 3088,
            "name": "privateUse_im_private_v_public",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 3091,
            "end": 3110,
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
      "start": 3112,
      "end": 3175,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 3119,
        "end": 3175,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 3123,
            "end": 3174,
            "id": {
              "type": "Identifier",
              "start": 3123,
              "end": 3152,
              "name": "publicUse_im_private_v_public",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Identifier",
              "start": 3155,
              "end": 3174,
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
      "start": 3176,
      "end": 3232,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3180,
          "end": 3231,
          "id": {
            "type": "Identifier",
            "start": 3180,
            "end": 3231,
            "name": "privateUse_im_private_i_public",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3210,
              "end": 3231,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 3212,
                "end": 3231,
                "typeName": {
                  "type": "Identifier",
                  "start": 3212,
                  "end": 3231,
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
      "start": 3233,
      "end": 3295,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 3240,
        "end": 3295,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 3244,
            "end": 3294,
            "id": {
              "type": "Identifier",
              "start": 3244,
              "end": 3294,
              "name": "publicUse_im_private_i_public",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 3273,
                "end": 3294,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 3275,
                  "end": 3294,
                  "typeName": {
                    "type": "Identifier",
                    "start": 3275,
                    "end": 3294,
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
      "start": 3296,
      "end": 3363,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3300,
          "end": 3362,
          "id": {
            "type": "Identifier",
            "start": 3300,
            "end": 3331,
            "name": "privateUse_im_private_mi_public",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 3334,
            "end": 3362,
            "callee": {
              "type": "MemberExpression",
              "start": 3338,
              "end": 3360,
              "object": {
                "type": "Identifier",
                "start": 3338,
                "end": 3358,
                "name": "im_private_mi_public",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 3359,
                "end": 3360,
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
      "start": 3364,
      "end": 3437,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 3371,
        "end": 3437,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 3375,
            "end": 3436,
            "id": {
              "type": "Identifier",
              "start": 3375,
              "end": 3405,
              "name": "publicUse_im_private_mi_public",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "NewExpression",
              "start": 3408,
              "end": 3436,
              "callee": {
                "type": "MemberExpression",
                "start": 3412,
                "end": 3434,
                "object": {
                  "type": "Identifier",
                  "start": 3412,
                  "end": 3432,
                  "name": "im_private_mi_public",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 3433,
                  "end": 3434,
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
      "start": 3438,
      "end": 3498,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3442,
          "end": 3497,
          "id": {
            "type": "Identifier",
            "start": 3442,
            "end": 3497,
            "name": "privateUse_im_private_mu_public",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3473,
              "end": 3497,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 3475,
                "end": 3497,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 3475,
                  "end": 3497,
                  "left": {
                    "type": "Identifier",
                    "start": 3475,
                    "end": 3495,
                    "name": "im_private_mu_public",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 3496,
                    "end": 3497,
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
      "start": 3499,
      "end": 3565,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 3506,
        "end": 3565,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 3510,
            "end": 3564,
            "id": {
              "type": "Identifier",
              "start": 3510,
              "end": 3564,
              "name": "publicUse_im_private_mu_public",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 3540,
                "end": 3564,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 3542,
                  "end": 3564,
                  "typeName": {
                    "type": "TSQualifiedName",
                    "start": 3542,
                    "end": 3564,
                    "left": {
                      "type": "Identifier",
                      "start": 3542,
                      "end": 3562,
                      "name": "im_private_mu_public",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 3563,
                      "end": 3564,
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
  ],
  "sourceType": "script",
  "hashbang": null
}
```
