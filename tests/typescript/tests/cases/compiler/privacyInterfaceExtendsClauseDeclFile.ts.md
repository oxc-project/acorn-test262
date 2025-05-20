__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 2662,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 1076,
      "attributes": [],
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 7,
        "end": 1076,
        "body": {
          "type": "TSModuleBlock",
          "start": 27,
          "end": 1076,
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
              "type": "TSInterfaceDeclaration",
              "start": 147,
              "end": 254,
              "body": {
                "type": "TSInterfaceBody",
                "start": 247,
                "end": 254,
                "body": []
              },
              "declare": false,
              "extends": [
                {
                  "type": "TSInterfaceHeritage",
                  "start": 217,
                  "end": 246,
                  "expression": {
                    "type": "Identifier",
                    "start": 217,
                    "end": 246,
                    "decorators": [],
                    "name": "publicInterfaceInPublicModule",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              ],
              "id": {
                "type": "Identifier",
                "start": 157,
                "end": 208,
                "decorators": [],
                "name": "privateInterfaceImplementingPublicInterfaceInModule",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null
            },
            {
              "type": "TSInterfaceDeclaration",
              "start": 259,
              "end": 368,
              "body": {
                "type": "TSInterfaceBody",
                "start": 361,
                "end": 368,
                "body": []
              },
              "declare": false,
              "extends": [
                {
                  "type": "TSInterfaceHeritage",
                  "start": 330,
                  "end": 360,
                  "expression": {
                    "type": "Identifier",
                    "start": 330,
                    "end": 360,
                    "decorators": [],
                    "name": "privateInterfaceInPublicModule",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              ],
              "id": {
                "type": "Identifier",
                "start": 269,
                "end": 321,
                "decorators": [],
                "name": "privateInterfaceImplementingPrivateInterfaceInModule",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 373,
              "end": 486,
              "attributes": [],
              "declaration": {
                "type": "TSInterfaceDeclaration",
                "start": 380,
                "end": 486,
                "body": {
                  "type": "TSInterfaceBody",
                  "start": 479,
                  "end": 486,
                  "body": []
                },
                "declare": false,
                "extends": [
                  {
                    "type": "TSInterfaceHeritage",
                    "start": 449,
                    "end": 478,
                    "expression": {
                      "type": "Identifier",
                      "start": 449,
                      "end": 478,
                      "decorators": [],
                      "name": "publicInterfaceInPublicModule",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ],
                "id": {
                  "type": "Identifier",
                  "start": 390,
                  "end": 440,
                  "decorators": [],
                  "name": "publicInterfaceImplementingPublicInterfaceInModule",
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
              "type": "ExportNamedDeclaration",
              "start": 491,
              "end": 622,
              "attributes": [],
              "declaration": {
                "type": "TSInterfaceDeclaration",
                "start": 498,
                "end": 622,
                "body": {
                  "type": "TSInterfaceBody",
                  "start": 599,
                  "end": 622,
                  "body": []
                },
                "declare": false,
                "extends": [
                  {
                    "type": "TSInterfaceHeritage",
                    "start": 568,
                    "end": 598,
                    "expression": {
                      "type": "Identifier",
                      "start": 568,
                      "end": 598,
                      "decorators": [],
                      "name": "privateInterfaceInPublicModule",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ],
                "id": {
                  "type": "Identifier",
                  "start": 508,
                  "end": 559,
                  "decorators": [],
                  "name": "publicInterfaceImplementingPrivateInterfaceInModule",
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
              "start": 628,
              "end": 753,
              "body": {
                "type": "TSInterfaceBody",
                "start": 746,
                "end": 753,
                "body": []
              },
              "declare": false,
              "extends": [
                {
                  "type": "TSInterfaceHeritage",
                  "start": 701,
                  "end": 745,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 701,
                    "end": 745,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 701,
                      "end": 714,
                      "decorators": [],
                      "name": "privateModule",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 715,
                      "end": 745,
                      "decorators": [],
                      "name": "publicInterfaceInPrivateModule",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "typeArguments": null
                }
              ],
              "id": {
                "type": "Identifier",
                "start": 638,
                "end": 692,
                "decorators": [],
                "name": "privateInterfaceImplementingFromPrivateModuleInterface",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 758,
              "end": 905,
              "attributes": [],
              "declaration": {
                "type": "TSInterfaceDeclaration",
                "start": 765,
                "end": 905,
                "body": {
                  "type": "TSInterfaceBody",
                  "start": 882,
                  "end": 905,
                  "body": []
                },
                "declare": false,
                "extends": [
                  {
                    "type": "TSInterfaceHeritage",
                    "start": 837,
                    "end": 881,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 837,
                      "end": 881,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 837,
                        "end": 850,
                        "decorators": [],
                        "name": "privateModule",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 851,
                        "end": 881,
                        "decorators": [],
                        "name": "publicInterfaceInPrivateModule",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "typeArguments": null
                  }
                ],
                "id": {
                  "type": "Identifier",
                  "start": 775,
                  "end": 828,
                  "decorators": [],
                  "name": "publicInterfaceImplementingFromPrivateModuleInterface",
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
              "type": "ExportNamedDeclaration",
              "start": 911,
              "end": 1074,
              "attributes": [],
              "declaration": {
                "type": "TSInterfaceDeclaration",
                "start": 918,
                "end": 1074,
                "body": {
                  "type": "TSInterfaceBody",
                  "start": 1051,
                  "end": 1074,
                  "body": []
                },
                "declare": false,
                "extends": [
                  {
                    "type": "TSInterfaceHeritage",
                    "start": 989,
                    "end": 1019,
                    "expression": {
                      "type": "Identifier",
                      "start": 989,
                      "end": 1019,
                      "decorators": [],
                      "name": "privateInterfaceInPublicModule",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSInterfaceHeritage",
                    "start": 1021,
                    "end": 1050,
                    "expression": {
                      "type": "Identifier",
                      "start": 1021,
                      "end": 1050,
                      "decorators": [],
                      "name": "publicInterfaceInPublicModule",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ],
                "id": {
                  "type": "Identifier",
                  "start": 928,
                  "end": 980,
                  "decorators": [],
                  "name": "publicInterfaceImplementingPrivateAndPublicInterface",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeParameters": null
              },
              "exportKind": "type",
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
      "start": 1078,
      "end": 1954,
      "body": {
        "type": "TSModuleBlock",
        "start": 1099,
        "end": 1954,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 1105,
            "end": 1161,
            "attributes": [],
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 1112,
              "end": 1161,
              "body": {
                "type": "TSInterfaceBody",
                "start": 1153,
                "end": 1161,
                "body": []
              },
              "declare": false,
              "extends": [],
              "id": {
                "type": "Identifier",
                "start": 1122,
                "end": 1152,
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
            "start": 1167,
            "end": 1216,
            "body": {
              "type": "TSInterfaceBody",
              "start": 1209,
              "end": 1216,
              "body": []
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 1177,
              "end": 1208,
              "decorators": [],
              "name": "privateInterfaceInPrivateModule",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 1222,
            "end": 1330,
            "body": {
              "type": "TSInterfaceBody",
              "start": 1323,
              "end": 1330,
              "body": []
            },
            "declare": false,
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "start": 1292,
                "end": 1322,
                "expression": {
                  "type": "Identifier",
                  "start": 1292,
                  "end": 1322,
                  "decorators": [],
                  "name": "publicInterfaceInPrivateModule",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            ],
            "id": {
              "type": "Identifier",
              "start": 1232,
              "end": 1283,
              "decorators": [],
              "name": "privateInterfaceImplementingPublicInterfaceInModule",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 1335,
            "end": 1445,
            "body": {
              "type": "TSInterfaceBody",
              "start": 1438,
              "end": 1445,
              "body": []
            },
            "declare": false,
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "start": 1406,
                "end": 1437,
                "expression": {
                  "type": "Identifier",
                  "start": 1406,
                  "end": 1437,
                  "decorators": [],
                  "name": "privateInterfaceInPrivateModule",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            ],
            "id": {
              "type": "Identifier",
              "start": 1345,
              "end": 1397,
              "decorators": [],
              "name": "privateInterfaceImplementingPrivateInterfaceInModule",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 1450,
            "end": 1564,
            "attributes": [],
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 1457,
              "end": 1564,
              "body": {
                "type": "TSInterfaceBody",
                "start": 1557,
                "end": 1564,
                "body": []
              },
              "declare": false,
              "extends": [
                {
                  "type": "TSInterfaceHeritage",
                  "start": 1526,
                  "end": 1556,
                  "expression": {
                    "type": "Identifier",
                    "start": 1526,
                    "end": 1556,
                    "decorators": [],
                    "name": "publicInterfaceInPrivateModule",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              ],
              "id": {
                "type": "Identifier",
                "start": 1467,
                "end": 1517,
                "decorators": [],
                "name": "publicInterfaceImplementingPublicInterfaceInModule",
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
            "type": "ExportNamedDeclaration",
            "start": 1569,
            "end": 1685,
            "attributes": [],
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 1576,
              "end": 1685,
              "body": {
                "type": "TSInterfaceBody",
                "start": 1678,
                "end": 1685,
                "body": []
              },
              "declare": false,
              "extends": [
                {
                  "type": "TSInterfaceHeritage",
                  "start": 1646,
                  "end": 1677,
                  "expression": {
                    "type": "Identifier",
                    "start": 1646,
                    "end": 1677,
                    "decorators": [],
                    "name": "privateInterfaceInPrivateModule",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              ],
              "id": {
                "type": "Identifier",
                "start": 1586,
                "end": 1637,
                "decorators": [],
                "name": "publicInterfaceImplementingPrivateInterfaceInModule",
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
            "start": 1691,
            "end": 1816,
            "body": {
              "type": "TSInterfaceBody",
              "start": 1809,
              "end": 1816,
              "body": []
            },
            "declare": false,
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "start": 1764,
                "end": 1808,
                "expression": {
                  "type": "MemberExpression",
                  "start": 1764,
                  "end": 1808,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 1764,
                    "end": 1777,
                    "decorators": [],
                    "name": "privateModule",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 1778,
                    "end": 1808,
                    "decorators": [],
                    "name": "publicInterfaceInPrivateModule",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "typeArguments": null
              }
            ],
            "id": {
              "type": "Identifier",
              "start": 1701,
              "end": 1755,
              "decorators": [],
              "name": "privateInterfaceImplementingFromPrivateModuleInterface",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 1821,
            "end": 1952,
            "attributes": [],
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 1828,
              "end": 1952,
              "body": {
                "type": "TSInterfaceBody",
                "start": 1945,
                "end": 1952,
                "body": []
              },
              "declare": false,
              "extends": [
                {
                  "type": "TSInterfaceHeritage",
                  "start": 1900,
                  "end": 1944,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 1900,
                    "end": 1944,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 1900,
                      "end": 1913,
                      "decorators": [],
                      "name": "privateModule",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 1914,
                      "end": 1944,
                      "decorators": [],
                      "name": "publicInterfaceInPrivateModule",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "typeArguments": null
                }
              ],
              "id": {
                "type": "Identifier",
                "start": 1838,
                "end": 1891,
                "decorators": [],
                "name": "publicInterfaceImplementingFromPrivateModuleInterface",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null
            },
            "exportKind": "type",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 1085,
        "end": 1098,
        "decorators": [],
        "name": "privateModule",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1956,
      "end": 1993,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 1963,
        "end": 1993,
        "body": {
          "type": "TSInterfaceBody",
          "start": 1989,
          "end": 1993,
          "body": []
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "start": 1973,
          "end": 1988,
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
      "start": 1995,
      "end": 2025,
      "body": {
        "type": "TSInterfaceBody",
        "start": 2022,
        "end": 2025,
        "body": []
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 2005,
        "end": 2021,
        "decorators": [],
        "name": "privateInterface",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 2027,
      "end": 2108,
      "body": {
        "type": "TSInterfaceBody",
        "start": 2105,
        "end": 2108,
        "body": []
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 2089,
          "end": 2104,
          "expression": {
            "type": "Identifier",
            "start": 2089,
            "end": 2104,
            "decorators": [],
            "name": "publicInterface",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 2037,
        "end": 2080,
        "decorators": [],
        "name": "privateInterfaceImplementingPublicInterface",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 2109,
      "end": 2200,
      "body": {
        "type": "TSInterfaceBody",
        "start": 2197,
        "end": 2200,
        "body": []
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 2180,
          "end": 2196,
          "expression": {
            "type": "Identifier",
            "start": 2180,
            "end": 2196,
            "decorators": [],
            "name": "privateInterface",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 2119,
        "end": 2171,
        "decorators": [],
        "name": "privateInterfaceImplementingPrivateInterfaceInModule",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 2201,
      "end": 2288,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 2208,
        "end": 2288,
        "body": {
          "type": "TSInterfaceBody",
          "start": 2285,
          "end": 2288,
          "body": []
        },
        "declare": false,
        "extends": [
          {
            "type": "TSInterfaceHeritage",
            "start": 2269,
            "end": 2284,
            "expression": {
              "type": "Identifier",
              "start": 2269,
              "end": 2284,
              "decorators": [],
              "name": "publicInterface",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        ],
        "id": {
          "type": "Identifier",
          "start": 2218,
          "end": 2260,
          "decorators": [],
          "name": "publicInterfaceImplementingPublicInterface",
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
      "type": "ExportNamedDeclaration",
      "start": 2289,
      "end": 2394,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 2296,
        "end": 2394,
        "body": {
          "type": "TSInterfaceBody",
          "start": 2375,
          "end": 2394,
          "body": []
        },
        "declare": false,
        "extends": [
          {
            "type": "TSInterfaceHeritage",
            "start": 2358,
            "end": 2374,
            "expression": {
              "type": "Identifier",
              "start": 2358,
              "end": 2374,
              "decorators": [],
              "name": "privateInterface",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        ],
        "id": {
          "type": "Identifier",
          "start": 2306,
          "end": 2349,
          "decorators": [],
          "name": "publicInterfaceImplementingPrivateInterface",
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
      "start": 2396,
      "end": 2517,
      "body": {
        "type": "TSInterfaceBody",
        "start": 2514,
        "end": 2517,
        "body": []
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 2469,
          "end": 2513,
          "expression": {
            "type": "MemberExpression",
            "start": 2469,
            "end": 2513,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 2469,
              "end": 2482,
              "decorators": [],
              "name": "privateModule",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 2483,
              "end": 2513,
              "decorators": [],
              "name": "publicInterfaceInPrivateModule",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "typeArguments": null
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 2406,
        "end": 2460,
        "decorators": [],
        "name": "privateInterfaceImplementingFromPrivateModuleInterface",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 2518,
      "end": 2661,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 2525,
        "end": 2661,
        "body": {
          "type": "TSInterfaceBody",
          "start": 2642,
          "end": 2661,
          "body": []
        },
        "declare": false,
        "extends": [
          {
            "type": "TSInterfaceHeritage",
            "start": 2597,
            "end": 2641,
            "expression": {
              "type": "MemberExpression",
              "start": 2597,
              "end": 2641,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 2597,
                "end": 2610,
                "decorators": [],
                "name": "privateModule",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 2611,
                "end": 2641,
                "decorators": [],
                "name": "publicInterfaceInPrivateModule",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "typeArguments": null
          }
        ],
        "id": {
          "type": "Identifier",
          "start": 2535,
          "end": 2588,
          "decorators": [],
          "name": "publicInterfaceImplementingFromPrivateModuleInterface",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null
      },
      "exportKind": "type",
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
  "end": 760,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 625,
      "body": {
        "type": "TSModuleBlock",
        "start": 28,
        "end": 625,
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
            "type": "TSInterfaceDeclaration",
            "start": 148,
            "end": 255,
            "body": {
              "type": "TSInterfaceBody",
              "start": 248,
              "end": 255,
              "body": []
            },
            "declare": false,
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "start": 218,
                "end": 247,
                "expression": {
                  "type": "Identifier",
                  "start": 218,
                  "end": 247,
                  "decorators": [],
                  "name": "publicInterfaceInPublicModule",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            ],
            "id": {
              "type": "Identifier",
              "start": 158,
              "end": 209,
              "decorators": [],
              "name": "privateInterfaceImplementingPublicInterfaceInModule",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 260,
            "end": 369,
            "body": {
              "type": "TSInterfaceBody",
              "start": 362,
              "end": 369,
              "body": []
            },
            "declare": false,
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "start": 331,
                "end": 361,
                "expression": {
                  "type": "Identifier",
                  "start": 331,
                  "end": 361,
                  "decorators": [],
                  "name": "privateInterfaceInPublicModule",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            ],
            "id": {
              "type": "Identifier",
              "start": 270,
              "end": 322,
              "decorators": [],
              "name": "privateInterfaceImplementingPrivateInterfaceInModule",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 374,
            "end": 487,
            "attributes": [],
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 381,
              "end": 487,
              "body": {
                "type": "TSInterfaceBody",
                "start": 480,
                "end": 487,
                "body": []
              },
              "declare": false,
              "extends": [
                {
                  "type": "TSInterfaceHeritage",
                  "start": 450,
                  "end": 479,
                  "expression": {
                    "type": "Identifier",
                    "start": 450,
                    "end": 479,
                    "decorators": [],
                    "name": "publicInterfaceInPublicModule",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              ],
              "id": {
                "type": "Identifier",
                "start": 391,
                "end": 441,
                "decorators": [],
                "name": "publicInterfaceImplementingPublicInterfaceInModule",
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
            "type": "ExportNamedDeclaration",
            "start": 492,
            "end": 623,
            "attributes": [],
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 499,
              "end": 623,
              "body": {
                "type": "TSInterfaceBody",
                "start": 600,
                "end": 623,
                "body": []
              },
              "declare": false,
              "extends": [
                {
                  "type": "TSInterfaceHeritage",
                  "start": 569,
                  "end": 599,
                  "expression": {
                    "type": "Identifier",
                    "start": 569,
                    "end": 599,
                    "decorators": [],
                    "name": "privateInterfaceInPublicModule",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              ],
              "id": {
                "type": "Identifier",
                "start": 509,
                "end": 560,
                "decorators": [],
                "name": "publicInterfaceImplementingPrivateInterfaceInModule",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null
            },
            "exportKind": "type",
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
      "start": 626,
      "end": 663,
      "body": {
        "type": "TSInterfaceBody",
        "start": 660,
        "end": 663,
        "body": []
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 636,
        "end": 659,
        "decorators": [],
        "name": "publicInterfaceInGlobal",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 664,
      "end": 760,
      "body": {
        "type": "TSInterfaceBody",
        "start": 757,
        "end": 760,
        "body": []
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 733,
          "end": 756,
          "expression": {
            "type": "Identifier",
            "start": 733,
            "end": 756,
            "decorators": [],
            "name": "publicInterfaceInGlobal",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 674,
        "end": 724,
        "decorators": [],
        "name": "publicInterfaceImplementingPublicInterfaceInGlobal",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
