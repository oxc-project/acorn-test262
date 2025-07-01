__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSModuleDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "publicModule",
          "optional": false,
          "typeAnnotation": null,
          "start": 14,
          "end": 26
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
                  "name": "publicInterfaceInPublicModule",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 50,
                  "end": 79
                },
                "typeParameters": null,
                "extends": [],
                "body": {
                  "type": "TSInterfaceBody",
                  "body": [],
                  "start": 80,
                  "end": 87
                },
                "declare": false,
                "start": 40,
                "end": 87
              },
              "specifiers": [],
              "source": null,
              "exportKind": "type",
              "attributes": [],
              "start": 33,
              "end": 87
            },
            {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "privateInterfaceInPublicModule",
                "optional": false,
                "typeAnnotation": null,
                "start": 103,
                "end": 133
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [],
                "start": 134,
                "end": 141
              },
              "declare": false,
              "start": 93,
              "end": 141
            },
            {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "privateClassImplementingPublicInterfaceInModule",
                "optional": false,
                "typeAnnotation": null,
                "start": 153,
                "end": 200
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [
                {
                  "type": "TSClassImplements",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "publicInterfaceInPublicModule",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 212,
                    "end": 241
                  },
                  "typeArguments": null,
                  "start": 212,
                  "end": 241
                }
              ],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 242,
                "end": 249
              },
              "abstract": false,
              "declare": false,
              "start": 147,
              "end": 249
            },
            {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "privateClassImplementingPrivateInterfaceInModule",
                "optional": false,
                "typeAnnotation": null,
                "start": 260,
                "end": 308
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [
                {
                  "type": "TSClassImplements",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "privateInterfaceInPublicModule",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 320,
                    "end": 350
                  },
                  "typeArguments": null,
                  "start": 320,
                  "end": 350
                }
              ],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 351,
                "end": 358
              },
              "abstract": false,
              "declare": false,
              "start": 254,
              "end": 358
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "ClassDeclaration",
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicClassImplementingPublicInterfaceInModule",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 376,
                  "end": 422
                },
                "typeParameters": null,
                "superClass": null,
                "superTypeArguments": null,
                "implements": [
                  {
                    "type": "TSClassImplements",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "publicInterfaceInPublicModule",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 434,
                      "end": 463
                    },
                    "typeArguments": null,
                    "start": 434,
                    "end": 463
                  }
                ],
                "body": {
                  "type": "ClassBody",
                  "body": [],
                  "start": 464,
                  "end": 471
                },
                "abstract": false,
                "declare": false,
                "start": 370,
                "end": 471
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 363,
              "end": 471
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "ClassDeclaration",
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicClassImplementingPrivateInterfaceInModule",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 489,
                  "end": 536
                },
                "typeParameters": null,
                "superClass": null,
                "superTypeArguments": null,
                "implements": [
                  {
                    "type": "TSClassImplements",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "privateInterfaceInPublicModule",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 548,
                      "end": 578
                    },
                    "typeArguments": null,
                    "start": 548,
                    "end": 578
                  }
                ],
                "body": {
                  "type": "ClassBody",
                  "body": [],
                  "start": 579,
                  "end": 602
                },
                "abstract": false,
                "declare": false,
                "start": 483,
                "end": 602
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 476,
              "end": 602
            },
            {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "privateClassImplementingFromPrivateModuleInterface",
                "optional": false,
                "typeAnnotation": null,
                "start": 614,
                "end": 664
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [
                {
                  "type": "TSClassImplements",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "privateModule",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 676,
                      "end": 689
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "publicInterfaceInPrivateModule",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 690,
                      "end": 720
                    },
                    "optional": false,
                    "computed": false,
                    "start": 676,
                    "end": 720
                  },
                  "typeArguments": null,
                  "start": 676,
                  "end": 720
                }
              ],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 721,
                "end": 728
              },
              "abstract": false,
              "declare": false,
              "start": 608,
              "end": 728
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "ClassDeclaration",
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicClassImplementingFromPrivateModuleInterface",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 746,
                  "end": 795
                },
                "typeParameters": null,
                "superClass": null,
                "superTypeArguments": null,
                "implements": [
                  {
                    "type": "TSClassImplements",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "privateModule",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 807,
                        "end": 820
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "publicInterfaceInPrivateModule",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 821,
                        "end": 851
                      },
                      "optional": false,
                      "computed": false,
                      "start": 807,
                      "end": 851
                    },
                    "typeArguments": null,
                    "start": 807,
                    "end": 851
                  }
                ],
                "body": {
                  "type": "ClassBody",
                  "body": [],
                  "start": 852,
                  "end": 875
                },
                "abstract": false,
                "declare": false,
                "start": 740,
                "end": 875
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 733,
              "end": 875
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "ClassDeclaration",
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicClassImplementingPrivateAndPublicInterface",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 894,
                  "end": 942
                },
                "typeParameters": null,
                "superClass": null,
                "superTypeArguments": null,
                "implements": [
                  {
                    "type": "TSClassImplements",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "privateInterfaceInPublicModule",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 954,
                      "end": 984
                    },
                    "typeArguments": null,
                    "start": 954,
                    "end": 984
                  },
                  {
                    "type": "TSClassImplements",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "publicInterfaceInPublicModule",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 986,
                      "end": 1015
                    },
                    "typeArguments": null,
                    "start": 986,
                    "end": 1015
                  }
                ],
                "body": {
                  "type": "ClassBody",
                  "body": [],
                  "start": 1016,
                  "end": 1039
                },
                "abstract": false,
                "declare": false,
                "start": 888,
                "end": 1039
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 881,
              "end": 1039
            }
          ],
          "start": 27,
          "end": 1041
        },
        "kind": "module",
        "declare": false,
        "global": false,
        "start": 7,
        "end": 1041
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 1041
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "privateModule",
        "optional": false,
        "typeAnnotation": null,
        "start": 1050,
        "end": 1063
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
                "name": "publicInterfaceInPrivateModule",
                "optional": false,
                "typeAnnotation": null,
                "start": 1087,
                "end": 1117
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [],
                "start": 1118,
                "end": 1126
              },
              "declare": false,
              "start": 1077,
              "end": 1126
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 1070,
            "end": 1126
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateInterfaceInPrivateModule",
              "optional": false,
              "typeAnnotation": null,
              "start": 1142,
              "end": 1173
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [],
              "start": 1174,
              "end": 1181
            },
            "declare": false,
            "start": 1132,
            "end": 1181
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateClassImplementingPublicInterfaceInModule",
              "optional": false,
              "typeAnnotation": null,
              "start": 1193,
              "end": 1240
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [
              {
                "type": "TSClassImplements",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicInterfaceInPrivateModule",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1252,
                  "end": 1282
                },
                "typeArguments": null,
                "start": 1252,
                "end": 1282
              }
            ],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 1283,
              "end": 1290
            },
            "abstract": false,
            "declare": false,
            "start": 1187,
            "end": 1290
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateClassImplementingPrivateInterfaceInModule",
              "optional": false,
              "typeAnnotation": null,
              "start": 1301,
              "end": 1349
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [
              {
                "type": "TSClassImplements",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "privateInterfaceInPrivateModule",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1361,
                  "end": 1392
                },
                "typeArguments": null,
                "start": 1361,
                "end": 1392
              }
            ],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 1393,
              "end": 1400
            },
            "abstract": false,
            "declare": false,
            "start": 1295,
            "end": 1400
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "publicClassImplementingPublicInterfaceInModule",
                "optional": false,
                "typeAnnotation": null,
                "start": 1418,
                "end": 1464
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [
                {
                  "type": "TSClassImplements",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "publicInterfaceInPrivateModule",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1476,
                    "end": 1506
                  },
                  "typeArguments": null,
                  "start": 1476,
                  "end": 1506
                }
              ],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 1507,
                "end": 1514
              },
              "abstract": false,
              "declare": false,
              "start": 1412,
              "end": 1514
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1405,
            "end": 1514
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "publicClassImplementingPrivateInterfaceInModule",
                "optional": false,
                "typeAnnotation": null,
                "start": 1532,
                "end": 1579
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [
                {
                  "type": "TSClassImplements",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "privateInterfaceInPrivateModule",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1591,
                    "end": 1622
                  },
                  "typeArguments": null,
                  "start": 1591,
                  "end": 1622
                }
              ],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 1623,
                "end": 1631
              },
              "abstract": false,
              "declare": false,
              "start": 1526,
              "end": 1631
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1519,
            "end": 1631
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateClassImplementingFromPrivateModuleInterface",
              "optional": false,
              "typeAnnotation": null,
              "start": 1643,
              "end": 1693
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [
              {
                "type": "TSClassImplements",
                "expression": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "privateModule",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1705,
                    "end": 1718
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "publicInterfaceInPrivateModule",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1719,
                    "end": 1749
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1705,
                  "end": 1749
                },
                "typeArguments": null,
                "start": 1705,
                "end": 1749
              }
            ],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 1750,
              "end": 1757
            },
            "abstract": false,
            "declare": false,
            "start": 1637,
            "end": 1757
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "publicClassImplementingFromPrivateModuleInterface",
                "optional": false,
                "typeAnnotation": null,
                "start": 1775,
                "end": 1824
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [
                {
                  "type": "TSClassImplements",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "privateModule",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1836,
                      "end": 1849
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "publicInterfaceInPrivateModule",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1850,
                      "end": 1880
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1836,
                    "end": 1880
                  },
                  "typeArguments": null,
                  "start": 1836,
                  "end": 1880
                }
              ],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 1881,
                "end": 1888
              },
              "abstract": false,
              "declare": false,
              "start": 1769,
              "end": 1888
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1762,
            "end": 1888
          }
        ],
        "start": 1064,
        "end": 1890
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 1043,
      "end": 1890
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "publicInterface",
          "optional": false,
          "typeAnnotation": null,
          "start": 1909,
          "end": 1924
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [],
          "start": 1925,
          "end": 1929
        },
        "declare": false,
        "start": 1899,
        "end": 1929
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 1892,
      "end": 1929
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "privateInterface",
        "optional": false,
        "typeAnnotation": null,
        "start": 1941,
        "end": 1957
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 1958,
        "end": 1961
      },
      "declare": false,
      "start": 1931,
      "end": 1961
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "privateClassImplementingPublicInterface",
        "optional": false,
        "typeAnnotation": null,
        "start": 1969,
        "end": 2008
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "publicInterface",
            "optional": false,
            "typeAnnotation": null,
            "start": 2020,
            "end": 2035
          },
          "typeArguments": null,
          "start": 2020,
          "end": 2035
        }
      ],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 2036,
        "end": 2039
      },
      "abstract": false,
      "declare": false,
      "start": 1963,
      "end": 2039
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "privateClassImplementingPrivateInterfaceInModule",
        "optional": false,
        "typeAnnotation": null,
        "start": 2046,
        "end": 2094
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "privateInterface",
            "optional": false,
            "typeAnnotation": null,
            "start": 2106,
            "end": 2122
          },
          "typeArguments": null,
          "start": 2106,
          "end": 2122
        }
      ],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 2123,
        "end": 2126
      },
      "abstract": false,
      "declare": false,
      "start": 2040,
      "end": 2126
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "publicClassImplementingPublicInterface",
          "optional": false,
          "typeAnnotation": null,
          "start": 2140,
          "end": 2178
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [
          {
            "type": "TSClassImplements",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "publicInterface",
              "optional": false,
              "typeAnnotation": null,
              "start": 2190,
              "end": 2205
            },
            "typeArguments": null,
            "start": 2190,
            "end": 2205
          }
        ],
        "body": {
          "type": "ClassBody",
          "body": [],
          "start": 2206,
          "end": 2209
        },
        "abstract": false,
        "declare": false,
        "start": 2134,
        "end": 2209
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 2127,
      "end": 2209
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "publicClassImplementingPrivateInterface",
          "optional": false,
          "typeAnnotation": null,
          "start": 2223,
          "end": 2262
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [
          {
            "type": "TSClassImplements",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateInterface",
              "optional": false,
              "typeAnnotation": null,
              "start": 2274,
              "end": 2290
            },
            "typeArguments": null,
            "start": 2274,
            "end": 2290
          }
        ],
        "body": {
          "type": "ClassBody",
          "body": [],
          "start": 2291,
          "end": 2310
        },
        "abstract": false,
        "declare": false,
        "start": 2217,
        "end": 2310
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 2210,
      "end": 2310
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "privateClassImplementingFromPrivateModuleInterface",
        "optional": false,
        "typeAnnotation": null,
        "start": 2318,
        "end": 2368
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "expression": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateModule",
              "optional": false,
              "typeAnnotation": null,
              "start": 2380,
              "end": 2393
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "publicInterfaceInPrivateModule",
              "optional": false,
              "typeAnnotation": null,
              "start": 2394,
              "end": 2424
            },
            "optional": false,
            "computed": false,
            "start": 2380,
            "end": 2424
          },
          "typeArguments": null,
          "start": 2380,
          "end": 2424
        }
      ],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 2425,
        "end": 2428
      },
      "abstract": false,
      "declare": false,
      "start": 2312,
      "end": 2428
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "publicClassImplementingFromPrivateModuleInterface",
          "optional": false,
          "typeAnnotation": null,
          "start": 2442,
          "end": 2491
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [
          {
            "type": "TSClassImplements",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "privateModule",
                "optional": false,
                "typeAnnotation": null,
                "start": 2503,
                "end": 2516
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "publicInterfaceInPrivateModule",
                "optional": false,
                "typeAnnotation": null,
                "start": 2517,
                "end": 2547
              },
              "optional": false,
              "computed": false,
              "start": 2503,
              "end": 2547
            },
            "typeArguments": null,
            "start": 2503,
            "end": 2547
          }
        ],
        "body": {
          "type": "ClassBody",
          "body": [],
          "start": 2548,
          "end": 2567
        },
        "abstract": false,
        "declare": false,
        "start": 2436,
        "end": 2567
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 2429,
      "end": 2567
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 2568
}
```
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
        "name": "publicModuleInGlobal",
        "optional": false,
        "typeAnnotation": null,
        "start": 7,
        "end": 27
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
                "name": "publicInterfaceInPublicModule",
                "optional": false,
                "typeAnnotation": null,
                "start": 51,
                "end": 80
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [],
                "start": 81,
                "end": 88
              },
              "declare": false,
              "start": 41,
              "end": 88
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 34,
            "end": 88
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateInterfaceInPublicModule",
              "optional": false,
              "typeAnnotation": null,
              "start": 104,
              "end": 134
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [],
              "start": 135,
              "end": 142
            },
            "declare": false,
            "start": 94,
            "end": 142
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateClassImplementingPublicInterfaceInModule",
              "optional": false,
              "typeAnnotation": null,
              "start": 154,
              "end": 201
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [
              {
                "type": "TSClassImplements",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicInterfaceInPublicModule",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 213,
                  "end": 242
                },
                "typeArguments": null,
                "start": 213,
                "end": 242
              }
            ],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 243,
              "end": 250
            },
            "abstract": false,
            "declare": false,
            "start": 148,
            "end": 250
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateClassImplementingPrivateInterfaceInModule",
              "optional": false,
              "typeAnnotation": null,
              "start": 261,
              "end": 309
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [
              {
                "type": "TSClassImplements",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "privateInterfaceInPublicModule",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 321,
                  "end": 351
                },
                "typeArguments": null,
                "start": 321,
                "end": 351
              }
            ],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 352,
              "end": 359
            },
            "abstract": false,
            "declare": false,
            "start": 255,
            "end": 359
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "publicClassImplementingPublicInterfaceInModule",
                "optional": false,
                "typeAnnotation": null,
                "start": 377,
                "end": 423
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [
                {
                  "type": "TSClassImplements",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "publicInterfaceInPublicModule",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 435,
                    "end": 464
                  },
                  "typeArguments": null,
                  "start": 435,
                  "end": 464
                }
              ],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 465,
                "end": 472
              },
              "abstract": false,
              "declare": false,
              "start": 371,
              "end": 472
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 364,
            "end": 472
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "publicClassImplementingPrivateInterfaceInModule",
                "optional": false,
                "typeAnnotation": null,
                "start": 490,
                "end": 537
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [
                {
                  "type": "TSClassImplements",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "privateInterfaceInPublicModule",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 549,
                    "end": 579
                  },
                  "typeArguments": null,
                  "start": 549,
                  "end": 579
                }
              ],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 580,
                "end": 603
              },
              "abstract": false,
              "declare": false,
              "start": 484,
              "end": 603
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 477,
            "end": 603
          }
        ],
        "start": 28,
        "end": 605
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 605
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "publicInterfaceInGlobal",
        "optional": false,
        "typeAnnotation": null,
        "start": 616,
        "end": 639
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 640,
        "end": 643
      },
      "declare": false,
      "start": 606,
      "end": 643
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "publicClassImplementingPublicInterfaceInGlobal",
        "optional": false,
        "typeAnnotation": null,
        "start": 650,
        "end": 696
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "publicInterfaceInGlobal",
            "optional": false,
            "typeAnnotation": null,
            "start": 708,
            "end": 731
          },
          "typeArguments": null,
          "start": 708,
          "end": 731
        }
      ],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 732,
        "end": 735
      },
      "abstract": false,
      "declare": false,
      "start": 644,
      "end": 735
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 735
}
```
