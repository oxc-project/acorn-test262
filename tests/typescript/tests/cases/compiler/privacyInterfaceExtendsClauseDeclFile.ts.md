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
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "privateInterfaceImplementingPublicInterfaceInModule",
                "optional": false,
                "typeAnnotation": null,
                "start": 157,
                "end": 208
              },
              "typeParameters": null,
              "extends": [
                {
                  "type": "TSInterfaceHeritage",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "publicInterfaceInPublicModule",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 217,
                    "end": 246
                  },
                  "typeArguments": null,
                  "start": 217,
                  "end": 246
                }
              ],
              "body": {
                "type": "TSInterfaceBody",
                "body": [],
                "start": 247,
                "end": 254
              },
              "declare": false,
              "start": 147,
              "end": 254
            },
            {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "privateInterfaceImplementingPrivateInterfaceInModule",
                "optional": false,
                "typeAnnotation": null,
                "start": 269,
                "end": 321
              },
              "typeParameters": null,
              "extends": [
                {
                  "type": "TSInterfaceHeritage",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "privateInterfaceInPublicModule",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 330,
                    "end": 360
                  },
                  "typeArguments": null,
                  "start": 330,
                  "end": 360
                }
              ],
              "body": {
                "type": "TSInterfaceBody",
                "body": [],
                "start": 361,
                "end": 368
              },
              "declare": false,
              "start": 259,
              "end": 368
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "TSInterfaceDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicInterfaceImplementingPublicInterfaceInModule",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 390,
                  "end": 440
                },
                "typeParameters": null,
                "extends": [
                  {
                    "type": "TSInterfaceHeritage",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "publicInterfaceInPublicModule",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 449,
                      "end": 478
                    },
                    "typeArguments": null,
                    "start": 449,
                    "end": 478
                  }
                ],
                "body": {
                  "type": "TSInterfaceBody",
                  "body": [],
                  "start": 479,
                  "end": 486
                },
                "declare": false,
                "start": 380,
                "end": 486
              },
              "specifiers": [],
              "source": null,
              "exportKind": "type",
              "attributes": [],
              "start": 373,
              "end": 486
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "TSInterfaceDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicInterfaceImplementingPrivateInterfaceInModule",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 508,
                  "end": 559
                },
                "typeParameters": null,
                "extends": [
                  {
                    "type": "TSInterfaceHeritage",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "privateInterfaceInPublicModule",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 568,
                      "end": 598
                    },
                    "typeArguments": null,
                    "start": 568,
                    "end": 598
                  }
                ],
                "body": {
                  "type": "TSInterfaceBody",
                  "body": [],
                  "start": 599,
                  "end": 622
                },
                "declare": false,
                "start": 498,
                "end": 622
              },
              "specifiers": [],
              "source": null,
              "exportKind": "type",
              "attributes": [],
              "start": 491,
              "end": 622
            },
            {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "privateInterfaceImplementingFromPrivateModuleInterface",
                "optional": false,
                "typeAnnotation": null,
                "start": 638,
                "end": 692
              },
              "typeParameters": null,
              "extends": [
                {
                  "type": "TSInterfaceHeritage",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "privateModule",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 701,
                      "end": 714
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "publicInterfaceInPrivateModule",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 715,
                      "end": 745
                    },
                    "optional": false,
                    "computed": false,
                    "start": 701,
                    "end": 745
                  },
                  "typeArguments": null,
                  "start": 701,
                  "end": 745
                }
              ],
              "body": {
                "type": "TSInterfaceBody",
                "body": [],
                "start": 746,
                "end": 753
              },
              "declare": false,
              "start": 628,
              "end": 753
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "TSInterfaceDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicInterfaceImplementingFromPrivateModuleInterface",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 775,
                  "end": 828
                },
                "typeParameters": null,
                "extends": [
                  {
                    "type": "TSInterfaceHeritage",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "privateModule",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 837,
                        "end": 850
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "publicInterfaceInPrivateModule",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 851,
                        "end": 881
                      },
                      "optional": false,
                      "computed": false,
                      "start": 837,
                      "end": 881
                    },
                    "typeArguments": null,
                    "start": 837,
                    "end": 881
                  }
                ],
                "body": {
                  "type": "TSInterfaceBody",
                  "body": [],
                  "start": 882,
                  "end": 905
                },
                "declare": false,
                "start": 765,
                "end": 905
              },
              "specifiers": [],
              "source": null,
              "exportKind": "type",
              "attributes": [],
              "start": 758,
              "end": 905
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "TSInterfaceDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicInterfaceImplementingPrivateAndPublicInterface",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 928,
                  "end": 980
                },
                "typeParameters": null,
                "extends": [
                  {
                    "type": "TSInterfaceHeritage",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "privateInterfaceInPublicModule",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 989,
                      "end": 1019
                    },
                    "typeArguments": null,
                    "start": 989,
                    "end": 1019
                  },
                  {
                    "type": "TSInterfaceHeritage",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "publicInterfaceInPublicModule",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1021,
                      "end": 1050
                    },
                    "typeArguments": null,
                    "start": 1021,
                    "end": 1050
                  }
                ],
                "body": {
                  "type": "TSInterfaceBody",
                  "body": [],
                  "start": 1051,
                  "end": 1074
                },
                "declare": false,
                "start": 918,
                "end": 1074
              },
              "specifiers": [],
              "source": null,
              "exportKind": "type",
              "attributes": [],
              "start": 911,
              "end": 1074
            }
          ],
          "start": 27,
          "end": 1076
        },
        "kind": "module",
        "declare": false,
        "global": false,
        "start": 7,
        "end": 1076
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 1076
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "privateModule",
        "optional": false,
        "typeAnnotation": null,
        "start": 1085,
        "end": 1098
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
                "start": 1122,
                "end": 1152
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [],
                "start": 1153,
                "end": 1161
              },
              "declare": false,
              "start": 1112,
              "end": 1161
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 1105,
            "end": 1161
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateInterfaceInPrivateModule",
              "optional": false,
              "typeAnnotation": null,
              "start": 1177,
              "end": 1208
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [],
              "start": 1209,
              "end": 1216
            },
            "declare": false,
            "start": 1167,
            "end": 1216
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateInterfaceImplementingPublicInterfaceInModule",
              "optional": false,
              "typeAnnotation": null,
              "start": 1232,
              "end": 1283
            },
            "typeParameters": null,
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicInterfaceInPrivateModule",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1292,
                  "end": 1322
                },
                "typeArguments": null,
                "start": 1292,
                "end": 1322
              }
            ],
            "body": {
              "type": "TSInterfaceBody",
              "body": [],
              "start": 1323,
              "end": 1330
            },
            "declare": false,
            "start": 1222,
            "end": 1330
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateInterfaceImplementingPrivateInterfaceInModule",
              "optional": false,
              "typeAnnotation": null,
              "start": 1345,
              "end": 1397
            },
            "typeParameters": null,
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "privateInterfaceInPrivateModule",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1406,
                  "end": 1437
                },
                "typeArguments": null,
                "start": 1406,
                "end": 1437
              }
            ],
            "body": {
              "type": "TSInterfaceBody",
              "body": [],
              "start": 1438,
              "end": 1445
            },
            "declare": false,
            "start": 1335,
            "end": 1445
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "publicInterfaceImplementingPublicInterfaceInModule",
                "optional": false,
                "typeAnnotation": null,
                "start": 1467,
                "end": 1517
              },
              "typeParameters": null,
              "extends": [
                {
                  "type": "TSInterfaceHeritage",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "publicInterfaceInPrivateModule",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1526,
                    "end": 1556
                  },
                  "typeArguments": null,
                  "start": 1526,
                  "end": 1556
                }
              ],
              "body": {
                "type": "TSInterfaceBody",
                "body": [],
                "start": 1557,
                "end": 1564
              },
              "declare": false,
              "start": 1457,
              "end": 1564
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 1450,
            "end": 1564
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "publicInterfaceImplementingPrivateInterfaceInModule",
                "optional": false,
                "typeAnnotation": null,
                "start": 1586,
                "end": 1637
              },
              "typeParameters": null,
              "extends": [
                {
                  "type": "TSInterfaceHeritage",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "privateInterfaceInPrivateModule",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1646,
                    "end": 1677
                  },
                  "typeArguments": null,
                  "start": 1646,
                  "end": 1677
                }
              ],
              "body": {
                "type": "TSInterfaceBody",
                "body": [],
                "start": 1678,
                "end": 1685
              },
              "declare": false,
              "start": 1576,
              "end": 1685
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 1569,
            "end": 1685
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateInterfaceImplementingFromPrivateModuleInterface",
              "optional": false,
              "typeAnnotation": null,
              "start": 1701,
              "end": 1755
            },
            "typeParameters": null,
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "privateModule",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1764,
                    "end": 1777
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "publicInterfaceInPrivateModule",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1778,
                    "end": 1808
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1764,
                  "end": 1808
                },
                "typeArguments": null,
                "start": 1764,
                "end": 1808
              }
            ],
            "body": {
              "type": "TSInterfaceBody",
              "body": [],
              "start": 1809,
              "end": 1816
            },
            "declare": false,
            "start": 1691,
            "end": 1816
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "publicInterfaceImplementingFromPrivateModuleInterface",
                "optional": false,
                "typeAnnotation": null,
                "start": 1838,
                "end": 1891
              },
              "typeParameters": null,
              "extends": [
                {
                  "type": "TSInterfaceHeritage",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "privateModule",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1900,
                      "end": 1913
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "publicInterfaceInPrivateModule",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1914,
                      "end": 1944
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1900,
                    "end": 1944
                  },
                  "typeArguments": null,
                  "start": 1900,
                  "end": 1944
                }
              ],
              "body": {
                "type": "TSInterfaceBody",
                "body": [],
                "start": 1945,
                "end": 1952
              },
              "declare": false,
              "start": 1828,
              "end": 1952
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 1821,
            "end": 1952
          }
        ],
        "start": 1099,
        "end": 1954
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 1078,
      "end": 1954
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
          "start": 1973,
          "end": 1988
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [],
          "start": 1989,
          "end": 1993
        },
        "declare": false,
        "start": 1963,
        "end": 1993
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 1956,
      "end": 1993
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "privateInterface",
        "optional": false,
        "typeAnnotation": null,
        "start": 2005,
        "end": 2021
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 2022,
        "end": 2025
      },
      "declare": false,
      "start": 1995,
      "end": 2025
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "privateInterfaceImplementingPublicInterface",
        "optional": false,
        "typeAnnotation": null,
        "start": 2037,
        "end": 2080
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "publicInterface",
            "optional": false,
            "typeAnnotation": null,
            "start": 2089,
            "end": 2104
          },
          "typeArguments": null,
          "start": 2089,
          "end": 2104
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 2105,
        "end": 2108
      },
      "declare": false,
      "start": 2027,
      "end": 2108
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "privateInterfaceImplementingPrivateInterfaceInModule",
        "optional": false,
        "typeAnnotation": null,
        "start": 2119,
        "end": 2171
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "privateInterface",
            "optional": false,
            "typeAnnotation": null,
            "start": 2180,
            "end": 2196
          },
          "typeArguments": null,
          "start": 2180,
          "end": 2196
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 2197,
        "end": 2200
      },
      "declare": false,
      "start": 2109,
      "end": 2200
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "publicInterfaceImplementingPublicInterface",
          "optional": false,
          "typeAnnotation": null,
          "start": 2218,
          "end": 2260
        },
        "typeParameters": null,
        "extends": [
          {
            "type": "TSInterfaceHeritage",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "publicInterface",
              "optional": false,
              "typeAnnotation": null,
              "start": 2269,
              "end": 2284
            },
            "typeArguments": null,
            "start": 2269,
            "end": 2284
          }
        ],
        "body": {
          "type": "TSInterfaceBody",
          "body": [],
          "start": 2285,
          "end": 2288
        },
        "declare": false,
        "start": 2208,
        "end": 2288
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 2201,
      "end": 2288
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "publicInterfaceImplementingPrivateInterface",
          "optional": false,
          "typeAnnotation": null,
          "start": 2306,
          "end": 2349
        },
        "typeParameters": null,
        "extends": [
          {
            "type": "TSInterfaceHeritage",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateInterface",
              "optional": false,
              "typeAnnotation": null,
              "start": 2358,
              "end": 2374
            },
            "typeArguments": null,
            "start": 2358,
            "end": 2374
          }
        ],
        "body": {
          "type": "TSInterfaceBody",
          "body": [],
          "start": 2375,
          "end": 2394
        },
        "declare": false,
        "start": 2296,
        "end": 2394
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 2289,
      "end": 2394
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "privateInterfaceImplementingFromPrivateModuleInterface",
        "optional": false,
        "typeAnnotation": null,
        "start": 2406,
        "end": 2460
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateModule",
              "optional": false,
              "typeAnnotation": null,
              "start": 2469,
              "end": 2482
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "publicInterfaceInPrivateModule",
              "optional": false,
              "typeAnnotation": null,
              "start": 2483,
              "end": 2513
            },
            "optional": false,
            "computed": false,
            "start": 2469,
            "end": 2513
          },
          "typeArguments": null,
          "start": 2469,
          "end": 2513
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 2514,
        "end": 2517
      },
      "declare": false,
      "start": 2396,
      "end": 2517
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "publicInterfaceImplementingFromPrivateModuleInterface",
          "optional": false,
          "typeAnnotation": null,
          "start": 2535,
          "end": 2588
        },
        "typeParameters": null,
        "extends": [
          {
            "type": "TSInterfaceHeritage",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "privateModule",
                "optional": false,
                "typeAnnotation": null,
                "start": 2597,
                "end": 2610
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "publicInterfaceInPrivateModule",
                "optional": false,
                "typeAnnotation": null,
                "start": 2611,
                "end": 2641
              },
              "optional": false,
              "computed": false,
              "start": 2597,
              "end": 2641
            },
            "typeArguments": null,
            "start": 2597,
            "end": 2641
          }
        ],
        "body": {
          "type": "TSInterfaceBody",
          "body": [],
          "start": 2642,
          "end": 2661
        },
        "declare": false,
        "start": 2525,
        "end": 2661
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 2518,
      "end": 2661
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 2662
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
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateInterfaceImplementingPublicInterfaceInModule",
              "optional": false,
              "typeAnnotation": null,
              "start": 158,
              "end": 209
            },
            "typeParameters": null,
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicInterfaceInPublicModule",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 218,
                  "end": 247
                },
                "typeArguments": null,
                "start": 218,
                "end": 247
              }
            ],
            "body": {
              "type": "TSInterfaceBody",
              "body": [],
              "start": 248,
              "end": 255
            },
            "declare": false,
            "start": 148,
            "end": 255
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateInterfaceImplementingPrivateInterfaceInModule",
              "optional": false,
              "typeAnnotation": null,
              "start": 270,
              "end": 322
            },
            "typeParameters": null,
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "privateInterfaceInPublicModule",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 331,
                  "end": 361
                },
                "typeArguments": null,
                "start": 331,
                "end": 361
              }
            ],
            "body": {
              "type": "TSInterfaceBody",
              "body": [],
              "start": 362,
              "end": 369
            },
            "declare": false,
            "start": 260,
            "end": 369
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "publicInterfaceImplementingPublicInterfaceInModule",
                "optional": false,
                "typeAnnotation": null,
                "start": 391,
                "end": 441
              },
              "typeParameters": null,
              "extends": [
                {
                  "type": "TSInterfaceHeritage",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "publicInterfaceInPublicModule",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 450,
                    "end": 479
                  },
                  "typeArguments": null,
                  "start": 450,
                  "end": 479
                }
              ],
              "body": {
                "type": "TSInterfaceBody",
                "body": [],
                "start": 480,
                "end": 487
              },
              "declare": false,
              "start": 381,
              "end": 487
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 374,
            "end": 487
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "publicInterfaceImplementingPrivateInterfaceInModule",
                "optional": false,
                "typeAnnotation": null,
                "start": 509,
                "end": 560
              },
              "typeParameters": null,
              "extends": [
                {
                  "type": "TSInterfaceHeritage",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "privateInterfaceInPublicModule",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 569,
                    "end": 599
                  },
                  "typeArguments": null,
                  "start": 569,
                  "end": 599
                }
              ],
              "body": {
                "type": "TSInterfaceBody",
                "body": [],
                "start": 600,
                "end": 623
              },
              "declare": false,
              "start": 499,
              "end": 623
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 492,
            "end": 623
          }
        ],
        "start": 28,
        "end": 625
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 625
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "publicInterfaceInGlobal",
        "optional": false,
        "typeAnnotation": null,
        "start": 636,
        "end": 659
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 660,
        "end": 663
      },
      "declare": false,
      "start": 626,
      "end": 663
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "publicInterfaceImplementingPublicInterfaceInGlobal",
        "optional": false,
        "typeAnnotation": null,
        "start": 674,
        "end": 724
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "publicInterfaceInGlobal",
            "optional": false,
            "typeAnnotation": null,
            "start": 733,
            "end": 756
          },
          "typeArguments": null,
          "start": 733,
          "end": 756
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 757,
        "end": 760
      },
      "declare": false,
      "start": 664,
      "end": 760
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 760
}
```
