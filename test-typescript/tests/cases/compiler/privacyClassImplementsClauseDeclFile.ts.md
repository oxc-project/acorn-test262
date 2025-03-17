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
      "attributes": [],
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 7,
        "end": 1041,
        "body": {
          "type": "TSModuleBlock",
          "start": 27,
          "end": 1041,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 33,
              "end": 87,
              "attributes": [],
              "declaration": {
                "type": "TSInterfaceDeclaration",
                "start": 40,
                "end": 87,
                "body": {
                  "type": "TSInterfaceBody",
                  "start": 80,
                  "end": 87,
                  "body": []
                },
                "declare": false,
                "extends": [],
                "id": {
                  "type": "Identifier",
                  "start": 50,
                  "end": 79,
                  "decorators": [],
                  "name": "publicInterfaceInPublicModule",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeParameters": null
              },
              "exportKind": "type",
              "source": null,
              "specifiers": []
            },
            {
              "type": "TSInterfaceDeclaration",
              "start": 93,
              "end": 141,
              "body": {
                "type": "TSInterfaceBody",
                "start": 134,
                "end": 141,
                "body": []
              },
              "declare": false,
              "extends": [],
              "id": {
                "type": "Identifier",
                "start": 103,
                "end": 133,
                "decorators": [],
                "name": "privateInterfaceInPublicModule",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null
            },
            {
              "type": "ClassDeclaration",
              "start": 147,
              "end": 249,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 242,
                "end": 249,
                "body": []
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 153,
                "end": 200,
                "decorators": [],
                "name": "privateClassImplementingPublicInterfaceInModule",
                "optional": false,
                "typeAnnotation": null
              },
              "implements": [
                {
                  "type": "TSClassImplements",
                  "start": 212,
                  "end": 241,
                  "expression": {
                    "type": "Identifier",
                    "start": 212,
                    "end": 241,
                    "decorators": [],
                    "name": "publicInterfaceInPublicModule",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              ],
              "superClass": null,
              "superTypeArguments": null,
              "typeParameters": null
            },
            {
              "type": "ClassDeclaration",
              "start": 254,
              "end": 358,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 351,
                "end": 358,
                "body": []
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 260,
                "end": 308,
                "decorators": [],
                "name": "privateClassImplementingPrivateInterfaceInModule",
                "optional": false,
                "typeAnnotation": null
              },
              "implements": [
                {
                  "type": "TSClassImplements",
                  "start": 320,
                  "end": 350,
                  "expression": {
                    "type": "Identifier",
                    "start": 320,
                    "end": 350,
                    "decorators": [],
                    "name": "privateInterfaceInPublicModule",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              ],
              "superClass": null,
              "superTypeArguments": null,
              "typeParameters": null
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 363,
              "end": 471,
              "attributes": [],
              "declaration": {
                "type": "ClassDeclaration",
                "start": 370,
                "end": 471,
                "abstract": false,
                "body": {
                  "type": "ClassBody",
                  "start": 464,
                  "end": 471,
                  "body": []
                },
                "declare": false,
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "start": 376,
                  "end": 422,
                  "decorators": [],
                  "name": "publicClassImplementingPublicInterfaceInModule",
                  "optional": false,
                  "typeAnnotation": null
                },
                "implements": [
                  {
                    "type": "TSClassImplements",
                    "start": 434,
                    "end": 463,
                    "expression": {
                      "type": "Identifier",
                      "start": 434,
                      "end": 463,
                      "decorators": [],
                      "name": "publicInterfaceInPublicModule",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ],
                "superClass": null,
                "superTypeArguments": null,
                "typeParameters": null
              },
              "exportKind": "value",
              "source": null,
              "specifiers": []
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 476,
              "end": 602,
              "attributes": [],
              "declaration": {
                "type": "ClassDeclaration",
                "start": 483,
                "end": 602,
                "abstract": false,
                "body": {
                  "type": "ClassBody",
                  "start": 579,
                  "end": 602,
                  "body": []
                },
                "declare": false,
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "start": 489,
                  "end": 536,
                  "decorators": [],
                  "name": "publicClassImplementingPrivateInterfaceInModule",
                  "optional": false,
                  "typeAnnotation": null
                },
                "implements": [
                  {
                    "type": "TSClassImplements",
                    "start": 548,
                    "end": 578,
                    "expression": {
                      "type": "Identifier",
                      "start": 548,
                      "end": 578,
                      "decorators": [],
                      "name": "privateInterfaceInPublicModule",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ],
                "superClass": null,
                "superTypeArguments": null,
                "typeParameters": null
              },
              "exportKind": "value",
              "source": null,
              "specifiers": []
            },
            {
              "type": "ClassDeclaration",
              "start": 608,
              "end": 728,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 721,
                "end": 728,
                "body": []
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 614,
                "end": 664,
                "decorators": [],
                "name": "privateClassImplementingFromPrivateModuleInterface",
                "optional": false,
                "typeAnnotation": null
              },
              "implements": [
                {
                  "type": "TSClassImplements",
                  "start": 676,
                  "end": 720,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 676,
                    "end": 720,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 676,
                      "end": 689,
                      "decorators": [],
                      "name": "privateModule",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 690,
                      "end": 720,
                      "decorators": [],
                      "name": "publicInterfaceInPrivateModule",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "typeArguments": null
                }
              ],
              "superClass": null,
              "superTypeArguments": null,
              "typeParameters": null
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 733,
              "end": 875,
              "attributes": [],
              "declaration": {
                "type": "ClassDeclaration",
                "start": 740,
                "end": 875,
                "abstract": false,
                "body": {
                  "type": "ClassBody",
                  "start": 852,
                  "end": 875,
                  "body": []
                },
                "declare": false,
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "start": 746,
                  "end": 795,
                  "decorators": [],
                  "name": "publicClassImplementingFromPrivateModuleInterface",
                  "optional": false,
                  "typeAnnotation": null
                },
                "implements": [
                  {
                    "type": "TSClassImplements",
                    "start": 807,
                    "end": 851,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 807,
                      "end": 851,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 807,
                        "end": 820,
                        "decorators": [],
                        "name": "privateModule",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 821,
                        "end": 851,
                        "decorators": [],
                        "name": "publicInterfaceInPrivateModule",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "typeArguments": null
                  }
                ],
                "superClass": null,
                "superTypeArguments": null,
                "typeParameters": null
              },
              "exportKind": "value",
              "source": null,
              "specifiers": []
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 881,
              "end": 1039,
              "attributes": [],
              "declaration": {
                "type": "ClassDeclaration",
                "start": 888,
                "end": 1039,
                "abstract": false,
                "body": {
                  "type": "ClassBody",
                  "start": 1016,
                  "end": 1039,
                  "body": []
                },
                "declare": false,
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "start": 894,
                  "end": 942,
                  "decorators": [],
                  "name": "publicClassImplementingPrivateAndPublicInterface",
                  "optional": false,
                  "typeAnnotation": null
                },
                "implements": [
                  {
                    "type": "TSClassImplements",
                    "start": 954,
                    "end": 984,
                    "expression": {
                      "type": "Identifier",
                      "start": 954,
                      "end": 984,
                      "decorators": [],
                      "name": "privateInterfaceInPublicModule",
                      "optional": false,
                      "typeAnnotation": null
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
                      "decorators": [],
                      "name": "publicInterfaceInPublicModule",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ],
                "superClass": null,
                "superTypeArguments": null,
                "typeParameters": null
              },
              "exportKind": "value",
              "source": null,
              "specifiers": []
            }
          ]
        },
        "declare": false,
        "global": false,
        "id": {
          "type": "Identifier",
          "start": 14,
          "end": 26,
          "decorators": [],
          "name": "publicModule",
          "optional": false,
          "typeAnnotation": null
        },
        "kind": "module"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "TSModuleDeclaration",
      "start": 1043,
      "end": 1890,
      "body": {
        "type": "TSModuleBlock",
        "start": 1064,
        "end": 1890,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 1070,
            "end": 1126,
            "attributes": [],
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 1077,
              "end": 1126,
              "body": {
                "type": "TSInterfaceBody",
                "start": 1118,
                "end": 1126,
                "body": []
              },
              "declare": false,
              "extends": [],
              "id": {
                "type": "Identifier",
                "start": 1087,
                "end": 1117,
                "decorators": [],
                "name": "publicInterfaceInPrivateModule",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null
            },
            "exportKind": "type",
            "source": null,
            "specifiers": []
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 1132,
            "end": 1181,
            "body": {
              "type": "TSInterfaceBody",
              "start": 1174,
              "end": 1181,
              "body": []
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 1142,
              "end": 1173,
              "decorators": [],
              "name": "privateInterfaceInPrivateModule",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null
          },
          {
            "type": "ClassDeclaration",
            "start": 1187,
            "end": 1290,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 1283,
              "end": 1290,
              "body": []
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 1193,
              "end": 1240,
              "decorators": [],
              "name": "privateClassImplementingPublicInterfaceInModule",
              "optional": false,
              "typeAnnotation": null
            },
            "implements": [
              {
                "type": "TSClassImplements",
                "start": 1252,
                "end": 1282,
                "expression": {
                  "type": "Identifier",
                  "start": 1252,
                  "end": 1282,
                  "decorators": [],
                  "name": "publicInterfaceInPrivateModule",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            ],
            "superClass": null,
            "superTypeArguments": null,
            "typeParameters": null
          },
          {
            "type": "ClassDeclaration",
            "start": 1295,
            "end": 1400,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 1393,
              "end": 1400,
              "body": []
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 1301,
              "end": 1349,
              "decorators": [],
              "name": "privateClassImplementingPrivateInterfaceInModule",
              "optional": false,
              "typeAnnotation": null
            },
            "implements": [
              {
                "type": "TSClassImplements",
                "start": 1361,
                "end": 1392,
                "expression": {
                  "type": "Identifier",
                  "start": 1361,
                  "end": 1392,
                  "decorators": [],
                  "name": "privateInterfaceInPrivateModule",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            ],
            "superClass": null,
            "superTypeArguments": null,
            "typeParameters": null
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 1405,
            "end": 1514,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 1412,
              "end": 1514,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 1507,
                "end": 1514,
                "body": []
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 1418,
                "end": 1464,
                "decorators": [],
                "name": "publicClassImplementingPublicInterfaceInModule",
                "optional": false,
                "typeAnnotation": null
              },
              "implements": [
                {
                  "type": "TSClassImplements",
                  "start": 1476,
                  "end": 1506,
                  "expression": {
                    "type": "Identifier",
                    "start": 1476,
                    "end": 1506,
                    "decorators": [],
                    "name": "publicInterfaceInPrivateModule",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              ],
              "superClass": null,
              "superTypeArguments": null,
              "typeParameters": null
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 1519,
            "end": 1631,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 1526,
              "end": 1631,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 1623,
                "end": 1631,
                "body": []
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 1532,
                "end": 1579,
                "decorators": [],
                "name": "publicClassImplementingPrivateInterfaceInModule",
                "optional": false,
                "typeAnnotation": null
              },
              "implements": [
                {
                  "type": "TSClassImplements",
                  "start": 1591,
                  "end": 1622,
                  "expression": {
                    "type": "Identifier",
                    "start": 1591,
                    "end": 1622,
                    "decorators": [],
                    "name": "privateInterfaceInPrivateModule",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              ],
              "superClass": null,
              "superTypeArguments": null,
              "typeParameters": null
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ClassDeclaration",
            "start": 1637,
            "end": 1757,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 1750,
              "end": 1757,
              "body": []
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 1643,
              "end": 1693,
              "decorators": [],
              "name": "privateClassImplementingFromPrivateModuleInterface",
              "optional": false,
              "typeAnnotation": null
            },
            "implements": [
              {
                "type": "TSClassImplements",
                "start": 1705,
                "end": 1749,
                "expression": {
                  "type": "MemberExpression",
                  "start": 1705,
                  "end": 1749,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 1705,
                    "end": 1718,
                    "decorators": [],
                    "name": "privateModule",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 1719,
                    "end": 1749,
                    "decorators": [],
                    "name": "publicInterfaceInPrivateModule",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "typeArguments": null
              }
            ],
            "superClass": null,
            "superTypeArguments": null,
            "typeParameters": null
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 1762,
            "end": 1888,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 1769,
              "end": 1888,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 1881,
                "end": 1888,
                "body": []
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 1775,
                "end": 1824,
                "decorators": [],
                "name": "publicClassImplementingFromPrivateModuleInterface",
                "optional": false,
                "typeAnnotation": null
              },
              "implements": [
                {
                  "type": "TSClassImplements",
                  "start": 1836,
                  "end": 1880,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 1836,
                    "end": 1880,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 1836,
                      "end": 1849,
                      "decorators": [],
                      "name": "privateModule",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 1850,
                      "end": 1880,
                      "decorators": [],
                      "name": "publicInterfaceInPrivateModule",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "typeArguments": null
                }
              ],
              "superClass": null,
              "superTypeArguments": null,
              "typeParameters": null
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 1050,
        "end": 1063,
        "decorators": [],
        "name": "privateModule",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1892,
      "end": 1929,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 1899,
        "end": 1929,
        "body": {
          "type": "TSInterfaceBody",
          "start": 1925,
          "end": 1929,
          "body": []
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "start": 1909,
          "end": 1924,
          "decorators": [],
          "name": "publicInterface",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1931,
      "end": 1961,
      "body": {
        "type": "TSInterfaceBody",
        "start": 1958,
        "end": 1961,
        "body": []
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 1941,
        "end": 1957,
        "decorators": [],
        "name": "privateInterface",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 1963,
      "end": 2039,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 2036,
        "end": 2039,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 1969,
        "end": 2008,
        "decorators": [],
        "name": "privateClassImplementingPublicInterface",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 2020,
          "end": 2035,
          "expression": {
            "type": "Identifier",
            "start": 2020,
            "end": 2035,
            "decorators": [],
            "name": "publicInterface",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 2040,
      "end": 2126,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 2123,
        "end": 2126,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 2046,
        "end": 2094,
        "decorators": [],
        "name": "privateClassImplementingPrivateInterfaceInModule",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 2106,
          "end": 2122,
          "expression": {
            "type": "Identifier",
            "start": 2106,
            "end": 2122,
            "decorators": [],
            "name": "privateInterface",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 2127,
      "end": 2209,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 2134,
        "end": 2209,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 2206,
          "end": 2209,
          "body": []
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 2140,
          "end": 2178,
          "decorators": [],
          "name": "publicClassImplementingPublicInterface",
          "optional": false,
          "typeAnnotation": null
        },
        "implements": [
          {
            "type": "TSClassImplements",
            "start": 2190,
            "end": 2205,
            "expression": {
              "type": "Identifier",
              "start": 2190,
              "end": 2205,
              "decorators": [],
              "name": "publicInterface",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        ],
        "superClass": null,
        "superTypeArguments": null,
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 2210,
      "end": 2310,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 2217,
        "end": 2310,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 2291,
          "end": 2310,
          "body": []
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 2223,
          "end": 2262,
          "decorators": [],
          "name": "publicClassImplementingPrivateInterface",
          "optional": false,
          "typeAnnotation": null
        },
        "implements": [
          {
            "type": "TSClassImplements",
            "start": 2274,
            "end": 2290,
            "expression": {
              "type": "Identifier",
              "start": 2274,
              "end": 2290,
              "decorators": [],
              "name": "privateInterface",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        ],
        "superClass": null,
        "superTypeArguments": null,
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ClassDeclaration",
      "start": 2312,
      "end": 2428,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 2425,
        "end": 2428,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 2318,
        "end": 2368,
        "decorators": [],
        "name": "privateClassImplementingFromPrivateModuleInterface",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 2380,
          "end": 2424,
          "expression": {
            "type": "MemberExpression",
            "start": 2380,
            "end": 2424,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 2380,
              "end": 2393,
              "decorators": [],
              "name": "privateModule",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 2394,
              "end": 2424,
              "decorators": [],
              "name": "publicInterfaceInPrivateModule",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "typeArguments": null
        }
      ],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 2429,
      "end": 2567,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 2436,
        "end": 2567,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 2548,
          "end": 2567,
          "body": []
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 2442,
          "end": 2491,
          "decorators": [],
          "name": "publicClassImplementingFromPrivateModuleInterface",
          "optional": false,
          "typeAnnotation": null
        },
        "implements": [
          {
            "type": "TSClassImplements",
            "start": 2503,
            "end": 2547,
            "expression": {
              "type": "MemberExpression",
              "start": 2503,
              "end": 2547,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 2503,
                "end": 2516,
                "decorators": [],
                "name": "privateModule",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 2517,
                "end": 2547,
                "decorators": [],
                "name": "publicInterfaceInPrivateModule",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "typeArguments": null
          }
        ],
        "superClass": null,
        "superTypeArguments": null,
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
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
      "body": {
        "type": "TSModuleBlock",
        "start": 28,
        "end": 605,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 34,
            "end": 88,
            "attributes": [],
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 41,
              "end": 88,
              "body": {
                "type": "TSInterfaceBody",
                "start": 81,
                "end": 88,
                "body": []
              },
              "declare": false,
              "extends": [],
              "id": {
                "type": "Identifier",
                "start": 51,
                "end": 80,
                "decorators": [],
                "name": "publicInterfaceInPublicModule",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null
            },
            "exportKind": "type",
            "source": null,
            "specifiers": []
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 94,
            "end": 142,
            "body": {
              "type": "TSInterfaceBody",
              "start": 135,
              "end": 142,
              "body": []
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 104,
              "end": 134,
              "decorators": [],
              "name": "privateInterfaceInPublicModule",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null
          },
          {
            "type": "ClassDeclaration",
            "start": 148,
            "end": 250,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 243,
              "end": 250,
              "body": []
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 154,
              "end": 201,
              "decorators": [],
              "name": "privateClassImplementingPublicInterfaceInModule",
              "optional": false,
              "typeAnnotation": null
            },
            "implements": [
              {
                "type": "TSClassImplements",
                "start": 213,
                "end": 242,
                "expression": {
                  "type": "Identifier",
                  "start": 213,
                  "end": 242,
                  "decorators": [],
                  "name": "publicInterfaceInPublicModule",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            ],
            "superClass": null,
            "superTypeArguments": null,
            "typeParameters": null
          },
          {
            "type": "ClassDeclaration",
            "start": 255,
            "end": 359,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 352,
              "end": 359,
              "body": []
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 261,
              "end": 309,
              "decorators": [],
              "name": "privateClassImplementingPrivateInterfaceInModule",
              "optional": false,
              "typeAnnotation": null
            },
            "implements": [
              {
                "type": "TSClassImplements",
                "start": 321,
                "end": 351,
                "expression": {
                  "type": "Identifier",
                  "start": 321,
                  "end": 351,
                  "decorators": [],
                  "name": "privateInterfaceInPublicModule",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            ],
            "superClass": null,
            "superTypeArguments": null,
            "typeParameters": null
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 364,
            "end": 472,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 371,
              "end": 472,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 465,
                "end": 472,
                "body": []
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 377,
                "end": 423,
                "decorators": [],
                "name": "publicClassImplementingPublicInterfaceInModule",
                "optional": false,
                "typeAnnotation": null
              },
              "implements": [
                {
                  "type": "TSClassImplements",
                  "start": 435,
                  "end": 464,
                  "expression": {
                    "type": "Identifier",
                    "start": 435,
                    "end": 464,
                    "decorators": [],
                    "name": "publicInterfaceInPublicModule",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              ],
              "superClass": null,
              "superTypeArguments": null,
              "typeParameters": null
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 477,
            "end": 603,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 484,
              "end": 603,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 580,
                "end": 603,
                "body": []
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 490,
                "end": 537,
                "decorators": [],
                "name": "publicClassImplementingPrivateInterfaceInModule",
                "optional": false,
                "typeAnnotation": null
              },
              "implements": [
                {
                  "type": "TSClassImplements",
                  "start": 549,
                  "end": 579,
                  "expression": {
                    "type": "Identifier",
                    "start": 549,
                    "end": 579,
                    "decorators": [],
                    "name": "privateInterfaceInPublicModule",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              ],
              "superClass": null,
              "superTypeArguments": null,
              "typeParameters": null
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 27,
        "decorators": [],
        "name": "publicModuleInGlobal",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 606,
      "end": 643,
      "body": {
        "type": "TSInterfaceBody",
        "start": 640,
        "end": 643,
        "body": []
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 616,
        "end": 639,
        "decorators": [],
        "name": "publicInterfaceInGlobal",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 644,
      "end": 735,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 732,
        "end": 735,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 650,
        "end": 696,
        "decorators": [],
        "name": "publicClassImplementingPublicInterfaceInGlobal",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 708,
          "end": 731,
          "expression": {
            "type": "Identifier",
            "start": 708,
            "end": 731,
            "decorators": [],
            "name": "publicInterfaceInGlobal",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
