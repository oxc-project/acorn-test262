__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 20,
  "end": 3601,
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
      "start": 919,
      "end": 975,
      "declaration": {
        "type": "TSImportEqualsDeclaration",
        "start": 926,
        "end": 975,
        "id": {
          "type": "Identifier",
          "start": 933,
          "end": 952,
          "name": "im_public_c_private",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "moduleReference": {
          "type": "TSQualifiedName",
          "start": 955,
          "end": 974,
          "left": {
            "type": "Identifier",
            "start": 955,
            "end": 964,
            "name": "m_private",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "right": {
            "type": "Identifier",
            "start": 965,
            "end": 974,
            "name": "c_private",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "importKind": "value"
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 976,
      "end": 1032,
      "declaration": {
        "type": "TSImportEqualsDeclaration",
        "start": 983,
        "end": 1032,
        "id": {
          "type": "Identifier",
          "start": 990,
          "end": 1009,
          "name": "im_public_e_private",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "moduleReference": {
          "type": "TSQualifiedName",
          "start": 1012,
          "end": 1031,
          "left": {
            "type": "Identifier",
            "start": 1012,
            "end": 1021,
            "name": "m_private",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "right": {
            "type": "Identifier",
            "start": 1022,
            "end": 1031,
            "name": "e_private",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "importKind": "value"
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1033,
      "end": 1089,
      "declaration": {
        "type": "TSImportEqualsDeclaration",
        "start": 1040,
        "end": 1089,
        "id": {
          "type": "Identifier",
          "start": 1047,
          "end": 1066,
          "name": "im_public_f_private",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "moduleReference": {
          "type": "TSQualifiedName",
          "start": 1069,
          "end": 1088,
          "left": {
            "type": "Identifier",
            "start": 1069,
            "end": 1078,
            "name": "m_private",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "right": {
            "type": "Identifier",
            "start": 1079,
            "end": 1088,
            "name": "f_private",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "importKind": "value"
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1090,
      "end": 1146,
      "declaration": {
        "type": "TSImportEqualsDeclaration",
        "start": 1097,
        "end": 1146,
        "id": {
          "type": "Identifier",
          "start": 1104,
          "end": 1123,
          "name": "im_public_v_private",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "moduleReference": {
          "type": "TSQualifiedName",
          "start": 1126,
          "end": 1145,
          "left": {
            "type": "Identifier",
            "start": 1126,
            "end": 1135,
            "name": "m_private",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "right": {
            "type": "Identifier",
            "start": 1136,
            "end": 1145,
            "name": "v_private",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "importKind": "value"
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1147,
      "end": 1203,
      "declaration": {
        "type": "TSImportEqualsDeclaration",
        "start": 1154,
        "end": 1203,
        "id": {
          "type": "Identifier",
          "start": 1161,
          "end": 1180,
          "name": "im_public_i_private",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "moduleReference": {
          "type": "TSQualifiedName",
          "start": 1183,
          "end": 1202,
          "left": {
            "type": "Identifier",
            "start": 1183,
            "end": 1192,
            "name": "m_private",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "right": {
            "type": "Identifier",
            "start": 1193,
            "end": 1202,
            "name": "i_private",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "importKind": "value"
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1204,
      "end": 1262,
      "declaration": {
        "type": "TSImportEqualsDeclaration",
        "start": 1211,
        "end": 1262,
        "id": {
          "type": "Identifier",
          "start": 1218,
          "end": 1238,
          "name": "im_public_mi_private",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "moduleReference": {
          "type": "TSQualifiedName",
          "start": 1241,
          "end": 1261,
          "left": {
            "type": "Identifier",
            "start": 1241,
            "end": 1250,
            "name": "m_private",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "right": {
            "type": "Identifier",
            "start": 1251,
            "end": 1261,
            "name": "mi_private",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "importKind": "value"
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1263,
      "end": 1321,
      "declaration": {
        "type": "TSImportEqualsDeclaration",
        "start": 1270,
        "end": 1321,
        "id": {
          "type": "Identifier",
          "start": 1277,
          "end": 1297,
          "name": "im_public_mu_private",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "moduleReference": {
          "type": "TSQualifiedName",
          "start": 1300,
          "end": 1320,
          "left": {
            "type": "Identifier",
            "start": 1300,
            "end": 1309,
            "name": "m_private",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "right": {
            "type": "Identifier",
            "start": 1310,
            "end": 1320,
            "name": "mu_private",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "importKind": "value"
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 1357,
      "end": 1420,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1361,
          "end": 1419,
          "id": {
            "type": "Identifier",
            "start": 1361,
            "end": 1391,
            "name": "privateUse_im_public_c_private",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 1394,
            "end": 1419,
            "callee": {
              "type": "Identifier",
              "start": 1398,
              "end": 1417,
              "name": "im_public_c_private",
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
      "start": 1421,
      "end": 1490,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 1428,
        "end": 1490,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1432,
            "end": 1489,
            "id": {
              "type": "Identifier",
              "start": 1432,
              "end": 1461,
              "name": "publicUse_im_public_c_private",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "NewExpression",
              "start": 1464,
              "end": 1489,
              "callee": {
                "type": "Identifier",
                "start": 1468,
                "end": 1487,
                "name": "im_public_c_private",
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
      "start": 1491,
      "end": 1554,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1495,
          "end": 1553,
          "id": {
            "type": "Identifier",
            "start": 1495,
            "end": 1525,
            "name": "privateUse_im_public_e_private",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 1528,
            "end": 1553,
            "object": {
              "type": "Identifier",
              "start": 1528,
              "end": 1547,
              "name": "im_public_e_private",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 1548,
              "end": 1553,
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
      "start": 1555,
      "end": 1625,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 1562,
        "end": 1625,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1566,
            "end": 1624,
            "id": {
              "type": "Identifier",
              "start": 1566,
              "end": 1595,
              "name": "publicUse_im_public_e_private",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "MemberExpression",
              "start": 1598,
              "end": 1624,
              "object": {
                "type": "Identifier",
                "start": 1598,
                "end": 1617,
                "name": "im_public_e_private",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1618,
                "end": 1624,
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
      "start": 1626,
      "end": 1685,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1630,
          "end": 1684,
          "id": {
            "type": "Identifier",
            "start": 1630,
            "end": 1660,
            "name": "privateUse_im_public_f_private",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1663,
            "end": 1684,
            "callee": {
              "type": "Identifier",
              "start": 1663,
              "end": 1682,
              "name": "im_public_f_private",
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
      "start": 1686,
      "end": 1751,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 1693,
        "end": 1751,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1697,
            "end": 1750,
            "id": {
              "type": "Identifier",
              "start": 1697,
              "end": 1726,
              "name": "publicUse_im_public_f_private",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "CallExpression",
              "start": 1729,
              "end": 1750,
              "callee": {
                "type": "Identifier",
                "start": 1729,
                "end": 1748,
                "name": "im_public_f_private",
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
      "start": 1752,
      "end": 1809,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1756,
          "end": 1808,
          "id": {
            "type": "Identifier",
            "start": 1756,
            "end": 1786,
            "name": "privateUse_im_public_v_private",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 1789,
            "end": 1808,
            "name": "im_public_v_private",
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
      "start": 1810,
      "end": 1873,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 1817,
        "end": 1873,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1821,
            "end": 1872,
            "id": {
              "type": "Identifier",
              "start": 1821,
              "end": 1850,
              "name": "publicUse_im_public_v_private",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Identifier",
              "start": 1853,
              "end": 1872,
              "name": "im_public_v_private",
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
      "start": 1874,
      "end": 1930,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1878,
          "end": 1929,
          "id": {
            "type": "Identifier",
            "start": 1878,
            "end": 1929,
            "name": "privateUse_im_public_i_private",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1908,
              "end": 1929,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1910,
                "end": 1929,
                "typeName": {
                  "type": "Identifier",
                  "start": 1910,
                  "end": 1929,
                  "name": "im_public_i_private",
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
      "start": 1931,
      "end": 1993,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 1938,
        "end": 1993,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1942,
            "end": 1992,
            "id": {
              "type": "Identifier",
              "start": 1942,
              "end": 1992,
              "name": "publicUse_im_public_i_private",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 1971,
                "end": 1992,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 1973,
                  "end": 1992,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1973,
                    "end": 1992,
                    "name": "im_public_i_private",
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
      "start": 1994,
      "end": 2061,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1998,
          "end": 2060,
          "id": {
            "type": "Identifier",
            "start": 1998,
            "end": 2029,
            "name": "privateUse_im_public_mi_private",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 2032,
            "end": 2060,
            "callee": {
              "type": "MemberExpression",
              "start": 2036,
              "end": 2058,
              "object": {
                "type": "Identifier",
                "start": 2036,
                "end": 2056,
                "name": "im_public_mi_private",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 2057,
                "end": 2058,
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
      "start": 2062,
      "end": 2135,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 2069,
        "end": 2135,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 2073,
            "end": 2134,
            "id": {
              "type": "Identifier",
              "start": 2073,
              "end": 2103,
              "name": "publicUse_im_public_mi_private",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "NewExpression",
              "start": 2106,
              "end": 2134,
              "callee": {
                "type": "MemberExpression",
                "start": 2110,
                "end": 2132,
                "object": {
                  "type": "Identifier",
                  "start": 2110,
                  "end": 2130,
                  "name": "im_public_mi_private",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 2131,
                  "end": 2132,
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
      "start": 2136,
      "end": 2196,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2140,
          "end": 2195,
          "id": {
            "type": "Identifier",
            "start": 2140,
            "end": 2195,
            "name": "privateUse_im_public_mu_private",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2171,
              "end": 2195,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2173,
                "end": 2195,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 2173,
                  "end": 2195,
                  "left": {
                    "type": "Identifier",
                    "start": 2173,
                    "end": 2193,
                    "name": "im_public_mu_private",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 2194,
                    "end": 2195,
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
      "start": 2197,
      "end": 2263,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 2204,
        "end": 2263,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 2208,
            "end": 2262,
            "id": {
              "type": "Identifier",
              "start": 2208,
              "end": 2262,
              "name": "publicUse_im_public_mu_private",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 2238,
                "end": 2262,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 2240,
                  "end": 2262,
                  "typeName": {
                    "type": "TSQualifiedName",
                    "start": 2240,
                    "end": 2262,
                    "left": {
                      "type": "Identifier",
                      "start": 2240,
                      "end": 2260,
                      "name": "im_public_mu_private",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 2261,
                      "end": 2262,
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
      "type": "ExportNamedDeclaration",
      "start": 2315,
      "end": 2368,
      "declaration": {
        "type": "TSImportEqualsDeclaration",
        "start": 2322,
        "end": 2368,
        "id": {
          "type": "Identifier",
          "start": 2329,
          "end": 2347,
          "name": "im_public_c_public",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "moduleReference": {
          "type": "TSQualifiedName",
          "start": 2350,
          "end": 2367,
          "left": {
            "type": "Identifier",
            "start": 2350,
            "end": 2358,
            "name": "m_public",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "right": {
            "type": "Identifier",
            "start": 2359,
            "end": 2367,
            "name": "c_public",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "importKind": "value"
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 2369,
      "end": 2422,
      "declaration": {
        "type": "TSImportEqualsDeclaration",
        "start": 2376,
        "end": 2422,
        "id": {
          "type": "Identifier",
          "start": 2383,
          "end": 2401,
          "name": "im_public_e_public",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "moduleReference": {
          "type": "TSQualifiedName",
          "start": 2404,
          "end": 2421,
          "left": {
            "type": "Identifier",
            "start": 2404,
            "end": 2412,
            "name": "m_public",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "right": {
            "type": "Identifier",
            "start": 2413,
            "end": 2421,
            "name": "e_public",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "importKind": "value"
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 2423,
      "end": 2476,
      "declaration": {
        "type": "TSImportEqualsDeclaration",
        "start": 2430,
        "end": 2476,
        "id": {
          "type": "Identifier",
          "start": 2437,
          "end": 2455,
          "name": "im_public_f_public",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "moduleReference": {
          "type": "TSQualifiedName",
          "start": 2458,
          "end": 2475,
          "left": {
            "type": "Identifier",
            "start": 2458,
            "end": 2466,
            "name": "m_public",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "right": {
            "type": "Identifier",
            "start": 2467,
            "end": 2475,
            "name": "f_public",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "importKind": "value"
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 2477,
      "end": 2530,
      "declaration": {
        "type": "TSImportEqualsDeclaration",
        "start": 2484,
        "end": 2530,
        "id": {
          "type": "Identifier",
          "start": 2491,
          "end": 2509,
          "name": "im_public_v_public",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "moduleReference": {
          "type": "TSQualifiedName",
          "start": 2512,
          "end": 2529,
          "left": {
            "type": "Identifier",
            "start": 2512,
            "end": 2520,
            "name": "m_public",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "right": {
            "type": "Identifier",
            "start": 2521,
            "end": 2529,
            "name": "v_public",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "importKind": "value"
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 2531,
      "end": 2584,
      "declaration": {
        "type": "TSImportEqualsDeclaration",
        "start": 2538,
        "end": 2584,
        "id": {
          "type": "Identifier",
          "start": 2545,
          "end": 2563,
          "name": "im_public_i_public",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "moduleReference": {
          "type": "TSQualifiedName",
          "start": 2566,
          "end": 2583,
          "left": {
            "type": "Identifier",
            "start": 2566,
            "end": 2574,
            "name": "m_public",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "right": {
            "type": "Identifier",
            "start": 2575,
            "end": 2583,
            "name": "i_public",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "importKind": "value"
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 2585,
      "end": 2640,
      "declaration": {
        "type": "TSImportEqualsDeclaration",
        "start": 2592,
        "end": 2640,
        "id": {
          "type": "Identifier",
          "start": 2599,
          "end": 2618,
          "name": "im_public_mi_public",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "moduleReference": {
          "type": "TSQualifiedName",
          "start": 2621,
          "end": 2639,
          "left": {
            "type": "Identifier",
            "start": 2621,
            "end": 2629,
            "name": "m_public",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "right": {
            "type": "Identifier",
            "start": 2630,
            "end": 2639,
            "name": "mi_public",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "importKind": "value"
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 2641,
      "end": 2696,
      "declaration": {
        "type": "TSImportEqualsDeclaration",
        "start": 2648,
        "end": 2696,
        "id": {
          "type": "Identifier",
          "start": 2655,
          "end": 2674,
          "name": "im_public_mu_public",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "moduleReference": {
          "type": "TSQualifiedName",
          "start": 2677,
          "end": 2695,
          "left": {
            "type": "Identifier",
            "start": 2677,
            "end": 2685,
            "name": "m_public",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "right": {
            "type": "Identifier",
            "start": 2686,
            "end": 2695,
            "name": "mu_public",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "importKind": "value"
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 2722,
      "end": 2783,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2726,
          "end": 2782,
          "id": {
            "type": "Identifier",
            "start": 2726,
            "end": 2755,
            "name": "privateUse_im_public_c_public",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 2758,
            "end": 2782,
            "callee": {
              "type": "Identifier",
              "start": 2762,
              "end": 2780,
              "name": "im_public_c_public",
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
      "start": 2784,
      "end": 2851,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 2791,
        "end": 2851,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 2795,
            "end": 2850,
            "id": {
              "type": "Identifier",
              "start": 2795,
              "end": 2823,
              "name": "publicUse_im_public_c_public",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "NewExpression",
              "start": 2826,
              "end": 2850,
              "callee": {
                "type": "Identifier",
                "start": 2830,
                "end": 2848,
                "name": "im_public_c_public",
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
      "start": 2852,
      "end": 2913,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2856,
          "end": 2912,
          "id": {
            "type": "Identifier",
            "start": 2856,
            "end": 2885,
            "name": "privateUse_im_public_e_public",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 2888,
            "end": 2912,
            "object": {
              "type": "Identifier",
              "start": 2888,
              "end": 2906,
              "name": "im_public_e_public",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 2907,
              "end": 2912,
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
      "start": 2914,
      "end": 2982,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 2921,
        "end": 2982,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 2925,
            "end": 2981,
            "id": {
              "type": "Identifier",
              "start": 2925,
              "end": 2953,
              "name": "publicUse_im_public_e_public",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "MemberExpression",
              "start": 2956,
              "end": 2981,
              "object": {
                "type": "Identifier",
                "start": 2956,
                "end": 2974,
                "name": "im_public_e_public",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 2975,
                "end": 2981,
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
      "start": 2983,
      "end": 3040,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2987,
          "end": 3039,
          "id": {
            "type": "Identifier",
            "start": 2987,
            "end": 3016,
            "name": "privateUse_im_public_f_public",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 3019,
            "end": 3039,
            "callee": {
              "type": "Identifier",
              "start": 3019,
              "end": 3037,
              "name": "im_public_f_public",
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
      "start": 3041,
      "end": 3104,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 3048,
        "end": 3104,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 3052,
            "end": 3103,
            "id": {
              "type": "Identifier",
              "start": 3052,
              "end": 3080,
              "name": "publicUse_im_public_f_public",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "CallExpression",
              "start": 3083,
              "end": 3103,
              "callee": {
                "type": "Identifier",
                "start": 3083,
                "end": 3101,
                "name": "im_public_f_public",
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
      "start": 3105,
      "end": 3160,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3109,
          "end": 3159,
          "id": {
            "type": "Identifier",
            "start": 3109,
            "end": 3138,
            "name": "privateUse_im_public_v_public",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 3141,
            "end": 3159,
            "name": "im_public_v_public",
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
      "start": 3161,
      "end": 3222,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 3168,
        "end": 3222,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 3172,
            "end": 3221,
            "id": {
              "type": "Identifier",
              "start": 3172,
              "end": 3200,
              "name": "publicUse_im_public_v_public",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Identifier",
              "start": 3203,
              "end": 3221,
              "name": "im_public_v_public",
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
      "start": 3223,
      "end": 3277,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3227,
          "end": 3276,
          "id": {
            "type": "Identifier",
            "start": 3227,
            "end": 3276,
            "name": "privateUse_im_public_i_public",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3256,
              "end": 3276,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 3258,
                "end": 3276,
                "typeName": {
                  "type": "Identifier",
                  "start": 3258,
                  "end": 3276,
                  "name": "im_public_i_public",
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
      "start": 3278,
      "end": 3338,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 3285,
        "end": 3338,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 3289,
            "end": 3337,
            "id": {
              "type": "Identifier",
              "start": 3289,
              "end": 3337,
              "name": "publicUse_im_public_i_public",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 3317,
                "end": 3337,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 3319,
                  "end": 3337,
                  "typeName": {
                    "type": "Identifier",
                    "start": 3319,
                    "end": 3337,
                    "name": "im_public_i_public",
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
      "start": 3339,
      "end": 3404,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3343,
          "end": 3403,
          "id": {
            "type": "Identifier",
            "start": 3343,
            "end": 3373,
            "name": "privateUse_im_public_mi_public",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 3376,
            "end": 3403,
            "callee": {
              "type": "MemberExpression",
              "start": 3380,
              "end": 3401,
              "object": {
                "type": "Identifier",
                "start": 3380,
                "end": 3399,
                "name": "im_public_mi_public",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 3400,
                "end": 3401,
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
      "start": 3405,
      "end": 3476,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 3412,
        "end": 3476,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 3416,
            "end": 3475,
            "id": {
              "type": "Identifier",
              "start": 3416,
              "end": 3445,
              "name": "publicUse_im_public_mi_public",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "NewExpression",
              "start": 3448,
              "end": 3475,
              "callee": {
                "type": "MemberExpression",
                "start": 3452,
                "end": 3473,
                "object": {
                  "type": "Identifier",
                  "start": 3452,
                  "end": 3471,
                  "name": "im_public_mi_public",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 3472,
                  "end": 3473,
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
      "start": 3477,
      "end": 3535,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3481,
          "end": 3534,
          "id": {
            "type": "Identifier",
            "start": 3481,
            "end": 3534,
            "name": "privateUse_im_public_mu_public",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3511,
              "end": 3534,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 3513,
                "end": 3534,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 3513,
                  "end": 3534,
                  "left": {
                    "type": "Identifier",
                    "start": 3513,
                    "end": 3532,
                    "name": "im_public_mu_public",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 3533,
                    "end": 3534,
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
      "start": 3536,
      "end": 3600,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 3543,
        "end": 3600,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 3547,
            "end": 3599,
            "id": {
              "type": "Identifier",
              "start": 3547,
              "end": 3599,
              "name": "publicUse_im_public_mu_public",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 3576,
                "end": 3599,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 3578,
                  "end": 3599,
                  "typeName": {
                    "type": "TSQualifiedName",
                    "start": 3578,
                    "end": 3599,
                    "left": {
                      "type": "Identifier",
                      "start": 3578,
                      "end": 3597,
                      "name": "im_public_mu_public",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 3598,
                      "end": 3599,
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
