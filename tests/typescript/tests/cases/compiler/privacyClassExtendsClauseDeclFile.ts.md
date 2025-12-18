__ESTREE_TEST__:AST:
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
                "type": "ClassDeclaration",
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicClassInPublicModule",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 49,
                  "end": 74
                },
                "typeParameters": null,
                "superClass": null,
                "superTypeArguments": null,
                "implements": [],
                "body": {
                  "type": "ClassBody",
                  "body": [
                    {
                      "type": "MethodDefinition",
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "f1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 93,
                        "end": 95
                      },
                      "value": {
                        "type": "FunctionExpression",
                        "id": null,
                        "generator": false,
                        "async": false,
                        "declare": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [],
                          "start": 98,
                          "end": 109
                        },
                        "expression": false,
                        "start": 95,
                        "end": 109
                      },
                      "kind": "method",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": "private",
                      "start": 85,
                      "end": 109
                    }
                  ],
                  "start": 75,
                  "end": 115
                },
                "abstract": false,
                "declare": false,
                "start": 43,
                "end": 115
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 36,
              "end": 115
            },
            {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "privateClassInPublicModule",
                "optional": false,
                "typeAnnotation": null,
                "start": 127,
                "end": 153
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 154,
                "end": 161
              },
              "abstract": false,
              "declare": false,
              "start": 121,
              "end": 161
            },
            {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "privateClassExtendingPublicClassInModule",
                "optional": false,
                "typeAnnotation": null,
                "start": 173,
                "end": 213
              },
              "typeParameters": null,
              "superClass": {
                "type": "Identifier",
                "decorators": [],
                "name": "publicClassInPublicModule",
                "optional": false,
                "typeAnnotation": null,
                "start": 222,
                "end": 247
              },
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 248,
                "end": 255
              },
              "abstract": false,
              "declare": false,
              "start": 167,
              "end": 255
            },
            {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "privateClassExtendingPrivateClassInModule",
                "optional": false,
                "typeAnnotation": null,
                "start": 266,
                "end": 307
              },
              "typeParameters": null,
              "superClass": {
                "type": "Identifier",
                "decorators": [],
                "name": "privateClassInPublicModule",
                "optional": false,
                "typeAnnotation": null,
                "start": 316,
                "end": 342
              },
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 343,
                "end": 350
              },
              "abstract": false,
              "declare": false,
              "start": 260,
              "end": 350
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "ClassDeclaration",
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicClassExtendingPublicClassInModule",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 368,
                  "end": 407
                },
                "typeParameters": null,
                "superClass": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicClassInPublicModule",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 416,
                  "end": 441
                },
                "superTypeArguments": null,
                "implements": [],
                "body": {
                  "type": "ClassBody",
                  "body": [],
                  "start": 442,
                  "end": 449
                },
                "abstract": false,
                "declare": false,
                "start": 362,
                "end": 449
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 355,
              "end": 449
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "ClassDeclaration",
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicClassExtendingPrivateClassInModule",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 467,
                  "end": 507
                },
                "typeParameters": null,
                "superClass": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "privateClassInPublicModule",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 516,
                  "end": 542
                },
                "superTypeArguments": null,
                "implements": [],
                "body": {
                  "type": "ClassBody",
                  "body": [],
                  "start": 543,
                  "end": 566
                },
                "abstract": false,
                "declare": false,
                "start": 461,
                "end": 566
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 454,
              "end": 566
            },
            {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "privateClassExtendingFromPrivateModuleClass",
                "optional": false,
                "typeAnnotation": null,
                "start": 578,
                "end": 621
              },
              "typeParameters": null,
              "superClass": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "privateModule",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 630,
                  "end": 643
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicClassInPrivateModule",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 644,
                  "end": 670
                },
                "optional": false,
                "computed": false,
                "start": 630,
                "end": 670
              },
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 671,
                "end": 678
              },
              "abstract": false,
              "declare": false,
              "start": 572,
              "end": 678
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "ClassDeclaration",
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicClassExtendingFromPrivateModuleClass",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 696,
                  "end": 738
                },
                "typeParameters": null,
                "superClass": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "privateModule",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 747,
                    "end": 760
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "publicClassInPrivateModule",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 761,
                    "end": 787
                  },
                  "optional": false,
                  "computed": false,
                  "start": 747,
                  "end": 787
                },
                "superTypeArguments": null,
                "implements": [],
                "body": {
                  "type": "ClassBody",
                  "body": [],
                  "start": 788,
                  "end": 811
                },
                "abstract": false,
                "declare": false,
                "start": 690,
                "end": 811
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 683,
              "end": 811
            }
          ],
          "start": 30,
          "end": 813
        },
        "kind": "namespace",
        "declare": false,
        "global": false,
        "start": 7,
        "end": 813
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 813
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "privateModule",
        "optional": false,
        "typeAnnotation": null,
        "start": 825,
        "end": 838
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "publicClassInPrivateModule",
                "optional": false,
                "typeAnnotation": null,
                "start": 858,
                "end": 884
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 903,
                      "end": 905
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 908,
                        "end": 919
                      },
                      "expression": false,
                      "start": 905,
                      "end": 919
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 895,
                    "end": 919
                  }
                ],
                "start": 885,
                "end": 925
              },
              "abstract": false,
              "declare": false,
              "start": 852,
              "end": 925
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 845,
            "end": 925
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateClassInPrivateModule",
              "optional": false,
              "typeAnnotation": null,
              "start": 937,
              "end": 964
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 965,
              "end": 972
            },
            "abstract": false,
            "declare": false,
            "start": 931,
            "end": 972
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateClassExtendingPublicClassInModule",
              "optional": false,
              "typeAnnotation": null,
              "start": 984,
              "end": 1024
            },
            "typeParameters": null,
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "publicClassInPrivateModule",
              "optional": false,
              "typeAnnotation": null,
              "start": 1033,
              "end": 1059
            },
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 1060,
              "end": 1067
            },
            "abstract": false,
            "declare": false,
            "start": 978,
            "end": 1067
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateClassExtendingPrivateClassInModule",
              "optional": false,
              "typeAnnotation": null,
              "start": 1078,
              "end": 1119
            },
            "typeParameters": null,
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateClassInPrivateModule",
              "optional": false,
              "typeAnnotation": null,
              "start": 1128,
              "end": 1155
            },
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 1156,
              "end": 1163
            },
            "abstract": false,
            "declare": false,
            "start": 1072,
            "end": 1163
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "publicClassExtendingPublicClassInModule",
                "optional": false,
                "typeAnnotation": null,
                "start": 1181,
                "end": 1220
              },
              "typeParameters": null,
              "superClass": {
                "type": "Identifier",
                "decorators": [],
                "name": "publicClassInPrivateModule",
                "optional": false,
                "typeAnnotation": null,
                "start": 1229,
                "end": 1255
              },
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 1256,
                "end": 1263
              },
              "abstract": false,
              "declare": false,
              "start": 1175,
              "end": 1263
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1168,
            "end": 1263
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "publicClassExtendingPrivateClassInModule",
                "optional": false,
                "typeAnnotation": null,
                "start": 1281,
                "end": 1321
              },
              "typeParameters": null,
              "superClass": {
                "type": "Identifier",
                "decorators": [],
                "name": "privateClassInPrivateModule",
                "optional": false,
                "typeAnnotation": null,
                "start": 1330,
                "end": 1357
              },
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 1358,
                "end": 1366
              },
              "abstract": false,
              "declare": false,
              "start": 1275,
              "end": 1366
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1268,
            "end": 1366
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateClassExtendingFromPrivateModuleClass",
              "optional": false,
              "typeAnnotation": null,
              "start": 1378,
              "end": 1421
            },
            "typeParameters": null,
            "superClass": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "privateModule",
                "optional": false,
                "typeAnnotation": null,
                "start": 1430,
                "end": 1443
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "publicClassInPrivateModule",
                "optional": false,
                "typeAnnotation": null,
                "start": 1444,
                "end": 1470
              },
              "optional": false,
              "computed": false,
              "start": 1430,
              "end": 1470
            },
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 1471,
              "end": 1478
            },
            "abstract": false,
            "declare": false,
            "start": 1372,
            "end": 1478
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "publicClassExtendingFromPrivateModuleClass",
                "optional": false,
                "typeAnnotation": null,
                "start": 1496,
                "end": 1538
              },
              "typeParameters": null,
              "superClass": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "privateModule",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1547,
                  "end": 1560
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicClassInPrivateModule",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1561,
                  "end": 1587
                },
                "optional": false,
                "computed": false,
                "start": 1547,
                "end": 1587
              },
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 1588,
                "end": 1595
              },
              "abstract": false,
              "declare": false,
              "start": 1490,
              "end": 1595
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1483,
            "end": 1595
          }
        ],
        "start": 839,
        "end": 1597
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 815,
      "end": 1597
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "publicClass",
          "optional": false,
          "typeAnnotation": null,
          "start": 1612,
          "end": 1623
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "f1",
                "optional": false,
                "typeAnnotation": null,
                "start": 1638,
                "end": 1640
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 1643,
                  "end": 1650
                },
                "expression": false,
                "start": 1640,
                "end": 1650
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "private",
              "start": 1630,
              "end": 1650
            }
          ],
          "start": 1624,
          "end": 1652
        },
        "abstract": false,
        "declare": false,
        "start": 1606,
        "end": 1652
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1599,
      "end": 1652
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "privateClass",
        "optional": false,
        "typeAnnotation": null,
        "start": 1660,
        "end": 1672
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 1673,
        "end": 1676
      },
      "abstract": false,
      "declare": false,
      "start": 1654,
      "end": 1676
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "privateClassExtendingPublicClass",
        "optional": false,
        "typeAnnotation": null,
        "start": 1684,
        "end": 1716
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "publicClass",
        "optional": false,
        "typeAnnotation": null,
        "start": 1725,
        "end": 1736
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 1737,
        "end": 1740
      },
      "abstract": false,
      "declare": false,
      "start": 1678,
      "end": 1740
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "privateClassExtendingPrivateClassInModule",
        "optional": false,
        "typeAnnotation": null,
        "start": 1747,
        "end": 1788
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "privateClass",
        "optional": false,
        "typeAnnotation": null,
        "start": 1797,
        "end": 1809
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 1810,
        "end": 1813
      },
      "abstract": false,
      "declare": false,
      "start": 1741,
      "end": 1813
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "publicClassExtendingPublicClass",
          "optional": false,
          "typeAnnotation": null,
          "start": 1827,
          "end": 1858
        },
        "typeParameters": null,
        "superClass": {
          "type": "Identifier",
          "decorators": [],
          "name": "publicClass",
          "optional": false,
          "typeAnnotation": null,
          "start": 1867,
          "end": 1878
        },
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [],
          "start": 1879,
          "end": 1882
        },
        "abstract": false,
        "declare": false,
        "start": 1821,
        "end": 1882
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1814,
      "end": 1882
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "publicClassExtendingPrivateClass",
          "optional": false,
          "typeAnnotation": null,
          "start": 1896,
          "end": 1928
        },
        "typeParameters": null,
        "superClass": {
          "type": "Identifier",
          "decorators": [],
          "name": "privateClass",
          "optional": false,
          "typeAnnotation": null,
          "start": 1937,
          "end": 1949
        },
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [],
          "start": 1950,
          "end": 1969
        },
        "abstract": false,
        "declare": false,
        "start": 1890,
        "end": 1969
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1883,
      "end": 1969
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "privateClassExtendingFromPrivateModuleClass",
        "optional": false,
        "typeAnnotation": null,
        "start": 1977,
        "end": 2020
      },
      "typeParameters": null,
      "superClass": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "privateModule",
          "optional": false,
          "typeAnnotation": null,
          "start": 2029,
          "end": 2042
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "publicClassInPrivateModule",
          "optional": false,
          "typeAnnotation": null,
          "start": 2043,
          "end": 2069
        },
        "optional": false,
        "computed": false,
        "start": 2029,
        "end": 2069
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 2070,
        "end": 2073
      },
      "abstract": false,
      "declare": false,
      "start": 1971,
      "end": 2073
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "publicClassExtendingFromPrivateModuleClass",
          "optional": false,
          "typeAnnotation": null,
          "start": 2087,
          "end": 2129
        },
        "typeParameters": null,
        "superClass": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "privateModule",
            "optional": false,
            "typeAnnotation": null,
            "start": 2138,
            "end": 2151
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "publicClassInPrivateModule",
            "optional": false,
            "typeAnnotation": null,
            "start": 2152,
            "end": 2178
          },
          "optional": false,
          "computed": false,
          "start": 2138,
          "end": 2178
        },
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [],
          "start": 2179,
          "end": 2198
        },
        "abstract": false,
        "declare": false,
        "start": 2081,
        "end": 2198
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 2074,
      "end": 2198
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 2199
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 0,
    "end": 6,
    "range": [
      0,
      6
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 7,
    "end": 16,
    "range": [
      7,
      16
    ]
  },
  {
    "type": "Identifier",
    "value": "publicModule",
    "start": 17,
    "end": 29,
    "range": [
      17,
      29
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 30,
    "end": 31,
    "range": [
      30,
      31
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 36,
    "end": 42,
    "range": [
      36,
      42
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 43,
    "end": 48,
    "range": [
      43,
      48
    ]
  },
  {
    "type": "Identifier",
    "value": "publicClassInPublicModule",
    "start": 49,
    "end": 74,
    "range": [
      49,
      74
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 75,
    "end": 76,
    "range": [
      75,
      76
    ]
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 85,
    "end": 92,
    "range": [
      85,
      92
    ]
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 93,
    "end": 95,
    "range": [
      93,
      95
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 95,
    "end": 96,
    "range": [
      95,
      96
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 96,
    "end": 97,
    "range": [
      96,
      97
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 98,
    "end": 99,
    "range": [
      98,
      99
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 108,
    "end": 109,
    "range": [
      108,
      109
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 114,
    "end": 115,
    "range": [
      114,
      115
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 121,
    "end": 126,
    "range": [
      121,
      126
    ]
  },
  {
    "type": "Identifier",
    "value": "privateClassInPublicModule",
    "start": 127,
    "end": 153,
    "range": [
      127,
      153
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 154,
    "end": 155,
    "range": [
      154,
      155
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 160,
    "end": 161,
    "range": [
      160,
      161
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 167,
    "end": 172,
    "range": [
      167,
      172
    ]
  },
  {
    "type": "Identifier",
    "value": "privateClassExtendingPublicClassInModule",
    "start": 173,
    "end": 213,
    "range": [
      173,
      213
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 214,
    "end": 221,
    "range": [
      214,
      221
    ]
  },
  {
    "type": "Identifier",
    "value": "publicClassInPublicModule",
    "start": 222,
    "end": 247,
    "range": [
      222,
      247
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 248,
    "end": 249,
    "range": [
      248,
      249
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 254,
    "end": 255,
    "range": [
      254,
      255
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 260,
    "end": 265,
    "range": [
      260,
      265
    ]
  },
  {
    "type": "Identifier",
    "value": "privateClassExtendingPrivateClassInModule",
    "start": 266,
    "end": 307,
    "range": [
      266,
      307
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 308,
    "end": 315,
    "range": [
      308,
      315
    ]
  },
  {
    "type": "Identifier",
    "value": "privateClassInPublicModule",
    "start": 316,
    "end": 342,
    "range": [
      316,
      342
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 343,
    "end": 344,
    "range": [
      343,
      344
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 349,
    "end": 350,
    "range": [
      349,
      350
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 355,
    "end": 361,
    "range": [
      355,
      361
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 362,
    "end": 367,
    "range": [
      362,
      367
    ]
  },
  {
    "type": "Identifier",
    "value": "publicClassExtendingPublicClassInModule",
    "start": 368,
    "end": 407,
    "range": [
      368,
      407
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 408,
    "end": 415,
    "range": [
      408,
      415
    ]
  },
  {
    "type": "Identifier",
    "value": "publicClassInPublicModule",
    "start": 416,
    "end": 441,
    "range": [
      416,
      441
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 442,
    "end": 443,
    "range": [
      442,
      443
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 448,
    "end": 449,
    "range": [
      448,
      449
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 454,
    "end": 460,
    "range": [
      454,
      460
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 461,
    "end": 466,
    "range": [
      461,
      466
    ]
  },
  {
    "type": "Identifier",
    "value": "publicClassExtendingPrivateClassInModule",
    "start": 467,
    "end": 507,
    "range": [
      467,
      507
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 508,
    "end": 515,
    "range": [
      508,
      515
    ]
  },
  {
    "type": "Identifier",
    "value": "privateClassInPublicModule",
    "start": 516,
    "end": 542,
    "range": [
      516,
      542
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 543,
    "end": 544,
    "range": [
      543,
      544
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 565,
    "end": 566,
    "range": [
      565,
      566
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 572,
    "end": 577,
    "range": [
      572,
      577
    ]
  },
  {
    "type": "Identifier",
    "value": "privateClassExtendingFromPrivateModuleClass",
    "start": 578,
    "end": 621,
    "range": [
      578,
      621
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 622,
    "end": 629,
    "range": [
      622,
      629
    ]
  },
  {
    "type": "Identifier",
    "value": "privateModule",
    "start": 630,
    "end": 643,
    "range": [
      630,
      643
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 643,
    "end": 644,
    "range": [
      643,
      644
    ]
  },
  {
    "type": "Identifier",
    "value": "publicClassInPrivateModule",
    "start": 644,
    "end": 670,
    "range": [
      644,
      670
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 671,
    "end": 672,
    "range": [
      671,
      672
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 677,
    "end": 678,
    "range": [
      677,
      678
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 683,
    "end": 689,
    "range": [
      683,
      689
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 690,
    "end": 695,
    "range": [
      690,
      695
    ]
  },
  {
    "type": "Identifier",
    "value": "publicClassExtendingFromPrivateModuleClass",
    "start": 696,
    "end": 738,
    "range": [
      696,
      738
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 739,
    "end": 746,
    "range": [
      739,
      746
    ]
  },
  {
    "type": "Identifier",
    "value": "privateModule",
    "start": 747,
    "end": 760,
    "range": [
      747,
      760
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 760,
    "end": 761,
    "range": [
      760,
      761
    ]
  },
  {
    "type": "Identifier",
    "value": "publicClassInPrivateModule",
    "start": 761,
    "end": 787,
    "range": [
      761,
      787
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 788,
    "end": 789,
    "range": [
      788,
      789
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 810,
    "end": 811,
    "range": [
      810,
      811
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 812,
    "end": 813,
    "range": [
      812,
      813
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 815,
    "end": 824,
    "range": [
      815,
      824
    ]
  },
  {
    "type": "Identifier",
    "value": "privateModule",
    "start": 825,
    "end": 838,
    "range": [
      825,
      838
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 839,
    "end": 840,
    "range": [
      839,
      840
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 845,
    "end": 851,
    "range": [
      845,
      851
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 852,
    "end": 857,
    "range": [
      852,
      857
    ]
  },
  {
    "type": "Identifier",
    "value": "publicClassInPrivateModule",
    "start": 858,
    "end": 884,
    "range": [
      858,
      884
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 885,
    "end": 886,
    "range": [
      885,
      886
    ]
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 895,
    "end": 902,
    "range": [
      895,
      902
    ]
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 903,
    "end": 905,
    "range": [
      903,
      905
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 905,
    "end": 906,
    "range": [
      905,
      906
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 906,
    "end": 907,
    "range": [
      906,
      907
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 908,
    "end": 909,
    "range": [
      908,
      909
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 918,
    "end": 919,
    "range": [
      918,
      919
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 924,
    "end": 925,
    "range": [
      924,
      925
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 931,
    "end": 936,
    "range": [
      931,
      936
    ]
  },
  {
    "type": "Identifier",
    "value": "privateClassInPrivateModule",
    "start": 937,
    "end": 964,
    "range": [
      937,
      964
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 965,
    "end": 966,
    "range": [
      965,
      966
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 971,
    "end": 972,
    "range": [
      971,
      972
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 978,
    "end": 983,
    "range": [
      978,
      983
    ]
  },
  {
    "type": "Identifier",
    "value": "privateClassExtendingPublicClassInModule",
    "start": 984,
    "end": 1024,
    "range": [
      984,
      1024
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1025,
    "end": 1032,
    "range": [
      1025,
      1032
    ]
  },
  {
    "type": "Identifier",
    "value": "publicClassInPrivateModule",
    "start": 1033,
    "end": 1059,
    "range": [
      1033,
      1059
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1060,
    "end": 1061,
    "range": [
      1060,
      1061
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1066,
    "end": 1067,
    "range": [
      1066,
      1067
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1072,
    "end": 1077,
    "range": [
      1072,
      1077
    ]
  },
  {
    "type": "Identifier",
    "value": "privateClassExtendingPrivateClassInModule",
    "start": 1078,
    "end": 1119,
    "range": [
      1078,
      1119
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1120,
    "end": 1127,
    "range": [
      1120,
      1127
    ]
  },
  {
    "type": "Identifier",
    "value": "privateClassInPrivateModule",
    "start": 1128,
    "end": 1155,
    "range": [
      1128,
      1155
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1156,
    "end": 1157,
    "range": [
      1156,
      1157
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1162,
    "end": 1163,
    "range": [
      1162,
      1163
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1168,
    "end": 1174,
    "range": [
      1168,
      1174
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1175,
    "end": 1180,
    "range": [
      1175,
      1180
    ]
  },
  {
    "type": "Identifier",
    "value": "publicClassExtendingPublicClassInModule",
    "start": 1181,
    "end": 1220,
    "range": [
      1181,
      1220
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1221,
    "end": 1228,
    "range": [
      1221,
      1228
    ]
  },
  {
    "type": "Identifier",
    "value": "publicClassInPrivateModule",
    "start": 1229,
    "end": 1255,
    "range": [
      1229,
      1255
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1256,
    "end": 1257,
    "range": [
      1256,
      1257
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1262,
    "end": 1263,
    "range": [
      1262,
      1263
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1268,
    "end": 1274,
    "range": [
      1268,
      1274
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1275,
    "end": 1280,
    "range": [
      1275,
      1280
    ]
  },
  {
    "type": "Identifier",
    "value": "publicClassExtendingPrivateClassInModule",
    "start": 1281,
    "end": 1321,
    "range": [
      1281,
      1321
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1322,
    "end": 1329,
    "range": [
      1322,
      1329
    ]
  },
  {
    "type": "Identifier",
    "value": "privateClassInPrivateModule",
    "start": 1330,
    "end": 1357,
    "range": [
      1330,
      1357
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1358,
    "end": 1359,
    "range": [
      1358,
      1359
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1365,
    "end": 1366,
    "range": [
      1365,
      1366
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1372,
    "end": 1377,
    "range": [
      1372,
      1377
    ]
  },
  {
    "type": "Identifier",
    "value": "privateClassExtendingFromPrivateModuleClass",
    "start": 1378,
    "end": 1421,
    "range": [
      1378,
      1421
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1422,
    "end": 1429,
    "range": [
      1422,
      1429
    ]
  },
  {
    "type": "Identifier",
    "value": "privateModule",
    "start": 1430,
    "end": 1443,
    "range": [
      1430,
      1443
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1443,
    "end": 1444,
    "range": [
      1443,
      1444
    ]
  },
  {
    "type": "Identifier",
    "value": "publicClassInPrivateModule",
    "start": 1444,
    "end": 1470,
    "range": [
      1444,
      1470
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1471,
    "end": 1472,
    "range": [
      1471,
      1472
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1477,
    "end": 1478,
    "range": [
      1477,
      1478
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1483,
    "end": 1489,
    "range": [
      1483,
      1489
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1490,
    "end": 1495,
    "range": [
      1490,
      1495
    ]
  },
  {
    "type": "Identifier",
    "value": "publicClassExtendingFromPrivateModuleClass",
    "start": 1496,
    "end": 1538,
    "range": [
      1496,
      1538
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1539,
    "end": 1546,
    "range": [
      1539,
      1546
    ]
  },
  {
    "type": "Identifier",
    "value": "privateModule",
    "start": 1547,
    "end": 1560,
    "range": [
      1547,
      1560
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1560,
    "end": 1561,
    "range": [
      1560,
      1561
    ]
  },
  {
    "type": "Identifier",
    "value": "publicClassInPrivateModule",
    "start": 1561,
    "end": 1587,
    "range": [
      1561,
      1587
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1588,
    "end": 1589,
    "range": [
      1588,
      1589
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1594,
    "end": 1595,
    "range": [
      1594,
      1595
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1596,
    "end": 1597,
    "range": [
      1596,
      1597
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1599,
    "end": 1605,
    "range": [
      1599,
      1605
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1606,
    "end": 1611,
    "range": [
      1606,
      1611
    ]
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 1612,
    "end": 1623,
    "range": [
      1612,
      1623
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1624,
    "end": 1625,
    "range": [
      1624,
      1625
    ]
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 1630,
    "end": 1637,
    "range": [
      1630,
      1637
    ]
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 1638,
    "end": 1640,
    "range": [
      1638,
      1640
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1640,
    "end": 1641,
    "range": [
      1640,
      1641
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1641,
    "end": 1642,
    "range": [
      1641,
      1642
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1643,
    "end": 1644,
    "range": [
      1643,
      1644
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1649,
    "end": 1650,
    "range": [
      1649,
      1650
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1651,
    "end": 1652,
    "range": [
      1651,
      1652
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1654,
    "end": 1659,
    "range": [
      1654,
      1659
    ]
  },
  {
    "type": "Identifier",
    "value": "privateClass",
    "start": 1660,
    "end": 1672,
    "range": [
      1660,
      1672
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1673,
    "end": 1674,
    "range": [
      1673,
      1674
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1675,
    "end": 1676,
    "range": [
      1675,
      1676
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1678,
    "end": 1683,
    "range": [
      1678,
      1683
    ]
  },
  {
    "type": "Identifier",
    "value": "privateClassExtendingPublicClass",
    "start": 1684,
    "end": 1716,
    "range": [
      1684,
      1716
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1717,
    "end": 1724,
    "range": [
      1717,
      1724
    ]
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 1725,
    "end": 1736,
    "range": [
      1725,
      1736
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1737,
    "end": 1738,
    "range": [
      1737,
      1738
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1739,
    "end": 1740,
    "range": [
      1739,
      1740
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1741,
    "end": 1746,
    "range": [
      1741,
      1746
    ]
  },
  {
    "type": "Identifier",
    "value": "privateClassExtendingPrivateClassInModule",
    "start": 1747,
    "end": 1788,
    "range": [
      1747,
      1788
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1789,
    "end": 1796,
    "range": [
      1789,
      1796
    ]
  },
  {
    "type": "Identifier",
    "value": "privateClass",
    "start": 1797,
    "end": 1809,
    "range": [
      1797,
      1809
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1810,
    "end": 1811,
    "range": [
      1810,
      1811
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1812,
    "end": 1813,
    "range": [
      1812,
      1813
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1814,
    "end": 1820,
    "range": [
      1814,
      1820
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1821,
    "end": 1826,
    "range": [
      1821,
      1826
    ]
  },
  {
    "type": "Identifier",
    "value": "publicClassExtendingPublicClass",
    "start": 1827,
    "end": 1858,
    "range": [
      1827,
      1858
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1859,
    "end": 1866,
    "range": [
      1859,
      1866
    ]
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 1867,
    "end": 1878,
    "range": [
      1867,
      1878
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1879,
    "end": 1880,
    "range": [
      1879,
      1880
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1881,
    "end": 1882,
    "range": [
      1881,
      1882
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1883,
    "end": 1889,
    "range": [
      1883,
      1889
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1890,
    "end": 1895,
    "range": [
      1890,
      1895
    ]
  },
  {
    "type": "Identifier",
    "value": "publicClassExtendingPrivateClass",
    "start": 1896,
    "end": 1928,
    "range": [
      1896,
      1928
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1929,
    "end": 1936,
    "range": [
      1929,
      1936
    ]
  },
  {
    "type": "Identifier",
    "value": "privateClass",
    "start": 1937,
    "end": 1949,
    "range": [
      1937,
      1949
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1950,
    "end": 1951,
    "range": [
      1950,
      1951
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1968,
    "end": 1969,
    "range": [
      1968,
      1969
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1971,
    "end": 1976,
    "range": [
      1971,
      1976
    ]
  },
  {
    "type": "Identifier",
    "value": "privateClassExtendingFromPrivateModuleClass",
    "start": 1977,
    "end": 2020,
    "range": [
      1977,
      2020
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2021,
    "end": 2028,
    "range": [
      2021,
      2028
    ]
  },
  {
    "type": "Identifier",
    "value": "privateModule",
    "start": 2029,
    "end": 2042,
    "range": [
      2029,
      2042
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2042,
    "end": 2043,
    "range": [
      2042,
      2043
    ]
  },
  {
    "type": "Identifier",
    "value": "publicClassInPrivateModule",
    "start": 2043,
    "end": 2069,
    "range": [
      2043,
      2069
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2070,
    "end": 2071,
    "range": [
      2070,
      2071
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2072,
    "end": 2073,
    "range": [
      2072,
      2073
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2074,
    "end": 2080,
    "range": [
      2074,
      2080
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2081,
    "end": 2086,
    "range": [
      2081,
      2086
    ]
  },
  {
    "type": "Identifier",
    "value": "publicClassExtendingFromPrivateModuleClass",
    "start": 2087,
    "end": 2129,
    "range": [
      2087,
      2129
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2130,
    "end": 2137,
    "range": [
      2130,
      2137
    ]
  },
  {
    "type": "Identifier",
    "value": "privateModule",
    "start": 2138,
    "end": 2151,
    "range": [
      2138,
      2151
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2151,
    "end": 2152,
    "range": [
      2151,
      2152
    ]
  },
  {
    "type": "Identifier",
    "value": "publicClassInPrivateModule",
    "start": 2152,
    "end": 2178,
    "range": [
      2152,
      2178
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2179,
    "end": 2180,
    "range": [
      2179,
      2180
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2197,
    "end": 2198,
    "range": [
      2197,
      2198
    ]
  }
]
```
__ESTREE_TEST__:AST:
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
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "publicClassInPublicModule",
                "optional": false,
                "typeAnnotation": null,
                "start": 50,
                "end": 75
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 94,
                      "end": 96
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 99,
                        "end": 110
                      },
                      "expression": false,
                      "start": 96,
                      "end": 110
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 86,
                    "end": 110
                  }
                ],
                "start": 76,
                "end": 116
              },
              "abstract": false,
              "declare": false,
              "start": 44,
              "end": 116
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 37,
            "end": 116
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateClassInPublicModule",
              "optional": false,
              "typeAnnotation": null,
              "start": 128,
              "end": 154
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 155,
              "end": 162
            },
            "abstract": false,
            "declare": false,
            "start": 122,
            "end": 162
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateClassExtendingPublicClassInModule",
              "optional": false,
              "typeAnnotation": null,
              "start": 174,
              "end": 214
            },
            "typeParameters": null,
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "publicClassInPublicModule",
              "optional": false,
              "typeAnnotation": null,
              "start": 223,
              "end": 248
            },
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 249,
              "end": 256
            },
            "abstract": false,
            "declare": false,
            "start": 168,
            "end": 256
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateClassExtendingPrivateClassInModule",
              "optional": false,
              "typeAnnotation": null,
              "start": 267,
              "end": 308
            },
            "typeParameters": null,
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateClassInPublicModule",
              "optional": false,
              "typeAnnotation": null,
              "start": 317,
              "end": 343
            },
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 344,
              "end": 351
            },
            "abstract": false,
            "declare": false,
            "start": 261,
            "end": 351
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "publicClassExtendingPublicClassInModule",
                "optional": false,
                "typeAnnotation": null,
                "start": 369,
                "end": 408
              },
              "typeParameters": null,
              "superClass": {
                "type": "Identifier",
                "decorators": [],
                "name": "publicClassInPublicModule",
                "optional": false,
                "typeAnnotation": null,
                "start": 417,
                "end": 442
              },
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 443,
                "end": 450
              },
              "abstract": false,
              "declare": false,
              "start": 363,
              "end": 450
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 356,
            "end": 450
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "publicClassExtendingPrivateClassInModule",
                "optional": false,
                "typeAnnotation": null,
                "start": 468,
                "end": 508
              },
              "typeParameters": null,
              "superClass": {
                "type": "Identifier",
                "decorators": [],
                "name": "privateClassInPublicModule",
                "optional": false,
                "typeAnnotation": null,
                "start": 517,
                "end": 543
              },
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 544,
                "end": 567
              },
              "abstract": false,
              "declare": false,
              "start": 462,
              "end": 567
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 455,
            "end": 567
          }
        ],
        "start": 31,
        "end": 569
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 569
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "publicClassInGlobal",
        "optional": false,
        "typeAnnotation": null,
        "start": 576,
        "end": 595
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 596,
        "end": 599
      },
      "abstract": false,
      "declare": false,
      "start": 570,
      "end": 599
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "publicClassExtendingPublicClassInGlobal",
        "optional": false,
        "typeAnnotation": null,
        "start": 606,
        "end": 645
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "publicClassInGlobal",
        "optional": false,
        "typeAnnotation": null,
        "start": 654,
        "end": 673
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 674,
        "end": 677
      },
      "abstract": false,
      "declare": false,
      "start": 600,
      "end": 677
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 677
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 0,
    "end": 9,
    "range": [
      0,
      9
    ]
  },
  {
    "type": "Identifier",
    "value": "publicModuleInGlobal",
    "start": 10,
    "end": 30,
    "range": [
      10,
      30
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 31,
    "end": 32,
    "range": [
      31,
      32
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 37,
    "end": 43,
    "range": [
      37,
      43
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 44,
    "end": 49,
    "range": [
      44,
      49
    ]
  },
  {
    "type": "Identifier",
    "value": "publicClassInPublicModule",
    "start": 50,
    "end": 75,
    "range": [
      50,
      75
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 76,
    "end": 77,
    "range": [
      76,
      77
    ]
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 86,
    "end": 93,
    "range": [
      86,
      93
    ]
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 94,
    "end": 96,
    "range": [
      94,
      96
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 96,
    "end": 97,
    "range": [
      96,
      97
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 97,
    "end": 98,
    "range": [
      97,
      98
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 99,
    "end": 100,
    "range": [
      99,
      100
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 109,
    "end": 110,
    "range": [
      109,
      110
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 115,
    "end": 116,
    "range": [
      115,
      116
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 122,
    "end": 127,
    "range": [
      122,
      127
    ]
  },
  {
    "type": "Identifier",
    "value": "privateClassInPublicModule",
    "start": 128,
    "end": 154,
    "range": [
      128,
      154
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 155,
    "end": 156,
    "range": [
      155,
      156
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 161,
    "end": 162,
    "range": [
      161,
      162
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 168,
    "end": 173,
    "range": [
      168,
      173
    ]
  },
  {
    "type": "Identifier",
    "value": "privateClassExtendingPublicClassInModule",
    "start": 174,
    "end": 214,
    "range": [
      174,
      214
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 215,
    "end": 222,
    "range": [
      215,
      222
    ]
  },
  {
    "type": "Identifier",
    "value": "publicClassInPublicModule",
    "start": 223,
    "end": 248,
    "range": [
      223,
      248
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 249,
    "end": 250,
    "range": [
      249,
      250
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 255,
    "end": 256,
    "range": [
      255,
      256
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 261,
    "end": 266,
    "range": [
      261,
      266
    ]
  },
  {
    "type": "Identifier",
    "value": "privateClassExtendingPrivateClassInModule",
    "start": 267,
    "end": 308,
    "range": [
      267,
      308
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 309,
    "end": 316,
    "range": [
      309,
      316
    ]
  },
  {
    "type": "Identifier",
    "value": "privateClassInPublicModule",
    "start": 317,
    "end": 343,
    "range": [
      317,
      343
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 344,
    "end": 345,
    "range": [
      344,
      345
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 350,
    "end": 351,
    "range": [
      350,
      351
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 356,
    "end": 362,
    "range": [
      356,
      362
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 363,
    "end": 368,
    "range": [
      363,
      368
    ]
  },
  {
    "type": "Identifier",
    "value": "publicClassExtendingPublicClassInModule",
    "start": 369,
    "end": 408,
    "range": [
      369,
      408
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 409,
    "end": 416,
    "range": [
      409,
      416
    ]
  },
  {
    "type": "Identifier",
    "value": "publicClassInPublicModule",
    "start": 417,
    "end": 442,
    "range": [
      417,
      442
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 443,
    "end": 444,
    "range": [
      443,
      444
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 449,
    "end": 450,
    "range": [
      449,
      450
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 455,
    "end": 461,
    "range": [
      455,
      461
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 462,
    "end": 467,
    "range": [
      462,
      467
    ]
  },
  {
    "type": "Identifier",
    "value": "publicClassExtendingPrivateClassInModule",
    "start": 468,
    "end": 508,
    "range": [
      468,
      508
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 509,
    "end": 516,
    "range": [
      509,
      516
    ]
  },
  {
    "type": "Identifier",
    "value": "privateClassInPublicModule",
    "start": 517,
    "end": 543,
    "range": [
      517,
      543
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 544,
    "end": 545,
    "range": [
      544,
      545
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 566,
    "end": 567,
    "range": [
      566,
      567
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 568,
    "end": 569,
    "range": [
      568,
      569
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 570,
    "end": 575,
    "range": [
      570,
      575
    ]
  },
  {
    "type": "Identifier",
    "value": "publicClassInGlobal",
    "start": 576,
    "end": 595,
    "range": [
      576,
      595
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 596,
    "end": 597,
    "range": [
      596,
      597
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 598,
    "end": 599,
    "range": [
      598,
      599
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 600,
    "end": 605,
    "range": [
      600,
      605
    ]
  },
  {
    "type": "Identifier",
    "value": "publicClassExtendingPublicClassInGlobal",
    "start": 606,
    "end": 645,
    "range": [
      606,
      645
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 646,
    "end": 653,
    "range": [
      646,
      653
    ]
  },
  {
    "type": "Identifier",
    "value": "publicClassInGlobal",
    "start": 654,
    "end": 673,
    "range": [
      654,
      673
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 674,
    "end": 675,
    "range": [
      674,
      675
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 676,
    "end": 677,
    "range": [
      676,
      677
    ]
  }
]
```
