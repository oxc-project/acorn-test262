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
          "start": 17,
          "end": 29
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
                  "start": 53,
                  "end": 82
                },
                "typeParameters": null,
                "extends": [],
                "body": {
                  "type": "TSInterfaceBody",
                  "body": [],
                  "start": 83,
                  "end": 90
                },
                "declare": false,
                "start": 43,
                "end": 90
              },
              "specifiers": [],
              "source": null,
              "exportKind": "type",
              "attributes": [],
              "start": 36,
              "end": 90
            },
            {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "privateInterfaceInPublicModule",
                "optional": false,
                "typeAnnotation": null,
                "start": 106,
                "end": 136
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [],
                "start": 137,
                "end": 144
              },
              "declare": false,
              "start": 96,
              "end": 144
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
                "start": 156,
                "end": 203
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
                    "start": 215,
                    "end": 244
                  },
                  "typeArguments": null,
                  "start": 215,
                  "end": 244
                }
              ],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 245,
                "end": 252
              },
              "abstract": false,
              "declare": false,
              "start": 150,
              "end": 252
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
                "start": 263,
                "end": 311
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
                    "start": 323,
                    "end": 353
                  },
                  "typeArguments": null,
                  "start": 323,
                  "end": 353
                }
              ],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 354,
                "end": 361
              },
              "abstract": false,
              "declare": false,
              "start": 257,
              "end": 361
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
                  "start": 379,
                  "end": 425
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
                      "start": 437,
                      "end": 466
                    },
                    "typeArguments": null,
                    "start": 437,
                    "end": 466
                  }
                ],
                "body": {
                  "type": "ClassBody",
                  "body": [],
                  "start": 467,
                  "end": 474
                },
                "abstract": false,
                "declare": false,
                "start": 373,
                "end": 474
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 366,
              "end": 474
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
                  "start": 492,
                  "end": 539
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
                      "start": 551,
                      "end": 581
                    },
                    "typeArguments": null,
                    "start": 551,
                    "end": 581
                  }
                ],
                "body": {
                  "type": "ClassBody",
                  "body": [],
                  "start": 582,
                  "end": 605
                },
                "abstract": false,
                "declare": false,
                "start": 486,
                "end": 605
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 479,
              "end": 605
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
                "start": 617,
                "end": 667
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
                      "start": 679,
                      "end": 692
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "publicInterfaceInPrivateModule",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 693,
                      "end": 723
                    },
                    "optional": false,
                    "computed": false,
                    "start": 679,
                    "end": 723
                  },
                  "typeArguments": null,
                  "start": 679,
                  "end": 723
                }
              ],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 724,
                "end": 731
              },
              "abstract": false,
              "declare": false,
              "start": 611,
              "end": 731
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
                  "start": 749,
                  "end": 798
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
                        "start": 810,
                        "end": 823
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "publicInterfaceInPrivateModule",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 824,
                        "end": 854
                      },
                      "optional": false,
                      "computed": false,
                      "start": 810,
                      "end": 854
                    },
                    "typeArguments": null,
                    "start": 810,
                    "end": 854
                  }
                ],
                "body": {
                  "type": "ClassBody",
                  "body": [],
                  "start": 855,
                  "end": 878
                },
                "abstract": false,
                "declare": false,
                "start": 743,
                "end": 878
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 736,
              "end": 878
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
                  "start": 897,
                  "end": 945
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
                      "start": 957,
                      "end": 987
                    },
                    "typeArguments": null,
                    "start": 957,
                    "end": 987
                  },
                  {
                    "type": "TSClassImplements",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "publicInterfaceInPublicModule",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 989,
                      "end": 1018
                    },
                    "typeArguments": null,
                    "start": 989,
                    "end": 1018
                  }
                ],
                "body": {
                  "type": "ClassBody",
                  "body": [],
                  "start": 1019,
                  "end": 1042
                },
                "abstract": false,
                "declare": false,
                "start": 891,
                "end": 1042
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 884,
              "end": 1042
            }
          ],
          "start": 30,
          "end": 1044
        },
        "kind": "namespace",
        "declare": false,
        "global": false,
        "start": 7,
        "end": 1044
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 1044
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "privateModule",
        "optional": false,
        "typeAnnotation": null,
        "start": 1056,
        "end": 1069
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
                "start": 1093,
                "end": 1123
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [],
                "start": 1124,
                "end": 1132
              },
              "declare": false,
              "start": 1083,
              "end": 1132
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 1076,
            "end": 1132
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateInterfaceInPrivateModule",
              "optional": false,
              "typeAnnotation": null,
              "start": 1148,
              "end": 1179
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [],
              "start": 1180,
              "end": 1187
            },
            "declare": false,
            "start": 1138,
            "end": 1187
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
              "start": 1199,
              "end": 1246
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
                  "start": 1258,
                  "end": 1288
                },
                "typeArguments": null,
                "start": 1258,
                "end": 1288
              }
            ],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 1289,
              "end": 1296
            },
            "abstract": false,
            "declare": false,
            "start": 1193,
            "end": 1296
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
              "start": 1307,
              "end": 1355
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
                  "start": 1367,
                  "end": 1398
                },
                "typeArguments": null,
                "start": 1367,
                "end": 1398
              }
            ],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 1399,
              "end": 1406
            },
            "abstract": false,
            "declare": false,
            "start": 1301,
            "end": 1406
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
                "start": 1424,
                "end": 1470
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
                    "start": 1482,
                    "end": 1512
                  },
                  "typeArguments": null,
                  "start": 1482,
                  "end": 1512
                }
              ],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 1513,
                "end": 1520
              },
              "abstract": false,
              "declare": false,
              "start": 1418,
              "end": 1520
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1411,
            "end": 1520
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
                "start": 1538,
                "end": 1585
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
                    "start": 1597,
                    "end": 1628
                  },
                  "typeArguments": null,
                  "start": 1597,
                  "end": 1628
                }
              ],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 1629,
                "end": 1637
              },
              "abstract": false,
              "declare": false,
              "start": 1532,
              "end": 1637
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1525,
            "end": 1637
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
              "start": 1649,
              "end": 1699
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
                    "start": 1711,
                    "end": 1724
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "publicInterfaceInPrivateModule",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1725,
                    "end": 1755
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1711,
                  "end": 1755
                },
                "typeArguments": null,
                "start": 1711,
                "end": 1755
              }
            ],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 1756,
              "end": 1763
            },
            "abstract": false,
            "declare": false,
            "start": 1643,
            "end": 1763
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
                "start": 1781,
                "end": 1830
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
                      "start": 1842,
                      "end": 1855
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "publicInterfaceInPrivateModule",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1856,
                      "end": 1886
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1842,
                    "end": 1886
                  },
                  "typeArguments": null,
                  "start": 1842,
                  "end": 1886
                }
              ],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 1887,
                "end": 1894
              },
              "abstract": false,
              "declare": false,
              "start": 1775,
              "end": 1894
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1768,
            "end": 1894
          }
        ],
        "start": 1070,
        "end": 1896
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 1046,
      "end": 1896
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
          "start": 1915,
          "end": 1930
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [],
          "start": 1931,
          "end": 1935
        },
        "declare": false,
        "start": 1905,
        "end": 1935
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 1898,
      "end": 1935
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "privateInterface",
        "optional": false,
        "typeAnnotation": null,
        "start": 1947,
        "end": 1963
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 1964,
        "end": 1967
      },
      "declare": false,
      "start": 1937,
      "end": 1967
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
        "start": 1975,
        "end": 2014
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
            "start": 2026,
            "end": 2041
          },
          "typeArguments": null,
          "start": 2026,
          "end": 2041
        }
      ],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 2042,
        "end": 2045
      },
      "abstract": false,
      "declare": false,
      "start": 1969,
      "end": 2045
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
        "start": 2052,
        "end": 2100
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
            "start": 2112,
            "end": 2128
          },
          "typeArguments": null,
          "start": 2112,
          "end": 2128
        }
      ],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 2129,
        "end": 2132
      },
      "abstract": false,
      "declare": false,
      "start": 2046,
      "end": 2132
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
          "start": 2146,
          "end": 2184
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
              "start": 2196,
              "end": 2211
            },
            "typeArguments": null,
            "start": 2196,
            "end": 2211
          }
        ],
        "body": {
          "type": "ClassBody",
          "body": [],
          "start": 2212,
          "end": 2215
        },
        "abstract": false,
        "declare": false,
        "start": 2140,
        "end": 2215
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 2133,
      "end": 2215
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
          "start": 2229,
          "end": 2268
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
              "start": 2280,
              "end": 2296
            },
            "typeArguments": null,
            "start": 2280,
            "end": 2296
          }
        ],
        "body": {
          "type": "ClassBody",
          "body": [],
          "start": 2297,
          "end": 2316
        },
        "abstract": false,
        "declare": false,
        "start": 2223,
        "end": 2316
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 2216,
      "end": 2316
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
        "start": 2324,
        "end": 2374
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
              "start": 2386,
              "end": 2399
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "publicInterfaceInPrivateModule",
              "optional": false,
              "typeAnnotation": null,
              "start": 2400,
              "end": 2430
            },
            "optional": false,
            "computed": false,
            "start": 2386,
            "end": 2430
          },
          "typeArguments": null,
          "start": 2386,
          "end": 2430
        }
      ],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 2431,
        "end": 2434
      },
      "abstract": false,
      "declare": false,
      "start": 2318,
      "end": 2434
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
          "start": 2448,
          "end": 2497
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
                "start": 2509,
                "end": 2522
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "publicInterfaceInPrivateModule",
                "optional": false,
                "typeAnnotation": null,
                "start": 2523,
                "end": 2553
              },
              "optional": false,
              "computed": false,
              "start": 2509,
              "end": 2553
            },
            "typeArguments": null,
            "start": 2509,
            "end": 2553
          }
        ],
        "body": {
          "type": "ClassBody",
          "body": [],
          "start": 2554,
          "end": 2573
        },
        "abstract": false,
        "declare": false,
        "start": 2442,
        "end": 2573
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 2435,
      "end": 2573
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 2574
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
        "start": 10,
        "end": 30
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
                "start": 54,
                "end": 83
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [],
                "start": 84,
                "end": 91
              },
              "declare": false,
              "start": 44,
              "end": 91
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 37,
            "end": 91
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateInterfaceInPublicModule",
              "optional": false,
              "typeAnnotation": null,
              "start": 107,
              "end": 137
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [],
              "start": 138,
              "end": 145
            },
            "declare": false,
            "start": 97,
            "end": 145
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
              "start": 157,
              "end": 204
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
                  "start": 216,
                  "end": 245
                },
                "typeArguments": null,
                "start": 216,
                "end": 245
              }
            ],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 246,
              "end": 253
            },
            "abstract": false,
            "declare": false,
            "start": 151,
            "end": 253
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
              "start": 264,
              "end": 312
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
                  "start": 324,
                  "end": 354
                },
                "typeArguments": null,
                "start": 324,
                "end": 354
              }
            ],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 355,
              "end": 362
            },
            "abstract": false,
            "declare": false,
            "start": 258,
            "end": 362
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
                "start": 380,
                "end": 426
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
                    "start": 438,
                    "end": 467
                  },
                  "typeArguments": null,
                  "start": 438,
                  "end": 467
                }
              ],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 468,
                "end": 475
              },
              "abstract": false,
              "declare": false,
              "start": 374,
              "end": 475
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 367,
            "end": 475
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
                "start": 493,
                "end": 540
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
                    "start": 552,
                    "end": 582
                  },
                  "typeArguments": null,
                  "start": 552,
                  "end": 582
                }
              ],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 583,
                "end": 606
              },
              "abstract": false,
              "declare": false,
              "start": 487,
              "end": 606
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 480,
            "end": 606
          }
        ],
        "start": 31,
        "end": 608
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 608
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "publicInterfaceInGlobal",
        "optional": false,
        "typeAnnotation": null,
        "start": 619,
        "end": 642
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 643,
        "end": 646
      },
      "declare": false,
      "start": 609,
      "end": 646
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
        "start": 653,
        "end": 699
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
            "start": 711,
            "end": 734
          },
          "typeArguments": null,
          "start": 711,
          "end": 734
        }
      ],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 735,
        "end": 738
      },
      "abstract": false,
      "declare": false,
      "start": 647,
      "end": 738
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 738
}
```
