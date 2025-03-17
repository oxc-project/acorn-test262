__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 2568,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 1041,
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 7,
        "end": 1041,
        "id": {
          "type": "Identifier",
          "start": 14,
          "end": 26,
          "name": "publicModule",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "body": {
          "type": "TSModuleBlock",
          "start": 27,
          "end": 1041,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 33,
              "end": 87,
              "declaration": {
                "type": "TSInterfaceDeclaration",
                "start": 40,
                "end": 87,
                "id": {
                  "type": "Identifier",
                  "start": 50,
                  "end": 79,
                  "name": "publicInterfaceInPublicModule",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "extends": [],
                "typeParameters": null,
                "body": {
                  "type": "TSInterfaceBody",
                  "start": 80,
                  "end": 87,
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
              "type": "TSInterfaceDeclaration",
              "start": 93,
              "end": 141,
              "id": {
                "type": "Identifier",
                "start": 103,
                "end": 133,
                "name": "privateInterfaceInPublicModule",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "extends": [],
              "typeParameters": null,
              "body": {
                "type": "TSInterfaceBody",
                "start": 134,
                "end": 141,
                "body": []
              },
              "declare": false
            },
            {
              "type": "ClassDeclaration",
              "start": 147,
              "end": 249,
              "id": {
                "type": "Identifier",
                "start": 153,
                "end": 200,
                "name": "privateClassImplementingPublicInterfaceInModule",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 242,
                "end": 249,
                "body": []
              },
              "decorators": [],
              "typeParameters": null,
              "implements": [
                {
                  "type": "TSClassImplements",
                  "start": 212,
                  "end": 241,
                  "expression": {
                    "type": "Identifier",
                    "start": 212,
                    "end": 241,
                    "name": "publicInterfaceInPublicModule",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              ],
              "abstract": false,
              "declare": false,
              "superTypeArguments": null
            },
            {
              "type": "ClassDeclaration",
              "start": 254,
              "end": 358,
              "id": {
                "type": "Identifier",
                "start": 260,
                "end": 308,
                "name": "privateClassImplementingPrivateInterfaceInModule",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 351,
                "end": 358,
                "body": []
              },
              "decorators": [],
              "typeParameters": null,
              "implements": [
                {
                  "type": "TSClassImplements",
                  "start": 320,
                  "end": 350,
                  "expression": {
                    "type": "Identifier",
                    "start": 320,
                    "end": 350,
                    "name": "privateInterfaceInPublicModule",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              ],
              "abstract": false,
              "declare": false,
              "superTypeArguments": null
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 363,
              "end": 471,
              "declaration": {
                "type": "ClassDeclaration",
                "start": 370,
                "end": 471,
                "id": {
                  "type": "Identifier",
                  "start": 376,
                  "end": 422,
                  "name": "publicClassImplementingPublicInterfaceInModule",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "superClass": null,
                "body": {
                  "type": "ClassBody",
                  "start": 464,
                  "end": 471,
                  "body": []
                },
                "decorators": [],
                "typeParameters": null,
                "implements": [
                  {
                    "type": "TSClassImplements",
                    "start": 434,
                    "end": 463,
                    "expression": {
                      "type": "Identifier",
                      "start": 434,
                      "end": 463,
                      "name": "publicInterfaceInPublicModule",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ],
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
              "start": 476,
              "end": 602,
              "declaration": {
                "type": "ClassDeclaration",
                "start": 483,
                "end": 602,
                "id": {
                  "type": "Identifier",
                  "start": 489,
                  "end": 536,
                  "name": "publicClassImplementingPrivateInterfaceInModule",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "superClass": null,
                "body": {
                  "type": "ClassBody",
                  "start": 579,
                  "end": 602,
                  "body": []
                },
                "decorators": [],
                "typeParameters": null,
                "implements": [
                  {
                    "type": "TSClassImplements",
                    "start": 548,
                    "end": 578,
                    "expression": {
                      "type": "Identifier",
                      "start": 548,
                      "end": 578,
                      "name": "privateInterfaceInPublicModule",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ],
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
              "type": "ClassDeclaration",
              "start": 608,
              "end": 728,
              "id": {
                "type": "Identifier",
                "start": 614,
                "end": 664,
                "name": "privateClassImplementingFromPrivateModuleInterface",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 721,
                "end": 728,
                "body": []
              },
              "decorators": [],
              "typeParameters": null,
              "implements": [
                {
                  "type": "TSClassImplements",
                  "start": 676,
                  "end": 720,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 676,
                    "end": 720,
                    "object": {
                      "type": "Identifier",
                      "start": 676,
                      "end": 689,
                      "name": "privateModule",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 690,
                      "end": 720,
                      "name": "publicInterfaceInPrivateModule",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "typeArguments": null
                }
              ],
              "abstract": false,
              "declare": false,
              "superTypeArguments": null
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 733,
              "end": 875,
              "declaration": {
                "type": "ClassDeclaration",
                "start": 740,
                "end": 875,
                "id": {
                  "type": "Identifier",
                  "start": 746,
                  "end": 795,
                  "name": "publicClassImplementingFromPrivateModuleInterface",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "superClass": null,
                "body": {
                  "type": "ClassBody",
                  "start": 852,
                  "end": 875,
                  "body": []
                },
                "decorators": [],
                "typeParameters": null,
                "implements": [
                  {
                    "type": "TSClassImplements",
                    "start": 807,
                    "end": 851,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 807,
                      "end": 851,
                      "object": {
                        "type": "Identifier",
                        "start": 807,
                        "end": 820,
                        "name": "privateModule",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 821,
                        "end": 851,
                        "name": "publicInterfaceInPrivateModule",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ],
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
              "start": 881,
              "end": 1039,
              "declaration": {
                "type": "ClassDeclaration",
                "start": 888,
                "end": 1039,
                "id": {
                  "type": "Identifier",
                  "start": 894,
                  "end": 942,
                  "name": "publicClassImplementingPrivateAndPublicInterface",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "superClass": null,
                "body": {
                  "type": "ClassBody",
                  "start": 1016,
                  "end": 1039,
                  "body": []
                },
                "decorators": [],
                "typeParameters": null,
                "implements": [
                  {
                    "type": "TSClassImplements",
                    "start": 954,
                    "end": 984,
                    "expression": {
                      "type": "Identifier",
                      "start": 954,
                      "end": 984,
                      "name": "privateInterfaceInPublicModule",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSClassImplements",
                    "start": 986,
                    "end": 1015,
                    "expression": {
                      "type": "Identifier",
                      "start": 986,
                      "end": 1015,
                      "name": "publicInterfaceInPublicModule",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ],
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
      "type": "TSModuleDeclaration",
      "start": 1043,
      "end": 1890,
      "id": {
        "type": "Identifier",
        "start": 1050,
        "end": 1063,
        "name": "privateModule",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 1064,
        "end": 1890,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 1070,
            "end": 1126,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 1077,
              "end": 1126,
              "id": {
                "type": "Identifier",
                "start": 1087,
                "end": 1117,
                "name": "publicInterfaceInPrivateModule",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "extends": [],
              "typeParameters": null,
              "body": {
                "type": "TSInterfaceBody",
                "start": 1118,
                "end": 1126,
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
            "type": "TSInterfaceDeclaration",
            "start": 1132,
            "end": 1181,
            "id": {
              "type": "Identifier",
              "start": 1142,
              "end": 1173,
              "name": "privateInterfaceInPrivateModule",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": null,
            "body": {
              "type": "TSInterfaceBody",
              "start": 1174,
              "end": 1181,
              "body": []
            },
            "declare": false
          },
          {
            "type": "ClassDeclaration",
            "start": 1187,
            "end": 1290,
            "id": {
              "type": "Identifier",
              "start": 1193,
              "end": 1240,
              "name": "privateClassImplementingPublicInterfaceInModule",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 1283,
              "end": 1290,
              "body": []
            },
            "decorators": [],
            "typeParameters": null,
            "implements": [
              {
                "type": "TSClassImplements",
                "start": 1252,
                "end": 1282,
                "expression": {
                  "type": "Identifier",
                  "start": 1252,
                  "end": 1282,
                  "name": "publicInterfaceInPrivateModule",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            ],
            "abstract": false,
            "declare": false,
            "superTypeArguments": null
          },
          {
            "type": "ClassDeclaration",
            "start": 1295,
            "end": 1400,
            "id": {
              "type": "Identifier",
              "start": 1301,
              "end": 1349,
              "name": "privateClassImplementingPrivateInterfaceInModule",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 1393,
              "end": 1400,
              "body": []
            },
            "decorators": [],
            "typeParameters": null,
            "implements": [
              {
                "type": "TSClassImplements",
                "start": 1361,
                "end": 1392,
                "expression": {
                  "type": "Identifier",
                  "start": 1361,
                  "end": 1392,
                  "name": "privateInterfaceInPrivateModule",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            ],
            "abstract": false,
            "declare": false,
            "superTypeArguments": null
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 1405,
            "end": 1514,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 1412,
              "end": 1514,
              "id": {
                "type": "Identifier",
                "start": 1418,
                "end": 1464,
                "name": "publicClassImplementingPublicInterfaceInModule",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 1507,
                "end": 1514,
                "body": []
              },
              "decorators": [],
              "typeParameters": null,
              "implements": [
                {
                  "type": "TSClassImplements",
                  "start": 1476,
                  "end": 1506,
                  "expression": {
                    "type": "Identifier",
                    "start": 1476,
                    "end": 1506,
                    "name": "publicInterfaceInPrivateModule",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              ],
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
            "start": 1519,
            "end": 1631,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 1526,
              "end": 1631,
              "id": {
                "type": "Identifier",
                "start": 1532,
                "end": 1579,
                "name": "publicClassImplementingPrivateInterfaceInModule",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 1623,
                "end": 1631,
                "body": []
              },
              "decorators": [],
              "typeParameters": null,
              "implements": [
                {
                  "type": "TSClassImplements",
                  "start": 1591,
                  "end": 1622,
                  "expression": {
                    "type": "Identifier",
                    "start": 1591,
                    "end": 1622,
                    "name": "privateInterfaceInPrivateModule",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              ],
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
            "type": "ClassDeclaration",
            "start": 1637,
            "end": 1757,
            "id": {
              "type": "Identifier",
              "start": 1643,
              "end": 1693,
              "name": "privateClassImplementingFromPrivateModuleInterface",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 1750,
              "end": 1757,
              "body": []
            },
            "decorators": [],
            "typeParameters": null,
            "implements": [
              {
                "type": "TSClassImplements",
                "start": 1705,
                "end": 1749,
                "expression": {
                  "type": "MemberExpression",
                  "start": 1705,
                  "end": 1749,
                  "object": {
                    "type": "Identifier",
                    "start": 1705,
                    "end": 1718,
                    "name": "privateModule",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 1719,
                    "end": 1749,
                    "name": "publicInterfaceInPrivateModule",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "typeArguments": null
              }
            ],
            "abstract": false,
            "declare": false,
            "superTypeArguments": null
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 1762,
            "end": 1888,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 1769,
              "end": 1888,
              "id": {
                "type": "Identifier",
                "start": 1775,
                "end": 1824,
                "name": "publicClassImplementingFromPrivateModuleInterface",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 1881,
                "end": 1888,
                "body": []
              },
              "decorators": [],
              "typeParameters": null,
              "implements": [
                {
                  "type": "TSClassImplements",
                  "start": 1836,
                  "end": 1880,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 1836,
                    "end": 1880,
                    "object": {
                      "type": "Identifier",
                      "start": 1836,
                      "end": 1849,
                      "name": "privateModule",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 1850,
                      "end": 1880,
                      "name": "publicInterfaceInPrivateModule",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "typeArguments": null
                }
              ],
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
    {
      "type": "ExportNamedDeclaration",
      "start": 1892,
      "end": 1929,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 1899,
        "end": 1929,
        "id": {
          "type": "Identifier",
          "start": 1909,
          "end": 1924,
          "name": "publicInterface",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "extends": [],
        "typeParameters": null,
        "body": {
          "type": "TSInterfaceBody",
          "start": 1925,
          "end": 1929,
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
      "type": "TSInterfaceDeclaration",
      "start": 1931,
      "end": 1961,
      "id": {
        "type": "Identifier",
        "start": 1941,
        "end": 1957,
        "name": "privateInterface",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 1958,
        "end": 1961,
        "body": []
      },
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 1963,
      "end": 2039,
      "id": {
        "type": "Identifier",
        "start": 1969,
        "end": 2008,
        "name": "privateClassImplementingPublicInterface",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 2036,
        "end": 2039,
        "body": []
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 2020,
          "end": 2035,
          "expression": {
            "type": "Identifier",
            "start": 2020,
            "end": 2035,
            "name": "publicInterface",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 2040,
      "end": 2126,
      "id": {
        "type": "Identifier",
        "start": 2046,
        "end": 2094,
        "name": "privateClassImplementingPrivateInterfaceInModule",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 2123,
        "end": 2126,
        "body": []
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 2106,
          "end": 2122,
          "expression": {
            "type": "Identifier",
            "start": 2106,
            "end": 2122,
            "name": "privateInterface",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 2127,
      "end": 2209,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 2134,
        "end": 2209,
        "id": {
          "type": "Identifier",
          "start": 2140,
          "end": 2178,
          "name": "publicClassImplementingPublicInterface",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 2206,
          "end": 2209,
          "body": []
        },
        "decorators": [],
        "typeParameters": null,
        "implements": [
          {
            "type": "TSClassImplements",
            "start": 2190,
            "end": 2205,
            "expression": {
              "type": "Identifier",
              "start": 2190,
              "end": 2205,
              "name": "publicInterface",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        ],
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
      "start": 2210,
      "end": 2310,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 2217,
        "end": 2310,
        "id": {
          "type": "Identifier",
          "start": 2223,
          "end": 2262,
          "name": "publicClassImplementingPrivateInterface",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 2291,
          "end": 2310,
          "body": []
        },
        "decorators": [],
        "typeParameters": null,
        "implements": [
          {
            "type": "TSClassImplements",
            "start": 2274,
            "end": 2290,
            "expression": {
              "type": "Identifier",
              "start": 2274,
              "end": 2290,
              "name": "privateInterface",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        ],
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
      "type": "ClassDeclaration",
      "start": 2312,
      "end": 2428,
      "id": {
        "type": "Identifier",
        "start": 2318,
        "end": 2368,
        "name": "privateClassImplementingFromPrivateModuleInterface",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 2425,
        "end": 2428,
        "body": []
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 2380,
          "end": 2424,
          "expression": {
            "type": "MemberExpression",
            "start": 2380,
            "end": 2424,
            "object": {
              "type": "Identifier",
              "start": 2380,
              "end": 2393,
              "name": "privateModule",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 2394,
              "end": 2424,
              "name": "publicInterfaceInPrivateModule",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 2429,
      "end": 2567,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 2436,
        "end": 2567,
        "id": {
          "type": "Identifier",
          "start": 2442,
          "end": 2491,
          "name": "publicClassImplementingFromPrivateModuleInterface",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 2548,
          "end": 2567,
          "body": []
        },
        "decorators": [],
        "typeParameters": null,
        "implements": [
          {
            "type": "TSClassImplements",
            "start": 2503,
            "end": 2547,
            "expression": {
              "type": "MemberExpression",
              "start": 2503,
              "end": 2547,
              "object": {
                "type": "Identifier",
                "start": 2503,
                "end": 2516,
                "name": "privateModule",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 2517,
                "end": 2547,
                "name": "publicInterfaceInPrivateModule",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "typeArguments": null
          }
        ],
        "abstract": false,
        "declare": false,
        "superTypeArguments": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 736,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 605,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 27,
        "name": "publicModuleInGlobal",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 28,
        "end": 605,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 34,
            "end": 88,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 41,
              "end": 88,
              "id": {
                "type": "Identifier",
                "start": 51,
                "end": 80,
                "name": "publicInterfaceInPublicModule",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "extends": [],
              "typeParameters": null,
              "body": {
                "type": "TSInterfaceBody",
                "start": 81,
                "end": 88,
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
            "type": "TSInterfaceDeclaration",
            "start": 94,
            "end": 142,
            "id": {
              "type": "Identifier",
              "start": 104,
              "end": 134,
              "name": "privateInterfaceInPublicModule",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": null,
            "body": {
              "type": "TSInterfaceBody",
              "start": 135,
              "end": 142,
              "body": []
            },
            "declare": false
          },
          {
            "type": "ClassDeclaration",
            "start": 148,
            "end": 250,
            "id": {
              "type": "Identifier",
              "start": 154,
              "end": 201,
              "name": "privateClassImplementingPublicInterfaceInModule",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 243,
              "end": 250,
              "body": []
            },
            "decorators": [],
            "typeParameters": null,
            "implements": [
              {
                "type": "TSClassImplements",
                "start": 213,
                "end": 242,
                "expression": {
                  "type": "Identifier",
                  "start": 213,
                  "end": 242,
                  "name": "publicInterfaceInPublicModule",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            ],
            "abstract": false,
            "declare": false,
            "superTypeArguments": null
          },
          {
            "type": "ClassDeclaration",
            "start": 255,
            "end": 359,
            "id": {
              "type": "Identifier",
              "start": 261,
              "end": 309,
              "name": "privateClassImplementingPrivateInterfaceInModule",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 352,
              "end": 359,
              "body": []
            },
            "decorators": [],
            "typeParameters": null,
            "implements": [
              {
                "type": "TSClassImplements",
                "start": 321,
                "end": 351,
                "expression": {
                  "type": "Identifier",
                  "start": 321,
                  "end": 351,
                  "name": "privateInterfaceInPublicModule",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            ],
            "abstract": false,
            "declare": false,
            "superTypeArguments": null
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 364,
            "end": 472,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 371,
              "end": 472,
              "id": {
                "type": "Identifier",
                "start": 377,
                "end": 423,
                "name": "publicClassImplementingPublicInterfaceInModule",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 465,
                "end": 472,
                "body": []
              },
              "decorators": [],
              "typeParameters": null,
              "implements": [
                {
                  "type": "TSClassImplements",
                  "start": 435,
                  "end": 464,
                  "expression": {
                    "type": "Identifier",
                    "start": 435,
                    "end": 464,
                    "name": "publicInterfaceInPublicModule",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              ],
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
            "start": 477,
            "end": 603,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 484,
              "end": 603,
              "id": {
                "type": "Identifier",
                "start": 490,
                "end": 537,
                "name": "publicClassImplementingPrivateInterfaceInModule",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 580,
                "end": 603,
                "body": []
              },
              "decorators": [],
              "typeParameters": null,
              "implements": [
                {
                  "type": "TSClassImplements",
                  "start": 549,
                  "end": 579,
                  "expression": {
                    "type": "Identifier",
                    "start": 549,
                    "end": 579,
                    "name": "privateInterfaceInPublicModule",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              ],
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
    {
      "type": "TSInterfaceDeclaration",
      "start": 606,
      "end": 643,
      "id": {
        "type": "Identifier",
        "start": 616,
        "end": 639,
        "name": "publicInterfaceInGlobal",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 640,
        "end": 643,
        "body": []
      },
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 644,
      "end": 735,
      "id": {
        "type": "Identifier",
        "start": 650,
        "end": 696,
        "name": "publicClassImplementingPublicInterfaceInGlobal",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 732,
        "end": 735,
        "body": []
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 708,
          "end": 731,
          "expression": {
            "type": "Identifier",
            "start": 708,
            "end": 731,
            "name": "publicInterfaceInGlobal",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
